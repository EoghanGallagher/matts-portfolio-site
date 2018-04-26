if (self.CavalryLogger) { CavalryLogger.start_js(["np5Vl"]); }

__d("ScriptPathState",["Arbiter"],(function(a,b,c,d,e,f){__p&&__p();var g,h,i,j,k=100,l={setIsUIPageletRequest:function(a){i=a},setUserURISampleRate:function(a){j=a},reset:function(){g=null,h=!1,i=!1},_shouldUpdateScriptPath:function(){return h&&!i},_shouldSendURI:function(){return Math.random()<j},getParams:function(){var a={};l._shouldUpdateScriptPath()?l._shouldSendURI()&&g!==null&&(a.user_uri=g.substring(0,k)):a.no_script_path=1;return a}};b("Arbiter").subscribe("pre_page_transition",function(a,b){h=!0,g=b.to.getUnqualifiedURI().toString()});e.exports=a.ScriptPathState=l}),null);
__d("goOrReplace",[],(function(a,b,c,d,e,f){function a(a,b,c){c?a.replace(b):a.href==b?a.reload():a.href=b}e.exports=a}),null);
__d("AjaxPipeRequest",["invariant","Arbiter","AsyncRequest","AsyncRequestConfig","BigPipe","ContextualComponent","CSS","DOM","Env","PageEvents","PageletSet","PageNavigationStageLogger","ScriptPathState","URI","containsNode","ge","goOrReplace","PageletGK","performanceAbsoluteNow","performance"],(function(a,b,c,d,e,f,g){__p&&__p();var h=b("PageletGK").destroyDomAfterEventHandler,i=void 0,j=0;function k(a,c){__p&&__p();var d=b("ge")(a);if(!d)return;c||(d.style.minHeight="100px");c=b("PageletSet").getPageletIDs();for(var e=0;e<c.length;e++){var f=c[e];if(b("PageletSet").hasPagelet(f)){var g=b("PageletSet").getPagelet(f);b("containsNode")(d,g.getRoot())&&b("PageletSet").removePagelet(f)}}b("Arbiter").inform(b("PageEvents").AJAXPIPE_ONBEFORECLEARCANVAS,{canvasID:a});function i(a){var c=b("ContextualComponent").forNode(a);c&&c.unmount();b("DOM").empty(a)}h?(b("Arbiter").inform("pagelet/destroy",{id:null,root:d}),i(d)):(i(d),b("Arbiter").inform("pagelet/destroy",{id:null,root:d}))}function l(a,c){a=b("ge")(a);a&&!c&&(a.style.minHeight="100px")}function c(a,c,d){"use strict";this._allowIrrelevantRequests=!1,this._canvas_id=a,this._uri=c,this._query_data=d,this._request=new(b("AsyncRequest"))(),this._request.disableInteractionServerTracing(),this._allow_cross_page_transition=!0,this._arbiter=new(b("Arbiter"))(),this._requestID=j++}c.prototype.getArbiter=function(){"use strict";return this._arbiter};c.prototype.setData=function(a){"use strict";this._query_data=a;return this};c.prototype.getData=function(){"use strict";return this._query_data};c.prototype.setAllowCrossPageTransition=function(a){"use strict";this._allow_cross_page_transition=a;return this};c.prototype.setAppend=function(a){"use strict";this._append=a;return this};c.prototype._getAsyncRequestType=function(){"use strict";return b("AsyncRequestConfig").useFetchStreamAjaxPipeTransport?"useFetchWithIframeFallback":"useIframeTransport"};c.prototype.send=function(){"use strict";__p&&__p();this._arbiter.inform(b("PageEvents").AJAXPIPE_SEND,{rid:this._requestID,quickling:!!this._isQuickling,ts:b("performanceAbsoluteNow")()},b("Arbiter").BEHAVIOR_PERSISTENT);var a={ajaxpipe:1,ajaxpipe_token:b("Env").ajaxpipe_token};Object.assign(a,b("ScriptPathState").getParams());b("ScriptPathState").reset();var c=this._request;if(c==null)return this;c.setOption(this._getAsyncRequestType(),!0).setURI(this._uri).setData(Object.assign(a,this._query_data)).setPreBootloadHandler(this._preBootloadHandler.bind(this)).setInitialHandler(this._onInitialResponse.bind(this)).setHandler(this._onResponse.bind(this)).setMethod("GET").setReadOnly(!0).setAllowCrossPageTransition(this._allow_cross_page_transition).setAllowIrrelevantRequests(this._allowIrrelevantRequests);this._automatic?this._relevantRequest=i:i=this._request;if(this._isQuickling){a=b("performance").clearResourceTimings||b("performance").webkitClearResourceTimings;a&&a.call(b("performance"))}c.send();return this};c.prototype._preBootloadFirstResponse=function(a){"use strict";return!1};c.prototype._fireDomContentCallback=function(){"use strict";var a=this._request;a&&a.cavalry&&a.cavalry.setTimeStamp("t_domcontent");this._arbiter.inform(b("PageEvents").AJAXPIPE_DOMREADY,!0,b("Arbiter").BEHAVIOR_STATE)};c.prototype._fireOnloadCallback=function(){"use strict";window.console&&console.timeStamp&&console.timeStamp('perf_trace {"name": "e2e", "parent": "PageEvents.AJAXPIPE_ONLOAD"}');var a=this._request;a!=null&&a.cavalry&&(a.cavalry.setTimeStamp("t_hooks"),a.cavalry.setTimeStamp("t_layout"),a.cavalry.setTimeStamp("t_onload"));this._arbiter.inform(b("PageEvents").AJAXPIPE_ONLOAD,{lid:this.pipe.lid,rid:this._requestID,ts:b("performanceAbsoluteNow")()},b("Arbiter").BEHAVIOR_STATE)};c.prototype._isRelevant=function(a){"use strict";return this._request===i||this._automatic&&this._relevantRequest===i||this._jsNonBlock||i!=null&&i.getAllowIrrelevantRequests()};c.prototype._preBootloadHandler=function(a){"use strict";var c=this._request,d=a.getPayload();if(!d||d.redirect||!this._isRelevant(a))return!1;var e=!1;a.is_first&&(!this._append&&!this._displayCallback&&k(this._canvas_id,this._constHeight),e=this._preBootloadFirstResponse(a),c!=null||g(0),this.pipe=new(b("BigPipe"))({config:d.bigPipeConfig,arbiter:this._arbiter,rootNodeID:this._canvas_id,lid:c.lid,rid:this._requestID,isAjax:!0,domContentCallback:this._fireDomContentCallback.bind(this),onloadCallback:this._fireOnloadCallback.bind(this),domContentEvt:b("PageEvents").AJAXPIPE_DOMREADY,onloadEvt:b("PageEvents").AJAXPIPE_ONLOAD,jsNonBlock:this._jsNonBlock,automatic:this._automatic,displayCallback:this._displayCallback,allowIrrelevantRequests:this._allowIrrelevantRequests}));return e};c.prototype._redirect=function(c){"use strict";__p&&__p();if(c.redirect){if(c.force||!this.isPageActive(c.redirect)){var d=["ajaxpipe","ajaxpipe_token"].concat(this.getSanitizedParameters());b("PageNavigationStageLogger").setCookieForNavigation(c.redirect);b("PageNavigationStageLogger").setNote("ajaxpipe_redirect");b("PageNavigationStageLogger").updateCookie();b("goOrReplace")(window.location,new(b("URI"))(c.redirect).removeQueryData(d),!0)}else{d=a.PageTransitions;d.go(c.redirect,!0)}return!0}else return!1};c.prototype.isPageActive=function(a){"use strict";return!0};c.prototype.getSanitizedParameters=function(){"use strict";return[]};c.prototype._versionCheck=function(a){"use strict";return!0};c.prototype._onInitialResponse=function(a){"use strict";var b=a.getPayload();if(!this._isRelevant(a))return!1;if(!b)return!0;return this._redirect(b)||!this._versionCheck(b)?!1:!0};c.prototype._processFirstResponse=function(a){"use strict";this._arbiter.inform(b("PageEvents").AJAXPIPE_FIRST_RESPONSE,{lid:this.pipe.lid,quickling:!!this._isQuickling});a=a.getPayload();var c=b("ge")(this._canvas_id);a=a.canvas_class;c!=null&&a!=null&&b("CSS").setClass(c,a)};c.prototype.setFirstResponseCallback=function(a){"use strict";this._firstResponseCallback=a;return this};c.prototype.setFirstResponseHandler=function(a){"use strict";this._processFirstResponse=a;return this};c.prototype._onResponse=function(a){"use strict";__p&&__p();var c=a.payload;if(!this._isRelevant(a))return b("AsyncRequest").suppressOnloadToken;a.is_first&&(this._processFirstResponse(a),this._firstResponseCallback&&this._firstResponseCallback(),c.provides=c.provides||[],c.provides.push("uipage_onload"));if(c){if("content"in c.content){this._append&&(c.append=this._canvas_id);var d=c.content.content;delete c.content.content;c.content[this._canvas_id]=d}this.pipe.onPageletArrive(c)}a.is_last&&l(this._canvas_id,this._constHeight);return b("AsyncRequest").suppressOnloadToken};c.prototype.setNectarModuleDataSafe=function(a){"use strict";this._request!=null&&this._request.setNectarModuleDataSafe(a);return this};c.prototype.setFinallyHandler=function(a){"use strict";this._request!=null&&this._request.setFinallyHandler(a);return this};c.prototype.setErrorHandler=function(a){"use strict";this._request!=null&&this._request.setErrorHandler(a);return this};c.prototype.setTransportErrorHandler=function(a){"use strict";this._request!=null&&this._request.setTransportErrorHandler(a);return this};c.prototype.setResetHandler=function(a){"use strict";this._resetHandler=a;return this};c.prototype.abort=function(){"use strict";this._request!=null&&this._request.abort();this._reset();return this};c.prototype.abandon=function(){"use strict";this._request!=null&&this._request.abandon();this._reset();return this};c.prototype._reset=function(){"use strict";i==this._request&&(i=null),this._request=null,this._resetHandler&&this._resetHandler()};c.prototype.setJSNonBlock=function(a){"use strict";this._jsNonBlock=a;return this};c.prototype.setAutomatic=function(a){"use strict";this._automatic=a;return this};c.prototype.setDisplayCallback=function(a){"use strict";this._displayCallback=a;return this};c.prototype.setConstHeight=function(a){"use strict";this._constHeight=a;return this};c.prototype.setAllowIrrelevantRequests=function(a){"use strict";this._allowIrrelevantRequests=a;return this};c.prototype.getAsyncRequest=function(){"use strict";return this._request};c.getCurrentRequest=function(){"use strict";return i};c.setCurrentRequest=function(a){"use strict";i=a};e.exports=c}),null);
__d("UIPageletContentCache",[],(function(a,b,c,d,e,f){a={cache:{},getContent:function(a){return a in this.cache?this.cache[a]:null},setContent:function(a,b){this.cache[a]=b}};e.exports=a}),null);
__d("UIPagelet",["ActorURI","AjaxPipeRequest","AsyncRequest","DOM","HTML","ScriptPathState","UIPageletContentCache","URI","emptyFunction","ge","isElementNode"],(function(a,b,c,d,e,f){__p&&__p();function g(a,c,d){"use strict";__p&&__p();var e=a&&b("isElementNode")(a)?a.id:a;this._id=e||null;this._element=b("ge")(a||b("DOM").create("div"));this._src=c||null;this._context_data=d||{};this._data={};this._handler=b("emptyFunction");this._request=null;this._use_ajaxpipe=!1;this._use_post_request=!1;this._is_bundle=!0;this._allow_cross_page_transition=!1;this._append=!1;this._cache_content=!1;this._content_cache_key=""}g.prototype.getElement=function(){"use strict";return this._element};g.prototype.setHandler=function(a){"use strict";this._handler=a;return this};g.prototype.go=function(a,b){"use strict";arguments.length>=2||typeof a=="string"?(this._src=a,this._data=b||{}):arguments.length==1&&(this._data=a);this.refresh();return this};g.prototype.setAllowCrossPageTransition=function(a){"use strict";this._allow_cross_page_transition=a;return this};g.prototype.setBundleOption=function(a){"use strict";this._is_bundle=a;return this};g.prototype.setErrorHandler=function(a){"use strict";this._errorHandler=a;return this};g.prototype.setTransportErrorHandler=function(a){"use strict";this.transportErrorHandler=a;return this};g.prototype.refresh=function(){"use strict";__p&&__p();if(this._use_ajaxpipe)b("ScriptPathState").setIsUIPageletRequest(!0),this._request=new(b("AjaxPipeRequest"))(this._id,this._src),this._request.setAppend(this._append).setConstHeight(this._constHeight).setJSNonBlock(this._jsNonblock).setAutomatic(this._automatic).setDisplayCallback(this._displayCallback).setFinallyHandler(this._finallyHandler),this._errorHandler&&this._request.setErrorHandler(this._errorHandler),this.transportErrorHandler&&this._request.setTransportErrorHandler(this.transportErrorHandler),this._allowIrrelevantRequests!=null&&this._request.setAllowIrrelevantRequests(this._allowIrrelevantRequests);else{if(this._cache_content){var a=b("UIPageletContentCache").getContent(this._content_cache_key);if(a!==null){this.handleContent(a);return this}}var c=function(a){this._request=null;a=b("HTML")(a.getPayload());this.handleContent(a);this._cache_content&&b("UIPageletContentCache").setContent(this._content_cache_key,a)}.bind(this),d=this._displayCallback,e=this._finallyHandler;this._request=new(b("AsyncRequest"))(this._src).setMethod("GET").setReadOnly(!0).setOption("bundle",this._is_bundle).setHandler(function(a){d?d(c.bind(null,a)):c(a),e&&e(a)});this._errorHandler&&this._request.setErrorHandler(this._errorHandler);this.transportErrorHandler&&this._request.setTransportErrorHandler(this.transportErrorHandler);this._use_post_request&&this._request.setMethod("POST")}a=babelHelpers["extends"]({},this._context_data,this._data);this._actorID&&(a[b("ActorURI").PARAMETER_ACTOR]=this._actorID);this._request.setAllowCrossPageTransition(this._allow_cross_page_transition).setData({data:JSON.stringify(a)}).send();return this};g.prototype.handleContent=function(a){"use strict";this._append?b("DOM").appendContent(this._element,a):b("DOM").setContent(this._element,a),this._handler()};g.prototype.cancel=function(){"use strict";this._request&&this._request.abort()};g.prototype.abandon=function(){"use strict";this._request&&this._request.abandon()};g.prototype.setUseAjaxPipe=function(a){"use strict";this._use_ajaxpipe=!!a;return this};g.prototype.setUsePostRequest=function(a){"use strict";this._use_post_request=!!a;return this};g.prototype.setAppend=function(a){"use strict";this._append=!!a;return this};g.prototype.setJSNonBlock=function(a){"use strict";this._jsNonblock=!!a;return this};g.prototype.setAutomatic=function(a){"use strict";this._automatic=!!a;return this};g.prototype.setDisplayCallback=function(a){"use strict";this._displayCallback=a;return this};g.prototype.setConstHeight=function(a){"use strict";this._constHeight=!!a;return this};g.prototype.setFinallyHandler=function(a){"use strict";this._finallyHandler=a;return this};g.prototype.setAllowIrrelevantRequests=function(a){"use strict";this._allowIrrelevantRequests=a;return this};g.prototype.setActorID=function(a){"use strict";this._actorID=a;return this};g.prototype.setCacheContent=function(a){"use strict";this._cache_content=a;return this};g.prototype.setContentCacheKey=function(a){"use strict";this._content_cache_key=a;return this};g.appendToInline=function(a,c){"use strict";a=b("ge")(a);c=b("ge")(c);if(a&&c){while(c.firstChild)b("DOM").appendContent(a,c.firstChild);b("DOM").remove(c)}};g.loadFromEndpoint=function(a,c,d,e){"use strict";__p&&__p();e=e||{};var f="/ajax/pagelet/generic.php/"+a;e.intern&&(f="/intern"+f);f=new(b("URI"))(f.replace(/\/+/g,"/"));e.subdomain&&f.setSubdomain(e.subdomain);var h=!1,i="";e.contentCacheKey&&(h=!0,i=a+","+String(e.contentCacheKey));a=new g(c,f,d).setUseAjaxPipe(e.usePipe).setBundleOption(e.bundle!==!1).setAppend(e.append).setJSNonBlock(e.jsNonblock).setAutomatic(e.automatic).setDisplayCallback(e.displayCallback).setConstHeight(e.constHeight).setAllowCrossPageTransition(e.crossPage).setFinallyHandler(e.finallyHandler||b("emptyFunction")).setErrorHandler(e.errorHandler).setTransportErrorHandler(e.transportErrorHandler).setAllowIrrelevantRequests(e.allowIrrelevantRequests).setActorID(e.actorID).setCacheContent(h).setContentCacheKey(i).setUsePostRequest(e.usePostRequest);e.handler&&a.setHandler(e.handler);a.go();return a};g.loadFromEndpointBatched=function(a,c,d){"use strict";__p&&__p();var e=a.slice(0,d),f=a.slice(d);if(f.length>0){a=e[e.length-1];var h=b("emptyFunction");a.options&&a.options.finallyHandler&&(h=a.options.finallyHandler);a.options=babelHelpers["extends"]({},a.options,{finallyHandler:function(){h(),window.setTimeout(function(){g.loadFromEndpointBatched(f,c,d)},1)}})}e.forEach(function(a){g.loadFromEndpoint(a.controller,a.target_element,a.data,babelHelpers["extends"]({},a.options,c,{bundle:!0}))})};e.exports=g}),null);
__d("XPageAdminHomePagePanelSaveSettingsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/homepage_panel/save_settings/",{selected_id:{type:"FBID"},collapse_state:{type:"Int"},refresh_panel:{type:"Bool",defaultValue:!1},click_target:{type:"String"}})}),null);
__d("PageHomepagePanelPagelet",["AsyncRequest","DOM","UIPagelet","URI","XPageAdminHomePagePanelSaveSettingsController","$"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g="homepage_panel_pagelet_content";a={init:function(a){var c=b("XPageAdminHomePagePanelSaveSettingsController").getURIBuilder().setBool("refresh_panel",!0).getURI();c.addQueryData(b("URI").getRequestURI().getQueryData());new(b("AsyncRequest"))().setURI(c).setStatusElement(a).setErrorHandler(function(a){b("DOM").setContent(b("$")(g),"")}).send()},initWithAjax:function(){b("UIPagelet").loadFromEndpoint("PageHomepagePanelPagelet",g,{content_only:!0},{usePipe:!0,allowIrrelevantRequests:!0,displayCallback:function(a){return a()}})}};e.exports=a}),null);