"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[67028],{35318:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),g=u(r),m=o,h=g["".concat(s,".").concat(m)]||g[m]||p[m]||a;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},20598:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var n=r(25773),o=r(30808),a=(r(27378),r(35318)),i=["components"],c={title:"How to Integrate API Gateway with Eureka?",authors:[{name:"Yong Qian",title:"Author",url:"https://github.com/nic-6443",image_url:"https://avatars.githubusercontent.com/u/22141303?v=4"},{name:"Fei Han",title:"Technical Writer",url:"https://github.com/hf400159",image_url:"https://avatars.githubusercontent.com/u/97138894?v=4"}],keywords:["API Gateway","Apache APISIX","Eureka","Service Discovery","Servici Register"],description:"This article describes how to enable Eureka as a service discovery in the API gateway Apache APISIX and how to use diagnostic tools to find problems in the link.",tags:["Technology","Ecosystem","Service Discovery"]},s=void 0,u={permalink:"/blog/2022/03/05/apisix-integration-eureka-service-discovery",source:"@site/blog/2022/03/05/apisix-integration-eureka-service-discovery.md",title:"How to Integrate API Gateway with Eureka?",description:"This article describes how to enable Eureka as a service discovery in the API gateway Apache APISIX and how to use diagnostic tools to find problems in the link.",date:"2022-03-05T00:00:00.000Z",formattedDate:"March 5, 2022",tags:[{label:"Technology",permalink:"/blog/tags/technology"},{label:"Ecosystem",permalink:"/blog/tags/ecosystem"},{label:"Service Discovery",permalink:"/blog/tags/service-discovery"}],readingTime:6.375,truncated:!0,authors:[{name:"Yong Qian",title:"Author",url:"https://github.com/nic-6443",image_url:"https://avatars.githubusercontent.com/u/22141303?v=4",imageURL:"https://avatars.githubusercontent.com/u/22141303?v=4"},{name:"Fei Han",title:"Technical Writer",url:"https://github.com/hf400159",image_url:"https://avatars.githubusercontent.com/u/97138894?v=4",imageURL:"https://avatars.githubusercontent.com/u/97138894?v=4"}],prevItem:{title:"Biweekly Report\uff5cExplore the weeks of Mar 1st - Mar 14th",permalink:"/blog/2022/03/24/weekly-report-0314"},nextItem:{title:"Making It Simple, Apache APISIX Integrates ClickHouse to Improve Logging Efficiency",permalink:"/blog/2022/03/04/apigateway-clickhouse-makes-logging-easier"}},l={authorsImageUrls:[void 0,void 0]},p=[],g={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This article describes how to enable Eureka as a service discovery in the API gateway Apache APISIX and how to use diagnostic tools to find problems in the link.")))}m.isMDXComponent=!0}}]);