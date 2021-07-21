(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[502],{820:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(a(2784)),o=c(a(3980)),l=a(7020),s=a(200),n=a(3211);function c(e){return e&&e.__esModule?e:{default:e}}const i=s.css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid ${n.color.dark};
  border-radius: 3px;
  width: 16px;
  height: 16px;
  margin-right: 10px;
  box-sizing: border-box;
  cursor: pointer;

  svg {
    display: none;
  }

  &.checked {
    background-color: ${n.color.t5Red};
    border: unset;

    svg {
      display: block;
    }
  }
`,d=({isChecked:e=!1,onClick:t=(()=>{})})=>r.default.createElement("div",{onClick:()=>t(),className:(0,s.cx)(i,{checked:e})},r.default.createElement(l.CheckedSvg,null));d.propTypes={isChecked:o.default.bool,onClick:o.default.func};var u=d;t.default=u},3867:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=i(t);if(a&&a.has(e))return a.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var s=o?Object.getOwnPropertyDescriptor(e,l):null;s&&(s.get||s.set)?Object.defineProperty(r,l,s):r[l]=e[l]}r.default=e,a&&a.set(e,r);return r}(a(2784)),o=c(a(3980)),l=a(6385),s=c(a(4442)),n=c(a(8126));function c(e){return e&&e.__esModule?e:{default:e}}function i(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(i=function(e){return e?a:t})(e)}const d=a(200).css`
  cursor: pointer;
  text-decoration: underline;
`,u=()=>{const e=(0,r.useContext)(l.LocaleContext),{t:t}=(0,s.default)();return r.default.createElement("span",null,"jp"===e.locale?r.default.createElement(r.default.Fragment,null,r.default.createElement(n.default,{as:"/privacy-and-cookies-policy",href:"/privacy-and-cookies-policy",targetBlank:!0},r.default.createElement("a",{className:d},t("common.form.privacy-notice.prefix"))),t("common.form.privacy-notice.suffix")):r.default.createElement(r.default.Fragment,null,t("common.form.privacy-notice.prefix"),r.default.createElement(n.default,{as:"/privacy-and-cookies-policy",href:"/privacy-and-cookies-policy",targetBlank:!0},r.default.createElement("a",{className:d},t("common.form.privacy-notice.suffix")))))};u.propTypes={locale:o.default.string};var p=u;t.default=p},7649:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(a(2784)),o=c(a(3980)),l=c(a(9272)),s=a(200),n=a(3211);function c(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}const d=s.css`
  width: 100%;
`,u=s.css`
  border: 1px solid ${n.color.news};
  border-radius: 2px;
  padding: 20px 20px;
  height: 60px;
  margin-top: 10px;
  box-sizing: border-box;
  width: 100%;
  font-size: 16px;
  color: ${n.color.dark};

  &::placeholder {
    color: ${n.color.line2};
  }

  &:focus {
    border: 2px solid ${n.color.dark};
    outline: none;
  }
`,p=s.css`
  color: ${n.color.dark};
`,m=s.css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 112px;
  font-size: 16px;

  &.w-100 {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  @media screen and (max-width: 767px) {
    width: 100%;

    &.w-100 {
      grid-column-start: unset;
      grid-column-end: unset;
    }
  }
`,f=e=>r.default.createElement(l.default,i({classes:{root:(0,s.cx)(m,{"w-100":e.w100}),label:p,input:u,errorMessage:d}},e));f.propTypes={w100:o.default.bool};var y=f;t.default=y},9272:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=d(t);if(a&&a.has(e))return a.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var s=o?Object.getOwnPropertyDescriptor(e,l):null;s&&(s.get||s.set)?Object.defineProperty(r,l,s):r[l]=e[l]}r.default=e,a&&a.set(e,r);return r}(a(2784)),o=i(a(3980)),l=a(200),s=a(7020),n=i(a(4442)),c=a(3211);function i(e){return e&&e.__esModule?e:{default:e}}function d(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(d=function(e){return e?a:t})(e)}const u=l.css`
  box-sizing: border-box;

  &.default {
    width: 100%;
  }
`,p=l.css`
  &.default {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 50%;
  }
`,m=l.css`
  width: 100%;
  position: relative;

  select {
    width: 100%;
    background-color: ${c.color.white};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    appearance: none;
  }

  svg {
    position: absolute;
    bottom: 27px;
    right: 15px;
    pointer-events: none;
  }
`,f=l.css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`,y=l.css`
  color: ${c.color.sonarRed};
  position: relative;
  margin-top: 2px;

  &.default {
    width: 100%;
  }

  @media screen and (max-width: 767px) {
    font-size: 10px;
  }
`,h=e=>{const{t:t}=(0,n.default)(),a=e.labelKey,o=e.value,c=e.onChange,i=e.placeholder,d=e.errorMessage,h=e.errorMessageLock,g=e.inputType,x=e.selectItems,k={root:"default",label:"default",input:"default",errorMessage:"default",...e.classes},v=(0,r.useMemo)((()=>"select"===g?x.map(((e,t)=>r.default.createElement("option",{key:t,value:e},e))):[]),[x]);return r.default.createElement("label",{className:(0,l.cx)(p,k.root)},r.default.createElement("span",{className:k.label},t(`common.form.${a}`)),"select"===g?r.default.createElement("div",{className:m},r.default.createElement("select",{className:(0,l.cx)(u,k.input),onChange:c,defaultValue:i},r.default.createElement("option",{disabled:"disabled"},i),v),r.default.createElement(s.DropdownSvg,null)):r.default.createElement("input",{type:g,placeholder:i,value:o,onChange:c,className:(0,l.cx)(u,k.input)}),r.default.createElement("span",{className:(0,l.cx)(y,k.errorMessage)},r.default.createElement("span",{className:f},h?"":d)))};h.propTypes={labelKey:o.default.string,value:o.default.any,onChange:o.default.func,placeholder:o.default.string,errorMessage:o.default.string,errorMessageLock:o.default.bool,classes:o.default.object,inputType:o.default.string,selectItems:o.default.array};var g=h;t.default=g},5759:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=a(2784))&&r.__esModule?r:{default:r},l=a(200),s=a(3211);const n=l.css`
  text-align: center;
  margin-top: 5px;
  margin-right: auto;
  margin-left: auto;
  width: 350px;
  color: ${s.color.dark};
  font-size: 10px;

  a {
    text-decoration: underline;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;var c=()=>o.default.createElement("div",{className:n},"This site is protected by reCAPTCHA and the Google"," ",o.default.createElement("a",{href:"https://policies.google.com/privacy"},"Privacy Policy")," and",o.default.createElement("a",{href:"https://policies.google.com/terms"}," Terms of Service")," apply.");t.default=c},4048:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(a(2784)),o=s(a(3980)),l=a(1176);function s(e){return e&&e.__esModule?e:{default:e}}function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}const c=a(200).css`
  width: 360px;
  height: 60px;
  margin: 30px auto 0 auto;

  @media screen and (max-width: 767px) {
    width: 100%;
    margin: 10px auto 0 auto;
  }
`,i=e=>{const t=e.onSubmit;return r.default.createElement(l.Button,n({},e,{classes:{root:c},onClick:e=>{e.preventDefault(),t()}}))};i.propTypes={onSubmit:o.default.func};var d=i;t.default=d},9643:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=k(a(2784)),o=g(a(3980)),l=k(a(7409)),s=a(5350),n=a(4756),c=a(6385),i=g(a(4442)),d=a(200),u=a(3211),p=g(a(3867)),m=g(a(820)),f=g(a(5759)),y=g(a(4048)),h=g(a(7649));function g(e){return e&&e.__esModule?e:{default:e}}function x(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(x=function(e){return e?a:t})(e)}function k(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=x(t);if(a&&a.has(e))return a.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var s=o?Object.getOwnPropertyDescriptor(e,l):null;s&&(s.get||s.set)?Object.defineProperty(r,l,s):r[l]=e[l]}return r.default=e,a&&a.set(e,r),r}const v=d.css`
  margin: 0 auto;
  height: auto;
  width: 100%;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`,b=d.css`
  font-size: 36px;
  color: ${u.color.dark};
  font-weight: 900;

  @media screen and (max-width: 575px) {
    font-size: 24px;
  }
`,w=d.css`
  display: flex;
  justify-content: space-between;

  img {
    width: 48px;
    height: 48px;
    cursor: pointer;
  }
`,E=d.css`
  margin: 0;
  border: none;
  border-bottom: ${u.color.line2} 2px solid;
  margin-top: 5px;
  margin-bottom: 20px;
`,C=d.css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 0;
`,T=d.css`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 20px 40px 30px 40px;
  background-color: ${u.color.bgColor2};

  @media screen and (max-width: 1023px) {
    padding: 30px 20px;
  }

  @media screen and (max-width: 767px) {
    padding: 30px 20px;
  }
`,N=d.css`
  font-size: 24px;
  margin: 0 0 15px 0;
  color: ${u.color.dark};
`,M=d.css`
  &:not(:first-child) {
    ${"."+N} {
      margin: 25px 0 15px 0;
    }
  }
`,P=d.css`
  display: grid;
  grid-gap: 20px 40px;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 1023px) {
    display: grid;
    grid-gap: 20px 18px;
    flex: 1 0;
  }

  @media screen and (max-width: 767px) {
    display: grid;
    grid-gap: 10px 40px;
    grid-template-columns: auto;
    flex: 1 0;
  }
`,R=d.css`
  display: flex;
  align-items: center;
`,S=d.css`
  margin-top: 10px;
  display: flex;
  align-items: center;
  color: ${u.color.dark};

  span {
    font-size: 10px;
  }
`,$=d.css`
  color: ${u.color.sonarRed};
  margin-left: 8px;
`,_=d.css`
  text-decoration: underline;
  cursor: pointer;
`,q=d.css`
  display: flex;
  flex-direction: column;
  text-align: center;
`,j=d.css`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 45px;
  height: 45px;
`,Y=d.css`
  font-weight: 600;
  color: white;
`,O=d.keyframes`
  from {
    stroke-dashoffset: 150;
    transform: rotate(-110deg) scaleY(1);
  }

  50% {
    stroke-dashoffset: 29.5;
    transform: rotate(-38.5deg) scaleY(1);
  }

  50.005% {
    transform: rotate(-90deg) scaleY(-1);
  }

  to {
    stroke-dashoffset: 150;
    transform: rotate(-65deg) scaleY(-1);
  }
`,L=d.keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`,z=d.keyframes`
  to {
    width: 1.25em;
  }
`,F=d.keyframes`
  to {
    stroke-dashoffset: 0;
  }
`,I=d.css`
  transform-origin: center center;
`,K=d.css`
  stroke-dashoffset: 0;
`,W=d.css`
  width: 100%;
  height: 100%;
  padding: 50px 0;
  background-color: ${u.color.dark};
  transition: background-color 0.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
  stroke-dasharray: 170;
  stroke-dashoffset: 170;

  svg {
    margin-top: 20px;

    path {
      opacity: 0;
      transform: translateY(5px);
      fill: white;
    }

    circle {
      fill: none;
      transform-origin: center center;
      transform: rotate(-90deg);

      &${"."+K} {
        stroke: ${u.color.news};
      }

      &.progress {
        stroke: ${u.color.bgColor2};
      }
    }
  }

  ${"."+Y} {
    margin-top: 50px;
    font-size: 24px;

    &:nth-child(2) {
      font-size: 16px;
      margin-top: 30px;
    }
  }
`,A=d.css`
  svg {
    ${"."+I} {
      animation: ${L} 7s linear infinite;
      transform-origin: center center;
    }

    circle {
      fill: none;
      stroke-width: 7.83px;
      transform-origin: center center;
      transform: rotate(0deg);

      &${"."+K} {
        stroke: ${u.color.news};
        stroke-dashoffset: 0;
      }

      &.progress {
        stroke: ${u.color.bgColor2};
        stroke-dashoffset: 130;
        animation: ${O} 4.5s ease infinite;
      }
    }
  }

  ${"."+Y} {
    margin-top: 100px;
    margin-bottom: 15px;
    font-size: 16px;

    &::after {
      position: absolute;
      overflow: hidden;
      display: inline-block;
      vertical-align: bottom;
      animation: ${z} steps(4, end) 2s infinite;
      width: 0;
      content: "\2026";
    }
  }
`,H=d.css`
  svg {
    circle {
      stroke-dasharray: 200px;
      transition: all 0.5s;

      &.progress {
        animation: ${F} 1s ease forwards;
      }
    }

    path {
      transition: all 1s;
      transform: translateY(0);
      opacity: 1;
    }

    stroke-dashoffset: 0;
    stroke-dasharray: none;
  }

  background-color: #64cda2;
`,U=d.css`
  background-color: ${u.color.sonarRed};

  svg {
    path {
      transition: all 1s;
      transform: translateY(0);
      opacity: 1;
    }
  }
`,B=({title:e,formSchema:t,apiUrl:a,extraFormData:o={},closeFunc:u=(()=>{}),isHideCloseBtn:g=!1,isSectionMode:x=!1,logEventKey:k})=>{const O=(0,r.useContext)(n.AppContext),L=(0,r.useContext)(c.LocaleContext),{t:z}=(0,i.default)(),F={};x?t.forEach((e=>{e.schema.forEach((e=>{F[e.key]=""}))})):t.forEach((e=>{F[e.key]=""}));const[B,D]=(0,r.useState)({...F,...o}),[Z,J]=(0,r.useState)(F),[V,G]=(0,r.useState)(!0),[Q,X]=(0,r.useState)("normal"),ee="submit"===Q?26.085:28,te="submit"===Q?7.83:4,[ae,re]=(0,r.useState)(!1),oe=(e,t)=>{if(!t.isRequired||(e[t.key]=(0,s.validateRequire)({fieldName:z(`common.form.${t.key}`),value:B[t.key],defaultHint:z("common.form.validate.required")}),!e[t.key]))switch(t.type){case"text":case"number":break;case"email":e[t.key]=(0,s.validateEmail)({value:B[t.key],defaultHint:z("common.form.validate.email")});break;case"url":e[t.key]=(0,s.validateUrl)({value:B[t.key],defaultHint:z("common.form.validate.url")});break;case"select":e[t.key]=(0,s.valiedateSelect)({value:B[t.key],defaultHint:z("common.form.validate.select")})}};(0,r.useEffect)((()=>{J((()=>{const e={};return x?t.forEach((t=>{t.schema.forEach((t=>{oe(e,t)}))})):t.forEach((t=>{oe(e,t)})),e.privacy=ae?"":"false",e}))}),[B,L.locale,ae]),(0,r.useEffect)((()=>{le()}),[L.locale]);const le=()=>{D({...F,...o}),J(F),G(!0),X("normal")},se=e=>e.selectItemKeys?e.selectItemKeys.map((e=>z(`common.form.${e}`))):e.selectItems,ne=async()=>{G(!1);const e=Object.values(Z).every((e=>""===e)),t=Object.keys(B).reduce(((e,t,a)=>e+=`${a>0?"&":""}${encodeURIComponent(t)}=${encodeURIComponent(B[t])}`),"");if(e){X("submit");const e=await O.recaptchaExecuteRef.current();fetch(`${a}?${t}&recaptchaToken=${e}`,{method:"GET"}).then((()=>{X("success"),k&&l.event({action:k,category:"form"})})).catch((()=>X("fail")))}},ce=(0,r.useMemo)((()=>r.default.createElement("svg",{width:"60",height:"60",viewBox:"0 0 60 60"},r.default.createElement("g",{fill:"none"},r.default.createElement("rect",{width:"60",height:"60"}),r.default.createElement("path",{fill:"#ffffff",d:"M27.8210612,4.7743469 C28.7768213,3.0752177 31.2231787,3.0752177 32.1789388,4.7743469 L32.1789388,4.7743469 L59.1789388,52.7743469 C60.1163508,54.440857 58.9120662,56.5 57,56.5 L57,56.5 L3,56.5 C1.08793381,56.5 -0.116350783,54.440857 0.821061157,52.7743469 L0.821061157,52.7743469 Z M30,11.098 L7.273,51.5 L52.726,51.5 L30,11.098 Z M30,42 C31.6568542,42 33,43.3431458 33,45 C33,46.6568542 31.6568542,48 30,48 C28.3431458,48 27,46.6568542 27,45 C27,43.3431458 28.3431458,42 30,42 Z M30,23 C31.5622563,23 32.8287152,24.266459 32.8287152,25.8287152 C32.8287152,25.8841204 32.8270874,25.9395136 32.8238339,25.9948231 L32.117444,38.0034513 C32.0514948,39.1245877 31.1230745,40 30,40 C28.8769255,40 27.9485052,39.1245877 27.882556,38.0034513 L27.1761661,25.9948231 C27.0844272,24.4352627 28.2743317,23.0966202 29.8338921,23.0048813 C29.8892017,23.0016278 29.9445949,23 30,23 Z"})))),[]),ie=(0,r.useMemo)((()=>r.default.createElement("svg",{width:"60px",height:"60px",viewBox:"0 0 60 60"},r.default.createElement("g",{className:I},r.default.createElement("circle",{className:K,cx:"30",cy:"30",r:ee,strokeWidth:te}),r.default.createElement("circle",{className:"progress",cx:"30",cy:"30",r:ee,strokeWidth:te})),r.default.createElement("path",{d:"M42.0025559,20.2660398 C42.9143517,19.2292208 44.4940161,19.1278695 45.5308352,20.0396653 C46.5225751,20.9118178 46.658424,22.3950259 45.8704004,23.4297283 L45.7572097,23.5679445 L28.3294753,43.3853274 C27.3533387,44.4953095 25.6454136,44.5133538 24.6436572,43.460678 L24.5269281,43.3292188 L14.806225,31.5948438 C13.9254171,30.531574 14.0733317,28.9555876 15.1366015,28.0747797 C16.1536422,27.2322678 17.6397846,27.3309689 18.5379345,28.2716692 L18.6566656,28.4051562 L26.508,37.883 L42.0025559,20.2660398 Z",id:"Combined-Shape"}))),[te,ee]);return r.default.createElement("div",{className:v},(()=>{switch(Q){case"normal":return r.default.createElement("div",{className:T},r.default.createElement("div",{className:w},r.default.createElement("div",{className:b},e),!g&&r.default.createElement("img",{onClick:()=>u(),src:"/images/close_btn.svg"})),r.default.createElement("hr",{className:E}),r.default.createElement("form",{className:C},x?t.map((e=>r.default.createElement("div",{className:M,key:e.sectionKey},r.default.createElement("h4",{className:N},z(e.sectionKey)),r.default.createElement("div",{className:P},e.schema.map((e=>r.default.createElement(h.default,{key:e.key,inputType:e.type,selectItems:se(e),labelKey:e.key,value:B[e.key],errorMessage:Z[e.key],errorMessageLock:V,placeholder:e.placeholder,w100:e.w100,onChange:t=>{const a=t.target.value,r={};r[e.key]=a,D((e=>({...e,...r})))}}))))))):r.default.createElement("div",{className:P},t.map((e=>r.default.createElement(h.default,{key:e.key,inputType:e.type,selectItems:se(e),labelKey:e.key,value:B[e.key],errorMessage:Z[e.key],errorMessageLock:V,placeholder:e.placeholder,w100:e.w100,onChange:t=>{const a=t.target.value,r={};r[e.key]=a,D((e=>({...e,...r})))}})))),r.default.createElement("div",{className:S},r.default.createElement("div",{className:R},r.default.createElement(m.default,{isChecked:ae,onClick:()=>re(!ae)}),r.default.createElement(p.default,null)),!V&&!ae&&r.default.createElement("span",{className:$},z("common.form.validate.privacy"))),r.default.createElement(y.default,{onSubmit:()=>ne()},z("common.submit")),r.default.createElement(f.default,null)));case"submit":case"success":return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{className:(0,d.cx)(W,{[A]:"submit"===Q,[H]:"submit"!==Q})},!g&&"success"===Q&&r.default.createElement("img",{className:j,onClick:()=>u(),src:"/images/close_btn.svg"}),ie,r.default.createElement("div",{className:q},"success"===Q&&r.default.createElement("div",{className:Y},"SUCCESS"),r.default.createElement("div",{className:Y},"submit"===Q?"Please wait a second":"Please check your email."))));case"fail":return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{className:(0,d.cx)(W,U)},!g&&r.default.createElement("img",{className:j,onClick:()=>u(),src:"/images/close_btn.svg"}),ce,r.default.createElement("div",{className:q},r.default.createElement("div",{className:Y},"FAIL"),r.default.createElement("a",{onClick:()=>ne(),className:`\n                       ${Y}\n                       ${_}\n                      `},"Retry"))))}})())};B.propTypes={title:o.default.string,formSchema:o.default.array,apiUrl:o.default.string,closeFunc:o.default.func,isHideCloseBtn:o.default.bool,isSectionMode:o.default.bool,extraFormData:o.default.object,logEventKey:o.default.string};var D=B;t.default=D},9438:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ThreatSonarFormSchema=t.ThreatVisionFormSchema=t.BecomeAPartnerFormSchema=t.RequestInformationFormSchema=t.PostFormSchema=void 0;var r,o=(r=a(9537))&&r.__esModule?r:{default:r};o.default.overwrite([{code:"TW",name:"Taiwan"}]);const l=o.default.getNames().sort();t.PostFormSchema=[{key:"name",placeholder:"Type Your Name",type:"text",isRequired:!0},{key:"email",placeholder:"Type Your Mail Address",type:"email",isRequired:!0},{key:"job-title",placeholder:"Type Your Job Title",type:"text",isRequired:!0},{key:"company-name",placeholder:"Type Your Company Name",type:"text",isRequired:!0}];const s=[{key:"first-name",placeholder:"Type Your First Name",type:"text",isRequired:!0},{key:"last-name",placeholder:"Type Your Last Name",type:"text",isRequired:!0},{key:"company-name",placeholder:"Type Your Company Name",type:"text",isRequired:!0},{key:"phone",placeholder:"Type Your Phone Number",type:"text",isRequired:!0},{key:"email",placeholder:"Type Your Email Address",type:"email",isRequired:!0},{key:"country",placeholder:"Please Select",type:"select",selectItems:l},{key:"how-can-we-help-you",placeholder:"Tell Us Something",type:"text",w100:!0,isRequired:!0}];t.RequestInformationFormSchema=s;const n=[{sectionKey:"become-a-partner.form-section.contact.title",schema:[{key:"first-name",placeholder:"Type Your First Name",type:"text",isRequired:!0},{key:"last-name",placeholder:"Type Your Last Name",type:"text",isRequired:!0},{key:"job-title",placeholder:"Type Your Job Title",type:"text",isRequired:!0},{key:"email",placeholder:"Type Your Business Email",type:"email",isRequired:!0},{key:"phone",placeholder:"Type Your Phone Number",type:"text",isRequired:!0},{key:"address",placeholder:"Type Your Address",type:"text"},{key:"country",placeholder:"Please Select",type:"select",selectItems:l},{key:"city",placeholder:"Type Your City",type:"text"}]},{sectionKey:"become-a-partner.form-section.company.title",schema:[{key:"company-name",placeholder:"Type Your Company Name",type:"text",isRequired:!0},{key:"company-address",placeholder:"Type Your Company Address",type:"text"},{key:"company-country",placeholder:"Please Select",type:"select",selectItems:l},{key:"company-city",placeholder:"Type Your Company City",type:"text"},{key:"website",placeholder:"Type Your Website URL",type:"url"},{key:"company-size",placeholder:"Please Select",type:"select",selectItemKeys:["company-size.micro","company-size.small","company-size.medium","company-size.large"]},{key:"primary-market",placeholder:"Type Your Primary Market",type:"text",isRequired:!0},{key:"found-company-duration",placeholder:"Tell Us Something...",type:"text",w100:!0,isRequired:!0},{key:"how-did-you-know-t5",placeholder:"Tell Us Something...",type:"text",w100:!0,isRequired:!0}]}];t.BecomeAPartnerFormSchema=n;const c=[{key:"first-name",placeholder:"Type Your First Name",type:"text",isRequired:!0},{key:"last-name",placeholder:"Type Your Last Name",type:"text",isRequired:!0},{key:"company-name",placeholder:"Type Your Company Name",type:"text",isRequired:!0},{key:"industry-category.label",placeholder:"Please Select",type:"select",selectItemKeys:["industry-category.gov","industry-category.education","industry-category.financial","industry-category.biotechnology","industry-category.hightech","industry-category.manufacturing","industry-category.telecom","industry-category.critical","industry-category.enterprise","industry-category.mssp","industry-category.consultancy","industry-category.gaming","industry-category.others"]},{key:"job-title",placeholder:"Type Your Job Title",type:"text",isRequired:!0},{key:"phone",placeholder:"Type Your Phone Number",type:"text",isRequired:!0},{key:"email",placeholder:"Type Your Email Address",type:"email",isRequired:!0},{key:"country",placeholder:"Please Select",type:"select",selectItems:l},{key:"inquiry",placeholder:"Type Your Inquiry",type:"text",w100:!0,isRequired:!0}];t.ThreatVisionFormSchema=c;const i=[{key:"first-name",placeholder:"Type Your First Name",type:"text",isRequired:!0},{key:"last-name",placeholder:"Type Your Last Name",type:"text",isRequired:!0},{key:"company-name",placeholder:"Type Your Company Name",type:"text",isRequired:!0},{key:"industry-category.label",placeholder:"Please Select",type:"select",selectItemKeys:["industry-category.gov","industry-category.education","industry-category.financial","industry-category.biotechnology","industry-category.hightech","industry-category.manufacturing","industry-category.telecom","industry-category.critical","industry-category.enterprise","industry-category.mssp","industry-category.consultancy","industry-category.gaming","industry-category.others"]},{key:"company-size",placeholder:"Please Select",type:"select",selectItemKeys:["company-size.micro","company-size.small","company-size.medium","company-size.large"]},{key:"job-title",placeholder:"Type Your Job Title",type:"text",isRequired:!0},{key:"phone",placeholder:"Type Your Phone Number",type:"text",isRequired:!0},{key:"email",placeholder:"Type Your Email Address",type:"email",isRequired:!0},{key:"country",placeholder:"Please Select",type:"select",selectItems:l},{key:"inquiry",placeholder:"Type Your Inquiry",type:"text",isRequired:!0}];t.ThreatSonarFormSchema=i},5350:function(e,t,a){const r=a(4525),o=a(1964),l=a(4922);e.exports={validateRequire:({fieldName:e,value:t,defaultHint:a})=>{let r="";return o(t)&&(r=`${e} ${a}`),r},validateEmail:({value:e,defaultHint:t})=>e&&!r(e)?t:"",validateUrl:({value:e,defaultHint:t})=>e&&!l(e)?t:"",valiedateSelect:({value:e,defaultHint:t})=>""===e||e===t?t:""}}}]);