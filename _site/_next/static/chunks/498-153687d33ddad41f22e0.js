(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[498],{2156:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(2784)),i=l(a(3980)),d=a(6262),o=a(200);function l(e){return e&&e.__esModule?e:{default:e}}const r=o.css`
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
`,x=e=>{const t={root:"default",content:"default",bgContainer:"default",bgPaddingBlock:"default",bg:"default",...e.classes};return n.default.createElement("div",{className:(0,o.cx)(r,t.root)},n.default.createElement("div",{className:(0,o.cx)(c,t.content)},e.children),n.default.createElement("div",{className:(0,o.cx)(s,t.xgridContainer)},n.default.createElement(d.XGrid,{type:"dark"})),n.default.createElement("div",{className:(0,o.cx)(p,t.bgContainer)},n.default.createElement("div",{className:(0,o.cx)(u,t.bgPaddingBlock)}),n.default.createElement("div",{className:(0,o.cx)(f,t.bg)})))};x.propTypes={classes:i.default.shape({root:i.default.string,content:i.default.string,bgContainer:i.default.string,bg:i.default.string})};var m=x;t.default=m},348:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=f(t);if(a&&a.has(e))return a.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var o=i?Object.getOwnPropertyDescriptor(e,d):null;o&&(o.get||o.set)?Object.defineProperty(n,d,o):n[d]=e[d]}n.default=e,a&&a.set(e,n);return n}(a(2784)),i=u(a(3980)),d=a(6262),o=a(6385),l=a(2426),r=u(a(8126)),s=a(200),c=u(a(9665)),p=a(3211);function u(e){return e&&e.__esModule?e:{default:e}}function f(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(f=function(e){return e?a:t})(e)}const x=c.default.hr`
  border: 0;
  border-top: 1px solid ${p.color.dark};
  width: 100%;
  margin: 10px 0;

  @media screen and (max-width: 1023px) {
    padding-left: 15px;
  }
`,m=s.css`
  position: absolute;
  bottom: 0;
  left: 0;
  color: ${p.color.white};
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
  overflow: hidden;
`,h=c.default.span`
  @media screen and (max-width: 1023px) {
    padding-left: 8px;
  }
`,g=c.default.hr`
  margin: 7px 0 10px 0;
  width: 100%;
  border: 0;
  border-top: 1px solid ${p.color.white};

  @media screen and (max-width: 1023px) {
    padding-left: 15px;
  }
`,w=s.css`
  position: absolute;
  z-index: 1;
  top: 14px;
  left: 0;
`,b=s.css`
  width: 100%;
  box-sizing: border-box;
  font-size: 12px;
  color: ${p.color.news};
  font-weight: 500;
  line-height: 16px;
`,v=s.css`
  padding: 1px;
  height: 438px;
  box-sizing: border-box;
  max-width: 400px;

  .default {
    width: calc(25%);
  }
`,y=s.css`
  width: 100%;
  height: 100%;
  background-color: ${p.color.bgColor2};
  display: flex;
  flex-direction: column;
  align-items: center;
`,E=s.css`
  transition: transform 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  transform: scale(1);
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;

  &::before {
    content: '';
    background: #000;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 4;
    width: 100%;
    height: 100%;
    opacity: 0.45;
  }
`,k=s.css`
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 249px;
  overflow: hidden;

  @media (hover: hover) {
    &:hover {
      ${"."+E} {
        transform: scale(1.2);
      }
    }
  }
`,N=s.css`
  pointer-events: none;
  position: absolute;
  top: -9px;
  color: transparent;
  user-select: none;
  z-index: 0;
  height: calc(100% + 9px);
  overflow: hidden;
`,_=s.css`
  position: relative;
  z-index: 1;

  > span {
    border-bottom: none;
  }

  @media (hover: hover) {
    &:hover ${"+."+N} {
      > span {
        border-bottom: 8px solid;
      }
    }
  }
`,P=s.css`
  position: relative;
  margin: 0;
  margin-top: 14px;
  font-size: 16px;
  height: 100px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  color: ${p.color.dark};
`,z=s.css`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0 14px;
  overflow: hidden;
`,j=e=>{const t=e.post,a=e.className||"default",i=(0,n.useContext)(o.LocaleContext),c=(0,l.getPostContent)(t,i.locale),p=(0,l.getTopicContent)(t.topic,i.locale),u=(0,l.toDateString)(new Date(t.publish_date||t.createdAt)),f=(0,l.getPostBannerImageUrl)(t.banner_img_url);return n.default.createElement("article",{className:(0,s.cx)(v,a)},n.default.createElement("div",{className:y},n.default.createElement(r.default,{as:`/posts/${t.post_url}`,href:"/posts/[uid]"},n.default.createElement("a",{className:k},n.default.createElement("div",{className:w},n.default.createElement(d.TopicFlag,{color:t.topic.color,text:p.text})),n.default.createElement("div",{className:m},n.default.createElement(h,null,u),n.default.createElement(g,null)),n.default.createElement("div",{className:E,style:{backgroundImage:`url(${f})`}}))),n.default.createElement("div",{className:z},n.default.createElement("h2",{className:P},n.default.createElement(r.default,{className:_,as:`/posts/${t.post_url}`,href:"/posts/[uid]"},n.default.createElement("a",{className:_},c.title)),n.default.createElement("div",{className:N},n.default.createElement("span",{style:{borderColor:t.topic.color}},c.title))),n.default.createElement(x,null),n.default.createElement("div",{className:b},t.tags.map(((e,a)=>n.default.createElement(n.default.Fragment,{key:a},`${e.name}${a+1!==t.tags.length?", ":""}`)))))))};j.propTypes={className:i.default.string,blog:i.default.object,post:i.default.object,topic:i.default.object};var O=j;t.default=O},4498:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BaseArticle",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var n=w(a(2784)),i=h(a(3980)),d=w(a(7409)),o=h(a(258)),l=h(a(348)),r=h(a(2156)),s=a(6262),c=a(2426),p=a(6385),u=h(a(4442)),f=a(200),x=h(a(9665)),m=a(3211);function h(e){return e&&e.__esModule?e:{default:e}}function g(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(g=function(e){return e?a:t})(e)}function w(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=g(t);if(a&&a.has(e))return a.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var o=i?Object.getOwnPropertyDescriptor(e,d):null;o&&(o.get||o.set)?Object.defineProperty(n,d,o):n[d]=e[d]}return n.default=e,a&&a.set(e,n),n}const b=x.default.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
  z-index: 5;
`,v=x.default.hr`
  width: 100vw;
  border: none;
  height: 2px;
  margin: 33px 0 0 0;

  @media screen and (max-width: 767px) {
    margin: 17px 0 0 0;
  }
`,y=x.default.h1`
  margin: 0;
  line-height: 1;
  font-size: 36px;
  font-weight: 900;
  color: ${m.color.dark};

  @media screen and (max-width: 767px) {
    font-size: 24px;
  }
`,E=f.css`
  margin: 333px 0 0 0;
  padding-left: 35px;

  @media screen and (max-width: 375px) {
    padding-left: 10px;
  }

  @media screen and (max-width: 767px) {
    margin: 244px 0 0 0;
    padding-left: calc(10px - (100vw - 100%) / 2);
  }
`,k=f.css`
  width: 218px;
  height: 50px;
  margin: 10px 10px 10px 0;
  box-sizing: border-box;

  @media screen and (max-width: 1279px) {
    width: 174px;
    height: 40px;
  }

  @media screen and (max-width: 767px) {
    /* fix-me-8 */
    width: 154px;
    height: 40px;

    &:nth-child(even) {
      margin-right: 0;
    }
  }
`,N=f.css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 1000px;
  margin: -5px -10px -5px 0;
  padding: 20px 0;

  @media screen and (max-width: 1279px) {
    width: 800px;
  }

  @media screen and (max-width: 1023px) {
    width: 620px;
  }

  @media screen and (max-width: 767px) {
    width: 335px;
    justify-content: space-between;
    margin: -10px auto -10px auto;
    padding: 20px 0;
  }
`,_=f.css`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
  width: 1000px;
  margin: auto;

  @media screen and (max-width: 1279px) {
    width: 800px;
    margin: auto;
  }

  @media screen and (max-width: 1023px) {
    width: 620px;
    margin: auto;
  }

  @media screen and (max-width: 767px) {
    width: 335px;
    margin: auto;
  }
`,P=f.css`
  margin-bottom: 10px;
  width: calc(25%);
  transform: translateY(50px);
  opacity: 0;
  transition: opacity 0.75s 0.25s ease-in-out, transform 0.75s 0.25s ease-in-out;

  @media screen and (min-width: 1280px) {
    &:nth-child(4n + 1) {
      transition-delay: 0.25s;
    }

    &:nth-child(4n + 2) {
      transition-delay: 0.375s;
    }

    &:nth-child(4n + 3) {
      transition-delay: 0.5s;
    }

    &:nth-child(4n) {
      transition-delay: 0.625s;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1279px) {
    &:nth-child(3n + 1) {
      transition-delay: 0.25s;
    }

    &:nth-child(3n + 2) {
      transition-delay: 0.375s;
    }

    &:nth-child(3n) {
      transition-delay: 0.5s;
    }
  }

  @media screen and (min-width: 767px) and (max-width: 1023px) {
    &:nth-child(2n + 1) {
      transition-delay: 0.25s;
    }

    &:nth-child(2n) {
      transition-delay: 0.375s;
    }
  }

  @media screen and (max-width: 1279px) {
    margin-bottom: 10px;
    width: calc(33.33%);
  }

  @media screen and (max-width: 1023px) {
    margin-bottom: 10px;
    width: calc(50%);
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 10px;
    width: calc(100%);
  }

  &.observed-show {
    transform: translateY(0);
    opacity: 1;
  }
`,z=f.css`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
`,j=f.css`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  box-sizing: border-box;
  width: 100%;
  max-width: 1000px;
  margin-top: 20px;
  margin-bottom: 122px;
`,O=f.css`
  height: 431px;

  @media screen and (max-width: 767px) {
    height: 192px;
  }
`,C=f.css`
  padding: 333px 0 0 0;

  @media screen and (max-width: 767px) {
    padding: 244px 0 0 0;
  }
`,$=f.css`
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
`,M=f.css`
  height: 219px;
  margin-bottom: 120px;
  width: 100%;
  background-color: ${m.color.news};
  color: white;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`,B=f.css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-content: space-between;
  position: relative;
`,T=e=>{const t=e.posts,a=(0,n.useContext)(p.LocaleContext),{t:i}=(0,u.default)(),d=e.topics,[l,f]=(0,n.useState)([]),[x,m]=(0,n.useState)(d.reduce(((e,t)=>(e.push(t.id),e)),[])),h=12,[g,w]=(0,n.useState)(1),[P,T]=(0,n.useState)((0,c.getTotalPage)(t.length,h));return(0,n.useEffect)((()=>{m(d.reduce(((e,t)=>(e.push(t.id),e)),[]))}),[]),(0,n.useEffect)((()=>{const e=t.filter((e=>x.includes(e.topic._id))).slice((g-1)*h,g*h);f(e)}),[g]),(0,n.useEffect)((()=>{const e=t.filter((e=>x.includes(e.topic._id)));f(e.slice((g-1)*h,g*h)),w(1),T((0,c.getTotalPage)(e.length,h))}),[x]),(0,n.useEffect)((()=>{window.intersectionObserver&&l.length>0&&(window.intersectionObserver.disconnect(),window.intersectionObserver.observe())}),[l]),n.default.createElement(o.default,null,n.default.createElement(r.default,{classes:{root:C,bgContainer:E,bgPaddingBlock:O}},n.default.createElement("div",{className:$},"Blog"),n.default.createElement(b,null,n.default.createElement("div",{className:B},n.default.createElement(y,null,"Blog"),n.default.createElement(s.RSSButton,{onClick:()=>{c.isBrowser&&window.open((a.locale?`/${a.locale}`:"")+"/posts/rss.xml")}})),n.default.createElement(v,null)),n.default.createElement("div",{className:z},n.default.createElement("div",{className:N},d.map((e=>{const t=(0,c.getTopicContent)(e,a.locale);return n.default.createElement(s.TopicLabel,{key:e.name,text:t.text,color:e.color,active:x.includes(e.id),classes:{size:k},onClick:()=>{m((t=>{const a=[...t];return t.includes(e.id)?a.splice(a.indexOf(e.id),1):a.push(e.id),a}))}})}))),l.length>0?n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:_},l.map((e=>n.default.createElement(S,{key:e._id,post:e})))),n.default.createElement("div",{className:j},n.default.createElement(s.Paginator,{totalPage:P,currentPage:g,onRightPageClick:async()=>{w((e=>e>=P?P:e+1))},onLeftPageClick:()=>{w((e=>e<=1?1:e-1))},onPageClick:e=>{w(e)}}))):n.default.createElement("div",{className:M},i("common.no-match-articles")))))},S=e=>n.default.createElement("div",{onClick:()=>d.event({action:"blog_click_blog",category:"post"}),className:(0,f.cx)(P,"observed")},n.default.createElement(l.default,e));T.propTypes={blogs:i.default.array,getPostsByTopicIds:i.default.func,posts:i.default.array,topics:i.default.array};var D=T;t.default=D}}]);