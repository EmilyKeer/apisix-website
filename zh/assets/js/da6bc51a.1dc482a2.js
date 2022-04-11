"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[33176],{35318:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),k=c(n),m=a,d=k["".concat(p,".").concat(m)]||k[m]||u[m]||o;return n?r.createElement(d,s(s({ref:t},l),{},{components:n})):r.createElement(d,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},36427:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l}});var r=n(25773),a=n(30808),o=(n(27378),n(35318)),s=["components"],i={title:"Kubernetes"},p=void 0,c={unversionedId:"discovery/kubernetes",id:"version-2.13/discovery/kubernetes",isDocsHomePage:!1,title:"Kubernetes",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.13/discovery/kubernetes.md",sourceDirName:"discovery",slug:"/discovery/kubernetes",permalink:"/zh/docs/apisix/discovery/kubernetes",editUrl:null,tags:[],version:"2.13",frontMatter:{title:"Kubernetes"},sidebar:"version-2.13/docs",previous:{title:"eureka",permalink:"/zh/docs/apisix/discovery/eureka"},next:{title:"\u5065\u5eb7\u68c0\u67e5",permalink:"/zh/docs/apisix/health-check"}},l=[{value:"\u57fa\u4e8e Kubernetes \u7684\u670d\u52a1\u53d1\u73b0",id:"\u57fa\u4e8e-kubernetes-\u7684\u670d\u52a1\u53d1\u73b0",children:[]},{value:"Kubernetes \u670d\u52a1\u53d1\u73b0\u6a21\u5757\u7684\u914d\u7f6e",id:"kubernetes-\u670d\u52a1\u53d1\u73b0\u6a21\u5757\u7684\u914d\u7f6e",children:[]},{value:"Kubernetes \u670d\u52a1\u53d1\u73b0\u6a21\u5757\u7684\u67e5\u8be2\u63a5\u53e3",id:"kubernetes-\u670d\u52a1\u53d1\u73b0\u6a21\u5757\u7684\u67e5\u8be2\u63a5\u53e3",children:[]},{value:"Q&amp;A",id:"qa",children:[]}],u={toc:l};function k(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u57fa\u4e8e-kubernetes-\u7684\u670d\u52a1\u53d1\u73b0"},"\u57fa\u4e8e Kubernetes \u7684\u670d\u52a1\u53d1\u73b0"),(0,o.kt)("p",null,"Kubernetes \u670d\u52a1\u53d1\u73b0\u6a21\u5757\u4ee5 ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/using-api/api-concepts"},(0,o.kt)("em",{parentName:"a"},"List-Watch"))," \u65b9\u5f0f\u76d1\u542c ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io"},(0,o.kt)("em",{parentName:"a"},"Kubernetes"))," \u96c6\u7fa4 ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service"},(0,o.kt)("em",{parentName:"a"},"Endpoints"))," \u8d44\u6e90\u7684\u5b9e\u65f6\u53d8\u5316,\n\u5e76\u5c06\u5176\u503c\u5b58\u50a8\u5230 ngx.shared.kubernetes \u4e2d \\\n\u6a21\u5757\u540c\u65f6\u9075\u5faa ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/docs/zh/latest/discovery.md"},(0,o.kt)("em",{parentName:"a"},"APISIX Discovery \u89c4\u8303"))," \u63d0\u4f9b\u4e86\u8282\u70b9\u67e5\u8be2\u63a5\u53e3"),(0,o.kt)("h2",{id:"kubernetes-\u670d\u52a1\u53d1\u73b0\u6a21\u5757\u7684\u914d\u7f6e"},"Kubernetes \u670d\u52a1\u53d1\u73b0\u6a21\u5757\u7684\u914d\u7f6e"),(0,o.kt)("p",null,"Kubernetes \u670d\u52a1\u53d1\u73b0\u6a21\u5757\u7684\u5b8c\u6574\u914d\u7f6e\u5982\u4e0b:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'discovery:\n  kubernetes:\n    service:\n      # apiserver schema, options [http, https]\n      schema: https #default https\n\n      # apiserver host, options [ipv4, ipv6, domain, environment variable]\n      host: ${KUBERNETES_SERVICE_HOST} #default ${KUBERNETES_SERVICE_HOST}\n\n      # apiserver port, options [port number, environment variable]\n      port: ${KUBERNETES_SERVICE_PORT}  #default ${KUBERNETES_SERVICE_PORT}\n\n    client:\n      # serviceaccount token or token_file\n      token_file: /var/run/secrets/kubernetes.io/serviceaccount/token\n\n      #token: |-\n       # eyJhbGciOiJSUzI1NiIsImtpZCI6Ikx5ME1DNWdnbmhQNkZCNlZYMXBsT3pYU3BBS2swYzBPSkN3ZnBESGpkUEEif\n       # 6Ikx5ME1DNWdnbmhQNkZCNlZYMXBsT3pYU3BBS2swYzBPSkN3ZnBESGpkUEEifeyJhbGciOiJSUzI1NiIsImtpZCI\n\n    # kubernetes discovery plugin support use namespace_selector\n    # you can use one of [equal, not_equal, match, not_match] filter namespace\n    namespace_selector:\n      # only save endpoints with namespace equal default\n      equal: default\n\n      # only save endpoints with namespace not equal default\n      #not_equal: default\n\n      # only save endpoints with namespace match one of [default, ^my-[a-z]+$]\n      #match:\n       #- default\n       #- ^my-[a-z]+$\n\n      # only save endpoints with namespace not match one of [default, ^my-[a-z]+$]\n      #not_match:\n       #- default\n       #- ^my-[a-z]+$\n\n    # kubernetes discovery plugin support use label_selector\n    # for the expression of label_selector, please refer to https://kubernetes.io/docs/concepts/overview/working-with-objects/labels\n    label_selector: |-\n      first="a",second="b"\n')),(0,o.kt)("p",null,"\u5982\u679c Kubernetes \u670d\u52a1\u53d1\u73b0\u6a21\u5757\u8fd0\u884c\u5728 Pod \u5185, \u4f60\u53ef\u4ee5\u4f7f\u7528\u6700\u7b80\u914d\u7f6e:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"discovery:\n  kubernetes: { }\n")),(0,o.kt)("p",null,"\u5982\u679c Kubernetes \u670d\u52a1\u53d1\u73b0\u6a21\u5757\u8fd0\u884c\u5728 Pod \u5916, \u4f60\u9700\u8981\u65b0\u5efa\u6216\u9009\u53d6\u6307\u5b9a\u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/"},(0,o.kt)("em",{parentName:"a"},"ServiceAccount")),", \u83b7\u53d6\u5176 Token \u503c, \u7136\u540e\u4f7f\u7528\u5982\u4e0b\u914d\u7f6e:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"discovery:\n  kubernetes:\n    service:\n      schema: https\n      host: # enter apiserver host value here\n      port: # enter apiServer port value here\n    client:\n      token: # enter serviceaccount token value here\n      #token_file: # enter file path here\n")),(0,o.kt)("h2",{id:"kubernetes-\u670d\u52a1\u53d1\u73b0\u6a21\u5757\u7684\u67e5\u8be2\u63a5\u53e3"},"Kubernetes \u670d\u52a1\u53d1\u73b0\u6a21\u5757\u7684\u67e5\u8be2\u63a5\u53e3"),(0,o.kt)("p",null,"Kubernetes \u670d\u52a1\u53d1\u73b0\u6a21\u5757\u9075\u5faa ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/docs/zh/latest/discovery.md"},(0,o.kt)("em",{parentName:"a"},"APISIX Discovery \u89c4\u8303"))," \u63d0\u4f9b\u67e5\u8be2\u63a5\u53e3"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u51fd\u6570:"),"\nnodes(service_name)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u8bf4\u660e:"),"\nservice_name \u5fc5\u987b\u6ee1\u8db3\u683c\u5f0f: ","[namespace]","/","[name]",":","[portName]"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"namespace: Endpoints \u6240\u5728\u7684\u547d\u540d\u7a7a\u95f4")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"name: Endpoints \u7684\u8d44\u6e90\u540d")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"portName: Endpoints \u5b9a\u4e49\u5305\u542b\u7684 portName, \u5982\u679c Endpoints \u6ca1\u6709\u5b9a\u4e49 portName, \u8bf7\u4f7f\u7528 targetPort,Port \u4ee3\u66ff"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c:"),"\n\u4ee5\u5982\u4e0b Endpoints \u4e3a\u4f8b:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Endpoints\nmetadata:\n  name: plat-dev\n  namespace: default\nsubsets:\n  - addresses:\n      - ip: "10.5.10.109"\n      - ip: "10.5.10.110"\n    ports:\n      - port: 3306\n')),(0,o.kt)("p",null,'  nodes("default/plat-dev:3306") \u8c03\u7528\u4f1a\u5f97\u5230\u5982\u4e0b\u7684\u8fd4\u56de\u503c:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},' {\n     {\n         host="10.5.10.109",\n         port= 3306,\n         weight= 50,\n     },\n     {\n         host="10.5.10.110",\n         port= 3306,\n         weight= 50,\n     },\n }\n')),(0,o.kt)("h2",{id:"qa"},"Q&A"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Q: \u4e3a\u4ec0\u4e48\u53ea\u652f\u6301\u914d\u7f6e token \u6765\u8bbf\u95ee Kubernetes APIServer \\\nA: \u4e00\u822c\u60c5\u51b5\u4e0b,\u6211\u4eec\u6709\u4e09\u79cd\u65b9\u5f0f\u53ef\u4ee5\u5b8c\u6210\u4e0e Kubernetes APIServer \u7684\u8ba4\u8bc1:"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"mTLS"),(0,o.kt)("li",{parentName:"ul"},"token"),(0,o.kt)("li",{parentName:"ul"},"basic authentication")),(0,o.kt)("p",{parentName:"blockquote"},"\u56e0\u4e3a lua-resty-http \u76ee\u524d\u4e0d\u652f\u6301 mTLS, basic authentication \u4e0d\u88ab\u63a8\u8350\u4f7f\u7528,\\\n\u6240\u4ee5\u5f53\u524d\u53ea\u5b9e\u73b0\u4e86 token \u8ba4\u8bc1\u65b9\u5f0f")),(0,o.kt)("hr",null),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Q: APISIX \u7ee7\u627f\u4e86 Nginx \u7684\u591a\u8fdb\u7a0b\u6a21\u578b, \u662f\u5426\u610f\u5473\u7740\u6bcf\u4e2a APISIX \u5de5\u4f5c\u8fdb\u7a0b\u90fd\u4f1a\u76d1\u542c Kubernetes Endpoints \\\nA: Kubernetes \u670d\u52a1\u53d1\u73b0\u6a21\u5757\u53ea\u4f7f\u7528\u7279\u6743\u8fdb\u7a0b\u76d1\u542c Kubernetes Endpoints, \u7136\u540e\u5c06\u5176\u503c\u5b58\u50a8\\\n\u5230 ngx.shared.kubernetes, \u5de5\u4f5c\u8fdb\u7a0b\u901a\u8fc7\u67e5\u8be2 ngx.shared.kubernetes \u6765\u83b7\u53d6\u7ed3\u679c")),(0,o.kt)("hr",null),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Q: \u600e\u6837\u83b7\u53d6\u6307\u5b9a ServiceAccount \u7684 Token \u503c \\\nA: \u5047\u5b9a\u4f60\u6307\u5b9a\u7684 ServiceAccount \u8d44\u6e90\u540d\u4e3a \u201ckubernetes-discovery\u201c, \u547d\u540d\u7a7a\u95f4\u4e3a \u201capisix\u201d, \u8bf7\u6309\u5982\u4e0b\u6b65\u9aa4\u83b7\u53d6\u5176 Token \u503c"),(0,o.kt)("ol",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ol"},"\u83b7\u53d6 ",(0,o.kt)("em",{parentName:"li"},"Secret")," \u8d44\u6e90\u540d: \\\n\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4, \u8f93\u51fa\u7684\u7b2c\u4e00\u5217\u5185\u5bb9\u5c31\u662f\u76ee\u6807 ",(0,o.kt)("em",{parentName:"li"},"Secret")," \u8d44\u6e90\u540d")),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n apisix get secrets | grep kubernetes-discovery\n")),(0,o.kt)("ol",{parentName:"blockquote",start:2},(0,o.kt)("li",{parentName:"ol"},"\u83b7\u53d6 Token \u503c: \\\n\u5047\u5b9a\u4f60\u83b7\u53d6\u5230\u7684 ",(0,o.kt)("em",{parentName:"li"},"Secret"),' \u8d44\u6e90\u540d\u4e3a "kubernetes-discovery-token-c64cv", \u6267\u884c\u4ee5\u4e0b\u547d\u4ee4, \u8f93\u51fa\u5185\u5bb9\u5c31\u662f\u76ee\u6807 Token \u503c')),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n apisix get secret kubernetes-discovery-token-c64cv -o jsonpath={.data.token} | base64 -d\n"))))}k.isMDXComponent=!0}}]);