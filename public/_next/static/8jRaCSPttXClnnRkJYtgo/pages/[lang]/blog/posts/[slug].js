(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"4b5G":function(e,t,n){"use strict";n.r(t);var r=n("ln6h"),o=n.n(r),u=n("eVuF"),i=n.n(u),c=n("doui"),a=n("O40h"),l=n("MX0m"),f=n.n(l),s=n("q1tI"),E=n.n(s),p=n("eomm"),d=n.n(p),_=n("6/0g"),m=n("3mGJ"),y=n("R8uD"),h=n("2pyn"),v=n("oTOh"),T=n("tkmZ"),I=n("1sFw"),g=n("yab1"),D=function(e){var t=e.lang,n=e.post,r=e.entries;if(404===e.statusCode)return E.a.createElement(d.a,{statusCode:404});var o=n.fields,u=o.featuredImage,i=o.title,c=o.body,a=o.shortDescription;return E.a.createElement(E.a.Fragment,null,E.a.createElement(h.a,{title:i,description:a,ogImage:u.fields.file.url}),E.a.createElement(_.a,{src:u.fields.file.url,alt:u.fields.description,height:"400px"},E.a.createElement(v.a,{lang:t}),E.a.createElement("section",{className:"jsx-857606574 grid-absolute-center"},E.a.createElement("h1",{className:"jsx-857606574"},i))),E.a.createElement(m.a,{basic:!0},Object(y.documentToReactComponents)(c)),E.a.createElement(T.a,{lang:t,posts:r}),E.a.createElement(f.a,{id:"857606574"},["section.jsx-857606574 h1.jsx-857606574,p.jsx-857606574{color:var(--flat-white-light);text-align:center;}",".ma-1em.jsx-857606574{margin:1em;}"]))};D.getInitialProps=function(){var e=Object(a.default)(o.a.mark(function e(t){var n,r,u,a,l,f,s,E,p,d;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.res,r=t.query,u=r.slug,a=Object(g.a)({query:r}),l=a.lang,f=a.locale,e.prev=3,e.next=6,i.a.all([I.a.fetchAllBlogPosts(f),I.a.getBlogPostBySlug(f,u)]);case 6:return s=e.sent,E=Object(c.default)(s,2),p=E[0],d=E[1],e.abrupt("return",{lang:l,post:d,entries:p});case 13:if(e.prev=13,e.t0=e.catch(3),"There are no posts for that slug"!==e.t0.message){e.next=18;break}return n.statusCode=404,e.abrupt("return",{statusCode:404});case 18:case"end":return e.stop()}},e,null,[[3,13]])}));return function(t){return e.apply(this,arguments)}}(),t.default=D},R8uD:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n("q1tI"),u=(r=o)&&"object"===typeof r&&"default"in r?r.default:r,i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var c,a=function(e,t){return e(t={exports:{}},t.exports),t.exports}(function(e,t){function n(e,t){return e(t={exports:{}},t.exports),t.exports}Object.defineProperty(t,"__esModule",{value:!0});var r=n(function(e){var t=e.exports=window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)}),o=n(function(e){var t=e.exports={version:"2.6.5"};"number"==typeof __e&&(__e=t)}),u=(o.version,function(e){return"object"===typeof e?null!==e:"function"===typeof e}),i=function(e){if(!u(e))throw TypeError(e+" is not an object!");return e},c=function(e){try{return!!e()}catch(t){return!0}},a=!c(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),l=r.document,f=u(l)&&u(l.createElement),s=!a&&!c(function(){return 7!=Object.defineProperty((e="div",f?l.createElement(e):{}),"a",{get:function(){return 7}}).a;var e}),E=Object.defineProperty,p={f:a?Object.defineProperty:function(e,t,n){if(i(e),t=function(e,t){if(!u(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!u(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!u(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!u(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}(t,!0),i(n),s)try{return E(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},d=a?function(e,t,n){return p.f(e,t,function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}(1,n))}:function(e,t,n){return e[t]=n,e},_={}.hasOwnProperty,m=function(e,t){return _.call(e,t)},y=0,h=Math.random(),v=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++y+h).toString(36))},T=n(function(e){var t=r["__core-js_shared__"]||(r["__core-js_shared__"]={});(e.exports=function(e,n){return t[e]||(t[e]=void 0!==n?n:{})})("versions",[]).push({version:o.version,mode:"global",copyright:"\xa9 2019 Denis Pushkarev (zloirock.ru)"})}),I=T("native-function-to-string",Function.toString),g=n(function(e){var t=v("src"),n=(""+I).split("toString");o.inspectSource=function(e){return I.call(e)},(e.exports=function(e,o,u,i){var c="function"==typeof u;c&&(m(u,"name")||d(u,"name",o)),e[o]!==u&&(c&&(m(u,t)||d(u,t,e[o]?""+e[o]:n.join(String(o)))),e===r?e[o]=u:i?e[o]?e[o]=u:d(e,o,u):(delete e[o],d(e,o,u)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[t]||I.call(this)})}),D=function(e,t,n){if(function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!")}(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}},b=function(e,t,n){var u,i,c,a,l=e&b.F,f=e&b.G,s=e&b.S,E=e&b.P,p=e&b.B,_=f?r:s?r[t]||(r[t]={}):(r[t]||{}).prototype,m=f?o:o[t]||(o[t]={}),y=m.prototype||(m.prototype={});for(u in f&&(n=t),n)c=((i=!l&&_&&void 0!==_[u])?_:n)[u],a=p&&i?D(c,r):E&&"function"==typeof c?D(Function.call,c):c,_&&g(_,u,c,e&b.U),m[u]!=c&&d(m,u,a),E&&y[u]!=c&&(y[u]=c)};r.core=o,b.F=1,b.G=2,b.S=4,b.P=8,b.B=16,b.W=32,b.U=64,b.R=128;var N,O,S=b,L={}.toString,A=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==function(e){return L.call(e).slice(8,-1)}(e)?e.split(""):Object(e)},R=function(e){return A(function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}(e))},P=Math.ceil,H=Math.floor,j=function(e){return isNaN(e=+e)?0:(e>0?H:P)(e)},M=Math.min,w=Math.max,x=Math.min,G=function(e){return function(t,n,r){var o,u,i=R(t),c=(o=i.length)>0?M(j(o),9007199254740991):0,a=function(e,t){return(e=j(e))<0?w(e+t,0):x(e,t)}(r,c);if(e&&n!=n){for(;c>a;)if((u=i[a++])!=u)return!0}else for(;c>a;a++)if((e||a in i)&&i[a]===n)return e||a||0;return!e&&-1}},k=T("keys"),B=G(!1),C=k[N="IE_PROTO"]||(k[N]=v(N)),Y="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),K=Object.keys||function(e){return function(e,t){var n,r=R(e),o=0,u=[];for(n in r)n!=C&&m(r,n)&&u.push(n);for(;t.length>o;)m(r,n=t[o++])&&(~B(u,n)||u.push(n));return u}(e,Y)},U={f:{}.propertyIsEnumerable}.f,F=(O=!1,function(e){for(var t,n=R(e),r=K(n),o=r.length,u=0,i=[];o>u;)U.call(n,t=r[u++])&&i.push(O?[t,n[t]]:n[t]);return i});S(S.S,"Object",{values:function(e){return F(e)}});o.Object.values;var q=n(function(e){var t=T("wks"),n=r.Symbol,o="function"==typeof n;(e.exports=function(e){return t[e]||(t[e]=o&&n[e]||(o?n:v)("Symbol."+e))}).store=t})("unscopables"),V=Array.prototype;void 0==V[q]&&d(V,q,{});var z=G(!0);S(S.P,"Array",{includes:function(e){return z(this,e,arguments.length>1?arguments[1]:void 0)}}),function(e){V[q][e]=!0}("includes");var Q;o.Array.includes;!function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(Q||(Q={}));var J,X=Q;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(J||(J={}));var W,Z=J,$=[X.PARAGRAPH,X.HEADING_1,X.HEADING_2,X.HEADING_3,X.HEADING_4,X.HEADING_5,X.HEADING_6,X.OL_LIST,X.UL_LIST,X.HR,X.QUOTE,X.EMBEDDED_ENTRY,X.EMBEDDED_ASSET],ee=[X.HR,X.EMBEDDED_ENTRY,X.EMBEDDED_ASSET],te=((W={})[X.OL_LIST]=[X.LIST_ITEM],W[X.UL_LIST]=[X.LIST_ITEM],W[X.LIST_ITEM]=$.slice(),W[X.QUOTE]=[X.PARAGRAPH],W);var ne=Object.freeze({isInline:function(e){return Object.values(Z).includes(e.nodeType)},isBlock:function(e){return Object.values(X).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});t.helpers=ne,t.BLOCKS=X,t.INLINES=Z,t.MARKS={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"},t.TOP_LEVEL_BLOCKS=$,t.VOID_BLOCKS=ee,t.CONTAINERS=te});(c=a)&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")&&c.default;var l,f,s=a.helpers,E=a.BLOCKS,p=a.INLINES,d=a.MARKS;a.TOP_LEVEL_BLOCKS,a.VOID_BLOCKS,a.CONTAINERS;function _(e,t){return e.map(function(e,n){return r=function(e,t){var n=t.renderNode,r=t.renderMark,o=t.renderText;if(s.isText(e))return e.marks.reduce(function(e,t){return r[t.type]?r[t.type](e):e},o?o(e.value):e.value);var i=_(e.content,t);return e.nodeType&&n[e.nodeType]?n[e.nodeType](e,i):u.createElement(u.Fragment,null,i)}(e,t),i=n,o.isValidElement(r)&&null===r.key?o.cloneElement(r,{key:i}):r;var r,i})}var m=((l={})[E.PARAGRAPH]=function(e,t){return u.createElement("p",null,t)},l[E.HEADING_1]=function(e,t){return u.createElement("h1",null,t)},l[E.HEADING_2]=function(e,t){return u.createElement("h2",null,t)},l[E.HEADING_3]=function(e,t){return u.createElement("h3",null,t)},l[E.HEADING_4]=function(e,t){return u.createElement("h4",null,t)},l[E.HEADING_5]=function(e,t){return u.createElement("h5",null,t)},l[E.HEADING_6]=function(e,t){return u.createElement("h6",null,t)},l[E.EMBEDDED_ENTRY]=function(e,t){return u.createElement("div",null,t)},l[E.UL_LIST]=function(e,t){return u.createElement("ul",null,t)},l[E.OL_LIST]=function(e,t){return u.createElement("ol",null,t)},l[E.LIST_ITEM]=function(e,t){return u.createElement("li",null,t)},l[E.QUOTE]=function(e,t){return u.createElement("blockquote",null,t)},l[E.HR]=function(){return u.createElement("hr",null)},l[p.ASSET_HYPERLINK]=function(e){return h(p.ASSET_HYPERLINK,e)},l[p.ENTRY_HYPERLINK]=function(e){return h(p.ENTRY_HYPERLINK,e)},l[p.EMBEDDED_ENTRY]=function(e){return h(p.EMBEDDED_ENTRY,e)},l[p.HYPERLINK]=function(e,t){return u.createElement("a",{href:e.data.uri},t)},l),y=((f={})[d.BOLD]=function(e){return u.createElement("b",null,e)},f[d.ITALIC]=function(e){return u.createElement("i",null,e)},f[d.UNDERLINE]=function(e){return u.createElement("u",null,e)},f[d.CODE]=function(e){return u.createElement("code",null,e)},f);function h(e,t){return u.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}t.documentToReactComponents=function(e,t){return void 0===t&&(t={}),e&&e.content?_(e.content,{renderNode:i({},m,t.renderNode),renderMark:i({},y,t.renderMark),renderText:t.renderText}):null}},c9Hz:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[lang]/blog/posts/[slug]",function(){var e=n("4b5G");return{page:e.default||e}}])},eomm:function(e,t,n){e.exports=n("/a9y")}},[["c9Hz",1,0]]]);