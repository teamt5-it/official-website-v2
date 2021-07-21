(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[534],{3151:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return d}});var n=a(7243),i=a(2322),r=(a(2784),a(9457));function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var d=!0;t.default=function(e){return(0,i.jsx)(r.Z,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e))}},4321:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[lang]/careers",function(){return a(3151)}])},5767:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(2784)),i=l(a(3980)),r=a(200);function l(e){return e&&e.__esModule?e:{default:e}}const d=r.css`
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
`,c=r.css`
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
`,s=r.css`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  &.default {
    padding-left: 35px;
  }
`,o=r.css`
  &.default {
    padding-top: 0;
  }
`,p=r.css`
  position: relative;
  width: 100%;
  flex: 1 0;
  box-sizing: border-box;
  background-color: white;

  &.default {
    top: 0;
    left: 0;
  }
`,m=e=>{const t={root:"default",content:"default",bgContainer:"default",bgPaddingBlock:"default",bg:"default",...e.classes};return n.default.createElement("div",{className:(0,r.cx)(d,t.root)},n.default.createElement("div",{className:(0,r.cx)(c,t.content)},e.children),n.default.createElement("div",{className:(0,r.cx)(s,t.bgContainer)},n.default.createElement("div",{className:(0,r.cx)(o,t.bgPaddingBlock)}),n.default.createElement("div",{className:(0,r.cx)(p,t.bg)})))};m.propTypes={classes:i.default.shape({root:i.default.string,content:i.default.string,bgContainer:i.default.string,bg:i.default.string})};var f=m;t.default=f},9457:function(e,t,a){"use strict";t.Z=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=g(t);if(a&&a.has(e))return a.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var l=i?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(n,r,l):n[r]=e[r]}n.default=e,a&&a.set(e,n);return n}(a(2784)),i=x(a(3980)),r=x(a(258)),l=x(a(5182)),d=x(a(5767)),c=a(6262),s=a(7020),o=a(2426),p=x(a(4442)),m=a(200),f=x(a(9665)),u=a(3211);function x(e){return e&&e.__esModule?e:{default:e}}function g(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(g=function(e){return e?a:t})(e)}const h=f.default.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
  z-index: 5;
`,w=f.default.h5`
  font-size: 18px;
  margin: 0;
  color: ${u.color.dark};
`,v=f.default.h6`
  color: ${u.color.dark};
  font-size: 16px;
  font-weight: 500;
  margin: 10px 0;
`,b=f.default.h1`
  margin: 0;
  line-height: 1;
  font-size: 36px;
  font-weight: 900;
  color: ${u.color.dark};

  @media screen and (max-width: 767px) {
    font-size: 24px;
  }
`,y=f.default.img`
  width: 60px;
  height: 60px;
  margin-right: 10px;
`,E=f.default.p`
  color: #8f8784;
  font-size: 12px;
  font-weight: 500;
  margin: 0;
`,_=f.default.hr`
  width: 80px;
  margin: 10px 0 0 0;
  border: 0;
  border-top: 1px solid ${u.color.line2};
`,N=f.default.hr`
  width: 100vw;
  border: none;
  height: 3px;
  background-color: #ece8e0;
  margin: 29px 0 0 0;

  &.mt-0 {
    margin-top: 0;
  }

  @media screen and (max-width: 767px) {
    margin: 17px 0 0 0;
  }
`,O=m.css`
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
`,j=m.css`
  height: 219px;
  margin-top: 30px;
  margin-bottom: 120px;
  width: 100%;
  background-color: ${u.color.news};
  color: white;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`,P=m.css`
  padding: 333px 0 0 0;

  @media screen and (max-width: 767px) {
    padding: 244px 0 0 0;
  }
`,k=m.css`
  margin: 333px 0 0 0;
  padding-left: 35px;

  @media screen and (max-width: 767px) {
    margin: 244px 0 0 0;
    padding-left: calc(10px - (100vw - 100%) / 2);
  }

  @media screen and (max-width: 375px) {
    padding-left: 10px;
  }
`,z=m.css`
  height: 68px;

  @media screen and (max-width: 767px) {
    height: 44px;
  }
`,C=m.css`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  box-sizing: border-box;
  width: 100%;
  max-width: 1000px;
  margin-top: 30px;
  margin-bottom: 122px;
`,S=m.css`
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
`,T=m.css`
  position: absolute;
  color: ${u.color.white};
  background-color: ${u.color.t5Red};
  padding: 2px 18px;
  left: -30px;
  bottom: 67px;

  @media screen and (max-width: 575px) {
    left: -14px;
    padding: 2px 10px;
  }
`,M=m.css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-content: space-between;
  position: relative;
`,$=m.css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  position: relative;

  @media screen and (max-width: 1279px) {
    padding-right: 0;
  }
`,D=m.css`
  width: 70%;
  font-size: 16px;
  line-height: 22px;
  margin: 0;
  padding: 10px 0;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`,Z=m.css`
  display: flex;
  margin: 10px 0;
  justify-content: flex-end;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`,B=m.css`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
`,H=m.css`
  margin: 0;
  color: ${u.color.dark};
  font-size: 14px;
  max-width: 120px;

  &.fix-me-4 {
    max-width: 140px;
  }
`,L=m.css`
  display: flex;
  flex-wrap: wrap;
  padding: 30px 0 40px 0;
`,W=m.css`
  width: 70%;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`,F=m.css`
  width: 33.33%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1279px) {
    width: 50%;
  }

  @media screen and (max-width: 767px) {
    width: 100%;

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`,I=m.css`
  width: 30%;
  margin-top: 10px;

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-top: 0;
    margin-bottom: 20px;
  }
`,R=[{img:"/images/icons/calendar.svg",context:"careers.benefits.item-1"},{img:"/images/icons/airplane.svg",context:"careers.benefits.item-2"},{img:"/images/icons/employee-health.svg",context:"careers.benefits.item-3"},{img:"/images/icons/sport-welfare.svg",context:"careers.benefits.item-4"},{img:"/images/icons/chips.svg",context:"careers.benefits.item-5"},{img:"/images/icons/top-colleague.svg",context:"careers.benefits.item-6"}],X=({careers:e})=>{const[t,a]=(0,n.useState)([]),i=e.length,[f,u]=(0,n.useState)(1),[x]=(0,n.useState)((0,o.getTotalPage)(i,10)),{t:g}=(0,p.default)();return(0,n.useEffect)((()=>{const t=e.slice(10*(f-1),10*f);a(t)}),[f]),n.default.createElement(r.default,null,n.default.createElement(d.default,{classes:{root:P,bgContainer:k,bgPaddingBlock:z}},n.default.createElement("div",{className:O},"Careers"),n.default.createElement(h,null,n.default.createElement("div",{className:M},n.default.createElement(b,null,"Careers")),n.default.createElement(N,null)),n.default.createElement("div",{className:B},n.default.createElement("img",{className:S,src:"https://res.cloudinary.com/dvgomg5gh/image/upload/q_60/f_auto/v1597723058/TeamT5_Careers_img_b6492dddfd.jpg"}),n.default.createElement("div",{className:Z},n.default.createElement("div",{className:D,dangerouslySetInnerHTML:{__html:g("careers.content")}})),n.default.createElement(N,{className:"mt-0"}),n.default.createElement("div",{className:L},n.default.createElement("div",{className:I},n.default.createElement(w,null,g("careers.benefits.title"))),n.default.createElement("div",{className:W},R.map(((e,t)=>n.default.createElement("div",{key:e.img,className:F},n.default.createElement(y,{src:e.img,alt:g(e.context)}),n.default.createElement("div",{className:(0,m.cx)(H,{"fix-me-4":5===t}),dangerouslySetInnerHTML:{__html:g(e.context)}})))))),n.default.createElement(N,{className:"mt-0"}),i>0?n.default.createElement(n.default.Fragment,null,t.map(((e,t)=>n.default.createElement("a",{key:t,href:e.career_url,target:"_blank",rel:"noreferrer"},n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:$},n.default.createElement("div",null,n.default.createElement(E,null,g(`careers.${e.career_type.replace(/_/g,"-")}`)),n.default.createElement(_,null),n.default.createElement(v,null,e.name),n.default.createElement(E,null,e.location)),n.default.createElement(s.ArrowSvg,{color:l.default["t5-red"],angle:"right"}),e.is_hot&&n.default.createElement("div",{className:T},"HOT")),n.default.createElement(N,{className:"mt-0"}))))),n.default.createElement("div",{className:C},n.default.createElement(c.Paginator,{totalPage:x,currentPage:f,onRightPageClick:async()=>{u((e=>e>=x?x:e+1))},onLeftPageClick:()=>{u((e=>e<=1?1:e-1))},onPageClick:e=>{u(e)}}))):n.default.createElement("div",{className:j},g("common.no-match-careers")))))};X.propTypes={careers:i.default.array};var q=X;t.Z=q}},function(e){e.O(0,[938,258,774,888,179],(function(){return t=4321,e(e.s=t);var t}));var t=e.O();_N_E=t}]);