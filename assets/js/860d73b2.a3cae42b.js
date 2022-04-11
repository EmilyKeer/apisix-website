"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[32610],{35318:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(27378);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=s(a),h=i,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||l;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,o=new Array(l);o[0]=u;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},78038:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return c}});var n=a(25773),i=a(30808),l=(a(27378),a(35318)),o=["components"],r={title:"Installing Apache APISIX"},p=void 0,s={unversionedId:"how-to-build",id:"how-to-build",isDocsHomePage:!1,title:"Installing Apache APISIX",description:"\x3c!--",source:"@site/docs/apisix/how-to-build.md",sourceDirName:".",slug:"/how-to-build",permalink:"/docs/apisix/next/how-to-build",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/how-to-build.md",tags:[],version:"current",frontMatter:{title:"Installing Apache APISIX"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/apisix/next/getting-started"},next:{title:"batch-requests",permalink:"/docs/apisix/next/plugins/batch-requests"}},c=[{value:"Step 1: Install Apache APISIX",id:"step-1-install-apache-apisix",children:[{value:"Installation via RPM Repository (CentOS 7)",id:"installation-via-rpm-repository-centos-7",children:[]},{value:"Installation via RPM Offline Package (CentOS 7)",id:"installation-via-rpm-offline-package-centos-7",children:[]},{value:"Installation via Docker",id:"installation-via-docker",children:[]},{value:"Installation via Helm Chart",id:"installation-via-helm-chart",children:[]},{value:"Installation via Source Release Package",id:"installation-via-source-release-package",children:[]}]},{value:"Step 2: Install etcd",id:"step-2-install-etcd",children:[]},{value:"Step 3: Manage Apache APISIX Server",id:"step-3-manage-apache-apisix-server",children:[{value:"Initializing dependencies",id:"initializing-dependencies",children:[]},{value:"Test the configuration file",id:"test-the-configuration-file",children:[]},{value:"Start Apache APISIX",id:"start-apache-apisix",children:[]},{value:"Stop Apache APISIX",id:"stop-apache-apisix",children:[]},{value:"Other operations",id:"other-operations",children:[]}]},{value:"Step 4: Run Test Cases",id:"step-4-run-test-cases",children:[{value:"Troubleshoot testing",id:"troubleshoot-testing",children:[]}]},{value:"Step 5: Update Admin API token to Secure Apache APISIX",id:"step-5-update-admin-api-token-to-secure-apache-apisix",children:[]},{value:"Step 6: Build OpenResty for Apache APISIX",id:"step-6-build-openresty-for-apache-apisix",children:[]},{value:"Step 7: Add Systemd unit file for Apache APISIX",id:"step-7-add-systemd-unit-file-for-apache-apisix",children:[]}],d={toc:c};function u(e){var t=e.components,a=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This guide walks you through how you can build and get Apache APISIX running on your environment. Please refer the ",(0,l.kt)("a",{parentName:"p",href:"/docs/apisix/next/getting-started"},"Getting Started")," guide for a quick walkthrough on running Apache APISIX."),(0,l.kt)("h2",{id:"step-1-install-apache-apisix"},"Step 1: Install Apache APISIX"),(0,l.kt)("p",null,"Apache APISIX can be installed via the ",(0,l.kt)("a",{parentName:"p",href:"#installation-via-rpm-repository-centos-7"},"RPM package"),", ",(0,l.kt)("a",{parentName:"p",href:"#installation-via-docker"},"Docker image"),", ",(0,l.kt)("a",{parentName:"p",href:"#installation-via-helm-chart"},"Helm Chart")," or the ",(0,l.kt)("a",{parentName:"p",href:"#installation-via-source-release-package"},"source release package"),". You can install via any one of these options."),(0,l.kt)("h3",{id:"installation-via-rpm-repository-centos-7"},"Installation via RPM Repository (CentOS 7)"),(0,l.kt)("p",null,"This installation method is suitable for CentOS 7."),(0,l.kt)("p",null,"If the official OpenResty repository is ",(0,l.kt)("strong",{parentName:"p"},"not installed yet"),", the following command will help you automatically install both OpenResty and Apache APISIX repositories."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo yum install -y https://repos.apiseven.com/packages/centos/apache-apisix-repo-1.0-1.noarch.rpm\n")),(0,l.kt)("p",null,"If the official OpenResty repository ",(0,l.kt)("strong",{parentName:"p"},"is installed"),", the following command will help you automatically install the repositories of Apache APISIX."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo yum-config-manager --add-repo https://repos.apiseven.com/packages/centos/apache-apisix.repo\n")),(0,l.kt)("p",null,"Run the following commands to install the repository and Apache APISIX."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# View the information of the latest apisix package\nsudo yum info -y apisix\n\n# Will show the existing apisix packages\nsudo yum --showduplicates list apisix\n\n# Will install the latest apisix package\nsudo yum install apisix\n\n# Will install a specified version (2.10.3 in this example) apisix package\nsudo yum install apisix-2.10.3-0.el7\n")),(0,l.kt)("h3",{id:"installation-via-rpm-offline-package-centos-7"},"Installation via RPM Offline Package (CentOS 7)"),(0,l.kt)("p",null,"First, download Apache APISIX offline RPM package to ",(0,l.kt)("inlineCode",{parentName:"p"},"./apisix")," folder."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo mkdir -p apisix\nsudo yum install -y https://repos.apiseven.com/packages/centos/apache-apisix-repo-1.0-1.noarch.rpm\nsudo yum clean all && yum makecache\nsudo yum install -y --downloadonly --downloaddir=./apisix apisix\n")),(0,l.kt)("p",null,"Then copy ",(0,l.kt)("inlineCode",{parentName:"p"},"./apisix")," folder to the target host and run the following command to install."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo yum install ./apisix/*.rpm\n")),(0,l.kt)("h3",{id:"installation-via-docker"},"Installation via Docker"),(0,l.kt)("p",null,"Please refer to ",(0,l.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/apache/apisix"},"Installing Apache APISIX with Docker"),"."),(0,l.kt)("h3",{id:"installation-via-helm-chart"},"Installation via Helm Chart"),(0,l.kt)("p",null,"Please refer to ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-helm-chart"},"Installing Apache APISIX with Helm Chart"),"."),(0,l.kt)("h3",{id:"installation-via-source-release-package"},"Installation via Source Release Package"),(0,l.kt)("p",null,"Note: if you want to package Apache APISIX for a specific platform, please refer to ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/api7/apisix-build-tools"},"https://github.com/api7/apisix-build-tools")," and add the support there.\nThe instruction here is only for people who want to setup their Apache APISIX development environment."),(0,l.kt)("p",null,"Follow the steps below to install Apache APISIX via the source release package."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Install dependencies"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl https://raw.githubusercontent.com/apache/apisix/master/utils/install-dependencies.sh -sL | bash -\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create a directory named ",(0,l.kt)("inlineCode",{parentName:"p"},"apisix-2.13.0"),"."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"APISIX_VERSION='2.13.0'\nmkdir apisix-${APISIX_VERSION}\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Download the Apache APISIX source release package."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://downloads.apache.org/apisix/${APISIX_VERSION}/apache-apisix-${APISIX_VERSION}-src.tgz\n")),(0,l.kt)("p",{parentName:"li"},"You can also download the Apache APISIX source release package from the ",(0,l.kt)("a",{parentName:"p",href:"https://apisix.apache.org/downloads/"},"Apache APISIX website"),". The website also provides source packages for Apache APISIX, APISIX Dashboard, and APISIX Ingress Controller.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Uncompress the Apache APISIX source release package."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"tar zxvf apache-apisix-${APISIX_VERSION}-src.tgz -C apisix-${APISIX_VERSION}\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Install the runtime dependent Lua libraries."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# Switch to the apisix-${APISIX_VERSION} directory\ncd apisix-${APISIX_VERSION}\n# Create dependencies\nmake deps\n")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Note"),": If you fail to install dependency packages using ",(0,l.kt)("inlineCode",{parentName:"p"},"make deps")," and get an error message like ",(0,l.kt)("inlineCode",{parentName:"p"},"Could not find header file for LDAP/PCRE/openssl"),", you can use this general method to solve problems."),(0,l.kt)("p",{parentName:"li"},"The general solution: ",(0,l.kt)("inlineCode",{parentName:"p"},"luarocks")," supports custom compile-time dependency directories(from this ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/luarocks/luarocks/wiki/Config-file-format"},"link"),"). Use a third-party tool to install the missing package and add its installation directory to the ",(0,l.kt)("inlineCode",{parentName:"p"},"luarocks"),"'s variables table. This a general method which can be applied to macOS, Ubuntu, CentOS or other usual operating systems, and the specific solution for macOS are given here for reference only."),(0,l.kt)("p",{parentName:"li"},"The following is the solution of macOS, which is similar to that of other operating systems:"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Install ",(0,l.kt)("inlineCode",{parentName:"p"},"openldap")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"brew install openldap"),";")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Locate installation directory with ",(0,l.kt)("inlineCode",{parentName:"p"},"brew --prefix openldap"),";")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Add the path to the project configuration file(choose one of the following two methods):"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"Solution A: You can set ",(0,l.kt)("inlineCode",{parentName:"li"},"LDAP_DIR")," with ",(0,l.kt)("inlineCode",{parentName:"li"},"luarocks config")," manually, for example ",(0,l.kt)("inlineCode",{parentName:"li"},"luarocks config variables.LDAP_DIR /opt/homebrew/cellar/openldap/2.6.1"),";"),(0,l.kt)("li",{parentName:"ol"},"Solution B: Of course, you can also choose to change the default configuration file of luarocks directly, execute the 'cat ~/.luarocks/config-5.1.lua' command, and then add the installation directory of 'openldap' to the file;"),(0,l.kt)("li",{parentName:"ol"},'Example as follows:\nvariables = {\nLDAP_DIR = "/opt/homebrew/cellar/openldap/2.6.1",\nLDAP_INCDIR = "/opt/homebrew/cellar/openldap/2.6.1/include",\n}')),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"/opt/homebrew/cellar/openldap/")," is default path to install openldap on macOS(Apple Silicon) using brew.\n",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/local/opt/openldap/")," is default path to install openldap on macOS(Intel) using brew.")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"To uninstall the Apache APISIX runtime, run:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# Purge dependencies\nmake undeps\n")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Note"),": This operation will remove the files completely."))),(0,l.kt)("h4",{id:"lts-version-installation-via-source-release-package"},"LTS version installation via Source Release Package"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://apisix.apache.org/downloads/"},"current LTS version")," of Apache APISIX is ",(0,l.kt)("inlineCode",{parentName:"p"},"2.13.0"),"."),(0,l.kt)("p",null,"To install this version, set ",(0,l.kt)("inlineCode",{parentName:"p"},"APISIX_VERSION")," in ",(0,l.kt)("a",{parentName:"p",href:"#installation-via-source-release-package"},"Installation via Source Release Package")," to this version and continue with the other steps."),(0,l.kt)("h2",{id:"step-2-install-etcd"},"Step 2: Install etcd"),(0,l.kt)("p",null,"This step is required only if you haven't installed ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/etcd-io/etcd"},"etcd"),"."),(0,l.kt)("p",null,"Run the command below to install etcd via the binary in Linux:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"ETCD_VERSION='3.4.18'\nwget https://github.com/etcd-io/etcd/releases/download/v${ETCD_VERSION}/etcd-v${ETCD_VERSION}-linux-amd64.tar.gz\ntar -xvf etcd-v${ETCD_VERSION}-linux-amd64.tar.gz && \\\n  cd etcd-v${ETCD_VERSION}-linux-amd64 && \\\n  sudo cp -a etcd etcdctl /usr/bin/\nnohup etcd >/tmp/etcd.log 2>&1 &\n")),(0,l.kt)("p",null,"Run the command below to install etcd in Mac:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"brew install etcd\n# start etcd server\nbrew services start etcd\n")),(0,l.kt)("h2",{id:"step-3-manage-apache-apisix-server"},"Step 3: Manage Apache APISIX Server"),(0,l.kt)("p",null,"In the Apache APISIX directory, you can initialize dependencies, start service and stop service with commands. Run ",(0,l.kt)("inlineCode",{parentName:"p"},"apisix help")," to get a full list of available commands."),(0,l.kt)("h3",{id:"initializing-dependencies"},"Initializing dependencies"),(0,l.kt)("p",null,"Run the following command to initialize the NGINX configuration file and etcd."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# initialize NGINX config file and etcd\napisix init\n")),(0,l.kt)("h3",{id:"test-the-configuration-file"},"Test the configuration file"),(0,l.kt)("p",null,"Run the following command to test the configuration file. APISIX will generate ",(0,l.kt)("inlineCode",{parentName:"p"},"nginx.conf")," from ",(0,l.kt)("inlineCode",{parentName:"p"},"config.yaml")," and check whether the syntax of ",(0,l.kt)("inlineCode",{parentName:"p"},"nginx.conf")," is correct."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# generate `nginx.conf` from `config.yaml` and test it\napisix test\n")),(0,l.kt)("h3",{id:"start-apache-apisix"},"Start Apache APISIX"),(0,l.kt)("p",null,"Run the following command to start Apache APISIX."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# start Apache APISIX server\napisix start\n")),(0,l.kt)("h3",{id:"stop-apache-apisix"},"Stop Apache APISIX"),(0,l.kt)("p",null,"Both ",(0,l.kt)("inlineCode",{parentName:"p"},"apisix quit")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"apisix stop")," can stop Apache APISIX. The main difference is that ",(0,l.kt)("inlineCode",{parentName:"p"},"apisix quit")," stops Apache APISIX gracefully, while ",(0,l.kt)("inlineCode",{parentName:"p"},"apisix stop")," stops Apache APISIX immediately."),(0,l.kt)("p",null,'It is recommended to use the "gracefully stop" command ',(0,l.kt)("inlineCode",{parentName:"p"},"apisix quit")," because it ensures that Apache APISIX will complete all the requests it has received before stopping. On the other hand, ",(0,l.kt)("inlineCode",{parentName:"p"},"apisix stop")," will trigger a forced shutdown and will stop Apache APISIX immediately. This will cause the pending incoming requests to not be processed before shutdown."),(0,l.kt)("p",null,"To perform a graceful shutdown, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# stop Apache APISIX server gracefully\napisix quit\n")),(0,l.kt)("p",null,"To perform a forced shutdown, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# stop Apache APISIX server immediately\napisix stop\n")),(0,l.kt)("h3",{id:"other-operations"},"Other operations"),(0,l.kt)("p",null,"You can get help and learn more about all the available operations in Apache APISIX by running the ",(0,l.kt)("inlineCode",{parentName:"p"},"help")," command as shown below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# show a list of available operations\napisix help\n")),(0,l.kt)("h2",{id:"step-4-run-test-cases"},"Step 4: Run Test Cases"),(0,l.kt)("p",null,"To run the test cases, run the steps outlined below."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://metacpan.org/pod/App::cpanminus#INSTALLATION"},"Install ",(0,l.kt)("inlineCode",{parentName:"a"},"cpanminus")),", the package manager for ",(0,l.kt)("inlineCode",{parentName:"p"},"perl"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Install the test-nginx dependencies via ",(0,l.kt)("inlineCode",{parentName:"p"},"cpanm")," as shown below."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo cpanm --notest Test::Nginx IPC::Run > build.log 2>&1 || (cat build.log && exit 1)\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Clone the latest source code locally by using the forked out version."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/openresty/test-nginx.git\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"There are two ways to run the tests.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Append the current directory to the perl module directory: ",(0,l.kt)("inlineCode",{parentName:"p"},"export PERL5LIB=.:$PERL5LIB")," and then run ",(0,l.kt)("inlineCode",{parentName:"p"},"make test")," command.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Specify the NGINX binary path by running ",(0,l.kt)("inlineCode",{parentName:"p"},"TEST_NGINX_BINARY=/usr/local/bin/openresty prove -Itest-nginx/lib -r t"),"."),(0,l.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Some of the tests rely on external services and system configuration modification. For a complete test environment build, you can refer to ",(0,l.kt)("inlineCode",{parentName:"p"},"ci/linux_openresty_common_runner.sh"),"."))))),(0,l.kt)("h3",{id:"troubleshoot-testing"},"Troubleshoot testing"),(0,l.kt)("h4",{id:"configuring-nginx-path"},"Configuring NGINX path"),(0,l.kt)("p",null,"The solution to the ",(0,l.kt)("inlineCode",{parentName:"p"},'Error unknown directive "lua_package_path" in /API_ASPIX/apisix/t/servroot/conf/nginx.conf')," error is as shown below."),(0,l.kt)("p",null,"Ensure that OpenResty is set to the default NGINX, and export the path as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"export PATH=/usr/local/openresty/nginx/sbin:$PATH"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Linux default installation path:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"export PATH=/usr/local/openresty/nginx/sbin:$PATH")))),(0,l.kt)("li",{parentName:"ul"},"MacOS default installation path via homebrew:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"export PATH=/usr/local/opt/openresty/nginx/sbin:$PATH"))))))),(0,l.kt)("h4",{id:"running-a-single-test-case"},"Running a single test case"),(0,l.kt)("p",null,"To run a specific test case, use the command below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"prove -Itest-nginx/lib -r t/plugin/openid-connect.t\n")),(0,l.kt)("p",null,"For more details on the test cases, see the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/docs/en/latest/internal/testing-framework.md"},"testing framework")," document."),(0,l.kt)("h2",{id:"step-5-update-admin-api-token-to-secure-apache-apisix"},"Step 5: Update Admin API token to Secure Apache APISIX"),(0,l.kt)("p",null,"You can modify the Admin API key to secure your Apache APISIX deployment."),(0,l.kt)("p",null,"This can be done by modifying the ",(0,l.kt)("inlineCode",{parentName:"p"},"apisix.admin_key")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," and restarting the service."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apisix:\n  # ... ...\n  admin_key\n    -\n      name: "admin"\n      key: abcdefghabcdefgh # Modify the original key to abcdefghabcdefgh\n      role: admin\n')),(0,l.kt)("p",null,"Then to access the Admin API, you can use the above key."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/apisix/admin/routes?api_key=abcdefghabcdefgh -i\n")),(0,l.kt)("p",null,"A status code of 200 in the returned result will indicate that the access was successful."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 200 OK\nDate: Fri, 28 Feb 2020 07:48:04 GMT\nContent-Type: text/plain\n... ...\n{"node":{...},"action":"get"}\n')),(0,l.kt)("p",null,"If the key you entered does not match the value of ",(0,l.kt)("inlineCode",{parentName:"p"},"apisix.admin_key")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),", a response with a status code 401 will indicate that the access failed."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/apisix/admin/routes?api_key=wrong-key -i\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 401 Unauthorized\nDate: Fri, 28 Feb 2020 08:17:58 GMT\nContent-Type: text/html\n... ...\n{"node":{...},"action":"get"}\n')),(0,l.kt)("h2",{id:"step-6-build-openresty-for-apache-apisix"},"Step 6: Build OpenResty for Apache APISIX"),(0,l.kt)("p",null,"Some features require additional NGINX modules to be introduced into OpenResty."),(0,l.kt)("p",null,"If you need these features, you can build APISIX OpenResty. You can refer to the source of ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/api7/apisix-build-tools"},"api7/apisix-build-tools")," for setting up your build environment and building APISIX OpenResty."),(0,l.kt)("h2",{id:"step-7-add-systemd-unit-file-for-apache-apisix"},"Step 7: Add Systemd unit file for Apache APISIX"),(0,l.kt)("p",null,"If you are using CentOS 7 and you installed ",(0,l.kt)("a",{parentName:"p",href:"#installation-via-rpm-repository-centos-7"},"Apache APISIX via the RPM package"),", the configuration file will already be in place and you can run the following command directly."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl start apisix\nsystemctl stop apisix\n")),(0,l.kt)("p",null,"If you installed Apache APISIX by other methods, please refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/api7/apisix-build-tools/blob/master/usr/lib/systemd/system/apisix.service"},"configuration file template")," for a modification guide and copy it to the ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/lib/systemd/system/apisix.service")," path."))}u.isMDXComponent=!0}}]);