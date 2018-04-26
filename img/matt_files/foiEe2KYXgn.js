if (self.CavalryLogger) { CavalryLogger.start_js(["sWHOD"]); }

__d("CircularProgressBar.react",["cx","React"],(function(a,b,c,d,e,f,g){"use strict";a=b("React").PropTypes;c=b("React").createClass({displayName:"CircularProgressBar",propTypes:{percentComplete:a.number.isRequired},render:function(){var a=360*this.props.percentComplete/100,c=Math.max(a,180)-180;a=Math.min(a,180);var d=this.props.percentComplete<100?"1":"0";return b("React").createElement("div",{className:"_1_bj",style:{opacity:d}},b("React").createElement("div",{className:"_1_bk"},b("React").createElement("div",{className:"_1_bl",style:{opacity:d}}),b("React").createElement("div",{className:"_1_bp _1_bq"},b("React").createElement("div",{className:"_1_br",style:{transform:"translateX(-100%) rotate("+c+"deg)",opacity:d}})),b("React").createElement("div",{className:"_1_bs _1_bq"},b("React").createElement("div",{className:"_1_br",style:{transform:"translateX(-100%) rotate("+a+"deg)",opacity:d}}))))}});e.exports=c}),null);
__d("ProgressBar.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.$1=function(){"use strict";var a=this.props,b=a.min,c=a.max;a=a.value;a=Math.min(Math.max((a-b)/(c-b)*100,0),100);return a};a.prototype.$2=function(){"use strict";return this.props.label!=null&&this.props.size!=="small"};a.prototype.$3=function(){"use strict";return this.$2()&&this.props.typesetting==="float"};a.prototype.$4=function(){"use strict";return!this.$2()?null:this.props.label};a.prototype.$5=function(){"use strict";return this.$3()?b("React").createElement("div",{className:"_6a"}," "):null};a.prototype.$6=function(){"use strict";var a=Math.round(this.$1()),c="_5e4k"+(a===0?" _5e2d":"")+(a===100?" _5e4j":""),d=this.$4();d&&(d=b("React").createElement("span",{className:"_5e2h"},d));return b("React").createElement("div",{className:c,style:{width:a+"%"}},this.$5(),d)};a.prototype.$7=function(){"use strict";__p&&__p();var a=this.$4();if(!a)return null;a=b("React").createElement("span",{className:"_5e2h _5e2n"},a);if(this.$3()){var c=this.$1();c={left:c+"%",width:c+"%"};c=b("React").createElement("div",{className:"_5e2g",style:c},this.$5(),a);return c}return a};a.prototype.render=function(){"use strict";var a="_5e4h"+(this.$3()?"":" _5e2k")+(this.$3()?" _5e2j":"")+(this.props.size==="small"?" _5e2l":"")+(this.props.isRounded===!0?" _5e2m":"");if(this.$3())return b("React").createElement("div",babelHelpers["extends"]({},this.props,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.$1(),className:b("joinClasses")(this.props.className,a)}),b("React").createElement("div",{className:"_5e2k"},this.$7(),this.$6()));else return b("React").createElement("div",babelHelpers["extends"]({},this.props,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.$1(),className:b("joinClasses")(this.props.className,a)}),this.$7(),this.$6())};function a(){"use strict";h.apply(this,arguments)}a.defaultProps={min:0,max:100,size:"large",typesetting:"inline",isRounded:!1};e.exports=a}),null);
__d("ComposerXStore",["Arbiter","ge"],(function(a,b,c,d,e,f){__p&&__p();var g={};function h(a,b){return"ComposerX/"+a+"/"+b}a={set:function(a,c,d){g[a]||(g[a]={}),g[a][c]=d,b("Arbiter").inform(h(a,c),{},b("Arbiter").BEHAVIOR_STATE)},get:function(a,b){return g[a]?g[a][b]:null},getAllForComposer:function(a){return g[a]||{}},waitForComponents:function(a,c,d){b("Arbiter").registerCallback(d,c.map(h.bind(null,a)))}};b("Arbiter").subscribe("page_transition",function(){for(var a in g)b("ge")(a)||delete g[a]});e.exports=a}),null);
__d("OptimisticVideoPostUtils",["AsyncRequest"],(function(a,b,c,d,e,f){a={shouldShowOptimisticPost:function(a){return a.isScheduledPost||a.isHiddenFromTimeline||a.isSecret||!a.isPageToPage&&!a.isToUserProfile||a.isDraft?!1:!0},checkVideoStatus:function(a,c,d,e){new(b("AsyncRequest"))().setURI("/ajax/video/encode/feedback/ping/").setData({video_id:a}).setHandler(function(b){var f=b.getPayload();b.error||f.error?d(a,b):f.is_ready?c(a):e(a)}).send()}};e.exports=a}),null);
__d("PagesIntegrityTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:PagesIntegrityLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:PagesIntegrityLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:PagesIntegrityLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setPageAdminNotified=function(a){this.$1.page_admin_notified=a;return this};a.prototype.setPageID=function(a){this.$1.page_id=a;return this};a.prototype.setPageSurface=function(a){this.$1.page_surface=a;return this};a.prototype.setPostSessionUuid=function(a){this.$1.post_session_uuid=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};c={event:!0,page_admin_notified:!0,page_id:!0,page_surface:!0,post_session_uuid:!0,vc:!0};e.exports=a}),null);
__d("ProfileVideoWWWFrontendActionTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:ProfileVideoWWWFrontendActionLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:ProfileVideoWWWFrontendActionLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:ProfileVideoWWWFrontendActionLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setSessionID=function(a){this.$1.session_id=a;return this};a.prototype.setUploadError=function(a){this.$1.upload_error=a;return this};c={event:!0,session_id:!0,upload_error:!0};e.exports=a}),null);
__d("DurationFormatter",["fbt"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=60,i=3600;a={formatShort:function(a){__p&&__p();var b=Math.floor(a/i);a-=b*i;var c=Math.floor(a/h);a-=c*h;a=a%60;var d=b?b.toString()+":":"";d+=!b||c>=10?c.toString():"0"+c;d+=":";d+=a>=10?a.toString():"0"+a;return d},formatTime:function(a){if(a>i)return this._formatHours(a);else if(a>h)return this._formatMinutes(a);else return this._formatSeconds(a)},_formatHours:function(a){var b=Math.floor(a/i);a=a-b*i;a=Math.floor(a/h);if(a>0)return g._({"*":{"*":"{hours} hours and {minute} minutes","_1":"{hours} hours and 1 minute"},"_1":{"*":"1 hour and {minute} minutes","_1":"1 hour and 1 minute"}},[g._plural(b,"hours"),g._plural(a,"minute")]);else return g._({"*":"{number} hours","_1":"1 hour"},[g._plural(b,"number")])},_formatMinutes:function(a,b){b=Math.floor(a/h);a=Math.floor(a-b*h);if(a>0)return g._({"*":{"*":"{minutes} minutes and {seconds} seconds","_1":"{minutes} minutes and 1 second"},"_1":{"*":"1 minute and {seconds} seconds","_1":"1 minute and 1 second"}},[g._plural(b,"minutes"),g._plural(a,"seconds")]);else return g._({"*":"{number} minutes","_1":"1 minute"},[g._plural(b,"number")])},_formatSeconds:function(a){a=Math.floor(a);return g._({"*":"{number} seconds","_1":"1 second"},[g._plural(a,"number")])}};e.exports=a}),null);
__d("ReactPagesComposerGlobalFlags",[],(function(a,b,c,d,e,f){"use strict";a={_isPagesComposer:!1,_isObjectiveFirstPagesComposer:!1,setIsPagesComposer:function(a){this._isPagesComposer=a},setIsObjectiveFirstPagesComposer:function(a){this._isObjectiveFirstPagesComposer=a,this._isPagesComposer=this._isObjectiveFirstPagesComposer},getIsPagesComposer:function(){return this._isPagesComposer},getIsObjectiveFirstPagesComposer:function(){return this._isObjectiveFirstPagesComposer}};e.exports=a}),null);
__d("PagesIntegrityLoggingActionType",["keyMirror"],(function(a,b,c,d,e,f){"use strict";e.exports=b("keyMirror")({INITIAL_LOAD:null,FAKE_NEWS_DIALOG_SHOWN:null,ADMIN_DID_SUBMIT_AFTER_FAKE_NEWS_DIALOG_SHOWN:null,ADMIN_DID_NOT_SUBMIT_AFTER_FAKE_NEWS_DIALOG_SHOWN:null,UNPUBLISHED_CONTENT_BANK_WARNING_DIALOG_SHOWN:null,ADMIN_DID_SUBMIT_AFTER_UNPUBLISHED_CONTENT_BANK_WARNING_DIALOG_SHOWN:null,ADMIN_DID_NOT_SUBMIT_AFTER_UNPUBLISHED_CONTENT_BANK_WARNING_DIALOG_SHOWN:null})}),null);
__d("PagesIntegrityLoggingActions",["AdsDataAtom","PagesIntegrityLoggingActionType"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){b("AdsDataAtom").handleUpdateFromInitialServer({type:b("PagesIntegrityLoggingActionType").INITIAL_LOAD,pageID:a})};c=function(){b("AdsDataAtom").handleUpdateFromViewAction({type:b("PagesIntegrityLoggingActionType").ADMIN_DID_NOT_SUBMIT_AFTER_FAKE_NEWS_DIALOG_SHOWN})};d=function(){b("AdsDataAtom").handleUpdateFromViewAction({type:b("PagesIntegrityLoggingActionType").ADMIN_DID_SUBMIT_AFTER_FAKE_NEWS_DIALOG_SHOWN})};f=function(){b("AdsDataAtom").handleUpdateFromViewAction({type:b("PagesIntegrityLoggingActionType").FAKE_NEWS_DIALOG_SHOWN})};var g=function(){b("AdsDataAtom").handleUpdateFromViewAction({type:b("PagesIntegrityLoggingActionType").ADMIN_DID_NOT_SUBMIT_AFTER_UNPUBLISHED_CONTENT_BANK_WARNING_DIALOG_SHOWN})},h=function(){b("AdsDataAtom").handleUpdateFromViewAction({type:b("PagesIntegrityLoggingActionType").ADMIN_DID_SUBMIT_AFTER_UNPUBLISHED_CONTENT_BANK_WARNING_DIALOG_SHOWN})},i=function(){b("AdsDataAtom").handleUpdateFromViewAction({type:b("PagesIntegrityLoggingActionType").UNPUBLISHED_CONTENT_BANK_WARNING_DIALOG_SHOWN})};e.exports={initializeLoggingStore:a,logFakeNewsDialogShown:f,logFakeNewsSubmitted:d,logFakeNewsNotSubmitted:c,logUnpublishedContentBankMatchNotSubmitted:g,logUnpublishedContentBankMatchSubmitted:h,logUnpublishedContentWarningDialogShown:i}}),null);
__d("PagesIntegrityLoggerEvent",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({FAKE_NEWS_LINK_SHARE_WARNING_DIALOG_SHOWN:"FAKE_NEWS_LINK_SHARE_WARNING_DIALOG_SHOWN",FAKE_NEWS_LINK_SHARED_BY_ADMIN:"FAKE_NEWS_LINK_SHARED_BY_ADMIN",FAKE_NEWS_LINK_NOT_SHARED_BY_ADMIN:"FAKE_NEWS_LINK_NOT_SHARED_BY_ADMIN",FAKE_NEWS_LINK_SHARE_NOTIFICATION_SENT_TO_ADMIN:"FAKE_NEWS_LINK_SHARE_NOTIFICATION_SENT_TO_ADMIN",FAKE_NEWS_LINK_URI_TO_PAGE_NOTIFICATION_SENT_TO_ADMIN:"FAKE_NEWS_LINK_URI_TO_PAGE_NOTIFICATION_SENT_TO_ADMIN",UNPUBLISHED_CONTENT_BANK_WARNING_DIALOG_SHOWN:"UNPUBLISHED_CONTENT_BANK_WARNING_DIALOG_SHOWN",UNPUBLISHED_CONTENT_BANK_MATCH_POSTED_BY_ADMIN:"UNPUBLISHED_CONTENT_BANK_MATCH_POSTED_BY_ADMIN",UNPUBLISHED_CONTENT_BANK_MATCH_NOT_POSTED_BY_ADMIN:"UNPUBLISHED_CONTENT_BANK_MATCH_NOT_POSTED_BY_ADMIN",CONTEXT_EVERYWHERE_SHOWN_ON_DYNAMIC_HOVERCARD:"CONTEXT_EVERYWHERE_SHOWN_ON_DYNAMIC_HOVERCARD"})}),null);
__d("PagesIntegrityLoggerSurfaces",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({COMPOSER:"COMPOSER"})}),null);
__d("PagesIntegrityLoggingStore",["AdsDataAtom","FluxReduceStore","immutable","PagesIntegrityLoggerEvent","PagesIntegrityLoggerSurfaces","PagesIntegrityLoggingActionType","PagesIntegrityTypedLogger","uuid"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h;g=babelHelpers.inherits(i,b("immutable").Record({composerPostSessionUUID:null,pageID:null}));g&&g.prototype;function i(){g.apply(this,arguments)}h=babelHelpers.inherits(a,b("FluxReduceStore"));h&&h.prototype;a.prototype.getInitialState=function(){return new i()};a.prototype.reduce=function(a,c){__p&&__p();c=c.action;switch(c.type){case b("PagesIntegrityLoggingActionType").INITIAL_LOAD:c=c.pageID;return a.set("composerPostSessionUUID",b("uuid")()).set("pageID",c);case b("PagesIntegrityLoggingActionType").FAKE_NEWS_DIALOG_SHOWN:return this.$PagesIntegrityLoggingStore1(b("PagesIntegrityLoggerEvent").FAKE_NEWS_LINK_SHARE_WARNING_DIALOG_SHOWN,a,!1);case b("PagesIntegrityLoggingActionType").ADMIN_DID_NOT_SUBMIT_AFTER_FAKE_NEWS_DIALOG_SHOWN:return this.$PagesIntegrityLoggingStore1(b("PagesIntegrityLoggerEvent").FAKE_NEWS_LINK_NOT_SHARED_BY_ADMIN,a,!0);case b("PagesIntegrityLoggingActionType").ADMIN_DID_SUBMIT_AFTER_FAKE_NEWS_DIALOG_SHOWN:return this.$PagesIntegrityLoggingStore1(b("PagesIntegrityLoggerEvent").FAKE_NEWS_LINK_SHARED_BY_ADMIN,a,!0);case b("PagesIntegrityLoggingActionType").UNPUBLISHED_CONTENT_BANK_WARNING_DIALOG_SHOWN:return this.$PagesIntegrityLoggingStore1(b("PagesIntegrityLoggerEvent").UNPUBLISHED_CONTENT_BANK_WARNING_DIALOG_SHOWN,a,!1);case b("PagesIntegrityLoggingActionType").ADMIN_DID_NOT_SUBMIT_AFTER_UNPUBLISHED_CONTENT_BANK_WARNING_DIALOG_SHOWN:return this.$PagesIntegrityLoggingStore1(b("PagesIntegrityLoggerEvent").UNPUBLISHED_CONTENT_BANK_MATCH_NOT_POSTED_BY_ADMIN,a,!0);case b("PagesIntegrityLoggingActionType").ADMIN_DID_SUBMIT_AFTER_UNPUBLISHED_CONTENT_BANK_WARNING_DIALOG_SHOWN:return this.$PagesIntegrityLoggingStore1(b("PagesIntegrityLoggerEvent").UNPUBLISHED_CONTENT_BANK_MATCH_POSTED_BY_ADMIN,a,!0);default:return a}};a.prototype.$PagesIntegrityLoggingStore1=function(event,a,c){new(b("PagesIntegrityTypedLogger"))().setEvent(event).setPageID(a.get("pageID")).setPostSessionUuid(a.get("composerPostSessionUUID")).setPageSurface(b("PagesIntegrityLoggerSurfaces").COMPOSER).log();return c?a.set("composerPostSessionUUID",b("uuid")()):a};function a(){h.apply(this,arguments)}a.__moduleID=e.id;e.exports=new a(b("AdsDataAtom"))}),null);
__d("TimelineCapsuleUtilities",["CSS"],(function(a,b,c,d,e,f){__p&&__p();a={setFirstUnit:function(a){__p&&__p();var c=!0;for(var d=0;d<a.childNodes.length;++d){var e=a.childNodes[d];if(e.id.indexOf("tl_unit_")===0)if(c)c=!1,b("CSS").addClass(e,"firstUnit");else{b("CSS").removeClass(e,"firstUnit");break}}}};e.exports=a}),null);
__d("TimelineComposer",["csx","Arbiter","Bootloader","ComposerXMarauderLogger","ComposerXStore","CSS","DOM","DOMQuery","Event","Parent","ReloadPage","Run","TimelineCapsuleUtilities","$","getObjectValues","goURI","tidyEvent"],(function(a,b,c,d,e,f,g){__p&&__p();var h=void 0,i=void 0,j=void 0;function k(){b("ComposerXMarauderLogger").logCompleted(h.id)}function l(a){__p&&__p();if(a.hidePost){k();return}if(a.redirect){var c=b("ComposerXStore").getAllForComposer(a.composer_id);b("getObjectValues")(c).forEach(function(a){a.reset&&a.reset(a)});b("goURI")(a.redirect);k();return}if(!a.streamStory){b("ReloadPage").now();return}if(a.backdatedTime){b("Bootloader").loadModules(["TimelineStoryPublisher"],function(b){b.publish(a)},"TimelineComposer");k();return}m.renderCapsuleBasedStory(b("$")(a.composer_id),a.streamStory);b("Arbiter").inform("TimelineComposer/on_after_publish",a.streamStory,b("Arbiter").BEHAVIOR_PERSISTENT);k()}var m={init:function(a){h||(i=b("Arbiter").subscribe("composer/publish",function(event,a){l(a)}),j=b("Arbiter").subscribe("LitestandComposer/publishTemp",function(b,c){l({composer_id:a,streamStory:c.markup})}),b("Run").onLeave(m.destroy)),h=b("$")(a)},destroy:function(){i&&i.unsubscribe(),j&&j.unsubscribe()},renderCapsuleBasedStory:function(a,c){__p&&__p();a=b("Parent").byClass(a,"fbTimelineCapsule");if(!a)return;var d=b("DOMQuery").scry(a,".fbTimelineUnit")[0],e=d.nextSibling;e&&e.getAttribute("data-spine")&&(d=d.nextSibling);var f=b("DOM").insertAfter(d,c)[0];b("CSS").hasClass(f,"fbTimelineUnit")&&(f=b("DOM").find(f,"div.timelineUnitContainer"));b("Bootloader").loadModules(["Animation"],function(a){new a(f).from("backgroundColor","#fff8dd").to("backgroundColor","#fff").duration(2e3).ease(a.ease.both).go()},"TimelineComposer");b("TimelineCapsuleUtilities").setFirstUnit(a)},getRoot:function(){return h},initNUX:function(a,c){b("tidyEvent")(b("Event").listen(a,"click",function(){var a=b("DOM").scry(c,"textarea")[0];a&&a.focus()}))}};e.exports=a.TimelineComposer||m}),null);
__d("XAfterPartyWWWController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/afterparty/www/",{page_id:{type:"Int",required:!0},scrolling_offset:{type:"Int",defaultValue:0}})}),null);
__d("XUnpublishedPostSuccessController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/unpublished_posts/post_success/",{type:{type:"String",required:!0}})}),null);
__d("PagesComposer",["csx","cx","ActorURI","AdsDataAtom","Arbiter","AsyncRequest","Bootloader","ComposerXMarauderLogger","ComposerXStore","DOM","PagesComposerUnpublishedPostsStore","PagesIntegrityLoggingActions","PagesIntegrityLoggingStore","Parent","ReactComposerFocusStore","ReactPagesComposerGlobalFlags","ReloadPage","Run","XAfterPartyWWWController","XUnpublishedPostSuccessController","$","getObjectValues","goURI"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=500,j=20,k=58,l=void 0,m=void 0;function n(){b("ComposerXMarauderLogger").logCompleted(l.id)}function o(a){__p&&__p();if(a.hidePost){var c=b("ComposerXStore").getAllForComposer(l.id);if(!b("getObjectValues")(c).length){var d=null;b("PagesComposerUnpublishedPostsStore").getIsDraft(l.id)&&(d="draft");b("PagesComposerUnpublishedPostsStore").getScheduledPublishTime(l.id)&&(d="scheduled");if(d){d=b("XUnpublishedPostSuccessController").getURIBuilder().setString("type",d).getURI();d=b("ActorURI").create(d,m);new(b("AsyncRequest"))().setURI(d).send()}}n();return}if(a.redirect){var c=b("ComposerXStore").getAllForComposer(l.id);b("getObjectValues")(c).forEach(function(a){a.reset&&a.reset(a)});b("goURI")(a.redirect);n();return}if(!a.streamStory){d=q();if(d)return;b("ReloadPage").now();return}if(a.backdatedTime){b("Bootloader").loadModules(["PagesStoryPublisher"],function(b){b.publish(a)},"PagesComposer");n();return}c=r.renderStory(l,a.streamStory);b("Arbiter").inform("TimelineComposer/on_after_publish",c,b("Arbiter").BEHAVIOR_PERSISTENT);if(m){d=b("XAfterPartyWWWController").getURIBuilder().setInt("page_id",m);p(d,0)}n()}function p(a,c){!b("ReactComposerFocusStore").isComposerFocused(l.id)?(c>0&&a.setInt("scrolling_offset",k),new(b("AsyncRequest"))().setURI(a.getURI()).send()):c<j&&setTimeout(p.bind(this,a,c+1),i)}function q(){var a=!1;b("Bootloader").loadModules(["ReactComposerTaggerStore","ReactComposerTaggerType"],function(b,c){var d=b.getTaggerData(l.id,c.SPONSOR);b=b.getTaggersConfig(l.id,c.SPONSOR);d&&d.sponsors&&d.sponsors.length>0&&b&&b.showBCMPPostPostModal&&(a=!0)},"PagesComposer");return a}var r={init:function(a,c){l=b("$")(a);m=c;a=b("Arbiter").subscribe("composer/publish",function(event,a){a.composer_id===l.id&&o(a)});b("Run").onLeave(a.unsubscribe.bind(a));b("ReactPagesComposerGlobalFlags").setIsPagesComposer(!0);b("AdsDataAtom").explicitlyRegisterStore(b("PagesIntegrityLoggingStore"));b("PagesIntegrityLoggingActions").initializeLoggingStore(c)},renderStory:function(a,c){a=b("Parent").bySelector(a,"#pagelet_timeline_main_column");if(!a)return;a=b("DOM").scry(a,"._5sem")[0];var d=b("DOM").setContent(a,c)[0];b("Bootloader").loadModules(["Animation"],function(a){new a(d).from("backgroundColor","#fff8dd").to("backgroundColor","#fff").duration(2e3).ease(a.ease.both).go()},"PagesComposer");return d},replaceByID:function(a,c){b("DOM").replace(b("$")(a),c)}};e.exports=a.PagesComposer||r}),null);
__d("DummySearchSource",["AbstractSearchSource"],(function(a,b,c,d,e,f){__p&&__p();var g;g=babelHelpers.inherits(a,b("AbstractSearchSource"));g&&g.prototype;a.prototype.searchImpl=function(a,b,c){"use strict";b([],a)};function a(){"use strict";g.apply(this,arguments)}e.exports=a}),null);
__d("QueriesHistory",[],(function(a,b,c,d,e,f){__p&&__p();function a(a){"use strict";this.$1=a,this.reset()}a.prototype.getQueries=function(){"use strict";return this.$2};a.prototype.getCurrentLength=function(){"use strict";return this.$3};a.prototype.add=function(a){"use strict";this.$2.push(a);this.$3+=a.length;while(this.$2.length!==0&&this.$3>this.$1){a=this.$2.shift();this.$3-=a.length}};a.prototype.reset=function(){"use strict";this.$3=0,this.$2=[]};e.exports=a}),null);
__d("CanvasToBlobImpl",["BlobFactory"],(function(a,b,c,d,e,f){function a(a,c){a=atob(a.substr(a.indexOf(",")+1));var d=new Uint8Array(a.length);for(var e=0;e<a.length;e++)d[e]=a.charCodeAt(e);return b("BlobFactory").getBlob([d],{type:c})}e.exports={getBlob:a}}),null);
__d("dataURLToBlob",["Promise","BlobFactory","CanvasToBlobResource","WebWorker","CanvasToBlobImpl"],(function(a,b,c,d,e,f){__p&&__p();var g=b("CanvasToBlobImpl").getBlob,h=a.URL||a.webkitURL||{};function c(a,c){if(!h.createObjectURL||!b("BlobFactory").isSupported)return b("Promise").reject("Browser doesn't support this feature");if(b("WebWorker").isSupported())return new(b("Promise"))(function(d,e){var f=new(b("WebWorker"))(b("CanvasToBlobResource")).setMessageHandler(function(a){d(a),f.terminate()}).setErrorHandler(function(event){e(event.message),f.terminate()}).execute().postMessage({dataURL:a,fileType:c})});else return b("Promise").resolve(g(a,c))}e.exports=c}),null);
__d("canvasToBlob",["Promise","dataURLToBlob","promiseDone"],(function(a,b,c,d,e,f){function a(a,c,d){return new(b("Promise"))(function(e,f){if(a.toBlob)a.toBlob(e,c,d);else{var g=a.toDataURL(c,d);b("promiseDone")(b("dataURLToBlob")(g,c).then(function(a){e(a)},f))}})}e.exports=a}),null);
__d("VideoThumbnail",["invariant"],(function(a,b,c,d,e,f,g){__p&&__p();function a(a){"use strict";this.$1=a}a.prototype.getURL=function(){"use strict";return this.$1};a.prototype.getData=function(){"use strict";g(0)};a.addTextToCanvasContext=function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();a.fillStyle=h;a.textAlign=i;a.font=f+"px "+g;h=i==="center"?d+e/2:d;g=1;i=b.split("\n");for(var d=i,b=Array.isArray(d),i=0,d=b?d:d[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var j;if(b){if(i>=d.length)break;j=d[i++]}else{i=d.next();if(i.done)break;j=i.value}j=j;var k="",l="";j=j.split(" ");for(var j=j,m=Array.isArray(j),n=0,j=m?j:j[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var o;if(m){if(n>=j.length)break;o=j[n++]}else{n=j.next();if(n.done)break;o=n.value}o=o;l+=o;var p=a.measureText(l).width,q=a.measureText(o).width;if(q>e){k.length>0&&(a.fillText(k,h,c+f*g),g++);q="";var r="";for(var s=o,t=Array.isArray(s),u=0,s=t?s:s[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var v;if(t){if(u>=s.length)break;v=s[u++]}else{u=s.next();if(u.done)break;v=u.value}v=v;r+=v;var w=a.measureText(r).width;w>e?(a.fillText(q,h,c+f*g),q=v,r=v,g++):q=r}k=q+" ";l=q+" "}else p>e?(a.fillText(k,h,c+f*g),k=o+" ",l=o+" ",g++):(l+=" ",k=l)}a.fillText(k,h,c+f*g);g++}return a};e.exports=a}),null);
__d("CanvasVideoThumbnail",["Promise","DOM","EventListener","VideoThumbnail","canvasToBlob","promiseDone"],(function(a,b,c,d,e,f){__p&&__p();var g;c=babelHelpers.inherits(a,b("VideoThumbnail"));g=c&&c.prototype;function a(a,b,c){"use strict";g.constructor.call(this,null),this.$CanvasVideoThumbnail1=a,this.$CanvasVideoThumbnail2=b,this.$CanvasVideoThumbnail3=c}a.prototype.getTime=function(){"use strict";return this.$CanvasVideoThumbnail3?this.$CanvasVideoThumbnail3:0};a.prototype.getURL=function(){"use strict";this.$CanvasVideoThumbnail4||(this.$CanvasVideoThumbnail4=this.$CanvasVideoThumbnail1.toDataURL("image/jpeg"));return this.$CanvasVideoThumbnail4};a.prototype.getData=function(){"use strict";var a=b("DOM").create("canvas"),c=a.getContext("2d"),d=this.$CanvasVideoThumbnail2;return new(b("Promise"))(function(e,f){var g=b("EventListener").listen(d,"seeked",function(){g.remove(),a.width=d.videoWidth,a.height=d.videoHeight,c.drawImage(d,0,0,a.width,a.height),b("canvasToBlob")(a,"image/jpeg").then(e,f)});d.currentTime=this.$CanvasVideoThumbnail3}.bind(this))};a.prototype.getDataWithText=function(a,c,d,e,f,g,h,i){"use strict";var j=b("DOM").create("canvas"),k=j.getContext("2d"),l=this.$CanvasVideoThumbnail2;return new(b("Promise"))(function(m,n){var o=b("EventListener").listen(l,"seeked",function(){o.remove(),j.width=l.videoWidth,j.height=l.videoHeight,k.fillStyle=h,k.textAlign=i,k.drawImage(l,0,0,j.width,j.height),k=b("VideoThumbnail").addTextToCanvasContext(k,a,c,d,e,f,g,h,i),b("promiseDone")(b("canvasToBlob")(j,"image/jpeg").then(m,n))});l.currentTime=this.$CanvasVideoThumbnail3}.bind(this))};e.exports=a}),null);
__d("generateVideoThumbnails",["Promise","CanvasVideoThumbnail","EventListener","VideoFrameBuffer","VideoThumbnail"],(function(a,b,c,d,e,f){__p&&__p();function a(a,c,d,e){__p&&__p();var f=arguments.length<=4||arguments[4]===undefined?"contain":arguments[4],g=arguments.length<=5||arguments[5]===undefined?0:arguments[5];return new(b("Promise"))(function(h,i){__p&&__p();var j=document.createElement("canvas"),k=[],l=0,m=(a.duration-g)/e,n=new(b("VideoThumbnail"))(""),o=new(b("VideoFrameBuffer"))(j,a,f),p;j.width=c;j.height=d;var q=function(){o.updateFrameBuffer();var c=new(b("CanvasVideoThumbnail"))(j,a,g+(l-1)*m);k.push(c);c.getURL().length>n.getURL().length&&(n=c);r()},r=function(){l===0&&(p=b("EventListener").listen(a,"seeked",q)),l<e?(a.currentTime=g+l*m,l++):(p&&p.remove(),h({thumbnails:k,selectedThumbnail:n}))};if(a.videoWidth===0||a.videoHeight===0){i();return}r()})}e.exports=a}),null);
__d("StoryProfile.react",["cx","BackgroundImage.react","FBProfilePhotoShadow.react","Image.react","ImageBlock.react","InlineBlock.react","Link.react","PrivacyConst","React","XUIGrayText.react","XUIText.react","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").Component);h=d&&d.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.$1=function(){var a=null;if(this.props.privacyIndicator)a=this.props.privacyIndicator;else if(this.props.privacySetting){var c=this.props.privacySetting==b("PrivacyConst").BaseValue.EVERYONE,d=this.props.privacySetting==b("PrivacyConst").BaseValue.ALL_FRIENDS;a=b("React").createElement(b("BackgroundImage.react"),{width:13,height:12,"data-hover":"tooltip","data-tooltip-content":this.props.privacyTooltip,className:"_14g-"+(c?" _14g_":"")+(d?" _5qhp":"")+(!d&&!c?" _14h0":"")})}return!a?null:b("React").createElement("span",null,b("React").createElement(b("XUIGrayText.react"),{shade:"light",size:"meta1",display:"inline"},"\xa0\xb7\xa0"),a)}.bind(this),this.$2=function(){__p&&__p();var a,c;if(this.props.profileURL){var d;this.props.openProfileURLInNewPage&&(d="_blank");c="bold";a=b("React").createElement(b("Link.react"),{href:this.props.profileURL,target:d},this.props.username)}else a=this.props.username;if(this.props.description)return b("React").createElement("div",null,b("React").createElement(b("XUIText.react"),{className:"_14gz",size:"header4",weight:c},a)," ",this.props.description);else return b("React").createElement(b("XUIText.react"),{className:"_14gz",size:"header4",weight:c,display:"block"},a)}.bind(this),this.$3=function(){return this.props.additionalLinks?b("React").createElement(b("XUIGrayText.react"),{shade:"light",size:"meta1",display:"inline"},this.props.additionalLinks.map(function(a,c){return b("React").createElement("span",{key:c},"\xa0\xb7\xa0",b("React").createElement(b("Link.react"),{href:a.URL,target:"_blank"},a.text))})):null}.bind(this),c}a.prototype.render=function(){"use strict";return b("React").createElement(b("ImageBlock.react"),{spacing:"medium",className:b("joinClasses")(this.props.className,"_56-3")},this.props.profilePicture?b("React").createElement(b("FBProfilePhotoShadow.react"),null,b("React").createElement(b("Image.react"),{className:"_56-4",src:this.props.profilePicture})):b("React").createElement("span",null),b("React").createElement(b("InlineBlock.react"),{alignv:"middle",height:40,fullWidth:!0},this.$2(),b("React").createElement("div",null,b("React").createElement(b("XUIGrayText.react"),{shade:"light",size:"meta1",display:"inline"},this.props.uploadTime),this.$1(),this.$3())))};a.propTypes={privacySetting:c.number,privacyIndicator:c.object,profilePicture:c.string,privacyTooltip:c.node,username:c.string.isRequired,uploadTime:c.node.isRequired,profileURL:c.string,openProfileURLInNewPage:c.bool,additionalLinks:c.arrayOf(c.shape({URL:c.string,text:c.node})),description:c.node};a.defaultProps={openProfileURLInNewPage:!1};e.exports=a}),null);
__d("VideoUploadProgressUtils",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=99.8;a={isEncodingFinished:function(a){return a==="finish"},getOptimizedProgress:function(a,b,c,d,e){__p&&__p();if(!e)return{progress:Math.max(b,a.progress),progressWithoutFake:a.progressWithoutFake};e={progress:b,progressWithoutFake:a.progressWithoutFake};var f=a.progress+b;if(!(b>0)||d>0&&f>d){e.progress=-1;return e}f=Number(f.toFixed(1));c==="finish"||c==="notify"?f=100:f>=100&&(f=a.progress<100?a.progress:g);e.progress=f;e.progressWithoutFake=f;return e},getUpdatedProgress:function(a,b){var c={progress:b.progress,progressWithoutFake:b.progressWithoutFake};a.obj.cached_progress&&b.progress<a.obj.cached_progress&&(c={progress:a.obj.cached_progress,progressWithoutFake:a.obj.cached_progress});b=this.getOptimizedProgress(c,a.obj.progress,a.obj.stage,a.obj.max_percent?a.obj.max_percent:0,a.obj.sve_report);b.progress!==-1&&(c.progress=b.progress);c.progressWithoutFake=b.progressWithoutFake;return c}};e.exports=a}),null);
__d("VideoLibraryButton.react",["cx","fbt","React","XPagesManagerPublishingToolsController","XUIDialogButton.react"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.$1=function(){"use strict";return b("XPagesManagerPublishingToolsController").getURIBuilder().setString("page_token",this.props.pageID).setString("section","VIDEOS").setEnum("source",this.props.source).setEnum("refSource",this.props.refSource).getURI()};a.prototype.$2=function(){"use strict";this.$1().go()};a.prototype.render=function(){"use strict";return b("React").createElement(b("XUIDialogButton.react"),{action:"cancel",className:"_2bhc",label:h._("Video Library"),size:this.props.size,onClick:this.$2.bind(this)})};function a(){"use strict";i.apply(this,arguments)}a.defaultProps={size:"small"};e.exports=a}),null);
__d("DocumentMentionsRegex",[],(function(a,b,c,d,e,f){"use strict";a="\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'\"~=<>_:;";b="\\b[A-Z][^\\s"+a+"]";c={PUNCTUATION:a,NAME:b};e.exports=c}),null);
__d("AtSignMentionsStrategy",["DocumentMentionsRegex"],(function(a,b,c,d,e,f){__p&&__p();a=b("DocumentMentionsRegex").PUNCTUATION;c=["@","\\uff20"].join("");d="[^"+c+a+"\\s]";f="(?:\\.[ |$]| |["+a+"]|)";var g=new RegExp("(?:^|\\s|\\()(["+c+"]((?:"+d+f+"){0,20}))$");b={name:"AtSignMentionsStrategy",findMentionableString:function(a){a=g.exec(a);if(a!==null){var b=a[2];if(b.length)return{matchingString:b,leadOffset:a[1].length}}return null}};e.exports=b}),null);
__d("DocumentCompositeMentionsSource",["invariant","createCancelableFunction","emptyFunction","nullthrows"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function h(a,b){var c=a.getCharacterList().toSeq().slice(0,b).reverse().takeWhile(function(a){return a.getEntity()===null}).count();return a.getText().slice(b-c,b)}function a(a){a.length>0||g(0),this.$1=a,this.$2=!1,this.$3=null}a.prototype.bootstrap=function(a){if(this.$2)return;this.$2=!0;a=a||b("emptyFunction");var c=this.$1.length;function d(){c--,c||a&&a()}this.$1.forEach(function(a){a.bootstrap(d)})};a.prototype.search=function(a,c,d){var e=c.getAnchorKey();a=a.getBlockForKey(e);var f=b("createCancelableFunction")(d);this.$4(h(a,c.getAnchorOffset()),f);return{remove:function(){f.cancel()}}};a.prototype.$4=function(a,c){__p&&__p();var d=this.$1.length,e,f;for(var g=0;g<d;g++){e=this.$1[g];f=e.findMatch(a);if(f===null)continue;else{var h=b("nullthrows")(f).matchingString;this.$3=h;e.search(h,function(a,b){this.$3===b&&c(a,f.leadOffset)}.bind(this));return}}this.$3=null;c(null,null)};e.exports=a}),null);
__d("DocumentMentionsSource",["invariant"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function a(a,b){typeof a.findMentionableString==="function"||g(0),this.$1=a,this.$2=b,this.$3=!1}a.prototype.findMatch=function(a){return this.$1.findMentionableString(a)};a.prototype.bootstrap=function(a){this.$3||(this.$3=!0,this.$2.bootstrap(a))};a.prototype.search=function(a,b){this.$2.search(a,b,{strategyName:this.$1.name})};e.exports=a}),null);
__d("CommerceProductTaggerType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({NONE:"none",SHOP_PAGE:"shop_page",NON_SHOP_PAGE:"non_shop_page",INFLUENCER_PAGE:"influencer_page"})}),null);
__d("PublishingToolsSource",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ADS_CANVAS_LANDING_PAGE:"ads_canvas_landing_page",COPYRIGHT_MATCH_PERMALINK:"copyright_match_permalink",DRAFTS_POSTS_TIMELINE_PAGELET:"draft_timeline_pagelet",EXPIRING_POSTS_TIMELINE_PAGELET:"expiring_timeline_pagelet",IA_URL_GROWTH_QP:"ia_url_growth_qp",NOTIFICATION:"notif",OPTIMISTIC_VIDEO_POST:"optimistic_video_post",PAGES_MANAGER_BAR:"pages_manager_bar",PAYMENT_SETTINGS_HEADER:"payment_settings_header",SCHEDULED_POSTS_TIMELINE_PAGELET:"scheduled_timeline_pagelet",UNKNOWN:"unknown",VIDEO_ASSET_INSIGHTS_PERMALINK:"video_asset_insights_permalink",VIDEO_EDIT_PERMALINK:"video_edit_permalink",VIDEO_INSIGHTS:"video_insights",VIDEO_LIBRARY_MEGAPHONE:"video_library_megaphone",VIDEO_UPLOAD_CONFIRMATION_DIALOG:"video_upload_confirmation_dialog",VIDEO_UPLOAD_NOTIF:"video_upload_notif",VIDEOS_HUB:"videos_hub",VIDEOS_YOU_CAN_USE_TIMELINE_PAGELET:"crossposted_timeline_pagelet",LEAD_GEN_DOWNLOAD_DIALOG_FORMS_LIB:"lead_gen_download_dialog_forms_lib",LEAD_GEN_DOWNLOAD_DIALOG_NAM:"lead_gen_download_dialog_nam",LEAD_GEN_DOWNLOAD_DIALOG_NAM_LINK:"lead_gen_download_dialog_nam_link",LEAD_GEN_DOWNLOAD_DIALOG_PE:"lead_gen_download_dialog_pe",LEAD_GEN_DOWNLOAD_DIALOG_PE_LINK:"lead_gen_download_dialog_pe_link",LEAD_GEN_DOWNLOAD_DIALOG_OTHER:"lead_gen_download_dialog_other",LEAD_GEN_FORM_LIBRARY_NOTICE:"lead_gen_form_library_notice",LEAD_GEN_INLINE_FORM_SELECTOR:"lead_gen_inline_form_selector",LEAD_GEN_DOWNLOAD_DIALOG_CONNECT_CRM:"lead_gen_download_dialog_connect_crm",LEAD_GEN_ORGANIC:"lead_gen_organic",WWW_CHATBAR:"www_chatbar",PAGE_EVENTS_TAB:"page_events_tab",PAGES_QR_CODE_DOWNLOAD_AYMT:"pages_qr_code_download_aymt"})}),null);
__d("VideoLibrarySource",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({VIDEO_UPLOAD_CONFIRMATION_DIALOG:"video_upload_confirmation_dialog",OPTIMISTIC_VIDEO_POST:"optimistic_video_post",VIDEO_INSIGHTS:"video_insights",VIDEOS_HUB:"videos_hub"})}),null);
__d("glyph",[],(function(a,b,c,d,e,f){e.exports=function(a){throw new Error("glyph: Unexpected glyph call.")}}),null);
__d("QE",["Banzai","Cache"],(function(a,b,c,d,e,f){__p&&__p();var g="qe_log_exposure",h=60,i=new(b("Cache"))();a={logExposure:function(a,c){var d=c?a+"|"+c:a;if(i.has(d))return;var e={signal:!0};a={name:a,id:null};c&&(a.id=c);b("Banzai").post(g,a,e);i.set(d,!0,1,h)}};e.exports=a}),null);
__d("XVideoEditController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/video/edit/",{v:{type:"Int",required:!0},album:{type:"Int"},source:{type:"Enum",enumType:1},notif_t:{type:"String"}})}),null);
__d("XVideoEditDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/video/edit/dialog/",{video_id:{type:"Int"},source:{type:"Enum",enumType:1},story_dom_id:{type:"String"},timeline_identifier:{type:"String"},post_id:{type:"String"},video_asset_id:{type:"Int"},__asyncDialog:{type:"Int"}})}),null);
__d("XVideoGenerateStoryController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/video/generate_story/",{video_id:{type:"Int"},feed_location:{type:"Enum",enumType:0},timeline_identifier:{type:"String"}})}),null);