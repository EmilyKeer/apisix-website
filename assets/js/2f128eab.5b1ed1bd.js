"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80343],{35318:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return d}});var n=t(27378);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=u(t),d=o,y=f["".concat(s,".").concat(d)]||f[d]||l[d]||i;return t?n.createElement(y,c(c({ref:r},p),{},{components:t})):n.createElement(y,c({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=f;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=t[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9972:function(e,r,t){t.r(r),t.d(r,{contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var n=t(25773),o=t(30808),i=(t(27378),t(35318)),c=["components"],a={title:"eureka"},s=void 0,u={unversionedId:"discovery/eureka",id:"version-2.9/discovery/eureka",isDocsHomePage:!1,title:"eureka",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.9/discovery/eureka.md",sourceDirName:"discovery",slug:"/discovery/eureka",permalink:"/docs/apisix/2.9/discovery/eureka",editUrl:null,tags:[],version:"2.9",frontMatter:{title:"eureka"},sidebar:"version-2.9/docs",previous:{title:"nacos",permalink:"/docs/apisix/2.9/discovery/nacos"},next:{title:"Health Check",permalink:"/docs/apisix/2.9/health-check"}},p=[],l={toc:p};function f(e){var r=e.components,t=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Apache APISIX supports service discovery via Eureka. For the details, please start your\nreading from ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/2.9/discovery#supported-discovery-registries"},"Supported discovery registries"),"."))}f.isMDXComponent=!0}}]);