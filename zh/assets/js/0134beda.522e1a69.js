"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[73572],{35318:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),h=a,f=m["".concat(u,".").concat(h)]||m[h]||s[h]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},26242:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var n=r(25773),a=r(30808),o=(r(27378),r(35318)),i=["components"],c={title:"\u591a\u534f\u8bae\u63a5\u5165\u6846\u67b6 xRPC \u53d1\u5e03\u5728\u5373\uff0c\u4e3a\u4f60\u89e3\u8bfb\u66f4\u591a APISIX \u751f\u6001\u7ec6\u8282",authors:[{name:"\u5e05\u8fdb\u8d85",title:"Author",url:"https://github.com/shuaijinchao",image_url:"https://avatars.githubusercontent.com/u/8529452?v=4"},{name:"\u82cf\u94b0",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4"}],keywords:["\u591a\u534f\u8bae","Apache APISIX","Java","\u591a\u8bed\u8a00","\u751f\u6001"],description:"\u672c\u6587\u4e3a\u5927\u5bb6\u5e26\u6765\u4e86 Apache APISIX \u5373\u5c06\u53d1\u5e03\u7684 xRPC \u6846\u67b6\u4ee5\u53ca\u76f8\u5173\u7ec6\u8282\uff0c\u540c\u65f6\u4ecb\u7ecd\u4e86 Apache APISIX \u5728\u591a\u8bed\u8a00\u5f00\u53d1\u652f\u6301\u4e2d\u7684\u7ec6\u8282\u5c55\u793a\u3002",tags:["Technology","Ecosystem"]},u=void 0,l={permalink:"/zh/blog/2022/01/21/apisix-xrpc-details-and-miltilingual",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2022/01/21/apisix-xrpc-details-and-miltilingual.md",title:"\u591a\u534f\u8bae\u63a5\u5165\u6846\u67b6 xRPC \u53d1\u5e03\u5728\u5373\uff0c\u4e3a\u4f60\u89e3\u8bfb\u66f4\u591a APISIX \u751f\u6001\u7ec6\u8282",description:"\u672c\u6587\u4e3a\u5927\u5bb6\u5e26\u6765\u4e86 Apache APISIX \u5373\u5c06\u53d1\u5e03\u7684 xRPC \u6846\u67b6\u4ee5\u53ca\u76f8\u5173\u7ec6\u8282\uff0c\u540c\u65f6\u4ecb\u7ecd\u4e86 Apache APISIX \u5728\u591a\u8bed\u8a00\u5f00\u53d1\u652f\u6301\u4e2d\u7684\u7ec6\u8282\u5c55\u793a\u3002",date:"2022-01-21T00:00:00.000Z",formattedDate:"2022\u5e741\u670821\u65e5",tags:[{label:"Technology",permalink:"/zh/blog/tags/technology"},{label:"Ecosystem",permalink:"/zh/blog/tags/ecosystem"}],readingTime:11.33,truncated:!0,authors:[{name:"\u5e05\u8fdb\u8d85",title:"Author",url:"https://github.com/shuaijinchao",image_url:"https://avatars.githubusercontent.com/u/8529452?v=4",imageURL:"https://avatars.githubusercontent.com/u/8529452?v=4"},{name:"\u82cf\u94b0",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4",imageURL:"https://avatars.githubusercontent.com/u/39793568?v=4"}],prevItem:{title:"Apache APISIX \u96c6\u6210 HashiCorp Vault\uff0c\u751f\u6001\u7cfb\u7edf\u518d\u6dfb\u4e00\u5458",permalink:"/zh/blog/2022/01/21/apisix-hashicorp-vault-integration"},nextItem:{title:"CDN \u4e1a\u52a1\u573a\u666f\u4e0b\uff0c\u53c8\u62cd\u4e91\u7684\u516c\u7f51\u7f51\u5173\u573a\u666f\u5b9e\u8df5",permalink:"/zh/blog/2022/01/20/upyun-public-gateway-usecase"}},p={authorsImageUrls:[void 0,void 0]},s=[],m={toc:s};function h(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4e3a\u5927\u5bb6\u5e26\u6765\u4e86 Apache APISIX \u5373\u5c06\u53d1\u5e03\u7684 xRPC \u6846\u67b6\u4ee5\u53ca\u76f8\u5173\u7ec6\u8282\uff0c\u540c\u65f6\u4ecb\u7ecd\u4e86 Apache APISIX \u5728\u591a\u8bed\u8a00\u5f00\u53d1\u652f\u6301\u4e2d\u7684\u7ec6\u8282\u5c55\u793a\u3002")))}h.isMDXComponent=!0}}]);