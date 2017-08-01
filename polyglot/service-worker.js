"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","ee0e3168d5e25bf8f681b2d3c8f4d569"],["static/css/main.fe0ac746.css","0cec70754fcf69cae72eeaf3308368f4"],["static/js/main.04dc89e6.js","7bbe0991e14d20ecd6a050d8abc3a52d"],["static/media/340017_0_0.5aedd68f.woff","5aedd68f2e3b39a2459961eb97d602ab"],["static/media/340017_0_0.b017fbd7.woff2","b017fbd7fe52b911eae1f11f765bc266"],["static/media/340017_0_0.e174edae.ttf","e174edae794901872114629aff7e5dd9"],["static/media/340017_0_0.ee5b2e64.eot","ee5b2e64af3463d8e96cdaa5a9dde4a7"],["static/media/340017_1_0.28823f32.woff2","28823f32d709ce8d37045158e237a2b5"],["static/media/340017_1_0.36cb130d.ttf","36cb130dff97825f4731f1646e784e65"],["static/media/340017_1_0.a7bce298.eot","a7bce298b200b056555ed23257fa7a8c"],["static/media/340017_1_0.c31a69ce.woff","c31a69ce339984e243657bf6e5affe1d"],["static/media/340017_2_0.62928874.eot","629288746fc724a6deb4c709d06d29d3"],["static/media/340017_2_0.974882ac.woff","974882acb614f0ee17c224333e7eb421"],["static/media/340017_2_0.f7c82168.woff2","f7c821681eec6e06fbec976f59c03807"],["static/media/340017_2_0.fdb36848.ttf","fdb36848fa8c9bf3bb6fa6f3d680a439"],["static/media/340017_3_0.0ebc3dec.woff","0ebc3deca63dd32e3dabb34c476f59a8"],["static/media/340017_3_0.46f0ad5d.woff2","46f0ad5da8fd4438a2975affd01751b8"],["static/media/340017_3_0.6b747379.eot","6b747379a14428f135b1981b2c904217"],["static/media/340017_3_0.7198b439.ttf","7198b439c2c676188b9080b1a391fd96"],["static/media/340017_4_0.1f1f2c58.woff2","1f1f2c58410c31e808a445467aa673df"],["static/media/340017_4_0.777a4c07.woff","777a4c0794d18859b4dc32892a608cb1"],["static/media/340017_4_0.959ebd0e.ttf","959ebd0e16ba2d77968491de25a92d80"],["static/media/340017_4_0.e4089984.eot","e408998458746967e388b9cc87a772c6"],["static/media/340017_5_0.4a562359.woff2","4a5623598cf935c093103bea7d1635d7"],["static/media/340017_5_0.78c7ac8b.ttf","78c7ac8b757f8fe8b0682cd21016e9b2"],["static/media/340017_5_0.ef8c2fb9.woff","ef8c2fb95f5a6a5deac4f235a92dfebc"],["static/media/340017_5_0.f21fb037.eot","f21fb03720365d43173ca0c50e4e87d8"],["static/media/340017_6_0.3752928a.eot","3752928a8e43742eb02f38cdb89573fc"],["static/media/340017_6_0.dbd62b72.woff2","dbd62b721caae0fc4f63cc737797ef18"],["static/media/340017_6_0.e3a01231.woff","e3a01231278d1809953a922b89395986"],["static/media/340017_6_0.e99066a9.ttf","e99066a9c8d7ec8dbee3b8e2bd6de8e3"],["static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["static/media/glyphicons-halflings-regular.448c34a5.woff2","448c34a56d699c29117adc64c43affeb"],["static/media/glyphicons-halflings-regular.89889688.svg","89889688147bd7575d6327160d64e760"],["static/media/glyphicons-halflings-regular.e18bbf61.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["static/media/glyphicons-halflings-regular.f4769f9b.eot","f4769f9bdb7466be65088239c12046d1"],["static/media/glyphicons-halflings-regular.fa277232.woff","fa2772327f55d8198301fdb8bcfc8158"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var f=new URL(e);return c&&f.pathname.match(c)||(f.search+=(f.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),f.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),f=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),f]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);a=urlsToCacheKeys.has(t);a||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("./index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});