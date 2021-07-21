(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[668],{4916:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return o}});var n=a(7243),i=a(2322),r=(a(2784),a(3519));function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var o=!0;t.default=function(e){return(0,i.jsx)(r.ZP,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e))}},1252:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[lang]/request-information",function(){return a(4916)}])},2156:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a(2784)),i=o(a(3980)),r=a(6262),s=a(200);function o(e){return e&&e.__esModule?e:{default:e}}const c=s.css`
  position: relative;
  width: 100%;
  height: fit-content;
  overflow: hidden;

  &.default {
    padding: 0;
  }

  @media screen and (max-width: 375px) {
    width: 375px;
  }
`,l=s.css`
  width: 23%;
  height: 230px;
  position: absolute;
  z-index: 1;
  left: -15px;
  top: 585px;
`,d=s.css`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;

  &.default {
    width: 1000px;
    margin: auto;
  }

  @media screen and (max-width: 1279px) {
    &.default {
      width: 800px;
    }
  }

  @media screen and (max-width: 1023px) {
    &.default {
      width: 620px;
    }
  }

  @media screen and (max-width: 767px) {
    &.default {
      width: calc(596px + (100vw - 768px) * 261 / 393);
    }
  }

  @media screen and (max-width: 375px) {
    &.default {
      width: 335px;
    }
  }
`,p=s.css`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  &.default {
    padding-left: 35px;
  }
`,u=s.css`
  &.default {
    padding-top: 0;
  }
`,f=s.css`
  position: relative;
  width: 100%;
  flex: 1 0;
  box-sizing: border-box;
  background-color: white;

  &.default {
    top: 0;
    left: 0;
  }
`,m=e=>{const t={root:"default",content:"default",bgContainer:"default",bgPaddingBlock:"default",bg:"default",...e.classes};return n.default.createElement("div",{className:(0,s.cx)(c,t.root)},n.default.createElement("div",{className:(0,s.cx)(d,t.content)},e.children),n.default.createElement("div",{className:(0,s.cx)(l,t.xgridContainer)},n.default.createElement(r.XGrid,{type:"dark"})),n.default.createElement("div",{className:(0,s.cx)(p,t.bgContainer)},n.default.createElement("div",{className:(0,s.cx)(u,t.bgPaddingBlock)}),n.default.createElement("div",{className:(0,s.cx)(f,t.bg)})))};m.propTypes={classes:i.default.shape({root:i.default.string,content:i.default.string,bgContainer:i.default.string,bg:i.default.string})};var x=m;t.default=x},6203:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(a(2784)),i=c(a(3980)),r=a(200),s=a(7020),o=a(3211);function c(e){return e&&e.__esModule?e:{default:e}}const l=r.css`
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  padding: 22px 0;
  border: 1px solid ${o.color.dark};
  border-radius: 2px;
`,d=r.css`
  position: relative;
  cursor: pointer;
  transition: all 0.5s 0s ease-out;
  opacity: 1;
  height: 100%;

  svg {
    position: absolute;
    right: 25px;
    top: 30px;
  }

  &.hide {
    display: none;
  }
`,p=r.css`
  width: 100%;
  margin: 20px 0;
`,u=r.keyframes`
  0% {
    transform: scaleY(0);
  }

  50% {
    transform: scaleY(600px);
  }

  100% {
    transform: scaleY(1);
  }
`,f=r.keyframes`
  0% {
    transform: scaleY(1);
  }

  50% {
    transform: scaleY(200px);
  }

  100% {
    transform: scaleY(0);
  }
`,m=r.css`
  transition: height 0.6s 0s ease-out;
  background-color: ${o.color.bgColor2};
  height: 0;
  transform: scaleY(0);
  transform-origin: top;
  animation-name: ${f};
  animation-duration: 0.6s;

  &.show {
    transition: height 0.6s 0s ease-in-out;
    height: 100%;
    transform: scaleY(1);
    animation-name: ${u};
    animation-duration: 0.6s;
  }
`,x=r.css`
  transition: opacity 0.2s 0s ease-out;
  opacity: 0;

  &.hide {
    transition: opacity 0.6s 0s ease-in-out;
    opacity: 1;
  }
`,h=({children:e,btnTitle:t,selfIndex:a,isOpen:i,collapseFunc:o})=>n.default.createElement("div",{className:p},n.default.createElement("div",{className:(0,r.cx)(d,{hide:i}),onClick:()=>o(i?0:a)},n.default.createElement("div",{className:l},t),n.default.createElement(s.DropdownSvg,null)),n.default.createElement("div",{className:(0,r.cx)(m,{show:i})},n.default.createElement("div",{className:(0,r.cx)(x,{hide:i})},e)));h.propTypes={selfIndex:i.default.number,btnTitle:i.default.string,isOpen:i.default.bool,collapseFunc:i.default.func};var g=h;t.default=g},3519:function(e,t,a){"use strict";t.ZP=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=f(t);if(a&&a.has(e))return a.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var s=i?Object.getOwnPropertyDescriptor(e,r):null;s&&(s.get||s.set)?Object.defineProperty(n,r,s):n[r]=e[r]}n.default=e,a&&a.set(e,n);return n}(a(2784)),i=u(a(258)),r=u(a(2156)),s=u(a(4442)),o=u(a(6203)),c=u(a(9643)),l=a(9438),d=a(200),p=a(3211);function u(e){return e&&e.__esModule?e:{default:e}}function f(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(f=function(e){return e?a:t})(e)}const m=u(a(9665)).default.hr`
  width: 100vw;
  border: 0;
  border-top: 3px solid #ece8e0;
  margin: 32px 0 0 0;

  @media screen and (max-width: 767px) {
    margin: 17px 0 0 0;
  }
`,x=d.css`
  margin: 333px 0 0 0;
  padding-left: 35px;

  @media screen and (max-width: 767px) {
    margin: 244px 0 0 0;
    padding-left: calc(10px - (100vw - 100%) / 2);
  }

  @media screen and (max-width: 375px) {
    padding-left: 10px;
  }
`,h=d.css`
  height: 431px;

  @media screen and (max-width: 767px) {
    height: 192px;
  }
`,g=d.css`
  position: absolute;
  white-space: nowrap;
  top: -182px;
  left: -190px;
  font-size: 200px;
  font-weight: 900;
  color: #ece8e0;

  @media screen and (max-width: 767px) {
    display: none;
  }
`,w=d.css`
  padding: 333px 0 0 0;

  @media screen and (max-width: 767px) {
    padding: 244px 0 0 0;
  }
`,v=d.css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-content: space-between;
  position: relative;
`,b=d.css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
  z-index: 5;

  h1 {
    margin: 0;
    line-height: 1;
    font-size: 36px;
    font-weight: 900;
    color: ${p.color.dark};
  }

  @media screen and (max-width: 767px) {
    h1 {
      font-size: 24px;
    }
  }
`,y=d.css`
  width: calc(100vw - ((100vw - 1000px) / 2));
  height: 459px;
  object-fit: cover;

  @media screen and (max-width: 1279px) {
    width: calc(100vw - ((100vw - 800px) / 2));
  }

  @media screen and (max-width: 1023px) {
    width: calc(100vw - ((100vw - 620px) / 2));
  }

  @media screen and (max-width: 767px) {
    width: calc(
      100vw - ((100vw - calc(596px + (100vw - 768px) * 261 / 393)) / 2)
    );
  }

  @media screen and (max-width: 575px) {
    height: 244px;
  }

  @media screen and (max-width: 374px) {
    width: calc(100vw - ((100vw - 335px) / 2));
  }
`,E=d.css`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
`,_=d.css`
  font-size: 16px;
  line-height: 22px;
  margin: 0;
  padding: 10px 0;
`,O=d.css`
  width: 30%;

  h5 {
    font-size: 18px;
    line-height: 22px;
    margin: 0;
    padding: 10px 0;
    margin-right: 15px;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`,j=d.css`
  width: 70%;

  p {
    line-height: 22px;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`,k=d.css`
  display: flex;
  margin-top: 10px;
  color: ${p.color.dark};

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`,N=d.css`
  @media screen and (max-width: 575px) {
    display: none;
  }
`;var P=()=>{const{t:e}=(0,s.default)(),[t,a]=(0,n.useState)(0);return n.default.createElement(i.default,null,n.default.createElement(r.default,{classes:{root:w,bgContainer:x,bgPaddingBlock:h,xgridContainer:N}},n.default.createElement("div",{className:g},"Request Information"),n.default.createElement("header",{className:b},n.default.createElement("div",{className:v},n.default.createElement("h1",null,"Request Information")),n.default.createElement(m,null)),n.default.createElement("div",{className:E},n.default.createElement("img",{className:y,src:"https://res.cloudinary.com/dvgomg5gh/image/upload/q_60/f_auto/v1599469219/info_9e3a7cbe05.jpg"}),n.default.createElement("div",{className:k},n.default.createElement("div",{className:O},n.default.createElement("h5",null,e("request-information.content.title"))),n.default.createElement("div",{className:j},n.default.createElement("div",{className:_,dangerouslySetInnerHTML:{__html:e("request-information.content.context")}}),z.map(((i,r)=>n.default.createElement(o.default,{key:i.title,selfIndex:r+1,btnTitle:e(i.title),isOpen:t===r+1,collapseFunc:e=>a(e)},n.default.createElement(c.default,{title:e(i.title),formSchema:l.RequestInformationFormSchema,apiUrl:i.apiUrl,closeFunc:()=>a(0)})))))))))};t.ZP=P;const z=[{title:"request-information.product-information",apiUrl:"https://script.google.com/macros/s/AKfycbzlCIgJ8hbvjv7fk3DeQica4eFdyKmeul-lQL8rkWktAS1ypNs/exec"},{title:"request-information.press-inquiries",apiUrl:"https://script.google.com/macros/s/AKfycbwo5ZTWefJ7qDWHl9pnMvzuAsYnMHeYkOoReATHpeF5cKT8SqwuGIxZ-DKjqFdLkEAaBA/exec"},{title:"request-information.speaking-inquiries",apiUrl:"https://script.google.com/macros/s/AKfycbzw21c2i1RFB-tCxsn0D5aKr9B7Z_ZrdQEmxx8UViK0O5qFxma-52ZrnBmrK8Bg4yaj/exec"},{title:"request-information.others",apiUrl:"https://script.google.com/macros/s/AKfycbzQ0TzSKNTQQQQs_FUGBhk2_y4F5yfuSzUTPq_50gRzKP769894a7lFSRwngYgRwUicvg/exec"}]}},function(e){e.O(0,[938,355,258,502,774,888,179],(function(){return t=1252,e(e.s=t);var t}));var t=e.O();_N_E=t}]);