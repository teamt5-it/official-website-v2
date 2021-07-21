(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[257],{3577:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return c}});var n=a(7243),i=a(2322),r=(a(2784),a(3581));function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var c=!0;t.default=function(e){return(0,i.jsx)(r.Z,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e))}},9026:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[lang]/become-a-partner",function(){return a(3577)}])},2156:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(a(2784)),i=c(a(3980)),r=a(6262),d=a(200);function c(e){return e&&e.__esModule?e:{default:e}}const l=d.css`
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
`,o=d.css`
  width: 23%;
  height: 230px;
  position: absolute;
  z-index: 1;
  left: -15px;
  top: 585px;
`,s=d.css`
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
`,p=d.css`
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
`,u=d.css`
  &.default {
    padding-top: 0;
  }
`,f=d.css`
  position: relative;
  width: 100%;
  flex: 1 0;
  box-sizing: border-box;
  background-color: white;

  &.default {
    top: 0;
    left: 0;
  }
`,m=e=>{const t={root:"default",content:"default",bgContainer:"default",bgPaddingBlock:"default",bg:"default",...e.classes};return n.default.createElement("div",{className:(0,d.cx)(l,t.root)},n.default.createElement("div",{className:(0,d.cx)(s,t.content)},e.children),n.default.createElement("div",{className:(0,d.cx)(o,t.xgridContainer)},n.default.createElement(r.XGrid,{type:"dark"})),n.default.createElement("div",{className:(0,d.cx)(p,t.bgContainer)},n.default.createElement("div",{className:(0,d.cx)(u,t.bgPaddingBlock)}),n.default.createElement("div",{className:(0,d.cx)(f,t.bg)})))};m.propTypes={classes:i.default.shape({root:i.default.string,content:i.default.string,bgContainer:i.default.string,bg:i.default.string})};var x=m;t.default=x},6203:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(2784)),i=l(a(3980)),r=a(200),d=a(7020),c=a(3211);function l(e){return e&&e.__esModule?e:{default:e}}const o=r.css`
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  padding: 22px 0;
  border: 1px solid ${c.color.dark};
  border-radius: 2px;
`,s=r.css`
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
  background-color: ${c.color.bgColor2};
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
`,h=({children:e,btnTitle:t,selfIndex:a,isOpen:i,collapseFunc:c})=>n.default.createElement("div",{className:p},n.default.createElement("div",{className:(0,r.cx)(s,{hide:i}),onClick:()=>c(i?0:a)},n.default.createElement("div",{className:o},t),n.default.createElement(d.DropdownSvg,null)),n.default.createElement("div",{className:(0,r.cx)(m,{show:i})},n.default.createElement("div",{className:(0,r.cx)(x,{hide:i})},e)));h.propTypes={selfIndex:i.default.number,btnTitle:i.default.string,isOpen:i.default.bool,collapseFunc:i.default.func};var g=h;t.default=g},3581:function(e,t,a){"use strict";t.Z=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=m(t);if(a&&a.has(e))return a.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var d=i?Object.getOwnPropertyDescriptor(e,r):null;d&&(d.get||d.set)?Object.defineProperty(n,r,d):n[r]=e[r]}n.default=e,a&&a.set(e,n);return n}(a(2784)),i=a(200),r=f(a(9665)),d=f(a(258)),c=f(a(2156)),l=f(a(4442)),o=f(a(6203)),s=f(a(9643)),p=a(9438),u=a(3211);function f(e){return e&&e.__esModule?e:{default:e}}function m(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(m=function(e){return e?a:t})(e)}const x=r.default.h5`
  font-size: 18px;
  line-height: 22px;
  margin: 0;
  padding: 0;
  margin-right: 15px;
`,h=r.default.img`
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
`,g=r.default.hr`
  width: 100vw;
  border: none;
  height: 3px;
  background-color: #ece8e0;
  margin: 32px 0 0 0;

  @media screen and (max-width: 767px) {
    margin: 17px 0 0 0;
  }
`,w=r.default.h1`
  margin: 0;
  line-height: 1;
  font-size: 36px;
  font-weight: 900;
  color: ${u.color.dark};

  @media screen and (max-width: 767px) {
    font-size: 24px;
  }
`,v=r.default.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
  z-index: 5;
`,b=i.css`
  @media screen and (max-width: 575px) {
    display: none;
  }
`,y=i.css`
  margin: 333px 0 0 0;
  padding-left: 35px;

  @media screen and (max-width: 767px) {
    margin: 244px 0 0 0;
    padding-left: calc(10px - (100vw - 100%) / 2);
  }

  @media screen and (max-width: 375px) {
    padding-left: 10px;
  }
`,E=i.css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-content: space-between;
  position: relative;
`,O=i.css`
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
`,_=i.css`
  padding: 333px 0 0 0;

  @media screen and (max-width: 767px) {
    padding: 244px 0 0 0;
  }
`,j=i.css`
  height: 431px;

  @media screen and (max-width: 767px) {
    height: 192px;
  }
`,k=i.css`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
`,N=i.css`
  display: flex;
  margin-top: 20px;
  color: ${u.color.dark};

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`,P=i.css`
  width: 30%;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`,z=i.css`
  width: 70%;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`,C=i.css`
  display: flex;
  flex-wrap: wrap;
  color: ${u.color.dark};

  & > div {
    margin-top: 40px;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`,S=i.css`
  width: 30%;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`,M=i.css`
  width: 70%;
  font-size: 16px;
  line-height: 22px;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`,Y=[{title:"become-a-partner.advantage-1.title",content:"become-a-partner.advantage-1.content"},{title:"become-a-partner.advantage-2.title",content:"become-a-partner.advantage-2.content"},{title:"become-a-partner.advantage-3.title",content:"become-a-partner.advantage-3.content"}];var B=()=>{const{t:e}=(0,l.default)(),[t,a]=(0,n.useState)(0);return n.default.createElement(d.default,null,n.default.createElement(c.default,{classes:{root:_,bgContainer:y,bgPaddingBlock:j,xgridContainer:b}},n.default.createElement("div",{className:O},"Become A Partner"),n.default.createElement(v,null,n.default.createElement("div",{className:E},n.default.createElement(w,null,"Become A Partner")),n.default.createElement(g,null)),n.default.createElement("div",{className:k},n.default.createElement(h,{src:"https://res.cloudinary.com/dvgomg5gh/image/upload/q_60/f_auto/v1602841516/partner_c95a01f8af.jpg"}),n.default.createElement("div",{className:C},Y.map(((t,a)=>n.default.createElement(n.default.Fragment,{key:t.title},n.default.createElement("div",{className:S},0===a&&n.default.createElement(x,null,e(t.title))),n.default.createElement("div",{className:M},e(t.content)))))),n.default.createElement("div",{className:N},n.default.createElement("div",{className:P}),n.default.createElement("div",{className:z},n.default.createElement(o.default,{selfIndex:1,btnTitle:e("become-a-partner.title.interested"),isOpen:1===t,collapseFunc:e=>a(e)},n.default.createElement(s.default,{title:e("become-a-partner.title.interested"),formSchema:p.BecomeAPartnerFormSchema,apiUrl:"https://script.google.com/macros/s/AKfycbxAjRkazizMr8S7PsiSdLqXsJsBCLBaC3zHmkSxmYkV1dfUvgU/exec",closeFunc:()=>a(0),isSectionMode:!0})))))))};t.Z=B}},function(e){e.O(0,[938,355,258,502,774,888,179],(function(){return t=9026,e(e.s=t);var t}));var t=e.O();_N_E=t}]);