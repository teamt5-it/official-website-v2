(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[846],{1003:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return d}});var a=i(7243),n=i(2322),r=(i(2784),i(6484));function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}var d=!0;t.default=function(e){return(0,n.jsx)(r.Z,function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){(0,a.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({},e))}},4288:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[lang]/products/threatvision",function(){return i(1003)}])},179:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=p(i(2784)),n=p(i(3980)),r=p(i(4442)),o=i(200),d=p(i(9665)),s=i(3211);function p(e){return e&&e.__esModule?e:{default:e}}const l=d.default.ul`
  list-style: none;
  padding-left: 1rem;
`,c=o.css`
  font-size: 16px;
  color: ${s.color.visionYello};
  line-height: 28px;
  padding-left: 1rem;
  display: inline-block;
`,x=o.css`
  font-size: 32px;

  &.dark {
    color: ${s.color.dark};
  }

  &.light {
    color: ${s.color.white};
  }

  @media screen and (max-width: 1279px) {
    font-size: 32px;
    margin-top: 0;
  }

  @media screen and (max-width: 1023px) {
    margin: 0;
  }

  @media screen and (max-width: 767px) {
    font-size: 24px;
  }
`,m=o.css`
  position: relative;
  font-size: 20px;
  line-height: 1.5;
  list-style-position: inside;

  &::before {
    content: '';
    position: absolute;
    display: inline-block;
    width: 6px;
    height: 6px;
    left: -1rem;
    top: 0.5rem;
    border-radius: 50%;
  }

  &.dark {
    color: ${s.color.dark};

    &::before {
      background-color: ${s.color.dark};
    }
  }

  &.light {
    color: ${s.color.white};

    &::before {
      background-color: ${s.color.white};
    }
  }

  &:not(:last-child) {
    margin-bottom: 14px;
  }

  @media screen and (max-width: 1279px) {
    font-size: 20px;
    line-height: 28px;
    list-style-position: inside;
  }

  @media screen and (max-width: 1023px) {
    font-size: 18px;
    line-height: 1.5;
  }

  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 24px;
  }
`,h=o.keyframes`
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`,g=o.keyframes`
  0% {
    clip-path: polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%);
  }

  100% {
    clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%);
  }
`,f=o.css`
  max-width: 480px;

  img {
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 1279px) {
    max-width: 360px;
  }

  @media screen and (max-width: 1023px) {
    max-width: 288px;
  }

  @media screen and (max-width: 767px) {
    max-width: 288px;
    height: 240px;
    margin-top: 20px;
  }
`,u=o.css`
  width: 456px;

  @media screen and (max-width: 1279px) {
    width: 356px;
    padding-top: 0;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    word-break: break-word;
  }
`,w="category-card-observed-item",b=o.css`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 5;
  padding: 10px calc((100% - 1000px) / 2) 0;

  ${"."+w+"-image-container"} {
    visibility: hidden;
  }

  ${"."+w+"-context"} {
    visibility: hidden;
  }

  @media screen and (max-width: 1279px) {
    padding: 0 calc((100% - 800px) / 2);
  }

  @media screen and (max-width: 1023px) {
    padding: 0 74px;
  }

  @media screen and (max-width: 767px) {
    padding: 0 30px;
    flex-direction: column-reverse;
    align-items: center;
    flex-wrap: wrap;
  }

  &.observed-show {
    ${"."+w+"-image-container"} {
      visibility: visible;
      animation: ${g} 1s cubic-bezier(0.39, 0.575, 0.565, 1);
      animation-fill-mode: both;
    }

    ${"."+w+"-context"} {
      visibility: visible;
      animation: ${h} 1s cubic-bezier(0.39, 0.575, 0.565, 1);
      animation-fill-mode: both;
    }
  }
`,v=e=>{var t,i,n;const{t:d}=(0,r.default)(),s=null!==(t=e.card)&&void 0!==t?t:{},p=null!==(i=e.color)&&void 0!==i?i:"dark",h={root:"",imageWrap:"",context:"",...null!==(n=e.classes)&&void 0!==n?n:{}};return a.default.createElement("div",{className:(0,o.cx)("observed",o.css`
          ${b};
          ${h.root};
        `),options:{rootMargin:"-30%"}},a.default.createElement("div",{className:f},a.default.createElement("div",{className:(0,o.cx)(h.imageWrap,w+"-image-container")},a.default.createElement("img",{src:s.image}))),a.default.createElement("div",{className:(0,o.cx)(p,w+"-context",o.css`
            ${u};
            ${h.context};
          `)},a.default.createElement("h4",{className:(0,o.cx)(x,p),dangerouslySetInnerHTML:{__html:`${d(s.title)}`}}),a.default.createElement(l,null,s.traits&&s.traits.map(((e,t)=>a.default.createElement("li",{className:(0,o.cx)(m,p),key:t,dangerouslySetInnerHTML:{__html:`${d(e)}`}})))),a.default.createElement("span",{className:c,dangerouslySetInnerHTML:{__html:`${d(s.tags)}`}})))};v.propTypes={classes:n.default.object,card:n.default.object,color:n.default.oneOf(["dark","light"])};var y=v;t.default=y},5547:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(i(2784)),n=d(i(4442)),r=i(200),o=i(3211);function d(e){return e&&e.__esModule?e:{default:e}}const s=r.keyframes`
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`,p=r.css`
  font-size: 48px;
  margin-left: 1.875rem;
  margin-bottom: 4rem;

  @media screen and (max-width: 767px) {
    font-size: 28px;
    margin-bottom: 2.5rem;
  }
`,l=r.css`
  box-sizing: border-box;
  width: 100%;
  font-family: Helvetica;
  color: ${o.color.dark};
  font-size: 24px;
  font-weight: bold;
  position: relative;

  .sign {
    /* using in i18n */
    display: inline-block;
    white-space: nowrap;
    font-size: 36px;
    font-weight: bold;
    position: relative;
    z-index: 1;
    margin: 0 4px;
    padding: 0 4px;

    &::after {
      display: block;
      z-index: -1;
      bottom: 2px;
      left: 0;
      content: '';
      position: absolute;
      width: 100%;
      height: 14px;
      background: #ffd36a;
    }
  }
`,c=r.css`
  box-sizing: border-box;
  background: ${o.color.white};
  border: 4px solid ${o.color.dark};
  border-radius: 84px;
  padding: 30px 80px;
  margin-bottom: 20px;
  visibility: hidden;

  &.observed-show {
    visibility: visible;
    animation: ${s} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1);
    animation-fill-mode: both;
  }

  &:nth-of-type(1) {
    max-width: 510px;
  }

  &:nth-of-type(2) {
    margin-left: 128px;
  }

  &:nth-of-type(3) {
    margin-right: 418px;
  }

  &:nth-of-type(4) {
    margin-left: 190px;
    margin-right: 220px;
  }

  &:nth-of-type(5) {
    margin-left: 260px;
    margin-right: 50px;
  }

  &:nth-of-type(6) {
    margin-left: 30px;
    margin-right: 390px;
  }

  @media screen and (max-width: 1279px) {
    &:nth-of-type(1) {
      margin-left: -25px;
      position: relative;
    }

    &:nth-of-type(2) {
      margin-left: 128px;
    }

    &:nth-of-type(3) {
      margin-right: 282px;
    }

    &:nth-of-type(4) {
      margin-left: 221px;
      margin-right: 200px;
    }

    &:nth-of-type(5) {
      margin-left: 244px;
      margin-right: 0;
    }

    &:nth-of-type(6) {
      margin-left: 80px;
      margin-right: 260px;
    }
  }

  @media screen and (max-width: 1023px) {
    font-size: 20px;

    &:nth-of-type(1) {
      margin-left: -6px;
    }

    &:nth-of-type(2) {
      margin-left: -50px;
    }

    &:nth-of-type(3) {
      margin-left: -16px;
      margin-right: 232px;
    }

    &:nth-of-type(4) {
      margin-left: 70px;
      margin-right: 130px;
    }

    &:nth-of-type(5) {
      margin-left: -16px;
      margin-right: 24px;
    }

    &:nth-of-type(6) {
      margin-left: -16px;
      margin-right: 140px;
    }
  }

  @media screen and (max-width: 767px) {
    border: 2px solid ${o.color.dark};
    font-size: 16px;
    margin-right: 0;
    padding: 14px 60px;

    &:nth-of-type(1) {
      margin-left: 30px;
      margin-right: 44px;
    }

    &:nth-of-type(2) {
      margin-left: 10px;
      margin-right: 0;
    }

    &:nth-of-type(3) {
      margin-left: 30px;
      margin-right: 45px;
    }

    &:nth-of-type(4) {
      margin-left: 10px;
      margin-right: 100px;
    }

    &:nth-of-type(5) {
      margin-left: 15px;
      margin-right: 0;
    }

    &:nth-of-type(6) {
      margin-left: 20px;
      margin-right: 20px;
    }
  }

  @media screen and (max-width: 450px) {
    /* fix-me-6 */
    &:nth-of-type(4) {
      margin-left: 10px;
      margin-right: 30px;
    }
  }
`,x=r.css`
  position: absolute;
  width: 50px;
  height: 100%;
  top: 7%;
  z-index: -1;
  left: 7.5%;
  background-position: bottom center;
  background-size: cover;
  background-image: url(/images/arrow_to_bottom.svg);

  @media screen and (max-width: 1439px) {
    top: 6%;
  }

  @media screen and (max-width: 1279px) {
    left: 14%;
  }

  @media screen and (max-width: 1023px) {
    height: 103%;
    top: 6%;
    left: 2%;
  }

  @media screen and (max-width: 767px) {
    height: 103%;
    left: 5%;
    top: 5%;
  }
`,m={title:"threatvision.newswall.title",news:["threatvision.newswall.news-1","threatvision.newswall.news-2","threatvision.newswall.news-3","threatvision.newswall.news-4","threatvision.newswall.news-5","threatvision.newswall.news-6"]};var h=()=>{const{t:e}=(0,n.default)();return a.default.createElement("div",{className:l},a.default.createElement("h3",{className:p,dangerouslySetInnerHTML:{__html:`${e(m.title)}`}}),m.news.map(((t,i)=>a.default.createElement("div",{key:i,className:(0,r.cx)(c,"observed"),options:{rootMargin:"-30%"}},a.default.createElement("div",{dangerouslySetInnerHTML:{__html:`${e(t)}`}})))),a.default.createElement("div",{className:x}))};t.default=h},2933:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"NewsWall",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"CategoryCard",{enumerable:!0,get:function(){return n.default}});var a=r(i(5547)),n=r(i(179));function r(e){return e&&e.__esModule?e:{default:e}}},6484:function(e,t,i){"use strict";t.Z=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var i=x(t);if(i&&i.has(e))return i.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=n?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(a,r,o):a[r]=e[r]}a.default=e,i&&i.set(e,a);return a}(i(2784)),n=c(i(258)),r=i(5885),o=c(i(9643)),d=i(9438),s=c(i(4442)),p=i(200),l=i(3211);function c(e){return e&&e.__esModule?e:{default:e}}function x(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,i=new WeakMap;return(x=function(e){return e?i:t})(e)}const m=p.css`
  width: 100%;
  overflow: hidden;
  background-color: white;
  color: white;
  box-sizing: border-box;
`,h=p.css`
  color: ${l.color.white};
  height: 140px;
  transition: height 0.3s;

  @media screen and (max-width: 767px) {
    height: 80px;
  }
`,g=p.css`
  color: ${l.color.dark};
  height: 80px;

  @media screen and (max-width: 767px) {
    height: 50px;
  }
`,f=p.css`
  height: 100%;
  width: 100%;
  transition: opacity 0.3s;
  background-color: ${l.color.white};
  opacity: 0;
`,u=p.css`
  opacity: 1;
`,w=p.css`
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
`,b=p.css`
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
`,v=p.css`
  width: 760px;

  @media screen and (max-width: 1023px) {
    width: 620px;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;var y=()=>{const{t:e}=(0,s.default)(),[t,i]=(0,a.useState)(!1);(0,a.useEffect)((()=>{document.body.style.overflow=t?"hidden":"unset"}),[]);return a.default.createElement(n.default,{classes:{header:h,scrollActiveHeader:g,background:f,scrollActivebackground:u},iconMode:{origin:"light",scrollActive:"dark"}},a.default.createElement("div",{className:m},a.default.createElement("h1",{style:{display:"none"}},"ThreatVision"),a.default.createElement(r.BannerContent,null),a.default.createElement(r.InfoSection,null),a.default.createElement(r.Bubble,{setIsOpen:i}),a.default.createElement("div",{className:(0,p.cx)(w,{show:t}),onClick:e=>(e=>{e.target===e.currentTarget&&i(!1)})(e)},a.default.createElement("div",{className:(0,p.cx)(b,v,{show:t})},a.default.createElement(o.default,{title:e("threatvision.title.interested"),formSchema:d.ThreatVisionFormSchema,apiUrl:"https://script.google.com/macros/s/AKfycbxkkRsm3dp2FU7uLHSHL_6T2m-SZb7cPwqfLxgllLyuDdfbyZg/exec",closeFunc:()=>i(!1)})))))};t.Z=y},7102:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(i(2784)),n=o(i(4442)),r=i(200);function o(e){return e&&e.__esModule?e:{default:e}}const d=o(i(9665)).default.img`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.35);
`,s=r.css`
  width: 560px;
  height: auto;
  margin-bottom: 31px;

  @media screen and (max-width: 1279px) {
    width: 480px;
  }

  @media screen and (max-width: 1023px) {
    width: 320px;
  }

  @media screen and (max-width: 767px) {
    width: 280px;
  }
`,p=r.css`
  font-family: Helvetica;
  color: white;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 800px;
  box-sizing: border-box;
  background-image: url('/images/ThreatVision/vision_hero_bg.svg');
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  z-index: 2;
`,l=r.css`
  position: relative;
  bottom: 14px;
  width: 100%;
  height: 21px;
  background-color: #f5ab1a99;

  @media screen and (max-width: 1279px) {
    bottom: 16px;
  }

  @media screen and (max-width: 1023px) {
    bottom: 14px;
  }

  @media screen and (max-width: 767px) {
    bottom: 12px;
  }
`,c=r.css`
  position: absolute;
  z-index: 3;
  right: 280px;
  top: 269px;

  @media screen and (max-width: 1439px) {
    right: 140px;
  }

  @media screen and (max-width: 1279px) {
    right: 112px;
  }

  @media screen and (max-width: 1023px) {
    right: 75px;
  }

  @media screen and (max-width: 767px) {
    right: 50%;
    transform: translate(50%, 0);
  }
`,x=r.css`
  width: 516px;
  text-align: center;
  padding-left: 64px;

  @media screen and (max-width: 1279px) {
    width: 440px;
    padding-left: 56px;
  }

  @media screen and (max-width: 1023px) {
    width: 325px;
    padding-left: 0;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    padding-left: 0;
  }
`,m=r.css`
  position: relative;
  z-index: 3;
  font-size: 28px;
  margin: 0;
  font-weight: bold;

  @media screen and (max-width: 1279px) {
    font-size: 24px;
  }

  @media screen and (max-width: 1023px) {
    font-size: 18px;
  }

  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`,h=r.css`
  position: absolute;
  top: -524px;
  left: -435px;
  max-width: 1140px;
  height: auto;

  @media screen and (max-width: 1439px) {
    left: -801px;
    top: -560px;
    max-width: 1200px;
  }

  @media screen and (max-width: 1279px) {
    left: -1030px;
    top: -586px;
  }

  @media screen and (max-width: 1023px) {
    left: -1141px;
  }
`,g=r.css`
  top: -118px;
  right: -90px;
  position: absolute;
  max-width: 548px;
  height: auto;

  @media screen and (max-width: 1279px) {
    top: -150px;
    right: -115px;
  }

  @media screen and (max-width: 1023px) {
    right: -120px;
  }

  @media screen and (max-width: 767px) {
    top: -150px;
    right: -210px;
  }
`,f=r.css`
  right: -310px;
  bottom: -160px;
  position: absolute;
  max-width: 596px;
  height: auto;

  @media screen and (max-width: 1439px) {
    right: -140px;
    bottom: -164px;
  }

  @media screen and (max-width: 1439px) {
    right: -174px;
    bottom: -120px;
  }

  @media screen and (max-width: 1023px) {
    right: -190px;
    bottom: -108px;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`;var u=()=>{const{t:e}=(0,n.default)();return a.default.createElement("div",{className:p},a.default.createElement("div",{className:c},a.default.createElement("img",{className:s,src:"/images/ThreatVision/tv_logo.svg"}),a.default.createElement("div",{className:x},a.default.createElement("p",{dangerouslySetInnerHTML:{__html:`${e("threatvision.title")}`},className:m}),a.default.createElement("div",{className:l}))),a.default.createElement("img",{className:h,src:"/images/ThreatVision/vision_hero_left.png"}),a.default.createElement("img",{className:g,src:"/images/ThreatVision/vision_hero_right_up.png"}),a.default.createElement("img",{className:f,src:"/images/ThreatVision/vision_hero_right_down.png"}),a.default.createElement(d,null))};t.default=u},769:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(i(2784)),n=s(i(3980)),r=s(i(4442)),o=i(200),d=i(3211);function s(e){return e&&e.__esModule?e:{default:e}}const p=o.keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`,l=o.css`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    > :not(:last-child) {
      margin-bottom: 10px;
    }
  }
`,c=o.css`
  box-sizing: border-box;
  padding: 23px 0 17px 20px;
  margin: 0;
  font-size: 18px;
  line-height: 1.5;
  color: ${d.color.dark};

  @media screen and (max-width: 1279px) {
    padding: 30px 0 20px 20px;
  }

  @media screen and (max-width: 1023px) {
    padding: 30px 10px 44px 0;
  }

  @media screen and (max-width: 767px) {
    padding: 30px 20px;
    font-size: 16px;
    line-height: 24px;
  }
`,x=o.css`
  margin: 0;
  font-size: 20px;
  color: ${d.color.dark};
  text-align: center;
  line-height: 1.2;
  font-weight: bold;

  &.fix-me-3 {
    word-break: keep-all;
  }

  span {
    font-size: 16px;
  }

  @media screen and (max-width: 767px) {
    font-size: 18px;
    font-weight: bold;
    text-align: left;
  }
`,m=o.css`
  background: ${d.color.white};
  border-radius: 6px;
  width: 242px;
  box-sizing: border-box;
  text-align: center;
  padding: 30px 30px 20px 30px;

  img {
    max-width: 180px;
    margin-bottom: 30px;
    height: auto;
  }
`,h=o.css`
  width: 100%;
  display: none;

  &.show {
    display: block;
    animation: ${p} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1);
    animation-fill-mode: both;
  }

  @media screen and (max-width: 1279px) {
    width: 100%;
  }

  @media screen and (max-width: 1023px) {
    max-width: 620px;
    width: 100%;
  }

  @media screen and (max-width: 767px) {
    max-width: 375px;
    width: 100%;
    margin: 0 auto;
  }
`,g=e=>{var t;const{t:i}=(0,r.default)(),n=e.isShow,d=e.context,s=e.imgs,p={root:"",cardTitle:"",imgBox:"",context:"",...null!==(t=e.classes)&&void 0!==t?t:{}};return a.default.createElement("div",{className:(0,o.cx)(o.css`
          ${h};
          ${p.root};
        `,{show:n})},a.default.createElement("p",{className:c,dangerouslySetInnerHTML:{__html:`${i(d)}`}}),a.default.createElement("div",{className:o.css`
          ${l};
          ${p.context};
        `},s.map(((e,t)=>a.default.createElement("div",{className:o.css`
                ${m};
                ${p.imgBox};
              `,key:t},a.default.createElement("img",{src:e.img}),a.default.createElement("p",{className:(0,o.cx)(o.css`
                    ${x};
                    ${p.cardTitle};
                  `,{"fix-me-3":0===t||2===t}),dangerouslySetInnerHTML:{__html:`${i(e.title)}`}}))))))};g.propTypes={isShow:n.default.bool,context:n.default.string,imgs:n.default.array,classes:n.default.object};var f=g;t.default=f},6600:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var i=s(t);if(i&&i.has(e))return i.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=n?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(a,r,o):a[r]=e[r]}a.default=e,i&&i.set(e,a);return a}(i(2784)),r=(a=i(3980))&&a.__esModule?a:{default:a},o=i(200),d=i(3211);function s(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,i=new WeakMap;return(s=function(e){return e?i:t})(e)}const p=o.css`
  position: fixed;
  right: 0;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 130px;
  border-radius: 4px 0 0 4px;
  background-color: ${d.color.visionYello};
  color: white;
  z-index: 3;
  cursor: pointer;

  p {
    transform: rotate(-90deg);
    white-space: nowrap;
    font-size: 20px;
    color: white;
  }
`,l=({setIsOpen:e})=>{const[t,i]=(0,n.useState)(20);return(0,n.useEffect)((()=>{const e=e=>{const t=document.querySelector("footer").getBoundingClientRect().height,{offsetHeight:a,clientHeight:n,scrollTop:r}=e.target.scrollingElement,o=a-n-r;i(o<=t+42+20?t-o+42+20:20)};return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)}),[]),n.default.createElement("div",{style:{bottom:`${t}px`},className:p},n.default.createElement("p",{onClick:()=>{e(!0)}},"Contact Us"))};l.propTypes={setIsOpen:r.default.func};var c=l;t.default=c},1269:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var i=c(t);if(i&&i.has(e))return i.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=n?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(a,r,o):a[r]=e[r]}a.default=e,i&&i.set(e,a);return a}(i(2784)),n=l(i(4442)),r=i(2933),o=i(6262),d=i(200),s=i(3211),p=l(i(769));function l(e){return e&&e.__esModule?e:{default:e}}function c(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,i=new WeakMap;return(c=function(e){return e?i:t})(e)}const x={title:"threatvision.advantage.ce-title",context:"threatvision.advantage.ce-context"},m={title:"threatvision.advantage.apac-title",context:"threatvision.advantage.apac-context"},h={ce:[{title:"threatvision.advantage.ce-trait-1",img:"/images/ThreatVision/Customer Engagement_online_sandbox.svg"},{title:"threatvision.advantage.ce-trait-2",img:"/images/ThreatVision/Customer Engagement_Keyword_search.svg"},{title:"threatvision.advantage.ce-trait-3",img:"/images/ThreatVision/Customer Engagement_Technical_data.svg"},{title:"threatvision.advantage.ce-trait-4",img:"/images/ThreatVision/Customer Engagement_API.svg"}],apac:[{title:"threatvision.advantage.apac-trait-1",img:"/images/ThreatVision/APACcentric_samples.svg"},{title:"threatvision.advantage.apac-trait-2",img:"/images/ThreatVision/APACcentric_malware.svg"},{title:"threatvision.advantage.apac-trait-3",img:"/images/ThreatVision/APACcentric_Adversary.svg"}]},g=d.css`
  flex-direction: row-reverse;

  &::before {
    position: absolute;
    z-index: -2;
    content: '';
    right: 0;
    left: 0;
    top: -10px;
    height: 565px;
    background: #ece8e0;
    clip-path: polygon(0 0, 100% 0, 100% 73%, 0% 100%);
  }

  @media screen and (max-width: 1279px) {
    padding-top: 5%;

    &::before {
      height: 500px;
      top: -30px;
      clip-path: polygon(0 0, 100% 0, 100% 82%, 0% 100%);
    }
  }

  @media screen and (max-width: 1023px) {
    margin-bottom: 175px;
    padding-top: 90px;

    &::before {
      top: -20px;
    }
  }

  @media screen and (max-width: 767px) {
    align-items: center;
    padding-top: 0;
    flex-direction: column-reverse;
    margin-bottom: 100px;

    &::before {
      clip-path: polygon(0 0, 100% 0, 100% 51%, 0% 55%);
      height: 270%;
      top: -37%;
    }
  }
`,f=d.css`
  padding-top: 78px;

  @media screen and (max-width: 1279px) {
    padding-top: 42px;
  }

  @media screen and (max-width: 1023px) {
    padding-top: 0;
  }
`,u=d.css`
  margin: 11% 0 6%;

  @media screen and (max-width: 1279px) {
    margin: 76px 0 84px;
    padding-top: 2%;
  }

  @media screen and (max-width: 1023px) {
    margin: 160px 0;
  }

  @media screen and (max-width: 767px) {
    margin: 0;
    padding: 0 30px 80px;
  }
`,w=d.css`
  padding-top: 35px;

  @media screen and (max-width: 1279px) {
    padding-top: 10px;
  }

  @media screen and (max-width: 1023px) {
    padding-top: 0;
  }
`,b=d.css`
  flex-direction: row-reverse;
  padding-bottom: 0;
  padding-top: 2%;

  &::before {
    position: absolute;
    z-index: -2;
    content: '';
    right: 0;
    left: 0;
    height: 565px;
    top: -14%;
    background: #645a53;
    clip-path: polygon(0 0%, 100% 16%, 100% 100%, 0% 100%);
  }

  @media screen and (max-width: 1279px) {
    padding-bottom: 68px;
    padding-top: 2%;

    &::before {
      top: -17%;
      height: 560px;
      clip-path: polygon(0 0%, 100% 27%, 100% 100%, 0% 100%);
    }
  }

  @media screen and (max-width: 1023px) {
    padding-top: 4%;

    &::before {
      top: -120px;
    }
  }

  @media screen and (max-width: 767px) {
    align-items: center;
    flex-direction: column-reverse;
    padding-top: 15px;
    padding-bottom: 170px;

    &::before {
      top: -110px;
      clip-path: polygon(0 6%, 100% 10%, 100% 100%, 0% 100%);
      height: 900px;
    }
  }
`,v=d.css`
  padding-top: 9px;

  @media screen and (max-width: 1279px) {
    padding-top: 42px;
  }
`,y=d.css`
  @media screen and (max-width: 1279px) {
    padding-top: 48px;
  }

  @media screen and (max-width: 767px) {
    padding-top: 0;
  }
`,_=d.css`
  position: absolute;
  top: 600px;
  left: -260px;
  width: 530px;
  height: 230px;

  @media screen and (max-width: 1439px) {
    width: 244px;
    height: 230px;
    left: -60px;
  }

  @media screen and (max-width: 1279px) {
    left: -40px;
  }

  @media screen and (max-width: 1023px) {
    width: 179px;
    height: 231px;
    left: -88px;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`,k=d.css`
  position: absolute;
  top: 918px;
  right: -244px;
  width: 518px;
  height: 465px;

  @media screen and (max-width: 1439px) {
    width: 198px;
    right: 0;
  }

  @media screen and (max-width: 1279px) {
    right: -126px;
  }

  @media screen and (max-width: 1023px) {
    display: none;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`,E=d.css`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  position: relative;

  @media screen and (max-width: 1279px) {
    max-width: 800px;
  }

  @media screen and (max-width: 1023px) {
    max-width: 682px;
  }

  @media screen and (max-width: 767px) {
    max-width: none;
  }
`,O=d.css`
  position: relative;
  top: -40px;
  width: 100%;
  z-index: 1;

  @media screen and (max-width: 1279px) {
    top: -14px;
  }

  @media screen and (max-width: 767px) {
    top: 86px;
  }
`,z=d.css`
  position: relative;
  z-index: 2;
  margin: 0 auto;
  max-width: 1000px;

  @media screen and (max-width: 1279px) {
    padding: 0 24px 0 100px;
  }

  @media screen and (max-width: 1023px) {
    padding: 0 10px 40px 64px;
  }

  @media screen and (max-width: 767px) {
    padding: 0 10px 0 0;
  }
`,$=d.css`
  font-family: Helvetica;
  position: relative;
  background-color: ${s.color.bgColor2};
  font-size: 16px;
  color: ${s.color.dark};
`,j=[{title:"threatvision.category.enterprises-title",traits:["threatvision.category.enterprises-trait-1","threatvision.category.enterprises-trait-2"],tags:"threatvision.category.enterprises-tags",image:"/images/ThreatVision/Enterprises.svg",color:"dark",classes:{root:g,context:f}},{title:"threatvision.category.financial-service-title",traits:["threatvision.category.financial-service-trait-1","threatvision.category.financial-service-trait-2"],tags:"threatvision.category.financial-service-tags",image:"/images/ThreatVision/FinancialService.svg",color:"dark",classes:{root:u,context:w}},{title:"threatvision.category.public-sectors-title",traits:["threatvision.category.public-sectors-trait-1","threatvision.category.public-sectors-trait-2"],tags:"threatvision.category.public-sectors-tags",image:"/images/ThreatVision/PublicSectors.svg",color:"light",classes:{root:b,context:v,imageWrap:y}}],N=d.css`
  box-sizing: border-box;
  font-family: Helvetica;
  background-color: ${s.color.white};
`,P=d.css`
  font-family: Helvetica;
  box-sizing: border-box;
  background: ${s.color.line2};
  border-style: none;
  border-radius: 12px 12px 0 0;
  text-align: center;
  font-size: 24px;
  color: ${s.color.dark};
  letter-spacing: 0;
  cursor: pointer;
  padding: 25px 40px;
  margin-right: 2px;
  white-space: nowrap;
  font-weight: bold;

  &:focus {
    outline: none;
  }

  &.active {
    background-color: ${s.color.bgColor2};
  }

  @media screen and (max-width: 1279px) {
    font-size: 20px;
  }

  @media screen and (max-width: 767px) {
    white-space: pre-wrap;
    text-align: left;
    padding: 18px 20px;

    span {
      display: block;
    }
  }
`,M=d.css`
  max-width: 840px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  position: absolute;
  bottom: 100%;
  z-index: 2;

  @media screen and (max-width: 1279px) {
    max-width: 800px;
  }
`,T=d.css`
  box-sizing: border-box;
`,S=d.css`
  @media screen and (max-width: 1279px) {
    font-family: Helvetica;
  }

  @media screen and (max-width: 1023px) {
    text-align: left;
  }
`,C=d.css`
  @media screen and (max-width: 1279px) {
    width: 196px;
    height: 272px;
    padding: 30px 18px 50px 18px;

    img {
      max-width: 120px;
      height: auto;
    }
  }

  @media screen and (max-width: 1023px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 48%;
    margin-bottom: 20px;
    padding: 15px;
    height: auto;

    img {
      max-width: 100px;
      margin: 0 10px 0 0;
    }
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 30px 20px;

    img {
      max-width: 100px;
      margin-right: 15px;
      margin-bottom: 0;
      height: auto;
    }
  }
`,H=d.css`
  @media screen and (max-width: 1023px) {
    flex-wrap: wrap;
  }
`,V=d.css`
  @media screen and (max-width: 1023px) {
    margin: 0 auto;
  }
`,I=d.css`
  width: 32%;
  padding: 30px 15px 44px;

  @media screen and (max-width: 1279px) {
    padding: 30px 18px 20px;

    img {
      max-width: 140px;
      height: auto;
    }
  }

  @media screen and (max-width: 1023px) {
    padding: 30px 15px;

    img {
      max-width: 140px;
      height: auto;
    }
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 30px 20px;

    img {
      max-width: 100px;
      margin-right: 15px;
      margin-bottom: 0;
      height: auto;
    }
  }
`,L=d.css`
  @media screen and (max-width: 1023px) {
    margin: 0 auto 76px;
  }
`,W=()=>{const{t:e}=(0,n.default)(),[t,i]=(0,a.useState)(0);return a.default.createElement("div",{className:T},a.default.createElement("div",{className:M},a.default.createElement("button",{dangerouslySetInnerHTML:{__html:`${e(x.title)}`},onClick:()=>{i(0)},className:(0,d.cx)(P,{active:0===t})}),a.default.createElement("button",{dangerouslySetInnerHTML:{__html:`${e(m.title)}`},onClick:()=>{i(1)},className:(0,d.cx)(P,{active:1===t})})),a.default.createElement(p.default,{isShow:0===t,context:x.context,imgs:h.ce,classes:{root:V,cardTitle:S,imgBox:C,context:H}}),a.default.createElement(p.default,{isShow:1===t,context:m.context,imgs:h.apac,classes:{root:L,imgBox:I}}))};var A=()=>a.default.createElement("div",{className:$},a.default.createElement("div",{className:E},a.default.createElement(W,null)),a.default.createElement("div",{className:z},a.default.createElement(r.NewsWall,null)),a.default.createElement("div",{className:O},a.default.createElement("div",{className:N},j&&j.map(((e,t)=>a.default.createElement(r.CategoryCard,{key:t,card:e,color:e.color,classes:e.classes}))))),a.default.createElement("div",{className:_},a.default.createElement(o.XGrid,{type:"dark"})),a.default.createElement("div",{className:k},a.default.createElement(o.XGrid,{type:"dark"})));t.default=A},5885:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BannerContent",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"InfoSection",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Bubble",{enumerable:!0,get:function(){return r.default}});var a=o(i(7102)),n=o(i(1269)),r=o(i(6600));function o(e){return e&&e.__esModule?e:{default:e}}}},function(e){e.O(0,[938,355,258,502,774,888,179],(function(){return t=4288,e(e.s=t);var t}));var t=e.O();_N_E=t}]);