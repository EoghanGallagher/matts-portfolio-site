if (self.CavalryLogger) { CavalryLogger.start_js(["LIJhb"]); }

__d("MessengerDivebarGroupSectionTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:MessengerDivebarGroupSectionLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:MessengerDivebarGroupSectionLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:MessengerDivebarGroupSectionLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setCanSeeMockThread=function(a){this.$1.can_see_mock_thread=a;return this};a.prototype.setGroupsSectionHidden=function(a){this.$1.groups_section_hidden=a;return this};a.prototype.setNewDataSource=function(a){this.$1.new_data_source=a;return this};a.prototype.setNumThreadsActive=function(a){this.$1.num_threads_active=a;return this};a.prototype.setNumThreadsGenned=function(a){this.$1.num_threads_genned=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};c={can_see_mock_thread:!0,groups_section_hidden:!0,new_data_source:!0,num_threads_active:!0,num_threads_genned:!0,vc:!0};e.exports=a}),null);
__d("XSalesPromoWWWDetailsDialogAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/sales_promo/details/",{offer_id:{type:"FBID",required:!0},referrer:{type:"String"}})}),null);