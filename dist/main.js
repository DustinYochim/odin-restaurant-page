(()=>{"use strict";var n={917:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),a=t.n(o),r=t(645),i=t.n(r)()(a());i.push([n.id,'/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n',""]);const c=i},426:(n,e,t)=>{t.d(e,{Z:()=>f});var o=t(81),a=t.n(o),r=t(645),i=t.n(r),c=t(667),s=t.n(c),d=new URL(t(660),t.b),l=new URL(t(299),t.b),p=i()(a()),u=s()(d),m=s()(l);p.push([n.id,'@font-face {\n  font-family: "SpongeBob Font Condensed";\n  src: url('+u+');\n  font-weight: 500;\n  font-style: none;\n}\n\n@font-face {\n  font-family: "SpongeBob Font Wide";\n  src: url('+m+');\n  font-weight: 500;\n  font-style: none;\n}\n\nbody {\n  min-height: 100vh;\n  background: rgb(112, 251, 211);\n  background: linear-gradient(\n    90deg,\n    rgba(112, 251, 211, 1) 28%,\n    rgba(48, 171, 240, 1) 86%,\n    rgba(25, 126, 250, 1) 97%\n  );\n  font-family: "SpongeBob Font Condensed";\n}\n\n.content {\n  min-height: 100%;\n\n  line-height: 1.3;\n  font-size: 1.1rem;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.top-nav {\n  /* background-color: rgb(0, 0, 0, 0.9); */\n  overflow: hidden;\n  /* box-shadow: 1px 1px 20px black; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 1rem;\n  padding-top: 1rem;\n}\n\n.top-nav a {\n  /* float: left; */\n  color: rgb(168, 32, 40);\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  border-radius: 4rem;\n  border: none;\n}\n\n.top-nav a:hover {\n  background-color: #ddd;\n  color: black;\n}\n\n.top-nav a.active {\n  color: black;\n}\n\n.page-title {\n  font-family: "SpongeBob Font Wide";\n  width: 100%;\n  font-size: 4rem;\n  text-align: center;\n  color: rgb(168, 32, 40);\n  margin-top: 25px;\n  margin-bottom: 2rem;\n  text-shadow: #fc0 1px 0 10px;\n}\n\n.section-title {\n  font-family: "SpongeBob Font Wide";\n  font-size: 3rem;\n  text-align: center;\n  color: rgb(168, 32, 40);\n  text-shadow: #fc0 1px 0 10px;\n  padding-top: 5rem;\n}\n\n.bg {\n  width: 100vw;\n  box-shadow: 0px 0px 10px black;\n  background-attachment: fixed;\n  border-radius: 3px;\n}\n\n.headline {\n  color: rgb(48, 50, 28);\n  padding: 10px 100px 10px 100px;\n}\n\n.hours-list {\n  margin-top: 1rem;\n  text-align: center;\n}\n\n.hours-list > * {\n  padding: 0.25rem;\n}\n\n.location {\n  text-align: center;\n  margin-top: 2rem;\n  padding-bottom: 4rem;\n}\n\n.footer {\n  text-align: center;\n  padding-bottom: 0.5rem;\n  padding-top: 1rem;\n  text-decoration: none;\n  color: black;\n}\n\na.footer {\n  text-align: center;\n}\n',""]);const f=p},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,a,r){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},i=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],l=r[d]||0,p="".concat(d," ").concat(l);r[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=a(m,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var r=o(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<r.length;i++){var c=t(r[i]);e[c].references--}for(var s=o(n,a),d=0;d<r.length;d++){var l=t(r[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},660:(n,e,t)=>{n.exports=t.p+"baa2891829c7f8acdda2.otf"},299:(n,e,t)=>{n.exports=t.p+"3c63418f22c2f5377725.otf"}},e={};function t(o){var a=e[o];if(void 0!==a)return a.exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.p="",t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=t.p+"256f55a56b352a52cf4c.jpg";var e=t(379),o=t.n(e),a=t(795),r=t.n(a),i=t(569),c=t.n(i),s=t(565),d=t.n(s),l=t(216),p=t.n(l),u=t(589),m=t.n(u),f=t(917),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=p(),o()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;var b=t(426),g={};g.styleTagTransform=m(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=p(),o()(b.Z,g),b.Z&&b.Z.locals&&b.Z.locals,function(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("top-nav");const o=document.createElement("a");o.classList.add("active"),o.href="#home",o.textContent="home",t.appendChild(o);const a=document.createElement("a");a.href="#menu",a.textContent="menu",t.appendChild(a);const r=document.createElement("a");r.href="#contact",r.textContent="contact",t.appendChild(r),e.appendChild(t);const i=new Image;i.src=n,i.classList.add("bg"),e.appendChild(i);const c=document.createElement("h1");c.classList.add("page-title"),c.textContent="The Krusty Krab",e.appendChild(c);const s=document.createElement("div");s.textContent="Our restaurant offers the best burgers in Bikini Bottom, made with fresh and locally sourced ingredients. Our secret recipe has been passed down for generations, and we take pride in serving our customers the finest quality food. In addition to our famous burgers, we also offer a variety of seafood dishes, including our signature Krabby Patties and delicious clam chowder. Our menu is updated seasonally to incorporate the freshest ingredients and provide our customers with new and exciting flavors to try. At the Krusty Krab, we believe that dining out is not just about the food, but also about the experience. Our friendly staff and cozy atmosphere will make you feel right at home. Whether you're looking for a quick bite or a full meal, we've got something for everyone. So come on down to the Krusty Krab and see why we're the talk of Bikini Bottom!",s.classList.add("headline"),e.appendChild(s);const d=document.createElement("h2");d.textContent="Hours",d.classList.add("section-title"),e.appendChild(d);const l=document.createElement("ul");l.classList.add("hours-list");const p=document.createElement("li");p.textContent="Sunday: 8am - 8pm",l.appendChild(p);const u=document.createElement("li");u.textContent="Monday: 6am - 6pm",l.appendChild(u);const m=document.createElement("li");m.textContent="Tuesday: 6am - 6pm",l.appendChild(m);const f=document.createElement("li");f.textContent="Wednesday: 6am - 6pm",l.appendChild(f);const h=document.createElement("li");h.textContent="Thursday: 6am - 10pm",l.appendChild(h);const b=document.createElement("li");b.textContent="Friday: 6am - 10pm",l.appendChild(b);const g=document.createElement("li");g.textContent="Saturday: 8am - 10pm",l.appendChild(g),e.appendChild(l);const v=document.createElement("h2");v.textContent="Location",v.classList.add("section-title"),e.appendChild(v);const y=document.createElement("div");y.textContent="831 Bottom Feeder Lane, Bikini Bottom, Pacific Ocean",y.classList.add("location"),e.appendChild(y);const x=document.createElement("a");x.classList.add("footer"),x.href="https://github.com/DustinYochim",x.textContent="Copyright © 2023 Dustin Yochim",e.appendChild(x)}()})()})();