"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[23541],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||l[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82517:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(25773),a=n(30808),i=(n(27378),n(35318)),o=["components"],s={title:"Route"},c=void 0,u={unversionedId:"architecture-design/route",id:"architecture-design/route",isDocsHomePage:!1,title:"Route",description:"\x3c!--",source:"@site/docs/apisix/architecture-design/route.md",sourceDirName:"architecture-design",slug:"/architecture-design/route",permalink:"/docs/apisix/next/architecture-design/route",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/architecture-design/route.md",tags:[],version:"current",frontMatter:{title:"Route"}},p=[],l={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Routes match the client's request based on defined rules, loads and executes the corresponding ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/next/architecture-design/plugin"},"plugins"),", and forwards the request to the specified ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/next/architecture-design/upstream"},"Upstream"),"."),(0,i.kt)("p",null,"A Route mainly consists of three parts:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Matching rules (uri, host, remote address)"),(0,i.kt)("li",{parentName:"ol"},"Plugin configuration (current-limit, rate-limit)"),(0,i.kt)("li",{parentName:"ol"},"Upstream information")),(0,i.kt)("p",null,"The image below shows some example Route rules. Note that the values are of the same color if they are identical."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.13/docs/assets/images/routes-example.png",alt:"routes-example"})),(0,i.kt)("p",null,"All the parameters are configured directly in the Route. It is easy to set up, and each Route has a high degree of freedom."),(0,i.kt)("p",null,"When Routes have repetitive configurations (say, enabling the same plugin configuration or Upstream information), to update it, we need to traverse all the Routes and modify them. This adds a lot of complexity, making it difficult to maintain."),(0,i.kt)("p",null,"These shortcomings are independently abstracted in APISIX by two concepts: ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/next/architecture-design/service"},"Service")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/next/architecture-design/upstream"},"Upstream"),"."),(0,i.kt)("p",null,"The Route example shown below proxies the request with the URL ",(0,i.kt)("inlineCode",{parentName:"p"},"/index.html")," to the Upstream service with the address ",(0,i.kt)("inlineCode",{parentName:"p"},"127.0.0.1:1980"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 201 Created\nDate: Sat, 31 Aug 2019 01:17:15 GMT\nContent-Type: text/plain\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX web server\n\n{"node":{"value":{"uri":"\\/index.html","upstream":{"nodes":{"127.0.0.1:1980":1},"type":"roundrobin"}},"createdIndex":61925,"key":"\\/apisix\\/routes\\/1","modifiedIndex":61925},"action":"create"}\n')),(0,i.kt)("p",null,"A successful response indicates that the route was created."),(0,i.kt)("p",null,"For specific options of Route, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/next/admin-api#route"},"Admin API"),"."))}d.isMDXComponent=!0}}]);