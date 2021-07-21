(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[720],{913:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return s}});var n=a(7243),i=a(2322),r=(a(2784),a(984));function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var s=!0;t.default=function(e){return(0,i.jsx)(r.Z,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e))}},4464:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[lang]/products/threatsonar",function(){return a(913)}])},984:function(e,t,a){"use strict";t.Z=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=h(t);if(a&&a.has(e))return a.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=i?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,a&&a.set(e,n);return n}(a(2784)),i=m(a(258)),r=a(5116),o=m(a(9643)),s=a(9438),d=m(a(4442)),l=a(2426),c=a(200),p=a(3211);function m(e){return e&&e.__esModule?e:{default:e}}function h(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(h=function(e){return e?a:t})(e)}const x=c.css`
  color: ${p.color.white};
  height: 140px;
  transition: height 0.3s;

  @media screen and (max-width: 767px) {
    height: 80px;
  }
`,f=c.css`
  color: ${p.color.dark};
  height: 80px;

  @media screen and (max-width: 767px) {
    height: 50px;
  }
`,u=c.css`
  height: 100%;
  width: 100%;
  transition: opacity 0.3s;
  background-color: ${p.color.white};
  opacity: 0;
`,g=c.css`
  opacity: 1;
`,w=c.css`
  width: 100%;
  overflow: hidden;
  background-color: white;
  color: white;
`,y=c.css`
  width: 760px;

  @media screen and (max-width: 1023px) {
    width: 620px;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`,b=c.css`
  justify-content: flex-end;
  position: fixed;
  visibility: hidden;
  opacity: 1;
  z-index: 15;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  overflow-y: auto;
  overflow-x: hidden;
  transition: all 0.5s ease-in-out;

  &.show {
    visibility: visible;
    opacity: 1;
  }
`,v=c.css`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(50px);
  opacity: 0;
  transition: all 0.5s ease-in-out;

  &.show {
    opacity: 1;
    transform: translateX(0);
  }
`;var _=()=>{const{t:e}=(0,d.default)(),[t,a]=(0,n.useState)(!1);(0,n.useEffect)((()=>{l.isBrowser&&(document.body.style.overflow=t?"hidden":"unset")}),[]);return n.default.createElement(i.default,{classes:{header:x,scrollActiveHeader:f,background:u,scrollActivebackground:g},iconMode:{origin:"light",scrollActive:"dark"}},n.default.createElement("div",{className:w},n.default.createElement("h1",{style:{display:"none"}},"ThreatSonar"),n.default.createElement(r.BannerContent,null),n.default.createElement(r.ContentSection,null),n.default.createElement(r.PlanSection,null),n.default.createElement(r.Bubble,{setIsOpen:a}),n.default.createElement("div",{className:(0,c.cx)(b,{show:t}),onClick:e=>(e=>{e.target===e.currentTarget&&a(!1)})(e)},n.default.createElement("div",{className:(0,c.cx)(v,y,{show:t})},n.default.createElement(o.default,{title:e("threatsonar.title.interested"),formSchema:s.ThreatSonarFormSchema,apiUrl:"https://script.google.com/macros/s/AKfycbzKDhmTBw-FKiwDZZHvxjax___RSXCVj4NOOBN-yp0bX1Xj19Uu/exec",closeFunc:()=>a(!1)})))))};t.Z=_},1282:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(a(2784)),i=d(a(4442)),r=a(200),o=a(3211),s=d(a(9665));function d(e){return e&&e.__esModule?e:{default:e}}const l=s.default.img`
  position: absolute;
  bottom: 0;
  left: 0;
  max-width: 345px;
  height: auto;

  @media screen and (max-width: 767px) {
    left: -280px;
  }

  @media screen and (max-width: 1279px) {
    left: -235px;
  }
`,c=s.default.img`
  top: 0;
  right: 0;
  position: absolute;
  max-width: 837px;
  height: auto;

  @media screen and (max-width: 1279px) {
    right: -200px;
  }

  @media screen and (max-width: 767px) {
    right: -555px;
  }
`,p=r.css`
  font-family: Helvetica;
  color: white;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 800px;
  box-sizing: border-box;
  background-image: url('/images/ThreatSonar/soanr_hero_bg.png');
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  z-index: 2;

  & > * {
    box-sizing: border-box;
  }

  @media screen and (max-width: 1023px) {
    padding: 0 3rem;
  }

  @media screen and (max-width: 767px) {
    padding: 0 2rem;
  }
`,m=r.css`
  width: 570px;
  height: auto;
  margin-bottom: 2.5rem;

  @media screen and (max-width: 1279px) {
    width: 480px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 1023px) {
    width: 95%;
    margin: 0 auto 30px;
    display: block;
  }
`,h=r.css`
  position: absolute;
  z-index: 3;
  left: 345px;
  top: 262px;
  max-width: 575px;

  @media screen and (max-width: 1439px) {
    left: 143px;
  }

  @media screen and (max-width: 1279px) {
    left: 112px;
    top: 276px;
  }

  @media screen and (max-width: 1023px) {
    max-width: 516px;
    width: 100%;
    text-align: center;
  }

  @media screen and (max-width: 767px) {
    max-width: 296px;
    position: relative;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
  }
`,x=r.css`
  margin-top: 0.5rem;
  font-size: 20px;
  color: ${o.color.white};
  line-height: 32px;
  padding-left: 10px;
  text-align: left;

  @media screen and (max-width: 1279px) {
    padding-left: 1rem;
  }

  @media screen and (max-width: 1023px) {
    font-size: 21px;
    line-height: 1.5;
    text-align: left;
    margin-top: 0.7rem;
  }

  @media screen and (max-width: 767px) {
    text-align: center;
    font-size: 14px;
    padding: 0;
  }
`,f=r.css`
  position: relative;
  z-index: 3;
  font-size: 30px;
  text-align: left;
  padding: 0 10px;
  margin: 0;
  font-weight: bold;

  @media screen and (max-width: 1023px) {
    text-align: center;
    font-size: 28px;
  }

  @media screen and (max-width: 767px) {
    font-size: 16px;
    padding: 0;
  }
`,u=r.css`
  text-align: center;
  padding-left: 64px;

  @media screen and (max-width: 1279px) {
    padding-left: 4rem;
  }

  @media screen and (max-width: 1023px) {
    padding-left: 1.5rem;
  }

  @media screen and (max-width: 767px) {
    padding: 0;
  }
`,g=r.css`
  position: relative;
  bottom: 14px;
  width: 100%;
  height: 21px;
  background-color: rgba(174, 30, 52, 0.6);

  @media screen and (max-width: 767px) {
    bottom: 9px;
  }
`,w=s.default.img`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.35);
`;var y=()=>{const{t:e}=(0,i.default)();return n.default.createElement("div",{className:p},n.default.createElement("div",{className:h},n.default.createElement("img",{className:m,src:"/images/ThreatSonar/ts_logo.svg"}),n.default.createElement("div",{className:u},n.default.createElement("p",{className:f,dangerouslySetInnerHTML:{__html:e("threatsonar.title.title")}}),n.default.createElement("div",{className:g}),n.default.createElement("p",{className:x,dangerouslySetInnerHTML:{__html:e("threatsonar.title.context")}}))),n.default.createElement(l,{src:"/images/ThreatSonar/sonar_hero_left.png"}),n.default.createElement(c,{src:"/images/ThreatSonar/ThreatSonar_hero_illustration.png"}),n.default.createElement(w,null))};t.default=y},4185:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=d(t);if(a&&a.has(e))return a.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=i?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,a&&a.set(e,n);return n}(a(2784)),r=(n=a(3980))&&n.__esModule?n:{default:n},o=a(200),s=a(3211);function d(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(d=function(e){return e?a:t})(e)}const l=o.css`
  position: fixed;
  right: 0;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 130px;
  border-radius: 4px 0 0 4px;
  background-color: ${s.color.sonarRed};
  color: white;
  z-index: 3;
  cursor: pointer;

  p {
    transform: rotate(-90deg);
    white-space: nowrap;
    font-size: 20px;
    color: white;
  }
`,c=({setIsOpen:e})=>{const[t,a]=(0,i.useState)(20);return(0,i.useEffect)((()=>{const e=e=>{const t=document.querySelector("footer").getBoundingClientRect().height,{offsetHeight:n,clientHeight:i,scrollTop:r}=e.target.scrollingElement,o=n-i-r;if(o<=t+42+20){a(t-o+42+20)}else a(20)};return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)}),[]),i.default.createElement("div",{style:{bottom:`${t}px`},className:l},i.default.createElement("p",{onClick:()=>{e(!0)}},"Contact Us"))};c.propTypes={setIsOpen:r.default.func};var p=c;t.default=p},6054:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(a(2784)),i=s(a(4442)),r=a(200),o=a(3211);function s(e){return e&&e.__esModule?e:{default:e}}const d=[{context:"threatsonar.intro.context",img:"/images/ThreatSonar/what_is_sonar.svg",reverse:!0},{title:"threatsonar.function.ca-title",context:"threatsonar.function.ca-context",img:"/images/ThreatSonar/CompromiseAssessment.svg",reverse:!1},{title:"threatsonar.function.ir-title",context:"threatsonar.function.ir-context",img:"/images/ThreatSonar/IncidentResponse.svg",reverse:!0},{title:"threatsonar.function.mdr-title",context:"threatsonar.function.mdr-context",img:"/images/ThreatSonar/MDRplatform.svg",reverse:!1}],l=r.keyframes`
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`,c=r.keyframes`
  0% {
    clip-path: polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%);
  }

  100% {
    clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%);
  }
`,p=r.css`
  width: 100%;
  margin: 0 auto;
  font-family: Helvetica;
  font-size: 16px;
  color: ${o.color.dark};
  position: relative;
  box-sizing: border-box;

  & > * {
    box-sizing: border-box;
  }
`,m=r.css`
  flex-direction: row-reverse;
`,h=r.css`
  white-space: nowrap;
  font-size: 32px;
  color: #24231f;
  line-height: 48px;
  margin-bottom: 0 0 36px 0;

  @media screen and (max-width: 1023px) {
    font-size: 24px;
  }

  @media screen and (max-width: 767px) {
    font-size: 24px;
  }
`,x=r.css`
  font-size: 20px;
  color: #24231f;
  line-height: 28px;
  margin: 0;

  @media screen and (max-width: 1023px) {
    font-size: 18px;
  }

  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
`,f="content-section-content",u=r.css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 40px calc((100% - 1000px) / 2) 200px;
  margin: 0 auto;

  img {
    max-width: 480px;
    height: auto;
    z-index: 1;
    visibility: hidden;
  }

  ${"."+f} {
    visibility: hidden;
    max-width: 420px;
    z-index: 1;
  }

  &:nth-of-type(1),
  &:nth-of-type(3) {
    &::before {
      background-color: #f0eff0;
      position: absolute;
      content: '';
      right: 0;
      left: 0;
      height: 755px;
    }
  }

  &.observed-show {
    img {
      visibility: visible;
      animation: ${c} 1s cubic-bezier(0.39, 0.575, 0.565, 1);
      animation-fill-mode: both;
    }

    ${"."+f} {
      visibility: visible;
      animation: ${l} 1s cubic-bezier(0.39, 0.575, 0.565, 1);
      animation-fill-mode: both;
    }
  }

  &:nth-of-type(1) {
    &::before {
      clip-path: polygon(0 0, 100% 0, 100% 79%, 0% 100%);
    }
  }

  &:nth-of-type(2) {
    padding: 20px calc((100% - 1000px) / 2) 140px;
  }

  &:nth-of-type(3) {
    &::before {
      clip-path: polygon(0 0, 100% 25%, 100% 79%, 0% 100%);
    }
  }

  &:nth-of-type(4) {
    padding: 0 calc((100% - 1000px) / 2) 100px;
  }

  @media screen and (max-width: 1279px) {
    padding: 40px calc((100% - 800px) / 2) 200px;

    &:nth-of-type(1),
    &:nth-of-type(3) {
      &::before {
        height: 675px;
      }
    }

    &:nth-of-type(1) {
      &::before {
        clip-path: polygon(0 0, 100% 0, 100% 79%, 0% 100%);
      }
    }

    &:nth-of-type(2) {
      padding: 60px calc((100% - 800px) / 2) 180px;
    }

    &:nth-of-type(3) {
      &::before {
        clip-path: polygon(0 0, 100% 20%, 100% 83%, 0% 100%);
      }
    }

    &:nth-of-type(4) {
      padding: 50px calc((100% - 800px) / 2) 100px;
    }

    img {
      max-width: 360px;
    }
  }

  @media screen and (max-width: 1023px) {
    padding: 40px calc((100% - 620px) / 2) 80px;

    &:nth-of-type(1),
    &:nth-of-type(3) {
      &::before {
        height: 500px;
      }
    }

    &:nth-of-type(1) {
      &::before {
        clip-path: polygon(0 0, 100% 0, 100% 79%, 0% 100%);
      }
    }

    &:nth-of-type(2) {
      padding: 60px calc((100% - 620px) / 2) 110px;
    }

    &:nth-of-type(3) {
      &::before {
        clip-path: polygon(0 0, 100% 17%, 100% 86%, 0% 100%);
      }
    }

    &:nth-of-type(4) {
      padding: 100px calc((100% - 620px) / 2) 100px;
    }

    img {
      max-width: 276px;
    }

    ${"."+f} {
      width: 314px;
    }
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    flex-direction: column-reverse;
    justify-content: flex-start;
    padding: 2rem;

    &:nth-of-type(1),
    &:nth-of-type(3) {
      &::before {
        top: 0;
        height: 580px;
        clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
      }
    }

    &:nth-of-type(1) {
      &::before {
        clip-path: polygon(0 0, 100% 0, 100% 92%, 0% 100%);
        height: 110%;
      }
    }

    &:nth-of-type(2),
    &:nth-of-type(4) {
      padding: 4rem 2rem;
    }

    &:nth-of-type(3) {
      &::before {
        clip-path: polygon(0 0, 100% 6%, 100% 94%, 0% 100%);
        height: 118%;
        top: -4%;
      }
    }

    img {
      margin-top: 20px;
    }

    ${"."+f} {
      width: 100%;
    }
  }
`;var g=()=>{const{t:e}=(0,i.default)();return n.default.createElement("div",{className:p},d.map(((t,a)=>n.default.createElement("div",{key:a,className:(0,r.cx)(u,"observed",{[m]:t.reverse}),options:{rootMargin:"-30%"}},n.default.createElement("img",{src:t.img}),n.default.createElement("div",{className:f},t.title&&n.default.createElement("h4",{className:h,dangerouslySetInnerHTML:{__html:e(t.title)}}),n.default.createElement("div",{className:x,dangerouslySetInnerHTML:{__html:e(t.context)}}))))))};t.default=g},1946:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=c(t);if(a&&a.has(e))return a.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=i?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,a&&a.set(e,n);return n}(a(2784)),r=a(6385),o=(n=a(4442))&&n.__esModule?n:{default:n},s=a(6262),d=a(200),l=a(3211);function c(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(c=function(e){return e?a:t})(e)}const p=d.keyframes`
  0% {
    transform: translateY(50px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`,m=d.css`
  width: 100%;
  margin: 0 auto;
  font-family: Helvetica;
  font-size: 16px;
  color: ${l.color.white};
  background-color: #24231f;
  position: relative;
  padding-bottom: 102px;
  box-sizing: border-box;

  & > * {
    box-sizing: border-box;
  }

  @media screen and (max-width: 1023px) {
    padding-bottom: 102px;
  }

  @media screen and (max-width: 767px) {
    padding: 0 2rem 102px;
  }
`,h=d.css`
  width: 140px;
  height: 140px;

  img {
    max-width: 100%;
    height: auto;
  }

  @media screen and (max-width: 1279px) {
    width: 160px;
    height: 160px;
  }

  @media screen and (max-width: 767px) {
    width: 100px;
    height: 100px;
    margin-bottom: 5px;
  }
`,x=d.css`
  position: absolute;
  width: 460px;
  height: 362px;
  left: -80%;
  top: 0;

  @media screen and (max-width: 1023px) {
    display: none;
  }
`,f=d.css`
  position: absolute;
  width: 426px;
  height: 226px;
  right: -80%;
  top: 292px;

  @media screen and (max-width: 1023px) {
    display: none;
  }
`,u=d.css`
  word-break: keep-all;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  margin: 0;

  @media screen and (max-width: 1023px) {
    font-size: 18px;
  }

  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`,g=d.css`
  height: 123px;
  border-style: solid;
  border-width: 0 3px 0 0;
  border-image: url('/images/white-border.svg') 6 4 11 3 repeat round;
  width: 0;
  margin: 0 auto 10px;

  @media screen and (max-width: 1279px) {
    height: 119px;
  }

  @media screen and (max-width: 1023px) {
    height: 110px;
  }

  @media screen and (max-width: 767px) {
    height: 90px;
    margin: 1rem auto;
  }
`,w=d.css`
  height: 124px;
  border-style: solid;
  border-width: 0 3px 0 0;
  border-image: url('/images/white-border.svg') 6 4 11 3 repeat round;
  width: 0;
  margin: 10px auto;
`,y=d.css`
  font-size: 32px;
  position: relative;
  z-index: 1;
  margin: 0;

  @media screen and (max-width: 767px) {
    font-size: 24px;
  }
`,b=d.css`
  position: relative;
  bottom: 20px;
  margin: 0 auto;
  width: 360px;
  height: 20px;
  background-color: #d40b26;

  @media screen and (max-width: 767px) {
    width: 275px;
    height: 20px;
  }
`,v=d.css`
  text-align: center;
  position: relative;
`,_=d.css`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 767px) {
    justify-content: center;
    margin: 34px;
  }
`,E=d.css`
  width: calc(100% - 140px - 45px);
  margin-left: 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 1279px) {
    width: calc(100% - 160px);
    margin-left: 30px;
  }

  @media screen and (max-width: 1023px) {
    width: auto;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-left: 0;
    padding: 0 1rem;
  }
`,O=d.css`
  font-size: 60px;
  margin: 0;

  @media screen and (max-width: 1023px) {
    font-size: 40px;
  }

  @media screen and (max-width: 767px) {
    font-size: 30px;
  }
`,j=d.css`
  width: 730px;
  margin: 0 auto;
  padding-top: 50px;
  text-align: center;
  position: relative;

  @media screen and (max-width: 1279px) {
    margin: 0 auto;
  }

  @media screen and (max-width: 1023px) {
    width: 600px;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-bottom: 0;
  }
`,k=d.css`
  width: 1000px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 1279px) {
    flex-direction: column;
    align-items: center;
    width: 800px;

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  @media screen and (max-width: 1023px) {
    width: 600px;
  }

  @media screen and (max-width: 767px) {
    width: 315px;
    flex-direction: column;
    align-items: center;
  }
`,z=d.css`
  padding-left: 16px;
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 0;

  & :not(:last-child) {
    margin-bottom: 10px;
  }

  /* .fix-me-1 {
  word-break: keep-all;
  } */

  .fix-me-2 {
    width: 130px;
  }
`,N=d.css`
  width: 495px;
  height: 240px;
  padding: 0 25px 0 20px;
  display: flex;
  font-size: 16px;
  color: ${l.color.dark};
  align-items: center;
  justify-content: center;
  background: ${l.color.white};
  border-radius: 6px;
  margin-bottom: 10px;
  box-sizing: border-box;
  visibility: hidden;

  &.observed-show {
    visibility: visible;
    animation: ${p} 1s cubic-bezier(0.39, 0.575, 0.565, 1);
    animation-fill-mode: both;

    &:nth-of-type(2) {
      animation-delay: 0.15s;
    }

    &:nth-of-type(3) {
      animation-delay: 0.3s;
    }

    &:nth-of-type(4) {
      animation-delay: 0.45s;
    }
  }

  @media screen and (max-width: 1279px) {
    justify-content: flex-start;
    width: 600px;
  }

  @media screen and (max-width: 1023px) {
    justify-content: flex-start;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    width: 315px;
    height: auto;
    padding: 15px 15px 20px;
    align-items: center;

    &.observed-show {
      &:nth-of-type(2) {
        animation-delay: 0;
      }

      &:nth-of-type(3) {
        animation-delay: 0;
      }

      &:nth-of-type(4) {
        animation-delay: 0;
      }
    }

    ${"."+z} {
      font-size: 16px;
    }
  }
`,S=d.css`
  word-break: keep-all;
  margin: 0 0 10px 0;
  font-size: 16px;

  @media screen and (max-width: 1279px) {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 767px) {
    font-size: 18px;
    margin-bottom: 7px;
    text-align: center;
  }
`,M=[{title:"threatsonar.why.intel-correlation.title",traits:["threatsonar.why.intel-correlation.trait-1","threatsonar.why.intel-correlation.trait-2"],img:"/images/ThreatSonar/why_IntelligenceCorelation.svg"},{title:"threatsonar.why.cross-platform.title",traits:["threatsonar.why.cross-platform.trait-1","threatsonar.why.cross-platform.trait-2"],img:"/images/ThreatSonar/why_Cross-platformOperation.svg"},{title:"threatsonar.why.multi-scenarios.title",traits:["threatsonar.why.multi-scenarios.trait-1","threatsonar.why.multi-scenarios.trait-2","threatsonar.why.multi-scenarios.trait-3","threatsonar.why.multi-scenarios.trait-4"],img:"/images/ThreatSonar/why_Multi-Scenarios.svg"},{title:"threatsonar.why.forensic-analysis.title",traits:["threatsonar.why.forensic-analysis.trait-1","threatsonar.why.forensic-analysis.trait-2"],img:"/images/ThreatSonar/why_ForensicAnalysis.svg"}];var P=()=>{const{t:e}=(0,o.default)(),t=(0,i.useContext)(r.LocaleContext),a=M.map(((a,n)=>i.default.createElement("div",{key:n,className:(0,d.cx)(N,"observed"),options:{rootMargin:"-30%"}},i.default.createElement("div",{className:h},i.default.createElement("img",{src:a.img})),i.default.createElement("div",{className:E},i.default.createElement("h4",{className:S,dangerouslySetInnerHTML:{__html:e(a.title)}}),i.default.createElement("div",{className:_},i.default.createElement("ul",{className:z},a.traits.map(((a,r)=>i.default.createElement("li",{key:r,dangerouslySetInnerHTML:{__html:e(a)},className:(0,d.cx)({"fix-me-2":3===r&&2===n&&"jp"===t.locale})})))))))));return i.default.createElement("div",{className:m},i.default.createElement("div",{className:j},i.default.createElement("div",{className:x},i.default.createElement(s.XGrid,{type:"white"})),i.default.createElement("div",{className:f},i.default.createElement(s.XGrid,{type:"white"})),i.default.createElement("h2",{className:O,dangerouslySetInnerHTML:{__html:e("threatsonar.why.title")}}),i.default.createElement("div",{className:g}),i.default.createElement("div",{className:v},i.default.createElement("h3",{className:y,dangerouslySetInnerHTML:{__html:e("threatsonar.why.slogan.title")}}),i.default.createElement("div",{className:b})),i.default.createElement("div",{className:u,dangerouslySetInnerHTML:{__html:e("threatsonar.why.slogan.context")}})),i.default.createElement("div",{className:w}),i.default.createElement("div",{className:k},a))};t.default=P},5116:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BannerContent",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"ContentSection",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"PlanSection",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Bubble",{enumerable:!0,get:function(){return o.default}});var n=s(a(1282)),i=s(a(6054)),r=s(a(1946)),o=s(a(4185));function s(e){return e&&e.__esModule?e:{default:e}}}},function(e){e.O(0,[938,355,258,502,774,888,179],(function(){return t=4464,e(e.s=t);var t}));var t=e.O();_N_E=t}]);