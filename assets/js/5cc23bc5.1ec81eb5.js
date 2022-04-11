"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[36700],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),h=r,c=d["".concat(o,".").concat(h)]||d[h]||m[h]||i;return n?a.createElement(c,l(l({ref:t},u),{},{components:n})):a.createElement(c,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32917:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var a=n(25773),r=n(30808),i=(n(27378),n(35318)),l=["components"],p={title:"traffic-split"},o=void 0,s={unversionedId:"plugins/traffic-split",id:"version-2.5/plugins/traffic-split",isDocsHomePage:!1,title:"traffic-split",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.5/plugins/traffic-split.md",sourceDirName:"plugins",slug:"/plugins/traffic-split",permalink:"/docs/apisix/2.5/plugins/traffic-split",editUrl:null,tags:[],version:"2.5",frontMatter:{title:"traffic-split"},sidebar:"version-2.5/docs",previous:{title:"api-breaker",permalink:"/docs/apisix/2.5/plugins/api-breaker"},next:{title:"request-id",permalink:"/docs/apisix/2.5/plugins/request-id"}},u=[{value:"Summary",id:"summary",children:[]},{value:"Name",id:"name",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Example",id:"example",children:[{value:"Grayscale Release",id:"grayscale-release",children:[]},{value:"Blue-green Release",id:"blue-green-release",children:[]},{value:"Custom Release",id:"custom-release",children:[]}]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#name"},"Name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#attributes"},"Attributes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-to-enable"},"How To Enable")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#example"},"Example"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#grayscale-release"},"Grayscale Release")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#blue-green-release"},"Blue-green Release")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#custom-release"},"Custom Release")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#disable-plugin"},"Disable Plugin"))),(0,i.kt)("h2",{id:"name"},"Name"),(0,i.kt)("p",null,"The traffic split plugin allows users to incrementally direct percentages of traffic between various upstreams."),(0,i.kt)("p",null,"Note: The ratio between each upstream may not so accurate since the drawback of weighted round robin algorithm (especially when the wrr state is reset)."),(0,i.kt)("h2",{id:"attributes"},"Attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Valid"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"rules.match"),(0,i.kt)("td",{parentName:"tr",align:null},"array","[object]"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"List of matching rules.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"rules.match.vars"),(0,i.kt)("td",{parentName:"tr",align:null},"array","[array]"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},'A list consisting of one or more {var, operator, val} elements, like this: {{var, operator, val}, {var, operator, val}, ...}}. For example: {"arg_name", "==", "json"}, which means that the current request parameter name is json. The var here is consistent with the naming of Nginx internal variables, so request_uri, host, etc. can also be used; for the operator part, the currently supported operators are ==, ~=, ~~, >, <, in, has and !. For specific usage of operators, please see the ',(0,i.kt)("inlineCode",{parentName:"td"},"operator-list")," part of ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/api7/lua-resty-expr#operator-list"},"lua-resty-expr"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"rules.weighted_upstreams"),(0,i.kt)("td",{parentName:"tr",align:null},"array","[object]"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"List of upstream configuration rules.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"weighted_upstreams.upstream_id"),(0,i.kt)("td",{parentName:"tr",align:null},"string/integer"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The upstream id is bound to the corresponding upstream.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"weighted_upstreams.upstream"),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Upstream configuration information.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"upstream.type"),(0,i.kt)("td",{parentName:"tr",align:null},"enum"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"roundrobin"),(0,i.kt)("td",{parentName:"tr",align:null},"[roundrobin, chash]"),(0,i.kt)("td",{parentName:"tr",align:null},"roundrobin supports weighted load, chash consistent hashing, the two are alternatives.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"upstream.hash_on"),(0,i.kt)("td",{parentName:"tr",align:null},"enum"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"vars"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"This option is only valid if the ",(0,i.kt)("inlineCode",{parentName:"td"},"type")," is ",(0,i.kt)("inlineCode",{parentName:"td"},"chash"),". Supported types ",(0,i.kt)("inlineCode",{parentName:"td"},"vars"),"(Nginx variables), ",(0,i.kt)("inlineCode",{parentName:"td"},"header"),"(custom header), ",(0,i.kt)("inlineCode",{parentName:"td"},"cookie"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"consumer"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"vars_combinations"),", the default value is ",(0,i.kt)("inlineCode",{parentName:"td"},"vars"),". For more details, please refer to ",(0,i.kt)("a",{parentName:"td",href:"/docs/apisix/2.5/admin-api#upstream"},"upstream")," usage.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"upstream.key"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"This option is only valid if the ",(0,i.kt)("inlineCode",{parentName:"td"},"type")," is ",(0,i.kt)("inlineCode",{parentName:"td"},"chash"),". Find the corresponding node ",(0,i.kt)("inlineCode",{parentName:"td"},"id")," according to ",(0,i.kt)("inlineCode",{parentName:"td"},"hash_on")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"key"),". For more details, please refer to ",(0,i.kt)("a",{parentName:"td",href:"/docs/apisix/2.5/admin-api#upstream"},"upstream")," usage.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"upstream.nodes"),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"In the hash table, the key of the internal element is the list of upstream machine addresses, in the format of address + Port, where the address part can be an IP or a domain name, such as 192.168.1.100:80, foo.com:80, etc. value is the weight of the node. In particular, when the weight value is 0, it has special meaning, which usually means that the upstream node is invalid and never wants to be selected.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"upstream.timeout"),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"15"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Set the timeout period for connecting, sending and receiving messages (time unit: second, all default to 15 seconds).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"upstream.pass_host"),(0,i.kt)("td",{parentName:"tr",align:null},"enum"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},'"pass"'),(0,i.kt)("td",{parentName:"tr",align:null},'["pass", "node", "rewrite"]'),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pass"),": Pass the client's host transparently to the upstream; ",(0,i.kt)("inlineCode",{parentName:"td"},"node"),": Use the host configured in the node of ",(0,i.kt)("inlineCode",{parentName:"td"},"upstream"),"; ",(0,i.kt)("inlineCode",{parentName:"td"},"rewrite"),": Use the value of the configuration ",(0,i.kt)("inlineCode",{parentName:"td"},"upstream_host"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"upstream.name"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Identify the upstream service name, usage scenario, etc.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"upstream.upstream_host"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Only valid when pass_host is configured as rewrite.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"weighted_upstreams.weight"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"weight = 1"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The traffic is divided according to the ",(0,i.kt)("inlineCode",{parentName:"td"},"weight")," value, and the roundrobin algorithm is used to divide multiple ",(0,i.kt)("inlineCode",{parentName:"td"},"weight"),".")))),(0,i.kt)("p",null,"Currently, in the configuration of ",(0,i.kt)("inlineCode",{parentName:"p"},"weighted_upstreams.upstream"),", the unsupported fields are:\nservice_name, discovery_type, checks, retries, desc, scheme, labels, create_time and update_time. But you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"weighted_upstreams.upstream_id")," to bind the ",(0,i.kt)("inlineCode",{parentName:"p"},"upstream")," object to achieve their functions."),(0,i.kt)("p",null,"The traffic-split plugin is mainly composed of two parts: ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"weighted_upstreams"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," is a custom conditional rule, and ",(0,i.kt)("inlineCode",{parentName:"p"},"weighted_upstreams")," is upstream configuration information. If you configure ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"weighted_upstreams")," information, then after the ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," rule is verified, it will be based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"weight")," value in ",(0,i.kt)("inlineCode",{parentName:"p"},"weighted_upstreams"),"; the ratio of traffic between each upstream in the plugin will be guided, otherwise, all traffic will be directly Reach the ",(0,i.kt)("inlineCode",{parentName:"p"},"upstream")," configured on ",(0,i.kt)("inlineCode",{parentName:"p"},"route")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"service"),". Of course, you can also configure only the ",(0,i.kt)("inlineCode",{parentName:"p"},"weighted_upstreams")," part, which will directly guide the traffic ratio between each upstream in the plugin based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"weight")," value in ",(0,i.kt)("inlineCode",{parentName:"p"},"weighted_upstreams"),"."),(0,i.kt)("p",null,"Note: 1. In ",(0,i.kt)("inlineCode",{parentName:"p"},"match"),", the expression in vars is the relationship of ",(0,i.kt)("inlineCode",{parentName:"p"},"and"),", and the relationship between multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"vars")," is the relationship of ",(0,i.kt)("inlineCode",{parentName:"p"},"or"),".  2. In the weighted_upstreams field of the plugin, if there is a structure with only ",(0,i.kt)("inlineCode",{parentName:"p"},"weight"),", it means the upstream traffic weight value on ",(0,i.kt)("inlineCode",{parentName:"p"},"route")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"service"),". Such as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"weighted_upstreams": [\n    ......\n    {\n        "weight": 2\n    }\n]\n')),(0,i.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,i.kt)("p",null,"Create a route and enable the ",(0,i.kt)("inlineCode",{parentName:"p"},"traffic-split")," plugin. When configuring the upstream information of the plugin, there are two ways:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Configure upstream information through the ",(0,i.kt)("inlineCode",{parentName:"li"},"upstream")," attribute in the plugin.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "traffic-split": {\n            "rules": [\n                {\n                    "weighted_upstreams": [\n                        {\n                            "upstream": {\n                                "name": "upstream_A",\n                                "type": "roundrobin",\n                                "nodes": {\n                                    "127.0.0.1:1981":10\n                                },\n                                "timeout": {\n                                    "connect": 15,\n                                    "send": 15,\n                                    "read": 15\n                                }\n                            },\n                            "weight": 1\n                        },\n                        {\n                            "weight": 1\n                        }\n                    ]\n                }\n            ]\n        }\n    },\n    "upstream": {\n            "type": "roundrobin",\n            "nodes": {\n                "127.0.0.1:1980": 1\n            }\n    }\n}\'\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Use the ",(0,i.kt)("inlineCode",{parentName:"li"},"upstream_id")," attribute in the plugin to bind upstream.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "traffic-split": {\n            "rules": [\n                {\n                    "weighted_upstreams": [\n                        {\n                            "upstream_id": 1,\n                            "weight": 1\n                        },\n                        {\n                            "weight": 1\n                        }\n                    ]\n                }\n            ]\n        }\n    },\n    "upstream": {\n            "type": "roundrobin",\n            "nodes": {\n                "127.0.0.1:1980": 1\n            }\n    }\n}\'\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: ",(0,i.kt)("strong",{parentName:"p"},"1.")," Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"upstream_id")," to bind the defined upstream, it can reuse upstream health detection, retry and other functions. ",(0,i.kt)("strong",{parentName:"p"},"2.")," Support the two configuration methods of ",(0,i.kt)("inlineCode",{parentName:"p"},"upstream")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"upstream_id")," to be used together.")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("h3",{id:"grayscale-release"},"Grayscale Release"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," rule part is missing, and the traffic is split according to the ",(0,i.kt)("inlineCode",{parentName:"p"},"weight")," value configured by the ",(0,i.kt)("inlineCode",{parentName:"p"},"weighted_upstreams")," in the plugin. Divide ",(0,i.kt)("inlineCode",{parentName:"p"},"plugin's upstream")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"route's upstream")," according to the traffic ratio of 3:2, of which 60% of the traffic reaches the upstream of the ",(0,i.kt)("inlineCode",{parentName:"p"},"1981")," port in the plugin, and 40% of the traffic reaches the default ",(0,i.kt)("inlineCode",{parentName:"p"},"1980")," port on the route Upstream."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "traffic-split": {\n            "rules": [\n                {\n                    "weighted_upstreams": [\n                        {\n                            "upstream": {\n                                "name": "upstream_A",\n                                "type": "roundrobin",\n                                "nodes": {\n                                    "127.0.0.1:1981":10\n                                },\n                                "timeout": {\n                                    "connect": 15,\n                                    "send": 15,\n                                    "read": 15\n                                }\n                            },\n                            "weight": 3\n                        },\n                        {\n                            "weight": 2\n                        }\n                    ]\n                }\n            ]\n        }\n    },\n    "upstream": {\n            "type": "roundrobin",\n            "nodes": {\n                "127.0.0.1:1980": 1\n            }\n    }\n}\'\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Test plugin:")),(0,i.kt)("p",null,"There are 5 requests, 3 requests hit the upstream of port 1981 of the plugin, and 2 requests hit the upstream of port 1980 of ",(0,i.kt)("inlineCode",{parentName:"p"},"route"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/index.html -i\nHTTP/1.1 200 OK\nContent-Type: text/html; charset=utf-8\n\nhello 1980\n\n$ curl http://127.0.0.1:9080/index.html -i\nHTTP/1.1 200 OK\nContent-Type: text/html; charset=utf-8\n\nworld 1981\n\n......\n")),(0,i.kt)("h3",{id:"blue-green-release"},"Blue-green Release"),(0,i.kt)("p",null,"Get the ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," rule parameter through the request header (you can also get it through the request parameter or NGINX variable). After the ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," rule is matched, it means that all requests hit the upstream configured by the plugin, otherwise the request only hits the ",(0,i.kt)("inlineCode",{parentName:"p"},"route")," configured upstream."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "traffic-split": {\n            "rules": [\n                {\n                    "match": [\n                        {\n                            "vars": [\n                                ["http_release","==","new_release"]\n                            ]\n                        }\n                    ],\n                    "weighted_upstreams": [\n                        {\n                            "upstream": {\n                                "name": "upstream_A",\n                                "type": "roundrobin",\n                                "nodes": {\n                                    "127.0.0.1:1981":10\n                                }\n                            }\n                        }\n                    ]\n                }\n            ]\n        }\n    },\n    "upstream": {\n            "type": "roundrobin",\n            "nodes": {\n                "127.0.0.1:1980": 1\n            }\n    }\n}\'\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Test plugin:")),(0,i.kt)("p",null,"The rule of ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," is matched, and all requests hit the upstream port 1981 configured by the plugin:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/index.html -H 'release: new_release' -i\nHTTP/1.1 200 OK\nContent-Type: text/html; charset=utf-8\n......\n\nworld 1981\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," rule fails to match, and all requests hit the 1980 port upstream configured on the ",(0,i.kt)("inlineCode",{parentName:"p"},"route"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/index.html -H 'release: old_release' -i\nHTTP/1.1 200 OK\nContent-Type: text/html; charset=utf-8\n......\n\nhello 1980\n")),(0,i.kt)("h3",{id:"custom-release"},"Custom Release"),(0,i.kt)("p",null,"Multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"vars")," rules can be set in ",(0,i.kt)("inlineCode",{parentName:"p"},"match"),". Multiple expressions in ",(0,i.kt)("inlineCode",{parentName:"p"},"vars")," have an ",(0,i.kt)("inlineCode",{parentName:"p"},"add")," relationship, and multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"vars")," rules have an ",(0,i.kt)("inlineCode",{parentName:"p"},"or")," relationship; as long as one of the vars is required If the rule passes, the entire ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," passes."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1: Only one ",(0,i.kt)("inlineCode",{parentName:"strong"},"vars")," rule is configured, and multiple expressions in ",(0,i.kt)("inlineCode",{parentName:"strong"},"vars")," are in the relationship of ",(0,i.kt)("inlineCode",{parentName:"strong"},"add"),". In ",(0,i.kt)("inlineCode",{parentName:"strong"},"weighted_upstreams"),", the traffic is divided into 3:2 according to the value of ",(0,i.kt)("inlineCode",{parentName:"strong"},"weight"),", of which only the part of the ",(0,i.kt)("inlineCode",{parentName:"strong"},"weight")," value represents the proportion of upstream on the ",(0,i.kt)("inlineCode",{parentName:"strong"},"route"),". When ",(0,i.kt)("inlineCode",{parentName:"strong"},"match")," fails to pass, all traffic will only hit the upstream on the route.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "traffic-split": {\n            "rules": [\n                {\n                    "match": [\n                        {\n                            "vars": [\n                                ["arg_name","==","jack"],\n                                ["http_user-id",">","23"],\n                                ["http_apisix-key","~~","[a-z]+"]\n                            ]\n                        }\n                    ],\n                    "weighted_upstreams": [\n                        {\n                            "upstream": {\n                                "name": "upstream_A",\n                                "type": "roundrobin",\n                                "nodes": {\n                                    "127.0.0.1:1981":10\n                                }\n                            },\n                            "weight": 3\n                        },\n                        {\n                            "weight": 2\n                        }\n                    ]\n                }\n            ]\n        }\n    },\n    "upstream": {\n            "type": "roundrobin",\n            "nodes": {\n                "127.0.0.1:1980": 1\n            }\n    }\n}\'\n')),(0,i.kt)("p",null,"The plugin sets the requested ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," rule and upstream with port ",(0,i.kt)("inlineCode",{parentName:"p"},"1981"),", and the route has upstream with port ",(0,i.kt)("inlineCode",{parentName:"p"},"1980"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Test plugin:")),(0,i.kt)("blockquote",null,(0,i.kt)("ol",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ol"},"After the verification of the ",(0,i.kt)("inlineCode",{parentName:"li"},"match")," rule is passed, 60% of the requests hit the upstream of the plugin port 1981, and 40% of the requests hit the upstream of the 1980 port of the ",(0,i.kt)("inlineCode",{parentName:"li"},"route"),"."))),(0,i.kt)("p",null,"The match rule is successfully verified, and the upstream port of ",(0,i.kt)("inlineCode",{parentName:"p"},"1981")," is hit."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl 'http://127.0.0.1:9080/index.html?name=jack' -H 'user-id:30' -H 'apisix-key: hello' -i\nHTTP/1.1 200 OK\nContent-Type: text/html; charset=utf-8\n......\n\nworld 1981\n")),(0,i.kt)("p",null,"The match rule fails to verify, and it hits the upstream of the default port of ",(0,i.kt)("inlineCode",{parentName:"p"},"1980"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl 'http://127.0.0.1:9080/index.html?name=jack' -H 'user-id:30' -H 'apisix-key: hello' -i\nHTTP/1.1 200 OK\nContent-Type: text/html; charset=utf-8\n......\n\nhello 1980\n")),(0,i.kt)("p",null,"After 5 requests, the service of port ",(0,i.kt)("inlineCode",{parentName:"p"},"1981")," was hit 3 times, and the service of port ",(0,i.kt)("inlineCode",{parentName:"p"},"1980")," was hit 2 times."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2: Configure multiple ",(0,i.kt)("inlineCode",{parentName:"strong"},"vars")," rules. Multiple expressions in ",(0,i.kt)("inlineCode",{parentName:"strong"},"vars")," are ",(0,i.kt)("inlineCode",{parentName:"strong"},"add")," relationships, and multiple ",(0,i.kt)("inlineCode",{parentName:"strong"},"vars")," are ",(0,i.kt)("inlineCode",{parentName:"strong"},"or")," relationships. According to the ",(0,i.kt)("inlineCode",{parentName:"strong"},"weight")," value in ",(0,i.kt)("inlineCode",{parentName:"strong"},"weighted_upstreams"),", the traffic is divided into 3:2, where only the part of the ",(0,i.kt)("inlineCode",{parentName:"strong"},"weight")," value represents the proportion of upstream on the route. When ",(0,i.kt)("inlineCode",{parentName:"strong"},"match")," fails to pass, all traffic will only hit the upstream on the route.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "traffic-split": {\n            "rules": [\n                {\n                    "match": [\n                        {\n                            "vars": [\n                                ["arg_name","==","jack"],\n                                ["http_user-id",">","23"],\n                                ["http_apisix-key","~~","[a-z]+"]\n                            ]\n                        },\n                        {\n                            "vars": [\n                                ["arg_name2","==","rose"],\n                                ["http_user-id2","!",">","33"],\n                                ["http_apisix-key2","~~","[a-z]+"]\n                            ]\n                        }\n                    ],\n                    "weighted_upstreams": [\n                        {\n                            "upstream": {\n                                "name": "upstream_A",\n                                "type": "roundrobin",\n                                "nodes": {\n                                    "127.0.0.1:1981":10\n                                }\n                            },\n                            "weight": 3\n                        },\n                        {\n                            "weight": 2\n                        }\n                    ]\n                }\n            ]\n        }\n    },\n    "upstream": {\n            "type": "roundrobin",\n            "nodes": {\n                "127.0.0.1:1980": 1\n            }\n    }\n}\'\n')),(0,i.kt)("p",null,"The plugin sets the requested ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," rule and the upstream port of ",(0,i.kt)("inlineCode",{parentName:"p"},"1981"),", and the route has upstream port of ",(0,i.kt)("inlineCode",{parentName:"p"},"1980"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Test plugin:")),(0,i.kt)("blockquote",null,(0,i.kt)("ol",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ol"},"The expressions of the two ",(0,i.kt)("inlineCode",{parentName:"li"},"vars")," are matched successfully. After the ",(0,i.kt)("inlineCode",{parentName:"li"},"match")," rule is verified, 60% of the requests hit the 1981 port upstream of the plugin, and 40% of the requests hit the 1980 port upstream of the ",(0,i.kt)("inlineCode",{parentName:"li"},"route"),"."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl 'http://127.0.0.1:9080/index.html?name=jack&name2=rose' -H 'user-id:30' -H 'user-id2:22' -H 'apisix-key: hello' -H 'apisix-key2: world' -i\nHTTP/1.1 200 OK\nContent-Type: text/html; charset=utf-8\n......\n\nworld 1981\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl 'http://127.0.0.1:9080/index.html?name=jack&name2=rose' -H 'user-id:30' -H 'user-id2:22' -H 'apisix-key: hello' -H 'apisix-key2: world' -i\nHTTP/1.1 200 OK\nContent-Type: text/html; charset=utf-8\n......\n\nhello 1980\n")),(0,i.kt)("p",null,"After 5 requests, the service of port ",(0,i.kt)("inlineCode",{parentName:"p"},"1981")," was hit 3 times, and the service of port ",(0,i.kt)("inlineCode",{parentName:"p"},"1980")," was hit 2 times."),(0,i.kt)("blockquote",null,(0,i.kt)("ol",{parentName:"blockquote",start:2},(0,i.kt)("li",{parentName:"ol"},"The second expression of ",(0,i.kt)("inlineCode",{parentName:"li"},"vars")," failed to match (missing the ",(0,i.kt)("inlineCode",{parentName:"li"},"name2")," request parameter). After the ",(0,i.kt)("inlineCode",{parentName:"li"},"match")," rule was verified, 60% of the requests hit the plugin's 1981 port upstream, and 40% of the request traffic hits Go upstream to the 1980 port of ",(0,i.kt)("inlineCode",{parentName:"li"},"route"),"."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl 'http://127.0.0.1:9080/index.html?name=jack' -H 'user-id:30' -H 'user-id2:22' -H 'apisix-key: hello' -H 'apisix-key2: world' -i\nHTTP/1.1 200 OK\nContent-Type: text/html; charset=utf-8\n......\n\nworld 1981\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl 'http://127.0.0.1:9080/index.html?name=jack' -H 'user-id:30' -H 'user-id2:22' -H 'apisix-key: hello' -H 'apisix-key2: world' -i\nHTTP/1.1 200 OK\nContent-Type: text/html; charset=utf-8\n......\n\nhello 1980\n")),(0,i.kt)("p",null,"After 5 requests, the service of port ",(0,i.kt)("inlineCode",{parentName:"p"},"1981")," was hit 3 times, and the service of port ",(0,i.kt)("inlineCode",{parentName:"p"},"1980")," was hit 2 times."),(0,i.kt)("blockquote",null,(0,i.kt)("ol",{parentName:"blockquote",start:3},(0,i.kt)("li",{parentName:"ol"},"The expression verification of two ",(0,i.kt)("inlineCode",{parentName:"li"},"vars")," failed (missing the request parameters of ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"name2"),"), the ",(0,i.kt)("inlineCode",{parentName:"li"},"match")," rule verification failed, and the response is the upstream data ",(0,i.kt)("inlineCode",{parentName:"li"},"hello 1980")," of the default ",(0,i.kt)("inlineCode",{parentName:"li"},"route"),"."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl 'http://127.0.0.1:9080/index.html?name=jack' -i\nHTTP/1.1 200 OK\nContent-Type: text/html; charset=utf-8\n......\n\nhello 1980\n")),(0,i.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,i.kt)("p",null,"When you want to remove the traffic-split plugin, it's very simple, just delete the corresponding json configuration in the plugin configuration, no need to restart the service, it will take effect immediately:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}d.isMDXComponent=!0}}]);