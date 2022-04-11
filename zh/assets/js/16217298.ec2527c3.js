"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[16718],{35318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var a=n(27378);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),o=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=o(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=o(n),k=l,h=m["".concat(u,".").concat(k)]||m[k]||c[k]||i;return n?a.createElement(h,r(r({ref:t},s),{},{components:n})):a.createElement(h,r({ref:t},s))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:l,r[1]=p;for(var o=2;o<i;o++)r[o]=n[o];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17882:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return c}});var a=n(25773),l=n(30808),i=(n(27378),n(35318)),r=["components"],p={title:"Apache APISIX \u96c6\u6210 HashiCorp Vault\uff0c\u751f\u6001\u7cfb\u7edf\u518d\u6dfb\u4e00\u5458",authors:[{name:"Bisakh Mondal",title:"Author",url:"https://github.com/bisakhmondal",image_url:"https://avatars.githubusercontent.com/u/41498427?v=4"},{name:"\u66fe\u5955\u9716",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://avatars.githubusercontent.com/u/36651058?v=4"}],keywords:["Apache APISIX","HashiCorp","Vault","jwt-auth","\u8ba4\u8bc1"],description:"\u672c\u6587\u4e3a\u5927\u5bb6\u5e26\u6765\u4e86 Apache APISIX \u5373\u5c06\u53d1\u5e03\u7684 Vault \u63d2\u4ef6\u4ee5\u53ca\u76f8\u5173\u7ec6\u8282\u3002\u5728\u4e3a\u670d\u52a1\u63d0\u4f9b\u9ad8\u5e76\u53d1\u4f4e\u5ef6\u8fdf\u7684\u5353\u8d8a\u6027\u80fd\u7684\u540c\u65f6\uff0c\u4e3a\u670d\u52a1\u7684\u5b89\u5168\u4fdd\u9a7e\u62a4\u822a\u3002",tags:["Technology","Authentication"]},u=void 0,o={permalink:"/zh/blog/2022/01/21/apisix-hashicorp-vault-integration",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2022/01/21/apisix-hashicorp-vault-integration.md",title:"Apache APISIX \u96c6\u6210 HashiCorp Vault\uff0c\u751f\u6001\u7cfb\u7edf\u518d\u6dfb\u4e00\u5458",description:"\u672c\u6587\u4e3a\u5927\u5bb6\u5e26\u6765\u4e86 Apache APISIX \u5373\u5c06\u53d1\u5e03\u7684 Vault \u63d2\u4ef6\u4ee5\u53ca\u76f8\u5173\u7ec6\u8282\u3002\u5728\u4e3a\u670d\u52a1\u63d0\u4f9b\u9ad8\u5e76\u53d1\u4f4e\u5ef6\u8fdf\u7684\u5353\u8d8a\u6027\u80fd\u7684\u540c\u65f6\uff0c\u4e3a\u670d\u52a1\u7684\u5b89\u5168\u4fdd\u9a7e\u62a4\u822a\u3002",date:"2022-01-21T00:00:00.000Z",formattedDate:"2022\u5e741\u670821\u65e5",tags:[{label:"Technology",permalink:"/zh/blog/tags/technology"},{label:"Authentication",permalink:"/zh/blog/tags/authentication"}],readingTime:16.19,truncated:!0,authors:[{name:"Bisakh Mondal",title:"Author",url:"https://github.com/bisakhmondal",image_url:"https://avatars.githubusercontent.com/u/41498427?v=4",imageURL:"https://avatars.githubusercontent.com/u/41498427?v=4"},{name:"\u66fe\u5955\u9716",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://avatars.githubusercontent.com/u/36651058?v=4",imageURL:"https://avatars.githubusercontent.com/u/36651058?v=4"}],prevItem:{title:"\u76f4\u64ad\u9884\u544a | APISIX in \u9752\u4e91\uff01\u5f00\u6e90+\u4e91\u539f\u751f\u52a9\u529b\u201c\u4f01\u4e1a\u4e0a\u4e91\u201d\u884c\u52a8\u843d\u5730",permalink:"/zh/blog/2022/01/24/apisix-with-qingcloud-meetup"},nextItem:{title:"\u591a\u534f\u8bae\u63a5\u5165\u6846\u67b6 xRPC \u53d1\u5e03\u5728\u5373\uff0c\u4e3a\u4f60\u89e3\u8bfb\u66f4\u591a APISIX \u751f\u6001\u7ec6\u8282",permalink:"/zh/blog/2022/01/21/apisix-xrpc-details-and-miltilingual"}},s={authorsImageUrls:[void 0,void 0]},c=[{value:"\u4ec0\u4e48\u662f Vault",id:"\u4ec0\u4e48\u662f-vault",children:[]},{value:"jwt-auth \u63d2\u4ef6\u4ecb\u7ecd",id:"jwt-auth-\u63d2\u4ef6\u4ecb\u7ecd",children:[]},{value:"\u5982\u4f55\u96c6\u6210 Vault \u548c Apache APISIX",id:"\u5982\u4f55\u96c6\u6210-vault-\u548c-apache-apisix",children:[{value:"\u914d\u7f6e Vault",id:"\u914d\u7f6e-vault",children:[]},{value:"\u5728 Apache APISIX \u4e2d\u6dfb\u52a0 Vault \u914d\u7f6e",id:"\u5728-apache-apisix-\u4e2d\u6dfb\u52a0-vault-\u914d\u7f6e",children:[]},{value:"\u521b\u5efa\u4e00\u4e2a APISIX Consumer",id:"\u521b\u5efa\u4e00\u4e2a-apisix-consumer",children:[]},{value:"Vault \u4e0e APISIX jwt-auth \u63d2\u4ef6\u96c6\u6210\u7684\u4e0d\u540c\u7528\u4f8b",id:"vault-\u4e0e-apisix-jwt-auth-\u63d2\u4ef6\u96c6\u6210\u7684\u4e0d\u540c\u7528\u4f8b",children:[]},{value:"\u7981\u7528 Vault \u63d2\u4ef6",id:"\u7981\u7528-vault-\u63d2\u4ef6",children:[]}]},{value:"\u7ed3\u8bed",id:"\u7ed3\u8bed",children:[]},{value:"Reference",id:"reference",children:[]}],m={toc:c};function k(e){var t=e.components,n=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4e3a\u5927\u5bb6\u5e26\u6765\u4e86 Apache APISIX \u5373\u5c06\u53d1\u5e03\u7684 Vault \u63d2\u4ef6\u4ee5\u53ca\u76f8\u5173\u7ec6\u8282\u3002\u5728\u4e3a\u670d\u52a1\u63d0\u4f9b\u9ad8\u5e76\u53d1\u4f4e\u5ef6\u8fdf\u7684\u5353\u8d8a\u6027\u80fd\u7684\u540c\u65f6\uff0c\u4e3a\u670d\u52a1\u7684\u5b89\u5168\u4fdd\u9a7e\u62a4\u822a\u3002")),(0,i.kt)("p",null,"\u968f\u7740\u5fae\u670d\u52a1\u67b6\u6784\u7684\u5174\u8d77\uff0c\u4fdd\u6301\u670d\u52a1\u5b89\u5168\u53d8\u5f97\u6bd4\u4ee5\u524d\u66f4\u6709\u6311\u6218\u6027\u3002\u591a\u4e2a\u540e\u7aef server \u5b9e\u4f8b\u4f7f\u7528\u5355\u4e00\u7684\u9759\u6001\u5bc6\u94a5\u51ed\u8bbf\u95ee\u6570\u636e\u5e93 server \u4f1a\u5e26\u6765\u5de8\u5927\u7684\u98ce\u9669\u3002\u5982\u679c\u53d1\u751f\u5bc6\u94a5\u51ed\u8bc1\u6cc4\u9732\uff0c\u6574\u4e2a\u7cfb\u7edf\u90fd\u4f1a\u53d7\u5230\u5f71\u54cd\u3002\u4e3a\u4e86\u89e3\u51b3\u5bc6\u94a5\u51ed\u8bc1\u6cc4\u9732\u6240\u5e26\u6765\u7684\u5f71\u54cd\uff0c\u53ea\u80fd\u64a4\u9500\u8fd9\u4e2a\u5bc6\u94a5\u51ed\u8bc1\u3002\u800c\u64a4\u9500\u5bc6\u94a5\u51ed\u8bc1\u4f1a\u5bfc\u81f4\u5927\u89c4\u6a21\u7684\u670d\u52a1\u4e2d\u65ad\uff0c\u5bf9\u5f00\u53d1\u8005\u6765\u8bf4\uff0c\u670d\u52a1\u5927\u89c4\u6a21\u4e2d\u65ad\u662f\u5f00\u53d1\u8005\u6700\u4e0d\u60f3\u770b\u5230\u4e8b\u60c5\u3002"),(0,i.kt)("p",null,"\u867d\u7136\u6211\u4eec\u4e0d\u80fd\u63d0\u524d\u9884\u77e5\u5c06\u6765\u4f1a\u51fa\u73b0\u54ea\u4e9b\u5b89\u5168\u6f0f\u6d1e\uff0c\u4f46\u662f\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u591a\u4e2a\u5bc6\u94a5\u6765\u63a7\u5236\u8fd9\u4e9b\u5b89\u5168\u6f0f\u6d1e\u7684\u5f71\u54cd\u8303\u56f4\u3002\u4e3a\u4e86\u907f\u514d\u8fd9\u6837\u7684\u60c5\u51b5\uff0c\u50cf HashiCorp Vault \uff08\u4e0b\u6587\u7b80\u79f0 Vault\uff09\u8fd9\u6837\u5bc6\u94a5\u51ed\u8bc1\u89e3\u51b3\u65b9\u6848\u5e94\u8fd0\u800c\u751f\u3002"),(0,i.kt)("p",null,"\u672c\u6587\u6f14\u793a\u4e86\u5982\u4f55\u5c06 Vault \u4e0e Apache APISIX \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"jwt-auth")," \u63d2\u4ef6\u96c6\u6210\uff0c\u5728\u4e3a\u670d\u52a1\u63d0\u4f9b\u9ad8\u5e76\u53d1\u4f4e\u5ef6\u8fdf\u7684\u5353\u8d8a\u6027\u80fd\u7684\u540c\u65f6\uff0c\u4e3a\u670d\u52a1\u7684\u5b89\u5168\u4fdd\u9a7e\u62a4\u822a\u3002"),(0,i.kt)("h2",{id:"\u4ec0\u4e48\u662f-vault"},"\u4ec0\u4e48\u662f Vault"),(0,i.kt)("p",null,"Vault \u65e8\u5728\u5e2e\u52a9\u7528\u6237\u7ba1\u7406\u670d\u52a1\u5bc6\u94a5\u7684\u8bbf\u95ee\u6743\u9650\uff0c\u5e76\u5728\u591a\u4e2a\u670d\u52a1\u4e4b\u95f4\u5b89\u5168\u5730\u4f20\u8f93\u8fd9\u4e9b\u5bc6\u94a5\u3002\u5bc6\u94a5\u53ef\u4ee5\u662f\u4efb\u4f55\u5f62\u5f0f\u7684\u51ed\u8bc1\uff0c\u56e0\u4e3a\u5bc6\u94a5\u53ef\u7528\u4e8e\u89e3\u9501\u654f\u611f\u4fe1\u606f\uff0c\u6240\u4ee5\u9700\u8981\u4e25\u5bc6\u63a7\u5236\u5bc6\u94a5\u3002\u5bc6\u94a5\u7684\u5f62\u5f0f\u53ef\u4ee5\u662f\u5bc6\u7801\u3001API \u5bc6\u94a5\u3001SSH \u5bc6\u94a5\u3001RSA \u4ee4\u724c\u6216 OTP\u3002\u4e8b\u5b9e\u4e0a\uff0c\u5bc6\u94a5\u6cc4\u9732\u7684\u60c5\u51b5\u975e\u5e38\u666e\u904d\uff1a\u5bc6\u94a5\u901a\u5e38\u88ab\u50a8\u5b58\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u6216\u4f5c\u4e3a\u53d8\u91cf\u88ab\u50a8\u5b58\u5728\u4ee3\u7801\u4e2d\uff0c\u5982\u679c\u6ca1\u6709\u59a5\u5584\u4fdd\u5b58\uff0c\u5bc6\u94a5\u751a\u81f3\u4f1a\u51fa\u73b0\u5728 GitHub\u3001BitBucket \u6216 GitLab \u7b49\u516c\u5f00\u53ef\u89c1\u7684\u4ee3\u7801\u5e93\u4e2d\uff0c\u4ece\u800c\u5bf9\u5b89\u5168\u6784\u6210\u4e86\u91cd\u5927\u5a01\u80c1\u3002Vault \u901a\u8fc7\u96c6\u4e2d\u5bc6\u94a5\u89e3\u51b3\u4e86\u8fd9\u4e2a\u95ee\u9898\u3002\u5b83\u4e3a\u9759\u6001\u5bc6\u94a5\u63d0\u4f9b\u52a0\u5bc6\u5b58\u50a8\uff0c\u751f\u6210\u5177\u6709 TTL \u79df\u7ea6\u7684\u52a8\u6001\u5bc6\u94a5\uff0c\u5bf9\u7528\u6237\u8fdb\u884c\u8ba4\u8bc1\uff0c\u4ee5\u786e\u4fdd\u4ed6\u4eec\u6709\u6743\u9650\u8bbf\u95ee\u7279\u5b9a\u7684\u5bc6\u94a5\u3002\u56e0\u6b64\uff0c\u5373\u4f7f\u5728\u5b89\u5168\u6f0f\u6d1e\u7684\u60c5\u51b5\u4e0b\uff0c\u5f71\u54cd\u8303\u56f4\u4e5f\u5c0f\u5f97\u591a\uff0c\u5e76\u80fd\u5f97\u5230\u66f4\u597d\u7684\u63a7\u5236\u3002"),(0,i.kt)("p",null,"Vault \u63d0\u4f9b\u4e86\u4e00\u4e2a\u7528\u6237\u754c\u9762\u7528\u4e8e\u5bc6\u94a5\u7ba1\u7406\uff0c\u4f7f\u63a7\u5236\u548c\u7ba1\u7406\u6743\u9650\u53d8\u5f97\u975e\u5e38\u5bb9\u6613\u3002\u4e0d\u4ec5\u5982\u6b64\uff0c\u5b83\u8fd8\u63d0\u4f9b\u4e86\u7075\u6d3b\u4e14\u8be6\u7ec6\u5ba1\u8ba1\u65e5\u5fd7\u529f\u80fd\uff0c\u80fd\u8ddf\u8e2a\u5230\u6240\u6709\u7528\u6237\u7684\u5386\u53f2\u8bbf\u95ee\u8bb0\u5f55\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1642770417379-a91960a5-5aac-45fa-9277-801a4ee2afc6.png",alt:"HashiCorp Vault"})),(0,i.kt)("h2",{id:"jwt-auth-\u63d2\u4ef6\u4ecb\u7ecd"},"jwt-auth \u63d2\u4ef6\u4ecb\u7ecd"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"jwt-auth")," \u662f\u4e00\u4e2a\u8ba4\u8bc1\u63d2\u4ef6\uff0c\u53ef\u4ee5\u9644\u52a0\u5230\u4efb\u4f55 APISIX \u8def\u7531\u4e0a\uff0c\u5728\u8bf7\u6c42\u88ab\u8f6c\u53d1\u5230\u4e0a\u6e38 URI \u4e4b\u524d\u6267\u884c JWT \u8ba4\u8bc1\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u53d1\u884c\u8005\u4f7f\u7528\u79c1\u94a5\u6216\u6587\u672c\u5bc6\u94a5\u6765\u7b7e\u7f72 JWT\u3002JWT \u7684\u63a5\u6536\u8005\u5c06\u9a8c\u8bc1\u7b7e\u540d\uff0c\u4ee5\u786e\u4fdd\u4ee4\u724c\u5728\u88ab\u53d1\u884c\u8005\u7b7e\u540d\u540e\u6ca1\u6709\u88ab\u6539\u53d8\u3002\u6574\u4e2a JWT \u673a\u5236\u7684\u6574\u4f53\u5b8c\u6574\u6027\u53d6\u51b3\u4e8e\u7b7e\u540d\u5bc6\u94a5\uff08\u6216 RSA \u5bc6\u94a5\u5bf9\u7684\u6587\u672c\u5bc6\u94a5\uff09\u3002\u8fd9\u4f7f\u5f97\u672a\u7ecf\u8ba4\u8bc1\u7684\u6765\u6e90\u5f88\u96be\u731c\u5230\u7b7e\u540d\u5bc6\u94a5\u5e76\u8bd5\u56fe\u6539\u53d8 JWT \u4e2d\u7684\u58f0\u660e\u3002"),(0,i.kt)("p",null,"\u56e0\u6b64\uff0c\u5728\u5b89\u5168\u7684\u73af\u5883\u4e2d\u5b58\u50a8\u8fd9\u4e9b\u5bc6\u94a5\u662f\u975e\u5e38\u5173\u952e\u7684\u3002\u5982\u679c\u5bc6\u94a5\u843d\u5165\u574f\u4eba\u4e4b\u624b\uff0c\u53ef\u80fd\u4f1a\u5371\u53ca\u6574\u4e2a\u57fa\u7840\u8bbe\u65bd\u7684\u5b89\u5168\u3002\u867d\u7136 Apache APISIX \u91c7\u53d6\u4e86\u4e00\u5207\u624b\u6bb5\u6765\u9075\u5faa\u6807\u51c6\u7684 SecOps \u5b9e\u8df5\uff0c\u4f46\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u6709\u4e00\u4e2a\u96c6\u4e2d\u7684\u5bc6\u94a5\u7ba1\u7406\u89e3\u51b3\u65b9\u6848\u4e5f\u662f\u4e00\u4ef6\u597d\u4e8b\u3002\u4f8b\u5982 Vault\uff0c\u6709\u8be6\u7ec6\u7684\u5ba1\u8ba1\u65e5\u5fd7\uff0c\u5b9a\u65f6\u7684\u5bc6\u94a5\u8f6e\u6362\uff0c\u5bc6\u94a5\u64a4\u9500\u7b49\u529f\u80fd\u3002\u5982\u679c\u6bcf\u6b21\u5728\u6574\u4e2a\u57fa\u7840\u8bbe\u65bd\u53d1\u751f\u5bc6\u94a5\u8f6e\u6362\u65f6\uff0c\u4f60\u90fd\u8981\u66f4\u65b0 Apache APISIX \u914d\u7f6e\uff0c\u8fd9\u5c06\u662f\u4e00\u4e2a\u76f8\u5f53\u9ebb\u70e6\u7684\u95ee\u9898\u3002"),(0,i.kt)("h2",{id:"\u5982\u4f55\u96c6\u6210-vault-\u548c-apache-apisix"},"\u5982\u4f55\u96c6\u6210 Vault \u548c Apache APISIX"),(0,i.kt)("p",null,"\u4e3a\u4e86\u4e0e Vault \u96c6\u6210\uff0cApache APISIX \u9700\u8981\u5728 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/conf/config.yaml"},"config.yaml")," \u6587\u4ef6\u4e2d\u52a0\u8f7d Vault \u7684\u76f8\u5173\u914d\u7f6e\u4fe1\u606f\u3002"),(0,i.kt)("p",null,"Apache APISIX \u4e0e Vault server ",(0,i.kt)("a",{parentName:"p",href:"https://www.vaultproject.io/docs/secrets/kv/kv-v1"},"KV secret engine v1")," HTTP ",(0,i.kt)("a",{parentName:"p",href:"https://www.vaultproject.io/api/secret/kv/kv-v1"},"APIs")," \u8fdb\u884c\u901a\u4fe1\u3002\u7531\u4e8e\u5927\u591a\u6570\u4f01\u4e1a\u89e3\u51b3\u65b9\u6848\u503e\u5411\u4e8e\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528 KV Secrets Engine - Version 1\uff0c\u5728 APISIX-Vault \u652f\u6301\u7684\u521d\u59cb\u9636\u6bb5\uff0c\u6211\u4eec\u53ea\u4f7f\u7528\u8fd9\u4e2a\u7248\u672c\u3002\u5728\u4ee5\u540e\u7684\u7248\u672c\u4e2d\uff0c\u6211\u4eec\u5c06\u589e\u52a0\u5bf9 K/V - Version 2 \u7684\u652f\u6301\u3002"),(0,i.kt)("p",null,"\u4f7f\u7528 Vault \u800c\u4e0d\u662f APISIX etcd \u540e\u7aef\u7684\u4e3b\u8981\u987e\u8651\u662f\u5728\u4f4e\u4fe1\u4efb\u5ea6\u73af\u5883\u4e0b\u7684\u5b89\u5168\u95ee\u9898\u3002\u56e0\u4e3a Vault \u8bbf\u95ee\u4ee4\u724c\u662f\u5c0f\u8303\u56f4\u7684\uff0c\u53ef\u4ee5\u6388\u4e88 APISIX server \u6709\u9650\u7684\u6743\u9650\u3002"),(0,i.kt)("h3",{id:"\u914d\u7f6e-vault"},"\u914d\u7f6e Vault"),(0,i.kt)("p",null,"\u672c\u8282\u5206\u4eab\u4e86\u5728 Apache APISIX \u751f\u6001\u7cfb\u7edf\u4e2d\u4f7f\u7528 Vault \u7684\u6700\u4f73\u5b9e\u8df5\u3002\u5982\u679c\u4f60\u5df2\u7ecf\u6709\u4e86\u4e00\u4e2a\u5177\u6709\u5fc5\u8981\u6743\u9650\u7684 Vault \u5b9e\u4f8b\u5728\u8fd0\u884c\uff0c\u8bf7\u8df3\u8fc7\u672c\u8282\u3002"),(0,i.kt)("h4",{id:"\u542f\u52a8-vault-server"},"\u542f\u52a8 Vault server"),(0,i.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u4f60\u6709\u591a\u79cd\u9009\u62e9\uff0c\u53ef\u4ee5\u81ea\u7531\u9009\u62e9 Docker\u3001\u9884\u7f16\u8bd1\u4e8c\u8fdb\u5236\u5305\u6216\u4ece\u6e90\u4ee3\u7801\u6784\u5efa\u3002\u81f3\u4e8e\u4e0e Vault server \u7684\u901a\u4fe1\uff0c\u4f60\u9700\u8981\u4e00\u4e2a Vault CLI \u5ba2\u6237\u7aef\u3002\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8 server\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ vault server -dev -dev-root-token-id=root\n\u2026\nWARNING! dev mode is enabled! In this mode, Vault runs entirely in-memory\nand starts unsealed with a single unseal key. The root token is already\nauthenticated to the CLI, so you can immediately begin using Vault.\nYou may need to set the following environment variable:\nexport VAULT_ADDR='http://127.0.0.1:8200'\nThe unseal key and root token are displayed below in case you want to\nseal/unseal the Vault or re-authenticate.\nUnseal Key: 12hURx2eDPKK1tzK+8TkgH9pPhPNJFpyfc/imCLgJKY=\nRoot Token: root\nDevelopment mode should NOT be used in production installations!\n")),(0,i.kt)("p",null,"\u7528\u6b63\u786e\u7684\u73af\u5883\u53d8\u91cf\u8bbe\u7f6e Vault CLI \u5ba2\u6237\u7aef\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ export VAULT_ADDR='http://127.0.0.1:8200'\n$ export VAULT_TOKEN='root'\n")),(0,i.kt)("p",null,"\u7528\u4e00\u4e2a\u5408\u9002\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," \u524d\u7f00\u542f\u7528 vault k/v version 1\u7684\u5bc6\u94a5\u5f15\u64ce\u540e\u7aef\u3002\u5728\u8fd9\u4e2a\u6f14\u793a\u4e2d\uff0c\u6211\u4eec\u8981\u9009\u62e9 ",(0,i.kt)("inlineCode",{parentName:"p"},"kv")," \u8def\u5f84\uff0c\u8fd9\u6837\u5c31\u4e0d\u4f1a\u4e0e vault \u9ed8\u8ba4\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"kv")," version 2 \u7684\u5bc6\u94a5\u8def\u5f84\u53d1\u751f\u51b2\u7a81\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ vault secrets enable -path=kv -version=1 kv\nSuccess! Enabled the kv secrets engine at: kv/\n\n\n# To reconfirm the status, run\n$ vault secrets list\nPath          Type         Accessor              Description\n----          ----         --------              -----------\ncubbyhole/    cubbyhole    cubbyhole_4eeb394c    per-token private secret storage\nidentity/     identity     identity_5ca6201e     identity store\nkv/           kv           kv_92cd6d37           n/a\nsecret/       kv           kv_6dd46a53           key/value secret storage\nsys/          system       system_2045ddb1       system endpoints used for control, policy and debugging\n")),(0,i.kt)("h4",{id:"\u4e3a-apache-apisix-\u751f\u6210\u4e00\u4e2a-vault-\u8bbf\u95ee\u4ee4\u724c"},"\u4e3a Apache APISIX \u751f\u6210\u4e00\u4e2a Vault \u8bbf\u95ee\u4ee4\u724c"),(0,i.kt)("p",null,"\u672c\u6587\u662f\u5173\u4e8e\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"jwt-auth")," \u63d2\u4ef6\u4e2d\u4f7f\u7528 Vault \u7684\u4ecb\u7ecd\u3002\u56e0\u6b64\uff0c\u5bf9\u4e8e\u4e00\u4e2a APISIX Consumer ",(0,i.kt)("inlineCode",{parentName:"p"},"jack"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"jwt-auth")," \u63d2\u4ef6\u4f1a\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"<vault.prefix inside config.yaml>/consumer/<consumer.username>/jwt-auth")," \u4e2d\u67e5\u627e\uff08\u5982\u679c\u542f\u7528\u4e86 Vault \u914d\u7f6e\uff09",(0,i.kt)("inlineCode",{parentName:"p"},"secret/s")," \u5230 Vault \u952e\u503c\u5bf9 \u5b58\u50a8\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u4f60\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"kv/apisix")," \u547d\u540d\u7a7a\u95f4\uff08Vault \u8def\u5f84\uff09\u6307\u5b9a\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"config.yaml")," \u5185\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"vault.prefix"),"\uff0c\u7528\u4e8e\u6240\u6709 APISIX \u76f8\u5173\u6570\u636e\u7684\u68c0\u7d22\uff0c\u6211\u4eec\u5efa\u8bae\u4f60\u4e3a\u8def\u5f84 ",(0,i.kt)("inlineCode",{parentName:"p"},"kv/apisix/consumer/")," \u521b\u5efa\u4e00\u4e2a\u7b56\u7565\u3002\u6700\u540e\u7684\u661f\u53f7\uff08*\uff09\u786e\u4fdd\u7b56\u7565\u5141\u8bb8\u8bfb\u53d6\u4efb\u4f55\u5177\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"kv/apisix/consumer")," \u524d\u7f00\u7684\u8def\u5f84\u3002"),(0,i.kt)("p",null,"\u7528 HashiCorp \u914d\u7f6e\u8bed\u8a00\uff08HCL\uff09\u521b\u5efa\u4e00\u4e2a\u7b56\u7565\u6587\u4ef6\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ tee apisix-policy.hcl << EOF\npath "kv/apisix/consumer/*" {\n    capabilities = ["read"]\n}\nEOF\n')),(0,i.kt)("p",null,"\u5c06\u7b56\u7565\u5e94\u7528\u4e8e Vault \u5b9e\u4f8b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ vault policy write apisix-policy apisix-policy.hcl\n\nSuccess! Uploaded policy: apisix-policy\n")),(0,i.kt)("p",null,"\u7528\u65b0\u5b9a\u4e49\u7684\u7b56\u7565\u751f\u6210\u4e00\u4e2a\u4ee4\u724c\uff0c\u8be5\u7b56\u7565\u5df2\u88ab\u914d\u7f6e\u4e3a\u5f88\u5c0f\u7684\u8bbf\u95ee\u8fb9\u754c\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ vault token create -policy="apisix-policy"\n\n\nKey                  Value\n---                  -----\ntoken                s.KUWFVhIXgoRuQbbp3j1eMVGa\ntoken_accessor       nPXT3q0mfZkLmhshfioOyx8L\ntoken_duration       768h\ntoken_renewable      true\ntoken_policies       ["apisix-policy" "default"]\nidentity_policies    []\npolicies             ["apisix-policy" "default"]\n')),(0,i.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"s.KUWFVhIXgoRuQbbp3j1eMVGa")," \u662f\u4f60\u7684\u8bbf\u95ee\u4ee4\u724c\u3002"),(0,i.kt)("h3",{id:"\u5728-apache-apisix-\u4e2d\u6dfb\u52a0-vault-\u914d\u7f6e"},"\u5728 Apache APISIX \u4e2d\u6dfb\u52a0 Vault \u914d\u7f6e"),(0,i.kt)("p",null,"Apache APISIX \u901a\u8fc7 Vault HTTP APIs \u4e0e Vault \u5b9e\u4f8b\u8fdb\u884c\u901a\u4fe1\u3002\u5fc5\u8981\u7684\u914d\u7f6e\u5fc5\u987b\u88ab\u6dfb\u52a0\u5230 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/conf/config.yaml"},"config.yaml")," \u4e2d\u3002"),(0,i.kt)("p",null,"\u4e0b\u9762\u662f\u5173\u4e8e\u4f60\u53ef\u4ee5\u4f7f\u7528\u7684\u4e0d\u540c\u5b57\u6bb5\u7684\u7b80\u8981\u4fe1\u606f\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"host\uff1a \u8fd0\u884c Vault server \u7684\u4e3b\u673a\u5730\u5740\u3002"),(0,i.kt)("li",{parentName:"ul"},"timeout\uff1a \u6bcf\u6b21\u8bf7\u6c42\u7684 HTTP \u8d85\u65f6\u3002"),(0,i.kt)("li",{parentName:"ul"},"token\uff1a \u4ece Vault \u5b9e\u4f8b\u751f\u6210\u7684\u4ee4\u724c\uff0c\u6388\u4e88\u4ece Vault \u8bfb\u53d6\u6570\u636e\u7684\u6743\u9650\u3002"),(0,i.kt)("li",{parentName:"ul"},"prefix\uff1a\u542f\u7528\u524d\u7f00\u53ef\u4ee5\u66f4\u597d\u5730\u6267\u884c\u7b56\u7565\uff0c\u751f\u6210\u6709\u9650\u8303\u56f4\u7684\u4ee4\u724c\uff0c\u4e25\u683c\u63a7\u5236\u53ef\u4ee5\u4ece APISIX \u8bbf\u95ee\u7684\u6570\u636e\u3002\u6709\u6548\u7684\u524d\u7f00\u662f\uff08",(0,i.kt)("inlineCode",{parentName:"li"},"kv/apisix"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"secret"),"\u7b49\uff09\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"vault:\n  host: 'http://0.0.0.0:8200'\n  timeout: 10\n  token: 's.KUWFVhIXgoRuQbbp3j1eMVGa'\n  prefix: 'kv/apisix'\n")),(0,i.kt)("h3",{id:"\u521b\u5efa\u4e00\u4e2a-apisix-consumer"},"\u521b\u5efa\u4e00\u4e2a APISIX Consumer"),(0,i.kt)("p",null,"APISIX \u6709\u4e00\u4e2a Consumer \u5c42\u9762\u7684\u62bd\u8c61\uff0c\u4e0e\u8ba4\u8bc1\u65b9\u6848\u5e76\u5217\u3002\u4e3a\u4e86\u542f\u7528\u4efb\u4f55 APISIX \u8def\u7531\u7684\u8ba4\u8bc1\uff0c\u9700\u8981\u4e00\u4e2a\u5177\u6709\u9002\u5408\u8be5\u7279\u5b9a\u7c7b\u578b\u8ba4\u8bc1\u670d\u52a1\u914d\u7f6e\u7684 Consumer\u3002\u4e4b\u540e\u5c06\u901a\u8fc7 APISIX \u6210\u529f\u6267\u884c Consumer \u914d\u7f6e\u65b9\u9762\u7684\u8ba4\u8bc1\u8bf7\u6c42\u8f6c\u53d1\u5230\u4e0a\u6e38 URI\u3002APISIX Consumer \u6709\u4e24\u4e2a\u5b57\u6bb5\uff1a\u4e00\u4e2a\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"username"),"\uff08\u5fc5\u586b\u9879\uff09\uff0c\u7528\u4e8e\u8bc6\u522b Consumer\uff1b\u53e6\u4e00\u4e2a\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins"),"\uff0c\u7528\u4e8e\u4fdd\u5b58 Consumer \u6240\u4f7f\u7528\u7684\u7279\u5b9a\u63d2\u4ef6\u914d\u7f6e\u3002"),(0,i.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u5728\u8fd9\u7bc7\u6587\u7ae0\u4e2d\uff0c\u6211\u4eec\u5c06\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"jwt-auth")," \u63d2\u4ef6\u521b\u5efa\u4e00\u4e2a Consumer\u3002\u5b83\u4e3a\u5404\u81ea\u7684\u8def\u7531\u6216\u670d\u52a1\u6267\u884c JWT \u8ba4\u8bc1\u3002"),(0,i.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u542f\u7528 Vault \u914d\u7f6e\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"jwt-auth"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "jack",\n    "plugins": {\n        "jwt-auth": {\n            "key": "test-key",\n            "vault": {}\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u63d2\u4ef6\u5728 Consumer \u914d\u7f6e\u4e2d\u63d0\u5230\u7684 Consumer ",(0,i.kt)("inlineCode",{parentName:"p"},"jack")," \u7684 Vault \u8def\u5f84\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"<vault.prefix from conf.yaml>/consumer/jack/jwt-auth"),"\uff09\u4e2d\u67e5\u627e\u5bc6\u94a5 ",(0,i.kt)("inlineCode",{parentName:"p"},"secret"),"\uff0c\u5e76\u4f7f\u7528\u5b83\u8fdb\u884c\u540e\u7eed\u7684\u7b7e\u540d\u548c jwt \u9a8c\u8bc1\u3002\u5982\u679c\u5728\u540c\u4e00\u8def\u5f84\u4e2d\u6ca1\u6709\u627e\u5230\u5bc6\u94a5\uff0c\u8be5\u63d2\u4ef6\u4f1a\u8bb0\u5f55\u9519\u8bef\uff0c\u5e76\u4e14\u65e0\u6cd5\u6267\u884c JWT \u9a8c\u8bc1\u3002"),(0,i.kt)("h4",{id:"\u8bbe\u7f6e\u4e00\u4e2a\u6d4b\u8bd5\u7684\u4e0a\u6e38-server"},"\u8bbe\u7f6e\u4e00\u4e2a\u6d4b\u8bd5\u7684\u4e0a\u6e38 server"),(0,i.kt)("p",null,"\u4e3a\u4e86\u6d4b\u8bd5\u8fd9\u4e2a\u884c\u4e3a\uff0c\u4f60\u53ef\u4ee5\u4e3a\u4e00\u4e2a\u4e0a\u6e38\u521b\u5efa\u4e00\u4e2a\u8def\u7531\uff08\u4e00\u4e2a\u7b80\u5355\u7684 ping \u5904\u7406\u7a0b\u5e8f\uff0c\u8fd4\u56de pong\uff09\u3002\u4f60\u53ef\u4ee5\u7528\u4e00\u4e2a\u666e\u901a\u7684 go HTTP-Server \u6765\u8bbe\u7f6e\u5b83\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// simple upstream server\npackage main\n\n\nimport "net/http"\n\n\nfunc ping(w http.ResponseWriter, req *http.Request) {\n    w.Write([]byte("secure/pong\\n"))\n}\n\n\nfunc main() {\n    http.HandleFunc("/secure/ping", ping)\n    http.ListenAndServe(":9999", nil)\n}\n')),(0,i.kt)("h4",{id:"\u521b\u5efa\u4e00\u4e2a\u542f\u7528\u4e86\u8ba4\u8bc1\u7684-apisix-\u8def\u7531"},"\u521b\u5efa\u4e00\u4e2a\u542f\u7528\u4e86\u8ba4\u8bc1\u7684 APISIX \u8def\u7531"),(0,i.kt)("p",null,"\u7528\u8fd9\u4e2a\u5b89\u5168\u7684 ping HTTP server \u548c\u542f\u7528\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"jwt-auth")," \u8ba4\u8bc1\u63d2\u4ef6\u521b\u5efa\u4e00\u4e2a APISIX \u8def\u7531\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "jwt-auth": {}\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:9999": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/secure/ping"\n}\'\n')),(0,i.kt)("h4",{id:"\u4ece-jwt-auth-\u63d2\u4ef6\u751f\u6210\u4ee4\u724c"},"\u4ece jwt-auth \u63d2\u4ef6\u751f\u6210\u4ee4\u724c"),(0,i.kt)("p",null,"\u73b0\u5728\u4ece APISIX \u7b7e\u7f72\u4e00\u4e2a JWT \u5bc6\u6587\uff0c\u53ef\u4ee5\u7528\u4e8e\u5e76\u901a\u8fc7\u5411 APISIX server \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:9080/secure/ping")," \u4ee3\u7406\u8def\u7531\u53d1\u51fa\u8bf7\u6c42\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/apisix/plugin/jwt/sign\\?key\\=test-key -i\nHTTP/1.1 200 OK\nDate: Tue, 18 Jan 2022 07:50:57 GMT\nContent-Type: text/plain; charset=utf-8\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX/2.11.0\n\n\neyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJ0ZXN0LWtleSIsImV4cCI6MTY0MjU3ODY1N30.nkyev1_KUapVgY_QVYETsSApA6gEkDWS8tsHFV1EpD8\n")),(0,i.kt)("p",null,"\u5728\u4e0a\u4e00\u6b65\u4e2d\uff0c\u5982\u679c\u4f60\u770b\u5230\u7c7b\u4f3c ",(0,i.kt)("inlineCode",{parentName:"p"},"failed to sign jwt")," \u7684\u4fe1\u606f\uff0c\u8bf7\u786e\u4fdd\u4f60\u6709\u4e00\u4e2a\u79c1\u6709\u5bc6\u94a5\u5b58\u50a8\u5728 vault ",(0,i.kt)("inlineCode",{parentName:"p"},"kv/apisix/consumers/jack/jwt-aut")," \u8def\u5f84\u4e2d\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# example\n$ vault kv put kv/apisix/consumer/jack/jwt-auth secret=$ecr3t-c0d3\nSuccess! Data written to: kv/apisix/consumer/jack/jwt-auth\n")),(0,i.kt)("h4",{id:"\u5411-apisix-server-\u53d1\u9001\u8bf7\u6c42"},"\u5411 APISIX Server \u53d1\u9001\u8bf7\u6c42"),(0,i.kt)("p",null,"\u73b0\u5728\uff0c\u5411 APISIX \u4ee3\u7406\u53d1\u51fa\u4e00\u4e2a\u8def\u7531 ",(0,i.kt)("inlineCode",{parentName:"p"},"/secure/ping")," \u7684\u8bf7\u6c42\u3002\u9a8c\u8bc1\u6210\u529f\u540e\uff0c\u5b83\u5c06\u628a\u8bf7\u6c42\u8f6c\u53d1\u7ed9\u6211\u4eec\u7684 go HTTP server\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/secure/ping -H 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJ0ZXN0LWtleSIsImV4cCI6MTY0MjU3ODU5M30.IYudBr7FTgRme70u4rEBoYNtGmGByzgfGlt8hctI__Q' -i\nHTTP/1.1 200 OK\nContent-Type: text/plain; charset=utf-8\nContent-Length: 12\nConnection: keep-alive\nDate: Tue, 18 Jan 2022 08:00:04 GMT\nServer: APISIX/2.11.0\n\n\nsecure/pong\n")),(0,i.kt)("p",null,"\u4efb\u4f55\u65e0\u6548\u7684 JWT \u8bf7\u6c42\u90fd\u4f1a\u629b\u51fa ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP 401 Unauthorized")," \u7684\u9519\u8bef\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/secure/ping -i\nHTTP/1.1 401 Unauthorized\nDate: Tue, 18 Jan 2022 08:00:33 GMT\nContent-Type: text/plain; charset=utf-8\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX/2.11.0\n\n\n{"message":"Missing JWT token in request"}\n')),(0,i.kt)("h3",{id:"vault-\u4e0e-apisix-jwt-auth-\u63d2\u4ef6\u96c6\u6210\u7684\u4e0d\u540c\u7528\u4f8b"},"Vault \u4e0e APISIX jwt-auth \u63d2\u4ef6\u96c6\u6210\u7684\u4e0d\u540c\u7528\u4f8b"),(0,i.kt)("p",null,"Apache APISIX ",(0,i.kt)("inlineCode",{parentName:"p"},"jwt-auth")," \u63d2\u4ef6\u53ef\u4ee5\u88ab\u914d\u7f6e\u4e3a\u4ece Vault \u5b58\u50a8\u4e2d\u83b7\u53d6\u7b80\u5355\u7684\u6587\u672c\u5bc6\u94a5\u4ee5\u53ca RS256 \u516c\u79c1\u5bc6\u94a5\u5bf9\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5bf9\u4e8e\u8be5\u96c6\u6210\u652f\u6301\u7684\u65e9\u671f\u7248\u672c\uff0c\u8be5\u63d2\u4ef6\u5e0c\u671b\u5b58\u50a8\u5230\u91d1\u5e93\u8def\u5f84\u4e2d\u7684\u5bc6\u94a5\u540d\u79f0\u5728 ","[",(0,i.kt)("inlineCode",{parentName:"p"},"secret"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"public_key"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"private_key"),"]"," \u4e4b\u95f4\uff0c\u4ee5\u6210\u529f\u4f7f\u7528\u8be5\u5bc6\u94a5\u3002\u5728\u672a\u6765\u7684\u7248\u672c\u4e2d\uff0c\u6211\u4eec\u5c06\u589e\u52a0\u5bf9\u5f15\u7528\u81ea\u5b9a\u4e49\u547d\u540d\u7684\u5bc6\u94a5\u7684\u652f\u6301\u3002"))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u4f60\u5728 Vault \u5185\u5b58\u50a8\u4e86 HS256 \u7b7e\u540d\u5bc6\u94a5\uff0c\u4f60\u60f3\u7528\u5b83\u6765\u8fdb\u884c jwt \u7b7e\u540d\u548c\u9a8c\u8bc1\u3002"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n {\n     "username": "jack",\n     "plugins": {\n         "jwt-auth": {\n             "key": "key-1",\n             "vault": {}\n         }\n     }\n }\'\n')),(0,i.kt)("p",{parentName:"li"},"\u5728\u8fd9\u91cc\uff0c\u63d2\u4ef6\u5728 Consumer \u914d\u7f6e\u4e2d\u63d0\u5230\u7684 Consumer \u7528\u6237 ",(0,i.kt)("inlineCode",{parentName:"p"},"jack")," \u7684 Vault \u8def\u5f84\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"<vault.prefix from conf.yaml>/consumer/jack/jwt-auth"),"\uff09\u4e2d\u67e5\u627e\u5bc6\u94a5 ",(0,i.kt)("inlineCode",{parentName:"p"},"secret"),"\uff0c\u5e76\u4f7f\u7528\u5b83\u8fdb\u884c\u540e\u7eed\u7684\u7b7e\u540d\u548c jwt \u9a8c\u8bc1\u3002\u5982\u679c\u5728\u540c\u4e00\u8def\u5f84\u4e2d\u6ca1\u6709\u627e\u5230\u5bc6\u94a5\uff0c\u8be5\u63d2\u4ef6\u5c06\u8bb0\u5f55\u4e00\u4e2a\u9519\u8bef\uff0c\u5e76\u4e14\u65e0\u6cd5\u6267\u884c JWT \u9a8c\u8bc1\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"RS256 RSA \u5bc6\u94a5\u5bf9\uff0c\u516c\u94a5\u548c\u79c1\u94a5\u90fd\u5b58\u50a8\u5728 Vault \u4e2d\u3002"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n {\n     "username": "jim",\n     "plugins": {\n         "jwt-auth": {\n             "key": "rsa-keypair",\n             "algorithm": "RS256",\n             "vault": {}\n         }\n     }\n }\'\n')),(0,i.kt)("p",{parentName:"li"},"\u8be5\u63d2\u4ef6\u5728 Vault \u952e\u503c\u5bf9\u8def\u5f84\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"<vault.prefix from conf.yaml>/consumer/jim/jwt-auth"),"\uff09\u4e2d\u4e3a\u63d2\u4ef6 Vault \u914d\u7f6e\u4e2d\u63d0\u5230\u7684\u7528\u6237 ",(0,i.kt)("inlineCode",{parentName:"p"},"jim")," \u67e5\u627e ",(0,i.kt)("inlineCode",{parentName:"p"},"public_key")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"private_key"),"\u3002\u5982\u679c\u6ca1\u6709\u627e\u5230\uff0c\u8ba4\u8bc1\u5931\u8d25\u3002"),(0,i.kt)("p",{parentName:"li"},"\u5982\u679c\u4f60\u4e0d\u786e\u5b9a\u5982\u4f55\u5c06\u516c\u94a5\u548c\u79c1\u94a5\u5b58\u50a8\u5230 Vault \u952e\u503c\u5bf9\u4e2d\uff0c\u8bf7\u4f7f\u7528\u8fd9\u4e2a\u547d\u4ee4\u3002"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'# provided, your current directory contains the files named "public.pem" and "private.pem"\n $ vault kv put kv/apisix/consumer/jim/jwt-auth public_key=@public.pem private_key=@private.pem\n Success! Data written to: kv/apisix/consumer/jim/jwt-auth\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Consumer \u914d\u7f6e\u4e2d\u7684\u516c\u94a5\uff0c\u800c\u79c1\u94a5\u5728 Vault \u4e2d\u3002"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n {\n     "username": "john",\n     "plugins": {\n         "jwt-auth": {\n             "key": "user-key",\n             "algorithm": "RS256",\n             "public_key": "-----BEGIN PUBLIC KEY-----\\n\u2026\u2026\\n-----END PUBLIC KEY-----"\n             "vault": {}\n         }\n     }\n }\'\n')),(0,i.kt)("p",{parentName:"li"},"\u8fd9\u4e2a\u63d2\u4ef6\u4f7f\u7528\u6765\u81ea Consumer \u914d\u7f6e\u7684 RSA \u516c\u94a5\uff0c\u5e76\u4f7f\u7528\u76f4\u63a5\u4ece Vault \u83b7\u53d6\u7684\u79c1\u94a5\u3002"))),(0,i.kt)("h3",{id:"\u7981\u7528-vault-\u63d2\u4ef6"},"\u7981\u7528 Vault \u63d2\u4ef6"),(0,i.kt)("p",null,"\u73b0\u5728\uff0c\u8981\u7981\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"jwt-auth")," \u63d2\u4ef6\u7684 Vault \u67e5\u8be2\uff0c\u53ea\u9700\u4ece Consumer \u63d2\u4ef6\u914d\u7f6e\u4e2d\u5220\u9664\u7a7a\u7684 Vault \u5bf9\u8c61\uff08\u672c\u4f8b\u4e2d\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"jack"),"\uff09\u3002\u8fd9\u5c06\u4f7f JWT \u63d2\u4ef6\u5728\u968f\u540e\u5bf9\u5df2\u542f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"jwt-auth")," \u914d\u7f6e\u7684 URI \u8def\u7531\u7684\u8bf7\u6c42\u4e2d\uff0c\u5c06\u67e5\u627e\u7b7e\u540d\u5bc6\u94a5\uff08\u5305\u62ec HS256/HS512 \u6216 RS512 \u5bc6\u94a5\u5bf9\uff09\u7eb3\u5165\u63d2\u4ef6\u914d\u7f6e\u3002\u5373\u4f7f\u4f60\u5728 APISIX ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yaml")," \u4e2d\u542f\u7528\u4e86 Vault \u914d\u7f6e\uff0c\u4e5f\u4e0d\u4f1a\u6709\u8bf7\u6c42\u88ab\u53d1\u9001\u5230 Vault server\u3002"),(0,i.kt)("p",null,"Apache APISIX \u63d2\u4ef6\u662f\u70ed\u52a0\u8f7d\u7684\uff0c\u56e0\u6b64\u4e0d\u9700\u8981\u91cd\u65b0\u542f\u52a8 Apache APISIX\uff0c\u914d\u7f6e\u53ef\u4ee5\u7acb\u5373\u751f\u6548\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "jack",\n    "plugins": {\n        "jwt-auth": {\n            "key": "test-key",\n            "secret": "my-secret-key"\n        }\n    }\n}\'\n')),(0,i.kt)("h2",{id:"\u7ed3\u8bed"},"\u7ed3\u8bed"),(0,i.kt)("p",null,"\u672c\u6587\u4e3a\u5927\u5bb6\u5e26\u6765\u4e86 Apache APISIX \u5373\u5c06\u53d1\u5e03\u7684 Vault \u63d2\u4ef6\u4ee5\u53ca\u76f8\u5173\u7ec6\u8282\u3002"),(0,i.kt)("p",null,"\u6b22\u8fce\u968f\u65f6\u5728 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/discussions"},"GitHub Discussions")," \u4e2d\u53d1\u8d77\u8ba8\u8bba\uff0c\u6216\u901a\u8fc7",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/general/join"},"\u90ae\u4ef6\u5217\u8868"),"\u8fdb\u884c\u4ea4\u6d41\u3002"),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://blog.bisakh.com/blog/vault-apisix-jwt-auth"},"Bisakh's Blog")))}k.isMDXComponent=!0}}]);