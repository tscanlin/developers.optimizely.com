---
template: inline
title: Analytics integration
anchor: technology-integrations-analytics
---
The easiest way to create a new Analytics integration is by using the [analytics integration template](https://github.com/optimizely/Analytics-JS/blob/master/analytics.js). This template is a working example of a Google Analytics integration. The only functions that need to be modified to create an integration with a different analytics tool are these:

```
/**
 * The integration object is modified to integrate with Google Analytics.
 */
window.integration = {
  /**
   * This function sets a custom variable on Google Analytics for every experiment
   * that is active on this page.The function is called for all active experiments,
   * including any redirect experiments that might have been running on a previous
   * page.
   *
   * @param {string} experimentId
   * @param {string} variationId
   */
  makeRequest: function (experimentId, variationIds) {
    var slot = 2;
    var keyValue = window.integrator.makeSendableNames(experimentId, variationIds, 255, 
    255, 255, false, "test");

    window["_gaq"].push(["_setCustomVar", slot, keyValue.key, keyValue.value, 2]);
  },

  /**
   * This function makes sure that the correct referrer value is send
   * to Google Analytics. If a redirect experiment has happend, the
   * referrer value needs to be used from the previous page. The
   * referrer value is stored in a redirect cookie. This function
   * is only called once for every page.
   */
  initialize: function () {
    window["_gaq"] = window["_gaq"] || [];

    var referrer = window.integrator.redirect.getRedirectReferrer();
    if (referrer !== null) {
      window["_gaq"].push(['_setReferrerOverride', referrer]);
    }
  }
};
```

The template takes care of:

 * Retrieving all running experiments and their variations form the `optimizely.variationIdsMap` function and determine if you are looking at a page was the result of a redirect experiment. In most cases, the experiment doesn't run on the page where you are redirected to, so a redirect experiment can only be detected by looking at a redirect cookie that Optimizely sets right before a redirect occurs.  
Code:

``` 
/**
 * Returns an array of Experiment IDs active on the page, as well as includes the ID of the experiment of the
 * experiment that might have redirected the user to the page
 * @return {Array.<string>}
 */
getRelevantExperimentIds = function () {
  var exps = optimizely.variationIdsMap || [];
  // Grab the variation id from the cookie if present
  var redirectVariationId = this.redirect.getRedirectVariationId();
  if (redirectVariationId) {
    exps[(this.getExperimentId(redirectVariationId))] = [redirectVariationId];
  }
  return exps;
};
```
 * Abstracting the original referrer url before a redirect happened from the redirect cookie. This can be used to correct information in your analytics tool (see GA example).
 
```
redirect = {
  REDIRECT_COOKIE_NAME: "optimizelyRedirect",
  REFERRER_REDIRECT_COOKIE_NAME: "optimizelyReferrer",
  /**
   * Pull the variation Id out of the cookie before it expires.
   */
  initializeRedirectVariationId: function () {
    var redirectCookie = this.getRedirectCookie() || "|";
    this.variationId = redirectCookie.split("|")[0];
  },
  /**
   * Referrer cookie is set by redirect.setReferrerCookie before a redirect.
   * This info must override third party referrers on redirected URL even
   * if no experiment is running.
   *
   * Note: calling this function twice won't do any harm, because it clears
   * the redirect cookie after the first time.
   */
  initializeRedirectReferrerUrl: function () {
    var referrer = this.cookie.get(this.REFERRER_REDIRECT_COOKIE_NAME);

    if (referrer !== null) {
      redirect.referrer = referrer.length == 0 ? '' : referrer;
      this.cookie.set(REFERRER_REDIRECT_COOKIE_NAME, "");
    }
  },
  /**
   * Pulls all data from the redirect cookie.
   */
  initializeRedirect: function () {
    this.initializeRedirectReferrerUrl();
    this.initializeRedirectVariationId();
  },
  /**
   * Returns cookie
   * @return {<cookie>}
   */
  getRedirectCookie: function () {
    return this.cookie.get(this.REDIRECT_COOKIE_NAME);
  },
  /**
   * Returns the variationId read from the redirect cookie.
   * @returns {string} variationId
   */
  getRedirectVariationId: function () {
    return this.variationId;
  },
  /**
   * Returns the referrer read from the referrer cookie.
   * @returns {String} variationId
   */
  getRedirectReferrer: function () {
    return this.referrer;
  }
};
``` 
 * Creating sendable names based on integration specific paramters. It makes sure that information that is being send is not too long and doesn't contain any invalid characters.
 
```
/**
 * Returns the name of the experiment and the name of the variation, both
 * with cleaned up characters and reduced length.  This processing is needed
 * before sending the data to external analytics services.
 *
 * Since Google Analytics, KissMetrics, and other services have different
 * max lengths, the experiment name length, variation name length, and
 * multivariate variation name length are all passed as additional parameters.
 *
 * @param {string} experimentId
 * @param {Array} variationsIds
 * @param {number} expLength
 * @param {number} varLength
 * @param {number} mvtVarLength
 * @param {boolean} makeClean
 * @param {string} prefix
 */
makeSendableNames = function (experimentId, variationIds,
                             expLength, varLength, mvtVarLength,
                             makeClean, prefix) {
  var cleanSegmentString = function (input, maxLength) {
    return input.replace(/[^a-zA-Z0-9\.\~\!\*\(\)\']+/g, "_").substring(0, maxLength);
  };
  var expName = prefix + window.optimizely.data.experiments[experimentId].name;

  var varName;
  var varNamesArray = [];
  for (var i = 0; i < variationIds.length; i++) {
    var variationId = variationIds[i];
    varNamesArray.push(window.optimizely.data.variations[variationId].name);
  }
  if (variationIds.length > 1) {
    varNamesArray = $.map(varNamesArray, (function (str) {
      return str.substr(0, mvtVarLength - 1);
    }));
    varName = varNamesArray.join("~");
  } else {
    varName = varNamesArray[0];
  }

  if (makeClean) {
    expName = cleanSegmentString(expName, expLength);
    varName = cleanSegmentString(varName.replace("#", ""), varLength);
  } else {
    expName = expName.substring(0, expLength);
    varName = varName.substring(0, varLength);
  }

  return {
    'key': expName,
    'value': varName
  };
};
```