"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[54224],{35318:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return h}});var r=t(27378);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(t),h=a,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||s;return t?r.createElement(d,o(o({ref:n},p),{},{components:t})):r.createElement(d,o({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},97830:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=t(25773),a=t(30808),s=(t(27378),t(35318)),o=["components"],i={title:"Benchmark"},l=void 0,c={unversionedId:"benchmark",id:"version-2.10/benchmark",isDocsHomePage:!1,title:"Benchmark",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.10/benchmark.md",sourceDirName:".",slug:"/benchmark",permalink:"/docs/apisix/2.10/benchmark",editUrl:null,tags:[],version:"2.10",frontMatter:{title:"Benchmark"},sidebar:"version-2.10/docs",previous:{title:"Batch Processor",permalink:"/docs/apisix/2.10/batch-processor"},next:{title:"Install Dependencies",permalink:"/docs/apisix/2.10/install-dependencies"}},p=[{value:"Benchmark Environments",id:"benchmark-environments",children:[]},{value:"Benchmark Test for reverse proxy",id:"benchmark-test-for-reverse-proxy",children:[]},{value:"Benchmark Test for reverse proxy, enabled 2 plugins",id:"benchmark-test-for-reverse-proxy-enabled-2-plugins",children:[]}],u={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"benchmark-environments"},"Benchmark Environments"),(0,s.kt)("p",null,"n1-highcpu-8 (8 vCPUs, 7.2 GB memory) on Google Cloud"),(0,s.kt)("p",null,"But we ",(0,s.kt)("strong",{parentName:"p"},"only")," used 4 cores to run APISIX, and left 4 cores for system and ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/wg/wrk"},"wrk"),",\nwhich is the HTTP benchmarking tool."),(0,s.kt)("h3",{id:"benchmark-test-for-reverse-proxy"},"Benchmark Test for reverse proxy"),(0,s.kt)("p",null,"Only used APISIX as the reverse proxy server, with no logging, limit rate, or other plugins enabled,\nand the response size was 1KB."),(0,s.kt)("h4",{id:"qps"},"QPS"),(0,s.kt)("p",null,"The x-axis means the size of CPU core, and the y-axis is QPS."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.10/docs/assets/images/benchmark-1.jpg",alt:"benchmark-1"})),(0,s.kt)("h4",{id:"latency"},"Latency"),(0,s.kt)("p",null,"Note the y-axis latency in ",(0,s.kt)("strong",{parentName:"p"},"microsecond(\u03bcs)")," not millisecond."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.10/docs/assets/images/latency-1.jpg",alt:"latency-1"})),(0,s.kt)("h4",{id:"flame-graph"},"Flame Graph"),(0,s.kt)("p",null,"The result of Flame Graph:\n",(0,s.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.10/docs/assets/images/flamegraph-1.jpg",alt:"flamegraph-1"})),(0,s.kt)("p",null,"And if you want to run the benchmark test in your machine, you should run another Nginx to listen 80 port."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/hello",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1,\n            "127.0.0.2:80": 1\n        }\n    }\n}\'\n')),(0,s.kt)("p",null,"then run wrk:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"wrk -d 60 --latency http://127.0.0.1:9080/hello\n")),(0,s.kt)("h3",{id:"benchmark-test-for-reverse-proxy-enabled-2-plugins"},"Benchmark Test for reverse proxy, enabled 2 plugins"),(0,s.kt)("p",null,"Only used APISIX as the reverse proxy server, enabled the limit rate and prometheus plugins,\nand the response size was 1KB."),(0,s.kt)("h4",{id:"qps-1"},"QPS"),(0,s.kt)("p",null,"The x-axis means the size of CPU core, and the y-axis is QPS."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.10/docs/assets/images/benchmark-2.jpg",alt:"benchmark-2"})),(0,s.kt)("h4",{id:"latency-1"},"Latency"),(0,s.kt)("p",null,"Note the y-axis latency in ",(0,s.kt)("strong",{parentName:"p"},"microsecond(\u03bcs)")," not millisecond."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.10/docs/assets/images/latency-2.jpg",alt:"latency-2"})),(0,s.kt)("h4",{id:"flame-graph-1"},"Flame Graph"),(0,s.kt)("p",null,"The result of Flame Graph:\n",(0,s.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.10/docs/assets/images/flamegraph-2.jpg",alt:"flamegraph-2"})),(0,s.kt)("p",null,"And if you want to run the benchmark test in your machine, you should run another Nginx to listen 80 port."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/hello",\n    "plugins": {\n        "limit-count": {\n            "count": 999999999,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        },\n        "prometheus":{}\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1,\n            "127.0.0.2:80": 1\n        }\n    }\n}\'\n')),(0,s.kt)("p",null,"then run wrk:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"wrk -d 60 --latency http://127.0.0.1:9080/hello\n")))}m.isMDXComponent=!0}}]);