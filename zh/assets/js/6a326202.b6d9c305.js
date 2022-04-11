"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[83611],{35318:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return m}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},o=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(y,s(s({ref:t},o),{},{components:n})):r.createElement(y,s({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},29279:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return o}});var r=n(25773),a=n(30808),i=(n(27378),n(35318)),s=["components"],l={title:"TLS \u53cc\u5411\u8ba4\u8bc1"},p=void 0,c={unversionedId:"mtls",id:"version-2.8/mtls",isDocsHomePage:!1,title:"TLS \u53cc\u5411\u8ba4\u8bc1",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.8/mtls.md",sourceDirName:".",slug:"/mtls",permalink:"/zh/docs/apisix/2.8/mtls",editUrl:null,tags:[],version:"2.8",frontMatter:{title:"TLS \u53cc\u5411\u8ba4\u8bc1"},sidebar:"version-2.8/docs",previous:{title:"Running APISIX in AWS with AWS CDK",permalink:"/zh/docs/apisix/2.8/aws"},next:{title:"\u8c03\u8bd5\u529f\u80fd",permalink:"/zh/docs/apisix/2.8/debug-function"}},o=[{value:"\u4fdd\u62a4 Admin API",id:"\u4fdd\u62a4-admin-api",children:[{value:"\u4e3a\u4ec0\u4e48\u4f7f\u7528",id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528",children:[]},{value:"\u5982\u4f55\u914d\u7f6e",id:"\u5982\u4f55\u914d\u7f6e",children:[]},{value:"\u5ba2\u6237\u7aef\u5982\u4f55\u8c03\u7528",id:"\u5ba2\u6237\u7aef\u5982\u4f55\u8c03\u7528",children:[]}]},{value:"\u4fdd\u62a4 ETCD",id:"\u4fdd\u62a4-etcd",children:[{value:"\u5982\u4f55\u914d\u7f6e",id:"\u5982\u4f55\u914d\u7f6e-1",children:[]}]},{value:"\u4fdd\u62a4\u8def\u7531",id:"\u4fdd\u62a4\u8def\u7531",children:[{value:"\u4e3a\u4ec0\u4e48\u4f7f\u7528",id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528-1",children:[]},{value:"\u5982\u4f55\u914d\u7f6e",id:"\u5982\u4f55\u914d\u7f6e-2",children:[]}]},{value:"APISIX \u4e0e\u4e0a\u6e38\u95f4\u7684\u53cc\u5411\u8ba4\u8bc1",id:"apisix-\u4e0e\u4e0a\u6e38\u95f4\u7684\u53cc\u5411\u8ba4\u8bc1",children:[{value:"\u4e3a\u4ec0\u4e48\u4f7f\u7528",id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528-2",children:[]},{value:"\u5982\u4f55\u914d\u7f6e",id:"\u5982\u4f55\u914d\u7f6e-3",children:[]}]}],d={toc:o};function u(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u4fdd\u62a4-admin-api"},"\u4fdd\u62a4 Admin API"),(0,i.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528"},"\u4e3a\u4ec0\u4e48\u4f7f\u7528"),(0,i.kt)("p",null,"\u53cc\u5411\u8ba4\u8bc1\u63d0\u4f9b\u4e86\u4e00\u79cd\u66f4\u597d\u7684\u65b9\u6cd5\u6765\u963b\u6b62\u672a\u7ecf\u6388\u6743\u7684\u5bf9 APISIX Admin API \u7684\u8bbf\u95ee\u3002"),(0,i.kt)("p",null,"\u5ba2\u6237\u7aef\u9700\u8981\u5411\u670d\u52a1\u5668\u63d0\u4f9b\u8bc1\u4e66\uff0c\u670d\u52a1\u5668\u5c06\u68c0\u67e5\u8be5\u5ba2\u6237\u7aef\u8bc1\u4e66\u662f\u5426\u7531\u53d7\u4fe1\u7684 CA \u7b7e\u540d\uff0c\u5e76\u51b3\u5b9a\u662f\u5426\u54cd\u5e94\u5176\u8bf7\u6c42\u3002"),(0,i.kt)("h3",{id:"\u5982\u4f55\u914d\u7f6e"},"\u5982\u4f55\u914d\u7f6e"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u751f\u6210\u81ea\u7b7e\u8bc1\u4e66\u5bf9\uff0c\u5305\u62ec CA\u3001server\u3001client \u8bc1\u4e66\u5bf9\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u4fee\u6539 ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u4e2d\u7684\u914d\u7f6e\u9879\uff1a"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'  port_admin: 9180\n  https_admin: true\n\n  admin_api_mtls:\n    admin_ssl_ca_cert: "/data/certs/mtls_ca.crt"              # Path of your self-signed ca cert.\n    admin_ssl_cert: "/data/certs/mtls_server.crt"             # Path of your self-signed server side cert.\n    admin_ssl_cert_key: "/data/certs/mtls_server.key"         # Path of your self-signed server side key.\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"\u6267\u884c\u547d\u4ee4\uff0c\u4f7f\u914d\u7f6e\u751f\u6548\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"apisix init\napisix reload\n")),(0,i.kt)("h3",{id:"\u5ba2\u6237\u7aef\u5982\u4f55\u8c03\u7528"},"\u5ba2\u6237\u7aef\u5982\u4f55\u8c03\u7528"),(0,i.kt)("p",null,"\u9700\u8981\u5c06\u8bc1\u4e66\u6587\u4ef6\u7684\u8def\u5f84\u4e0e\u57df\u540d\u6309\u5b9e\u9645\u60c5\u51b5\u66ff\u6362\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1a\u63d0\u4f9b\u7684 CA \u8bc1\u4e66\u9700\u8981\u4e0e\u670d\u52a1\u7aef\u7684\u76f8\u540c\u3002*")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl --cacert /data/certs/mtls_ca.crt --key /data/certs/mtls_client.key --cert /data/certs/mtls_client.crt  https://admin.apisix.dev:9180/apisix/admin/routes -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1'\n")),(0,i.kt)("h2",{id:"\u4fdd\u62a4-etcd"},"\u4fdd\u62a4 ETCD"),(0,i.kt)("h3",{id:"\u5982\u4f55\u914d\u7f6e-1"},"\u5982\u4f55\u914d\u7f6e"),(0,i.kt)("p",null,"\u4f60\u9700\u8981\u6784\u5efa ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/apisix/2.8/how-to-build#%E6%AD%A5%E9%AA%A46-%E4%B8%BA-Apache-APISIX-%E6%9E%84%E5%BB%BA-OpenResty"},"APISIX-Openresty"),"\uff0c\u5e76\u4e14\u9700\u8981\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u8bbe\u5b9a ",(0,i.kt)("inlineCode",{parentName:"p"},"etcd.tls")," \u6765\u4f7f ETCD \u7684\u53cc\u5411\u8ba4\u8bc1\u529f\u80fd\u6b63\u5e38\u5de5\u4f5c\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"etcd:\n  tls:\n    cert: /data/certs/etcd_client.pem       # path of certificate used by the etcd client\n    key: /data/certs/etcd_client.key        # path of key used by the etcd client\n")),(0,i.kt)("h2",{id:"\u4fdd\u62a4\u8def\u7531"},"\u4fdd\u62a4\u8def\u7531"),(0,i.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528-1"},"\u4e3a\u4ec0\u4e48\u4f7f\u7528"),(0,i.kt)("p",null,"\u53cc\u5411\u8ba4\u8bc1\u662f\u4e00\u79cd\u5bc6\u7801\u5b66\u5b89\u5168\u7684\u9a8c\u8bc1\u5ba2\u6237\u7aef\u8eab\u4efd\u7684\u624b\u6bb5\u3002\u5f53\u4f60\u9700\u8981\u52a0\u5bc6\u5e76\u4fdd\u62a4\u6d41\u91cf\u7684\u53cc\u5411\u5b89\u5168\u65f6\u5f88\u6709\u7528\u3002"),(0,i.kt)("h3",{id:"\u5982\u4f55\u914d\u7f6e-2"},"\u5982\u4f55\u914d\u7f6e"),(0,i.kt)("p",null,"\u5728\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"ssl")," \u8d44\u6e90\u65f6\uff0c\u540c\u65f6\u9700\u8981\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"client.ca")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"client.depth")," \u53c2\u6570\uff0c\u5206\u522b\u4ee3\u8868\u4e3a\u5ba2\u6237\u7aef\u8bc1\u4e66\u7b7e\u540d\u7684 CA \u5217\u8868\uff0c\u548c\u8bc1\u4e66\u94fe\u7684\u6700\u5927\u6df1\u5ea6\u3002\u53ef\u53c2\u8003\uff1a",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/apisix/2.8/admin-api#ssl"},"SSL API \u6587\u6863"),"\u3002"),(0,i.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u53ef\u7528\u4e8e\u751f\u6210\u5e26\u53cc\u5411\u8ba4\u8bc1\u914d\u7f6e\u7684 SSL \u8d44\u6e90\u7684 Python \u811a\u672c\u793a\u4f8b\u3002\u5982\u679c\u9700\u8981\uff0c\u53ef\u4fee\u6539 API \u5730\u5740\u3001API Key \u548c SSL \u8d44\u6e90\u7684 ID\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'#!/usr/bin/env python\n# coding: utf-8\n# \u4fdd\u5b58\u8be5\u6587\u4ef6\u4e3a ssl.py\nimport sys\n# sudo pip install requests\nimport requests\n\nif len(sys.argv) <= 4:\n    print("bad argument")\n    sys.exit(1)\nwith open(sys.argv[1]) as f:\n    cert = f.read()\nwith open(sys.argv[2]) as f:\n    key = f.read()\nsni = sys.argv[3]\napi_key = "edd1c9f034335f136f87ad84b625c8f1" # Change it\n\nreqParam = {\n    "cert": cert,\n    "key": key,\n    "snis": [sni],\n}\nif len(sys.argv) >= 5:\n    print("Setting mTLS")\n    reqParam["client"] = {}\n    with open(sys.argv[4]) as f:\n        clientCert = f.read()\n        reqParam["client"]["ca"] = clientCert\n    if len(sys.argv) >= 6:\n        reqParam["client"]["depth"] = int(sys.argv[5])\nresp = requests.put("http://127.0.0.1:9080/apisix/admin/ssl/1", json=reqParam, headers={\n    "X-API-KEY": api_key,\n})\nprint(resp.status_code)\nprint(resp.text)\n')),(0,i.kt)("p",null,"\u4f7f\u7528\u4e0a\u8ff0 Python \u811a\u672c\u521b\u5efa SSL \u8d44\u6e90\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./ssl.py ./server.pem ./server.key 'mtls.test.com' ./client_ca.pem 10\n\n# \u6d4b\u8bd5\ncurl --resolve 'mtls.test.com:<APISIX_HTTPS_PORT>:<APISIX_URL>' \"https://<APISIX_URL>:<APISIX_HTTPS_PORT>/hello\" -k --cert ./client.pem --key ./client.key\n")),(0,i.kt)("p",null,"\u6ce8\u610f\uff0c\u6d4b\u8bd5\u65f6\u4f7f\u7528\u7684\u57df\u540d\u9700\u8981\u7b26\u5408\u8bc1\u4e66\u7684\u53c2\u6570\u3002"),(0,i.kt)("h2",{id:"apisix-\u4e0e\u4e0a\u6e38\u95f4\u7684\u53cc\u5411\u8ba4\u8bc1"},"APISIX \u4e0e\u4e0a\u6e38\u95f4\u7684\u53cc\u5411\u8ba4\u8bc1"),(0,i.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528-2"},"\u4e3a\u4ec0\u4e48\u4f7f\u7528"),(0,i.kt)("p",null,"\u6709\u65f6\u5019\u4e0a\u6e38\u7684\u670d\u52a1\u542f\u7528\u4e86\u53cc\u5411\u8ba4\u8bc1\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cAPISIX \u4f5c\u4e3a\u4e0a\u6e38\u670d\u52a1\u7684\u5ba2\u6237\u7aef\uff0c\u9700\u8981\u63d0\u4f9b\u5ba2\u6237\u7aef\u8bc1\u4e66\u6765\u6b63\u5e38\u4e0e\u5176\u8fdb\u884c\u901a\u4fe1\u3002"),(0,i.kt)("h3",{id:"\u5982\u4f55\u914d\u7f6e-3"},"\u5982\u4f55\u914d\u7f6e"),(0,i.kt)("p",null,"\u5728\u914d\u7f6e upstream \u8d44\u6e90\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528\u53c2\u6570 ",(0,i.kt)("inlineCode",{parentName:"p"},"tls.client_cert")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"tls.client_key")," \u6765\u914d\u7f6e APISIX \u7528\u4e8e\u4e0e\u4e0a\u6e38\u8fdb\u884c\u901a\u8baf\u65f6\u4f7f\u7528\u7684\u8bc1\u4e66\u3002\u53ef\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/apisix/2.8/admin-api#upstream"},"Upstream API \u6587\u6863"),"\u3002"),(0,i.kt)("p",null,"\u8be5\u529f\u80fd\u9700\u8981 APISIX \u8fd0\u884c\u5728 ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/apisix/2.8/how-to-build#%E6%AD%A5%E9%AA%A46-%E4%B8%BA-Apache-APISIX-%E6%9E%84%E5%BB%BA-OpenResty"},"APISIX-OpenResty")," \u4e0a\u3002"),(0,i.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u4e0e\u914d\u7f6e SSL \u65f6\u76f8\u4f3c\u7684 Python \u811a\u672c\uff0c\u53ef\u4e3a\u4e00\u4e2a\u5df2\u5b58\u5728\u7684 upstream \u8d44\u6e90\u914d\u7f6e\u53cc\u5411\u8ba4\u8bc1\u3002\u5982\u679c\u9700\u8981\uff0c\u53ef\u4fee\u6539 API \u5730\u5740\u548cAPI Key\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'#!/usr/bin/env python\n# coding: utf-8\n# \u4fdd\u5b58\u8be5\u6587\u4ef6\u4e3a patch_upstream_mtls.py\nimport sys\n# sudo pip install requests\nimport requests\n\nif len(sys.argv) <= 4:\n    print("bad argument")\n    sys.exit(1)\nwith open(sys.argv[2]) as f:\n    cert = f.read()\nwith open(sys.argv[3]) as f:\n    key = f.read()\nid = sys.argv[1]\napi_key = "edd1c9f034335f136f87ad84b625c8f1" # Change it\n\nreqParam = {\n    "tls": {\n        "client_cert": cert,\n        "client_key": key,\n    },\n}\n\nresp = requests.patch("http://127.0.0.1:9080/apisix/admin/upstreams/"+id, json=reqParam, headers={\n    "X-API-KEY": api_key,\n})\nprint(resp.status_code)\nprint(resp.text)\n')),(0,i.kt)("p",null,"\u4e3a ID \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"testmtls")," \u7684 upstream \u914d\u7f6e\u53cc\u5411\u8ba4\u8bc1\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./patch_upstream_mtls.py testmtls ./client.pem ./client.key\n")))}u.isMDXComponent=!0}}]);