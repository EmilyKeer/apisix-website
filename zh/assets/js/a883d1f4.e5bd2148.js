"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[60671],{35318:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return s}});var a=n(27378);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),d=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(u.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=d(n),s=r,g=k["".concat(u,".").concat(s)]||k[s]||o[s]||l;return n?a.createElement(g,i(i({ref:e},m),{},{components:n})):a.createElement(g,i({ref:e},m))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},36474:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return m}});var a=n(25773),r=n(30808),l=(n(27378),n(35318)),i=["components"],p={title:"batch-requests"},u=void 0,d={unversionedId:"plugins/batch-requests",id:"version-2.13/plugins/batch-requests",isDocsHomePage:!1,title:"batch-requests",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.13/plugins/batch-requests.md",sourceDirName:"plugins",slug:"/plugins/batch-requests",permalink:"/zh/docs/apisix/plugins/batch-requests",editUrl:null,tags:[],version:"2.13",frontMatter:{title:"batch-requests"},sidebar:"version-2.13/docs",previous:{title:"\u5982\u4f55\u6784\u5efa Apache APISIX",permalink:"/zh/docs/apisix/how-to-build"},next:{title:"redirect",permalink:"/zh/docs/apisix/plugins/redirect"}},m=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u63a5\u53e3",id:"\u63a5\u53e3",children:[]},{value:"\u5982\u4f55\u542f\u7528",id:"\u5982\u4f55\u542f\u7528",children:[]},{value:"\u5982\u4f55\u914d\u7f6e",id:"\u5982\u4f55\u914d\u7f6e",children:[]},{value:"\u5143\u6570\u636e",id:"\u5143\u6570\u636e",children:[]},{value:"\u6279\u91cf\u63a5\u53e3\u8bf7\u6c42/\u54cd\u5e94",id:"\u6279\u91cf\u63a5\u53e3\u8bf7\u6c42\u54cd\u5e94",children:[{value:"\u63a5\u53e3\u8bf7\u6c42\u53c2\u6570:",id:"\u63a5\u53e3\u8bf7\u6c42\u53c2\u6570",children:[]},{value:"\u63a5\u53e3\u54cd\u5e94\u53c2\u6570\uff1a",id:"\u63a5\u53e3\u54cd\u5e94\u53c2\u6570",children:[]}]},{value:"\u5982\u4f55\u4fee\u6539\u81ea\u5b9a\u4e49 uri",id:"\u5982\u4f55\u4fee\u6539\u81ea\u5b9a\u4e49-uri",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],o={toc:m};function k(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"batch-requests")," \u63d2\u4ef6\u53ef\u4ee5\u4e00\u6b21\u63a5\u53d7\u591a\u4e2a\u8bf7\u6c42\u5e76\u4ee5 ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/HTTP_pipelining"},"http pipeline")," \u7684\u65b9\u5f0f\u5728\u7f51\u5173\u53d1\u8d77\u591a\u4e2a http \u8bf7\u6c42\uff0c\u5408\u5e76\u7ed3\u679c\u540e\u518d\u8fd4\u56de\u5ba2\u6237\u7aef\uff0c\u8fd9\u5728\u5ba2\u6237\u7aef\u9700\u8981\u8bbf\u95ee\u591a\u4e2a\u63a5\u53e3\u65f6\u53ef\u4ee5\u663e\u8457\u5730\u63d0\u5347\u8bf7\u6c42\u6027\u80fd\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u63d0\u793a")),(0,l.kt)("p",{parentName:"blockquote"},"\u5916\u5c42\u7684 Http \u8bf7\u6c42\u5934\u4f1a\u81ea\u52a8\u8bbe\u7f6e\u5230\u6bcf\u4e00\u4e2a\u72ec\u7acb\u8bf7\u6c42\u4e2d\uff0c\u5982\u679c\u72ec\u7acb\u8bf7\u6c42\u4e2d\u51fa\u73b0\u76f8\u540c\u952e\u503c\u7684\u8bf7\u6c42\u5934\uff0c\u90a3\u4e48\u53ea\u6709\u72ec\u7acb\u8bf7\u6c42\u7684\u8bf7\u6c42\u5934\u4f1a\u751f\u6548\u3002")),(0,l.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("p",null,"\u65e0"),(0,l.kt)("h2",{id:"\u63a5\u53e3"},"\u63a5\u53e3"),(0,l.kt)("p",null,"\u63d2\u4ef6\u4f1a\u589e\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"/apisix/batch-requests")," \u8fd9\u4e2a\u63a5\u53e3\uff0c\u9700\u8981\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/public-api"},"public-api")," \u63d2\u4ef6\u6765\u66b4\u9732\u5b83\u3002"),(0,l.kt)("h2",{id:"\u5982\u4f55\u542f\u7528"},"\u5982\u4f55\u542f\u7528"),(0,l.kt)("p",null,"\u4f60\u9700\u8981\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"config.yaml")," \u91cc\u9762\u542f\u7528 batch-requests \u63d2\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# \u52a0\u5230 config.yaml\nplugins:\n  - ... # plugin you need\n  - batch-requests\n")),(0,l.kt)("h2",{id:"\u5982\u4f55\u914d\u7f6e"},"\u5982\u4f55\u914d\u7f6e"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u672c\u63d2\u4ef6\u9650\u5236\u8bf7\u6c42\u4f53\u7684\u5927\u5c0f\u4e0d\u80fd\u5927\u4e8e 1 MiB\u3002\u8fd9\u4e2a\u9650\u5236\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"apisix/admin/plugin_metadata/batch-requests")," \u6765\u4fee\u6539\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/apisix/admin/plugin_metadata/batch-requests -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X PUT -d '\n{\n    \"max_body_size\": 4194304\n}'\n")),(0,l.kt)("h2",{id:"\u5143\u6570\u636e"},"\u5143\u6570\u636e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_body_size"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"1048576"),(0,l.kt)("td",{parentName:"tr",align:null},"> 0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u4f53\u7684\u6700\u5927\u5927\u5c0f\uff0c\u5355\u4f4d\u4e3a\u5b57\u8282\u3002")))),(0,l.kt)("h2",{id:"\u6279\u91cf\u63a5\u53e3\u8bf7\u6c42\u54cd\u5e94"},"\u6279\u91cf\u63a5\u53e3\u8bf7\u6c42/\u54cd\u5e94"),(0,l.kt)("p",null,"\u63d2\u4ef6\u4f1a\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"apisix")," \u521b\u5efa\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"/apisix/batch-requests")," \u7684\u63a5\u53e3\u6765\u5904\u7406\u4f60\u7684\u6279\u91cf\u8bf7\u6c42\u3002"),(0,l.kt)("h3",{id:"\u63a5\u53e3\u8bf7\u6c42\u53c2\u6570"},"\u63a5\u53e3\u8bf7\u6c42\u53c2\u6570:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53ef\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ed9\u6240\u6709\u8bf7\u6c42\u90fd\u643a\u5e26\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"query string"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"headers"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ed9\u6240\u6709\u8bf7\u6c42\u90fd\u643a\u5e26\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"header"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"30000"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u805a\u5408\u8bf7\u6c42\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"ms"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pipeline"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#httprequest"},"HttpRequest")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Http \u8bf7\u6c42\u7684\u8be6\u7ec6\u4fe1\u606f")))),(0,l.kt)("h4",{id:"httprequest"},"HttpRequest"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"version"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"1.1"),(0,l.kt)("td",{parentName:"tr",align:null},"[1.0, 1.1]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u7528\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"http")," \u534f\u8bae\u7248\u672c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"method"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},'["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS", "CONNECT", "TRACE"]'),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u4f7f\u7528\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"http")," \u65b9\u6cd5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u72ec\u7acb\u8bf7\u6c42\u6240\u643a\u5e26\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"query string"),", \u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"td"},"Key")," \u548c\u5168\u5c40\u7684\u6709\u51b2\u7a81\uff0c\u4ee5\u6b64\u8bbe\u7f6e\u4e3a\u4e3b\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"headers"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u72ec\u7acb\u8bf7\u6c42\u6240\u643a\u5e26\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"header"),", \u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"td"},"Key")," \u548c\u5168\u5c40\u7684\u6709\u51b2\u7a81\uff0c\u4ee5\u6b64\u8bbe\u7f6e\u4e3a\u4e3b\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u8def\u5f84")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u4f53")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ssl_verify"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u9a8c\u8bc1 SSL \u8bc1\u4e66\u4e0e\u4e3b\u673a\u540d\u662f\u5426\u5339\u914d")))),(0,l.kt)("h3",{id:"\u63a5\u53e3\u54cd\u5e94\u53c2\u6570"},"\u63a5\u53e3\u54cd\u5e94\u53c2\u6570\uff1a"),(0,l.kt)("p",null,"\u8fd4\u56de\u503c\u4e3a\u4e00\u4e2a ",(0,l.kt)("a",{parentName:"p",href:"#httpresponse"},"HttpResponse")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u6570\u7ec4"),"\u3002"),(0,l.kt)("h4",{id:"httpresponse"},"HttpResponse"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Http \u8bf7\u6c42\u7684\u72b6\u6001\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"reason"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Http \u8bf7\u6c42\u7684\u8fd4\u56de\u4fe1\u606f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Http \u8bf7\u6c42\u7684\u54cd\u5e94\u4f53")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"headers"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Http \u8bf7\u6c42\u7684\u54cd\u5e94\u5934")))),(0,l.kt)("h2",{id:"\u5982\u4f55\u4fee\u6539\u81ea\u5b9a\u4e49-uri"},"\u5982\u4f55\u4fee\u6539\u81ea\u5b9a\u4e49 uri"),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/public-api"},"public-api")," \u63d2\u4ef6\u8f7b\u6613\u7684\u8bbe\u7f6e\u81ea\u5b9a\u4e49 uri\u3002\u53ea\u9700\u8981\u5728\u521b\u5efa\u8def\u7531\u65f6\u8bbe\u7f6e\u9700\u8981\u7684 uri \u5e76\u6539\u53d8 ",(0,l.kt)("inlineCode",{parentName:"p"},"public-api")," \u63d2\u4ef6\u7684\u914d\u7f6e\u5373\u53ef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/br -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/batch-requests",\n    "plugins": {\n        "public-api": {\n            "uri": "/apisix/batch-requests"\n        }\n    }\n}\'\n')),(0,l.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u4f60\u9700\u8981\u4e3a batch request \u7684 API \u8bbe\u7f6e\u4e00\u4e2a\u8def\u7531\uff0c\u5b83\u5c06\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/public-api"},"public-api")," \u63d2\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/br -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/apisix/batch-requests",\n    "plugins": {\n        "public-api": {}\n    }\n}\'\n')),(0,l.kt)("p",null,"\u4e4b\u540e\uff0c\u4f60\u5c31\u53ef\u4ee5\u5c06\u8981\u8bbf\u95ee\u7684\u8bf7\u6c42\u4fe1\u606f\u4f20\u5230\u7f51\u5173\u7684\u6279\u91cf\u8bf7\u6c42\u63a5\u53e3( ",(0,l.kt)("inlineCode",{parentName:"p"},"/apisix/batch-requests")," )\u4e86\uff0c\u7f51\u5173\u4f1a\u4ee5 ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/HTTP_pipelining"},"http pipeline")," \u7684\u65b9\u5f0f\u81ea\u52a8\u5e2e\u4f60\u5b8c\u6210\u8bf7\u6c42\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://127.0.0.1:9080/apisix/batch-requests\' \\\n--header \'Content-Type: application/json\' \\\n--data \'{\n    "headers": {\n        "Content-Type": "application/json",\n        "admin-jwt":"xxxx"\n    },\n    "timeout": 500,\n    "pipeline": [\n        {\n            "method": "POST",\n            "path": "/community.GiftSrv/GetGifts",\n            "body": "test"\n        },\n        {\n            "method": "POST",\n            "path": "/community.GiftSrv/GetGifts",\n            "body": "test2"\n        }\n    ]\n}\'\n')),(0,l.kt)("p",null,"\u8fd4\u56de\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "status": 200,\n    "reason": "OK",\n    "body": "{\\"ret\\":500,\\"msg\\":\\"error\\",\\"game_info\\":null,\\"gift\\":[],\\"to_gets\\":0,\\"get_all_msg\\":\\"\\"}",\n    "headers": {\n      "Connection": "keep-alive",\n      "Date": "Sat, 11 Apr 2020 17:53:20 GMT",\n      "Content-Type": "application/json",\n      "Content-Length": "81",\n      "Server": "APISIX web server"\n    }\n  },\n  {\n    "status": 200,\n    "reason": "OK",\n    "body": "{\\"ret\\":500,\\"msg\\":\\"error\\",\\"game_info\\":null,\\"gift\\":[],\\"to_gets\\":0,\\"get_all_msg\\":\\"\\"}",\n    "headers": {\n      "Connection": "keep-alive",\n      "Date": "Sat, 11 Apr 2020 17:53:20 GMT",\n      "Content-Type": "application/json",\n      "Content-Length": "81",\n      "Server": "APISIX web server"\n    }\n  }\n]\n')),(0,l.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u6b63\u5e38\u60c5\u51b5\u4e0d\u9700\u8981\u7981\u7528\u672c\u63d2\u4ef6\uff0c\u5982\u6709\u9700\u8981\uff0c\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"/conf/config.yaml")," \u4e2d\u65b0\u5efa\u4e00\u4e2a\u6240\u9700\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"plugins")," \u5217\u8868\uff0c\u4ee5\u8986\u76d6\u539f\u5217\u8868\u3002"))}k.isMDXComponent=!0}}]);