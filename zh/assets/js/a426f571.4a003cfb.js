"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[78726],{35318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),a=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=a(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=a(n),g=i,m=f["".concat(l,".").concat(g)]||f[g]||c[g]||o;return n?r.createElement(m,p(p({ref:t},s),{},{components:n})):r.createElement(m,p({ref:t},s))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,p=new Array(o);p[0]=f;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,p[1]=u;for(var a=2;a<o;a++)p[a]=n[a];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},34237:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return a},toc:function(){return s}});var r=n(25773),i=n(30808),o=(n(27378),n(35318)),p=["components"],u={title:"ext-plugin-post-req"},l=void 0,a={unversionedId:"plugins/ext-plugin-post-req",id:"version-2.8/plugins/ext-plugin-post-req",isDocsHomePage:!1,title:"ext-plugin-post-req",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.8/plugins/ext-plugin-post-req.md",sourceDirName:"plugins",slug:"/plugins/ext-plugin-post-req",permalink:"/zh/docs/apisix/2.8/plugins/ext-plugin-post-req",editUrl:null,tags:[],version:"2.8",frontMatter:{title:"ext-plugin-post-req"},sidebar:"version-2.8/docs",previous:{title:"ext-plugin-pre-req",permalink:"/zh/docs/apisix/2.8/plugins/ext-plugin-pre-req"},next:{title:"response-rewrite",permalink:"/zh/docs/apisix/2.8/plugins/response-rewrite"}},s=[],c={toc:s};function f(e){var t=e.components,n=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ext-plugin-post-req")," is almost the same as ",(0,o.kt)("inlineCode",{parentName:"p"},"ext-plugin-pre-req"),"."),(0,o.kt)("p",null,"The only difference is that it runs after executing builtin Lua plugins and\nbefore proxying to the upstream."),(0,o.kt)("p",null,"See the documentation of ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/apisix/2.8/plugins/ext-plugin-pre-req"},"ext-plugin-pre-req")," for how to configure it."))}f.isMDXComponent=!0}}]);