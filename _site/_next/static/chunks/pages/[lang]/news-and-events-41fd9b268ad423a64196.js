(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[262],{1472:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return d}});var a=n(7243),i=n(2322),r=n(682);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var d=!0;t.default=function(e){return(0,i.jsx)(r.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e))}},2238:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[lang]/news-and-events",function(){return n(1472)}])},2156:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(2784)),i=d(n(3980)),r=n(6262),o=n(200);function d(e){return e&&e.__esModule?e:{default:e}}const l=o.css`
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
`,s=o.css`
  width: 23%;
  height: 230px;
  position: absolute;
  z-index: 1;
  left: -15px;
  top: 585px;
`,c=o.css`
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
`,p=o.css`
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
`,u=o.css`
  &.default {
    padding-top: 0;
  }
`,f=o.css`
  position: relative;
  width: 100%;
  flex: 1 0;
  box-sizing: border-box;
  background-color: white;

  &.default {
    top: 0;
    left: 0;
  }
`,x=e=>{const t={root:"default",content:"default",bgContainer:"default",bgPaddingBlock:"default",bg:"default",...e.classes};return a.default.createElement("div",{className:(0,o.cx)(l,t.root)},a.default.createElement("div",{className:(0,o.cx)(c,t.content)},e.children),a.default.createElement("div",{className:(0,o.cx)(s,t.xgridContainer)},a.default.createElement(r.XGrid,{type:"dark"})),a.default.createElement("div",{className:(0,o.cx)(p,t.bgContainer)},a.default.createElement("div",{className:(0,o.cx)(u,t.bgPaddingBlock)}),a.default.createElement("div",{className:(0,o.cx)(f,t.bg)})))};x.propTypes={classes:i.default.shape({root:i.default.string,content:i.default.string,bgContainer:i.default.string,bg:i.default.string})};var m=x;t.default=m},6582:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=i?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(a,r,o):a[r]=e[r]}a.default=e,n&&n.set(e,a);return a}(n(2784)),i=c(n(3980)),r=n(6385),o=n(2426),d=c(n(8126)),l=n(200),s=n(3211);function c(e){return e&&e.__esModule?e:{default:e}}function p(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}const u=l.css`
  position: relative;
  box-sizing: border-box;
  overflow: hidden;

  &.default {
    display: flex;
    flex-direction: row;
    padding: 1px;
    height: 300px;
    width: 100%;
    border: 1px solid ${s.color.bgColor2};
  }
`,f=l.css`
  cursor: pointer;
  position: relative;
  z-index: 2;

  .default {
    background-size: cover;
    width: 35%;
    height: 100%;
  }
`,x=l.css`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  z-index: 3;

  &::before {
    content: '';
    background: #000;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 4;
    width: 100%;
    height: 100%;
    opacity: 0.35;
  }
`,m=l.css`
  position: absolute;
  z-index: 4;
  left: 0;
  top: 0;
  margin-top: 20px;
`,h=l.css`
  cursor: pointer;

  h2 {
    z-index: 1;
    color: ${s.color.dark};
  }

  > span {
    z-index: 1;
    color: #8f8784;
  }

  .default {
    flex: 1 0;
    margin-left: 40px;

    h2 {
      width: 75%;
      font-size: 16px;
    }
  }
`,g=l.css`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  background-color: ${s.color.bgColor2};
  width: 100%;
  height: 100%;
  transition: transform 0.4s;
  transform: translateX(-100%);
`,w=l.css`
  .default {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    padding: 1px;
    height: 300px;
    width: 100%;
  }

  @media (hover: hover) {
    &:hover {
      ${"."+g} {
        transform: translateX(0%);
      }
    }
  }
`,b=e=>{const t=e.post,n=(0,a.useContext)(r.LocaleContext),i=(0,o.getPostContent)(t,n.locale),s=(0,o.getTopicContent)(t.topic,n.locale),c=(0,o.toDateString)(new Date(t.publish_date||t.createdAt)),p={root:"defalut",container:"defalut",category:"defalut",imgBlock:"defalut",content:"defalut",...e.classes},b=(0,o.getPostBannerImageUrl)(t.banner_img_url);return a.default.createElement(d.default,{as:`/posts/${t.post_url}`,href:"/posts/[uid]"},a.default.createElement("a",null,a.default.createElement("article",{className:(0,l.cx)(u,p.root)},a.default.createElement("div",{className:(0,l.cx)(w,p.container)},a.default.createElement("div",{className:(0,l.cx)(f,p.imgBlock)},a.default.createElement("div",{style:{backgroundColor:t.topic.color},className:(0,l.cx)(m,p.category)},s.text),a.default.createElement("div",{className:x,style:{backgroundImage:`url(${b})`}})),a.default.createElement("div",{className:(0,l.cx)(h,p.content)},a.default.createElement("span",null,c),a.default.createElement("h2",null,i.title),a.default.createElement("div",{className:g}))))))};b.propTypes={post:i.default.object,classes:i.default.object};var v=b;t.default=v},682:function(e,t,n){"use strict";t.Z=void 0;var a=w(n(2784)),i=h(n(3980)),r=w(n(7409)),o=h(n(258)),d=h(n(6582)),l=h(n(2156)),s=n(6262),c=n(2426),p=n(6385),u=h(n(4442)),f=h(n(9665)),x=n(200),m=n(3211);function h(e){return e&&e.__esModule?e:{default:e}}function g(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(g=function(e){return e?n:t})(e)}function w(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=g(t);if(n&&n.has(e))return n.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=i?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(a,r,o):a[r]=e[r]}return a.default=e,n&&n.set(e,a),a}const b=f.default.h1`
  margin: 0;
  line-height: 1;
  font-size: 36px;
  font-weight: 900;
  color: ${m.color.dark};

  @media screen and (max-width: 767px) {
    font-size: 24px;
  }
`,v=f.default.hr`
  width: 100%;
  border: 0;
  border-top: 2px solid;
  margin: 30px 0 0 0;

  @media screen and (max-width: 767px) {
    margin: 20px 0 0 0;
  }
`,y=x.css`
  height: 240px;
  display: flex;
  flex-direction: row;
  max-width: 1000px;
  width: 100%;

  @media screen and (max-width: 1439px) {
    height: 240px;
    display: flex;
    flex-direction: row;
  }

  @media screen and (max-width: 1279px) {
    height: 240px;
    display: flex;
    flex-direction: row;
  }
`,E=x.css`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  background-color: ${m.color.news};
  color: ${m.color.white};
  width: 160px;
  height: 28px;
`,k=x.css`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  box-sizing: border-box;
  width: 100%;
  max-width: 1000px;
  margin-top: 20px;
  margin-bottom: 122px;

  @media screen and (max-width: 1279px) {
    padding-right: 112px;
  }

  @media screen and (max-width: 767px) {
    padding-right: calc(66px + 100vw * (44 / 393));
  }
`,O=x.css`
  width: 120px;
  height: 50px;
  margin: 10px 10px;
  box-sizing: border-box;

  @media screen and (max-width: 1279px) {
    width: 80px;
    height: 40px;
  }

  @media screen and (max-width: 767px) {
    width: 80px;
    height: 30px;
  }
`,_=x.css`
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
`,P=x.css`
  height: 219px;
  width: 100%;
  margin-bottom: 120px;
  background-color: ${m.color.news};
  color: white;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`,j=x.css`
  padding: 333px 0 0 0;
  box-sizing: border-box;

  @media screen and (max-width: 767px) {
    padding: 244px 0 0 0;
  }
`,z=x.css`
  width: calc(100% + (100vw - 100%) / 2);
  margin-left: auto;

  @media screen and (max-width: 375px) {
    width: 355px;
    margin-left: 20px;
  }
`,N=x.css`
  margin: 333px 0 0 0;
  padding-left: 35px;

  @media screen and (max-width: 767px) {
    margin: 244px 0 0 0;
    padding-left: calc(10px - (100vw - 100%) / 2);
  }

  @media screen and (max-width: 375px) {
    padding-left: 10px;
  }
`,C=x.css`
  height: 50%;
  max-height: 315px;

  @media screen and (max-width: 767px) {
    height: 192px;
    max-height: unset;
  }
`,$=x.css`
  width: 100%;
  height: 100%;
`,M=x.css`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 6;
`,S=x.css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  z-index: 5;
`,D=x.css`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  z-index: 2;
  overflow: hidden;
`,T=x.css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px 0;
  margin: -10px auto -10px -10px;
`,B=x.css`
  width: 35.1%;
  height: 100%;
  background-size: cover;

  @media screen and (max-width: 767px) {
    display: none;
  }
`,X=x.css`
  height: 240px;
  border-bottom: 2px solid ${m.color.line2};
  width: 100%;
  background-color: white;
  position: relative;

  ${".nes-and-events-article-transition-img-block"} {
    transform: translateX(-100%);
    transition: transform 1s 0s ease-in-out;

    @media screen and (max-width: 1023px) {
      transition-duration: 0.9s;
    }

    @media screen and (max-width: 767px) {
      transition-duration: 0.8s;
    }

    @media screen and (max-width: 375px) {
      transition-duration: 0.7s;
    }
  }

  &.observed-show {
    ${".nes-and-events-article-transition-img-block"} {
      transform: translateX(0);
    }
  }

  @media screen and (max-width: 767px) {
    height: 227px;
  }
`,W=x.css`
  height: 100%;
  width: 100%;

  @media screen and (max-width: 767px) {
    height: 100%;
  }
`,L=x.css`
  flex: 1 0;
  padding: 68px 0 0 3.5%;
  width: 560px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  font-weight: 500;

  span {
    font-size: 12px;
    border-bottom: 2px solid ${m.color.line2};
    padding: 3px 0 7px 0;
    width: 80px;
  }

  h2 {
    width: 100%;
    font-size: 16px;
    margin-top: 20px;
    padding: 0;
    font-weight: 500;
  }

  @media screen and (max-width: 767px) {
    padding: 62px 0 0 5.5%;
  }
`,Z=e=>a.default.createElement("div",{onClick:()=>r.event({action:"news_click_news",category:"post"}),className:(0,x.cx)(X,"observed")},a.default.createElement(d.default,e)),A=e=>{const t=e.posts,[n,i]=(0,a.useState)([]),r=(0,a.useContext)(p.LocaleContext),d=e.topics,{t:f}=(0,u.default)(),m=12,[h,g]=(0,a.useState)(1),[w,X]=(0,a.useState)((0,c.getTotalPage)(t.length,m)),[A,G]=(0,a.useState)([]);return(0,a.useEffect)((()=>{G(d.reduce(((e,t)=>(e.push(t.id),e)),[]))}),[]),(0,a.useEffect)((()=>{const e=t.filter((e=>A.includes(e.topic._id))).slice((h-1)*m,h*m);i(e)}),[h]),(0,a.useEffect)((()=>{const e=t.filter((e=>A.includes(e.topic._id)));i(e.slice((h-1)*m,h*m)),g(1),X((0,c.getTotalPage)(e.length,m))}),[A]),(0,a.useEffect)((()=>{window.intersectionObserver&&n.length>0&&(window.intersectionObserver.disconnect(),window.intersectionObserver.observe())}),[n]),a.default.createElement(o.default,null,a.default.createElement(l.default,{classes:{root:j,bgContainer:N,bgPaddingBlock:C}},a.default.createElement("div",{className:M},a.default.createElement(s.RSSButton,{onClick:()=>{c.isBrowser&&window.open((r.locale?`/${r.locale}`:"")+"/posts/rss.xml")}})),a.default.createElement("div",{className:z},a.default.createElement("div",{className:_},"News & Events"),a.default.createElement("header",{className:S},a.default.createElement("div",{className:S},a.default.createElement(b,null,"News & Events")),a.default.createElement(v,null)),a.default.createElement("div",{className:$},a.default.createElement("div",{className:T},d.map((e=>{const t=(0,c.getTopicContent)(e,r.locale);return a.default.createElement(s.TopicLabel,{key:e.name,text:t.text,color:e.color,active:A.includes(e.id),classes:{size:O},onClick:()=>{G((t=>{const n=[...t];return t.includes(e.id)?n.splice(n.indexOf(e.id),1):n.push(e.id),n}))}})}))),n.length>0?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:D},n.map(((e,t)=>a.default.createElement(Z,{key:t,post:e,classes:{root:W,imgBlock:(0,x.cx)(B,"nes-and-events-article-transition-img-block"),content:L,container:y,category:E}})))),a.default.createElement("div",{className:k},a.default.createElement(s.Paginator,{totalPage:w,currentPage:h,onRightPageClick:async()=>{g((e=>e>=w?w:e+1))},onLeftPageClick:()=>{g((e=>e<=1?1:e-1))},onPageClick:e=>{g(e)}}))):a.default.createElement("div",{className:P},f("common.no-match-articles"))))))};A.propTypes={newsAndEvents:i.default.array,topics:i.default.array,posts:i.default.array};var G=A;t.Z=G}},function(e){e.O(0,[938,258,774,888,179],(function(){return t=2238,e(e.s=t);var t}));var t=e.O();_N_E=t}]);