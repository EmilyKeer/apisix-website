"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[91874],{54778:function(e,t,a){a.r(t);var n=a(27378),r=a(50353),c=a(73076),l=function(e){var t=e.children;return n.createElement("div",{className:"hero text--center showcase"},n.createElement("div",{className:"container"},t))},s=function(){return n.createElement("div",{className:"header"},n.createElement("div",{className:"title"},"Showcase"),n.createElement("div",{className:"tips"},"This project is used by all these folks",n.createElement("br",null),"Are you using this project?\xa0",n.createElement("a",{href:"https://github.com/apache/apisix/blob/master/powered-by.md",target:"_blank",rel:"noopener noreferrer"},n.createElement("u",null,"Add your company"))))},i=function(e){var t=e.infoLink,a=e.image,r=e.caption;return n.createElement("div",{className:"user-card"},n.createElement("a",{href:t},n.createElement("img",{className:"logo",src:a,alt:r})))},o=function(){var e=(0,r.Z)().siteConfig;if(!(e.customFields.showcases||[]).length)return null;var t=e.customFields.showcases.map((function(e){return n.createElement("div",{className:"col col--2 item",key:e.infoLink},n.createElement(i,{image:"https://raw.githubusercontent.com/apache/apisix-website/master/website/static/img/"+e.image,caption:e.caption,infoLink:e.infoLink}))}));return n.createElement("div",{className:"row content"},t)};t.default=function(){return n.createElement(c.Z,null,n.createElement(l,null,n.createElement(s,null),n.createElement(o,null)))}}}]);