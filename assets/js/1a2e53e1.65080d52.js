"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[63346],{35318:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),h=r,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||i;return a?n.createElement(d,o(o({ref:t},p),{},{components:a})):n.createElement(d,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},39828:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var n=a(25773),r=a(30808),i=(a(27378),a(35318)),o=["components"],s={title:"How to use API Gateway to process 1 billion traffic daily for Tencent?",slug:"2021/05/24/tencent-games",author:"Xin Xu",keywords:["API Gateway","APISIX","Apache APISIX","Tencent Games","Infrastructure"],description:"This article is a lecture note from the speech given by Xin Xu, an engineer in charge of internal container platform of Tencent Games, at the Apache APISIX Meetup - Shenzhen. By reading this article, you can not only learn what a gateway is and how the gateway model improves the traditional service architecture, but also understand the reasons for the birth of Tencent OTeam and how Apache APISIX is implemented inside Tencent.",tags:["User Case"]},l=void 0,c={permalink:"/blog/2021/05/24/tencent-games",source:"@site/blog/2021/05/24/Tencent-Games.md",title:"How to use API Gateway to process 1 billion traffic daily for Tencent?",description:"This article is a lecture note from the speech given by Xin Xu, an engineer in charge of internal container platform of Tencent Games, at the Apache APISIX Meetup - Shenzhen. By reading this article, you can not only learn what a gateway is and how the gateway model improves the traditional service architecture, but also understand the reasons for the birth of Tencent OTeam and how Apache APISIX is implemented inside Tencent.",date:"2021-05-24T00:00:00.000Z",formattedDate:"May 24, 2021",tags:[{label:"User Case",permalink:"/blog/tags/user-case"}],readingTime:8.215,truncated:!0,authors:[{name:"Xin Xu"}],prevItem:{title:"Apache APISIX 2.6.0-Release Officially Released",permalink:"/blog/2021/05/25/apache-apisix-2.6.0-release"},nextItem:{title:"Get Front-End Test Coverage with Cypress",permalink:"/blog/2021/03/02/get-front-end-test-coverage-with-cypress"}},p={authorsImageUrls:[void 0]},m=[{value:"What is an API Gateway?",id:"what-is-an-api-gateway",children:[{value:"Traditional architecture",id:"traditional-architecture",children:[]},{value:"Gateway mode",id:"gateway-mode",children:[]}]},{value:"Introduction",id:"introduction",children:[{value:"OTeam",id:"oteam",children:[]},{value:"Apache APISIX",id:"apache-apisix",children:[]}]},{value:"Tencent OTeam\u2019s operational strategy",id:"tencent-oteams-operational-strategy",children:[]},{value:"OTeam Trend",id:"oteam-trend",children:[]},{value:"OTeam Internal Features",id:"oteam-internal-features",children:[{value:"Internal pain points",id:"internal-pain-points",children:[]},{value:"Problem-solving",id:"problem-solving",children:[]}]},{value:"Summary",id:"summary",children:[]}],u={toc:m};function h(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This article is a lecture note from the speech given by Xin Xu, an engineer in charge of internal container platform of Tencent Games, at the Apache APISIX Meetup - Shenzhen. By reading this article, you can not only learn what a gateway is and how the gateway model improves the traditional service architecture, but also understand the reasons for the birth of Tencent OTeam and how Apache APISIX is implemented inside Tencent.")),(0,i.kt)("h2",{id:"what-is-an-api-gateway"},"What is an API Gateway?"),(0,i.kt)("h3",{id:"traditional-architecture"},"Traditional architecture"),(0,i.kt)("p",null,"Before integrating with API Gateway, we have few ways to reuse some general functionalities, such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Security: authentication, authorization, anti-replay, anti-tampering, anti-DDoS, etc.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Reliability: service degradation, fusing, traffic limiting, and so on."))),(0,i.kt)("p",null,"Under the traditional architecture, the most common way to deal with this case is to put them into a service framework and implement them through AOP, similar to the following architecture diagram:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630640321175-ee272ad4-d8ee-45f3-8b67-9630fb534a82.png",alt:"Traditional architecture"})),(0,i.kt)("p",null,"The traditional architecture diagram has the following modules."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Backend: Backend services")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"AOP: AOP layering carried by the framework;")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"SD: Service Center, used for internal service discovery. In cloud-native technologies, we often use Service to replace this component;")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"LB: Load balancer, we use it on the network boundary as an entry point for external traffic."))),(0,i.kt)("p",null,"This kind of architecture was widespread in the design of the early years, which gave birth to many extensive and comprehensive service frameworks, such as Dubbo, SpringCloud, etc., and we will find that most of them have many similar features."),(0,i.kt)("p",null,"The advantage of this architecture is that the upstream and downstream relationships are more accessible and more apparent, and it reduces one forwarding in the network transmission. But their disadvantages are also obvious:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Standard features force business service updates: since code references are used, we have to recompile business services to make the features effective. Some teams that do not achieve rolling release have to release during the idle of the business.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Hard to manage versions: Since we cannot upgrade all services to the latest version every time we release, after a period, the performance of various services will be inconsistent."))),(0,i.kt)("p",null,"Why not put those same functions in a standalone service, which can upgrade or maintain separately?"),(0,i.kt)("h3",{id:"gateway-mode"},"Gateway mode"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1630640321180-bd19ad6c-6116-4982-98e8-3b626285ed03.png",alt:"Gateway mode"})),(0,i.kt)("p",null,"Compared with traditional architecture, We can see an additional component between the backend services and the LB: Gateway."),(0,i.kt)("p",null,"A gateway usually contains many standard and reusable features, such as Authentication, Traffic Management, etc. The following are the benefits we could get:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Gateway is a dependent component on the systems, and we could have a better maintain experience.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Gateway is language-independent."))),(0,i.kt)("p",null,"However, the gateway mode also has its disadvantages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Because we proxy traffic to the gateway first, we have one more forwarding and higher latency. It will cause a higher complexity of troubleshooting problems.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the gateway does not work correctly, it may become a bottleneck for the entire system."))),(0,i.kt)("p",null,"How to balance the benefits and disadvantages of the gateway model is a challenge for the technical team. Let\u2019s see how the Tencent OTeam works with Apache APISIX."),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("h3",{id:"oteam"},"OTeam"),(0,i.kt)("p",null,"Tencent\u2019s OTeam is a group of teams, and every team maintains one or several technical products. They aim to build a stable but robust mid-platform for internal systems. One of the OTeam supports Tencent\u2019s internal Apache APISIX customization distribution."),(0,i.kt)("p",null,"In order to integrate the duplicate wheels within the company and sink the technical middle ground. Tencent put several technical products of the same nature into the same Oteam, integrating the maintenance staff and firing them all together, so that they could gradually merge into one big and comprehensive product, which is Oteam."),(0,i.kt)("p",null,"Some Oteams have as many as a dozen products under them, while others have only one. For example, the Oteam where Apache APISIX is located has only one product, Apache APISIX. The original purpose of this Oteam is to maintain the customization features of Apache APISIX within Tencent."),(0,i.kt)("h3",{id:"apache-apisix"},"Apache APISIX"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/"},"Apache APISIX")," is a Top-Level Project from the Apache Software Foundation, and here are some key points:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Apache APISIX is a cloud-native, dynamic API gateway based on OpenResty, with a higher routing performance than Kong.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Apache APISIX provides rich traffic management features such as load balancing, dynamic upstream, canary release, circuit breaking, authentication, observability, and more.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Apache APISIX is good at handling traditional north-south traffic, as well as east-west traffic between services. It can also be used as a k8s ingress controller.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Apache APISIX default uses ETCD as the configuration center, which can update the configuration in seconds.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Apache APISIX graduates from Apache Software Foundation and only takes a few months."))),(0,i.kt)("h2",{id:"tencent-oteams-operational-strategy"},"Tencent OTeam\u2019s operational strategy"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646831516782-bd2d1b56-0e63-4dc8-a53a-c891c6a11d6d.png",alt:"OTeam operational strategy"})),(0,i.kt)("p",null,"The above diagram shows how the OTeam works with Apache APISIX\u2019s community:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Users give feedback or requirements via GitHub Issue.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"OTeam members discuss solutions at weekly meetings or reply directly in Issue.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Implement features or fix bugs according to discussion.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Code Review and CI check, then release if necessary."))),(0,i.kt)("p",null,"This process is just like other Open Source projects. Here are some key points:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"After solving the Issue, Tencent engineers will determine whether the problem is also a common problem for the community. If so, they will file a PR to the community.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Tencent OTeam will regularly review Apache APISIX\u2019s new features to determine whether it is stable and whether it is also a pain point for Tencent. If the answer is yes, pick the relevant codes."))),(0,i.kt)("p",null,"In the beginning, OTeam would sync codes with Apache APISIX every 12 hours so that we could follow up Apache APISIX quickly, but this approach brought some problems:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"After syncing codes with Apache APISIX, we could make sure regulations are correct but couldn\u2019t ensure the codes are stable. Some occasional errors happened in concurrency cases.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The merged codes sometimes cause multiple PR upstream conflicts logically, but Apache APISIX and OTeam\u2019s CI cannot detect this case. Only when we merge PRs to the master branch could we find something wrong happened."))),(0,i.kt)("p",null,"For these reasons, OTeam is now moving to pick codes for required features after internal reviews."),(0,i.kt)("h2",{id:"oteam-trend"},"OTeam Trend"),(0,i.kt)("p",null,"As of May 2021, OTeam has landed Apache APISIX for more than ten teams within Tencent, with the enormous daily business request traffic exceeding one billion. At the same time, OTeam has also developed more than ten features for Apache APISIX, including Service Discovery, RPC Protocol Conversion, and connect with the monitoring platform."),(0,i.kt)("p",null,"At the same time, OTeam has also contributed some standard features to Apache APISIX\u2019s community. At present, two members of the OTeam team are also PMCs of the Apache APISIX, and OTeam has contributed more than 50 PRs to the community. We believe that OTeam will keep cooperating with the Apache APISIX community in the future."),(0,i.kt)("h2",{id:"oteam-internal-features"},"OTeam Internal Features"),(0,i.kt)("h3",{id:"internal-pain-points"},"Internal pain points"),(0,i.kt)("p",null,"OTeam\u2019s primary responsibility is to maintain Apache APISIX\u2019s features for Tencent. Let\u2019s take a look at what pain points OTeam met."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The RPC framework is not friendly to the frontend: there are many legacy projects within Tencent that use the TARS framework, it does not directly support the HTTP protocol like TRPC, it only supports the most traditional TCP protocol of the RPC framework, and the transport content uses a specific binary protocol. We need to maintain an intermediate service to convert these interfaces into a frontend-friendly HTTP + JSON form.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Diversification of service centers: There are many Service Centers in Tencent\u2019s internal services, such as CL5, L5, Polaris, etc. Although we will gradually use the same Service Center, we will use multiple service centers simultaneously during this extended period. The initial Apache APISIX does not support this.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Alarm: As a gateway, the alarm is not a direction it should pay attention to, but as a fundamental component, the alarm must be a required component to the team. How to solve the alarm problem is also a pain point.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Security: Tencent has a large amount of traffic and security requirements. A log of toC products are using OTeam, and they have to face a large number of users\u2019 misuse and attacks from the network. The most typical cases are DDos, replay, tampering requests, etc. Can we solve these issues at the gateway layer?"))),(0,i.kt)("h3",{id:"problem-solving"},"Problem-solving"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646831157962-78e0d276-37d9-4bf7-a841-b9600b0ce1f9.png",alt:"OTeam arichitecture"})),(0,i.kt)("p",null,"The above diagram comes from a simplification of a landing case within Tencent. We can see several problems just raised have been solved in OTeam:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Protocol Conversion: based on Apache APISIX, OTeam achieves TRPC and TARS protocol conversion. Those who do not perform HTTP legacy services can directly use the conversion plugin in the gateway to attaining HTTP and RPC transfer requirements without writing intermediate services.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Multiple Service Centers: We have contributed this feature to the community.\nReport to monitoring platform: Tencent OTeam uses plugins to connect with monitoring platforms. Users only need to do some configurations, and then the system will automatically report metrics, logs. By the way, users can configure alarm policies on the monitoring platform.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Anti-replay and anti-tampering: OTeam implements anti-replay and anti-tampering plugins, allowing external businesses that need these capabilities to use them directly out of the box to protect their APIs security."))),(0,i.kt)("p",null,"We hope that these examples can help you explore more Apache APISIX usage scenarios and better use it as a helpful platform. For example, someone used the gateway to implement some API specifications mandatory according to Tencent Cloud policies."),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"OTeam helped the business team solve their pain points and continuously improved the features of Apache APISIX within Tencent, and move forward with the development of the community."),(0,i.kt)("p",null,"If your team does not have a gateway, you can search and learn more about Apache APISIX and are welcome to participate in the Apache APISIX community."),(0,i.kt)("p",null,"For more videos about Apache APISIX, please visit ",(0,i.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1yK4y1G7CP/"},"https://www.bilibili.com/video/BV1yK4y1G7CP/")," ."))}h.isMDXComponent=!0}}]);