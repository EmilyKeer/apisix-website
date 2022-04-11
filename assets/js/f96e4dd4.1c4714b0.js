"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[98911],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},70486:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var a=n(25773),r=n(30808),i=(n(27378),n(35318)),l=["components"],o={title:"authz-keycloak"},p=void 0,s={unversionedId:"plugins/authz-keycloak",id:"version-2.9/plugins/authz-keycloak",isDocsHomePage:!1,title:"authz-keycloak",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.9/plugins/authz-keycloak.md",sourceDirName:"plugins",slug:"/plugins/authz-keycloak",permalink:"/docs/apisix/2.9/plugins/authz-keycloak",editUrl:null,tags:[],version:"2.9",frontMatter:{title:"authz-keycloak"},sidebar:"version-2.9/docs",previous:{title:"basic-auth",permalink:"/docs/apisix/2.9/plugins/basic-auth"},next:{title:"wolf-rbac",permalink:"/docs/apisix/2.9/plugins/wolf-rbac"}},u=[{value:"Summary",id:"summary",children:[]},{value:"Name",id:"name",children:[]},{value:"Attributes",id:"attributes",children:[{value:"Discovery and Endpoints",id:"discovery-and-endpoints",children:[]},{value:"Client ID and Secret",id:"client-id-and-secret",children:[]},{value:"Policy Enforcement Mode",id:"policy-enforcement-mode",children:[]},{value:"Permissions",id:"permissions",children:[]},{value:"Automatic Mapping of HTTP Method to Scope",id:"automatic-mapping-of-http-method-to-scope",children:[]}]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Future Development",id:"future-development",children:[]}],d={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#name"},(0,i.kt)("strong",{parentName:"a"},"Name"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#attributes"},(0,i.kt)("strong",{parentName:"a"},"Attributes"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-to-enable"},(0,i.kt)("strong",{parentName:"a"},"How To Enable"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#test-plugin"},(0,i.kt)("strong",{parentName:"a"},"Test Plugin"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#disable-plugin"},(0,i.kt)("strong",{parentName:"a"},"Disable Plugin"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#examples"},(0,i.kt)("strong",{parentName:"a"},"Examples")))),(0,i.kt)("h2",{id:"name"},"Name"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"authz-keycloak")," is an authorization plugin to be used with the Keycloak Identity Server. Keycloak is an OAuth/OIDC and\nUMA compliant Identity Server. Although, it's developed working in conjunction with Keycloak it should work with any\nOAuth/OIDC and UMA compliant identity providers as well."),(0,i.kt)("p",null,"For more information on Keycloak, refer to ",(0,i.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/authorization_services"},"Keycloak Authorization Docs")," for more information."),(0,i.kt)("h2",{id:"attributes"},"Attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Valid"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"discovery"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://host.domain/auth/realms/foo/.well-known/uma2-configuration"},"https://host.domain/auth/realms/foo/.well-known/uma2-configuration")),(0,i.kt)("td",{parentName:"tr",align:null},"URL to discovery document for Keycloak Authorization Services.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"token_endpoint"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://host.domain/auth/realms/foo/protocol/openid-connect/token"},"https://host.domain/auth/realms/foo/protocol/openid-connect/token")),(0,i.kt)("td",{parentName:"tr",align:null},"A OAuth2-compliant Token Endpoint that supports the ",(0,i.kt)("inlineCode",{parentName:"td"},"urn:ietf:params:oauth:grant-type:uma-ticket")," grant type. Overrides value from discovery, if given.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"resource_registration_endpoint"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://host.domain/auth/realms/foo/authz/protection/resource_set"},"https://host.domain/auth/realms/foo/authz/protection/resource_set")),(0,i.kt)("td",{parentName:"tr",align:null},"A Keycloak Protection API-compliant resource registration endpoint. Overrides value from discovery, if given.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"client_id"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The client identifier of the resource server to which the client is seeking access. One of ",(0,i.kt)("inlineCode",{parentName:"td"},"client_id")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"audience")," is required.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"audience"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Legacy parameter now replaced by ",(0,i.kt)("inlineCode",{parentName:"td"},"client_id"),". Kept for backwards compatibility. One of ",(0,i.kt)("inlineCode",{parentName:"td"},"client_id")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"audience")," is required.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"client_secret"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The client secret, if required.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"grant_type"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},'"urn:ietf:params:oauth:grant-type:uma-ticket"'),(0,i.kt)("td",{parentName:"tr",align:null},'["urn:ietf:params:oauth:grant-type:uma-ticket"]'),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"policy_enforcement_mode"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},'"ENFORCING"'),(0,i.kt)("td",{parentName:"tr",align:null},'["ENFORCING", "PERMISSIVE"]'),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"permissions"),(0,i.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Static permission to request, an array of strings each representing a resources and optionally one or more scopes the client is seeking access.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"lazy_load_paths"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Dynamically resolve the request URI to resource(s) using the resource registration endpoint instead of using the static permission.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"http_method_as_scope"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Map HTTP request type to scope of same name and add to all permissions requested.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"timeout"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"3000"),(0,i.kt)("td",{parentName:"tr",align:null},"[1000, ...]"),(0,i.kt)("td",{parentName:"tr",align:null},"Timeout(ms) for the http connection with the Identity Server.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ssl_verify"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Verify if TLS certificate matches hostname.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"cache_ttl_seconds"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"86400 (equivalent to 24h)"),(0,i.kt)("td",{parentName:"tr",align:null},"positive integer >= 1"),(0,i.kt)("td",{parentName:"tr",align:null},"The maximum period in seconds up to which the plugin caches discovery documents and tokens, used by the plugin to authenticate to Keycloak.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"keepalive"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Enable HTTP keep-alive to keep connections open after use. Set to ",(0,i.kt)("inlineCode",{parentName:"td"},"true")," if you expect a lot of requests to Keycloak.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"keepalive_timeout"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"60000"),(0,i.kt)("td",{parentName:"tr",align:null},"positive integer >= 1000"),(0,i.kt)("td",{parentName:"tr",align:null},"Idle timeout after which established HTTP connections will be closed.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"keepalive_pool"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"5"),(0,i.kt)("td",{parentName:"tr",align:null},"positive integer >= 1"),(0,i.kt)("td",{parentName:"tr",align:null},"Maximum number of connections in the connection pool.")))),(0,i.kt)("h3",{id:"discovery-and-endpoints"},"Discovery and Endpoints"),(0,i.kt)("p",null,"The plugin can discover Keycloak API endpoints from a URL in the ",(0,i.kt)("inlineCode",{parentName:"p"},"discovery")," attribute that points to\nKeycloak's discovery document for Authorization Services for the respective realm. This is the recommended\noption and typically most convenient."),(0,i.kt)("p",null,"If the discovery document is available, the plugin determines the token endpoint URL from it. If present, the\n",(0,i.kt)("inlineCode",{parentName:"p"},"token_endpoint")," attribute overrides the URL."),(0,i.kt)("p",null,"Analogously, the plugin determines the registration endpoint from the discovery document. The\n",(0,i.kt)("inlineCode",{parentName:"p"},"resource_registration_endpoint")," overrides, if present."),(0,i.kt)("h3",{id:"client-id-and-secret"},"Client ID and Secret"),(0,i.kt)("p",null,"The plugin needs the ",(0,i.kt)("inlineCode",{parentName:"p"},"client_id")," attribute to identify itself when interacting with Keycloak.\nFor backwards compatibility, you can still use the ",(0,i.kt)("inlineCode",{parentName:"p"},"audience")," attribute as well instead. The plugin\nprefers ",(0,i.kt)("inlineCode",{parentName:"p"},"client_id")," over ",(0,i.kt)("inlineCode",{parentName:"p"},"audience")," if both are configured."),(0,i.kt)("p",null,"The plugin always needs the ",(0,i.kt)("inlineCode",{parentName:"p"},"client_id")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"audience")," to specify the context in which Keycloak\nshould evaluate permissions."),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"lazy_load_paths")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," then the plugin additionally needs to obtain an access token for\nitself from Keycloak. In this case, if the client access to Keycloak is confidential, the plugin\nneeds the ",(0,i.kt)("inlineCode",{parentName:"p"},"client_secret")," attribute as well."),(0,i.kt)("h3",{id:"policy-enforcement-mode"},"Policy Enforcement Mode"),(0,i.kt)("p",null,"Specifies how policies are enforced when processing authorization requests sent to the server."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Enforcing")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(default mode) Requests are denied by default even when there is no policy associated with a given resource.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Permissive")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Requests are allowed even when there is no policy associated with a given resource.")),(0,i.kt)("h3",{id:"permissions"},"Permissions"),(0,i.kt)("p",null,"When handling an incoming request, the plugin can determine the permissions to check with Keycloak either\nstatically, or dynamically from properties of the request."),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"lazy_load_paths")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", the plugin takes the permissions from the ",(0,i.kt)("inlineCode",{parentName:"p"},"permissions")," attribute. Each entry\nneeds to be formatted as expected by the token endpoint's ",(0,i.kt)("inlineCode",{parentName:"p"},"permission")," parameter;\nsee ",(0,i.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/authorization_services/index.html#_service_obtaining_permissions"},"https://www.keycloak.org/docs/latest/authorization_services/index.html#_service_obtaining_permissions"),".\nNote that a valid permission can be a single resource, or a resource paired with one or more scopes."),(0,i.kt)("p",null,"if ",(0,i.kt)("inlineCode",{parentName:"p"},"lazy_load_paths")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", the plugin resolves the request URI to one or more resources, as configured\nin Keycloak. It uses the resource registration endpoint to do so. The plugin uses the resolved resources\nas the permissions to check."),(0,i.kt)("p",null,"Note that this requires that the plugin can obtain a separate access token for itself from the token endpoint.\nTherefore, in the respective client settings in Keycloak, make sure to set the ",(0,i.kt)("inlineCode",{parentName:"p"},"Service Accounts Enabled"),"\noption. Also make sure that the issued access token contains the ",(0,i.kt)("inlineCode",{parentName:"p"},"resource_access")," claim with the\n",(0,i.kt)("inlineCode",{parentName:"p"},"uma_protection")," role. Otherwise, plugin may be unable to query resources through the Protection API."),(0,i.kt)("h3",{id:"automatic-mapping-of-http-method-to-scope"},"Automatic Mapping of HTTP Method to Scope"),(0,i.kt)("p",null,"This option is often used together with ",(0,i.kt)("inlineCode",{parentName:"p"},"lazy_load_paths"),", but can also be used with a static permission list."),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"http_method_as_scope")," attribute is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", the plugin maps the request's HTTP method to a scope\nof the same name. The scope is then added to every permission to check."),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"lazy_load_paths")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", the plugin adds the mapped scope to any of the static permissions configured\nin the ",(0,i.kt)("inlineCode",{parentName:"p"},"permissions")," attribute, even if they contain one or more scopes already."),(0,i.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,i.kt)("p",null,"Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"route")," and enable the ",(0,i.kt)("inlineCode",{parentName:"p"},"authz-keycloak")," plugin on the route:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/5 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/get",\n    "plugins": {\n        "authz-keycloak": {\n            "token_endpoint": "http://127.0.0.1:8090/auth/realms/{client_id}/protocol/openid-connect/token",\n            "permissions": ["resource name#scope name"],\n            "audience": "Client ID"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:8080": 1\n        }\n    }\n}\'\n')),(0,i.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/get -H 'Authorization: Bearer {JWT Token}'\n")),(0,i.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,i.kt)("p",null,"Remove the corresponding json configuration in the plugin configuration to disable the ",(0,i.kt)("inlineCode",{parentName:"p"},"authz-keycloak"),".\nAPISIX plugins are hot-reloaded, therefore no need to restart APISIX."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/5 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/get",\n    "plugins": {\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:8080": 1\n        }\n    }\n}\'\n')),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Checkout the unit test for of the authz-keycloak.t to understand how the authorization policies can be integrated into your\nAPI workflows. Run the following docker image and visit ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:8090")," to view the associated policies for the unit tests."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=123456 -p 8090:8080 sshniro/keycloak-apisix\n")),(0,i.kt)("p",null,"The following image shows how the policies are configures in the Keycloak server."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.9/docs/assets/images/plugin/authz-keycloak.png",alt:"Keycloak policy design"})),(0,i.kt)("h2",{id:"future-development"},"Future Development"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Currently the ",(0,i.kt)("inlineCode",{parentName:"p"},"authz-plugin")," requires to define the resource name and required scopes in order to enforce policies for the routes.\nHowever, Keycloak's official adapters (Java, JS) also provides path matching by querying Keycloak paths dynamically, and\nlazy loading the paths to identity resources. Future version on authz-plugin will support this functionality.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Support to read scope and configurations from the Keycloak JSON File"))))}c.isMDXComponent=!0}}]);