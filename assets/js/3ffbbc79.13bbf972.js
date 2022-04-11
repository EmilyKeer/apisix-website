"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[23400],{35318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,g=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26367:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(25773),i=n(30808),a=(n(27378),n(35318)),o=["components"],l={title:"Global rule"},c=void 0,u={unversionedId:"architecture-design/global-rule",id:"version-2.9/architecture-design/global-rule",isDocsHomePage:!1,title:"Global rule",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.9/architecture-design/global-rule.md",sourceDirName:"architecture-design",slug:"/architecture-design/global-rule",permalink:"/docs/apisix/2.9/architecture-design/global-rule",editUrl:null,tags:[],version:"2.9",frontMatter:{title:"Global rule"},sidebar:"version-2.9/docs",previous:{title:"Upstream",permalink:"/docs/apisix/2.9/architecture-design/upstream"},next:{title:"Plugin Config",permalink:"/docs/apisix/2.9/architecture-design/plugin-config"}},s=[],p={toc:s};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/2.9/architecture-design/plugin"},"Plugin")," just can be bound to ",(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/2.9/architecture-design/service"},"Service")," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/2.9/architecture-design/route"},"Route"),", if we want a ",(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/2.9/architecture-design/plugin"},"Plugin")," work on all requests, how to do it?\nWe can register a global ",(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/2.9/architecture-design/plugin"},"Plugin")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"GlobalRule"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X PUT \\\n  https://{apisix_listen_address}/apisix/admin/global_rules/1 \\\n  -H \'Content-Type: application/json\' \\\n  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' \\\n  -d \'{\n        "plugins": {\n            "limit-count": {\n                "time_window": 60,\n                "policy": "local",\n                "count": 2,\n                "key": "remote_addr",\n                "rejected_code": 503\n            }\n        }\n    }\'\n')),(0,a.kt)("p",null,"Now, the ",(0,a.kt)("inlineCode",{parentName:"p"},"limit-count")," plugin will work on all requests"),(0,a.kt)("p",null,"we can list all ",(0,a.kt)("inlineCode",{parentName:"p"},"GlobalRule")," via admin api as below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl https://{apisix_listen_address}/apisix/admin/global_rules\n")))}d.isMDXComponent=!0}}]);