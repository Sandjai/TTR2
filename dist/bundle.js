!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";var i=Object.prototype.hasOwnProperty;function r(e,t){return Array.isArray(e)?function(e,t){for(var n,i="",a="",o=Array.isArray(t),s=0;s<e.length;s++)(n=r(e[s]))&&(o&&t[s]&&(n=l(n)),i=i+a+n,a=" ");return i}(e,t):e&&"object"==typeof e?function(e){var t="",n="";for(var r in e)r&&e[r]&&i.call(e,r)&&(t=t+n+r,n=" ");return t}(e):e||""}function a(e){if(!e)return"";if("object"==typeof e){var t="";for(var n in e)i.call(e,n)&&(t=t+n+":"+e[n]+";");return t}return e+""}function o(e,t,n,i){if(!1===t||null==t||!t&&("class"===e||"style"===e))return"";if(!0===t)return" "+(i?e:e+'="'+e+'"');var r=typeof t;return"object"!==r&&"function"!==r||"function"!=typeof t.toJSON||(t=t.toJSON()),"string"==typeof t||(t=JSON.stringify(t),n||-1===t.indexOf('"'))?(n&&(t=l(t))," "+e+'="'+t+'"'):" "+e+"='"+t.replace(/'/g,"&#39;")+"'"}t.merge=function e(t,n){if(1===arguments.length){for(var i=t[0],r=1;r<t.length;r++)i=e(i,t[r]);return i}for(var o in n)if("class"===o){var s=t[o]||[];t[o]=(Array.isArray(s)?s:[s]).concat(n[o]||[])}else if("style"===o){s=(s=a(t[o]))&&";"!==s[s.length-1]?s+";":s;var l=a(n[o]);l=l&&";"!==l[l.length-1]?l+";":l,t[o]=s+l}else t[o]=n[o];return t},t.classes=r,t.style=a,t.attr=o,t.attrs=function(e,t){var n="";for(var s in e)if(i.call(e,s)){var l=e[s];if("class"===s){l=r(l),n=o(s,l,!1,t)+n;continue}"style"===s&&(l=a(l)),n+=o(s,l,!1,t)}return n};var s=/["&<>]/;function l(e){var t=""+e,n=s.exec(t);if(!n)return e;var i,r,a,o="";for(i=n.index,r=0;i<t.length;i++){switch(t.charCodeAt(i)){case 34:a="&quot;";break;case 38:a="&amp;";break;case 60:a="&lt;";break;case 62:a="&gt;";break;default:continue}r!==i&&(o+=t.substring(r,i)),r=i+1,o+=a}return r!==i?o+t.substring(r,i):o}t.escape=l,t.rethrow=function e(t,i,r,a){if(!(t instanceof Error))throw t;if(!("undefined"==typeof window&&i||a))throw t.message+=" on line "+r,t;try{a=a||n(4).readFileSync(i,"utf8")}catch(n){e(t,null,r)}var o=3,s=a.split("\n"),l=Math.max(r-o,0),u=Math.min(s.length,r+o);o=s.slice(l,u).map((function(e,t){var n=t+l+1;return(n==r?"  > ":"    ")+n+"| "+e})).join("\n");t.path=i;t.message=(i||"Pug")+":"+r+"\n"+o+"\n\n"+t.message;throw t}},function(e,t,n){var i=n(0);e.exports=function(e){var t,n="",r={},a=e||{};return function(e,a){r.addItem=t=function(e,r){this&&this.block,this&&this.attributes;n=n+'<li class="menu-item"'+i.attr("data-index",r,!0,!0)+">"+i.escape(null==(t=e.title)?"":t)+'<i class="close" data-action="remove"></i></li>'},r.addItem(a,e)}.call(this,"index"in a?a.index:"undefined"!=typeof index?index:void 0,"item"in a?a.item:"undefined"!=typeof item?item:void 0),n}},function(e,t,n){var i=n(0);e.exports=function(e){var t,n="",r={},a=e||{};return function(e,a){n=n+'<span class="menu_title menu-heading">'+i.escape(null==(t=a)?"":t)+'</span><ul class="menu-list">',function(){var a=e;if("number"==typeof a.length)for(var o=0,s=a.length;o<s;o++){var l=a[o];r.addItem=t=function(e,r){this&&this.block,this&&this.attributes;n=n+'<li class="menu-item"'+i.attr("data-index",r,!0,!0)+">"+i.escape(null==(t=e.title)?"":t)+'<i class="close" data-action="remove"></i></li>'},r.addItem(l,o)}else{s=0;for(var o in a){s++;l=a[o];r.addItem=t=function(e,r){this&&this.block,this&&this.attributes;n=n+'<li class="menu-item"'+i.attr("data-index",r,!0,!0)+">"+i.escape(null==(t=e.title)?"":t)+'<i class="close" data-action="remove"></i></li>'},r.addItem(l,o)}}}.call(this),n+="</ul>"}.call(this,"items"in a?a.items:"undefined"!=typeof items?items:void 0,"title"in a?a.title:"undefined"!=typeof title?title:void 0),n}},function(e,t,n){var i=n(0);e.exports=function(e){var t="";return t=t+'<form class="form"><fieldset></fieldset><ul class="form-set"><li><input class="title" type="text" name="title" required="required" placeholder="Название"></li><li><button class="form__btn button" type="submit" data-action="add">'+i.escape(null=="save"?"":"save")+"</button></li></ul></form>"}},function(e,t){},function(e,t,n){"use strict";n.r(t);var i=n(1),r=n.n(i),a=n(2),o=n.n(a);function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.el=t.el,this.data=t.data,this._initEvents()}var t,n,i;return t=e,(n=[{key:"_initEvents",value:function(){this.el.addEventListener("click",this._onClick.bind(this))}},{key:"_onClick",value:function(e){e.preventDefault();var t=e.target;switch(t.dataset.action){case"remove":this._onRemoveClick(t);break;case"pick":this._onPickClick(t)}}},{key:"setData",value:function(e){this.data=e,this.render(e.title,e.items)}},{key:"_onRemoveClick",value:function(e){var t=e.parentNode,n=parseInt(e.parentNode.dataset.index,10);t.addEventListener("animationend",this.removeItem.bind(this,{index:n})),t.classList.add("bounce-out-right")}},{key:"removeItem",value:function(e){this.data.items=this.data.items.filter((function(t,n){return n!==e.index})),this.render(this.data.title,this.data.items)}},{key:"render",value:function(e,t){this.el.innerHTML=o()({title:e,items:t})}},{key:"addItem",value:function(e){var t=document.createElement("div");t.innerHTML=this.liItemHtml(e,this.data.items.length),t=t.firstElementChild,this.listEl.append(t),t.addEventListener("animationend",(function(){t.classList.remove("bounce-in-left")})),t.classList.add("bounce-in-left"),this.data.items.push(e)}},{key:"liItemHtml",value:function(e,t){return r()({item:e,index:t})}},{key:"listEl",get:function(){return this.el.querySelector(".menu-list")}}])&&s(t.prototype,n),i&&s(t,i),e}(),u=n(3),c=n.n(u);function f(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var d=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.el=t.el,this.data=t.data,this._initEvents()}var t,n,i;return t=e,(n=[{key:"_initEvents",value:function(){this.el.addEventListener("submit",this._onSubmit.bind(this))}},{key:"_onSubmit",value:function(e){e.preventDefault(),this.trigger("save",{title:this.el.querySelector('input[name="title"]').value}),e.target.reset()}},{key:"addEventListener",value:function(e,t){this.el.addEventListener(e,t)}},{key:"trigger",value:function(e,t){var n=new CustomEvent(e,{detail:t});this.el.dispatchEvent(n)}},{key:"render",value:function(){this.el.innerHTML=c()()}}])&&f(t.prototype,n),i&&f(t,i),e}();function v(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var m=function(){function e(t){var n=this,i=t.el;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.menu=new l({el:i.querySelector(".js-menu"),data:{}}),this.loadData();var r=new d({el:i.querySelector(".js-form"),data:{}});r.render(),r.addEventListener("save",(function(e){n.menu.addItem(e.detail),n.uploadData()}))}var t,n,i;return t=e,(n=[{key:"loadData",value:function(){var e=this,t=new XMLHttpRequest;t.addEventListener("readystatechange",(function(n){if(4===t.readyState)if(200!==t.status)console.error("Сетевая ошибка",t);else{var i=t.responseText;e.menu.setData(JSON.parse(i))}})),t.open("GET","https://components-2130.firebaseio.com/menu/-M-Bg4b7mtRo6BO8FiSA.json",!0),t.send()}},{key:"uploadData",value:function(){var e=new XMLHttpRequest;e.open("PUT","https://components-2130.firebaseio.com/menu/-M-Bg4b7mtRo6BO8FiSA.json",!0),e.onload=function(e){console.log("DONE")},e.send(JSON.stringify(this.menu.data))}}])&&v(t.prototype,n),i&&v(t,i),e}();window.App=m}]);