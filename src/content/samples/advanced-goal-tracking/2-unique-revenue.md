---
template: inline
title: Unique revenue
anchor: unique-revenue
js: |
  //Unique Revenue Object

     /*  NOTES:
     The top section is a sample object to pass into OptimizelyRevenueTracker
     @param {Array of Strings} experimentIds - an array of experimentId strings
     @param {String} eventName - the eventName to be passed with the revenue tracking call (2nd parameter)
     @param {Function} revenueGetter - a function that returns the revenue value
     @param {Function} orderIdGetter - a function that returns the order Id for de-duplication
    */

    var opt = {
        'experimentIds': ['123', '456', '789'], //array of experimentId strings
        'eventName': "custom_event",
        'revenueGetter': function() {
            return 100;
        },
        'orderIdGetter': function() {
            return 1001001;
        }
    }

    OptimizelyRevenueTracker = function(options) {
        var me = this;
        this.isValid = false;
        this.experimentIds = options['experimentIds'] || '';
        this.eventName = options['eventName'] || '';
        this.revenueGetter = options['revenueGetter'] || null;
        this.orderIdGetter = options['orderIdGetter'] || null;
        this.segments = options['segments'] || {};
     
        this.fn = {
            //needs work re: variable types
            dedupeRevByOrderId: function() {
                var deduperName = 'optimizely_orderIdUsed', 
                deduperVal = me.helper.getStorageItem('orderIdUsed') || null,
                orderID = me.orderIdGetter();
                console.log(deduperVal, orderID);

                if (typeof deduperVal == 'object') {
                    this.trackEvent(me.eventName);
                    deduperVal = orderID;
                    me.helper.setStorageItem(deduperName, deduperVal);
                } else if (deduperVal.indexOf(orderID) === -1) {
                    this.trackEvent(me.eventName);
                    deduperVal = deduperVal + '_' + orderID;
                    me.helper.setStorageItem(deduperName, deduperVal);
                }
            },
            trackEvent: function(eventName) {
                var generateOptlyUserId = function() {
                    if (me.helper.getCookie('optimizelyPPID')) {
                        var userId = me.helper.getCookie('optimizelyPPID');
                    } else if (me.helper.getCookie('optimizelyEndUserId')) {
                        var userId = me.helper.getCookie('optimizelyEndUserId');
                    }
                    return userId;
                }
                var generateOptlyExperimentParams = function() {
                    var optimizelyBucketsExps = document.cookie.match('optimizelyBuckets=([^;]*)');
                    var decodedBuckets = decodeURIComponent(optimizelyBucketsExps[1]);
                    var bucketPairs = JSON.parse(decodedBuckets)
                    var experimentParameter = '';
                    for (var expID in bucketPairs) {
                        if (me.experimentIds != '' &&  me.experimentIds.indexOf(expID) > -1 && expID != 0) {
                            experimentParameter += '&x' + expID + '=' + bucketPairs[expID];
                        } else if (me.experimentIds == '') {
                            experimentParameter += '&x' + expID + '=' + bucketPairs[expID];
                        }
                    }
                    return experimentParameter;
                }
                var generateOptlySegmentParams = function() {
                    var optimizelySegments = document.cookie.match('optimizelySegments=([^;]*)');
                    var decodedSegments = decodeURIComponent(optimizelySegments[1]);
                    var segmentPairs = JSON.parse(decodedSegments);
                    var segmentParameter = '';
                    for (var segID in segmentPairs) {
                        segmentParameter += '&s' + segID + '=' + segmentPairs[segID];
                    }
                    return segmentParameter;
                }
                var generateRevenueParam = function() {
                    if (me.revenueGetter) {
                        return '&v=' + me.revenueGetter();
                    }
                    return '';
                }

                var optimizely_GET = window.location.protocol + '//' + window.optimizely.getProjectId() +
                                                '.log.optimizely.com/event?' +
                                                'a=' + window.optimizely.getProjectId() +
                                                '&u=' + generateOptlyUserId() +
                                                generateOptlyExperimentParams() +
                                                generateOptlySegmentParams() +
                                                '&n=' + eventName +
                                                generateRevenueParam() +
                                                '&wxhr=true';
                try {
                var xhr = new XMLHttpRequest();
                  if ('withCredentials' in xhr) {
                  xhr.open('GET', optimizely_GET, true);
                  xhr.withCredentials = true;
                  xhr.send();
                  return;
                  }
            } catch (err) { 
                // XHR not supported 
            window.optimizely.customLog = window.optimizely.customLog || [];
            window.optimizely.customLog.push(err);
            window.optimizely.customLog.push('XHR Not Supported - Sending Image Log Call');
            }

            var image = new Image();
            path = optimizely_GET.replace('&wxhr=true', '');
            image.src = path;

            this.images = this.images || [];
            this.images.push(image);
            } 
        }

        //make sure options argument contains proper information
        this.validate = function () {
            if (typeof this.revenueGetter == 'function' && typeof this.orderIdGetter == 'function') 
                this.isValid = true;
        };
        this.validate();

        if (this.isValid == true) {
            this.fn.dedupeRevByOrderId();
        }
    }

    //Library of helper functions defined in prototype
    OptimizelyRevenueTracker.prototype.helper = {
        optlyLog: function(message) {
            window.optimizelyLog = window.optimizelyLog || [];
            window.optimizelyLog.push(message);
        },
        getStorageItem: function(key) {
            return window.sessionStorage.getItem(key);
        },
        setStorageItem: function(key, value) {
            window.sessiontorage.setItem(key, value);
        },
        getCookie: function(name) {
            var match = document.cookie.match(name+"=([^;]*)");
            return match ? match[1] : undefined;
        },
        setCookie: function(name, value, domain, age) {
            var futureDate = new Date(+new Date() + age * 1000);
        var parts = [
                name, '=', encodeURIComponent(value),
                  '; domain=.', domain,
                  '; path=/',
                  '; expires=', futureDate.toUTCString(),
                  ';'
              ];
        console.log(parts.join(''));
        document.cookie = parts.join('');
        },  
        getQueryParam: function(name) {
            var match = window.location.search.match(name + "=([^&]*)");
            return match ? match[1] : undefined;
        },
        getJsVariable: function(name) {
            if (typeof name != undefined) {
                return name;
          } else {
            setTimeout(getJsVariable, 50);
          }
        }
    }   
---
Typically, you want to track revenue after your checkout or billing detail form has been successfully submitted to avoid sending revenue totals to Optimizely for invalid purchases. Additionally, you want to avoid triggering the Revenue goal on the click of a button. This is because a visitor may click the button several times due to validation errors, and the revenue total would be sent to Optimizely on each click.
