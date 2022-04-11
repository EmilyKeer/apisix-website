"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[96798],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,g=d["".concat(l,".").concat(f)]||d[f]||s[f]||a;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36988:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(25773),i=n(30808),a=(n(27378),n(35318)),o=["components"],c={title:"Global rule"},l=void 0,u={unversionedId:"architecture-design/global-rule",id:"version-2.9/architecture-design/global-rule",isDocsHomePage:!1,title:"Global rule",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.9/architecture-design/global-rule.md",sourceDirName:"architecture-design",slug:"/architecture-design/global-rule",permalink:"/zh/docs/apisix/2.9/architecture-design/global-rule",editUrl:null,tags:[],version:"2.9",frontMatter:{title:"Global rule"},sidebar:"version-2.9/docs",previous:{title:"Upstream",permalink:"/zh/docs/apisix/2.9/architecture-design/upstream"},next:{title:"Plugin Config",permalink:"/zh/docs/apisix/2.9/architecture-design/plugin-config"}},p=[],s={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/2.9/architecture-design/plugin"},"Plugin")," \u53ea\u80fd\u7ed1\u5b9a\u5728 ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/2.9/architecture-design/service"},"Service")," \u6216\u8005 ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/2.9/architecture-design/route"},"Route")," \u4e0a\uff0c\u5982\u679c\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u80fd\u4f5c\u7528\u4e8e\u6240\u6709\u8bf7\u6c42\u7684 ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/2.9/architecture-design/plugin"},"Plugin")," \u8be5\u600e\u4e48\u529e\u5462\uff1f\n\u8fd9\u65f6\u5019\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"GlobalRule")," \u6765\u6ce8\u518c\u4e00\u4e2a\u5168\u5c40\u7684 ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/2.9/architecture-design/plugin"},"Plugin"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X PUT \\\n  https://{apisix_listen_address}/apisix/admin/global_rules/1 \\\n  -H \'Content-Type: application/json\' \\\n  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' \\\n  -d \'{\n        "plugins": {\n            "limit-count": {\n                "time_window": 60,\n                "policy": "local",\n                "count": 2,\n                "key": "remote_addr",\n                "rejected_code": 503\n            }\n        }\n    }\'\n')),(0,a.kt)("p",null,"\u5982\u4e0a\u6240\u6ce8\u518c\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"limit-count")," \u63d2\u4ef6\u5c06\u4f1a\u4f5c\u7528\u4e8e\u6240\u6709\u7684\u8bf7\u6c42\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u63a5\u53e3\u67e5\u770b\u6240\u6709\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"GlobalRule"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl https://{apisix_listen_address}/apisix/admin/global_rules -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1'\n")))}d.isMDXComponent=!0}}]);