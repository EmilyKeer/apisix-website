"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[81234],{35318:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var r=t(27378);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),h=o,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return t?r.createElement(m,a(a({ref:n},c),{},{components:t})):r.createElement(m,a({ref:n},c))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},37154:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=t(25773),o=t(30808),i=(t(27378),t(35318)),a=["components"],l={title:"Control API"},s=void 0,p={unversionedId:"control-api",id:"version-2.10/control-api",isDocsHomePage:!1,title:"Control API",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.10/control-api.md",sourceDirName:".",slug:"/control-api",permalink:"/docs/apisix/2.10/control-api",editUrl:null,tags:[],version:"2.10",frontMatter:{title:"Control API"},sidebar:"version-2.10/docs",previous:{title:"Admin API",permalink:"/docs/apisix/2.10/admin-api"},next:{title:"FAQ",permalink:"/docs/apisix/2.10/FAQ"}},c=[{value:"Control API Added via plugin",id:"control-api-added-via-plugin",children:[]},{value:"Plugin independent Control API",id:"plugin-independent-control-api",children:[{value:"GET /v1/schema",id:"get-v1schema",children:[]},{value:"GET /v1/healthcheck",id:"get-v1healthcheck",children:[]},{value:"POST /v1/gc",id:"post-v1gc",children:[]},{value:"Get /v1/routes",id:"get-v1routes",children:[]},{value:"Get /v1/route/{route_id}",id:"get-v1routeroute_id",children:[]}]}],u={toc:c};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The control API can be used to"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"expose APISIX internal state"),(0,i.kt)("li",{parentName:"ul"},"control the behavior of a single isolate APISIX data panel")),(0,i.kt)("p",null,"By default, the control API server is enabled and listens to ",(0,i.kt)("inlineCode",{parentName:"p"},"127.0.0.1:9090"),". You can change it via\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"control")," section under ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apisix:\n  ...\n  enable_control: true\n  control:\n    ip: "127.0.0.1"\n    port: 9090\n')),(0,i.kt)("p",null,"Note that the control API server should not be configured to listen to the public traffic!"),(0,i.kt)("h2",{id:"control-api-added-via-plugin"},"Control API Added via plugin"),(0,i.kt)("p",null,"Plugin can add its control API when it is enabled.\nSome plugins in APISIX have added their own control APIs. If you are interested in these APIs,\nplease refer to their documentation."),(0,i.kt)("h2",{id:"plugin-independent-control-api"},"Plugin independent Control API"),(0,i.kt)("p",null,"Here is the supported API:"),(0,i.kt)("h3",{id:"get-v1schema"},"GET /v1/schema"),(0,i.kt)("p",null,"Introduced since ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.2"),"."),(0,i.kt)("p",null,"Return the jsonschema used by this APISIX instance in the format below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "main": {\n        "route": {\n            "properties": {...}\n        },\n        "upstream": {\n            "properties": {...}\n        },\n        ...\n    },\n    "plugins": {\n        "example-plugin": {\n            "consumer_schema": {...},\n            "metadata_schema": {...},\n            "schema": {...},\n            "type": ...,\n            "priority": 0,\n            "version": 0.1\n        },\n        ...\n    },\n    "stream-plugins": {\n        "mqtt-proxy": {\n            ...\n        },\n        ...\n    }\n}\n')),(0,i.kt)("p",null,"For ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins")," part, only enabled plugins will be returned. Some plugins may lack\nof fields like ",(0,i.kt)("inlineCode",{parentName:"p"},"consumer_schema")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),", it is depended on by the plugin's\ndefinition."),(0,i.kt)("h3",{id:"get-v1healthcheck"},"GET /v1/healthcheck"),(0,i.kt)("p",null,"Introduced since ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.3"),"."),(0,i.kt)("p",null,"Return current ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/2.10/health-check"},"health check")," status in the format below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "healthy_nodes": [\n            {\n                "host": "127.0.0.1",\n                "port": 1980,\n                "priority": 0,\n                "weight": 1\n            }\n        ],\n        "name": "upstream#/upstreams/1",\n        "nodes": [\n            {\n                "host": "127.0.0.1",\n                "port": 1980,\n                "priority": 0,\n                "weight": 1\n            },\n            {\n                "host": "127.0.0.2",\n                "port": 1988,\n                "priority": 0,\n                "weight": 1\n            }\n        ],\n        "src_id": "1",\n        "src_type": "upstreams"\n    },\n    {\n        "healthy_nodes": [\n            {\n                "host": "127.0.0.1",\n                "port": 1980,\n                "priority": 0,\n                "weight": 1\n            }\n        ],\n        "name": "upstream#/routes/1",\n        "nodes": [\n            {\n                "host": "127.0.0.1",\n                "port": 1980,\n                "priority": 0,\n                "weight": 1\n            },\n            {\n                "host": "127.0.0.1",\n                "port": 1988,\n                "priority": 0,\n                "weight": 1\n            }\n        ],\n        "src_id": "1",\n        "src_type": "routes"\n    }\n]\n')),(0,i.kt)("p",null,"Each entry contains fields below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"src_type: where the health checker comes from. The value is one of ",(0,i.kt)("inlineCode",{parentName:"li"},'["routes", "services", "upstreams"]'),"."),(0,i.kt)("li",{parentName:"ul"},"src_id: the id of object which creates the health checker. For example, if Upstream\nobject with id 1 creates a health checker, the ",(0,i.kt)("inlineCode",{parentName:"li"},"src_type")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"upstreams")," and the ",(0,i.kt)("inlineCode",{parentName:"li"},"src_id")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,i.kt)("li",{parentName:"ul"},"name: the name of the health checker."),(0,i.kt)("li",{parentName:"ul"},"nodes: the target nodes of the health checker."),(0,i.kt)("li",{parentName:"ul"},"healthy_nodes: the healthy node known by the health checker.")),(0,i.kt)("p",null,"User can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/healthcheck/$src_type/$src_id")," can get the status of a health checker."),(0,i.kt)("p",null,"For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /v1/healthcheck/upstreams/1")," returns:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "healthy_nodes": [\n        {\n            "host": "127.0.0.1",\n            "port": 1980,\n            "priority": 0,\n            "weight": 1\n        }\n    ],\n    "name": "upstream#/upstreams/1",\n    "nodes": [\n        {\n            "host": "127.0.0.1",\n            "port": 1980,\n            "priority": 0,\n            "weight": 1\n        },\n        {\n            "host": "127.0.0.2",\n            "port": 1988,\n            "priority": 0,\n            "weight": 1\n        }\n    ],\n    "src_id": "1",\n    "src_type": "upstreams"\n}\n')),(0,i.kt)("h3",{id:"post-v1gc"},"POST /v1/gc"),(0,i.kt)("p",null,"Introduced since ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.8"),"."),(0,i.kt)("p",null,"Trigger a full GC in the http subsystem.\nNote that when you enable stream proxy, APISIX will run another Lua VM for the stream subsystem. It won't trigger a full GC in this Lua VM ."),(0,i.kt)("h3",{id:"get-v1routes"},"Get /v1/routes"),(0,i.kt)("p",null,"Introduced since ",(0,i.kt)("inlineCode",{parentName:"p"},"v3.0"),"."),(0,i.kt)("p",null,"Return all routes info in the format below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "update_count": 0,\n    "value": {\n      "priority": 0,\n      "uris": [\n        "/hello"\n      ],\n      "id": "1",\n      "upstream": {\n        "scheme": "http",\n        "pass_host": "pass",\n        "nodes": [\n          {\n            "port": 1980,\n            "host": "127.0.0.1",\n            "weight": 1\n          }\n        ],\n        "type": "roundrobin",\n        "hash_on": "vars"\n      },\n      "status": 1\n    },\n    "clean_handlers": {},\n    "has_domain": false,\n    "orig_modifiedIndex": 1631193445,\n    "modifiedIndex": 1631193445,\n    "key": "/routes/1"\n  }\n]\n')),(0,i.kt)("h3",{id:"get-v1routeroute_id"},"Get /v1/route/{route_id}"),(0,i.kt)("p",null,"Introduced since ",(0,i.kt)("inlineCode",{parentName:"p"},"v3.0"),"."),(0,i.kt)("p",null,"Return specific route info with ",(0,i.kt)("strong",{parentName:"p"},"route_id")," in the format below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "update_count": 0,\n  "value": {\n    "priority": 0,\n    "uris": [\n      "/hello"\n    ],\n    "id": "1",\n    "upstream": {\n      "scheme": "http",\n      "pass_host": "pass",\n      "nodes": [\n        {\n          "port": 1980,\n          "host": "127.0.0.1",\n          "weight": 1\n        }\n      ],\n      "type": "roundrobin",\n      "hash_on": "vars"\n    },\n    "status": 1\n  },\n  "clean_handlers": {},\n  "has_domain": false,\n  "orig_modifiedIndex": 1631193445,\n  "modifiedIndex": 1631193445,\n  "key": "/routes/1"\n}\n')))}d.isMDXComponent=!0}}]);