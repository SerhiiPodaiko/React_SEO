/*! For license information please see 935.59782d0e24dc14372b8c.js.LICENSE.txt */
"use strict";(self.webpackChunkproxy_seller_test_task_seo=self.webpackChunkproxy_seller_test_task_seo||[]).push([[935],{243:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r(861).Z.create({baseURL:"".concat("https://jsonplaceholder.typicode.com/".replace(/\/$/,"")),headers:{"Content-Type":"application/json"}})},9:(t,e,r)=>{r.r(e),r.d(e,{default:()=>A});var n=r(593);const o="OjZrL82WkVNP_eM5mTEm",i="SgMdknyx0aKUATn23LS_",a="ROGq3778wVqcaR9gwO7s",c="e3GHe1kfRqPIPvzVs8Sd",s="EEe9z4mxHYOOTTtNu3tQ",u="buUNJqX5JSg1sOgvkASA";var l=r(294),f=r(243);function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function p(){p=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof b?e:b,a=Object.create(i.prototype),c=new A(n||[]);return o(a,"_invoke",{value:P(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var y="suspendedStart",d="suspendedYield",m="executing",v="completed",g={};function b(){}function x(){}function w(){}var j={};u(j,a,(function(){return this}));var O=Object.getPrototypeOf,S=O&&O(O(T([])));S&&S!==r&&n.call(S,a)&&(j=S);var E=w.prototype=b.prototype=Object.create(j);function L(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function N(t,e){function r(o,i,a,c){var s=f(t[o],t,i);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==h(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function P(e,r,n){var o=y;return function(i,a){if(o===m)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var s=k(c,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var u=f(e,r,n);if("normal"===u.type){if(o=n.done?v:d,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=v,n.method="throw",n.arg=u.arg)}}}function k(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,k(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(h(e)+" is not iterable")}return x.prototype=w,o(E,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:x,configurable:!0}),x.displayName=u(w,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,u(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},L(N.prototype),u(N.prototype,c,(function(){return this})),e.AsyncIterator=N,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new N(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(E),u(E,s,"Generator"),u(E,a,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function y(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}var d=function(){var t,e=(t=p().mark((function t(e){return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",f.Z.get("/users?q=".concat(e)).then((function(t){return console.log("fetchGetAllUsers SUCCESSFUL",t),t.data})).catch((function(t){throw console.log("getAllProducts ERROR",t),new Error(t)})));case 1:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){y(i,n,o,a,c,"next",t)}function c(t){y(i,n,o,a,c,"throw",t)}a(void 0)}))});return function(t){return e.apply(this,arguments)}}();function m(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],s=!0,u=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);s=!0);}catch(t){u=!0,o=t}finally{try{if(!s&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return c}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const g=function(){var t=m((0,l.useState)([]),2),e=t[0],r=t[1],n=m((0,l.useState)(""),2),o=n[0],i=n[1],a=m((0,l.useState)("ask"),2),c=a[0],s=a[1],u=m((0,l.useState)([]),2),f=u[0],h=u[1];return(0,l.useEffect)((function(){d("").then((function(t){return r(t)}))}),[]),(0,l.useEffect)((function(){var t=function(t,e,r){if(!e&&"desc"!==r)return t;var n=t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())||t.username.toLowerCase().includes(e.toLowerCase())}));return"asc"===r?n.sort((function(t,e){return t.username.localeCompare(e.username)})):"desc"===r&&n.sort((function(t,e){return e.username.localeCompare(t.username)})),n}(e,o,c),r=setTimeout((function(){return h(t)}),300);return function(){return clearTimeout(r)}}),[o,c,e]),{users:e,filteredUsers:f,searchQuery:o,setSearchQuery:i,sortOrder:c,setSortOrder:s}};var b=r(184),x=r.n(b);const w="FzsyyeKe0_EkTbC4hHzg";var j=r(893);const O=function(t){var e=t.searchQuery,r=t.setSearchQuery;return(0,j.jsx)("section",{children:(0,j.jsx)("input",{value:e,onChange:function(t){return r(t.target.value)},className:x()("p-2",w),placeholder:"Seacrh username or name"})})};const S=function(t){var e=t.sortOrder,r=t.setSortOrder;return(0,j.jsxs)("select",{className:"form-select",value:e,onChange:function(t){return r(t.target.value)},"aria-label":"Default select example",children:[(0,j.jsx)("option",{value:"asc",children:"ASC (username)"}),(0,j.jsx)("option",{value:"desc",children:"DESC (username)"})]})};var E=r(655),L=r(348);const N=function(t){var e=t.user;return(0,j.jsx)("div",{className:"col-lg-4 col-xxl-3 col-md-6 col-12 col my-2 ml-1 mr-1",children:(0,j.jsxs)("div",{className:x()("p-3 rounded",a),children:[(0,j.jsxs)("p",{className:c,children:[(0,j.jsxs)("span",{children:[(0,j.jsx)("strong",{children:"First name:"})," ",e.name]}),(0,j.jsxs)("span",{children:[(0,j.jsx)("strong",{children:"Last name:"})," ",e.username]})]}),(0,j.jsxs)("p",{className:"d-flex flex-column",children:[(0,j.jsx)("span",{className:s,children:"Email:"}),(0,j.jsx)("span",{className:u,children:e.email})]}),(0,j.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[(0,j.jsx)(E.rU,{to:"".concat(L.k.user,"/").concat(e.id,"/posts"),state:{id:e.id},className:"btn btn-outline-primary",children:"Posts"}),(0,j.jsx)(E.rU,{to:"".concat(L.k.user,"/").concat(e.id,"/albums"),state:{id:e.id},className:"btn btn-outline-primary",children:"Albums"})]})]})},e.id)};var P=r(551),k=r(472);const _=function(){var t=g(),e=t.users,r=t.filteredUsers,n=t.searchQuery,a=t.setSearchQuery,c=t.sortOrder,s=t.setSortOrder;return 0===e.length?(0,j.jsx)(P.Z,{}):(0,j.jsxs)("section",{className:o,children:[(0,j.jsx)("header",{children:(0,j.jsxs)("div",{className:"container d-flex flex-column flex-md-row align-items-md-center align-items-start justify-content-between",children:[(0,j.jsxs)("h4",{className:i,children:["Users: ",r.length]}),(0,j.jsxs)("div",{className:"d-flex flex-column flex-sm-row align-self-stretch align-self-md-start align-items-center gap-2",children:[(0,j.jsx)(S,{sortOrder:c,setSortOrder:s}),(0,j.jsx)(O,{searchQuery:n,setSearchQuery:a})]})]})}),(0,j.jsx)("div",{className:"container pt-3",children:(0,j.jsx)("div",{className:"row",children:0===r.length&&n?(0,j.jsx)(k.Z,{children:"No users found!"}):null==r?void 0:r.map((function(t){return(0,j.jsx)(N,{user:t},t.id)}))})})]})};var C=r(645);const A=function(){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(n.q,{title:"Home | Users",meta:[{name:"description",content:"All users"}],link:[{rel:"icon",href:C.Z},{rel:"icon",sizes:"32x32",href:C.Z}]}),(0,j.jsx)(_,{})]})}},472:(t,e,r)=>{r.d(e,{Z:()=>l});var n=r(893);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}var i=["children","className"];function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==o(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===o(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function u(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}const l=function(t){var e=t.children,r=(t.className,u(t,i));return(0,n.jsx)("div",c(c({className:"my-2 alert alert-warning text-center",role:"alert"},r),{},{children:e}))}},645:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"62864931a663e3f36c28fab8b237219b.png"}}]);