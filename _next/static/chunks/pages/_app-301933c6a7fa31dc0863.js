_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(r.default.useContext(o.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,o=e.hasQuery,i=void 0!==o&&o;return n||r&&i}},0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"1TCz":function(e,t,n){"use strict";n.r(t);var a=n("nKUr");function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=n("q1tI"),i=n.n(o),p=(n("H/sG"),n("Gpft"),n("p/ch"),n("g4pe")),l=n.n(p),c=n("TSYQ"),s=n.n(c),u=n("YFqc"),d=n.n(u),h=n("ARxz"),f=n.n(h),m=function(){var e=Object(o.useState)(!1),t=e[0],n=e[1];return Object(o.useEffect)((function(){var e=function(){n(window.scrollY>10)};return document.addEventListener("scroll",e),function(){return document.removeEventListener("scroll",e)}}),[]),Object(a.jsxs)("header",{className:s()(f.a.header,t&&f.a.scrolled),children:[Object(a.jsx)(d.a,{href:"/",children:Object(a.jsx)("img",{src:"/prospr_logo.png",alt:"Prospr Logo",className:f.a.headerLogo,width:122,height:31})}),Object(a.jsx)("span",{className:f.a.tempSpacer})," ",Object(a.jsxs)("div",{className:f.a.links,children:[Object(a.jsx)(d.a,{href:"/product",children:"Product"}),Object(a.jsx)(d.a,{href:"/pricing",children:"Pricing"})]}),Object(a.jsx)(d.a,{href:"/#bookDemo",children:Object(a.jsx)("span",{className:"btn btn-primary",children:"Get demo"})})]})};function g(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var y={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},v=function(e){var t,n=[];e.titleTemplate&&(y.templateTitle=e.titleTemplate);var a="";e.title?(a=e.title,y.templateTitle&&(a=y.templateTitle.replace(/%s/g,(function(){return a})))):e.defaultTitle&&(a=e.defaultTitle),a&&n.push(i.a.createElement("title",{key:"title"},a));var r=e.noindex||y.noindex||e.dangerouslySetAllPagesToNoIndex,o=e.nofollow||y.nofollow||e.dangerouslySetAllPagesToNoFollow,p="";if(e.robotsProps){var l=e.robotsProps,c=l.nosnippet,s=l.maxSnippet,u=l.maxImagePreview,d=l.maxVideoPreview,h=l.noarchive,f=l.noimageindex,m=l.notranslate,g=l.unavailableAfter;p=(c?",nosnippet":"")+(s?",max-snippet:"+s:"")+(u?",max-image-preview:"+u:"")+(h?",noarchive":"")+(g?",unavailable_after:"+g:"")+(f?",noimageindex":"")+(d?",max-video-preview:"+d:"")+(m?",notranslate":"")}if(r||o?(e.dangerouslySetAllPagesToNoIndex&&(y.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(y.nofollow=!0),n.push(i.a.createElement("meta",{key:"robots",name:"robots",content:(r?"noindex":"index")+","+(o?"nofollow":"follow")+p})),n.push(i.a.createElement("meta",{key:"googlebot",name:"googlebot",content:(r?"noindex":"index")+","+(o?"nofollow":"follow")+p}))):(n.push(i.a.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+p})),n.push(i.a.createElement("meta",{key:"googlebot",name:"googlebot",content:"index,follow"+p}))),e.description&&n.push(i.a.createElement("meta",{key:"description",name:"description",content:e.description})),e.mobileAlternate&&n.push(i.a.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach((function(e){n.push(i.a.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))})),e.twitter&&(e.twitter.cardType&&n.push(i.a.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&n.push(i.a.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&n.push(i.a.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&n.push(i.a.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),e.openGraph){if((e.openGraph.url||e.canonical)&&n.push(i.a.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var v=e.openGraph.type.toLowerCase();n.push(i.a.createElement("meta",{key:"og:type",property:"og:type",content:v})),"profile"===v&&e.openGraph.profile?(e.openGraph.profile.firstName&&n.push(i.a.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&n.push(i.a.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&n.push(i.a.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&n.push(i.a.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===v&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach((function(e,t){n.push(i.a.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))})),e.openGraph.book.isbn&&n.push(i.a.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&n.push(i.a.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach((function(e,t){n.push(i.a.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))}))):"article"===v&&e.openGraph.article?(e.openGraph.article.publishedTime&&n.push(i.a.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&n.push(i.a.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&n.push(i.a.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach((function(e,t){n.push(i.a.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))})),e.openGraph.article.section&&n.push(i.a.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach((function(e,t){n.push(i.a.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))}))):"video.movie"!==v&&"video.episode"!==v&&"video.tv_show"!==v&&"video.other"!==v||!e.openGraph.video||(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach((function(e,t){e.profile&&n.push(i.a.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&n.push(i.a.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))})),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach((function(e,t){n.push(i.a.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))})),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach((function(e,t){n.push(i.a.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))})),e.openGraph.video.duration&&n.push(i.a.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&n.push(i.a.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach((function(e,t){n.push(i.a.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))})),e.openGraph.video.series&&n.push(i.a.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}(e.openGraph.title||e.title)&&n.push(i.a.createElement("meta",{key:"og:title",property:"og:title",content:e.openGraph.title||a})),(e.openGraph.description||e.description)&&n.push(i.a.createElement("meta",{key:"og:description",property:"og:description",content:e.openGraph.description||e.description})),e.defaultOpenGraphImageWidth&&(y.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(y.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&e.openGraph.images.forEach((function(e,t){n.push(i.a.createElement("meta",{key:"og:image:0"+t,property:"og:image",content:e.url})),e.alt&&n.push(i.a.createElement("meta",{key:"og:image:alt0"+t,property:"og:image:alt",content:e.alt})),e.width?n.push(i.a.createElement("meta",{key:"og:image:width0"+t,property:"og:image:width",content:e.width.toString()})):y.defaultOpenGraphImageWidth&&n.push(i.a.createElement("meta",{key:"og:image:width0"+t,property:"og:image:width",content:y.defaultOpenGraphImageWidth.toString()})),e.height?n.push(i.a.createElement("meta",{key:"og:image:height"+t,property:"og:image:height",content:e.height.toString()})):y.defaultOpenGraphImageHeight&&n.push(i.a.createElement("meta",{key:"og:image:height"+t,property:"og:image:height",content:y.defaultOpenGraphImageHeight.toString()}))})),e.defaultOpenGraphVideoWidth&&(y.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(y.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&e.openGraph.videos.forEach((function(e,t){n.push(i.a.createElement("meta",{key:"og:video:0"+t,property:"og:video",content:e.url})),e.alt&&n.push(i.a.createElement("meta",{key:"og:video:alt0"+t,property:"og:video:alt",content:e.alt})),e.width?n.push(i.a.createElement("meta",{key:"og:video:width0"+t,property:"og:video:width",content:e.width.toString()})):y.defaultOpenGraphVideoWidth&&n.push(i.a.createElement("meta",{key:"og:video:width0"+t,property:"og:video:width",content:y.defaultOpenGraphVideoWidth.toString()})),e.height?n.push(i.a.createElement("meta",{key:"og:video:height"+t,property:"og:video:height",content:e.height.toString()})):y.defaultOpenGraphVideoHeight&&n.push(i.a.createElement("meta",{key:"og:video:height"+t,property:"og:video:height",content:y.defaultOpenGraphVideoHeight.toString()}))})),e.openGraph.locale&&n.push(i.a.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),e.openGraph.site_name&&n.push(i.a.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.site_name}))}return e.canonical&&n.push(i.a.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach((function(e){var t,a,r;n.push(i.a.createElement("meta",Object.assign({key:"meta:"+(null!=(t=null!=(a=null!=(r=e.keyOverride)?r:e.name)?a:e.property)?t:e.httpEquiv)},e)))})),null!=(t=e.additionalLinkTags)&&t.length&&e.additionalLinkTags.forEach((function(e){var t;n.push(i.a.createElement("link",Object.assign({key:"link"+(null!=(t=e.keyOverride)?t:e.href)+e.rel},e)))})),n},b=function(e){function t(){return e.apply(this,arguments)||this}return g(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.titleTemplate,a=e.defaultTitle,r=e.dangerouslySetAllPagesToNoIndex,o=void 0!==r&&r,p=e.dangerouslySetAllPagesToNoFollow,c=void 0!==p&&p,s=e.description,u=e.canonical,d=e.facebook,h=e.openGraph,f=e.additionalMetaTags,m=e.twitter,g=e.defaultOpenGraphImageWidth,y=e.defaultOpenGraphImageHeight,b=e.defaultOpenGraphVideoWidth,k=e.defaultOpenGraphVideoHeight,G=e.mobileAlternate,w=e.languageAlternates,E=e.additionalLinkTags;return i.a.createElement(l.a,null,v({title:t,titleTemplate:n,defaultTitle:a,dangerouslySetAllPagesToNoIndex:o,dangerouslySetAllPagesToNoFollow:c,description:s,canonical:u,facebook:d,openGraph:h,additionalMetaTags:f,twitter:m,defaultOpenGraphImageWidth:g,defaultOpenGraphImageHeight:y,defaultOpenGraphVideoWidth:b,defaultOpenGraphVideoHeight:k,mobileAlternate:G,languageAlternates:w,additionalLinkTags:E}))},t}(o.Component);o.Component;function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e){var t=e.Component,n=e.pageProps;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(l.a,{children:[Object(a.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-P6RBEKYXPZ"}),Object(a.jsx)("script",{dangerouslySetInnerHTML:{__html:"\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n          \n            gtag('config', 'G-P6RBEKYXPZ');\n          ".replace(/\r?\n|\r/g,"")}}),Object(a.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"}),Object(a.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge,chrome=1"}),Object(a.jsx)("meta",{name:"HandheldFriendly",content:"true"})]}),Object(a.jsx)(b,{defaultTitle:"Prospr - Online Donor Management and Fundraising for Nonprofits and Charities",description:"Prospr is a donor experience management platform for nonprofits and charities. We make it easy to manage your data, plan your interactions, and track your results so you can focus on keeping your donors satisfied."}),Object(a.jsx)(m,{}),Object(a.jsx)(t,G({},n))]})}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=s,t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(a=n("Xuae"))&&a.__esModule?a:{default:a},i=n("lwAK"),p=n("FYa8"),l=n("/0+H");function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(u,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var o=!0,i=!1;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){i=!0;var p=r.key.slice(r.key.indexOf("$")+1);e.has(p)?o=!1:e.add(p)}switch(r.type){case"title":case"base":t.has(r.type)?o=!1:t.add(r.type);break;case"meta":for(var l=0,c=d.length;l<c;l++){var s=d[l];if(r.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var u=r.props[s],h=a[s]||new Set;"name"===s&&i||!h.has(u)?(h.add(u),a[s]=h):o=!1}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function f(e){var t=e.children,n=(0,r.useContext)(i.AmpStateContext),a=(0,r.useContext)(p.HeadManagerContext);return r.default.createElement(o.default,{reduceComponentsToState:h,headManager:a,inAmpMode:(0,l.isInAmpMode)(n)},t)}f.rewind=function(){};var m=f;t.default=m},ARxz:function(e,t,n){e.exports={header:"Header_header__2-XWX",scrolled:"Header_scrolled__134zD",headerLogo:"Header_headerLogo__1kmHe",tempSpacer:"Header_tempSpacer__2kGOH",links:"Header_links__1ac9h"}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},Gpft:function(e,t,n){},"H/sG":function(e,t,n){},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},RIqP:function(e,t,n){var a=n("Ijbi"),r=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return a(e)||r(e)||o(e)||i()}},TSYQ:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var p in a)n.call(a,p)&&a[p]&&e.push(p)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},Xuae:function(e,t,n){"use strict";var a=n("RIqP"),r=n("lwsE"),o=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),p=n("a1gu"),l=n("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=l(e);if(t){var r=l(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return p(this,n)}}t.__esModule=!0,t.default=void 0;var s=n("q1tI"),u=function(e){i(n,e);var t=c(n);function n(e){var o;return r(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(a(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=u},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var a=n("J4zp"),r=n("284h");t.__esModule=!0,t.default=void 0;var o=r(n("q1tI")),i=n("elyg"),p=n("nOHt"),l=n("vNVm"),c={};function s(e,t,n,a){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,a).catch((function(e){0}));var r=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;c[t+"%"+n+(r?"%"+r:"")]=!0}}var u=function(e){var t=!1!==e.prefetch,n=(0,p.useRouter)(),r=n&&n.pathname||"/",u=o.default.useMemo((function(){var t=(0,i.resolveHref)(r,e.href,!0),n=a(t,2),o=n[0],p=n[1];return{href:o,as:e.as?(0,i.resolveHref)(r,e.as):p||o}}),[r,e.href,e.as]),d=u.href,h=u.as,f=e.children,m=e.replace,g=e.shallow,y=e.scroll,v=e.locale;"string"===typeof f&&(f=o.default.createElement("a",null,f));var b=o.Children.only(f),k=b&&"object"===typeof b&&b.ref,G=(0,l.useIntersection)({rootMargin:"200px"}),w=a(G,2),E=w[0],O=w[1],_=o.default.useCallback((function(e){E(e),k&&("function"===typeof k?k(e):"object"===typeof k&&(k.current=e))}),[k,E]);(0,o.useEffect)((function(){var e=O&&t&&(0,i.isLocalURL)(d),a="undefined"!==typeof v?v:n&&n.locale,r=c[d+"%"+h+(a?"%"+a:"")];e&&!r&&s(n,d,h,{locale:a})}),[h,d,O,v,t,n]);var x={ref:_,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,n,a,r,o,p,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==p&&(p=a.indexOf("#")<0),t[r?"replace":"push"](n,a,{shallow:o,locale:l,scroll:p}).then((function(e){e&&p&&document.body.focus()})))}(e,n,d,h,m,g,y,v)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),s(n,d,h,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var j="undefined"!==typeof v?v:n&&n.locale,T=n&&n.isLocaleDomain&&(0,i.getDomainLocale)(h,j,n&&n.locales,n&&n.domainLocales);x.href=T||(0,i.addBasePath)((0,i.addLocale)(h,j,n&&n.defaultLocale))}return o.default.cloneElement(b,x)};t.default=u},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r},"p/ch":function(e,t,n){},vNVm:function(e,t,n){"use strict";var a=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,l=(0,r.useRef)(),c=(0,r.useState)(!1),s=a(c,2),u=s[0],d=s[1],h=(0,r.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),n||u||e&&e.tagName&&(l.current=function(e,t,n){var a=function(e){var t=e.rootMargin||"",n=p.get(t);if(n)return n;var a=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return p.set(t,n={id:t,observer:r,elements:a}),n}(n),r=a.id,o=a.observer,i=a.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),p.delete(r))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,u]);return(0,r.useEffect)((function(){if(!i&&!u){var e=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[u]),[h,u]};var r=n("q1tI"),o=n("0G5g"),i="undefined"!==typeof IntersectionObserver;var p=new Map}},[[0,0,1,2]]]);