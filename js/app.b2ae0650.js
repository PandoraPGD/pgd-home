(function(t){function e(e){for(var a,o,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},s=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1:function(t,e){},10:function(t,e){},11:function(t,e){},12:function(t,e){},13:function(t,e){},14:function(t,e){},15:function(t,e){},16:function(t,e){},17:function(t,e){},18:function(t,e){},19:function(t,e){},"1e4c":function(t,e,n){},2:function(t,e){},20:function(t,e){},21:function(t,e){},3:function(t,e){},4:function(t,e){},4711:function(t,e,n){},"4d1c":function(t,e,n){},5:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("ffc1"),n("551c");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view",{attrs:{name:"header"}}),n("main",[n("fade-transition",{attrs:{origin:"center",mode:"out-in",duration:250}},[n("router-view")],1)],1),n("router-view",{attrs:{name:"footer"}})],1)},s=[],o=n("7c76"),r={components:{FadeTransition:o["a"]}},c=r,l=n("2877"),u=Object(l["a"])(c,i,s,!1,null,null,null),d=u.exports,p=n("8c4f"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header-global"},[a("base-nav",{staticClass:"navbar-main",attrs:{transparent:"",type:"",effect:"light",expand:""},scopedSlots:t._u([{key:"content-header",fn:function(t){var e=t.closeMenu;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-6 collapse-brand"},[a("img",{attrs:{src:n("8842")}})]),a("div",{staticClass:"col-6 collapse-close"},[a("close-button",{on:{click:e}})],1)])}}])},[a("router-link",{staticClass:"navbar-brand mr-lg-5",attrs:{slot:"brand",to:"/"},slot:"brand"},[a("img",{attrs:{src:n("8842"),alt:"logo"}}),a("span",{staticClass:"pandora"},[t._v("Pandora")])]),a("ul",{staticClass:"navbar-nav navbar-nav-menu navbar-nav-hover align-items-lg-center"},[a("router-link",{attrs:{to:"/"}},[a("div",{staticClass:"nav-item-menu",attrs:{tag:"li"}},[t._v("About")])]),a("router-link",{attrs:{to:"/passport"}},[a("div",{staticClass:"nav-item-menu",attrs:{tag:"li"}},[t._v("Passport")])]),t.account?a("div",{staticClass:"connect-btn2"},[a("span",{on:{click:function(e){return t.connect()}}},[t._v(t._s(t.subAddress(t.account)))])]):a("div",{staticClass:"connect-btn2"},[a("span",{on:{click:function(e){return t.connect()}}},[t._v("Connect Wallet")])])],1),a("ul",{staticClass:"navbar-nav align-items-lg-center  ml-lg-auto"},[t.account?a("li",{staticClass:"nav-item d-none d-lg-block ml-lg-4 connect-btn"},[a("span",{staticClass:"btn-inner--icon"},[a("i",{staticClass:"fa fa-wallet "})]),a("span",{staticClass:"nav-link-inner--text"},[t._v(t._s(t.subAddress(t.account)))])]):a("li",{staticClass:"nav-item d-none d-lg-block ml-lg-4 connect-btn",on:{click:function(e){return t.connect()}}},[a("span",{staticClass:"btn-inner--icon"},[a("i",{staticClass:"fa fa-wallet "})]),a("span",{staticClass:"nav-link-inner--text"},[t._v("Connect Wallet")])])])],1)],1)},h=[],g=(n("8e6e"),n("ac6a"),n("cadf"),n("456d"),n("bd86")),v=(n("96cf"),n("3b8d")),m=function(){var t,e,n=this,a=n.$createElement,i=n._self._c||a;return i("nav",{staticClass:"navbar",class:[{"navbar-expand-lg":n.expand},(t={},t["navbar-"+n.effect]=n.effect,t),{"navbar-transparent":n.transparent},(e={},e["bg-"+n.type]=n.type,e),{rounded:n.round}]},[i("div",{staticClass:"container"},[n._t("container-pre"),n._t("brand",(function(){return[i("a",{staticClass:"navbar-brand",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),n.onTitleClick.apply(null,arguments)}}},[n._v("\n                "+n._s(n.title)+"\n            ")])]})),i("navbar-toggle-button",{attrs:{toggled:n.toggled,target:n.contentId},nativeOn:{click:function(t){t.stopPropagation(),n.toggled=!n.toggled}}}),n._t("container-after"),i("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:n.closeMenu,expression:"closeMenu"}],staticClass:"collapse navbar-collapse",class:{show:n.toggled},attrs:{id:n.contentId}},[i("div",{staticClass:"navbar-collapse-header"},[n._t("content-header",null,{closeMenu:n.closeMenu})],2),n._t("default",null,{closeMenu:n.closeMenu})],2)],2)])},b=[],y=(n("6b54"),n("c5f6"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":t.target,"aria-controls":t.target,"aria-expanded":t.toggled,"aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}),_=[],w={props:{target:{type:[String,Number],description:"Button target element"},toggled:{type:Boolean,default:!1,description:"Whether button is toggled"}}},C=w,O=Object(l["a"])(C,y,_,!1,null,null,null),P=O.exports,k={name:"base-nav",components:{FadeTransition:o["a"],NavbarToggleButton:P},props:{type:{type:String,default:"primary",description:"Navbar type (e.g default, primary etc)"},title:{type:String,default:"",description:"Title of navbar"},contentId:{type:[String,Number],default:Math.random().toString(),description:"Explicit id for the menu. By default it's a generated random number"},effect:{type:String,default:"dark",description:"Effect of the navbar (light|dark)"},round:{type:Boolean,default:!1,description:"Whether nav has rounded corners"},transparent:{type:Boolean,default:!1,description:"Whether navbar is transparent"},expand:{type:Boolean,default:!1,description:"Whether navbar should contain `navbar-expand-lg` class"}},data:function(){return{toggled:!1}},methods:{onTitleClick:function(t){this.$emit("title-click",t)},closeMenu:function(){this.toggled=!1}}},x=k,j=Object(l["a"])(x,m,b,!1,null,null,null),S=j.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeDropDown,expression:"closeDropDown"}],tag:"component",staticClass:"dropdown",class:[{show:t.isOpen},{dropdown:"down"===t.direction},{dropup:"up"===t.direction}],attrs:{"aria-haspopup":"true","aria-expanded":t.isOpen},on:{click:t.toggleDropDown}},[t._t("title",(function(){return[n("a",{staticClass:"dropdown-toggle nav-link",class:{"no-caret":t.hideArrow},attrs:{"data-toggle":"dropdown"}},[n("i",{class:t.icon}),n("span",{staticClass:"no-icon"},[t._v(t._s(t.title))])])]})),n("ul",{staticClass:"dropdown-menu",class:[{"dropdown-menu-right":"right"===t.position},{show:t.isOpen},t.menuClasses]},[t._t("default")],2)],2)},A=[],B={name:"base-dropdown",props:{direction:{type:String,default:"down"},title:{type:String,description:"Dropdown title"},icon:{type:String,description:"Icon for dropdown title"},position:{type:String,description:"Position of dropdown menu (e.g right|left)"},menuClasses:{type:[String,Object],description:"Dropdown menu classes"},hideArrow:{type:Boolean,description:"Whether dropdown arrow should be hidden"},tag:{type:String,default:"li",description:"Dropdown html tag (e.g div, li etc)"}},data:function(){return{isOpen:!1}},methods:{toggleDropDown:function(){this.isOpen=!this.isOpen,this.$emit("change",this.isOpen)},closeDropDown:function(){this.isOpen=!1,this.$emit("change",this.isOpen)}}},E=B,D=(n("f364"),Object(l["a"])(E,$,A,!1,null,null,null)),T=D.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#"+t.target,"aria-controls":t.target,"aria-expanded":t.expanded,"aria-label":"Toggle navigation"},on:{click:t.handleClick}},[n("span"),n("span")])},I=[],W={name:"close-button",props:{target:{type:[String,Number],description:"Close button target element"},expanded:{type:Boolean,description:"Whether button is expanded (aria-expanded attribute)"}},methods:{handleClick:function(t){this.$emit("click",t)}}},z=W,M=Object(l["a"])(z,N,I,!1,null,null,null),L=M.exports,R=n("2f62");function F(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function q(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?F(Object(n),!0).forEach((function(e){Object(g["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var U=n("99e5"),G={components:{BaseNav:S,CloseButton:L,BaseDropdown:T},mounted:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),computed:{account:function(){return this.$store.state.web3.account}},methods:q(q({},Object(R["b"])(["updateAccount"])),{},{connect:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(){var e,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("connect"),e=this,!window.ethereum){t.next=12;break}return t.next=5,window.ethereum.request({method:"eth_requestAccounts"});case 5:return n=t.sent,window.web3=new U(window.ethereum),a=n.length>0?n[0]:null,console.log(a),this.updateAccount(a),console.log(e.$store.state.account),t.abrupt("return",!0);case 12:return t.abrupt("return",!1);case 13:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),subAddress:function(t){return t.slice(0,6)+"..."+t.substr(-6,6)}})},J=G,V=(n("c653"),Object(l["a"])(J,f,h,!1,null,null,null)),Y=V.exports,H=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},K=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer section"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center my-footer"},[a("div",{staticClass:"col-lg-7"},[a("div",{staticClass:"my-1"},[a("h3",[t._v("Join Us ")]),a("div",[a("a",{attrs:{href:"https://twitter.com/PandoraLandPGD",target:"_blank"}},[a("img",{attrs:{src:n("af83")}})]),a("a",{attrs:{href:"https://discord.gg/zpb9kJ8uTu",target:"_blank"}},[a("img",{attrs:{src:n("5a83")}})])])])])])])])}],Q={name:"app-footer",data:function(){return{year:(new Date).getFullYear()}}},X=Q,Z=(n("841c"),Object(l["a"])(X,H,K,!1,null,null,null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section section-shaped section-lg my-0"},[t._m(0),n("div",{staticClass:"container pt-lg-md"},[t._m(1),n("div",{staticClass:"row justify-content-center content-title"},[t._v("\n            The Metaverse Nation\n        ")]),n("div",{staticClass:"row justify-content-center"},[t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),n("div",{staticClass:"col-lg-7"},[n("div",{staticClass:"contribute"},[n("button",{on:{click:function(e){return t.open()}}},[t._v("Contribute in Juicebox")])])])])])])},nt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shape shape-style-1 bg-gradient-custom"},[n("span"),n("span"),n("span"),n("span"),n("span"),n("span"),n("span"),n("span")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-center content-title"},[a("img",{attrs:{width:"80px",height:"80xp",src:n("8842")}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-7"},[n("div",{staticClass:"my-1"},[n("h3",[t._v("Philosophy")]),n("p",[t._v("According to the myth provided in "),n("span",{staticStyle:{"font-style":"oblique"}},[t._v("Works and Days")]),t._v(', the meaning of Pandora\'s name is "all-gifted". Vase paintings and literary texts give evidence of Pandora as a mother earth figure who was worshipped by some Greeks.')]),n("p",[t._v("Pandora is the first independent nation in the metaverse, we will build a fully-fledged government DAO to run the nation.")]),n("p",[t._v("Pandora is committed to bringing peace to humans. We are serving people no matter who you are, where are you come from. In Pandora, we are all just Earthlings!")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-7"},[n("div",{staticClass:"my-1"},[n("h3",[t._v("Code")]),n("p",[t._v("Code is Law.")]),n("p",[t._v("In the real world, geopolitical squabbles always have a great influence on human beings. Lots of conflicts of countries on earth, this will deeply affect the peaceful development of mankind.")]),n("p",[t._v("The smart contract code replaces legal codes and is sufficient for controlling what we do. This is a fairer solution. It's also an experiment code.")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-7"},[n("div",{staticClass:"my-1"},[n("h3",[t._v("Land")]),n("p",[t._v("Pandora will build a virtual Metaverse where the citizen and the non-citizens can play, build, invest...  ")]),n("p",[t._v("The Land is divided into two parts, the private areas are reserved for the construction of Pandora's infrastructure, the public areas will be allowed for purchase.")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-7"},[n("div",{staticClass:"my-1"},[n("h3",[t._v("Currency")]),n("p",[t._v("Token $PAN is the official currency in the Pandora ecosystem. You can use $PAN to purchase the service, invest, participate in governance in Pandora.")]),n("p",[t._v("You can contribute this project and get your $PAN.")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-7"},[n("div",{staticClass:"my-1"},[n("h3",[t._v("Passport")]),n("p",[t._v("An NFT passport will be built for the Pandora citizen. The passport is the only identity of Pandora's legal citizen, also the only DID for access to the Pandora private area. Anyway, the public area was allowed to access by non-citizens and the $PAN token holders.")]),n("p",[t._v("More details will be announced soon!")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-7"},[n("div",{staticClass:"my-1"},[n("h3",[t._v("PGD")]),n("p",[t._v("Pandora Government DAO(PGD), fully controlled by the $PAN token and Pandora passport holders. The private area was allowed to access by the Pandora citizen, the public area was allowed to access by all the $PAN holders, Once the infrastructure construction is completed, holders of $PAN can create and vote on proposals.")]),n("p",[t._v("Welcome to Pandora Land! Peace!")])])])}],at={name:"home",components:{},methods:{open:function(){window.open("https://juicebox.money/#/p/pandoraland","_blank")}}},it=at,st=(n("cccb"),Object(l["a"])(it,et,nt,!1,null,null,null)),ot=st.exports,rt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ct=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section section-shaped section-lg my-0"},[n("div",{staticClass:"shape shape-style-1 bg-gradient-custom"}),n("div",{staticClass:"container pt-lg-md"},[n("div",{staticClass:"row justify-content-center content-title"},[t._v("\n            The Pandora Passport\n        ")]),n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-lg-7 box"},[n("div",{staticClass:"my-1"},[n("h3",[t._v("NFT Passport")]),n("p",[t._v("The NFT passport is a unique and programmable identity for Pandora citizens. When you sold it to another, your information will be changed by the new owner. We will announce more details soon!")])]),n("div",{staticClass:"contribute"},[n("button",[t._v("Drop Soon")])])])])])])}],lt={name:"home",components:{},methods:{open:function(){window.open("https://juicebox.money/#/p/pandoraland","_blank")}}},ut=lt,dt=(n("599e"),Object(l["a"])(ut,rt,ct,!1,null,null,null)),pt=dt.exports;a["a"].use(p["a"]);var ft=new p["a"]({linkExactActiveClass:"active",routes:[{path:"/",name:"home",components:{header:Y,default:ot,footer:tt}},{path:"/passport",name:"passport",components:{header:Y,default:pt,footer:tt}}],scrollBehavior:function(t){return t.hash?{selector:t.hash}:{x:0,y:0}}}),ht=(n("4d1c"),n("d5a0"),n("a4d4"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{tag:"component",staticClass:"badge",class:["badge-"+t.type,t.rounded?"badge-pill":"",t.circle&&"badge-circle"]},[t._t("default",(function(){return[t.icon?n("i",{class:t.icon}):t._e()]}))],2)}),gt=[],vt={name:"badge",props:{tag:{type:String,default:"span",description:"Html tag to use for the badge."},rounded:{type:Boolean,default:!1,description:"Whether badge is of pill type"},circle:{type:Boolean,default:!1,description:"Whether badge is circle"},icon:{type:String,default:"",description:"Icon name. Will be overwritten by slot if slot is used"},type:{type:String,default:"default",description:"Badge type (primary|info|danger|default|warning|success)"}}},mt=vt,bt=Object(l["a"])(mt,ht,gt,!1,null,null,null),yt=bt.exports,_t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("fade-transition",[t.visible?n("div",{staticClass:"alert",class:["alert-"+t.type,{"alert-dismissible":t.dismissible}],attrs:{role:"alert"}},[t.dismissible?[t._t("default",(function(){return[t.icon?n("span",{staticClass:"alert-inner--icon"},[n("i",{class:t.icon})]):t._e(),t.$slots.text?n("span",{staticClass:"alert-inner--text"},[t._t("text")],2):t._e()]})),t._t("dismiss-icon",(function(){return[n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"},on:{click:t.dismissAlert}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]}))]:t._t("default",(function(){return[t.icon?n("span",{staticClass:"alert-inner--icon"},[n("i",{class:t.icon})]):t._e(),t.$slots.text?n("span",{staticClass:"alert-inner--text"},[t._t("text")],2):t._e()]}))],2):t._e()])},wt=[],Ct={name:"base-alert",components:{FadeTransition:o["a"]},props:{type:{type:String,default:"default",description:"Alert type"},icon:{type:String,default:"",description:"Alert icon. Will be overwritten by default slot"},dismissible:{type:Boolean,default:!1,description:"Whether alert is closes when clicking"}},data:function(){return{visible:!0}},methods:{dismissAlert:function(){this.visible=!1}}},Ot=Ct,Pt=Object(l["a"])(Ot,_t,wt,!1,null,null,null),kt=Pt.exports,xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{tag:"component",staticClass:"btn",class:t.classes,attrs:{type:"button"===t.tag?t.nativeType:""},on:{click:t.handleClick}},[t.$slots.icon||t.icon&&t.$slots.default?n("span",{staticClass:"btn-inner--icon"},[t._t("icon",(function(){return[n("i",{class:t.icon})]}))],2):t._e(),t.$slots.default?t._e():n("i",{class:t.icon}),t.$slots.icon||t.icon&&t.$slots.default?n("span",{staticClass:"btn-inner--text"},[t._t("default",(function(){return[t._v("\n        "+t._s(t.text)+"\n      ")]}))],2):t._e(),t.$slots.icon||t.icon?t._e():t._t("default")],2)},jt=[],St={name:"base-button",props:{tag:{type:String,default:"button",description:"Button tag (default -> button)"},type:{type:String,default:"default",description:"Button type (e,g primary, danger etc)"},size:{type:String,default:"",description:"Button size lg|sm"},textColor:{type:String,default:"",description:"Button text color (e.g primary, danger etc)"},nativeType:{type:String,default:"button",description:"Button native type (e.g submit,button etc)"},icon:{type:String,default:"",description:"Button icon"},text:{type:String,default:"",description:"Button text in case not provided via default slot"},outline:{type:Boolean,default:!1,description:"Whether button style is outline"},rounded:{type:Boolean,default:!1,description:"Whether button style is rounded"},iconOnly:{type:Boolean,default:!1,description:"Whether button contains only an icon"},block:{type:Boolean,default:!1,description:"Whether button is of block type"}},computed:{classes:function(){var t=[{"btn-block":this.block},{"rounded-circle":this.rounded},{"btn-icon-only":this.iconOnly},Object(g["a"])({},"text-".concat(this.textColor),this.textColor),{"btn-icon":this.icon||this.$slots.icon},this.type&&!this.outline?"btn-".concat(this.type):"",this.outline?"btn-outline-".concat(this.type):""];return this.size&&t.push("btn-".concat(this.size)),t}},methods:{handleClick:function(t){this.$emit("click",t)}}},$t=St,At=Object(l["a"])($t,xt,jt,!1,null,null,null),Bt=At.exports,Et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"custom-control custom-checkbox",class:[{disabled:t.disabled},t.inlineClass]},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.model,expression:"model"}],staticClass:"custom-control-input",attrs:{id:t.cbId,type:"checkbox",disabled:t.disabled},domProps:{checked:Array.isArray(t.model)?t._i(t.model,null)>-1:t.model},on:{change:function(e){var n=t.model,a=e.target,i=!!a.checked;if(Array.isArray(n)){var s=null,o=t._i(n,s);a.checked?o<0&&(t.model=n.concat([s])):o>-1&&(t.model=n.slice(0,o).concat(n.slice(o+1)))}else t.model=i}}}),n("label",{staticClass:"custom-control-label",attrs:{for:t.cbId}},[t._t("default",(function(){return[t.inline?n("span",[t._v(" ")]):t._e()]}))],2)])},Dt=[];function Tt(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",n="",a=0;a<t;a++)n+=e.charAt(Math.floor(Math.random()*e.length));return n}var Nt={name:"base-checkbox",model:{prop:"checked"},props:{checked:{type:[Array,Boolean],description:"Whether checkbox is checked"},disabled:{type:Boolean,description:"Whether checkbox is disabled"},inline:{type:Boolean,description:"Whether checkbox is inline"}},data:function(){return{cbId:"",touched:!1}},computed:{model:{get:function(){return this.checked},set:function(t){this.touched||(this.touched=!0),this.$emit("input",t)}},inlineClass:function(){if(this.inline)return"form-check-inline"}},mounted:function(){this.cbId=Tt()}},It=Nt,Wt=Object(l["a"])(It,Et,Dt,!1,null,null,null),zt=Wt.exports,Mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group",class:[{"input-group":t.hasIcon},{"has-danger":t.error},{focused:t.focused},{"input-group-alternative":t.alternative},{"has-label":t.label||t.$slots.label},{"has-success":!0===t.valid},{"has-danger":!1===t.valid}]},[t._t("label",(function(){return[t.label?n("label",{class:t.labelClasses},[t._v("\n            "+t._s(t.label)+"\n            "),t.required?n("span",[t._v("*")]):t._e()]):t._e()]})),t.addonLeftIcon||t.$slots.addonLeft?n("div",{staticClass:"input-group-prepend"},[n("span",{staticClass:"input-group-text"},[t._t("addonLeft",(function(){return[n("i",{class:t.addonLeftIcon})]}))],2)]):t._e(),t._t("default",(function(){return[n("input",t._g(t._b({staticClass:"form-control",class:[{"is-valid":!0===t.valid},{"is-invalid":!1===t.valid},t.inputClasses],attrs:{"aria-describedby":"addon-right addon-left"},domProps:{value:t.value}},"input",t.$attrs,!1),t.listeners))]}),null,t.slotData),t.addonRightIcon||t.$slots.addonRight?n("div",{staticClass:"input-group-append"},[n("span",{staticClass:"input-group-text"},[t._t("addonRight",(function(){return[n("i",{class:t.addonRightIcon})]}))],2)]):t._e(),t._t("infoBlock"),t._t("helpBlock",(function(){return[t.error?n("div",{staticClass:"text-danger invalid-feedback",class:{"mt-2":t.hasIcon},staticStyle:{display:"block"}},[t._v("\n            "+t._s(t.error)+"\n        ")]):t._e()]}))],2)},Lt=[];function Rt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function Ft(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Rt(Object(n),!0).forEach((function(e){Object(g["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Rt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var qt={inheritAttrs:!1,name:"base-input",props:{required:{type:Boolean,description:"Whether input is required (adds an asterix *)"},valid:{type:Boolean,description:"Whether is valid",default:void 0},alternative:{type:Boolean,description:"Whether input is of alternative layout"},label:{type:String,description:"Input label (text before input)"},error:{type:String,description:"Input error (below input)"},labelClasses:{type:String,description:"Input label css classes"},inputClasses:{type:String,description:"Input css classes"},value:{type:[String,Number],description:"Input value"},addonRightIcon:{type:String,description:"Addon right icon"},addonLeftIcon:{type:String,description:"Addont left icon"}},data:function(){return{focused:!1}},computed:{listeners:function(){return Ft(Ft({},this.$listeners),{},{input:this.updateValue,focus:this.onFocus,blur:this.onBlur})},slotData:function(){return Ft({focused:this.focused},this.listeners)},hasIcon:function(){var t=this.$slots,e=t.addonRight,n=t.addonLeft;return void 0!==e||void 0!==n||void 0!==this.addonRightIcon||void 0!==this.addonLeftIcon}},methods:{updateValue:function(t){var e=t.target.value;this.$emit("input",e)},onFocus:function(t){this.focused=!0,this.$emit("focus",t)},onBlur:function(t){this.focused=!1,this.$emit("blur",t)}}},Ut=qt,Gt=Object(l["a"])(Ut,Mt,Lt,!1,null,null,null),Jt=Gt.exports,Vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"pagination",class:[t.size&&"pagination-"+t.size,t.align&&"justify-content-"+t.align]},[n("li",{staticClass:"page-item prev-page",class:{disabled:1===t.value}},[n("a",{staticClass:"page-link",attrs:{"aria-label":"Previous"},on:{click:t.prevPage}},[t._m(0)])]),t._l(t.range(t.minPage,t.maxPage),(function(e){return n("li",{key:e,staticClass:"page-item",class:{active:t.value===e}},[n("a",{staticClass:"page-link",on:{click:function(n){return t.changePage(e)}}},[t._v(t._s(e))])])})),n("li",{staticClass:"page-item next-page",class:{disabled:t.value===t.totalPages}},[n("a",{staticClass:"page-link",attrs:{"aria-label":"Next"},on:{click:t.nextPage}},[t._m(1)])])],2)},Yt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{attrs:{"aria-hidden":"true"}},[n("i",{staticClass:"fa fa-angle-left",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{attrs:{"aria-hidden":"true"}},[n("i",{staticClass:"fa fa-angle-right",attrs:{"aria-hidden":"true"}})])}],Ht={name:"base-pagination",props:{pageCount:{type:Number,default:0,description:"Pagination page count. This should be specified in combination with perPage"},perPage:{type:Number,default:10,description:"Pagination per page. Should be specified with total or pageCount"},total:{type:Number,default:0,description:"Can be specified instead of pageCount. The page count in this case will be total/perPage"},value:{type:Number,default:1,description:"Pagination value"},size:{type:String,default:"",description:"Pagination size"},align:{type:String,default:"",description:"Pagination alignment (e.g center|start|end)"}},computed:{totalPages:function(){return this.pageCount>0?this.pageCount:this.total>0?Math.ceil(this.total/this.perPage):1},pagesToDisplay:function(){return this.totalPages>0&&this.totalPages<this.defaultPagesToDisplay?this.totalPages:this.defaultPagesToDisplay},minPage:function(){if(this.value>=this.pagesToDisplay){var t=Math.floor(this.pagesToDisplay/2),e=t+this.value;return e>this.totalPages?this.totalPages-this.pagesToDisplay+1:this.value-t}return 1},maxPage:function(){if(this.value>=this.pagesToDisplay){var t=Math.floor(this.pagesToDisplay/2),e=t+this.value;return e<this.totalPages?e:this.totalPages}return this.pagesToDisplay}},data:function(){return{defaultPagesToDisplay:5}},methods:{range:function(t,e){for(var n=[],a=t;a<=e;a++)n.push(a);return n},changePage:function(t){this.$emit("input",t)},nextPage:function(){this.value<this.totalPages&&this.$emit("input",this.value+1)},prevPage:function(){this.value>1&&this.$emit("input",this.value-1)}},watch:{perPage:function(){this.$emit("input",1)},total:function(){this.$emit("input",1)}}},Kt=Ht,Qt=Object(l["a"])(Kt,Vt,Yt,!1,null,null,null),Xt=Qt.exports,Zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"progress-wrapper"},[n("div",{class:"progress-"+t.type},[n("div",{staticClass:"progress-label"},[t._t("label",(function(){return[n("span",[t._v(t._s(t.label))])]}))],2),n("div",{staticClass:"progress-percentage"},[t._t("default",(function(){return[n("span",[t._v(t._s(t.value)+"%")])]}))],2)]),n("div",{staticClass:"progress",style:"height: "+t.height+"px"},[n("div",{staticClass:"progress-bar",class:t.computedClasses,style:"width: "+t.value+"%;",attrs:{role:"progressbar","aria-valuenow":t.value,"aria-valuemin":"0","aria-valuemax":"100"}})])])},te=[],ee={name:"base-progress",props:{striped:{type:Boolean,description:"Whether progress is striped"},animated:{type:Boolean,description:"Whether progress is animated (works only with `striped` prop together)"},label:{type:String,description:"Progress label (shown on the left above progress)"},height:{type:Number,default:8,description:"Progress line height"},type:{type:String,default:"default",description:"Progress type (e.g danger, primary etc)"},value:{type:Number,default:0,validator:function(t){return t>=0&&t<=100},description:"Progress value"}},computed:{computedClasses:function(){return[{"progress-bar-striped":this.striped},{"progress-bar-animated":this.animated},Object(g["a"])({},"bg-".concat(this.type),this.type)]}}},ne=ee,ae=Object(l["a"])(ne,Zt,te,!1,null,null,null),ie=ae.exports,se=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"custom-control custom-radio",class:[t.inlineClass,{disabled:t.disabled}]},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.model,expression:"model"}],staticClass:"custom-control-input",attrs:{id:t.cbId,type:"radio",disabled:t.disabled},domProps:{value:t.name,checked:t._q(t.model,t.name)},on:{change:function(e){t.model=t.name}}}),n("label",{staticClass:"custom-control-label",attrs:{for:t.cbId}},[t._t("default")],2)])},oe=[],re={name:"base-radio",props:{name:{type:[String,Number],description:"Radio label"},disabled:{type:Boolean,description:"Whether radio is disabled"},value:{type:[String,Boolean],description:"Radio value"},inline:{type:Boolean,description:"Whether radio is inline"}},data:function(){return{cbId:""}},computed:{model:{get:function(){return this.value},set:function(t){this.$emit("input",t)}},inlineClass:function(){return this.inline?"form-check-inline":""}},mounted:function(){this.cbId=Tt()}},ce=re,le=Object(l["a"])(ce,se,oe,!1,null,null,null),ue=le.exports,de=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-slider-container"},[n("div",{ref:"slider",staticClass:"input-slider",class:["slider-"+t.type],attrs:{disabled:t.disabled}})])},pe=[],fe=n("e9fa"),he=n.n(fe);function ge(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function ve(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ge(Object(n),!0).forEach((function(e){Object(g["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ge(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var me={name:"base-slider",props:{value:{type:[String,Array,Number],description:"Slider value"},disabled:{type:Boolean,description:"Whether slider is disabled"},range:{type:Object,default:function(){return{min:0,max:100}},description:"Slider range (defaults to 0-100)"},type:{type:String,default:"",description:"Slider type (e.g primary, danger etc)"},options:{type:Object,default:function(){return{}},description:"noUiSlider options"}},computed:{connect:function(){return Array.isArray(this.value)||[!0,!1]}},data:function(){return{slider:null}},methods:{createSlider:function(){var t=this;he.a.create(this.$refs.slider,ve({start:this.value,connect:this.connect,range:this.range},this.options));var e=this.$refs.slider.noUiSlider;e.on("slide",(function(){var n=e.get();n!==t.value&&t.$emit("input",n)}))}},mounted:function(){this.createSlider()},watch:{value:function(t,e){var n=this.$refs.slider.noUiSlider,a=n.get();t!==e&&a!==t&&(Array.isArray(a)&&Array.isArray(t)?e.length===t.length&&e.every((function(e,n){return e===t[n]}))&&n.set(t):n.set(t))}}},be=me,ye=Object(l["a"])(be,de,pe,!1,null,null,null),_e=ye.exports,we=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"custom-toggle"},[n("input",t._g(t._b({directives:[{name:"model",rawName:"v-model",value:t.model,expression:"model"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.model)?t._i(t.model,null)>-1:t.model},on:{change:function(e){var n=t.model,a=e.target,i=!!a.checked;if(Array.isArray(n)){var s=null,o=t._i(n,s);a.checked?o<0&&(t.model=n.concat([s])):o>-1&&(t.model=n.slice(0,o).concat(n.slice(o+1)))}else t.model=i}}},"input",t.$attrs,!1),t.$listeners)),n("span",{staticClass:"custom-toggle-slider rounded-circle"})])},Ce=[],Oe={name:"base-switch",inheritAttrs:!1,props:{value:{type:Boolean,default:!1,description:"Switch value"}},computed:{model:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},Pe=Oe,ke=Object(l["a"])(Pe,we,Ce,!1,null,null,null),xe=ke.exports,je=function(){var t,e,n,a=this,i=a.$createElement,s=a._self._c||i;return s("div",{staticClass:"card",class:[{"card-lift--hover":a.hover},{shadow:a.shadow},(t={},t["shadow-"+a.shadowSize]=a.shadowSize,t),(e={},e["bg-gradient-"+a.gradient]=a.gradient,e),(n={},n["bg-"+a.type]=a.type,n)]},[a.$slots.header?s("div",{staticClass:"card-header",class:a.headerClasses},[a._t("header")],2):a._e(),a.noBody?a._e():s("div",{staticClass:"card-body",class:a.bodyClasses},[a._t("default")],2),a.noBody?a._t("default"):a._e(),a.$slots.footer?s("div",{staticClass:"card-footer",class:a.footerClasses},[a._t("footer")],2):a._e()],2)},Se=[],$e={name:"card",props:{type:{type:String,description:"Card type"},gradient:{type:String,description:"Card background gradient type (warning,danger etc)"},hover:{type:Boolean,description:"Whether card should move on hover"},shadow:{type:Boolean,description:"Whether card has shadow"},shadowSize:{type:String,description:"Card shadow size"},noBody:{type:Boolean,default:!1,description:"Whether card should have wrapper body class"},bodyClasses:{type:[String,Object,Array],description:"Card body css classes"},headerClasses:{type:[String,Object,Array],description:"Card header css classes"},footerClasses:{type:[String,Object,Array],description:"Card footer css classes"}}},Ae=$e,Be=Object(l["a"])(Ae,je,Se,!1,null,null,null),Ee=Be.exports,De=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon icon-shape",class:[t.size&&"icon-"+t.size,t.type&&"icon-shape-"+t.type,t.gradient&&"bg-gradient-"+t.gradient,t.shadow&&"shadow",t.rounded&&"rounded-circle",t.color&&"text-"+t.color]},[t._t("default",(function(){return[n("i",{class:t.name})]}))],2)},Te=[],Ne={name:"icon",props:{name:{type:String,default:"",description:"Icon name"},size:{type:String,default:"",description:"Icon size"},type:{type:String,default:"",description:"Icon type (primary, warning etc)"},gradient:{type:String,default:"",description:"Icon gradient type (primary, warning etc)"},color:{type:String,default:"",description:"Icon color (primary, warning etc)"},shadow:{type:Boolean,default:!1,description:"Whether icon has shadow"},rounded:{type:Boolean,default:!1,description:"Whether icon is rounded"}}},Ie=Ne,We=Object(l["a"])(Ie,De,Te,!1,null,null,null),ze=We.exports,Me={install:function(t){t.component(yt.name,yt),t.component(kt.name,kt),t.component(Bt.name,Bt),t.component(Jt.name,Jt),t.component(zt.name,zt),t.component(Xt.name,Xt),t.component(ie.name,ie),t.component(ue.name,ue),t.component(_e.name,_e),t.component(xe.name,xe),t.component(Ee.name,Ee),t.component(ze.name,ze)}},Le={bind:function(t,e,n){t.clickOutsideEvent=function(a){t==a.target||t.contains(a.target)||n.context[e.expression](a)},document.body.addEventListener("click",t.clickOutsideEvent)},unbind:function(t){document.body.removeEventListener("click",t.clickOutsideEvent)}},Re={install:function(t){t.directive("click-outside",Le)}},Fe=Re,qe=n("caf9"),Ue={install:function(t){t.use(Me),t.use(Fe),t.use(qe["a"])}},Ge=n("9483");Object(Ge["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var Je={state:{account:"",balance:0},mutations:{UPDATE_ACCOUNT:function(t,e){console.log("update account"),t.account=e},UPDATE_BALANCE:function(t,e){t.balance=e}},actions:{updateAccount:function(t,e){var n=t.commit;n("UPDATE_ACCOUNT",e)},updateBalance:function(t,e){var n=t.commit;n("UPDATE_BALANCE",e)}}},Ve=Je;a["a"].use(R["a"]);var Ye=new R["a"].Store({modules:{web3:Ve}}),He=Ye;a["a"].config.productionTip=!1,a["a"].use(Ue),new a["a"]({router:ft,store:He,render:function(t){return t(d)}}).$mount("#app")},"599e":function(t,e,n){"use strict";n("95f4")},"5a83":function(t,e,n){t.exports=n.p+"img/discord.cadaa137.svg"},6:function(t,e){},7:function(t,e){},8:function(t,e){},"841c":function(t,e,n){"use strict";n("1e4c")},8842:function(t,e,n){t.exports=n.p+"img/red.4dac05be.svg"},9:function(t,e){},"95f4":function(t,e,n){},a4d4:function(t,e,n){},af83:function(t,e,n){t.exports=n.p+"img/twitter.a432d370.svg"},c653:function(t,e,n){"use strict";n("e75d")},cccb:function(t,e,n){"use strict";n("d563")},d563:function(t,e,n){},d5a0:function(t,e,n){},e75d:function(t,e,n){},f364:function(t,e,n){"use strict";n("4711")}});
//# sourceMappingURL=app.b2ae0650.js.map