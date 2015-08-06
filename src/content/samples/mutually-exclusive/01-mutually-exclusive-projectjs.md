
---
template: inline
title: Tagging Experiment Names (Requires ProjectJS)
anchor: mutually-exclusive-projectjs
js: |

  /*
   * Usage
   *	
   *	Place this code in Project JS.
   *	This code randomly selects either one experiment marked with an [ME], one experiment from each group 
   *	denominated with [Group_A] where A is any character the user wishes to use. The code is evaluated 
   *	before url targeting and audiencing.
   *
   *	The way it works is:
   * 
   *	- Let's say we have 3 groups with 3 experiments in each group, 3 experiments marked with an [ME], and 
   *	5 experiments not marked with a [Group_X] or an [ME].
   *
   *	[Group_A] Exp 1, [Group_A] Exp 2, [Group_A] Exp 3, [Group_A] holdout
   *	[Group_B] Exp 4, [Group_B] Exp 5, [Group_B] Exp 6, [Group_B] holdout
   *	[Group_C] Exp 7, [Group_C] Exp 8, [Group_C] Exp 9, [Group_C] holdout
   *	[ME] Exp 10, [ME] Exp 11, [ME] Exp 12, [ME] holdout
   *
   *	- First evaluate whether none of the experiments will be picked. There is a 5% chance 
   *	for this condition and its called a global holdout as designated by the '[ME] holdout'
   *	- The code then pick a random number, if that number corresponds to the position of 
   *	an element marked with [ME], it disable all other experiments in the project
   *	- If that number is not an [ME], it then go through each group and randomly select 
   *	an experiment from each
   *	- Each group can have a holdout which would act as a baseline for that experiment and group
   * 	- After all experiments are picked, we update the buckets by disabling all experiments that 
   *	weren't picked
   *
   *	You can use the ?optimizely_exclusive_force=EXPERIMENTID to force yourself into a variation
   */

  function getParameterByName(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var o=new RegExp("[\\?&]"+e+"=([^&#]*)"),n=o.exec(location.search);return null===n?"":decodeURIComponent(n[1].replace(/\+/g," "))}function getRunningExperiments(){var e=[];for(var o in DATA.experiments){var n=DATA.experiments[o];n.enabled&&-1===window.location.search.indexOf("x"+o)&&e.push(o)}return window.running=e,e}function getRunningExclusiveExperiments(e){var o=[];for(var n in DATA.experiments){var r=DATA.experiments[n];if(r.enabled&&-1===window.location.search.indexOf("x"+n)){var t=DATA.experiments[n].name.toLowerCase().indexOf("[Group_".toLowerCase()),i=DATA.experiments[n].name.toLowerCase().indexOf("[ME]".toLowerCase());t>-1&&e||i>-1&&e?o.push(n):-1!=t||-1!=i||e||o.push(n)}}return e?window.running_exclusive=o:window.running_non_exclusive=o,o}function expArrayToJSON(e,o,n){var r={};if(n)for(var t in e)t!=o&&e[t].name.toLowerCase().indexOf("[EXCLUSIVE]".toLowerCase())>-1&&(r[t]="0");else for(var t in e)t!=o&&(r[t]="0");return r}function log(e){window.log_arr=window.log_arr||[],window.log_arr.push(e)}function groupFlow(e,o){for(var n in o.groups){var r=o.groups[n];if(r.holdout!==!1&&Math.floor(100*Math.random())>90)e.push(r.holdout);else{var t=Math.floor(Math.random()*(r.exps.length+r.me.length));t<r.exps.length?e=e.concat(r.exps):e.push(r.me[t-r.exps.length])}}return e}function pickExperiment(e){var o=location.hostname.split(".");o="."+o[o.length-2]+"."+o[o.length-1];var n={allExp:getRunningExclusiveExperiments(!0)},r={allExp:getRunningExclusiveExperiments(!1)},t=[];if(n=sortGroups(n),n.allExp.indexOf(e)>-1||r.allExp.indexOf(e)>-1)t.push(e);else if(void 0!==n.me&&void 0!==n.me.holdout&&Math.floor(100*Math.random())>95)t.push(n.me.holdout);else if(void 0===n.groups)t.push(n.me.exps[Math.floor(Math.random()*n.me.exps.length)]);else if(void 0===n.me)t=groupFlow(t,n);else{var i=n.allExp.length-n.me.exps.length;Math.floor(Math.random()*n.allExp.length)<i?t=groupFlow(t,n):t.push(n.me.exps[Math.floor(Math.random()*n.me.exps.length)])}return t=t.concat(r.allExp),docCookies.setItem("optimizelyExp",t,1728e8,"/",o),t}function sortGroups(e){for(var o=0;o<e.allExp.length;o++){var n=DATA.experiments[e.allExp[o]],r=n.name.toLowerCase();r.indexOf("group_")>-1?(void 0===e.groups&&(e.groups={}),void 0===e.groups[r.charAt(7)]&&(e.groups[r.charAt(7)]={holdout:!1,me:[],exps:[]}),r.indexOf("holdout")>-1?e.groups[r.charAt(7)].holdout=e.allExp[o]:r.indexOf("me")>-1?e.groups[r.charAt(7)].me.push(e.allExp[o]):e.groups[r.charAt(7)].exps.push(e.allExp[o])):(void 0===e.me&&(e.me={holdout:!1,exps:[]}),r.indexOf("holdout")>-1?e.me.holdout=e.allExp[o]:e.me.exps.push(e.allExp[o]))}return e}function updateBuckets(e){window.optimizely=window.optimizely||[],log("Mutual exclusion chose experiment "+e);for(var o in DATA.experiments)-1===e.indexOf(o)&&-1===window.location.search.indexOf("x"+o)?(DATA.experiments[o].enabled=!1,log("Disable experiment "+o)):console.log("Active - "+o+": "+DATA.experiments[o].name)}var docCookies={getItem:function(e){return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null},setItem:function(e,o,n,r,t,i){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var p="";if(n)switch(n.constructor){case Number:p=1/0===n?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+n;break;case String:p="; expires="+n;break;case Date:p="; expires="+n.toUTCString()}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(o)+p+(t?"; domain="+t:"")+(r?"; path="+r:"")+(i?"; secure":""),!0},removeItem:function(e,o,n){return e&&this.hasItem(e)?(document.cookie=encodeURIComponent(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(n?"; domain="+n:"")+(o?"; path="+o:""),!0):!1},hasItem:function(e){return new RegExp("(?:^|;\\s*)"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){for(var e=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),o=0;o<e.length;o++)e[o]=decodeURIComponent(e[o]);return e}};if(window.print_log=function(){window.log_arr=window.log_arr||[],console.log(window.log_arr.join("\n "))},"undefined"!=typeof DATA){var force_exp=getParameterByName("optimizely_exclusive_force"),exp=docCookies.getItem("optimizelyExp");if(null!==exp&&exp.indexOf(",")>-1){exp=exp.split(",");for(var i=0;i<exp.length;i++)if(!DATA.experiments.hasOwnProperty(exp[i])||!DATA.experiments[exp[i]].enabled)var exp=pickExperiment(force_exp)}else if(!exp||!DATA.experiments.hasOwnProperty(exp)||!DATA.experiments[exp].enabled||""!=force_exp)var exp=pickExperiment(force_exp);window.opt_expid=exp,updateBuckets(exp)}
---

This code allows you to bucket users into different experiments that would otherwise all run simultaneously. Implementing mutually exclusive code does REDUCE the amount of users exposed to each experiment tagged with a mutually exclusive tag. 

If you don't currently have ProjectJS in your account, you can upgrade! Get more information at https://help.optimizely.com/hc/en-us/articles/200040055#switching

Helpful Tips:
* Use the same url targeting and audiences in experiments that are in the same group
* Tag mutually exclusive experiments within each group with an ME in the tag: [Group_X_ME]
* Tag experiments that are run sitewide that affect other experiments with [ME] to disallow any group experiments from running
* Run a holdout experiment in group tags and me tags to maintain a baseline: [Group_X] holdout or [ME] holdout