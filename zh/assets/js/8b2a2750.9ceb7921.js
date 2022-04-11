"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[44597],{35318:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var r=n(27378);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),l=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),h=l(n),m=a,g=h["".concat(c,".").concat(m)]||h[m]||s[m]||o;return n?r.createElement(g,i(i({ref:e},p),{},{components:n})):r.createElement(g,i({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=h;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"==typeof t?t:a,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},78973:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return s}});var r=n(25773),a=n(30808),o=(n(27378),n(35318)),i=["components"],u={title:"Apache APISIX \u96c6\u6210 HashiCorp Vault\uff0c\u751f\u6001\u7cfb\u7edf\u518d\u6dfb\u4e00\u5458",authors:[{name:"Bisakh Mondal",title:"Author",url:"https://github.com/bisakhmondal",image_url:"https://avatars.githubusercontent.com/u/41498427?v=4"},{name:"\u66fe\u5955\u9716",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://avatars.githubusercontent.com/u/36651058?v=4"}],keywords:["Apache APISIX","HashiCorp","Vault","jwt-auth","\u8ba4\u8bc1"],description:"\u672c\u6587\u4e3a\u5927\u5bb6\u5e26\u6765\u4e86 Apache APISIX \u5373\u5c06\u53d1\u5e03\u7684 Vault \u63d2\u4ef6\u4ee5\u53ca\u76f8\u5173\u7ec6\u8282\u3002\u5728\u4e3a\u670d\u52a1\u63d0\u4f9b\u9ad8\u5e76\u53d1\u4f4e\u5ef6\u8fdf\u7684\u5353\u8d8a\u6027\u80fd\u7684\u540c\u65f6\uff0c\u4e3a\u670d\u52a1\u7684\u5b89\u5168\u4fdd\u9a7e\u62a4\u822a\u3002",tags:["Technology","Authentication"]},c=void 0,l={permalink:"/zh/blog/2022/01/21/apisix-hashicorp-vault-integration",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2022/01/21/apisix-hashicorp-vault-integration.md",title:"Apache APISIX \u96c6\u6210 HashiCorp Vault\uff0c\u751f\u6001\u7cfb\u7edf\u518d\u6dfb\u4e00\u5458",description:"\u672c\u6587\u4e3a\u5927\u5bb6\u5e26\u6765\u4e86 Apache APISIX \u5373\u5c06\u53d1\u5e03\u7684 Vault \u63d2\u4ef6\u4ee5\u53ca\u76f8\u5173\u7ec6\u8282\u3002\u5728\u4e3a\u670d\u52a1\u63d0\u4f9b\u9ad8\u5e76\u53d1\u4f4e\u5ef6\u8fdf\u7684\u5353\u8d8a\u6027\u80fd\u7684\u540c\u65f6\uff0c\u4e3a\u670d\u52a1\u7684\u5b89\u5168\u4fdd\u9a7e\u62a4\u822a\u3002",date:"2022-01-21T00:00:00.000Z",formattedDate:"2022\u5e741\u670821\u65e5",tags:[{label:"Technology",permalink:"/zh/blog/tags/technology"},{label:"Authentication",permalink:"/zh/blog/tags/authentication"}],readingTime:16.19,truncated:!0,authors:[{name:"Bisakh Mondal",title:"Author",url:"https://github.com/bisakhmondal",image_url:"https://avatars.githubusercontent.com/u/41498427?v=4",imageURL:"https://avatars.githubusercontent.com/u/41498427?v=4"},{name:"\u66fe\u5955\u9716",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://avatars.githubusercontent.com/u/36651058?v=4",imageURL:"https://avatars.githubusercontent.com/u/36651058?v=4"}],prevItem:{title:"\u76f4\u64ad\u9884\u544a | APISIX in \u9752\u4e91\uff01\u5f00\u6e90+\u4e91\u539f\u751f\u52a9\u529b\u201c\u4f01\u4e1a\u4e0a\u4e91\u201d\u884c\u52a8\u843d\u5730",permalink:"/zh/blog/2022/01/24/apisix-with-qingcloud-meetup"},nextItem:{title:"\u591a\u534f\u8bae\u63a5\u5165\u6846\u67b6 xRPC \u53d1\u5e03\u5728\u5373\uff0c\u4e3a\u4f60\u89e3\u8bfb\u66f4\u591a APISIX \u751f\u6001\u7ec6\u8282",permalink:"/zh/blog/2022/01/21/apisix-xrpc-details-and-miltilingual"}},p={authorsImageUrls:[void 0,void 0]},s=[],h={toc:s};function m(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4e3a\u5927\u5bb6\u5e26\u6765\u4e86 Apache APISIX \u5373\u5c06\u53d1\u5e03\u7684 Vault \u63d2\u4ef6\u4ee5\u53ca\u76f8\u5173\u7ec6\u8282\u3002\u5728\u4e3a\u670d\u52a1\u63d0\u4f9b\u9ad8\u5e76\u53d1\u4f4e\u5ef6\u8fdf\u7684\u5353\u8d8a\u6027\u80fd\u7684\u540c\u65f6\uff0c\u4e3a\u670d\u52a1\u7684\u5b89\u5168\u4fdd\u9a7e\u62a4\u822a\u3002")))}m.isMDXComponent=!0}}]);