if (self.CavalryLogger) { CavalryLogger.start_js(["GpHEt"]); }

__d("BrowserPushMessageRedirectUtil",["Bootloader"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){var c="(messages)(.*?)(?:(tid=))([^&]*)";a=a.match(c);if(!a)return!0;var d=a.pop();b("Bootloader").loadModules(["FantaTabActions"],function(a){a.openTab(d)},"BrowserPushMessageRedirectUtil");return!1};e.exports=a}),null);