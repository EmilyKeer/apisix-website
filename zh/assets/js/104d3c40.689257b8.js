"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[73911],{35318:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=l(r),f=o,m=g["".concat(u,".").concat(f)]||g[f]||p[f]||a;return r?n.createElement(m,c(c({ref:t},s),{},{components:r})):n.createElement(m,c({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=g;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},61723:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var n=r(25773),o=r(30808),a=(r(27378),r(35318)),c=["components"],i={title:"\u6559\u7a0b\u7bc7\uff1a\u5982\u4f55\u5728 Apache APISIX Ingress Controller \u4e2d\u4f7f\u7528 Cert Manager \u7ba1\u7406\u8bc1\u4e66",author:"\u5f20\u8d85",authorURL:"https://github.com/tokers",authorImageURL:"https://avatars.githubusercontent.com/u/10428333?v=4",keywords:["Apache APISIX Ingress Controller","Apache APISIX","Cert Manager","Kubernetes"],description:"\u672c\u6587\u5c06\u901a\u8fc7\u8be6\u7ec6\u7684\u4ee3\u7801\u6b65\u9aa4\u4e3a\u5927\u5bb6\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7 Cert Manager \u5728 Apache APISIX Ingress Controller \u91cc\u8fdb\u884c\u8bc1\u4e66\u7ba1\u7406\u3002",tags:["Technology"]},u=void 0,l={permalink:"/zh/blog/2021/10/22/cert-manager-in-ingress",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021/10/22/cert-manager-in-ingress.md",title:"\u6559\u7a0b\u7bc7\uff1a\u5982\u4f55\u5728 Apache APISIX Ingress Controller \u4e2d\u4f7f\u7528 Cert Manager \u7ba1\u7406\u8bc1\u4e66",description:"\u672c\u6587\u5c06\u901a\u8fc7\u8be6\u7ec6\u7684\u4ee3\u7801\u6b65\u9aa4\u4e3a\u5927\u5bb6\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7 Cert Manager \u5728 Apache APISIX Ingress Controller \u91cc\u8fdb\u884c\u8bc1\u4e66\u7ba1\u7406\u3002",date:"2021-10-22T00:00:00.000Z",formattedDate:"2021\u5e7410\u670822\u65e5",tags:[{label:"Technology",permalink:"/zh/blog/tags/technology"}],readingTime:7.585,truncated:!0,authors:[{name:"\u5f20\u8d85",url:"https://github.com/tokers",imageURL:"https://avatars.githubusercontent.com/u/10428333?v=4"}],prevItem:{title:"\u4ece 0 \u5230 1\uff0cAPISIX Ingress \u52a0\u5165\u793e\u533a\u540e\u7684\u53d1\u5c55\u4e0e\u6536\u83b7",permalink:"/zh/blog/2021/10/26/apisix-ingress"},nextItem:{title:"\u76f4\u64ad\u9884\u544a | Apache APISIX \xd7 Apache SkyWalking \u7ebf\u4e0a\u5206\u4eab",permalink:"/zh/blog/2021/10/18/meetup"}},s={authorsImageUrls:[void 0]},p=[],g={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u5c06\u901a\u8fc7\u8be6\u7ec6\u7684\u4ee3\u7801\u6b65\u9aa4\u4e3a\u5927\u5bb6\u4ecb\u7ecd\u5982\u4f55\u901a\u8fc7 Cert Manager \u5728 Apache APISIX Ingress Controller \u91cc\u8fdb\u884c\u8bc1\u4e66\u7ba1\u7406\u3002")))}f.isMDXComponent=!0}}]);