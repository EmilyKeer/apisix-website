"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[66784],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87587:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=n(25773),o=n(30808),i=(n(27378),n(35318)),a=["components"],l={title:"gRPC Proxy"},p=void 0,s={unversionedId:"grpc-proxy",id:"version-2.6/grpc-proxy",isDocsHomePage:!1,title:"gRPC Proxy",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.6/grpc-proxy.md",sourceDirName:".",slug:"/grpc-proxy",permalink:"/docs/apisix/2.6/grpc-proxy",editUrl:null,tags:[],version:"2.6",frontMatter:{title:"gRPC Proxy"},sidebar:"version-2.6/docs",previous:{title:"Stream Proxy",permalink:"/docs/apisix/2.6/stream-proxy"},next:{title:"Customize Nginx configuration",permalink:"/docs/apisix/2.6/customize-nginx-configuration"}},c=[{value:"Parameters",id:"parameters",children:[{value:"Example",id:"example",children:[]},{value:"gRPCS",id:"grpcs",children:[]}]}],u={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"proxying gRPC traffic:\ngRPC client -> APISIX -> gRPC/gRPCS server"),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"scheme"),": the ",(0,i.kt)("inlineCode",{parentName:"li"},"scheme")," of the route's upstream must be ",(0,i.kt)("inlineCode",{parentName:"li"},"grpc")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"grpcs"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uri"),": format likes /service/method, Example\uff1a/helloworld.Greeter/SayHello")),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("h4",{id:"create-proxying-grpc-route"},"create proxying gRPC route"),(0,i.kt)("p",null,"Here's an example, to proxying gRPC service by specified route:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"attention: the ",(0,i.kt)("inlineCode",{parentName:"li"},"scheme")," of the route's upstream must be ",(0,i.kt)("inlineCode",{parentName:"li"},"grpc")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"grpcs"),"."),(0,i.kt)("li",{parentName:"ul"},"attention: APISIX use TLS\u2011encrypted HTTP/2 to expose gRPC service, so need to ",(0,i.kt)("a",{parentName:"li",href:"https.md"},"config SSL certificate")),(0,i.kt)("li",{parentName:"ul"},"attention: APISIX also support to expose gRPC service with plaintext HTTP/2, which does not rely on TLS, usually used to proxy gRPC service in intranet environment"),(0,i.kt)("li",{parentName:"ul"},"the grpc server example\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://github.com/iresty/grpc_server_example"},"grpc_server_example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["POST", "GET"],\n    "uri": "/helloworld.Greeter/SayHello",\n    "upstream": {\n        "scheme": "grpc",\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:50051": 1\n        }\n    }\n}\'\n')),(0,i.kt)("h4",{id:"testing-http2-with-tlsencrypted"},"testing HTTP/2 with TLS\u2011encrypted"),(0,i.kt)("p",null,"Invoking the route created before\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ grpcurl -insecure -import-path /pathtoprotos  -proto helloworld.proto  -d \'{"name":"apisix"}\' 127.0.0.1:9443 helloworld.Greeter.SayHello\n{\n  "message": "Hello apisix"\n}\n')),(0,i.kt)("p",null,"This means that the proxying is working."),(0,i.kt)("h4",{id:"testing-http2-with-plaintext"},"testing HTTP/2 with plaintext"),(0,i.kt)("p",null,"By default, the APISIX only listens to ",(0,i.kt)("inlineCode",{parentName:"p"},"9443")," for TLS\u2011encrypted HTTP/2. You can support HTTP/2 with plaintext via the ",(0,i.kt)("inlineCode",{parentName:"p"},"node_listen")," section under ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apisix:\n    node_listen:\n        - port: 9080\n          enable_http2: false\n        - port: 9081\n          enable_http2: true\n")),(0,i.kt)("p",null,"Invoking the route created before\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ grpcurl -plaintext -import-path /pathtoprotos  -proto helloworld.proto  -d \'{"name":"apisix"}\' 127.0.0.1:9081 helloworld.Greeter.SayHello\n{\n  "message": "Hello apisix"\n}\n')),(0,i.kt)("p",null,"This means that the proxying is working."),(0,i.kt)("h3",{id:"grpcs"},"gRPCS"),(0,i.kt)("p",null,"If your gRPC service encrypts with TLS by itself (so called ",(0,i.kt)("inlineCode",{parentName:"p"},"gPRCS"),", gPRC + TLS), you need to change the ",(0,i.kt)("inlineCode",{parentName:"p"},"scheme")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"grpcs"),". The example above runs gRPCS service on port 50052, to proxy gRPC request, we need to use the configuration below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["POST", "GET"],\n    "uri": "/helloworld.Greeter/SayHello",\n    "upstream": {\n        "scheme": "grpcs",\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:50052": 1\n        }\n    }\n}\'\n')))}m.isMDXComponent=!0}}]);