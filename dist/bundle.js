(()=>{"use strict";var n,t,e,a,i,o,s,r,l,c,h,d,p,m,g={426:(n,t,e)=>{e.d(t,{Z:()=>$});var a=e(81),i=e.n(a),o=e(645),s=e.n(o),r=e(667),l=e.n(r),c=new URL(e(363),e.b),h=new URL(e(573),e.b),d=new URL(e(778),e.b),p=new URL(e(39),e.b),m=new URL(e(529),e.b),g=new URL(e(68),e.b),u=new URL(e(463),e.b),v=new URL(e(718),e.b),f=new URL(e(730),e.b),w=new URL(e(417),e.b),y=new URL(e(682),e.b),b=new URL(e(274),e.b),x=new URL(e(826),e.b),z=s()(i());z.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap);"]);var A=l()(c),C=l()(h),M=l()(d),H=l()(p),E=l()(m),L=l()(g),k=l()(u),I=l()(v),S=l()(f),j=l()(w),R=l()(y),U=l()(b),T=l()(x);z.push([n.id,`:root { \n  /* \n    Pictures from Unsplash:\n    sunny - https://unsplash.com/photos/3ihnKT5apmg\n    partially sunny - https://unsplash.com/photos/AnGx1n-gtw8\n    cloudy - https://unsplash.com/photos/vXU_wJ7YmNc\n    cloud sky - https://unsplash.com/photos/LtWFFVi1RXQ\n    rainy - https://unsplash.com/photos/WoH0n8syvzA\n    foggy - https://unsplash.com/photos/XacZR1cmC2A\n    tunderstorm - https://unsplash.com/photos/H1g_8rYND9M\n    snow - https://unsplash.com/photos/IWenq-4JHqo\n    night sky - https://unsplash.com/photos/rCbdp8VCYhQ\n    night sky cloudy - https://unsplash.com/photos/rk2s0sm8xF4\n    windy - https://unsplash.com/photos/sCFKb-7K130\n  */\n  /* template url('data:image/svg+xml,'); */\n  --sunny-day: url(${A});\n  --partially-sunny: url(${C});\n  --cloud: url(${M});\n  --rainy: url(${H});\n  --rain-heavy: url(${E});\n  --foggy: url(${L});\n  --tunderstorm: url(${k});\n  --tunderstorm-rain: url(${I});\n  --snow: url(${S});\n  --rain-snow: url(${j});\n  --cloudy-night: url(${R});\n  --night: url(${U});\n  --strong-wind: url(${T});\n\n  /* Weather temp symbols - ℃ / ℉ */\n}\n\n.sunny {\n  content: var(--sunny-day);\n}\n\n.partially-sunny {\n  content: var(--partially-sunny);\n}\n\n.cloudy {\n  content: var(--cloud);\n}\n\n.rainy {\n  content: var(--rainy);\n}\n\n.rain-heavy {\n  content: var(--rain-heavy);\n}\n\n.foggy {\n  content: var(--foggy);\n}\n\n.tunderstorm {\n  content: var(--tunderstorm);\n}\n\n.tunderstorm-rain {\n  content: var(--tunderstorm-rain);\n}\n\n.snow {\n  content: var(--snow);\n}\n\n.rain-snow {\n  content: var(--rain-snow);\n}\n\n* {\n   box-sizing: border-box;\n   margin: 0;\n   padding: 0;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n\n  display: grid;\n  grid-template-rows: 2fr 1fr;\n  grid-template-areas: \n    'top top'\n    'bottom bottom';\n\n  gap: 10px;\n  padding: 10px;\n}\n\nh1, h2, h3 {\n  font-family: 'Poppins', Arial, Helvetica, sans-serif;\n}\n\np, label {\n  font-family: 'Roboto', Arial, Helvetica, sans-serif;\n}\n\n.top-container {\n  grid-area: top;\n\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  grid-template-areas: \n    'left central';\n\n  gap: 10px;\n}\n\n.bottom-container {\n  grid-area: bottom;\n  border: 2px solid black;\n}\n\n.left-section {\n  grid-area: left;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  border: 2px solid black;\n}\n\n.today-card {\n  display: flex;\n  flex-direction: column;\n\n  height: 95%;\n  width: 70%;\n\n  padding: 20px 30px;\n\n  border: 2px solid black;\n  border-radius: 20px;\n}\n\n.today-card h2 {\n  font-size: 3em;\n}\n\n.today-card h3 {\n  font-size: 1.8em;\n}\n\n.today-card h2:last-of-type {\n  align-self: center;\n  font-size: 5em;\n}\n\n.today-card h2:last-of-type::after {\n  content: '℃';\n}\n\n.today-card span {\n  align-self: center;\n  height: 160px;\n  width: 160px;\n  margin-bottom: 4.5em;\n}\n\n.today-card p {\n  align-self: flex-end;\n  margin-bottom: 0.5em;\n  font-size: 1.4em;\n}\n\n.today-card p:last-of-type {\n  align-self: flex-end;\n  font-size: 1.8em;\n}\n\n.central-section {\n  grid-area: central;\n\n  display: grid;\n  grid-template-rows: 1fr 1fr 2fr;\n  grid-template-areas:\n    'toggle'\n    'search'\n    'advance';\n\n  gap: 10px;\n}\n\n.toggle-section {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  padding: 0 10px;\n\n  border: 2px solid black;\n}\n\n.title {\n  align-self: flex-start;\n\n  font-size: 3.5em;\n}\n\n.input-toggle {\n  position: relative;\n\n  height: 40px;\n  width: 80px;\n\n  border-radius: 20px;\n  background: gray;\n  box-shadow: inset 0 0 5px rgba(0, 0, 0, .2);\n\n  transition: 0.5s ease-in-out;\n\n  outline: none;\n  appearance: none; \n}\n\n.input-toggle:checked {\n  background: blue;\n}\n\n.input-toggle::before {\n  position: absolute;\n  \n  content: '';\n  \n  width: 40px;\n  height: 40px;\n\n  border-radius: 20px;\n  background: black;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n\n  transform: scale(1.1);\n  transition: 1s ease-in-out;\n}\n\n.input-toggle:checked::before {\n  left: 40px;\n}\n\n.search-section {\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n\n  align-items: center;\n  justify-content: center;\n\n  border: 2px solid black;\n}\n\n.input-label {\n  position: absolute;\n\n  font-size: 2.1em;\n  text-align: center;\n\n  width: 3.4em;\n\n  background: white;\n  border-radius: 4px;\n\n  left: 34%;\n\n  transition: 0.25s ease-in-out;\n}\n\n#search-input {\n  height: 2em;\n  width: 34%;\n\n  font-size: 1.8em;\n\n  padding-left: 10px;\n\n  border: none;\n\n  border-bottom: 2px solid black;\n\n  outline: none;\n}\n\n#search-input:focus + .input-label,\n#search-input:hover + .input-label,\n#search-input:not(:placeholder-shown) + .input-label {\n  transform: translateY(-1.4em);\n\n  font-size: 1.5em;\n}\n\n.advance-section {\n  border: 2px solid black;\n}`,""]);const $=z},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",a=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),a&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),a&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,a,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var s={};if(a)for(var r=0;r<this.length;r++){var l=this[r][0];null!=l&&(s[l]=!0)}for(var c=0;c<n.length;c++){var h=[].concat(n[c]);a&&s[h[0]]||(void 0!==o&&(void 0===h[5]||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=o),e&&(h[2]?(h[1]="@media ".concat(h[2]," {").concat(h[1],"}"),h[2]=e):h[2]=e),i&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=i):h[4]="".concat(i)),t.push(h))}},t}},667:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,a=0;a<t.length;a++)if(t[a].identifier===n){e=a;break}return e}function a(n,a){for(var o={},s=[],r=0;r<n.length;r++){var l=n[r],c=a.base?l[0]+a.base:l[0],h=o[c]||0,d="".concat(c," ").concat(h);o[c]=h+1;var p=e(d),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var g=i(m,a);a.byIndex=r,t.splice(r,0,{identifier:d,updater:g,references:1})}s.push(d)}return s}function i(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,i){var o=a(n=n||[],i=i||{});return function(n){n=n||[];for(var s=0;s<o.length;s++){var r=e(o[s]);t[r].references--}for(var l=a(n,i),c=0;c<o.length;c++){var h=e(o[c]);0===t[h].references&&(t[h].updater(),t.splice(h,1))}o=l}}},569:n=>{var t={};n.exports=function(n,e){var a=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var a="";e.supports&&(a+="@supports (".concat(e.supports,") {")),e.media&&(a+="@media ".concat(e.media," {"));var i=void 0!==e.layer;i&&(a+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),a+=e.css,i&&(a+="}"),e.media&&(a+="}"),e.supports&&(a+="}");var o=e.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(a,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},363:n=>{n.exports='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16"><path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/></svg>'},778:n=>{n.exports='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" class="bi bi-cloud" viewBox="0 0 16 16"><path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/></svg>'},68:n=>{n.exports='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" class="bi bi-cloud-haze" viewBox="0 0 16 16"><path d="M4 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm2 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM13.405 4.027a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973zM8.5 1a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 1z"/></svg>'},463:n=>{n.exports='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" class="bi bi-cloud-lightning" viewBox="0 0 16 16"><path d="M13.405 4.027a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973zM8.5 1a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 1zM7.053 11.276A.5.5 0 0 1 7.5 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724l1-2z"/></svg>'},718:n=>{n.exports='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" class="bi bi-cloud-lightning-rain-fill" viewBox="0 0 16 16"><path d="M2.658 11.026a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-7.5 1.5a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-7.105-1.25A.5.5 0 0 1 7.5 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724l1-2zm6.352-7.249a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973z"/></svg>'},682:n=>{n.exports='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" class="bi bi-cloud-moon" viewBox="0 0 16 16"><path d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .625.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .509-.375A3.502 3.502 0 0 1 7 8zm4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z"/><path d="M11.286 1.778a.5.5 0 0 0-.565-.755 4.595 4.595 0 0 0-3.18 5.003 5.46 5.46 0 0 1 1.055.209A3.603 3.603 0 0 1 9.83 2.617a4.593 4.593 0 0 0 4.31 5.744 3.576 3.576 0 0 1-2.241.634c.162.317.295.652.394 1a4.59 4.59 0 0 0 3.624-2.04.5.5 0 0 0-.565-.755 3.593 3.593 0 0 1-4.065-5.422z"/></svg>'},39:n=>{n.exports='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" class="bi bi-cloud-rain" viewBox="0 0 16 16"><path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 0 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm.247-6.998a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973zM8.5 2a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 2z"/></svg>'},529:n=>{n.exports='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" class="bi bi-cloud-rain-heavy" viewBox="0 0 16 16"><path d="M4.176 11.032a.5.5 0 0 1 .292.643l-1.5 4a.5.5 0 1 1-.936-.35l1.5-4a.5.5 0 0 1 .644-.293zm3 0a.5.5 0 0 1 .292.643l-1.5 4a.5.5 0 1 1-.936-.35l1.5-4a.5.5 0 0 1 .644-.293zm3 0a.5.5 0 0 1 .292.643l-1.5 4a.5.5 0 1 1-.936-.35l1.5-4a.5.5 0 0 1 .644-.293zm3 0a.5.5 0 0 1 .292.643l-1.5 4a.5.5 0 0 1-.936-.35l1.5-4a.5.5 0 0 1 .644-.293zm.229-7.005a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973zM8.5 1a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 1z"/></svg>'},417:n=>{n.exports='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" class="bi bi-cloud-sleet" viewBox="0 0 16 16"><path d="M13.405 4.027a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973zM8.5 1a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 1zM2.375 13.5a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm1.849-2.447a.5.5 0 0 1 .223.67l-.5 1a.5.5 0 1 1-.894-.447l.5-1a.5.5 0 0 1 .67-.223zM6.375 13.5a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm1.849-2.447a.5.5 0 0 1 .223.67l-.5 1a.5.5 0 1 1-.894-.447l.5-1a.5.5 0 0 1 .67-.223zm2.151 2.447a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm1.849-2.447a.5.5 0 0 1 .223.67l-.5 1a.5.5 0 1 1-.894-.447l.5-1a.5.5 0 0 1 .67-.223z"/></svg>'},730:n=>{n.exports='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" class="bi bi-cloud-snow" viewBox="0 0 16 16"><path d="M13.405 4.277a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10.25H13a3 3 0 0 0 .405-5.973zM8.5 1.25a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1-.001 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 1.25zM2.625 11.5a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm2.75 2a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm5.5 0a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm-2.75-2a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm5.5 0a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25z"/></svg>'},573:n=>{n.exports='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" class="bi bi-cloud-sun" viewBox="0 0 16 16"><path d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .624.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .51-.375A3.502 3.502 0 0 1 7 8zm4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z"/><path d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708l.707-.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708l-.708-.707zm1.734 3.374a2 2 0 1 1 3.296 2.198c.199.281.372.582.516.898a3 3 0 1 0-4.84-3.225c.352.011.696.055 1.028.129zm4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377zM14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/></svg>'},274:n=>{n.exports='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/></svg>'},826:n=>{n.exports='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" class="bi bi-wind" viewBox="0 0 16 16"><path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z"/></svg>'}},u={};function v(n){var t=u[n];if(void 0!==t)return t.exports;var e=u[n]={id:n,exports:{}};return g[n](e,e.exports,v),e.exports}v.m=g,v.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return v.d(t,{a:t}),t},v.d=(n,t)=>{for(var e in t)v.o(t,e)&&!v.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},v.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),v.b=document.baseURI||self.location.href,v.nc=void 0,n=v(379),t=v.n(n),e=v(795),a=v.n(e),i=v(569),o=v.n(i),s=v(565),r=v.n(s),l=v(216),c=v.n(l),h=v(589),d=v.n(h),p=v(426),(m={}).styleTagTransform=d(),m.setAttributes=r(),m.insert=o().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=c(),t()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals,new class{constructor(n,t){this.model=n,this.view=t,this.handleTodayCard(),this.view.handleInput(this.handleTodayInput)}handleTodayCard=async()=>{const n=await this.model.defaultLocation();if(n){const t=n.data.location,e=n.data.current;this.view.todayWeatherCard(t.name,t.country,e.temp_c,e.condition.text,e.last_updated)}};handleTodayInput=async n=>{const t=await this.model.getLocation(n);if(console.log(t),t){const n=t.data.location,e=t.data.current;this.view.todayWeatherCard(n.name,n.country,e.temp_c,e.condition.text,e.last_updated)}}}(new class{constructor(){this.imageArray=[{id:1,name:"sunny"},{id:2,name:"partially-sunny"},{id:3,name:"clear-sky"},{id:4,name:"cloudy"},{id:5,name:"cloud-Sky"},{id:6,name:"rainy"},{id:7,name:"foggy"},{id:8,name:"snowing"},{id:9,name:"windy"},{id:10,name:"night-sky-cloudy"},{id:11,name:"tunderstorm"}],this.addImagesToObj()}addImagesToObj(){const n=new Image;n.src="../images/sunny.jpg",this.imageArray[0].image=n;const t=new Image;t.src="../images/partially-sunny.jpg",this.imageArray[1].image=t;const e=new Image;e.src="../images/clear-sky.jpg",this.imageArray[2].image=e;const a=new Image;a.src="../images/cloudy.jpg",this.imageArray[3].image=a;const i=new Image;i.src="../images/cloud.jpg",this.imageArray[4].image=i;const o=new Image;o.src="../images/rainy.jpg",this.imageArray[5].image=o;const s=new Image;s.src="../images/foggy.jpg",this.imageArray[6].image=s;const r=new Image;r.src="../images/snowing.jpg",this.imageArray[7].image=r;const l=new Image;l.src="../images/windy.jpg",this.imageArray[8].image=l;const c=new Image;c.src="../images/night-sky-cloudy.jpg",this.imageArray[9].image=c;const h=new Image;h.src="../images/tunderstorm.jpg",this.imageArray[10].image=h}async defaultLocation(){try{const n=await fetch("https://api.weatherapi.com/v1/current.json?key=757ce984dbc947619fd83911232708&q=$Novi+Sad",{mode:"cors"});return{data:await n.json()}}catch(n){console.log(n)}}async getLocation(n){try{const t=await fetch(`https://api.weatherapi.com/v1/current.json?key=757ce984dbc947619fd83911232708&q=${n}`,{mode:"cors"});return{data:await t.json()}}catch(n){console.log(n)}}},new class{constructor(){this.topContainer=this.createElement("div","top-container"),this.bottomContainer=this.createElement("div","bottom-container"),this.leftSection=this.createElement("div","left-section"),this.centralSection=this.createElement("div","central-section"),this.toggleSection=this.createElement("div","toggle-section"),this.searchSection=this.createElement("div","search-section"),this.advanceSection=this.createElement("div","advance-section"),this.title=this.createElement("h1","title"),this.title.textContent="Weather APP",this.toggleInput=this.createElement("input","input-toggle"),this.toggleInput.type="checkbox",this.inputLabel=this.createElement("label","input-label"),this.inputLabel.htmlFor="search-input",this.inputLabel.textContent="Search",this.input=this.createElement("input"),this.input.id="search-input",this.input.type="text",this.input.placeholder="",this.toggleSection.append(this.title,this.toggleInput),this.searchSection.append(this.input,this.inputLabel),this.centralSection.append(this.toggleSection,this.searchSection,this.advanceSection),this.topContainer.append(this.leftSection,this.centralSection),document.body.append(this.topContainer,this.bottomContainer)}createElement(n,t){const e=document.createElement(n);return t&&e.classList.add(t),e}todayWeatherCard(n,t,e,a,i){for(;this.leftSection.firstChild;)this.leftSection.removeChild(this.leftSection.firstChild);const o=this.createElement("div","today-card"),s=this.createElement("h2","city-name");s.textContent=n;const r=this.createElement("h3","country-name");r.textContent=t;const l=this.createElement("h2","temperature");l.textContent=e;const c=this.createElement("span");c.classList.add("sunny");const h=this.createElement("p","weather-text");h.textContent=a;const d=this.createElement("p","date-time");d.textContent=i,o.append(s,r,l,c,h,d),this.leftSection.append(o)}futureWeatherCard(){const n=this.createElement("div","future-card"),t=this.createElement("h3","day"),e=this.createElement("span","future-weather-icon"),a=this.createElement("h2","max-temperature"),i=this.createElement("h3","min-temperature");n.append(t,e,a,i)}getBackground(){}handleInput(n){this.input.addEventListener("keypress",(t=>{"Enter"===t.key&&n(this.input.value)}))}})})();