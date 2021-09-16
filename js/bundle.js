/*! For license information please see bundle.js.LICENSE.txt */
!function(){var t={702:function(t,e,n){t.exports=function(){"use strict";function t(t){return"function"==typeof t}var e=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},r=0,o=void 0,i=void 0,s=function(t,e){h[r]=t,h[r+1]=e,2===(r+=2)&&(i?i(m):_())};var a="undefined"!=typeof window?window:void 0,c=a||{},l=c.MutationObserver||c.WebKitMutationObserver,u="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),d="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function f(){var t=setTimeout;return function(){return t(m,1)}}var h=new Array(1e3);function m(){for(var t=0;t<r;t+=2)(0,h[t])(h[t+1]),h[t]=void 0,h[t+1]=void 0;r=0}var v,p,y,g,_=void 0;function w(t,e){var n=this,r=new this.constructor(x);void 0===r[S]&&I(r);var o=n._state;if(o){var i=arguments[o-1];s((function(){return $(o,r,i,n._result)}))}else M(n,r,t,e);return r}function b(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(x);return A(e,t),e}_=u?function(){return process.nextTick(m)}:l?(p=0,y=new l(m),g=document.createTextNode(""),y.observe(g,{characterData:!0}),function(){g.data=p=++p%2}):d?((v=new MessageChannel).port1.onmessage=m,function(){return v.port2.postMessage(0)}):void 0===a?function(){try{var t=Function("return this")().require("vertx");return void 0!==(o=t.runOnLoop||t.runOnContext)?function(){o(m)}:f()}catch(t){return f()}}():f();var S=Math.random().toString(36).substring(2);function x(){}var E=void 0;function L(e,n,r){n.constructor===e.constructor&&r===w&&n.constructor.resolve===b?function(t,e){1===e._state?C(t,e._result):2===e._state?T(t,e._result):M(e,void 0,(function(e){return A(t,e)}),(function(e){return T(t,e)}))}(e,n):void 0===r?C(e,n):t(r)?function(t,e,n){s((function(t){var r=!1,o=function(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}(n,e,(function(n){r||(r=!0,e!==n?A(t,n):C(t,n))}),(function(e){r||(r=!0,T(t,e))}),t._label);!r&&o&&(r=!0,T(t,o))}),t)}(e,n,r):C(e,n)}function A(t,e){if(t===e)T(t,new TypeError("You cannot resolve a promise with itself"));else if(o=typeof(r=e),null===r||"object"!==o&&"function"!==o)C(t,e);else{var n=void 0;try{n=e.then}catch(e){return void T(t,e)}L(t,e,n)}var r,o}function q(t){t._onerror&&t._onerror(t._result),j(t)}function C(t,e){t._state===E&&(t._result=e,t._state=1,0!==t._subscribers.length&&s(j,t))}function T(t,e){t._state===E&&(t._state=2,t._result=e,s(q,t))}function M(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+1]=n,o[i+2]=r,0===i&&t._state&&s(j,t)}function j(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?$(n,r,o,i):o(i);t._subscribers.length=0}}function $(e,n,r,o){var i=t(r),s=void 0,a=void 0,c=!0;if(i){try{s=r(o)}catch(t){c=!1,a=t}if(n===s)return void T(n,new TypeError("A promises callback cannot return that same promise."))}else s=o;n._state!==E||(i&&c?A(n,s):!1===c?T(n,a):1===e?C(n,s):2===e&&T(n,s))}var k=0;function I(t){t[S]=k++,t._state=void 0,t._result=void 0,t._subscribers=[]}var O=function(){function t(t,n){this._instanceConstructor=t,this.promise=new t(x),this.promise[S]||I(this.promise),e(n)?(this.length=n.length,this._remaining=n.length,this._result=new Array(this.length),0===this.length?C(this.promise,this._result):(this.length=this.length||0,this._enumerate(n),0===this._remaining&&C(this.promise,this._result))):T(this.promise,new Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var e=0;this._state===E&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===b){var o=void 0,i=void 0,s=!1;try{o=t.then}catch(t){s=!0,i=t}if(o===w&&t._state!==E)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===D){var a=new n(x);s?T(a,i):L(a,t,o),this._willSettleAt(a,e)}else this._willSettleAt(new n((function(e){return e(t)})),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===E&&(this._remaining--,2===t?T(r,n):this._result[e]=n),0===this._remaining&&C(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;M(t,void 0,(function(t){return n._settledAt(1,e,t)}),(function(t){return n._settledAt(2,e,t)}))},t}();var D=function(){function e(t){this[S]=k++,this._result=this._state=void 0,this._subscribers=[],x!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(t,e){try{e((function(e){A(t,e)}),(function(e){T(t,e)}))}catch(e){T(t,e)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype.catch=function(t){return this.then(null,t)},e.prototype.finally=function(e){var n=this,r=n.constructor;return t(e)?n.then((function(t){return r.resolve(e()).then((function(){return t}))}),(function(t){return r.resolve(e()).then((function(){throw t}))})):n.then(e,e)},e}();return D.prototype.then=w,D.all=function(t){return new O(this,t).promise},D.race=function(t){var n=this;return e(t)?new n((function(e,r){for(var o=t.length,i=0;i<o;i++)n.resolve(t[i]).then(e,r)})):new n((function(t,e){return e(new TypeError("You must pass an array to race."))}))},D.resolve=b,D.reject=function(t){var e=new this(x);return T(e,t),e},D._setScheduler=function(t){i=t},D._setAsap=function(t){s=t},D._asap=s,D.polyfill=function(){var t=void 0;if(void 0!==n.g)t=n.g;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var r=null;try{r=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===r&&!e.cast)return}t.Promise=D},D.Promise=D,D}()},746:function(){window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,e){e=e||window;for(var n=0;n<this.length;n++)t.call(e,this[n],n,this)})}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){"use strict";n(746);function t(t,e){const n=document.querySelector(t);n.classList.add("show"),n.classList.remove("hide"),document.body.style.overflow="hidden",console.log(e),e&&clearInterval(e),clearInterval(e)}function e(t){const e=document.querySelector(t);e.classList.add("hide"),e.classList.remove("show"),document.body.style.overflow=""}n(702).polyfill(),window.addEventListener("DOMContentLoaded",(function(){const n=setTimeout((()=>t(".modal",n)),5e4);(function(t,e,n,r){const o=document.querySelectorAll(t),i=document.querySelectorAll(e),s=document.querySelector(n);function a(){i.forEach((t=>{t.classList.add("hide"),t.classList.remove("show","fade")})),o.forEach((t=>{t.classList.remove(r)}))}function c(t=0){i[t].classList.add("show","fade"),i[t].classList.remove("hide"),o[t].classList.add(r)}a(),c(),s.addEventListener("click",(e=>{const n=e.target;n&&n.classList.contains(t.slice(1))&&o.forEach(((t,e)=>{n==t&&(a(),c(e))}))}))})(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active"),function(n,r,o){const i=document.querySelectorAll(n),s=document.querySelector(r);i.forEach((e=>{e.addEventListener("click",(()=>t(r,o)))})),s.addEventListener("click",(t=>{t.target!==s&&""!=t.target.getAttribute("data-close")||e(r)})),document.addEventListener("keydown",(t=>{"Escape"===t.code&&s.classList.contains("show")&&e(r)})),window.addEventListener("scroll",(function e(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(t(r,o),window.removeEventListener("scroll",e))}))}("[data-modal]",".modal",n),function(t,e){function n(t){return t>=0&&t<10?`0${t}`:t}!function(t,e){const r=document.querySelector(t),o=r.querySelector("#days"),i=r.querySelector("#hours"),s=r.querySelector("#minutes"),a=r.querySelector("#seconds"),c=setInterval(l,1e3);function l(){const t=function(t){const e=Date.parse(t)-Date.parse(new Date);return{total:e,days:Math.floor(e/864e5),hours:Math.floor(e/36e5%24),minutes:Math.floor(e/1e3/60%60),seconds:Math.floor(e/1e3%60)}}(e);o.innerHTML=n(t.days),i.innerHTML=n(t.hours),s.innerHTML=n(t.minutes),a.innerHTML=n(t.seconds),t.total<=0&&clearInterval(c)}l()}(t,e)}(".timer","2020-06-11"),async function(t){let e=await fetch(t);if(!e.ok)throw new Error(`Could not fetch ${t}, status: ${e.status}`);return await e.json()}("http://localhost:3000/menu").then((t=>function(t){t.forEach((({img:t,altimg:e,title:n,descr:r,price:o})=>{const i=document.createElement("div");i.classList.add("menu__item"),i.innerHTML=`\n            <img src=${t} alt=${e}>\n                    <h3 class="menu__item-subtitle">${n}</h3>\n                    <div class="menu__item-descr">${r}</div>\n                    <div class="menu__item-divider"></div>\n                    <div class="menu__item-price">\n                        <div class="menu__item-cost">Цена:</div>\n                        <div class="menu__item-total"><span>${o}</span> грн/день</div>\n                    </div>\n            `,document.querySelector(".menu .container").append(i)}))}(t))),function(){const t=document.querySelector(".calculating__result span");let e,n,r,o,i;function s(t,e){document.querySelectorAll(t).forEach((t=>{t.classList.remove(e),t.getAttribute("id")===localStorage.getItem("sex")&&t.classList.add(e),t.getAttribute("data-ratio")===localStorage.getItem("ratio")&&t.classList.add(e)}))}function a(){t.textContent=e&&n&&r&&o&&i?"female"===e?Math.round((447.6+9.2*r+3.1*n-4.3*o)*i):Math.round((88.36+13.4*r+4.8*n-5.7*o)*i):"____"}function c(t,n){const r=document.querySelectorAll(t);r.forEach((t=>{t.addEventListener("click",(t=>{t.target.getAttribute("data-ratio")?(i=+t.target.getAttribute("data-ratio"),localStorage.setItem("ratio",+t.target.getAttribute("data-ratio"))):(e=t.target.getAttribute("id"),localStorage.setItem("sex",t.target.getAttribute("id"))),r.forEach((t=>{t.classList.remove(n)})),t.target.classList.add(n),a()}))}))}function l(t){const e=document.querySelector(t);e.addEventListener("input",(()=>{switch(e.value.match(/\D/g)?e.style.border="1px solid red":e.style.border="none",e.getAttribute("id")){case"height":n=+e.value;break;case"weight":r=+e.value;break;case"age":o=+e.value}a()}))}localStorage.getItem("sex")?e=localStorage.getItem("sex"):(e="female",localStorage.setItem("sex","female")),localStorage.getItem("ratio")?i=localStorage.getItem("ratio"):(i="female",localStorage.setItem("ratio",1.375)),s("#gender div","calculating__choose-item_active"),s(".calculating__choose_big div","calculating__choose-item_active"),a(),c("#gender div","calculating__choose-item_active"),c(".calculating__choose_big div","calculating__choose-item_active"),l("#height"),l("#weight"),l("#age")}(),function(n,r){function o(n){const o=document.querySelector(".modal__dialog");o.classList.add("hide"),t(".modal",r);const i=document.createElement("div");i.classList.add("modal__dialog"),i.innerHTML=`\n            <div class="modal__content">\n                <div class="modal__close" data-close>×</div>\n                <div class="modal__title">${n}</div>\n            </div>\n        `,document.querySelector(".modal").append(i),setTimeout((()=>{i.remove(),o.classList.add("show"),o.classList.remove("hide"),e(".modal")}),4e3)}document.querySelectorAll(n).forEach((t=>{var e;(e=t).addEventListener("submit",(t=>{t.preventDefault();const n=document.createElement("img");n.src="img/form/spinner.svg",n.style.cssText="\n                display: block;\n                margin: 0 auto;\n            ",e.insertAdjacentElement("afterend",n);const r=new FormData(e);(async(t,e)=>{const n=await fetch("http://localhost:3000/requests",{method:"POST",headers:{"Content-type":"application/json"},body:e});return await n.json()})(0,JSON.stringify(Object.fromEntries(r.entries()))).then((t=>{console.log(t),o("Спасибо! Скоро мы с вами свяжемся"),e.reset(),n.remove()})).catch((()=>{o("Что-то пошло не так...")})).finally((()=>{e.reset()}))}))}))}("form",n),function({container:t,slide:e,nextArrow:n,prevArrow:r,totalCounter:o,currentCounter:i,wrapper:s,field:a}){let c=0,l=1;const u=document.querySelectorAll(e),d=document.querySelector(t),f=document.querySelector(r),h=document.querySelector(n),m=document.querySelector(o),v=document.querySelector(i),p=document.querySelector(s),y=window.getComputedStyle(p).width,g=document.querySelector(a);u.length<10?(m.textContent=`0${u.length}`,v.textContent=`0${l}`):(m.textContent=u.length,v.textContent=l),g.style.width=100*u.length+"%",g.style.display="flex",g.style.transition="0.5s all",p.style.overflow="hidden",u.forEach((t=>{t.style.width=y})),d.style.position="relative";const _=document.createElement("ol"),w=[];_.classList.add("carousel-indicators"),_.style.cssText="\n        position: absolute;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        z-index: 15;\n        display: flex;\n        justify-content: center;\n        margin-right: 15%;\n        margin-left: 15%;\n        list-style: none;\n    ",d.append(_);for(let t=0;t<u.length;t++){const e=document.createElement("li");e.setAttribute("data-slide-to",t+1),e.style.cssText="\n            box-sizing: content-box;\n            flex: 0 1 auto;\n            width: 30px;\n            height: 6px;\n            margin-right: 3px;\n            margin-left: 3px;\n            cursor: pointer;\n            background-color: #fff;\n            background-clip: padding-box;\n            border-top: 10px solid transparent;\n            border-bottom: 10px solid transparent;\n            opacity: .5;\n            transition: opacity .6s ease;\n        ",0==t&&(e.style.opacity=1),_.append(e),w.push(e)}function b(t){return+t.replace(/\D/g,"")}h.addEventListener("click",(()=>{c==b(y)*(u.length-1)?c=0:c+=b(y),g.style.transform=`translateX(-${c}px)`,l==u.length?l=1:l++,u.length<10?v.textContent=`0${l}`:v.textContent=l,w.forEach((t=>t.style.opacity=".5")),w[l-1].style.opacity=1})),f.addEventListener("click",(()=>{0==c?c=b(y)*(u.length-1):c-=b(y),g.style.transform=`translateX(-${c}px)`,1==l?l=u.length:l--,u.length<10?v.textContent=`0${l}`:v.textContent=l,w.forEach((t=>t.style.opacity=".5")),w[l-1].style.opacity=1})),w.forEach((t=>{t.addEventListener("click",(t=>{const e=t.target.getAttribute("data-slide-to");l=e,c=b(y)*(e-1),g.style.transform=`translateX(-${c}px)`,u.length<10?v.textContent=`0${l}`:v.textContent=l,w.forEach((t=>t.style.opacity=".5")),w[l-1].style.opacity=1}))}))}({container:".offer__slider",slide:".offer__slide",nextArrow:".offer__slider-next",prevArrow:".offer__slider-prev",totalCounter:"#total",currentCounter:"#current",wrapper:".offer__slider-wrapper",field:".offer__slider-inner"})}))}()}();
//# sourceMappingURL=bundle.js.map