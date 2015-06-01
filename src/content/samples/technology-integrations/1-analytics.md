---
template: inline
title: Analytics integration
anchor: technology-integrations-analytics
---

    /**
     * Implement this function to send data to a Analytics provider
     * @param {string} experimentId
     * @param {string} variationId
     */
    window.makeAnalyticsRequest = function (experimentId, variationIds) {
        console.log(experimentId + " - " + variationIds);
        console.log(makeSendableNames(experimentId, variationIds, 255, 255, 255, false, "test"));

    };

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
     * @private
     */
    window.makeSendableNames = function (experimentId, variationIds,
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


    window.integrator = {
        redirect: {
            REDIRECT_COOKIE_NAME: "optimizelyRedirect",
            /**
             * :: cookies.js ::  
             *
             * A complete cookies reader/writer framework with full unicode support.
             *
             * Revision #1 - September 4, 2014
             *
             * https://developer.mozilla.org/en-US/docs/Web/API/document.cookie
             * https://developer.mozilla.org/User:fusionchess
             *
             * This framework is released under the GNU Public License, version 3 or later.
             * http://www.gnu.org/licenses/gpl-3.0-standalone.html
             *
             * Syntaxes:
             *
             * * docCookies.setItem(name, value[, end[, path[, domain[, secure]]]])
             * * docCookies.getItem(name)
             * * docCookies.removeItem(name[, path[, domain]])
             * * docCookies.hasItem(name)
             * * docCookies.keys()
             */
            cookie: {
                get: function (sKey) {
                    if (!sKey) {
                        return null;
                    }
                    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
                },
                set: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
                    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
                        return false;
                    }
                    var sExpires = "";
                    if (vEnd) {
                        switch (vEnd.constructor) {
                            case Number:
                                sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
                                break;
                            case String:
                                sExpires = "; expires=" + vEnd;
                                break;
                            case Date:
                                sExpires = "; expires=" + vEnd.toUTCString();
                                break;
                        }
                    }
                    document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
                    return true;
                },
                remove: function (sKey, sPath, sDomain) {
                    if (!this.has(sKey)) {
                        return false;
                    }
                    document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
                    return true;
                },
                has: function (sKey) {
                    if (!sKey) {
                        return false;
                    }
                    return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
                },
                keys: function () {
                    var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
                    for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) {
                        aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
                    }
                    return aKeys;
                }
            },
            /**
             * Pull the variation Id out of the cookie before it expires.
             */
            initializeRedirectVariationId: function () {
                var redirectCookie = this.getRedirectCookie() || "|";
                this.variationId = redirectCookie.split("|")[0];
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
                this.initializeRedirectVariationId();
                return this.variationId;
            }

        },
        /**
         * Returns an array of Experiment IDs active on the page, as well as includes the ID of the experiment of the experiment that might have redirected the user to the page
         * @return {Array.<string>}
         */
        getRelevantExperimentIds: function () {
            var activeExperimentIds = window.optimizely.data.state.activeExperiments;
            var exps = optimizely.variationIdsMap || [];
            // Grab the variation id from the cookie if present
            var redirectVariationId = this.redirect.getRedirectVariationId();
            if (redirectVariationId) {
                exps[(this.getExperimentId(redirectVariationId))] = [redirectVariationId];
            }
            return exps;
        },
        /**
         * Returns Experiment ID from variation ID
         * @returns {string} experimentId
         */
        getExperimentId: function (variationId) {
            var experimentId;
            for (var expId in optimizely.data.experiments) {
                var exp = optimizely.data.experiments[expId];
                if (exp.variation_ids.indexOf(variationId) > -1) {
                    experimentId = expId;
                    break;
                }
            }
            return experimentId;
        },
        registerCallback: function (func) {
            var exps = this.getRelevantExperimentIds();
            for (var expId in exps) {
                func(expId, exps[expId]);
            }
        }



    };

    (function (a, b, c, d) {
        if (a.data) {
            c.registerCallback(d);
        } else {
            if (b && b.error) {
                b.error("Optimizely was not loaded when analytics tried to reference Optimizely related variables. Please guarantee that this script is executed after Optimizely is loaded on the page.")
            }
        }

    })(window.optimizely, window.console, window.integrator, window.makeAnalyticsRequest);

