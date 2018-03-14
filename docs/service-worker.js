"use strict";var precacheConfig=[["./index.html","d6b0fce14965f6e3ed2d84c51705c26d"],["./static/css/main.39c60979.css","2b16fd0288525848a5ff0cdfad31f669"],["./static/js/main.c6e5799f.js","7c960a3485a5cd1dd25a1464fcde1e1d"],["./static/media/banner-background.8a27c38f.png","8a27c38ffe7e57bd68a879b299055efa"],["./static/media/banner-graphic.a017a8da.png","a017a8dabbd27b815e742dfbe37b92b3"],["./static/media/digital-7.1e670d88.ttf","1e670d88b23c7ab956f1829e3828a210"],["./static/media/feature-graphic-1.9f96f5ce.png","9f96f5cec63aeed46fca3784653fc490"],["./static/media/feature-graphic-2.22df4f64.png","22df4f64934aac02d2369ca4b5347154"],["./static/media/feature-graphic-3.45023856.png","45023856a34d518b43201461f00d1a1a"],["./static/media/feature-summary-background.041e1e16.png","041e1e167ccf3d8e2830261982fa2818"],["./static/media/footer-background.e318a0b9.png","e318a0b923b29ec982a29f329fab3ce3"],["./static/media/logo.e7b1a969.png","e7b1a9696339225d89f21eefe03f2b9d"],["./static/media/roadmap-background.ea669c23.png","ea669c23737357cedb6c6fc49d8edb4a"],["./static/media/roadmap-schedule-desktop.f7a31db9.png","f7a31db9b9b1a47c5768d14e93d2dbf7"],["./static/media/roadmap-schedule-mobile.e3c28fba.png","e3c28fbae76ffb53a92d47de1c88dd67"],["./static/media/team-aaron.09167b8e.jpeg","09167b8e50aec8e5ca197f2c6c3e2ffb"],["./static/media/team-edmund.669fae27.png","669fae2777abe71caee958cb0629862e"],["./static/media/team-jonathan.37a76413.jpeg","37a76413e15e107799f2aa8e3fc791ee"],["./static/media/token-allocation-background.29ff131d.png","29ff131df4238616c13750c773091a9a"],["./static/media/token-allocation-graph-desktop.30e61a4b.png","30e61a4b1823ed5000845cbba766c752"],["./static/media/token-allocation-graph-mobile.6f3b02f5.png","6f3b02f5882e9485a93cb8599da31b6d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var r="./index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});