"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4991],{35318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(o,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53251:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return s}});var a=n(25773),r=n(30808),l=(n(27378),n(35318)),i=["components"],u={title:"basic-auth"},o=void 0,p={unversionedId:"plugins/basic-auth",id:"version-2.7/plugins/basic-auth",isDocsHomePage:!1,title:"basic-auth",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.7/plugins/basic-auth.md",sourceDirName:"plugins",slug:"/plugins/basic-auth",permalink:"/zh/docs/apisix/2.7/plugins/basic-auth",editUrl:null,tags:[],version:"2.7",frontMatter:{title:"basic-auth"},sidebar:"version-2.7/docs",previous:{title:"jwt-auth",permalink:"/zh/docs/apisix/2.7/plugins/jwt-auth"},next:{title:"authz-keycloak",permalink:"/zh/docs/apisix/2.7/plugins/authz-keycloak"}},s=[{value:"\u76ee\u5f55",id:"\u76ee\u5f55",children:[]},{value:"\u540d\u5b57",id:"\u540d\u5b57",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u5982\u4f55\u542f\u7528",id:"\u5982\u4f55\u542f\u7528",children:[{value:"1. \u521b\u5efa\u4e00\u4e2a consumer \u5bf9\u8c61\uff0c\u5e76\u8bbe\u7f6e\u63d2\u4ef6 <code>basic-auth</code> \u7684\u503c\u3002",id:"1-\u521b\u5efa\u4e00\u4e2a-consumer-\u5bf9\u8c61\u5e76\u8bbe\u7f6e\u63d2\u4ef6-basic-auth-\u7684\u503c",children:[]},{value:"2. \u521b\u5efa Route \u6216 Service \u5bf9\u8c61\uff0c\u5e76\u5f00\u542f <code>basic-auth</code> \u63d2\u4ef6\u3002",id:"2-\u521b\u5efa-route-\u6216-service-\u5bf9\u8c61\u5e76\u5f00\u542f-basic-auth-\u63d2\u4ef6",children:[]}]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],c={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u76ee\u5f55"},"\u76ee\u5f55"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%90%8D%E5%AD%97"},(0,l.kt)("strong",{parentName:"a"},"\u540d\u5b57"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%B1%9E%E6%80%A7"},(0,l.kt)("strong",{parentName:"a"},"\u5c5e\u6027"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%A6%82%E4%BD%95%E5%90%AF%E7%94%A8"},(0,l.kt)("strong",{parentName:"a"},"\u5982\u4f55\u542f\u7528"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E6%B5%8B%E8%AF%95%E6%8F%92%E4%BB%B6"},(0,l.kt)("strong",{parentName:"a"},"\u6d4b\u8bd5\u63d2\u4ef6"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%A6%81%E7%94%A8%E6%8F%92%E4%BB%B6"},(0,l.kt)("strong",{parentName:"a"},"\u7981\u7528\u63d2\u4ef6")))),(0,l.kt)("h2",{id:"\u540d\u5b57"},"\u540d\u5b57"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"basic-auth")," \u662f\u4e00\u4e2a\u8ba4\u8bc1\u63d2\u4ef6\uff0c\u5b83\u9700\u8981\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"consumer")," \u4e00\u8d77\u914d\u5408\u624d\u80fd\u5de5\u4f5c\u3002"),(0,l.kt)("p",null,"\u6dfb\u52a0 Basic Authentication \u5230\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"service")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"route"),"\u3002 \u7136\u540e ",(0,l.kt)("inlineCode",{parentName:"p"},"consumer")," \u5c06\u5176\u7528\u6237\u540d\u548c\u5bc6\u7801\u6dfb\u52a0\u5230\u8bf7\u6c42\u5934\u4e2d\u4ee5\u9a8c\u8bc1\u5176\u8bf7\u6c42\u3002"),(0,l.kt)("p",null,"\u6709\u5173 Basic Authentication \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u53ef\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/HTTP%E5%9F%BA%E6%9C%AC%E8%AE%A4%E8%AF%81"},"\u7ef4\u57fa\u767e\u79d1")," \u67e5\u770b\u66f4\u591a\u4fe1\u606f\u3002"),(0,l.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u540c\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"consumer")," \u5bf9\u8c61\u5e94\u6709\u4e0d\u540c\u7684\u503c\uff0c\u5b83\u5e94\u5f53\u662f\u552f\u4e00\u7684\u3002\u4e0d\u540c consumer \u4f7f\u7528\u4e86\u76f8\u540c\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"username")," \uff0c\u5c06\u4f1a\u51fa\u73b0\u8bf7\u6c42\u5339\u914d\u5f02\u5e38\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u7684\u5bc6\u7801")))),(0,l.kt)("h2",{id:"\u5982\u4f55\u542f\u7528"},"\u5982\u4f55\u542f\u7528"),(0,l.kt)("h3",{id:"1-\u521b\u5efa\u4e00\u4e2a-consumer-\u5bf9\u8c61\u5e76\u8bbe\u7f6e\u63d2\u4ef6-basic-auth-\u7684\u503c"},"1. \u521b\u5efa\u4e00\u4e2a consumer \u5bf9\u8c61\uff0c\u5e76\u8bbe\u7f6e\u63d2\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"h3"},"basic-auth")," \u7684\u503c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "foo",\n    "plugins": {\n        "basic-auth": {\n            "username": "foo",\n            "password": "bar"\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u6d4f\u89c8\u5668\u6253\u5f00 dashboard\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:9080/apisix/dashboard/"),"\uff0c\u901a\u8fc7 web \u754c\u9762\u6765\u5b8c\u6210\u4e0a\u9762\u7684\u64cd\u4f5c\uff0c\u5148\u589e\u52a0\u4e00\u4e2a consumer\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.7/docs/assets/images/plugin/basic-auth-1.png",alt:"auth-1"})),(0,l.kt)("p",null,"\u7136\u540e\u5728 consumer \u9875\u9762\u4e2d\u6dfb\u52a0 basic-auth \u63d2\u4ef6\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.7/docs/assets/images/plugin/basic-auth-2.png",alt:"auth-2"})),(0,l.kt)("h3",{id:"2-\u521b\u5efa-route-\u6216-service-\u5bf9\u8c61\u5e76\u5f00\u542f-basic-auth-\u63d2\u4ef6"},"2. \u521b\u5efa Route \u6216 Service \u5bf9\u8c61\uff0c\u5e76\u5f00\u542f ",(0,l.kt)("inlineCode",{parentName:"h3"},"basic-auth")," \u63d2\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/hello",\n    "plugins": {\n        "basic-auth": {}\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:8080": 1\n        }\n    }\n}\'\n')),(0,l.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7f3a\u5c11 Authorization header")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -i http://127.0.0.1:9080/hello\nHTTP/1.1 401 Unauthorized\n...\n{"message":"Missing authorization in request"}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7528\u6237\u540d\u4e0d\u5b58\u5728\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -i -ubar:bar http://127.0.0.1:9080/hello\nHTTP/1.1 401 Unauthorized\n...\n{"message":"Invalid user key in authorization"}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5bc6\u7801\u9519\u8bef\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -i -ufoo:foo http://127.0.0.1:9080/hello\nHTTP/1.1 401 Unauthorized\n...\n{"message":"Password is error"}\n...\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6210\u529f\u8bf7\u6c42\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -i -ufoo:bar http://127.0.0.1:9080/hello\nHTTP/1.1 200 OK\n...\nhello, foo!\n...\n")),(0,l.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5f53\u4f60\u60f3\u53bb\u6389 ",(0,l.kt)("inlineCode",{parentName:"p"},"basic-auth")," \u63d2\u4ef6\u7684\u65f6\u5019\uff0c\u5f88\u7b80\u5355\uff0c\u5728\u63d2\u4ef6\u7684\u914d\u7f6e\u4e2d\u628a\u5bf9\u5e94\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"json")," \u914d\u7f6e\u5220\u9664\u5373\u53ef\uff0c\u65e0\u987b\u91cd\u542f\u670d\u52a1\uff0c\u5373\u523b\u751f\u6548\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:8080": 1\n        }\n    }\n}\'\n')))}m.isMDXComponent=!0}}]);