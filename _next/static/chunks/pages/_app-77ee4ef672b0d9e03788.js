_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"1TCz":function(e,t,n){"use strict";n.r(t);var r=n("nKUr");function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=n("q1tI"),c=(n("H/sG"),n("Gpft"),n("p/ch"),n("g4pe")),i=n.n(c),s=n("TSYQ"),u=n.n(s),l=n("YFqc"),f=n.n(l),p=n("ARxz"),d=n.n(p),h=function(){var e=Object(a.useState)(!1),t=e[0],n=e[1];return Object(a.useEffect)((function(){var e=function(){n(window.scrollY>10)};return document.addEventListener("scroll",e),function(){return document.removeEventListener("scroll",e)}}),[]),Object(r.jsxs)("header",{className:u()(d.a.header,t&&d.a.scrolled),children:[Object(r.jsx)(f.a,{href:"/",children:Object(r.jsx)("img",{src:"/prospr_logo.png",alt:"Prospr Logo",className:d.a.headerLogo,width:122,height:31})}),Object(r.jsx)("span",{className:d.a.tempSpacer})," ",Object(r.jsx)(f.a,{href:"/#bookDemo",children:Object(r.jsx)("span",{className:"btn btn-primary",children:"Get demo"})})]})},v=n("9ixD");function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e){var t=e.Component,n=e.pageProps;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(i.a,{children:[Object(r.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-P6RBEKYXPZ"}),Object(r.jsx)("script",{dangerouslySetInnerHTML:{__html:"\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n          \n            gtag('config', 'G-P6RBEKYXPZ');\n          ".replace(/\r?\n|\r/g,"")}}),Object(r.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1,maximum-scale=5,user-scalable=yes"}),Object(r.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge,chrome=1"}),Object(r.jsx)("meta",{name:"HandheldFriendly",content:"true"}),Object(r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(r.jsx)(v.a,{defaultTitle:"Prospr - Online Donor Management and Fundraising for Nonprofits and Charities",description:"Prospr is a donor experience management platform for nonprofits and charities. We make it easy to manage your data, plan your interactions, and track your results so you can focus on keeping your donors satisfied."}),Object(r.jsx)(h,{}),Object(r.jsx)(t,g({},n))]})}},ARxz:function(e,t,n){e.exports={header:"Header_header__2-XWX",scrolled:"Header_scrolled__134zD",headerLogo:"Header_headerLogo__1kmHe",tempSpacer:"Header_tempSpacer__2kGOH",links:"Header_links__1ac9h"}},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},Gpft:function(e,t,n){},"H/sG":function(e,t,n){},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var c=o.apply(null,r);c&&e.push(c)}else if("object"===a)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a=o(n("q1tI")),c=n("elyg"),i=n("nOHt"),s=n("vNVm"),u={};function l(e,t,n,r){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),o=n&&n.pathname||"/",f=a.default.useMemo((function(){var t=(0,c.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],i=n[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):i||a}}),[o,e.href,e.as]),p=f.href,d=f.as,h=e.children,v=e.replace,b=e.shallow,g=e.scroll,m=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var j=a.Children.only(h),y=j&&"object"===typeof j&&j.ref,O=(0,s.useIntersection)({rootMargin:"200px"}),w=r(O,2),_=w[0],x=w[1],E=a.default.useCallback((function(e){_(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,_]);(0,a.useEffect)((function(){var e=x&&t&&(0,c.isLocalURL)(p),r="undefined"!==typeof m?m:n&&n.locale,o=u[p+"%"+d+(r?"%"+r:"")];e&&!o&&l(n,p,d,{locale:r})}),[d,p,x,m,t,n]);var L={ref:E,onClick:function(e){j.props&&"function"===typeof j.props.onClick&&j.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:s,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,n,p,d,v,b,g,m)},onMouseEnter:function(e){(0,c.isLocalURL)(p)&&(j.props&&"function"===typeof j.props.onMouseEnter&&j.props.onMouseEnter(e),l(n,p,d,{priority:!0}))}};if(e.passHref||"a"===j.type&&!("href"in j.props)){var P="undefined"!==typeof m?m:n&&n.locale,k=n&&n.isLocaleDomain&&(0,c.getDomainLocale)(d,P,n&&n.locales,n&&n.domainLocales);L.href=k||(0,c.addBasePath)((0,c.addLocale)(d,P,n&&n.defaultLocale))}return a.default.cloneElement(j,L)};t.default=f},"p/ch":function(e,t,n){},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,s=(0,o.useRef)(),u=(0,o.useState)(!1),l=r(u,2),f=l[0],p=l[1],d=(0,o.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,c=r.elements;return c.set(e,t),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){if(!c&&!f){var e=(0,a.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[d,f]};var o=n("q1tI"),a=n("0G5g"),c="undefined"!==typeof IntersectionObserver;var i=new Map}},[[0,0,1,2,3]]]);