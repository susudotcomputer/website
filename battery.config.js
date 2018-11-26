module.exports=function(e){var t={};function r(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(o,a,function(t){return e[t]}.bind(null,a));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.singleLetterPositionSubProps={t:"top",r:"right",b:"bottom",l:"left",x:"left right",y:"top bottom"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(2)),a=n(r(15));function n(e){return e&&e.__esModule?e:{default:e}}t.default={plugins:o.default,props:a.default,settings:{enableKeywordValues:!0}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=m(r(3)),a=m(r(4)),n=m(r(5)),u=m(r(6)),l=m(r(7)),i=m(r(8)),s=m(r(9)),p=m(r(10)),d=m(r(11)),f=m(r(12)),c=m(r(13)),b=m(r(14));function m(e){return e&&e.__esModule?e:{default:e}}t.default=[o.default,a.default,n.default,u.default,l.default,i.default,s.default,p.default,d.default,b.default].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(f.default),[c.default])},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={name:"breakpoints",type:"atrule",atrule:"media",prefixOrSuffix:"suffix",modifiers:[{name:"responsiveSmall",indicator:"sm",separator:"-",condition:"(min-width: 560px)"},{name:"responsiveMedium",indicator:"md",separator:"-",condition:"(min-width: 940px)"},{name:"responsiveLarge",indicator:"lg",separator:"-",condition:"(min-width: 1040px)"}]}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={name:"colors",type:"lookup",values:{black:"#000000",white:"#ffffff","neon-crimson":"#DC143C","neon-gold":"#FFD700","neon-darkorange":"#FF8C00","neon-chartreuse":"#7FFF00","neon-green":"#008000","neon-dodgerblue":"#1E90FF","neon-white":"#FFFFFF","neon-saddlebrown":"#8B4513","neon-blanchedalmond":"#FFEBCD","neon-pink":"#FFC0CB","snackalong-yellow":"#FFB129","archive-brown-900":"#252119","archive-brown-400":"#83704b","archive-beige":"#EEE6D2"},valueModifiers:[{name:"opacity",separator:"_",indicator:"\\d+",modifierFn:function(e,t){return e=e.replace("#",""),"rgba("+parseInt(e.substring(0,2),16)+","+parseInt(e.substring(2,4),16)+","+parseInt(e.substring(4,6),16)+","+t/100+")"}},{name:"important",indicator:"!",modifierFn:function(e){return e+" !important"}}]};t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={name:"floats",type:"pattern",valueRegexString:"[0-9]{1,3}",valueModifiers:[{name:"percent",indicator:"p",modifierFn:function(e){return parseFloat(e)/100},sampleValues:["20","50","100","66"]}]};t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={name:"hoverTarget",type:"classname",prefixOrSuffix:"prefix",modifiers:[{name:"hover-item",separator:"-",indicator:"bover-item",modifierFn:function(e,t){return"hover-target:hover ."+e}}]};t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={name:"integers",type:"pattern",valueRegexString:"-?[0-9]{1,4}"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){return function(t){return""+t+e}},a=o("%"),n=o("rem"),u=o("px"),l=o("vh"),i=o("vw"),s=function(e){var t=e.baseFontSize,r=e.baselineUnit,o=e.useRems,a=e.useBaseline;return function(e){var l=a?e*r:e;return o?function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16;return n(e/t)}(l,t):u(l)}},p=function(e,t,r,o){return{percent:a,rem:n,pixel:s({baseFontSize:e,baselineUnit:t,useRems:r}),viewportHeight:l,viewportWidth:i,baseline:s({baseFontSize:e,baselineUnit:t,useRems:r,useBaseline:o})}}(16,6,!0,!0),d={name:"lengthUnits",type:"pattern",valueRegexString:"-?[0-9]{1,4}",valueModifiers:[{name:"baseline",default:!0,indicator:"",modifierFn:p.baseline,sampleValues:["3","5","10","0","-2"]},{name:"percent",indicator:"p",modifierFn:p.percent,sampleValues:["20","50","100","-10","66"]},{name:"pixel",indicator:"px",modifierFn:p.pixel,sampleValues:["1","2","3","-2","-5"]},{name:"viewport height",indicator:"vh",modifierFn:p.viewportHeight,sampleValues:["10","25","50","100","130"]},{name:"viewport width",indicator:"vw",modifierFn:p.viewportWidth,sampleValues:["10","25","75","50","100"]}]};t.default=d},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={name:"lineHeight",type:"pattern",valueRegexString:"[0-9]{1,2}(?:_[0-9]{1,2})?",valueModifiers:[{name:"unitlees",default:!0,indicator:"",modifierFn:function(e){return""+e.split("_").join(".")},sampleValues:["3","5","10","0"]},{name:"pixel",indicator:"px",modifierFn:function(e){return e/16+"rem"},sampleValues:["1","2","3","-2","-5"]}]}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t){return e+":"+t},a={name:"pseudos",type:"classname",prefixOrSuffix:"prefix",modifiers:[{name:"hover",separator:"-",indicator:"hover",modifierFn:o},{name:"focus",separator:"-",indicator:"focus",modifierFn:o}]};t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={name:"times",type:"pattern",valueRegexString:"[0-9]{1,4}",valueModifiers:[{name:"milliseconds",default:!0,indicator:"",modifierFn:function(e){return e+"ms"},sampleValues:["300","500","1000"]}]};t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={name:"gridCol",type:"class",className:["col"],modifiers:[{regex:"\\d+",separator:"-",modifierFn:function(e){return{"grid-column-end":"span "+e}}},{regex:"\\d+",regexSeparator:"-",separator:"-",modifierFn:function(e){return{"grid-column-start":""+(parseInt(e)+1)}},className:["offset"]}]};t.default=[{name:"gridTemplates",type:"class",className:["grid"],modifiers:[{regex:"\\d+",separator:"-",modifierFn:function(e){return{"grid-template-columns":"repeat("+e+", 1fr)"}}}]},o]},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],o=!0,a=!1,n=void 0;try{for(var u,l=e[Symbol.iterator]();!(o=(u=l.next()).done)&&(r.push(u.value),!t||r.length!==t);o=!0);}catch(e){a=!0,n=e}finally{try{!o&&l.return&&l.return()}finally{if(a)throw n}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a={type:"class",name:"aspectRatio",className:["aspect-ratio",["relative","h0"]],modifiers:[{className:["object",["absolute","t0","r0","b0","l0","w100p","h100p","z100"]],separator:"__"},{regex:"\\d+x\\d+",separator:"--",modifierFn:function(e){var t=e.split("x"),r=o(t,2),a=r[0];return{"padding-bottom":r[1]/a*100+"%"}}}]};t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={name:"applyToChildren",type:"classname",prefixOrSuffix:"suffix",modifiers:[{name:"children",separator:"-",indicator:"children(?:(-)?(\\d+)|)",modifierFn:function(e,t){var r=e.match(t),o=r[2];return r[1]?e+" > :not(:nth-last-child("+o+"))":o?e+" > :not(:nth-child("+o+"))":e+" > *"}}]};t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=ge(r(16)),a=ge(r(17)),n=ge(r(18)),u=ge(r(19)),l=ge(r(20)),i=ge(r(21)),s=ge(r(22)),p=ge(r(23)),d=ge(r(24)),f=ge(r(25)),c=ge(r(26)),b=ge(r(27)),m=ge(r(28)),v=ge(r(29)),y=ge(r(30)),g=ge(r(31)),_=ge(r(32)),h=ge(r(33)),P=ge(r(34)),x=ge(r(35)),w=ge(r(36)),M=ge(r(37)),O=ge(r(38)),j=ge(r(39)),k=ge(r(40)),N=ge(r(41)),V=ge(r(42)),F=ge(r(43)),S=ge(r(44)),G=ge(r(45)),U=ge(r(46)),z=ge(r(47)),A=ge(r(48)),C=ge(r(49)),R=ge(r(50)),D=ge(r(51)),H=ge(r(52)),T=ge(r(53)),B=ge(r(54)),E=ge(r(55)),L=ge(r(56)),I=ge(r(57)),W=ge(r(58)),q=ge(r(59)),K=ge(r(60)),Q=ge(r(61)),J=ge(r(62)),X=ge(r(63)),Y=ge(r(64)),Z=ge(r(65)),$=ge(r(66)),ee=ge(r(67)),te=ge(r(68)),re=ge(r(69)),oe=ge(r(70)),ae=ge(r(71)),ne=ge(r(72)),ue=ge(r(73)),le=ge(r(74)),ie=ge(r(75)),se=ge(r(76)),pe=ge(r(77)),de=ge(r(78)),fe=ge(r(79)),ce=ge(r(80)),be=ge(r(81)),me=ge(r(82)),ve=ge(r(83)),ye=ge(r(84));function ge(e){return e&&e.__esModule?e:{default:e}}t.default=[C.default,R.default,D.default,o.default,a.default,n.default,u.default,l.default,i.default,s.default,p.default,d.default,f.default,c.default,b.default,m.default,v.default,Q.default,be.default,j.default,ee.default,me.default,G.default,ve.default,re.default,H.default,T.default,B.default,E.default,L.default,I.default,te.default,k.default,N.default,V.default,F.default,y.default,W.default,J.default,fe.default,S.default,q.default,K.default,g.default,_.default,h.default,P.default,x.default,ye.default,A.default,w.default,ce.default,M.default,Z.default,U.default,z.default,X.default,oe.default,ne.default,ue.default,le.default,ie.default,se.default,Y.default,ae.default,pe.default,O.default,de.default,$.default]},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={propName:"animation",prop:"animation-direction",keywordValues:{separator:"-",values:{alternate:"alternate"}},propGroup:"Animation"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={propName:"animation",prop:"animation-duration",separator:"-",enablePlugin:"times",propGroup:"Animation"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={propName:"animation",prop:"animation-iteration-count",keywordValues:{separator:"-",values:{infinite:"infinite",once:"once"}},propGroup:"Animation"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={propName:"animation",prop:"animation-timing-function",keywordValues:{separator:"-",values:{easeOutQuart:"cubic-bezier(0.175, 0.885, 0.335, 1)","ease-out":"ease-out"}},propGroup:"Animation"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"background-color",propName:"bg",separator:"-",keywordValues:{separator:"-",values:{transparent:"transparent"}},enablePlugin:"colors"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"background-image",propName:"bgi",keywordValues:{separator:"-",values:{none:"none"}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"background-position",propName:"bgp",keywordValues:{separator:"-",values:{center:"center center",top:"center top",bottom:"center bottom",left:"left center",right:"right center"}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"background-repeat",propName:"bg",keywordValues:{separator:"-",values:{"no-repeat":"no-repeat"}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"background-size",propName:"bgz",keywordValues:{separator:"-",values:{cover:"cover",contain:"contain","full-height":"auto 100%","full-width":"100% auto"}},enablePlugin:"lengthUnits"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"border",propName:"border",subPropSeparator:"-",subProps:{top:"top",right:"right",bottom:"bottom",left:"left",x:"left right",y:"top bottom"},keywordValues:{separator:"-",values:{default:"1px solid #DCDEDD",none:"none"}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"border-color",propName:"border",separator:"-",enablePlugin:"colors"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"border-radius",propName:"",subProps:{top:"top-left top-right",right:"top-right bottom-right",bottom:"bottom-left bottom-right",left:"top-left top-right","top-left":"top-left","top-right":"top-right","bottom-right":"bottom-right","bottom-left":"bottom-left"},keywordValues:{values:{"no-radius":"0",rounded:"0.2rem","rounded-medium":"0.4rem","rounded-large":"0.6rem",circle:"100%"}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"border-style",propName:"border",keywordValues:{separator:"-",values:{dashed:"dashed"}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"border-width",propName:"border",keywordValues:{separator:"-",values:{regular:"0.1rem",medium:"0.2rem",thick:"0.3rem"}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"height",propName:"h",enablePlugin:"lengthUnits",keywordValues:{separator:"-",values:{auto:"auto"}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={prop:"margin",propName:"m",subProps:r(0).singleLetterPositionSubProps,keywordValues:{separator:"-",values:{auto:"auto"}},enablePlugin:"lengthUnits"};t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"max-height",propName:"max-h",enablePlugin:"lengthUnits"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"max-width",propName:"max-w",enablePlugin:"lengthUnits",keywordValues:{separator:"-",values:{none:"none"}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"min-height",propName:"min-h",enablePlugin:"lengthUnits"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"min-width",propName:"min-w",enablePlugin:"lengthUnits"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"overflow",propName:"",subProps:{x:"x",y:"y"},keywordValues:{values:{clip:"hidden",scroll:"scroll","overflow-auto":"auto"}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={prop:"padding",propName:"p",subProps:r(0).singleLetterPositionSubProps,keywordValues:{separator:"-",values:{auto:"auto"}},enablePlugin:"lengthUnits"};t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"width",propName:"w",enablePlugin:"lengthUnits",keywordValues:{separator:"-",values:{auto:"auto"}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"box-sizing",propName:"",keywordValues:{values:{"border-box":"border-box","content-box":"content-box"}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"font-family",propName:"",keywordValues:{values:{"sans-serif":"sans-serif","type-mono":'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',helvetica:'"Helvetica Neue", Helvetica, Arial, sans-serif',"maison-book":'"Maison Neue Book", "Helvetica Neue", Helvetica, Arial, sans-serif',"cooper-light":'"Cooper Light", Georgia, Times, "Times New Roman", serif',hiragino:'"ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", Osaka, "メイリオ", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif'}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"font-size",propName:"fz",enablePlugin:"lengthUnits"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"font-style",propName:"",keywordValues:{values:{italic:"italic"}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"font-weight",propName:"text",keywordValues:{separator:"-",values:{light:"200",normal:"400",medium:"500",bold:"700"}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"line-height",propName:"lh",enablePlugin:"lineHeight"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"cursor",propName:"",keywordValues:{values:{pointer:"pointer","default-cursor":"default",draggable:"move","not-allowed":"not-allowed"}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"pointer-events",propName:"",keywordValues:{values:{"click-through":"none","click-on":"auto"}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={propName:"resize",prop:"resize",keywordValues:{separator:"-",values:{default:"both",none:"none",x:"horizontal",y:"vertical"}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={propName:"order",prop:"order",enablePlugin:"integers"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={propName:"content",prop:"align-content",keywordValues:{separator:"-",values:{center:"center",end:"flex-end",start:"flex-start",between:"space-between",around:"space-around",stretch:"stretch"}},propGroup:"Flexbox"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={propName:"items",prop:"align-items",keywordValues:{separator:"-",values:{center:"center",end:"flex-end",start:"flex-start",baseline:"baseline",stretch:"stretch"}},propGroup:"Flexbox"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={propName:"self",prop:"align-self",keywordValues:{separator:"-",values:{center:"center",end:"flex-end",start:"flex-start",baseline:"baseline",stretch:"stretch"}},propGroup:"Flexbox"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"flex",propName:"flex",enablePlugin:"integers",propGroup:"Flexbox",keywordValues:{separator:"-",values:{none:"none"}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"flex-basis",propName:"basis",enablePlugin:"lengthUnits",propGroup:"Flexbox"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"flex-direction",propName:"flex",keywordValues:{separator:"-",values:{row:"row",column:"column","row-reverse":"row-reverse","column-reverse":"column-reverse"}},propGroup:"Flexbox"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"flex-grow",propName:"grow",enablePlugin:"integers",propGroup:"Flexbox"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"flex-shrink",propName:"shrink",enablePlugin:"integers",propGroup:"Flexbox"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"flex-wrap",propName:"flex",keywordValues:{separator:"-",values:{wrap:"wrap",nowrap:"nowrap"}},propGroup:"Flexbox"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={propName:"justify",prop:"justify-content",keywordValues:{separator:"-",values:{center:"center",end:"flex-end",start:"flex-start",between:"space-between",around:"space-around"}},propGroup:"Flexbox"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"list-style-position",propName:"list",keywordValues:{separator:"-",values:{inside:"inside",outside:"outside"}},propGroup:"Lists"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"list-style-type",propName:"list",keywordValues:{separator:"-",values:{disc:"disc",circle:"circle",square:"square",decimal:"decimal"}},propGroup:"Lists"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"bottom",propName:"b",enablePlugin:"lengthUnits",propGroup:"Positions",keywordValues:{separator:"-",values:{auto:"auto"}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"left",propName:"l",enablePlugin:"lengthUnits",propGroup:"Positions",keywordValues:{separator:"-",values:{auto:"auto"}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"right",propName:"r",enablePlugin:"lengthUnits",propGroup:"Positions",keywordValues:{separator:"-",values:{auto:"auto"}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"top",propName:"t",enablePlugin:"lengthUnits",propGroup:"Positions",keywordValues:{separator:"-",values:{auto:"auto"}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"position",propName:"",keywordValues:{values:{static:"static",relative:"relative",absolute:"absolute",fixed:"fixed",stick:"sticky"}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={propName:"z",prop:"z-index",enablePlugin:"integers",keywordValues:{separator:"-",values:function(e){return e.reduce(function(t,r){return t[r]=""+(e.indexOf(r)+100),t},{})}(["dropdown-2","dropdown-3","popover-3","site-nav-3","build-nav-3","creator-nav-3","banner-3","admin-nav-3","guided-search-3","user-menu-2","user-menu-3","discover-overlay-3","modal-3","growl-3","grid-overlay-3"])}};t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"clear",propName:"clear",keywordValues:{separator:"-",values:{left:"left",right:"right",both:"both"}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"float",propName:"",keywordValues:{values:{left:"left",right:"right","float-none":"none"}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"fill",propName:"fill",separator:"-",enablePlugin:"colors"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"stroke",propName:"stroke",separator:"-",enablePlugin:"colors"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"vertical-align",propName:"valign",keywordValues:{separator:"-",values:{middle:"middle",bottom:"bottom","text-bottom":"text-bottom",top:"top",super:"super",sub:"sub","text-top":"text-top",baseline:"baseline"}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"text-align",propName:"text",keywordValues:{separator:"-",values:{left:"left",center:"center",right:"right"}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"text-decoration",propName:"text",keywordValues:{separator:"-",values:{underline:"underline","decoration-none":"none"}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"text-indent",propName:"text-indent",enablePlugin:"lengthUnits"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"text-overflow",propName:"text",keywordValues:{separator:"-",values:{ellipsis:"ellipsis"}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"text-transform",propName:"text",keywordValues:{separator:"-",values:{capitalize:"capitalize",lowercase:"lowercase",uppercase:"uppercase",none:"none"}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"white-space",propName:"text",keywordValues:{separator:"-",values:{nowrap:"nowrap",prewrap:"pre-wrap",preline:"pre-line"}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"word-break",propName:"word",keywordValues:{separator:"-",values:{break:"break-all",keep:"keep-all"}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"letter-spacing",propName:"ls",enablePlugin:"lengthUnits"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"overflow-wrap",propName:"",keywordValues:{values:{"word-wrap":"break-wrap"}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"box-shadow",propName:"shadow",keywordValues:{separator:"-",values:{high:"0 4px 10px 0 rgba(22, 22, 22, 0.08)",card:"0 2px 6px -2px rgba(22, 22, 22, 0.45)",low:"0 0 4px 0 rgba(168, 167, 164, 0.4)",avatar:"0 1px 2px 0 rgba(0, 0, 0, 0.2)",1:"0 1px 2px 1px rgba(0,0,0,0.17)",2:"0 2px 6px 0 rgba(0,0,0,0.17)",3:"0 3px 6px 1px rgba(0,0,0,0.17)",none:"none"}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"color",propName:"",keywordValues:{values:{transparent:"transparent"}},pluginDefault:!0,enablePlugin:"colors"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"display",propName:"",keywordValues:{values:{block:"block",inline:"inline",flex:"flex",hide:"none",grid:"grid","super-hide":"hide !important","inline-block":"inline-block","inline-flex":"inline-flex",table:"table","table-header":"table-row-group","table-row":"table-row","table-cell":"table-cell"}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={prop:"opacity",propName:"o",enablePlugin:"floats"}}]);