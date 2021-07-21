(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[111],{8795:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return s}});var n=a(7243),o=a(2322),r=(a(2784),a(9745));function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var s=!0;t.default=function(e){return(0,o.jsx)(r.Z,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e))}},3253:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[lang]/about-us",function(){return a(8795)}])},9745:function(e,t,a){"use strict";t.Z=void 0;var n=c(a(2784)),o=c(a(258)),r=a(7870),i=a(200),s=a(3211);function c(e){return e&&e.__esModule?e:{default:e}}const d=i.css`
  width: 100%;
  overflow: hidden;
  background-color: ${s.color.white};
`,l=i.css`
  color: ${s.color.white};
  height: 140px;
  transition: height 0.3s;

  @media screen and (max-width: 767px) {
    height: 80px;
  }
`,p=i.css`
  color: ${s.color.dark};
  height: 80px;

  @media screen and (max-width: 767px) {
    height: 50px;
  }
`,u=i.css`
  height: 100%;
  width: 100%;
  transition: opacity 0.3s;
  background-color: ${s.color.white};
  opacity: 0;
`,x=i.css`
  opacity: 1;
`;var m=()=>n.default.createElement(o.default,{classes:{header:l,scrollActiveHeader:p,background:u,scrollActivebackground:x},iconMode:{origin:"light",scrollActive:"dark"},activeLazy:!0},n.default.createElement("div",{className:d},n.default.createElement(r.BannerContent,null),n.default.createElement(r.ContentSection,null)));t.Z=m},9472:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=d(t);if(a&&a.has(e))return a.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var i=o?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(n,r,i):n[r]=e[r]}n.default=e,a&&a.set(e,n);return n}(a(2784)),r=(n=a(4442))&&n.__esModule?n:{default:n},i=a(4756),s=a(200),c=a(3211);function d(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(d=function(e){return e?a:t})(e)}const l=s.css`
  width: 616px;
  height: 100px;
  background: rgba(76, 67, 63, 0.85);

  @media screen and (max-width: 1439px) {
    width: 100%;
    height: 100px;
  }

  @media screen and (max-width: 1279px) {
    width: 100%;
    height: 60px;
  }

  @media screen and (max-width: 1023px) {
    width: 100%;
    height: 40px;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 30px;
  }
`,p=s.css`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.35);
`,u=s.css`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100vw;
  right: 0;
  height: 100%;
  object-fit: cover;
`,x=s.css`
  position: relative;
  width: 100%;
  height: 800px;

  @media screen and (max-width: 1439px) {
    height: 720px;
  }

  @media screen and (max-width: 1279px) {
    height: 576px;
  }

  @media screen and (max-width: 1023px) {
    height: 432px;
  }

  @media screen and (max-width: 767px) {
    height: 210px;
  }
`,m=s.css`
  font-family: Helvetica;
  color: ${c.color.white};
  position: relative;
  width: 100%;
  box-sizing: border-box;
`,h=s.css`
  position: absolute;
  width: 616px;
  bottom: 60px;
  right: 140px;
  z-index: 2;
  text-align: center;

  @media screen and (max-width: 1439px) {
    width: 616px;
    right: 105px;
    bottom: 50px;
  }

  @media screen and (max-width: 1279px) {
    width: 434px;
    right: 73px;
    bottom: 50px;
  }

  @media screen and (max-width: 1023px) {
    width: 323px;
    right: 46px;
    bottom: 40px;
  }

  @media screen and (max-width: 767px) {
    width: 222px;
    right: 20px;
    bottom: 20px;
  }
`,f=s.css`
  font-size: 98px;
  position: relative;
  bottom: -80px;
  z-index: 2;
  margin: 0;
  color: ${c.color.white};
  vertical-align: bottom;

  &.title-en {
    font-size: 120px;
  }

  @media screen and (max-width: 1439px) {
    font-size: 102px;
  }

  @media screen and (max-width: 1279px) {
    font-size: 72px;
    bottom: -50px;

    &.title-en {
      font-size: 80px;
      bottom: -60px;
    }
  }

  @media screen and (max-width: 1023px) {
    font-size: 52px;
    bottom: -36px;

    &.title-en {
      font-size: 60px;
      bottom: -45px;
    }
  }

  @media screen and (max-width: 767px) {
    font-size: 36px;
    bottom: -24px;

    &.title-en {
      font-size: 40px;
      bottom: -30px;
    }
  }
`;var b=()=>{const{t:e,locale:t}=(0,r.default)(),a=(0,o.useContext)(i.AppContext).setLoadFinished,n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{n.current&&n.current.complete&&a(!0)}),[]),o.default.createElement("div",{className:m},o.default.createElement("div",{className:h},o.default.createElement("h1",{className:(0,s.cx)(f,{"title-en":"tw"!==t}),dangerouslySetInnerHTML:{__html:e("about-us.title")}}),o.default.createElement("div",{className:l})),o.default.createElement("div",{className:x},o.default.createElement("div",{className:p}),o.default.createElement("img",{ref:n,className:u,src:"/images/about_us/about_cover.jpg",onLoad:()=>{a(!0)}})))};t.default=b},3914:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(a(2784)),o=s(a(4442)),r=a(200),i=a(3211);function s(e){return e&&e.__esModule?e:{default:e}}const c=[{title:"about-us.our-cyber-threat-experts.analyst-title",context:"about-us.our-cyber-threat-experts.analyst-context"},{title:"about-us.our-cyber-threat-experts.engine-lab-title",context:"about-us.our-cyber-threat-experts.engine-lab-context"},{title:"about-us.our-cyber-threat-experts.d39-title",context:"about-us.our-cyber-threat-experts.d39-context"},{title:"about-us.our-cyber-threat-experts.ir-team-title",context:"about-us.our-cyber-threat-experts.ir-team-context"}],d=r.keyframes`
  0% {
    transform: translateY(-60px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`,l=r.css`
  text-align: left;
  line-height: 1.5;
`,p=r.css`
  margin: 0;
  font-size: 24px;
  color: ${i.color.dark};
  opacity: 0;

  &.observed-show {
    animation: ${d} 0.6s forwards;
  }
`,u=r.css`
  width: 100%;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 120px;
  font-family: Helvetica;
  font-size: 16px;
  color: ${i.color.dark};

  @media screen and (max-width: 1279px) {
    padding-top: 30px;
  }

  @media screen and (max-width: 1023px) {
    padding-bottom: 100px;
  }
`,x=r.css`
  display: flex;
  max-width: 1000px;
  margin: 0 auto;

  @media screen and (max-width: 1279px) {
    flex-direction: column;
    max-width: 800px;

    & :not(:last-child) {
      margin-bottom: 60px;
    }
  }

  @media screen and (max-width: 1023px) {
    max-width: 620px;
  }

  @media screen and (max-width: 767px) {
    max-width: 335px;
    margin: 0 auto;
    padding: 0;
    display: block;
  }
`,m=r.css`
  width: 250px;
  height: 250px;
  position: absolute;
  z-index: 2;
  left: 0;
  top: 7px;
  background-color: white;
  clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%);
  transition: 1s clip-path;

  &.observed-show {
    clip-path: polygon(100% 0%, 100% 100%, 100% 100%, 100% 0%);
  }
`,h=r.css`
  flex: 1.2 3 0;
`,f=r.css`
  flex: 3 1.2 0;

  img {
    max-width: 250px;
    height: auto;
    float: left;
    margin: 7px 12px 7px 0;
  }
`,b=r.css`
  opacity: 0;

  &.observed-show {
    animation: ${d} 0.6s forwards;
  }
`,g=r.css`
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 20px 0;
  padding-bottom: 2px;
  border-bottom: 2px solid ${i.color.line2};
`,w=r.css`
  margin-bottom: 80px;

  ${"."+f} {
    position: relative;
  }

  ${"."+b} {
    margin-left: calc(250px + 7px);
  }

  ${"."+g} {
    width: 100%;
  }

  @media screen and (max-width: 1279px) {
    ${"."+h} {
      flex: 1 4 0;
      margin-bottom: 47px;
    }

    ${"."+f} {
      flex: 4 1 0;
    }
  }

  @media screen and (max-width: 1023px) {
    ${"."+g} {
      padding-bottom: 14px;
      margin-left: calc(30% + 7px);
    }

    ${"."+f} {
      img {
        max-width: 180px;
      }
    }
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    margin: 0 auto 60px;

    ${"."+g} {
      margin-left: inherit;
    }

    ${"."+h} {
      flex: 1 14 0;
      margin-bottom: 30px;
    }

    ${"."+f} {
      flex: 14 1 0;

      img {
        float: none;
        margin-bottom: 10px;
        max-width: 180px;
      }
    }

    ${"."+b} {
      margin-left: 0;
      padding-bottom: 0;
    }
  }
`,v=r.css`
  & :not(:last-child) {
    margin-bottom: 60px;
  }

  @media screen and (max-width: 1279px) {
    ${"."+h} {
      flex: 1 12.5 0;
      margin-bottom: 40px;
    }

    ${"."+f} {
      flex: 12.5 1 0;
    }
  }
`;var y=()=>{const{t:e}=(0,o.default)();return n.default.createElement("div",{className:u},n.default.createElement("div",{className:(0,r.cx)(x,w)},n.default.createElement("div",{className:h,options:{rootMargin:"-30%"}},n.default.createElement("h5",{className:(0,r.cx)(p,"observed"),dangerouslySetInnerHTML:{__html:e("about-us.our-leadership.title")}})),n.default.createElement("div",{className:f},n.default.createElement("div",{className:(0,r.cx)(m,"observed"),options:{rootMargin:"-30%"}}),n.default.createElement("img",{src:"/images/about_us/CEO_TT.jpg"}),n.default.createElement("div",{className:(0,r.cx)(b,"observed"),options:{rootMargin:"-30%"}},n.default.createElement("p",{className:g,dangerouslySetInnerHTML:{__html:e("about-us.our-leadership.content.title")}}),n.default.createElement("div",{className:l,dangerouslySetInnerHTML:{__html:e("about-us.our-leadership.content.context")}})))),n.default.createElement("div",{className:(0,r.cx)(x,v)},n.default.createElement("div",{className:h,options:{rootMargin:"-30%"}},n.default.createElement("h5",{className:(0,r.cx)(p,"observed"),dangerouslySetInnerHTML:{__html:e("about-us.our-cyber-threat-experts.title")}})),n.default.createElement("div",{className:f},c.map(((t,a)=>n.default.createElement("div",{key:a,className:(0,r.cx)(b,"observed"),options:{rootMargin:"-30%"}},n.default.createElement("p",{className:g,dangerouslySetInnerHTML:{__html:e(t.title)}}),n.default.createElement("div",{className:l,dangerouslySetInnerHTML:{__html:e(t.context)}})))))))};t.default=y},7870:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BannerContent",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"ContentSection",{enumerable:!0,get:function(){return o.default}});var n=r(a(9472)),o=r(a(3914));function r(e){return e&&e.__esModule?e:{default:e}}}},function(e){e.O(0,[938,258,774,888,179],(function(){return t=3253,e(e.s=t);var t}));var t=e.O();_N_E=t}]);