(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[258],{6985:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(2784)),a=i(r(3980)),o=r(200),l=r(3211);function i(e){return e&&e.__esModule?e:{default:e}}const c=o.css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  position: relative;
  transition: all 0.5s ease-in-out;
  width: 30px;

  svg {
    position: relative;

    rect {
      transition: all 0.5s ease-in-out;
    }
  }

  &.dark {
    svg {
      rect {
        fill: ${l.color.dark};
      }
    }
  }

  &.light {
    svg {
      rect {
        fill: ${l.color.white};
      }
    }
  }

  &.active {
    svg {
      rect:nth-child(1) {
        transform: translate(8px, -1.5px) rotate(45deg);
      }

      rect:nth-child(2) {
        opacity: 0;
      }

      rect:nth-child(3) {
        transform-origin: center;
        transform: translate(-4px, -3.5px) rotate(-45deg);
      }
    }
  }
`,d=o.css`
  display: flex;
  align-items: center;
  justify-content: center;
`,s=e=>{const t=e.color||"light",r=e.activeBurger,a=e.onClick||(()=>{});return n.default.createElement("div",{className:(0,o.cx)(c,t,{active:r}),onClick:a},n.default.createElement("div",{className:d},n.default.createElement("svg",{height:"24",width:"24",viewBox:"0 0 24 24"},n.default.createElement("rect",{x:"2",y:"6",width:"20",height:"2",rx:"1"}),n.default.createElement("rect",{x:"2",y:"11",width:"20",height:"2",rx:"1"}),n.default.createElement("rect",{x:"2",y:"16",width:"20",height:"2",rx:"1"}))))};s.propTypes={color:a.default.string,activeBurger:a.default.bool,onClick:a.default.func};var u=s;t.default=u},6013:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(r(2784)),a=l(r(3980)),o=l(r(5182));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}const c=({color:e=o.default.dark,angle:t="left"})=>{const r=(0,n.useMemo)((()=>n.default.createElement("svg",{width:"40px",height:"40px",viewBox:"0 0 40 40"},n.default.createElement("g",{fill:e,transform:"translate(5.000000, 5.000000)"},n.default.createElement("path",{d:"M30,15 C30,15.4807835 29.627203,15.8770378 29.1469257,15.9311926 L29.0343052,15.9374971 L3.20017573,15.9367054 L15.3022515,28.4199682 C15.6677828,28.797006 15.6492627,29.3903257 15.2608856,29.7451848 C14.9023837,30.0727471 14.3540519,30.0826245 13.9843141,29.7856554 L13.8958136,29.7050268 L0.262475843,15.6425293 C-0.058327965,15.311627 -0.0850616157,14.8108998 0.182274891,14.4516934 L0.262475843,14.3574707 L13.8958136,0.294973235 C14.261345,-0.0820645885 14.8725086,-0.100043974 15.2608856,0.254815155 C15.6193876,0.582377427 15.6627451,1.11312505 15.3797938,1.48939075 L15.3022515,1.58003182 L3.20210712,14.0617057 L29.0343052,14.0624975 C29.5676437,14.0624975 30,14.4822331 30,15 Z"})))),[e]);return n.default.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",transform:`rotate(${"left"===t?0:180}deg)`}},r)};c.displayName="ArrowSvg",c.propTypes={color:a.default.string,angle:a.default.string};var d=c;t.default=d},6701:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=a(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(n,l,i):n[l]=e[l]}n.default=e,r&&r.set(e,n);return n}(r(2784));function a(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(a=function(e){return e?r:t})(e)}const o=()=>(0,n.useMemo)((()=>n.default.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16"},n.default.createElement("g",{fill:"none",fillRule:"evenodd"},n.default.createElement("path",{fill:"#FFF",fillRule:"nonzero",d:"M12.2,3.40005885 C12.5313708,2.95823105 13.1581722,2.868688 13.6,3.20005885 C14.007841,3.50593964 14.1155105,4.06354818 13.8690296,4.4950337 L13.8,4.60005885 L7.8,12.6000589 C7.45921237,13.0544424 6.81655146,13.1287925 6.3825205,12.7868289 L6.29289322,12.7071656 L2.29289322,8.70716563 C1.90236893,8.31664134 1.90236893,7.68347636 2.29289322,7.29295207 C2.65337718,6.93246811 3.22060824,6.90473857 3.61289944,7.20976346 L3.70710678,7.29295207 L6.892,10.4770589 L12.2,3.40005885 Z"})))),[]);o.displayName="Checked";var l=o;t.default=l},7530:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(r(2784)),a=l(r(3980)),o=l(r(5182));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}const c=({color:e=o.default.dark})=>(0,n.useMemo)((()=>n.default.createElement("svg",{height:"10",viewBox:"0 0 10 10",width:"10"},n.default.createElement("defs",null,n.default.createElement("path",{id:"a",d:"m10.0473785.61928813c.2603496.26034952.2603496.68245951 0 .94280904l-3.77135252 3.77092881 3.77135252 3.77154352c.2603496.26034953.2603496.68245951 0 .942809-.26034949.2603496-.68245947.2603496-.942809 0l-3.77154352-3.77135252-3.77092881 3.77135252c-.26034953.2603496-.68245952.2603496-.94280904 0-.26034953-.26034949-.26034953-.68245947 0-.942809l3.77073785-3.77154352-3.77073785-3.77092881c-.26034953-.26034953-.26034953-.68245952 0-.94280904.26034952-.26034953.68245951-.26034953.94280904 0l3.77092881 3.77073785 3.77154352-3.77073785c.26034953-.26034953.68245951-.26034953.942809 0z"}),n.default.createElement("mask",{id:"b",fill:o.default.white},n.default.createElement("use",{fill:o.default.white,fillRule:"evenodd",xlinkHref:"#a"}))),n.default.createElement("g",{fill:e,fillRule:"evenodd",transform:"translate(-.333333 -.333333)"},n.default.createElement("use",{xlinkHref:"#a"}),n.default.createElement("g",{mask:"url(#b)"},n.default.createElement("path",{d:"m0 0h16v16h-16z",transform:"translate(-2.666667 -2.666667)"}))))),[e]);c.propTypes={color:a.default.string};var d=c;t.default=d},5669:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=a(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(n,l,i):n[l]=e[l]}n.default=e,r&&r.set(e,n);return n}(r(2784));function a(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(a=function(e){return e?r:t})(e)}var o=()=>(0,n.useMemo)((()=>n.default.createElement("svg",{width:"12px",height:"7px",viewBox:"0 0 12 7"},n.default.createElement("g",{id:"Symbols",stroke:"none",strokeWidth:"1"},n.default.createElement("g",{id:"icon/down",transform:"translate(-2.000000, -6.000000)"},n.default.createElement("g",{id:"color/sonar_red",transform:"translate(2.000000, 6.000000)"},n.default.createElement("path",{d:"M0.295367042,0.295011084 C0.689189766,-0.0983370279 1.32770256,-0.0983370279 1.72152528,0.295011084 L6,4.56832964 L10.2784747,0.295011084 C10.6722974,-0.0983370279 11.3108102,-0.0983370279 11.704633,0.295011084 C12.0984557,0.688359195 12.0984557,1.32610249 11.704633,1.7194506 L6.71307912,6.70498892 C6.3192564,7.09833703 5.6807436,7.09833703 5.28692088,6.70498892 L0.295367042,1.7194506 C-0.0984556808,1.32610249 -0.0984556808,0.688359195 0.295367042,0.295011084 Z",id:"Mask"})))))),[]);t.default=o},338:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(r(2784)),o=(n=r(3980))&&n.__esModule?n:{default:n},l=r(9052);function i(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}const c=e=>{const t=e.mode||"light",r=(0,a.useMemo)((()=>a.default.createElement("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24",version:"1.1"},a.default.createElement("g",{id:"Symbols",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},a.default.createElement("path",{className:t,d:"M22,0 C23.1045695,-2.02906125e-16 24,0.8954305 24,2 L24,22 C24,23.0543618 23.1841222,23.9181651 22.1492623,23.9945143 L22,24 L22,24 L14,24 L14,23.978 L13.875,24 L13.875,15.5633307 L16.6710937,15.5633307 L17.203125,12.0733717 L13.875,12.0733717 L13.875,9.80860051 C13.875,8.85381375 14.3398828,7.92315016 15.8305781,7.92315016 L15.8305781,7.92315016 L17.34375,7.92315016 L17.34375,4.95196885 C17.34375,4.95196885 15.9704766,4.71616081 14.6575781,4.71616081 C11.9165156,4.71616081 10.125,6.3875682 10.125,9.41345698 L10.125,9.41345698 L10.125,12.0733717 L7.078125,12.0733717 L7.078125,15.5633307 L10.125,15.5633307 L10.125,24 C10.0832306,23.9934058 10.0415327,23.9865949 9.99990751,23.9795684 L10,24 L2,24 C0.8954305,24 1.3527075e-16,23.1045695 0,22 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 L22,0 Z",id:"path-1"})))),[t]);return a.default.createElement("div",{className:l.cssIcon},r)};c.propTypes={mode:o.default.string};var d=c;t.default=d},8789:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(r(2784)),o=(n=r(3980))&&n.__esModule?n:{default:n},l=r(9052);function i(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}const c=e=>{const t=e.mode||"light",r=(0,a.useMemo)((()=>a.default.createElement("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24"},a.default.createElement("g",{id:"Symbols",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},a.default.createElement("g",{id:"sns/linkedin/nor"},a.default.createElement("path",{className:t,d:"M21,0 C22.6568542,-3.04359188e-16 24,1.34314575 24,3 L24,21 C24,22.6568542 22.6568542,24 21,24 L3,24 C1.34314575,24 2.02906125e-16,22.6568542 0,21 L0,3 C-2.02906125e-16,1.34314575 1.34314575,3.04359188e-16 3,0 L21,0 Z M19.0257087,9.0309163 C16.1146435,7.90189457 14.1125239,9.13845978 13.5311978,10.2828185 L13.5311978,10.2828185 L13.4415783,10.4056989 L13.3876217,10.4056989 L13.3876217,8.83634022 L10.0184804,8.83634022 L10.0184804,20.1829163 L13.5311978,20.1829163 L13.5316179,14.0152782 C13.5352018,13.9482549 13.5643166,13.4915116 13.7156109,12.9431337 C13.879513,12.3490576 14.4018935,11.8678837 15.0368065,11.7243076 C15.6717196,11.5811011 16.2554478,11.7243076 16.5934152,11.8678837 C16.9313826,12.0110902 17.1054478,12.3643946 17.1745565,12.471938 C17.2436652,12.5794815 17.458937,13.2476554 17.458937,13.6240576 L17.458937,13.6240576 L17.458937,20.1829163 L20.9921652,20.1829163 L20.9927319,13.1625978 C21.0044427,12.9799919 21.1719641,9.86344891 19.0257087,9.0309163 Z M7.82684783,8.83641413 L4.2731087,8.83641413 L4.2731087,20.1828054 L7.82684783,20.1828054 L7.82684783,8.83641413 Z M6.05809022,3.18481957 C4.92149239,3.18481957 3.99998152,4.10614565 3.99998152,5.24292826 C3.99998152,6.37952609 4.92149239,7.30085217 6.05809022,7.30085217 C7.19468804,7.30085217 8.11619891,6.37952609 8.11619891,5.24292826 C8.11619891,4.10614565 7.19468804,3.18481957 6.05809022,3.18481957 Z",id:"Combined-Shape"}))))),[t]);return a.default.createElement("div",{className:l.cssIcon},r)};c.propTypes={mode:o.default.string};var d=c;t.default=d},4150:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(r(2784)),o=(n=r(3980))&&n.__esModule?n:{default:n},l=r(9052);function i(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}const c=e=>{const t=e.mode||"light",r=(0,a.useMemo)((()=>a.default.createElement("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24"},a.default.createElement("g",{id:"sns/twitter/hover",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},a.default.createElement("path",{className:t,d:"M3,0 L21,0 C22.6568542,-3.04359188e-16 24,1.34314575 24,3 L24,21 C24,22.6568542 22.6568542,24 21,24 L3,24 C1.34314575,24 2.02906125e-16,22.6568542 0,21 L0,3 C-2.02906125e-16,1.34314575 1.34314575,3.04359188e-16 3,0 Z M9.40543979,19.2 C15.5354921,19.2 18.8873246,14.1204188 18.8873246,9.71811518 C18.8873246,9.57298429 18.8873246,9.4278534 18.8804136,9.28963351 C19.5300471,8.81968586 20.0967487,8.23225131 20.5459634,7.56188482 C19.9516178,7.82450262 19.3088953,8.00418848 18.6316178,8.08712042 C19.3227173,7.67246073 19.8479529,7.02282723 20.0967487,6.24188482 C19.4540262,6.62198953 18.7421937,6.89842932 17.9819843,7.0504712 C17.3738168,6.4008377 16.5099424,6 15.5493141,6 C13.7109895,6 12.2182147,7.49277487 12.2182147,9.33109948 C12.2182147,9.59371728 12.2458586,9.84942408 12.3080576,10.0913089 C9.53674869,9.95308901 7.08334555,8.62617801 5.4385288,6.60816754 C5.15517801,7.09884817 4.98931414,7.67246073 4.98931414,8.28062827 C4.98931414,9.4347644 5.57674869,10.4575916 6.47517801,11.0519372 C5.92920942,11.0381152 5.41779581,10.8860733 4.96858115,10.6372775 C4.96858115,10.6510995 4.96858115,10.6649215 4.96858115,10.6787435 C4.96858115,12.2959162 6.11580628,13.6366492 7.64313613,13.947644 C7.36669634,14.0236649 7.06952356,14.0651309 6.76543979,14.0651309 C6.55119895,14.0651309 6.34386911,14.0443979 6.13653927,14.0029319 C6.55810995,15.3298429 7.78826702,16.2904712 9.24648691,16.3181152 C8.10617277,17.2096335 6.66868586,17.7417801 5.10680105,17.7417801 C4.83727225,17.7417801 4.57465445,17.7279581 4.31203665,17.6934031 C5.77025654,18.6471204 7.52564921,19.2 9.40543979,19.2"})))),[t]);return a.default.createElement("div",{className:l.cssIcon},r)};c.displayName="TwitterSvg",c.propTypes={mode:o.default.string};var d=c;t.default=d},7020:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LinkedinSvg",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"TwitterSvg",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"FacebookSvg",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"CloseSvg",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"DropdownSvg",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"ArrowSvg",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"CheckedSvg",{enumerable:!0,get:function(){return d.default}});var n=s(r(8789)),a=s(r(4150)),o=s(r(338)),l=s(r(7530)),i=s(r(5669)),c=s(r(6013)),d=s(r(6701));function s(e){return e&&e.__esModule?e:{default:e}}},9052:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.cssIcon=void 0;var n=r(200),a=r(3211);const o=n.css`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    .light {
      fill: ${a.color.white};
    }
    .dark {
      fill: ${a.color.dark};
    }
  }
  @media (hover: hover) {
    &:hover {
      svg {
        .light {
          fill: ${a.color.white};
          opacity: 0.4;
        }

        .dark {
          fill: ${a.color.line2};
        }
      }
    }
  }

  &:active {
    svg {
      .light {
        fill: ${a.color.t5Red};
      }

      .dark {
        fill: ${a.color.news};
      }
    }
  }
`;t.cssIcon=o},6802:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=c(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(r(2784)),o=(n=r(3980))&&n.__esModule?n:{default:n},l=r(200),i=r(3211);function c(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(c=function(e){return e?r:t})(e)}const d=l.css`
  position: relative;
  width: 100%;
  height: 100%;

  svg {
    position: absolute;
    width: 100%;
    height: 100%;

    path {
      stroke: none;
      fill: ${i.color.t5Red};
    }

    .angle-left {
      transform-origin: center;
      transform: rotateZ(0deg);
    }

    .angle-top {
      transform-origin: center;
      transform: rotateZ(90deg);
    }

    .angle-right {
      transform-origin: center;
      transform: rotateZ(180deg);
    }

    .angle-bottom {
      transform-origin: center;
      transform: rotateZ(270deg);
    }
  }
`,s=e=>{const t=e.angle||"left",r=(0,a.useMemo)((()=>a.default.createElement("svg",{width:"40px",height:"40px",viewBox:"0 0 40 40"},a.default.createElement("g",{className:`angle-${t}`},a.default.createElement("g",{transform:"translate(5.000000, 5.000000)"},a.default.createElement("path",{d:"M30,15 C30,15.4807835 29.627203,15.8770378 29.1469257,15.9311926 L29.0343052,15.9374971 L3.20017573,15.9367054 L15.3022515,28.4199682 C15.6677828,28.797006 15.6492627,29.3903257 15.2608856,29.7451848 C14.9023837,30.0727471 14.3540519,30.0826245 13.9843141,29.7856554 L13.8958136,29.7050268 L0.262475843,15.6425293 C-0.058327965,15.311627 -0.0850616157,14.8108998 0.182274891,14.4516934 L0.262475843,14.3574707 L13.8958136,0.294973235 C14.261345,-0.0820645885 14.8725086,-0.100043974 15.2608856,0.254815155 C15.6193876,0.582377427 15.6627451,1.11312505 15.3797938,1.48939075 L15.3022515,1.58003182 L3.20210712,14.0617057 L29.0343052,14.0624975 C29.5676437,14.0624975 30,14.4822331 30,15 Z"}))))),[t]);return a.default.createElement("div",{className:d},r)};s.propTypes={className:o.default.string,angle:o.default.string,text:o.default.string};var u=s;t.default=u},9739:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(9665))&&n.__esModule?n:{default:n}).default.div`
  cursor: pointer;
  user-select: none;
  position: relative;
  height: 40px;
  width: 40px;
`;t.default=a},4919:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(r(2784)),a=c(r(6802)),o=c(r(3980)),l=r(200),i=c(r(9739));function c(e){return e&&e.__esModule?e:{default:e}}const d=l.css`
  padding-right: 10px;

  @media (hover: hover) {
    &:hover {
      svg {
        background-color: #f3c3ca;
      }
    }
  }
`,s=e=>{const t=e.onClick;return n.default.createElement("div",{className:d,onClick:()=>{t()}},n.default.createElement(i.default,null,n.default.createElement(a.default,{angle:"left"})))};s.propTypes={onClick:o.default.func};var u=s;t.default=u},4207:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(r(2784)),a=c(r(3980)),o=r(200),l=c(r(9739)),i=r(3211);function c(e){return e&&e.__esModule?e:{default:e}}const d=o.css`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-weight: 400;
    font-size: 16px;
    color: ${i.color.dark};
  }
`,s=o.css`
  padding: 0 10px;
  position: relative;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    circle {
      stroke-width: 1px;
      fill-rule: evenodd;
      fill: none;
    }
  }

  @media (hover: hover) {
    &:hover {
      ${"."+d} {
        span {
          color: ${i.color.dark};
        }
      }

      svg {
        circle {
          fill: #f3c3ca;
        }
      }
    }
  }

  &.selected {
    ${"."+d} {
      span {
        color: ${i.color.white};
      }
    }

    svg {
      circle {
        fill: ${i.color.t5Red};
      }
    }
  }
`,u=e=>{const t=e.selected||!1,r=e.number,a=e.onClick;return n.default.createElement("div",{className:(0,o.cx)(s,{selected:t}),onClick:()=>{a(r)}},n.default.createElement(l.default,null,n.default.createElement("div",{className:d},n.default.createElement("span",null,r)),n.default.createElement("svg",{width:"40px",height:"40px",viewBox:"0 0 40 40"},n.default.createElement("circle",{cx:"20",cy:"20",r:"20"}))))};u.propTypes={selected:a.default.bool,number:a.default.number,onClick:a.default.func};var f=u;t.default=f},6382:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(r(2784)),a=c(r(6802)),o=c(r(3980)),l=r(200),i=c(r(9739));function c(e){return e&&e.__esModule?e:{default:e}}const d=l.css`
  padding-left: 10px;

  @media (hover: hover) {
    &:hover {
      svg {
        background-color: #f3c3ca;
      }
    }
  }
`,s=e=>{const t=e.onClick;return n.default.createElement("div",{className:d,onClick:()=>{t()}},n.default.createElement(i.default,null,n.default.createElement(a.default,{angle:"right"})))};s.propTypes={onClick:o.default.func};var u=s;t.default=u},2726:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(r(2784)),a=d(r(3980)),o=r(200),l=d(r(4919)),i=d(r(6382)),c=d(r(4207));function d(e){return e&&e.__esModule?e:{default:e}}const s=o.css`
  display: flex;
  flex-direction: row;
  position: relative;
  z-index: 2;
`,u=e=>{const t=e.totalPage||1,r=e.currentPage||1,a=e.onRightPageClick||(()=>{}),o=e.onLeftPageClick||(()=>{}),d=e.onPageClick||(()=>{});return n.default.createElement("div",{className:s},n.default.createElement(l.default,{onClick:o}),(()=>{const e=[];for(let a=1;a<=t;a++)Math.abs(r-a)<3&&e.push(n.default.createElement(c.default,{selected:r===a,key:a,number:a,onClick:d}));return e})(),n.default.createElement(i.default,{onClick:a}))};u.propTypes={totalPage:a.default.number,currentPage:a.default.number,onRightPageClick:a.default.func,onLeftPageClick:a.default.func,onPageClick:a.default.func};var f=u;t.default=f},6998:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(2784)),a=i(r(3980)),o=r(200),l=r(3211);function i(e){return e&&e.__esModule?e:{default:e}}const c=o.css`
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 0;
  color: white;
  font-weight: 900;
  font-size: 12px;
  width: 60px;
  height: 30px;
  border-radius: 15px;
  background-color: ${l.color.dark};
  border: 1px solid #a09a94;
  cursor: pointer;

  &.hide {
    display: none;
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${l.color.white};
      border-color: #faf8f4;
      color: ${l.color.dark};
    }
  }

  &:active {
    background-color: ${l.color.news};
    border-color: #c2bcb6;
  }

  &:focus {
    outline: none;
  }
`,d=e=>{const t=e.hide,r=e.onClick||(()=>{});return n.default.createElement("a",{className:(0,o.cx)(c,{hide:t}),onClick:e=>{e.preventDefault(),r(e)}},"RSS")};d.propTypes={hide:a.default.string,onClick:a.default.func};var s=d;t.default=s},3974:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=c(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(r(2784)),a=i(r(3980)),o=i(r(5182)),l=r(200);function i(e){return e&&e.__esModule?e:{default:e}}function c(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(c=function(e){return e?r:t})(e)}const d=l.css`
  position: absolute;
  z-index: 3;
  pointer-events: none;
  height: 100%;
  width: 100%;
  padding-bottom: calc(45.5%);
  box-sizing: border-box;
`,s=l.css`
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 2;
`,u=l.css`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
`,f=l.css`
  width: 100%;
  padding-top: 100%;
  position: relative;
`,p=e=>{const t={arrowContainer:"default",scrollContainer:"default",...e.classes},r=e.onClick||(()=>{}),a=e.text||"SCROLL",i=(0,n.useMemo)((()=>n.default.createElement("svg",{className:u,width:"88px",height:"89px",viewBox:"0 0 88 89"},n.default.createElement("g",{id:"1.5",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},n.default.createElement("g",{id:"1440up_simple_index",transform:"translate(-25.000000, -626.000000)"},n.default.createElement("g",{id:"scroll",transform:"translate(26.000000, 228.000000)"},n.default.createElement("g",{id:"Group-2",transform:"translate(0.000000, 399.933431)"},n.default.createElement("polygon",{vectorEffect:"non-scaling-stroke",id:"Rectangle",stroke:"#FFFFFF",fill:o.default["sonar-red"],transform:"translate(43.000000, 43.000000) rotate(45.000000) translate(-43.000000, -43.000000) ",points:"14.754386 14.754386 73 13 71.245614 71.245614 13 73"}),n.default.createElement("polyline",{vectorEffect:"non-scaling-stroke",id:"Rectangle-Copy",stroke:"#FFFFFF",strokeLinecap:"round",strokeLinejoin:"round",points:"58 32.6432749 43 46.7660819 28 32.6432749"}),n.default.createElement("text",{id:"SCROLL",fontFamily:"NotoSansCJKtc-Light, Noto Sans CJK TC",fontSize:"12",fontWeight:"300",fill:"#FFFFFF"},n.default.createElement("tspan",{x:"21",y:"59.2982456"},a)))))))),[a]);return n.default.createElement("div",{className:t.arrowContainer},n.default.createElement("svg",{className:d,viewBox:"0 0 88 5000"},n.default.createElement("line",{x1:"50%",y1:"100%",x2:"50%",y2:"0%",vectorEffect:"non-scaling-stroke",id:"Path-2",stroke:"#FFFFFF",strokeLinecap:"round",strokeLinejoin:"round"})),n.default.createElement("div",{className:(0,l.cx)(s,t.scrollContainer),onClick:r},n.default.createElement("div",{className:f},i)))};p.propTypes={classes:a.default.object,text:a.default.string,onClick:a.default.func};var m=p;t.default=m},6445:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(r(2784)),a=l(r(3980)),o=l(r(5182));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}const c=e=>{const t={scrollContainer:"default",...e.classes},r=e.onClick,a=(0,n.useMemo)((()=>n.default.createElement("svg",{width:"84px",height:"84px",viewBox:"0 0 84 84"},n.default.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},n.default.createElement("g",{id:"footer-tmp/nor",transform:"translate(-1166.000000, 0.000000)"},n.default.createElement("g",{id:"footer/nor"},n.default.createElement("g",{id:"Top",transform:"translate(1166.000000, 0.000000)"},n.default.createElement("g",{id:"scroll"},n.default.createElement("polygon",{id:"Rectangle",fill:o.default["t5-red"],points:"42 0 84 42 42 84 0 42"}),n.default.createElement("path",{d:"M57,56.7989281 L42,70.9217351 L27,56.7989281 M42,70.9217351 L42.5,39.9444444",id:"Combined-Shape",stroke:"#FFFFFF",strokeLinecap:"round",strokeLinejoin:"round",transform:"translate(42.000000, 55.222222) scale(1, -1) translate(-42.000000, -55.222222) "}),n.default.createElement("text",{id:"TOP",fontFamily:"NotoSansCJKtc-Light, Noto Sans CJK TC",fontSize:"12",fontWeight:"300",fill:"#FFFFFF"},n.default.createElement("tspan",{x:"30.612",y:"32"},"TOP"))))))))),[]);return n.default.createElement("div",{className:t.scrollContainer,onClick:r},a)};c.propTypes={classes:a.default.object,text:a.default.string,onClick:a.default.func};var d=c;t.default=d},7903:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(2784)),a=i(r(3980)),o=r(200),l=r(3211);function i(e){return e&&e.__esModule?e:{default:e}}const c=o.css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 32px;
  font-weight: 600;
  font-size: 12px;
  color: ${l.color.white};
`,d=e=>{const t=e.text,r=e.color;return n.default.createElement("div",{style:{backgroundColor:r},className:c,dangerouslySetInnerHTML:{__html:t.replace("<br>","\u30fb")}})};d.propTypes={text:a.default.string,color:a.default.string};var s=d;t.default=s},8259:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=c(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(r(2784)),o=(n=r(3980))&&n.__esModule?n:{default:n},l=r(200),i=r(3211);function c(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(c=function(e){return e?r:t})(e)}const d=l.css`
  min-width: 174px;
  height: 40px;
`,s=l.css`
  mix-blend-mode: multiply;
  border-radius: 25px;
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  user-select: none;
`,u=l.css`
  position: absolute;
  z-index: 3;
  font-weight: 600;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: solid 2px rgba(0, 0, 0, 0.36);
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${i.color.white};
  user-select: none;

  &:not(.active) {
    color: ${i.color.news};

    &.touch {
      border: solid 2px #404040;
    }

    @media (hover: hover) {
      &:hover {
        border: solid 2px #404040;
      }
    }
  }

  &.active {
    &.touch {
      color: ${i.color.white};
    }

    @media (hover: hover) {
      &:hover {
        color: ${i.color.white};
      }
    }
  }
`,f=l.css`
  mix-blend-mode: multiply;
  border-radius: 25px;
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.375);
`,p="top-container-hover-mix",m=l.css`
  position: relative;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  &.active {
    ${"."+p} {
      &.touch {
        ${f};
      }
    }

    @media (hover: hover) {
      &:hover {
        ${"."+p} {
          ${f};
        }
      }
    }
  }

  &:not(.active) {
    ${"."+p} {
      visibility: hidden;
    }
  }
`,h=e=>{const[t,r]=(0,a.useState)(!1),n=e.text,o=e.color,i=void 0===e.active||e.active,c={size:d,...e.classes},f=e.onClick||(()=>{});return a.default.createElement("div",{className:(0,l.cx)(m,c.size,{active:i}),onClick:e=>{f(e)},onTouchStart:()=>{r(!0)},onTouchEnd:()=>{i?r(!1):setTimeout((()=>{r(!1)}),35)}},a.default.createElement("div",{className:(0,l.cx)(p,{active:i,touch:t})}),a.default.createElement("div",{className:s,style:{backgroundColor:i?o:"rgba(0, 0, 0, 0)"}}),a.default.createElement("div",{className:(0,l.cx)(u,{touch:t,active:i}),dangerouslySetInnerHTML:{__html:n}}))};h.propTypes={className:o.default.string,text:o.default.string,color:o.default.string,active:o.default.bool,classes:o.default.object,onClick:o.default.func};var g=h;t.default=g},8140:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=c(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(r(2784)),a=i(r(3980)),o=i(r(5182)),l=r(200);function i(e){return e&&e.__esModule?e:{default:e}}function c(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(c=function(e){return e?r:t})(e)}const d=l.css`
  width: 100%;
  height: 100%;

  &.left {
    svg {
      transform: rotate(180deg);
    }
  }

  &.right {
    svg {
      transform: rotate(0deg);
    }
  }
`,s=e=>{const t=e.type||"white",r=e.angle||"left",a=(0,n.useMemo)((()=>n.default.createElement("svg",{width:"100%",height:"100%"},n.default.createElement("defs",null,n.default.createElement("pattern",{id:"x-sign-sonar-red",x:"0",y:"0",width:"18",height:"18",patternUnits:"userSpaceOnUse"},n.default.createElement("g",null,n.default.createElement("line",{x1:"0",y1:"0",x2:"10",y2:"10",style:{stroke:o.default["sonar-red"],strokeWidth:"1px"}}),n.default.createElement("line",{x1:"10",y1:"0",x2:"0",y2:"10",style:{stroke:o.default["sonar-red"],strokeWidth:"1px"}}))),n.default.createElement("pattern",{id:"x-sign-vision-yello",x:"0",y:"0",width:"18",height:"18",patternUnits:"userSpaceOnUse"},n.default.createElement("g",null,n.default.createElement("line",{x1:"0",y1:"0",x2:"10",y2:"10",style:{stroke:o.default["vision-yello"],strokeWidth:"1px"}}),n.default.createElement("line",{x1:"10",y1:"0",x2:"0",y2:"10",style:{stroke:o.default["vision-yello"],strokeWidth:"1px"}}))),n.default.createElement("pattern",{id:"x-sign-white",x:"0",y:"0",width:"18",height:"18",patternUnits:"userSpaceOnUse"},n.default.createElement("g",null,n.default.createElement("line",{x1:"0",y1:"0",x2:"10",y2:"10",style:{stroke:o.default.white,strokeWidth:"1px"}}),n.default.createElement("line",{x1:"10",y1:"0",x2:"0",y2:"10",style:{stroke:o.default.white,strokeWidth:"1px"}}))),n.default.createElement("pattern",{id:"x-sign-dark",x:"0",y:"0",width:"18",height:"18",patternUnits:"userSpaceOnUse"},n.default.createElement("g",null,n.default.createElement("line",{x1:"0",y1:"0",x2:"10",y2:"10",style:{stroke:o.default.dark,strokeWidth:"1px"}}),n.default.createElement("line",{x1:"10",y1:"0",x2:"0",y2:"10",style:{stroke:o.default.dark,strokeWidth:"1px"}}))),n.default.createElement("pattern",{id:"x-sign-t5-red",x:"0",y:"0",width:"18",height:"18",patternUnits:"userSpaceOnUse"},n.default.createElement("g",null,n.default.createElement("line",{x1:"0",y1:"0",x2:"10",y2:"10",style:{stroke:o.default["t5-red"],strokeWidth:"1px"}}),n.default.createElement("line",{x1:"10",y1:"0",x2:"0",y2:"10",style:{stroke:o.default["t5-red"],strokeWidth:"1px"}})))),n.default.createElement("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:`url(#x-sign-${t})`}))),[t]);return n.default.createElement("div",{className:(0,l.cx)(d,r)},a)};s.propTypes={type:a.default.string,angle:a.default.string};var u=s;t.default=u},6262:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"TopicFlag",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"TopicLabel",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"ScrollTop",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"ScrollDown",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Paginator",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"XGrid",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"RSSButton",{enumerable:!0,get:function(){return s.default}});var n=u(r(1176)),a=u(r(7903)),o=u(r(8259)),l=u(r(6445)),i=u(r(3974)),c=u(r(2726)),d=u(r(8140)),s=u(r(6998));function u(e){return e&&e.__esModule?e:{default:e}}},526:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=[{name:"solution",i18nKey:"common.nav.solution",isDropdown:!0,sub:[{name:"threat-sonar",i18nKey:"common.nav.threat-sonar",as:"/products/threatsonar",href:"/products/threatsonar",imageUrl:"/images/icons/ThreatSonar.svg",logEventKey:"solution_threatsonar"},{name:"threat-vision",i18nKey:"common.nav.threat-vision",as:"/products/threatvision",href:"/products/threatvision",imageUrl:"/images/icons/ThreatVision.svg",logEventKey:"solution_threatvision"}]},{name:"company",i18nKey:"common.nav.company",isDropdown:!0,sub:[{name:"about-us",i18nKey:"common.nav.about-us",as:"/about-us",href:"/about-us",imageUrl:"https://res.cloudinary.com/dvgomg5gh/image/upload/q_90/w_200,c_scale/f_auto/v1597723059/about_cover_59b796ac5a.jpg",logEventKey:"company_about"},{name:"careers",i18nKey:"common.nav.careers",as:"/careers",href:"/careers",imageUrl:"https://res.cloudinary.com/dvgomg5gh/image/upload/q_90/w_200,c_scale/f_auto/v1597723058/TeamT5_Careers_img_b6492dddfd.jpg",logEventKey:"company_careers"}]},{name:"newsAndEvents",i18nKey:"common.nav.news-and-event",as:"/news-and-events",href:"/news-and-events",logEventKey:"news"},{name:"blog",i18nKey:"common.nav.blog",as:"/blog",href:"/blog",logEventKey:"blog"},{name:"contact-us",i18nKey:"common.nav.contact-us",isDropdown:!0,sub:[{name:"request-information",i18nKey:"common.nav.request-information",as:"/request-information",href:"/request-information",imageUrl:"https://res.cloudinary.com/dvgomg5gh/image/upload/q_90/w_200,c_scale/f_auto/v1597723058/info_9e3a7cbe05.jpg",logEventKey:"contact_information"},{name:"partner",i18nKey:"common.nav.become-a-partner",as:"/become-a-partner",href:"/become-a-partner",imageUrl:"https://res.cloudinary.com/dvgomg5gh/image/upload/q_90/w_200,c_scale/f_auto/v1602841516/partner_c95a01f8af.jpg",logEventKey:"contact_partner"}]}]},767:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t=0){const[r,a]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{var r,n;const o=null!==(r=null===e||void 0===e?void 0:e.current)&&void 0!==r?r:document.documentElement,l=null!==(n=null===e||void 0===e?void 0:e.current)&&void 0!==n?n:document,i=()=>{a(o.scrollTop>t)};return i(),l.addEventListener("scroll",i),()=>{l.removeEventListener("scroll",i)}}),[]),r};var n=r(2784)},258:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=u(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(r(2784)),a=s(r(3980)),o=s(r(7623)),l=s(r(8748)),i=r(4756),c=s(r(767)),d=r(200);function s(e){return e&&e.__esModule?e:{default:e}}function u(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(u=function(e){return e?r:t})(e)}const f=d.css`
  width: 100%;
  position: relative;
  flex: 1 0;
  overflow: auto;

  @media screen and (max-width: 375px) {
    width: 375px;
  }
`,p=d.css`
  left: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,m=e=>{var t,r,a;const d=e.isHeaderTop,s=e.headerRef,u=e.headerContainerRef,m=null===(t=e.enableFooter)||void 0===t||t,h=null===(r=e.enableHeader)||void 0===r||r,g=e.classes,v=e.iconMode,y=e.activeLazy,x=(0,n.useContext)(i.AppContext),w=x.isStartup,b=null!==(a=e.isShrink)&&void 0!==a?a:(0,c.default)(e.scrollAreaRef,0),[C,E]=(0,n.useState)(99);return(0,n.useEffect)((()=>{!y&&w&&x.setLoadFinished(!0)}),[w]),n.default.createElement("div",{className:p},h&&n.default.createElement(l.default,{openIndex:C,setOpenIndex:E,isHeaderTop:d,headerRef:s,headerContainerRef:u,classes:g,iconMode:v,isShrink:b}),n.default.createElement("main",{className:f},e.children),m&&n.default.createElement(o.default,null))};m.propTypes={isHeaderTop:a.default.bool,isShrink:a.default.bool,headerRef:a.default.object,headerContainerRef:a.default.object,classes:a.default.object,iconMode:a.default.object,activeLazy:a.default.bool,enableFooter:a.default.bool,enableHeader:a.default.bool,scrollAreaRef:a.default.object};var h=m;t.default=h},2143:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=u(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(r(2784)),o=r(6385),l=r(4756),i=(n=r(5182))&&n.__esModule?n:{default:n},c=r(5632),d=r(3211),s=r(200);function u(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(u=function(e){return e?r:t})(e)}const f=s.css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`,p=s.css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  > select {
    background-color: white;
    border: 1px ${d.color.footerLine} solid;
    border-radius: 0;
    padding: 3px 20px 3px 9px;
    appearance: none;
    outline: none;
    color: ${d.color.dark};

    &:active {
      outline: none;
    }

    &:focus {
      outline: none;
    }
  }

  > svg {
    pointer-events: none;
    right: 13px;
    position: relative;
  }
`;var m=()=>{const e=(0,c.useRouter)(),t=(0,a.useContext)(o.LocaleContext),{pathname:r,asPath:n}=e,{isExport:d,loadingMaskRef:s}=(0,a.useContext)(l.AppContext);return a.default.createElement("div",{className:f},a.default.createElement("div",{className:p},a.default.createElement("select",{value:t.locale,onChange:t=>{(async t=>{const a=r.split("/"),o=n.split("/"),l=a.indexOf("[lang]");var i,c;s.current.collapse(),await new Promise((e=>{setTimeout((()=>{e()}),1700)})),-1!==l?(o[l]=t,null===(i=localStorage)||void 0===i||i.setItem("lang",t),d||d?window.location.href=o.join("/"):e.push(a.join("/"),o.join("/"))):(a[0]="[lang]",a.unshift(""),o[0]=t,o.unshift(""),console.log(t),null===(c=localStorage)||void 0===c||c.setItem("lang",t),e.push(a.join("/"),o.join("/")))})(t.target.value)}},a.default.createElement("option",{value:"en"},"English"),a.default.createElement("option",{value:"tw"},"\u7e41\u9ad4\u4e2d\u6587"),a.default.createElement("option",{value:"jp"},"\u65e5\u672c\u8a9e")),a.default.createElement("svg",{width:"8px",height:"4px",viewBox:"0 0 8 4",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},a.default.createElement("g",{id:"Symbols",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},a.default.createElement("g",{id:"footer/nor",transform:"translate(-1227.000000, -341.000000)",fill:i.default.dark},a.default.createElement("g",{transform:"translate(1170.000000, 333.000000)"},a.default.createElement("polygon",{id:"Triangle",transform:"translate(61.000000, 10.000000) scale(1, -1) translate(-61.000000, -10.000000) ",points:"61 8 65 12 57 12"})))))))};t.default=m},583:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=p(r(2784)),a=p(r(3980)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(r(7409)),l=p(r(526)),i=p(r(4442)),c=p(r(8126)),d=r(3211),s=r(200),u=p(r(9665));function f(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}function p(e){return e&&e.__esModule?e:{default:e}}const m=s.css`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 767px) {
    margin-bottom: 5px;
  }

  @media screen and (max-width: 575px) {
    margin: 20px 0;
  }
`,h=s.css`
  display: unset;
  position: relative;

  &.disable {
    cursor: unset;
    pointer-events: none;
  }
`,g=s.css`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`,v=s.css`
  &::after {
    content: '';
    width: 0%;
    border-bottom: 1px solid ${d.color.news};
    position: absolute;
    right: 0;
    bottom: 0;
    transition: width 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
  }

  &:hover::after {
    left: 0;
    width: 100%;
  }
`,y=s.css`
  position: relative;
`,x=s.css`
  cursor: pointer;
  font-size: 12px;
  line-height: 2;
  color: ${d.color.news};
  display: unset;
  position: relative;
`,w=s.css`
  height: 100%;
  align-items: center;
  min-width: auto;
  min-height: 50px;
  padding: 10px;

  @media screen and (max-width: 767px) {
    min-width: 120px;
  }
`,b=({className:e,children:t})=>n.default.createElement("h6",{className:e},t);b.propTypes={className:a.default.string};const C=(0,u.default)(b)`
  display: unset;
  cursor: pointer;
  margin: 0;
  color: ${d.color.dark};
  font-size: 14px;
  font-weight: bold;
`;var E=()=>{const{t:e}=(0,i.default)();return n.default.createElement("div",{className:m},l.default.map((t=>n.default.createElement("div",{className:w,key:t.name},n.default.createElement("div",{onClick:()=>o.event({action:`footer_${t.logEventKey}`,category:"nav"}),className:(0,s.cx)(h,{disable:t.isDropdown})},n.default.createElement(c.default,{as:t.as,href:t.href},n.default.createElement("a",null,n.default.createElement(C,{className:v},e(t.i18nKey)||t.i18nKey)))),t.isDropdown&&n.default.createElement("div",{className:g},t.sub.map((t=>n.default.createElement("div",{className:y,key:t.name},n.default.createElement(c.default,{as:t.as,href:t.href},n.default.createElement("a",null,n.default.createElement("div",{className:(0,s.cx)(v,x),onClick:()=>o.event({action:`footer_${t.logEventKey}`,category:"nav"})},e(t.i18nKey)||t.i18nKey)))))))))))};t.default=E},7623:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=m(r(2784)),a=r(423),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(r(7409)),l=r(6262),i=m(r(4442)),c=m(r(8126)),d=m(r(583)),s=m(r(2143)),u=r(200),f=r(3211);function p(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}function m(e){return e&&e.__esModule?e:{default:e}}const h=u.css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,g=u.css`
  position: absolute;
  cursor: pointer;
  margin-right: 30px;
  right: 0;
  z-index: 2;
  width: 84px;
  height: 84px;

  @media screen and (max-width: 767px) {
    margin-right: 0;
  }
`,v=u.css`
  width: 100%;
  position: absolute;
  top: -42px;
  right: 0;

  @media screen and (max-width: 767px) {
    width: 100%;
    position: relative;
    top: -82px;
  }
`,y=u.css`
  cursor: pointer;

  &.disable {
    cursor: initial;
  }

  &:not(:last-child) {
    margin-right: 20px;
  }

  @media screen and (max-width: 767px) {
    &:not(:last-child) {
      padding-bottom: 10px;
    }
  }
`,x=u.css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px 10px;

  @media screen and (max-width: 1023px) {
    padding: 20px 28px;
  }

  @media screen and (max-width: 1439px) {
    padding: 20px;
  }

  @media screen and (max-width: 1279px) {
    padding: 20px 24px;
  }

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 30px 0 30px;
  }
`,w=u.css`
  margin-right: 50px;
  height: 100%;
  cursor: pointer;

  img {
    height: 100%;
  }
`,b=u.css`
  height: 31%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 40px 10px;

  @media screen and (max-width: 1439px) {
    padding: 40px 20px;
  }

  @media screen and (max-width: 1279px) {
    padding: 40px 24px;
  }

  @media screen and (max-width: 1023px) {
    padding: 40px 28px;
  }

  @media screen and (max-width: 767px) {
    padding: 0 20px;
  }
`,C=u.css`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  font-size: 10px;
  padding: 42px 20px 0 20px;
  color: ${f.color.dark};

  hr {
    margin: 0;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid ${f.color.footerLine};
  }

  @media screen and (max-width: 767px) {
    padding: 40px 0 20px 0;
  }
`,E=()=>{const{t:e,locale:t}=(0,i.default)(),r={smooth:!0};return n.default.createElement("footer",{className:C},n.default.createElement("div",{className:v},n.default.createElement(l.ScrollTop,{classes:{scrollContainer:g},onClick:()=>{a.animateScroll.scrollToTop(r)}})),n.default.createElement("div",{className:b},n.default.createElement(c.default,{as:"/",href:"/"},n.default.createElement("a",{className:w},n.default.createElement("img",{src:"/images/logo_contact.svg",alt:"",onClick:()=>o.event({action:"footer_logo",category:"nav"})}))),n.default.createElement(d.default,null)),n.default.createElement("hr",null),n.default.createElement("div",{className:h},n.default.createElement("div",{className:x},n.default.createElement(c.default,{as:"/privacy-and-cookies-policy",href:"/privacy-and-cookies-policy"},n.default.createElement("a",{className:y},e("common.nav.privacy-and-cookies-policy"))),n.default.createElement(c.default,{as:"/terms-of-service",href:"/terms-of-service"},n.default.createElement("a",{className:y},e("common.nav.terms-of-service"))),"tw"===t&&n.default.createElement(c.default,{as:"/security-policy",href:"/security-policy"},n.default.createElement("a",{className:y},e("common.nav.security-policy"))),n.default.createElement("div",{className:(0,u.cx)(y,"disable")},"\xa9 2020 TEAM T5, Inc. All Rights Reserved.")),n.default.createElement(s.default,null)))};E.displayName="Footer";var k=E;t.default=k},2041:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(2784)),a=i(r(3980)),o=r(200),l=r(3211);function i(e){return e&&e.__esModule?e:{default:e}}const c=o.css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 119px;
  height: 80px;
  transform: scale(1);
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    transition: transform 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &.product {
    img {
      width: 60px;
      height: 60px;
    }
  }
`,d=o.css`
  background-color: ${l.color.sonarRed};
`,s=o.css`
  background-color: ${l.color.visionYello};
`,u=["threat-sonar","threat-vision"],f=({src:e,name:t})=>{const r=u.indexOf(t)>-1;return n.default.createElement("div",{className:(0,o.cx)("dropdown-item-image",c,{[d]:"threat-sonar"===t,[s]:"threat-vision"===t},{product:r})},n.default.createElement("img",{src:e,alt:t}))};f.propTypes={src:a.default.string,name:a.default.string};var p=f;t.default=p},3681:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(2784)),a=d(r(8126)),o=d(r(3980)),l=d(r(5182)),i=u(r(7409)),c=r(200);function d(e){return e&&e.__esModule?e:{default:e}}function s(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(s=function(e){return e?r:t})(e)}function u(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=s(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}const f=c.css`
  transition: opacity 0.3s, transform 0.3s;
  transform: translate(28px, 28px) scale(1.5, 1.584);

  &:not(.scroll-active) {
    transform: translate(42px, 34px);
  }
`,p=c.css`
  transition: opacity 0.3s, transform 0.3s;
  opacity: 0;
  transform: translate(38px, 94.39px);

  &:not(.scroll-active) {
    opacity: 1;
    transform: translate(38px, 94.39px);
  }
`,m=c.css`
  transition: height 0.3s, width 0.3s;
  background-size: cover;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }

  &:not(.scroll-active) {
    width: 140px;
    height: 140px;
  }

  &.scroll-active {
    width: 80.05px;
    height: 80.05px;
  }

  @media screen and (max-width: 767px) {
    &:not(.scroll-active) {
      width: 80px;
      height: 80px;
    }

    &.scroll-active {
      width: 50px;
      height: 50px;
    }
  }
`,h=e=>{const t=e.scrollActive;return n.default.createElement(a.default,{as:"/",href:"/"},n.default.createElement("a",{className:(0,c.cx)(m,{"scroll-active":t}),onClick:()=>i.event({action:"header_logo",category:"nav"})},n.default.createElement(g,{scrollActive:t})))};h.displayName="Logo",h.propTypes={scrollActive:o.default.bool};const g=e=>{const t=e.scrollActive,r=(0,n.useMemo)((()=>n.default.createElement("svg",{width:"140px",height:"140px",viewBox:"0 0 140 140"},n.default.createElement("g",{id:"Symbols",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},n.default.createElement("g",{id:"header_logo_L"},n.default.createElement("g",null,n.default.createElement("rect",{id:"Rectangle",fill:l.default["t5-red"],x:"0",y:"0",width:"140",height:"140"}),n.default.createElement("g",{id:"logo",fill:"#FEFEFE"},n.default.createElement("g",{className:(0,c.cx)(f,{"scroll-active":t})},n.default.createElement("path",{d:"M45.3878535,7.83374722 L46.5394028,6.64521453 C41.9643042,2.79068668 36.0560225,0.348420339 29.5325296,0.000255690073 L29.5325296,7.2512 C30.6363042,8.26884649 33.1205859,8.98776174 36.5806423,8.98776174 C40.4539944,8.98776174 44.2998535,8.10477869 45.3878535,7.83374722",id:"Fill-1"}),n.default.createElement("path",{d:"M26.3422648,52.6615012 L26.3422648,50.0376949 C19.5488,43.5926005 14.657307,42.8932881 12.8558423,42.8932881 L12.4429972,42.9060726 L9.33764507,46.0156901 C13.9118423,49.8697918 19.8196732,52.3129104 26.3422648,52.6615012",id:"Fill-3"}),n.default.createElement("path",{d:"M46.3986028,45.2400969 C44.2419831,44.4845327 42.1705465,44.1001453 40.2415324,44.1001453 C33.6680113,44.1001453 30.3197296,48.5244358 29.4516732,49.8791671 L29.5192789,52.6619274 C36.3294197,52.3018305 42.4819831,49.6703535 47.1359549,45.5239128 L46.3986028,45.2400969 Z",id:"Fill-5"}),n.default.createElement("path",{d:"M49.3275493,43.2795506 C53.0927324,39.0500107 55.4575775,33.7099235 55.8113803,27.8367225 L51.4832676,27.8367225 C49.2689577,28.6758121 47.6410141,30.0633569 46.8347042,31.9256329 C45.2644507,35.5670857 46.9270986,40.3173811 47.7140282,42.1903109 L49.3275493,43.2795506 Z",id:"Fill-7"}),n.default.createElement("path",{d:"M16.046062,8.13963777 C20.6599211,8.13963777 24.7414986,7.04869346 26.3424,6.55904697 L26.3424,0.000170460048 C19.8198085,0.348761259 13.9128789,2.79145375 9.33868169,6.6451293 L10.3369915,7.58777337 C11.9067944,7.90823826 13.9128789,8.13963777 16.046062,8.13963777",id:"Fill-9"}),n.default.createElement("path",{d:"M7.70582535,9.29574044 L7.08385352,8.77370654 C3.00002254,13.0923119 0.411628169,18.6684862 0.0429521127,24.8255031 L6.49072676,24.8255031 C11.2276282,18.4588203 7.85230423,9.67075254 7.70582535,9.29574044",id:"Fill-11"}),n.default.createElement("path",{d:"M6.34780845,27.8365947 L0.0429070423,27.8365947 C0.412935211,33.9927593 2.99952676,39.5689337 7.08290704,43.887539 L9.97417839,41.1563429 C9.97778028,35.5507642 7.37811831,29.8667738 6.34780845,27.8365947",id:"Fill-13"}),n.default.createElement("path",{d:"M12.8634141,24.8256736 C17.1762028,22.6514557 17.0261183,19.1634169 16.7484845,17.766923 L11.7177239,13.1244436 C12.1882592,16.1957075 12.254062,20.6979835 9.9315831,24.8256736 L12.8634141,24.8256736 Z",id:"Fill-15"}),n.default.createElement("path",{d:"M13.7971831,10.8505065 L18.6422535,15.4235235 C19.5337465,15.5837559 20.6100282,15.7333346 21.5934648,15.7333346 C24.3594366,15.7333346 25.8409014,14.5482111 26.4732394,13.8416542 L26.3614648,9.47404165 C24.1588732,10.0962208 20.3977465,10.934032 16.0962254,10.934032 C15.3210141,10.934032 14.5494085,10.9050538 13.7971831,10.8505065",id:"Fill-17"}),n.default.createElement("path",{d:"M41.6613859,24.8256736 L46.3753014,24.8256736 C44.5544563,23.29963 43.3163718,21.5485792 42.6876394,19.6040562 C42.1972732,18.0890925 42.1125408,16.4739835 42.4289352,14.7830199 L38.9531042,18.0673588 C38.9760901,18.1474751 38.910738,18.3170828 38.8954141,18.4986228 C38.7061183,20.6562208 40.6468507,23.5020513 41.6613859,24.8256736",id:"Fill-19"}),n.default.createElement("path",{d:"M12.7555606,38.5327923 L17.2071662,34.3309521 C17.0530254,29.6173056 12.7055324,27.9787584 12.2038986,27.8057414 L9.59612394,27.8296058 C10.5912789,29.9816639 12.2462648,34.0816542 12.7555606,38.5327923",id:"Fill-21"}),n.default.createElement("path",{d:"M46.2172845,27.8365947 L41.9004394,27.8365947 C38.0352,29.5646334 37.6029746,33.2550935 37.5912563,34.6933501 L43.6635944,39.135539 C43.1272563,36.6919942 42.9226366,33.6339409 44.1070873,30.8844203 C44.5970028,29.7410596 45.306862,28.7195777 46.2172845,27.8365947",id:"Fill-23"}),n.default.createElement("path",{d:"M45.5075606,18.7829927 C46.6532507,22.3566877 50.5685183,24.3502179 51.7376451,24.8765133 L55.8349972,24.8317676 C55.4672225,18.673046 52.8801803,13.0943148 48.7949972,8.77485714 L48.1847437,9.35186441 L47.9224338,9.72900726 C45.4688,13.0917579 44.6588845,16.1374528 45.5075606,18.7829927",id:"Fill-25"}),n.default.createElement("path",{d:"M29.5945014,42.8879613 L29.5286986,43.335845 L29.5327549,45.4930169 C31.5735437,43.6614237 35.1305014,41.4130557 40.2919662,41.4130557 C40.7354592,41.4130557 41.1830085,41.4296755 41.6341634,41.462063 L35.2923042,36.8251235 C30.4585014,37.3369298 29.6251493,42.6582663 29.5945014,42.8879613",id:"Fill-27"}),n.default.createElement("path",{d:"M32.1713127,16.1228785 C32.5417915,16.2319729 32.9505803,16.2869462 33.3864113,16.2869462 C35.2847775,16.2869462 37.2480451,15.2326508 37.8037634,14.9100552 L41.4918761,11.4147719 C39.7634254,11.6551206 38.1237634,11.7769995 36.5963268,11.7769995 C33.7145239,11.7769995 31.3456225,11.3367864 29.5328901,10.4627525 L29.5328901,13.4862877 C30.1192563,14.8448542 31.0143549,15.7840891 32.1713127,16.1228785",id:"Fill-29"}),n.default.createElement("path",{d:"M26.3422648,41.5732881 C24.648969,37.2640581 20.8373634,36.7778208 19.2747718,36.7778208 L18.9241239,36.7884746 L15.3054197,40.3536465 C17.9402366,40.863322 21.7130817,42.350586 26.3422648,46.2306828 L26.3422648,41.5732881 Z",id:"Fill-31"}),n.default.createElement("polygon",{id:"Fill-33",points:"27.9386592 34.3720329 36.4574197 26.3310063 27.9386592 18.2899797 19.4198986 26.3310063"})),n.default.createElement("g",{className:(0,c.cx)(p,{"scroll-active":t})},n.default.createElement("path",{d:"M53.5407775,0.00379273608 L45.8256225,0.00379273608 C45.6034254,0.00379273608 45.4114254,0.0800736077 45.2505239,0.232209201 C45.0896225,0.384770944 45.0089465,0.570998547 45.0089465,0.79174431 C45.0089465,1.01206392 45.0896225,1.19871768 45.2505239,1.35085327 C45.4114254,1.50341501 45.6034254,1.57926973 45.8256225,1.57926973 L48.5582423,1.57926973 C48.647031,1.57926973 48.6916507,1.61634479 48.6916507,1.68964262 L48.6916507,9.87513414 C48.6916507,10.127415 48.7858479,10.3456039 48.9751437,10.5288484 C49.163538,10.7129453 49.3970028,10.8049937 49.6746366,10.8049937 L49.6913127,10.8049937 C49.9581296,10.8049937 50.1884394,10.7129453 50.3831437,10.5288484 C50.5769465,10.3456039 50.6742986,10.127415 50.6742986,9.87513414 L50.6742986,1.68964262 C50.6742986,1.61634479 50.7135099,1.57926973 50.791031,1.57926973 L53.5407775,1.57926973 C53.7737915,1.57926973 53.9707493,1.50341501 54.1321014,1.35085327 C54.2930028,1.19871768 54.3736789,1.01206392 54.3736789,0.79174431 C54.3736789,0.570998547 54.2930028,0.384770944 54.1321014,0.232209201 C53.9707493,0.0800736077 53.7737915,0.00379273608 53.5407775,0.00379273608",id:"Fill-35"}),n.default.createElement("path",{d:"M62.5289014,4.67316223 C61.895662,4.16732203 61.0830423,3.84856174 60.1978592,3.84472639 C60.192,3.84472639 56.8455211,3.84387409 56.8455211,3.84387409 L56.8455211,1.5908184 L61.8821408,1.5908184 C62.3468169,1.5908184 62.7209014,1.2345569 62.7209014,0.795196126 C62.7209014,0.356261501 62.3445634,9.9475983e-14 61.880338,9.9475983e-14 C61.8695211,9.9475983e-14 55.1661972,0.000426150121 55.1661972,0.000426150121 L55.1612394,5.45642615 C55.1612394,5.45642615 60.2442817,5.45813075 60.2587042,5.45898305 C61.2232113,5.50628571 61.9997746,6.45745278 61.9997746,7.30719613 C61.9997746,8.13435351 61.2633239,9.14646005 60.3335211,9.22018402 C60.3033239,9.22487167 55.2189296,9.21890557 55.2009014,9.22061017 C54.7610141,9.24617918 54.3743099,9.59349153 54.3743099,10.0158063 C54.3743099,10.0294431 54.3734085,10.0362615 54.3743099,10.0498983 C54.4009014,10.4700823 54.8250141,10.8105763 55.2748169,10.8105763 C55.3248451,10.8105763 60.1807324,10.8050363 60.1807324,10.8050363 C61.0397746,10.8050363 61.8294085,10.5399709 62.456338,10.1023148 C63.308169,9.50783535 63.8580282,8.32569492 63.8580282,7.30719613 C63.8580282,6.31682324 63.340169,5.32133656 62.5289014,4.67316223",id:"Fill-37"}),n.default.createElement("path",{d:"M19.8986366,1.07875642 C20.091538,1.07875642 20.2492845,0.929177724 20.2492845,0.747211622 C20.2492845,0.56481937 20.091538,0.415666828 19.8986366,0.415666828 L12.4863549,0.415666828 L12.4859042,0.415666828 C12.2930028,0.415666828 12.135707,0.56481937 12.135707,0.747211622 L12.135707,10.4732358 C12.135707,10.5188339 12.1451718,10.5623012 12.1632,10.6023593 C12.2168338,10.7208291 12.3412282,10.8047806 12.4859042,10.8047806 L19.8986366,10.8047806 C20.091538,10.8047806 20.2492845,10.6556281 20.2492845,10.4732358 C20.2492845,10.2908436 20.091538,10.1421172 19.8986366,10.1421172 L12.8365521,10.1421172 L12.8365521,5.53884358 L19.4682141,5.53884358 C19.6444394,5.53884358 19.7882141,5.40247554 19.7882141,5.236277 L19.7882141,5.17874673 C19.7882141,5.01212203 19.6444394,4.875754 19.4682141,4.875754 L12.8365521,4.875754 L12.8365521,1.07875642 L19.8986366,1.07875642 Z",id:"Fill-39"}),n.default.createElement("path",{d:"M10.1354366,0.415794673 L0.350647887,0.415794673 C0.157746479,0.415794673 -1.04805054e-13,0.564947215 -1.04805054e-13,0.746913317 C-1.04805054e-13,0.929305569 0.157746479,1.07888426 0.350647887,1.07888426 L4.89239437,1.07888426 L4.89239437,10.4733637 C4.89239437,10.6553298 5.05014085,10.8049085 5.24304225,10.8049085 C5.43594366,10.8049085 5.59369014,10.6553298 5.59369014,10.4733637 L5.59369014,1.07888426 L10.1354366,1.07888426 C10.328338,1.07888426 10.4860845,0.929305569 10.4860845,0.746913317 C10.4860845,0.564947215 10.328338,0.415794673 10.1354366,0.415794673",id:"Fill-41"}),n.default.createElement("path",{d:"M24.5099718,6.72980533 L27.1776901,1.32025569 L29.8454085,6.72980533 L24.5099718,6.72980533 Z M27.5341972,0.47477385 C27.4692958,0.343093462 27.3232676,0.274909443 27.1776901,0.289824697 C27.0325634,0.274909443 26.8860845,0.343093462 26.8211831,0.47477385 L21.9643944,10.322677 C21.8828169,10.4875971 21.9589859,10.6861831 22.1338592,10.7633162 C22.3087324,10.8404494 22.5183099,10.76843 22.5998873,10.6030838 L24.1827606,7.39289492 L30.172169,7.39289492 L31.755493,10.6030838 C31.8370704,10.76843 32.0466479,10.8404494 32.2215211,10.7633162 C32.3963944,10.6861831 32.4725634,10.4875971 32.3909859,10.322677 L27.5341972,0.47477385 Z",id:"Fill-43"}),n.default.createElement("path",{d:"M42.8502085,0.161510896 L42.8466028,0.161510896 C42.7375324,0.161510896 42.6433352,0.21264891 42.5793352,0.288077482 C42.5599549,0.306828087 42.5383211,0.323447942 42.5234479,0.347738499 L38.6347718,6.71612591 L34.7726873,0.391205811 C34.7298704,0.254837772 34.6014197,0.152561743 34.4436732,0.152561743 L34.4400676,0.152561743 C34.2480676,0.152561743 34.0912225,0.300861985 34.0912225,0.482401937 L34.0912225,10.466247 C34.0912225,10.6473608 34.2480676,10.795661 34.4400676,10.795661 L34.4436732,10.795661 C34.6352225,10.795661 34.7925183,10.6473608 34.7925183,10.466247 L34.7925183,1.74934625 L38.3300958,7.54243099 C38.3350535,7.55138015 38.3440676,7.55649395 38.3503775,7.56416465 C38.3589408,7.576523 38.3706592,7.58632446 38.3810254,7.59740436 C38.4017577,7.61828571 38.4224901,7.63788862 38.4472789,7.65280387 C38.4526873,7.65578692 38.4553915,7.66132688 38.4608,7.66388378 C38.4720676,7.66984988 38.4842366,7.67027603 38.4959549,7.67538983 C38.520293,7.68476513 38.5437296,7.69414044 38.5698704,7.69882809 C38.5919549,7.70223729 38.6126873,7.70266344 38.6347718,7.70266344 C38.6568563,7.70266344 38.6780394,7.70223729 38.6996732,7.69882809 C38.7258141,7.69414044 38.7492507,7.68476513 38.7735887,7.67538983 C38.7848563,7.67027603 38.7974761,7.66984988 38.8087437,7.66388378 C38.8141521,7.66132688 38.817307,7.65578692 38.8222648,7.65280387 C38.8475042,7.63788862 38.8677859,7.61828571 38.8885183,7.59740436 C38.8988845,7.58632446 38.9106028,7.576523 38.9191662,7.56416465 C38.9254761,7.55649395 38.9344901,7.55138015 38.9394479,7.54243099 L42.4977577,1.71525424 L42.4977577,10.4751961 C42.4977577,10.6563099 42.6546028,10.8050363 42.8466028,10.8050363 L42.8502085,10.8050363 C43.0422085,10.8050363 43.1990535,10.6563099 43.1990535,10.4751961 L43.1990535,0.49135109 C43.1990535,0.310237288 43.0422085,0.161510896 42.8502085,0.161510896",id:"Fill-45"})))))))),[t]);return n.default.createElement(n.default.Fragment,null,r)};g.propTypes={scrollActive:o.default.bool};var v=h;t.default=v},6837:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"NavItem",{enumerable:!0,get:function(){return f.default}}),t.Nav=void 0;var n=m(r(2784)),a=m(r(3980)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(r(7409)),l=r(7020),i=m(r(6985)),c=m(r(526)),d=r(200),s=m(r(9665)),u=r(3211),f=m(r(6500));function p(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}function m(e){return e&&e.__esModule?e:{default:e}}const h=s.default.a`
  text-decoration: none;
`,g=d.css`
  height: 100%;
  display: flex;
  flex-direction: row;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
  }
`,v=d.css`
  margin-right: 30px;
  height: 100%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 767px) {
    margin: 0 10px;
  }
`,y=d.css`
  display: none;

  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 20px;
    cursor: pointer;
  }
`,x=d.css`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    box-sizing: border-box;
    padding: 0 20px;
    height: initial;
  }

  @media screen and (max-width: 375px) {
    width: 375px;
  }
`,w=d.css`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;

  @media screen and (max-width: 767px) {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
  }
`,b=d.css`
  @media screen and (max-width: 767px) {
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.3s;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: ${u.color.bgColor2};

    &.show {
      opacity: 1;
    }
  }
`,C=d.css`
  position: relative;
  height: 100%;

  @media screen and (max-width: 767px) {
    position: absolute;
    right: 0;
    overflow: auto;
    height: calc(100vh - 100%);
    width: 100vw;
    top: 100%;

    &.disable-pointer-events {
      pointer-events: none;
    }
  }

  @media screen and (max-width: 375px) {
    width: inherit;
  }
`,E=d.css`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    height: initial;
  }
`,k=d.css`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    opacity: 0;
    transition: opacity 0.17s;
    width: 100%;
    height: 100%;

    &.show {
      opacity: 1;
    }
  }
`,O=e=>{var t;const r=e.openIndex,a=e.setOpenIndex,d=e.scrollActive,s=e.setActiveBurger,u=e.activeBurger,p=null!==(t=e.iconMode)&&void 0!==t?t:{origin:"dark",scrollActive:"dark"};return n.default.createElement("nav",{className:w},n.default.createElement("div",{className:y},n.default.createElement(i.default,{activeBurger:u,onClick:()=>{s((e=>{const t=!e;return document.body.style.overflow=t?"hidden":"unset",t}))},color:d?p.scrollActive:p.origin})),n.default.createElement("div",{className:`${C} ${u?"":"disable-pointer-events"}`},n.default.createElement("div",{className:E},n.default.createElement("div",{className:x},n.default.createElement("div",{className:`\n              ${b}\n              ${u?"show":""}\n            `}),n.default.createElement("div",{className:`\n                ${k}\n                ${u?"show":""}\n              `},c.default.map(((e,t)=>n.default.createElement(f.default,{iconMode:p,activeBurger:u,scrollActive:d,navItem:e,key:e.name,index:t,openIndex:r,setOpenIndex:e=>a(e)}))),n.default.createElement("div",{className:g},n.default.createElement(h,{className:v,href:"https://www.facebook.com/TeamT5.org/",onClick:e=>{e.preventDefault(),window.open("https://www.facebook.com/TeamT5.org/"),o.event({action:"header_facebook_icon",category:"social_media"})}},n.default.createElement(l.FacebookSvg,{mode:d?p.scrollActive:p.origin})),n.default.createElement(h,{className:v,href:"https://www.linkedin.com/company/teamt5/",onClick:e=>{e.preventDefault(),window.open("https://www.linkedin.com/company/teamt5/"),o.event({action:"header_linkedin_icon",category:"social_media"})}},n.default.createElement(l.LinkedinSvg,{mode:d?p.scrollActive:p.origin})),n.default.createElement(h,{className:v,href:"https://twitter.com/teamt5_official/",onClick:e=>{e.preventDefault(),window.open("https://twitter.com/teamt5_official/"),o.event({action:"header_twitter_icon",category:"social_media"})}},n.default.createElement(l.TwitterSvg,{mode:d?p.scrollActive:p.origin}))))))))};t.Nav=O,O.propTypes={scrollActive:a.default.bool,setActiveBurger:a.default.func,activeBurger:a.default.bool,iconMode:a.default.object,openIndex:a.default.number,setOpenIndex:a.default.func}},6500:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=m(r(2784)),a=m(r(3980)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(r(7409)),l=m(r(8126)),i=r(7020),c=m(r(2041)),d=m(r(4442)),s=r(200),u=m(r(9665)),f=r(3211);function p(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}function m(e){return e&&e.__esModule?e:{default:e}}const h=u.default.a`
  text-decoration: none;

  &.light {
    color: ${f.color.white};
  }

  &.dark {
    color: ${f.color.dark};
  }
`,g=s.css`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  position: absolute;
  top: 150px;
  right: 150px;
  transform-origin: top center;
  transition: transform 0.3s, height 0.3s, opacity 0.3s;
  transform: scaleY(0);
  height: 0;

  &.show {
    transform: scaleY(1);
    opacity: 1;
    pointer-events: inherit;
  }

  @media screen and (min-width: 768px) {
    right: 0;
    width: 100vw;
    padding: 30px 40px;
    box-sizing: border-box;
    background-color: #ece8e0;
    transition: all 0.3s;
    opacity: 0;
    pointer-events: none;
    top: 140px;
    height: 80px;
  }

  @media screen and (max-width: 767px) {
    position: unset;

    &.show {
      height: 200px;
      transform: scaleY(1);
      opacity: 1;
      pointer-events: inherit;
    }
  }
`,v=s.css`
  top: 120px;

  @media screen and (min-width: 768px) {
    top: 80px;
    height: 140px;
  }
`,y=s.css`
  display: flex;

  a {
    cursor: pointer;
  }

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    a {
      width: 100%;
    }
  }
`,x=s.css`
  width: 150px;
  color: ${f.color.dark};
  flex: 1;
  padding: 0 20px;
`,w=s.css`
  margin: 0 20px;

  svg {
    width: 23px;
    height: 23px;
  }
`,b=s.css`
  display: flex;
  align-items: center;
  background-color: ${f.color.white};
  margin-right: 20px;
  max-width: 335px;

  @media screen and (max-width: 767px) {
    max-width: inherit;
    margin: 10px 0;
  }

  &:hover {
    .dropdown-item-image {
      img {
        transform: scale(1.2);
      }
    }
  }
`,C=s.css`
  &:not(:last-child) {
    border-bottom: 1px solid ${f.color.line2};
  }
`,E=s.css`
  border: 0;
`,k=s.css`
  display: flex;
  cursor: pointer;
  position: relative;
  flex: 1 0 auto;

  @media screen and (min-width: 768px) {
    display: flex;
    height: 100%;
    align-items: center;

    &.scroll-active {
      @media (hover: hover) {
        &::after {
          position: absolute;
          height: 6px;
          width: 100%;
          bottom: 0;
          left: 0;
          background-color: ${f.color.t5Red};
          content: '';
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    transition: all 0.3s;

    &.collapse {
      height: 0;
    }

    &.scroll-active {
      cursor: pointer;

      @media (hover: hover) {
        &:hover {
          &::after {
            height: 0;
          }
        }
      }
    }
  }
`,O=s.css`
  flex-direction: column;

  .dropdown-action-icon {
    margin-left: 5px;

    &.light {
      svg {
        fill: ${f.color.white};
      }
    }

    &.dark {
      svg {
        fill: ${f.color.dark};
      }
    }

    &.show {
      display: block;
    }

    &.drop-icon {
      display: block;
    }

    &.close-icon {
      display: none;
    }

    @media screen and (max-width: 767px) {
      &.drop-icon,
      &.close-icon {
        display: none;
      }

      &.show {
        display: block;
      }

      svg {
        fill: ${f.color.dark};
      }
    }
  }

  @media screen and (min-width: 768px) {
    &.active,
    &:hover {
      .dropdown-action-icon,
      .dropdown-action-icon.scroll-active {
        svg {
          fill: ${f.color.t5Red};
        }
      }
    }
  }
`,_=s.css`
  flex-direction: row;
`,j=s.css`
  height: 100%;
  margin-right: 30px;
  display: flex;
  align-items: center;
  position: inherit;

  @media screen and (min-width: 768px) {
    &.active,
    &:hover {
      a {
        color: ${f.color.t5Red};
      }
    }
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    border-bottom: 1px solid ${f.color.line2};
    height: unset;
    margin: 0;
  }
`,M=e=>{const{t:t}=(0,d.default)(),r=e.navItem,a=e.index,u=e.openIndex,f=e.setOpenIndex||(()=>{}),p=e.scrollActive,m=e.activeBurger,M=e.iconMode,L=a===u;return n.default.createElement("div",{className:(0,s.cx)(j,{[O]:r.isDropdown,[_]:!r.isDropdown,active:L})},r.isDropdown?n.default.createElement("div",{className:(0,s.cx)(k,{[E]:r.isDropdown,[C]:!r.isDropdown,"scroll-active":p&&L,collapse:!m}),onClick:()=>f(L?99:a)},n.default.createElement(h,{className:(0,s.cx)({light:!p&&"light"===M.origin||p&&"light"===M.scrollActive,dark:!p&&"dark"===M.origin||p&&"dark"===M.scrollActive})},n.default.createElement("span",null,t(r.i18nKey)||r.i18nKey)),n.default.createElement("div",{className:(0,s.cx)("drop-icon","dropdown-action-icon",{"scroll-active":p,light:!p&&"light"===M.origin||p&&"light"===M.scrollActive,dark:!p&&"dark"===M.origin||p&&"dark"===M.scrollActive,show:!L})},n.default.createElement(i.DropdownSvg,null)),n.default.createElement("div",{className:(0,s.cx)("close-icon","dropdown-action-icon",{show:L})},n.default.createElement("img",{src:"/images/icons/close.svg",alt:"close icon"}))):n.default.createElement(l.default,{href:r.href,as:r.as},n.default.createElement(h,{className:(0,s.cx)(k,{collapse:!m,light:!p&&"light"===M.origin||p&&"light"===M.scrollActive,dark:!p&&"dark"===M.origin||p&&"dark"===M.scrollActive}),onClick:()=>o.event({action:`header_${r.logEventKey}`,category:"nav"})},t(r.i18nKey)||r.i18nKey)),r.isDropdown&&n.default.createElement("div",{className:(0,s.cx)(g,{[v]:p,show:L})},n.default.createElement("div",{className:y},r.sub.map(((e,r)=>n.default.createElement(l.default,{key:r,href:e.href,as:e.as},n.default.createElement(h,{className:(0,s.cx)({light:!p&&"light"===M.origin||p&&"light"===M.scrollActive,dark:!p&&"dark"===M.origin||p&&"dark"===M.scrollActive}),onClick:()=>o.event({action:`header_${e.logEventKey}`,category:"nav"})},n.default.createElement("div",{className:b},n.default.createElement(c.default,{src:e.imageUrl,name:e.name}),n.default.createElement("div",{className:x},t(e.i18nKey)||e.i18nKey),n.default.createElement("div",{className:w},n.default.createElement(i.ArrowSvg,{angle:"right"}))))))))))};M.propTypes={activeBurger:a.default.bool,scrollActive:a.default.bool,navItem:a.default.object,index:a.default.number,openIndex:a.default.number,setOpenIndex:a.default.func,iconMode:a.default.object};var L=M;t.default=L},8748:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=u(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(r(2784)),a=s(r(3980)),o=r(488),l=r(6837),i=s(r(3681)),c=r(200),d=r(3211);function s(e){return e&&e.__esModule?e:{default:e}}function u(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(u=function(e){return e?r:t})(e)}const f=c.css`
  height: 140px;
  color: ${d.color.dark};
  transition: height 0.3s;

  @media screen and (max-width: 767px) {
    height: 80px;
  }
`,p=c.css`
  position: fixed;
  z-index: 10;
  width: 100%;

  &.top {
    position: fixed;
    top: 0;
  }

  &.active-burger {
    position: fixed !important;
    top: 0;
  }
`,m=c.css`
  &.relative-pos {
    header {
      position: relative;
    }
  }

  &.top {
    header {
      position: fixed;
      top: 0;
    }
  }
`,h=c.css`
  color: ${d.color.dark};
  height: 80px;

  @media screen and (max-width: 767px) {
    height: 50px;
  }
`,g=c.css`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
  height: 100%;
`,v=c.css`
  opacity: 0;
`,y=c.css`
  opacity: 1;
`,x=c.css`
  width: 100%;
  height: 80px;
  background-color: ${d.color.white};
  transition: opacity 0.3s, height 0.3s;

  @media screen and (max-width: 767px) {
    height: 50px;
  }
`,w=e=>{var t,r;const a=e.headerRef,d=e.headerContainerRef,{width:s}=(0,o.useWindowSize)(),u=null!==(t=e.isShrink)&&void 0!==t&&t,[w,b]=(0,n.useState)(!1),C=Object.assign({header:f,scrollActiveHeader:h,background:v,scrollActivebackground:y},null!==(r=e.classes)&&void 0!==r?r:{}),E=e.iconMode,k=e.openIndex,O=e.setOpenIndex;return(0,n.useEffect)((()=>{w&&s>768&&b(!1)}),[s]),n.default.createElement("div",{ref:d,className:(0,c.cx)(m,C.headerContainer)},n.default.createElement("header",{ref:a,className:(0,c.cx)(p,C.header,{[C.scrollActiveHeader]:u||w||99!==k,"active-burger":w})},n.default.createElement("div",{className:g},n.default.createElement(i.default,{scrollActive:u||w||99!==k}),n.default.createElement(l.Nav,{scrollActive:u||w||99!==k,setOpenIndex:O,openIndex:k,iconMode:E,activeBurger:w,setActiveBurger:b})),n.default.createElement("div",{className:(0,c.cx)(x,{[C.background]:!(u||w||99!==k),[C.scrollActivebackground]:u||w||99!==k,top:w})})))};w.propTypes={openIndex:a.default.number,setOpenIndex:a.default.func,headerRef:a.default.object,headerContainerRef:a.default.object,classes:a.default.object,iconMode:a.default.object,isShrink:a.default.bool};var b=w;t.default=b}}]);