"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3646],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(n),m=o,f=h["".concat(p,".").concat(m)]||h[m]||c[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},37761:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var r=n(25773),o=n(30808),i=(n(27378),n(35318)),a=["components"],s={title:"Community Weekly\uff5c10.1-10.14 Feature Highlight Updates in Progress",keywords:["Apache APISIX","Community Weekly","APISIX","API Gateway","Contributor"],description:"The Apache APISIX Community Weekly Newsletter hopes to help community members better understand the weekly progress of the Apache APISIX community and facilitate your participation in the Apache APISIX community.",tags:["Events"]},p=void 0,l={permalink:"/blog/2021/10/14/weekly-report-1014",source:"@site/blog/2021/10/14/weekly-report-1014.md",title:"Community Weekly\uff5c10.1-10.14 Feature Highlight Updates in Progress",description:"The Apache APISIX Community Weekly Newsletter hopes to help community members better understand the weekly progress of the Apache APISIX community and facilitate your participation in the Apache APISIX community.",date:"2021-10-14T00:00:00.000Z",formattedDate:"October 14, 2021",tags:[{label:"Events",permalink:"/blog/tags/events"}],readingTime:2.435,truncated:!0,authors:[],prevItem:{title:"Webinar | Apache APISIX \xd7 Apache SkyWalking Online Meetup",permalink:"/blog/2021/10/18/meetup"},nextItem:{title:"New milestone for the Apache APISIX community - over 300 contributors worldwide!",permalink:"/blog/2021/10/13/celebrating-300-contributors-of-apisix"}},u={authorsImageUrls:[]},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Contributor statistics",id:"contributor-statistics",children:[]},{value:"Good first issue",id:"good-first-issue",children:[{value:"Issue #5165",id:"issue-5165",children:[]},{value:"Issue #5192",id:"issue-5192",children:[]}]},{value:"Feature highlights of the week",id:"feature-highlights-of-the-week",children:[]},{value:"Recommended blog posts for this week",id:"recommended-blog-posts-for-this-week",children:[]}],h={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"From 10.1 to 10.14, 27 developers have committed 67 commits to Apache APISIX. Thank you to these folks for making the Apache APISIX project better with your selfless efforts!")),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Apache APISIX has grown as a community since the first day of open source and has quickly become the most active open source API gateway project in the world. These achievements could not have been achieved without the joint efforts of our community partners."),(0,i.kt)("p",null,'"If you want to go fast, go alone. If you want to go far, go together", Apache APISIX Community Weekly Report hopes to help community members better grasp the weekly progress of the Apache APISIX community and facilitate your participation in the Apache APISIX community.'),(0,i.kt)("p",null,"We've also put together some issues for those new to the community!"),(0,i.kt)("h2",{id:"contributor-statistics"},"Contributor statistics"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1634183939241-a87516e5-cb52-4532-87e2-306c09155a70.png",alt:"This week's contributor list"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1634183019951-bcf250cd-e5b5-443e-afc4-3cfdef0d6eab.jpg",alt:"New contributors this week"})),(0,i.kt)("h2",{id:"good-first-issue"},"Good first issue"),(0,i.kt)("h3",{id:"issue-5165"},"Issue #5165"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Link"),": ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/5165"},"https://github.com/apache/apisix/issues/5165")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Problem Description"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When a browser publishes across domains and then displays a CORS error, the login for the ",(0,i.kt)("inlineCode",{parentName:"p"},"wolf-rbac")," plugin ",(0,i.kt)("inlineCode",{parentName:"p"},"url/apisix/plugin/wolf-rbac/login")," returns ",(0,i.kt)("inlineCode",{parentName:"p"},"json")," format, but the ",(0,i.kt)("inlineCode",{parentName:"p"},"header")," gives a content type of ",(0,i.kt)("inlineCode",{parentName:"p"},"text/plain"),", please change the content type to ",(0,i.kt)("inlineCode",{parentName:"p"},"application/json")," after the plugin login.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The login for ",(0,i.kt)("inlineCode",{parentName:"p"},"wolf-rabc")," ",(0,i.kt)("inlineCode",{parentName:"p"},"uri/apisix/plugin/wolf-rbac/login")," will lose the CORS plugin with the added header."))),(0,i.kt)("h3",{id:"issue-5192"},"Issue #5192"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Link"),": ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/5192"},"https://github.com/apache/apisix/issues/5192")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Problem Description"),': When installing APISIX dependencies, different Linux distributions will have different executions. Is it possible to merge these different executions into "install-dependencise.sh" to make it easier for users to install dependencies?'),(0,i.kt)("h2",{id:"feature-highlights-of-the-week"},"Feature highlights of the week"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard/pull/2149"},"Dashboard support for configuring the host field in Service to provide routing defaults")," (Contributor: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bzp2010"},"bzp2010"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/5171"},"APISIX support test profile")," (Contributor: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nic-chen"},"nic-chen"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/3894"},"APISIX adds ldap-auth plugin")," (Contributor: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jp-gouin"},"jp-gouin"),")"))),(0,i.kt)("h2",{id:"recommended-blog-posts-for-this-week"},"Recommended blog posts for this week"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2021/10/13/celebrating-300-contributors-of-apisix"},"New milestone for the Apache APISIX community - topping 300 contributors worldwide!"),"."),(0,i.kt)("p",{parentName:"li"},"The Apache APISIX community has reached a new milestone, surpassing 300 global contributors to projects related to Apache APISIX! Just 3 months after the Apache APISIX main repository reached the 200 contributor milestone! Thank you to our community contributors for their outstanding contributions in all aspects of code, documentation, operations, and more.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2021/10/01/openEuler"},"Apache APISIX community members help openEuler release first community innovation version")),(0,i.kt)("p",{parentName:"li"},"Zexuan Luo and Ming Wen from the Apache APISIX community contributed to the first community innovation release of openEuler (openEuler 21.09) on September 30, which allowed OpenResty to run smoothly and efficiently on the Euler open source operating system. The stable operation of OpenResty also means that Apache APISIX can run smoothly on the openEuler system, and the underlying Apache APISIX is based on OpenResty for some development.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2021/09/29/release-apache-apisix-2.10"},"Apache APISIX 2.10.0 is released, bringing the first LTS version!")),(0,i.kt)("p",{parentName:"li"},"Apache APISIX version 2.10 is officially released! \ud83c\udf89 This is the first LTS release of Apache APISIX, with support for 10+ new features and new plugins. Have a quick read about the new features in version 2.10!"))))}m.isMDXComponent=!0}}]);