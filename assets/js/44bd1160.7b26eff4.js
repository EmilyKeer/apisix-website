"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[37596],{35318:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return c}});var a=t(27378);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(t),c=r,g=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return t?a.createElement(g,i(i({ref:n},s),{},{components:t})):a.createElement(g,i({ref:n},s))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},17263:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var a=t(25773),r=t(30808),l=(t(27378),t(35318)),i=["components"],o={title:"request-validation"},p=void 0,u={unversionedId:"plugins/request-validation",id:"version-2.9/plugins/request-validation",isDocsHomePage:!1,title:"request-validation",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.9/plugins/request-validation.md",sourceDirName:"plugins",slug:"/plugins/request-validation",permalink:"/docs/apisix/2.9/plugins/request-validation",editUrl:null,tags:[],version:"2.9",frontMatter:{title:"request-validation"},sidebar:"version-2.9/docs",previous:{title:"proxy-cache",permalink:"/docs/apisix/2.9/plugins/proxy-cache"},next:{title:"proxy-mirror",permalink:"/docs/apisix/2.9/plugins/proxy-mirror"}},s=[{value:"Summary",id:"summary",children:[]},{value:"Name",id:"name",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]},{value:"Examples:",id:"examples",children:[]}],m={toc:s};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"summary"},"Summary"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#name"},(0,l.kt)("strong",{parentName:"a"},"Name"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#attributes"},(0,l.kt)("strong",{parentName:"a"},"Attributes"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#how-to-enable"},(0,l.kt)("strong",{parentName:"a"},"How To Enable"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#test-plugin"},(0,l.kt)("strong",{parentName:"a"},"Test Plugin"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#disable-plugin"},(0,l.kt)("strong",{parentName:"a"},"Disable Plugin"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#examples"},(0,l.kt)("strong",{parentName:"a"},"Examples")))),(0,l.kt)("h2",{id:"name"},"Name"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"request-validation")," plugin validates the requests before forwarding to an upstream service. The validation plugin uses\njson-schema to validate the schema. The plugin can be used to validate the headers and body data."),(0,l.kt)("p",null,"For more information on schema, refer to ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/api7/jsonschema"},"JSON schema")," for more information."),(0,l.kt)("h2",{id:"attributes"},"Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Valid"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"header_schema"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"schema for the header data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"body_schema"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"schema for the body data")))),(0,l.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,l.kt)("p",null,"Create a route and enable the request-validation plugin on the route:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/5 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/get",\n    "plugins": {\n        "request-validation": {\n            "body_schema": {\n                "type": "object",\n                "required": ["required_payload"],\n                "properties": {\n                    "required_payload": {"type": "string"},\n                    "boolean_payload": {"type": "boolean"}\n                }\n            }\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:8080": 1\n        }\n    }\n}\'\n')),(0,l.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl --header "Content-Type: application/json" \\\n  --request POST \\\n  --data \'{"boolean-payload":true,"required_payload":"hello"}\' \\\n  http://127.0.0.1:9080/get\n')),(0,l.kt)("p",null,"If the schema is violated the plugin will yield a ",(0,l.kt)("inlineCode",{parentName:"p"},"400")," bad request."),(0,l.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,l.kt)("p",null,"Remove the corresponding json configuration in the plugin configuration to disable the ",(0,l.kt)("inlineCode",{parentName:"p"},"request-validation"),".\nAPISIX plugins are hot-reloaded, therefore no need to restart APISIX."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/5 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/get",\n    "plugins": {\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:8080": 1\n        }\n    }\n}\'\n')),(0,l.kt)("h2",{id:"examples"},"Examples:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Enum")," validate:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "body_schema": {\n        "type": "object",\n        "required": ["required_payload"],\n        "properties": {\n                "enum_payload": {\n                "type": "string",\n                "enum": ["enum_string_1", "enum_string_2"],\n                "default": "enum_string_1"\n            }\n        }\n    }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Boolean")," validate:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "body_schema": {\n        "type": "object",\n        "required": ["bool_payload"],\n        "properties": {\n            "bool_payload": {\n                "type": "boolean",\n                "default": true\n            }\n        }\n    }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Number")," or ",(0,l.kt)("inlineCode",{parentName:"strong"},"Integer")," validate:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "body_schema": {\n        "type": "object",\n        "required": ["integer_payload"],\n        "properties": {\n            "integer_payload": {\n                "type": "integer",\n                "minimum": 1,\n                "maximum": 65535\n            }\n        }\n    }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"String")," validate:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "body_schema": {\n        "type": "object",\n        "required": ["string_payload"],\n        "properties": {\n            "string_payload": {\n                "type": "string",\n                "minLength": 1,\n                "maxLength": 32\n            }\n        }\n    }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Regex")," validate:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "body_schema": {\n        "type": "object",\n        "required": ["regex_payload"],\n        "properties": {\n            "regex_payload": {\n                "type": "string",\n                "minLength": 1,\n                "maxLength": 32,\n                "pattern": "[[^[a-zA-Z0-9_]+$]]"\n            }\n        }\n    }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Array")," validate:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "body_schema": {\n        "type": "object",\n        "required": ["array_payload"],\n        "properties": {\n            "array_payload": {\n                "type": "array",\n                "minItems": 1,\n                "items": {\n                    "type": "integer",\n                    "minimum": 200,\n                    "maximum": 599\n                },\n                "uniqueItems": true,\n                "default": [200, 302]\n            }\n        }\n    }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Multi-field combination verification:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "body_schema": {\n        "type": "object",\n        "required": ["boolean_payload", "array_payload", "regex_payload"],\n        "properties": {\n            "boolean_payload": {\n                "type": "boolean"\n            },\n            "array_payload": {\n                "type": "array",\n                "minItems": 1,\n                "items": {\n                    "type": "integer",\n                    "minimum": 200,\n                    "maximum": 599\n                },\n                "uniqueItems": true,\n                "default": [200, 302]\n            },\n            "regex_payload": {\n                "type": "string",\n                "minLength": 1,\n                "maxLength": 32,\n                "pattern": "[[^[a-zA-Z0-9_]+$]]"\n            }\n        }\n    }\n}\n')))}d.isMDXComponent=!0}}]);