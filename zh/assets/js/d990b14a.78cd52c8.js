"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[70681],{35318:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(27378);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(t),m=a,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||l;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=s;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},80893:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var r=t(25773),a=t(30808),l=(t(27378),t(35318)),o=["components"],i={title:"\u8c03\u8bd5\u529f\u80fd"},p=void 0,u={unversionedId:"debug-function",id:"version-2.6/debug-function",isDocsHomePage:!1,title:"\u8c03\u8bd5\u529f\u80fd",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.6/debug-function.md",sourceDirName:".",slug:"/debug-function",permalink:"/zh/docs/apisix/2.6/debug-function",editUrl:null,tags:[],version:"2.6",frontMatter:{title:"\u8c03\u8bd5\u529f\u80fd"},sidebar:"version-2.6/docs",previous:{title:"\u63d2\u4ef6\u62e6\u622a\u5668",permalink:"/zh/docs/apisix/2.6/plugin-interceptors"}},c=[{value:"<code>5xx</code> \u54cd\u5e94\u72b6\u6001\u7801",id:"5xx-\u54cd\u5e94\u72b6\u6001\u7801",children:[]},{value:"\u5982\u4f55\u8bc6\u522b <code>5xx</code> \u54cd\u5e94\u72b6\u6001\u7801\u7684\u6765\u6e90",id:"\u5982\u4f55\u8bc6\u522b-5xx-\u54cd\u5e94\u72b6\u6001\u7801\u7684\u6765\u6e90",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]}],d={toc:c};function s(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"5xx-\u54cd\u5e94\u72b6\u6001\u7801"},(0,l.kt)("inlineCode",{parentName:"h2"},"5xx")," \u54cd\u5e94\u72b6\u6001\u7801"),(0,l.kt)("p",null,"500\u3001502\u3001503\u7b49\u7c7b\u4f3c\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"5xx")," \u72b6\u6001\u7801\uff0c\u662f\u7531\u4e8e\u670d\u52a1\u5668\u9519\u8bef\u800c\u54cd\u5e94\u7684\u72b6\u6001\u7801\uff0c\u5f53\u4e00\u4e2a\u8bf7\u6c42\u51fa\u73b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"5xx")," \u72b6\u6001\u7801\u65f6\uff1b\u5b83\u53ef\u80fd\u6765\u6e90\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"APISIX")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"Upstream")," \u3002\u5982\u4f55\u8bc6\u522b\u8fd9\u4e9b\u54cd\u5e94\u72b6\u6001\u7801\u7684\u6765\u6e90\uff0c\u662f\u4e00\u4ef6\u5f88\u6709\u610f\u4e49\u7684\u4e8b\uff0c\u5b83\u80fd\u591f\u5feb\u901f\u7684\u5e2e\u52a9\u6211\u4eec\u786e\u5b9a\u95ee\u9898\u7684\u6240\u5728\u3002"),(0,l.kt)("h2",{id:"\u5982\u4f55\u8bc6\u522b-5xx-\u54cd\u5e94\u72b6\u6001\u7801\u7684\u6765\u6e90"},"\u5982\u4f55\u8bc6\u522b ",(0,l.kt)("inlineCode",{parentName:"h2"},"5xx")," \u54cd\u5e94\u72b6\u6001\u7801\u7684\u6765\u6e90"),(0,l.kt)("p",null,"\u5728\u8bf7\u6c42\u7684\u54cd\u5e94\u5934\u4e2d\uff0c\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"X-APISIX-Upstream-Status")," \u8fd9\u4e2a\u54cd\u5e94\u5934\uff0c\u6211\u4eec\u53ef\u4ee5\u6709\u6548\u7684\u8bc6\u522b ",(0,l.kt)("inlineCode",{parentName:"p"},"5xx")," \u72b6\u6001\u7801\u7684\u6765\u6e90\u3002\u5f53 ",(0,l.kt)("inlineCode",{parentName:"p"},"5xx")," \u72b6\u6001\u7801\u6765\u6e90\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"Upstream")," \u65f6\uff0c\u5728\u54cd\u5e94\u5934\u4e2d\u53ef\u4ee5\u770b\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"X-APISIX-Upstream-Status")," \u8fd9\u4e2a\u54cd\u5e94\u5934\uff0c\u5e76\u4e14\u8fd9\u4e2a\u54cd\u5e94\u5934\u7684\u503c\u4e3a\u54cd\u5e94\u7684\u72b6\u6001\u7801\u3002\u5f53 ",(0,l.kt)("inlineCode",{parentName:"p"},"5xx")," \u72b6\u6001\u7801\u6765\u6e90\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"APISIX")," \u65f6\uff0c\u54cd\u5e94\u5934\u4e2d\u6ca1\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"X-APISIX-Upstream-Status")," \u7684\u54cd\u5e94\u5934\u4fe1\u606f\u3002\u4e5f\u5c31\u662f\u53ea\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"5xx")," \u72b6\u6001\u7801\u6765\u6e90\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"Upstream")," \u65f6\uff0c\u624d\u4f1a\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"X-APISIX-Upstream-Status")," \u54cd\u5e94\u5934\u3002"),(0,l.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("p",null,"\u793a\u4f8b1\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"502")," \u54cd\u5e94\u72b6\u6001\u7801\u6765\u6e90\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"Upstream")," (IP\u5730\u5740\u4e0d\u53ef\u7528)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n')),(0,l.kt)("p",null,"\u6d4b\u8bd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/hello -v\n......\n< HTTP/1.1 502 Bad Gateway\n< Date: Wed, 25 Nov 2020 14:40:22 GMT\n< Content-Type: text/html; charset=utf-8\n< Content-Length: 154\n< Connection: keep-alive\n< Server: APISIX/2.0\n< X-APISIX-Upstream-Status: 502\n<\n<html>\n<head><title>502 Bad Gateway</title></head>\n<body>\n<center><h1>502 Bad Gateway</h1></center>\n<hr><center>openresty</center>\n</body>\n</html>\n\n")),(0,l.kt)("p",null,"\u5177\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"X-APISIX-Upstream-Status: 502")," \u7684\u54cd\u5e94\u5934\u3002"),(0,l.kt)("p",null,"\u793a\u4f8b2: ",(0,l.kt)("inlineCode",{parentName:"p"},"502")," \u54cd\u5e94\u72b6\u6001\u7801\u6765\u6e90\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"APISIX")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "fault-injection": {\n            "abort": {\n                "http_status": 500,\n                "body": "Fault Injection!\\n"\n            }\n        }\n    },\n    "uri": "/hello"\n}\'\n')),(0,l.kt)("p",null,"\u6d4b\u8bd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/hello -v\n......\n< HTTP/1.1 500 Internal Server Error\n< Date: Wed, 25 Nov 2020 14:50:20 GMT\n< Content-Type: text/plain; charset=utf-8\n< Transfer-Encoding: chunked\n< Connection: keep-alive\n< Server: APISIX/2.0\n<\nFault Injection!\n")),(0,l.kt)("p",null,"\u6ca1\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"X-APISIX-Upstream-Status")," \u7684\u54cd\u5e94\u5934\u3002"),(0,l.kt)("p",null,"\u793a\u4f8b3\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"Upstream")," \u5177\u6709\u591a\u8282\u70b9\uff0c\u5e76\u4e14\u6240\u6709\u8282\u70b9\u4e0d\u53ef\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/upstreams/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "nodes": {\n        "127.0.0.3:1": 1,\n        "127.0.0.2:1": 1,\n        "127.0.0.1:1": 1\n    },\n    "retries": 2,\n    "type": "roundrobin"\n}\'\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "upstream_id": "1"\n}\'\n')),(0,l.kt)("p",null,"\u6d4b\u8bd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/hello -v\n< HTTP/1.1 502 Bad Gateway\n< Date: Wed, 25 Nov 2020 15:07:34 GMT\n< Content-Type: text/html; charset=utf-8\n< Content-Length: 154\n< Connection: keep-alive\n< Server: APISIX/2.0\n< X-APISIX-Upstream-Status: 502, 502, 502\n<\n<html>\n<head><title>502 Bad Gateway</title></head>\n<body>\n<center><h1>502 Bad Gateway</h1></center>\n<hr><center>openresty</center>\n</body>\n</html>\n")),(0,l.kt)("p",null,"\u5177\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"X-APISIX-Upstream-Status: 502, 502, 502")," \u7684\u54cd\u5e94\u5934\u3002"))}s.isMDXComponent=!0}}]);