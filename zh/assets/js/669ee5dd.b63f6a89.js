"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[17053],{35318:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,y=f["".concat(u,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(y,c(c({ref:t},l),{},{components:r})):n.createElement(y,c({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},46133:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var n=r(25773),o=r(30808),a=(r(27378),r(35318)),c=["components"],i={title:"Apache APISIX \u5728\u817e\u8baf\u4e91\u667a\u80fd\u949b\u5e73\u53f0\u4e2d\u7684\u843d\u5730\u5b9e\u8df5",author:"\u5201\u5bff\u94a7",keywords:["Apache APISIX","\u817e\u8baf\u4e91","Kong","Nginx"],description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4e86\u817e\u8baf\u4e91\u667a\u80fd\u949b\u5e73\u53f0\u4f7f\u7528 Apache APISIX \u7684\u4f01\u4e1a\u6848\u4f8b\uff0c\u4ee5\u53ca\u4f7f\u7528 Apache APISIX \u4f5c\u4e3a\u4ea7\u54c1\u6d41\u91cf\u7f51\u5173\u7684\u5177\u4f53\u4f8b\u5b50\u3002",tags:["User Case"]},u=void 0,p={permalink:"/zh/blog/2021/09/16/tencent-cloud",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021/09/16/tencent-cloud.md",title:"Apache APISIX \u5728\u817e\u8baf\u4e91\u667a\u80fd\u949b\u5e73\u53f0\u4e2d\u7684\u843d\u5730\u5b9e\u8df5",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4e86\u817e\u8baf\u4e91\u667a\u80fd\u949b\u5e73\u53f0\u4f7f\u7528 Apache APISIX \u7684\u4f01\u4e1a\u6848\u4f8b\uff0c\u4ee5\u53ca\u4f7f\u7528 Apache APISIX \u4f5c\u4e3a\u4ea7\u54c1\u6d41\u91cf\u7f51\u5173\u7684\u5177\u4f53\u4f8b\u5b50\u3002",date:"2021-09-16T00:00:00.000Z",formattedDate:"2021\u5e749\u670816\u65e5",tags:[{label:"User Case",permalink:"/zh/blog/tags/user-case"}],readingTime:9.085,truncated:!0,authors:[{name:"\u5201\u5bff\u94a7"}],prevItem:{title:"Apache APISIX \u52a9\u529b\u4fbf\u5229\u5145\u7535\u521b\u9886\u8005\u5c0f\u7535\uff0c\u5b9e\u73b0\u4e91\u539f\u751f\u65b9\u6848",permalink:"/zh/blog/2021/09/18/xiaodian-usercase"},nextItem:{title:"\u793e\u533a\u5468\u62a5\uff5c\u65b0\u664b committer \u4e24\u4f4d\uff0c\u529f\u80fd\u4eae\u70b9\u66f4\u65b0\u8fdb\u884c\u4e2d",permalink:"/zh/blog/2021/09/15/weekly-report"}},l={authorsImageUrls:[void 0]},s=[],f={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4e86\u817e\u8baf\u4e91\u667a\u80fd\u949b\u5e73\u53f0\u4f7f\u7528 Apache APISIX \u7684\u4f01\u4e1a\u6848\u4f8b\uff0c\u4ee5\u53ca\u4f7f\u7528 Apache APISIX \u4f5c\u4e3a\u4ea7\u54c1\u6d41\u91cf\u7f51\u5173\u7684\u5177\u4f53\u4f8b\u5b50\u3002")))}m.isMDXComponent=!0}}]);