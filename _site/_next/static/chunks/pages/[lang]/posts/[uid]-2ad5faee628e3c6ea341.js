(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[791],{4022:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return b}});var n=a(2322),o=a(7243),r=a(2784),l=a(314),i=a(5857),d=a(7296),s=a(2426),c=a(6385),u=a(7729),p=a(1607);function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){(0,o.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var x=(0,l.default)(),g=x.serverRuntimeConfig,h=x.publicRuntimeConfig,b=!0;t.default=function(e){var t,a=(0,r.useContext)(c.LocaleContext),o=s.isBrowser?h:g,l=o.baseUrl,f=function(e){return"".concat(l).concat(e?"".concat(e,"/"):"")},x=e.post?(0,s.getPostContent)(e.post,a.locale):null;return(0,n.jsx)(n.Fragment,{children:e.post?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.default,{children:(0,n.jsx)(p.Z,{title:x.title,description:null!==(t=x.description)&&void 0!==t?t:x.context,url:"".concat(f(a.locale),"posts/").concat(e.post.post_url),image:e.post.banner_img_url})}),(0,n.jsx)(i.Z,m({getBaseUrl:f,nextConfig:o},e))]}):(0,n.jsx)(d.Z,{})})}},7488:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[lang]/posts/[uid]",function(){return a(4022)}])},5767:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(2784)),o=l(a(3980)),r=a(200);function l(e){return e&&e.__esModule?e:{default:e}}const i=r.css`
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
`,d=r.css`
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
`,c=r.css`
  &.default {
    padding-top: 0;
  }
`,u=r.css`
  position: relative;
  width: 100%;
  flex: 1 0;
  box-sizing: border-box;
  background-color: white;

  &.default {
    top: 0;
    left: 0;
  }
`,p=e=>{const t={root:"default",content:"default",bgContainer:"default",bgPaddingBlock:"default",bg:"default",...e.classes};return n.default.createElement("div",{className:(0,r.cx)(i,t.root)},n.default.createElement("div",{className:(0,r.cx)(d,t.content)},e.children),n.default.createElement("div",{className:(0,r.cx)(s,t.bgContainer)},n.default.createElement("div",{className:(0,r.cx)(c,t.bgPaddingBlock)}),n.default.createElement("div",{className:(0,r.cx)(u,t.bg)})))};p.propTypes={classes:o.default.shape({root:o.default.string,content:o.default.string,bgContainer:o.default.string,bg:o.default.string})};var f=p;t.default=f},6747:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=c(t);if(a&&a.has(e))return a.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var l=o?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(n,r,l):n[r]=e[r]}n.default=e,a&&a.set(e,n);return n}(a(2784)),o=s(a(3980)),r=s(a(40)),l=a(557),i=a(200),d=a(3211);function s(e){return e&&e.__esModule?e:{default:e}}function c(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(c=function(e){return e?a:t})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const p=i.css`
  cursor: pointer;
`,f=i.css`
  line-height: 1.5;
  color: ${d.color.dark};

  h1 {
    margin-top: 1em;
    font-size: 30px;
  }

  h2 {
    margin-top: 1em;
    font-size: 28px;
  }

  h3 {
    margin-top: 1em;
    font-size: 24px;
  }

  h4 {
    margin-top: 1em;
    font-size: 22px;
  }

  h5 {
    margin-top: 1em;
    font-size: 20px;
  }

  h6 {
    margin-top: 1em;
    font-size: 16px;
  }

  p {
    font-size: 16px;

    + p {
      margin-top: 1em;
    }

    strong {
      font-weight: 600;
    }

    em {
      font-style: oblique;
      color: #232325;
    }
  }

  ul {
    list-style: none;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }

  ul li {
    margin: 1em 0;
    overflow-wrap: break-word;
    padding-left: calc(10px + 1em);
    position: relative;
  }

  ul li::before {
    align-items: center;
    display: flex;
    justify-content: center;
    color: #d83751;
    content: '•';
    font-family: initial;
    left: 0;
    position: absolute;
    top: 0;
    width: 1em;
  }

  img {
    display: block;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    max-width: 100%;

    & + em {
      color: ${d.color.news};
      display: block;
      font-size: 14px;
      line-height: 18px;
      margin: 0 auto;
      text-align: center;
    }
  }

  ol {
    margin: 0;
    padding-left: 0;
    font-size: 16px;
    margin-top: 12px;
    list-style: none;
    margin-bottom: 12px;
    list-style-position: inside;
    counter-reset: ol-counter;
  }

  ul li::marker {
    color: red;
  }

  blockquote {
    border-left: 6px solid #d83751;
    margin: 0;

    > p {
      padding: 12px 19px;
    }
  }

  ol li {
    padding-left: calc(10px + 1em);
    display: flex;
    margin-bottom: 12px;

    &:last-child {
      margin: 0;
    }

    &::before {
      padding-right: 10px;
      counter-increment: ol-counter;
      content: counter(ol-counter) '.';
    }

    > div {
      overflow: auto;

      > p {
        margin: 0;
        margin-bottom: 12px;
      }

      > p:last-child {
        margin: 0;
      }
    }
  }

  pre {
    background-color: #f5f5f5;
    border: 1px solid #e3e3e3;
    border-radius: 4px;
    overflow: auto;
    padding: 10px 20px;
  }

  code {
    background-color: #f5f5f5;
    border: 1px solid #e3e3e3;
    border-radius: 4px;
    font-size: 12px;
    line-height: 14px;
    padding: 2px;
  }

  pre code {
    border: 0;
    padding: 0;
  }

  a {
    color: #d83751;
    text-decoration: underline;
  }

  @media screen and (max-width: 767px) {
    h1 {
      font-size: 26px;
    }

    h2 {
      font-size: 24px;
    }

    h3 {
      font-size: 22px;
    }

    h4 {
      font-size: 20px;
    }

    h5 {
      font-size: 18px;
    }

    h6 {
      font-size: 16px;
    }
  }

  .table-wrapper {
    overflow: auto;

    table {
      width: 100%;
      margin: auto;
      border-spacing: 0;
      border-collapse: collapse;
    }

    table th {
      white-space: nowrap;
    }

    table th,
    td {
      padding: 6px 13px;
      border: 1px solid #ddd;
      margin: 0;
      text-size-adjust: 100%;
    }

    table tr:nth-child(2n) {
      background-color: #f8f8f8;
    }

    & + p em {
      color: ${d.color.news};
      display: block;
      font-size: 14px;
      line-height: 18px;
      margin: 0 auto;
      text-align: center;
    }
  }
`,m=e=>{var t,a;const o=null!==(t=null===(a=e.context)||void 0===a?void 0:a.replace("\\*","&ast;"))&&void 0!==t?t:"";return n.default.createElement("div",{className:f},n.default.createElement(r.default,{options:{namedCodesToUnicode:{ast:"*"},overrides:{li:g,table:h,img:b}}},o))};m.propTypes={context:o.default.string};var x=m;t.default=x;const g=e=>n.default.createElement("li",null,n.default.createElement("div",null,e.children)),h=e=>n.default.createElement("div",{className:"table-wrapper"},n.default.createElement("table",null,e.children)),b=e=>{const t=(0,n.useContext)(l.PostContext);if(!t)return n.default.createElement("img",e);return n.default.createElement("img",u({},e,{onClick:()=>(t.setImageModalSource(e.src),document.body.style.overflow="hidden",void t.setImageModalOpen(!0)),className:p}))};b.propTypes={src:o.default.string}},557:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PostConsumer=t.PostProvider=t.PostContext=void 0;var n,o=(n=a(2784))&&n.__esModule?n:{default:n};const r=o.default.createContext();t.PostContext=r;t.PostProvider=({children:e})=>{const[t,a]=o.default.useState(!1),[n,l]=o.default.useState("");return o.default.createElement(r.Provider,{value:{imageModalOpen:t,setImageModalOpen:a,imageModalSource:n,setImageModalSource:l}},e)};const l=r.Consumer;t.PostConsumer=l},348:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=f(t);if(a&&a.has(e))return a.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var l=o?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(n,r,l):n[r]=e[r]}n.default=e,a&&a.set(e,n);return n}(a(2784)),o=p(a(3980)),r=a(6262),l=a(6385),i=a(2426),d=p(a(8126)),s=a(200),c=p(a(9665)),u=a(3211);function p(e){return e&&e.__esModule?e:{default:e}}function f(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(f=function(e){return e?a:t})(e)}const m=c.default.hr`
  border: 0;
  border-top: 1px solid ${u.color.dark};
  width: 100%;
  margin: 10px 0;

  @media screen and (max-width: 1023px) {
    padding-left: 15px;
  }
`,x=s.css`
  position: absolute;
  bottom: 0;
  left: 0;
  color: ${u.color.white};
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
  overflow: hidden;
`,g=c.default.span`
  @media screen and (max-width: 1023px) {
    padding-left: 8px;
  }
`,h=c.default.hr`
  margin: 7px 0 10px 0;
  width: 100%;
  border: 0;
  border-top: 1px solid ${u.color.white};

  @media screen and (max-width: 1023px) {
    padding-left: 15px;
  }
`,b=s.css`
  position: absolute;
  z-index: 1;
  top: 14px;
  left: 0;
`,w=s.css`
  width: 100%;
  box-sizing: border-box;
  font-size: 12px;
  color: ${u.color.news};
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
  background-color: ${u.color.bgColor2};
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
`,_=s.css`
  pointer-events: none;
  position: absolute;
  top: -9px;
  color: transparent;
  user-select: none;
  z-index: 0;
  height: calc(100% + 9px);
  overflow: hidden;
`,j=s.css`
  position: relative;
  z-index: 1;

  > span {
    border-bottom: none;
  }

  @media (hover: hover) {
    &:hover ${"+."+_} {
      > span {
        border-bottom: 8px solid;
      }
    }
  }
`,O=s.css`
  position: relative;
  margin: 0;
  margin-top: 14px;
  font-size: 16px;
  height: 100px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  color: ${u.color.dark};
`,P=s.css`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0 14px;
  overflow: hidden;
`,N=e=>{const t=e.post,a=e.className||"default",o=(0,n.useContext)(l.LocaleContext),c=(0,i.getPostContent)(t,o.locale),u=(0,i.getTopicContent)(t.topic,o.locale),p=(0,i.toDateString)(new Date(t.publish_date||t.createdAt)),f=(0,i.getPostBannerImageUrl)(t.banner_img_url);return n.default.createElement("article",{className:(0,s.cx)(v,a)},n.default.createElement("div",{className:y},n.default.createElement(d.default,{as:`/posts/${t.post_url}`,href:"/posts/[uid]"},n.default.createElement("a",{className:k},n.default.createElement("div",{className:b},n.default.createElement(r.TopicFlag,{color:t.topic.color,text:u.text})),n.default.createElement("div",{className:x},n.default.createElement(g,null,p),n.default.createElement(h,null)),n.default.createElement("div",{className:E,style:{backgroundImage:`url(${f})`}}))),n.default.createElement("div",{className:P},n.default.createElement("h2",{className:O},n.default.createElement(d.default,{className:j,as:`/posts/${t.post_url}`,href:"/posts/[uid]"},n.default.createElement("a",{className:j},c.title)),n.default.createElement("div",{className:_},n.default.createElement("span",{style:{borderColor:t.topic.color}},c.title))),n.default.createElement(m,null),n.default.createElement("div",{className:w},t.tags.map(((e,a)=>n.default.createElement(n.default.Fragment,{key:a},`${e.name}${a+1!==t.tags.length?", ":""}`)))))))};N.propTypes={className:o.default.string,blog:o.default.object,post:o.default.object,topic:o.default.object};var z=N;t.default=z},1579:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=u(t);if(a&&a.has(e))return a.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var l=o?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(n,r,l):n[r]=e[r]}n.default=e,a&&a.set(e,n);return n}(a(2784)),o=a(557),r=a(7020),l=c(a(5182)),i=c(a(9665)),d=a(200),s=a(3211);function c(e){return e&&e.__esModule?e:{default:e}}function u(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(u=function(e){return e?a:t})(e)}const p=i.default.img`
  width: 100%;
  height: 100%;
  max-height: 80vh;
`,f=d.css`
  display: flex;
  opacity: 0;
  pointer-events: none;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  transition: opacity 0.6s 0s linear;

  &.open {
    opacity: 1;
    pointer-events: auto;
    transition: opacity 0.2s 0s linear;
  }
`,m=d.css`
  position: relative;
  height: auto;
  max-width: 90vw;

  @media screen and (min-width: 1280px) {
    max-width: 1000px;
  }
`,x=d.css`
  width: 40px;
  height: 40px;
  position: absolute;
  right: -20px;
  top: -20px;
  background-color: rgba(76, 67, 63, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid ${s.color.bgColor2};
  border-radius: 5px;
  cursor: pointer;

  svg {
    width: 21px;
    height: 21px;
  }

  @media screen and (max-width: 575px) {
    width: 30px;
    height: 30px;
    position: absolute;
    right: -15px;
    top: -15px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;var g=()=>{const e=(0,n.useContext)(o.PostContext),t=t=>{"IMG"!==t.target.tagName&&(e.setImageModalOpen(!1),setTimeout((()=>{document.body.style.overflow="unset"}),600))};return n.default.createElement("div",{className:(0,d.cx)(f,{open:e.imageModalOpen}),onClick:t},n.default.createElement("div",{className:m},n.default.createElement(p,{src:e.imageModalSource}),n.default.createElement("div",{className:x,onClick:t},n.default.createElement(r.CloseSvg,{color:l.default["bg-color2"]}))))};t.default=g},3747:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(a(2784)),o=s(a(3980)),r=a(7020),l=a(3625),i=a(200),d=a(3211);function s(e){return e&&e.__esModule?e:{default:e}}const c=i.css`
  display: flex;
  flex-direction: row;
  align-items: center;

  > a {
    margin: 0 10px;
  }
`,u=i.css`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    outline: none;

    &:focus {
      outline: none;
    }
  }
`,p=i.css`
  font-size: 16px;
  font-weight: 600;
  color: ${d.color.news};
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 767px) {
    width: 100%;
    margin: 0 auto;
    max-width: 400px;
  }
`,f=i.css`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: flex-end;
  align-items: center;
  height: 64px;
  padding: 0 30px;
  box-sizing: border-box;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    background-color: ${d.color.news};
  }

  &.enable-footer-line {
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background-color: ${d.color.news};
    }
  }

  @media screen and (max-width: 767px) {
    padding: 0;
    justify-content: flex-start;

    &::before {
      width: 150%;
    }

    &.enable-footer-line {
      &::after {
        width: 150%;
      }
    }
  }
`,m=e=>{var t,a,o,d,s;const m=e.getBaseUrl,x=e.locale,g=null!==(t=e.relatedPosts)&&void 0!==t?t:[],h=null!==(a=e.post)&&void 0!==a?a:{};return n.default.createElement("div",{className:(0,i.cx)(f,{"enable-footer-line":g.length>0})},n.default.createElement("div",{className:p},"Share:",n.default.createElement("div",{className:c},n.default.createElement("a",{className:u,onClick:e=>{e.preventDefault()}},n.default.createElement(l.LinkedinShareButton,{url:`${m(x)}posts/${null!==(o=h.post_url)&&void 0!==o?o:""}`,className:"share"},n.default.createElement(r.LinkedinSvg,{mode:"dark"}))),n.default.createElement("a",{className:u,onClick:e=>{e.preventDefault()}},n.default.createElement(l.TwitterShareButton,{url:`${m(x)}posts/${null!==(d=h.post_url)&&void 0!==d?d:""}`,className:"share"},n.default.createElement(r.TwitterSvg,{mode:"dark"}))),n.default.createElement("a",{className:u,onClick:e=>{e.preventDefault()}},n.default.createElement(l.FacebookShareButton,{url:`${m(x)}posts/${null!==(s=h.post_url)&&void 0!==s?s:""}`,className:"share"},n.default.createElement(r.FacebookSvg,{mode:"dark"}))))))};m.propTypes={post:o.default.object,relatedPosts:o.default.array,locale:o.default.string,getBaseUrl:o.default.func};var x=m;t.default=x},3493:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(a(2784)),o=c(a(3980)),r=a(2426),l=a(7020),i=a(3625),d=a(200),s=a(3211);function c(e){return e&&e.__esModule?e:{default:e}}const u=d.css`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 24px;
  margin: 20px 0;
  font-size: 16px;
  font-weight: 600;
  color: ${s.color.dark};

  @media screen and (max-width: 767px) {
    margin: 10px 0;
  }
`,p=d.css`
  width: 2px;
  height: 100%;
  margin: 0 10px;
  background-color: ${s.color.line2};
`,f=d.css`
  button {
    outline: none;

    &:focus {
      outline: none;
    }
  }
`,m=d.css`
  display: flex;
  flex-direction: row;
  align-items: center;

  > a {
    margin: 0 10px;
  }
`,x=d.css`
  font-size: 16px;
  font-weight: 600;
  color: ${s.color.news};
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 767px) {
    margin: 10px 0 20px 0;
  }
`,g=d.css`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  box-sizing: border-box;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${s.color.news};
  }

  @media screen and (max-width: 1023px) {
    padding: 0 20px;
  }

  @media screen and (max-width: 767px) {
    left: 0;
    width: 100%;
    padding: 0;
    flex-direction: column;
    align-items: flex-start;

    &::after {
      width: 100vw;
    }
  }
`,h=e=>{var t;const a=e.getBaseUrl,o=e.locale,d=null!==(t=e.post)&&void 0!==t?t:{},s=(0,r.toDateString)(new Date(d.publish_date||d.createdAt));return n.default.createElement("div",{className:g},n.default.createElement("div",{className:u},n.default.createElement("div",null,s),d.author&&n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:p}),n.default.createElement("div",null,d.author.username))),n.default.createElement("div",{className:x},"Share:",n.default.createElement("div",{className:m},n.default.createElement("a",{className:f,onClick:e=>{e.preventDefault()}},n.default.createElement(i.LinkedinShareButton,{url:`${a(o)}posts/${d.post_url}`,className:"share"},n.default.createElement(l.LinkedinSvg,{mode:"dark"}))),n.default.createElement("a",{className:f,onClick:e=>{e.preventDefault()}},n.default.createElement(i.TwitterShareButton,{url:`${a(o)}posts/${d.post_url}`,className:"share"},n.default.createElement(l.TwitterSvg,{mode:"dark"}))),n.default.createElement("a",{className:`${f}`,onClick:e=>{e.preventDefault()}},n.default.createElement(i.FacebookShareButton,{url:`${a(o)}posts/${d.post_url}`,className:"share"},n.default.createElement(l.FacebookSvg,{mode:"dark"}))))))};h.propTypes={post:o.default.object,relatedPosts:o.default.array,locale:o.default.string,getBaseUrl:o.default.func};var b=h;t.default=b},6707:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(a(2784)),o=d(a(3980)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=i(t);if(a&&a.has(e))return a.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var l=o?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(n,r,l):n[r]=e[r]}n.default=e,a&&a.set(e,n);return n}(a(7409)),l=d(a(348));function i(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(i=function(e){return e?a:t})(e)}function d(e){return e&&e.__esModule?e:{default:e}}const s=a(200).css`
  width: calc(50%);

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`,c=e=>{const t=()=>"blogs"===e.post.topic.category;return n.default.createElement("div",{onClick:()=>r.event({action:"related_click_"+(t?"blog":"news"),category:"post"}),className:s},n.default.createElement(l.default,e))};c.propTypes={post:o.default.object};var u=c;t.default=u},5857:function(e,t,a){"use strict";t.Z=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=E(t);if(a&&a.has(e))return a.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var l=o?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(n,r,l):n[r]=e[r]}n.default=e,a&&a.set(e,n);return n}(a(2784)),o=y(a(3980)),r=y(a(258)),l=y(a(5767)),i=y(a(9643)),d=a(9438),s=y(a(6747)),c=a(557),u=a(6385),p=a(2426),f=y(a(1579)),m=a(6262),x=y(a(4442)),g=y(a(6707)),h=a(200),b=a(3211),w=y(a(3747)),v=y(a(3493));function y(e){return e&&e.__esModule?e:{default:e}}function E(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(E=function(e){return e?a:t})(e)}const k=h.css`
  flex-direction: column;
  align-items: flex-end;
  overflow: hidden;
`,_=h.css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,j=h.css`
  color: ${b.color.white};
  height: 140px;
  transition: height 0.3s;

  @media screen and (max-width: 767px) {
    height: 80px;
  }
`,O=h.css`
  color: ${b.color.dark};
  height: 80px;

  @media screen and (max-width: 767px) {
    height: 50px;
  }
`,P=h.css`
  height: 100%;
  width: 100%;
  transition: opacity 0.3s;
  background-color: ${b.color.white};
  opacity: 0;
`,N=h.css`
  opacity: 1;
`,z=h.css`
  width: 1000px;
  margin: auto;

  @media screen and (max-width: 1279px) {
    width: 800px;
  }

  @media screen and (max-width: 1023px) {
    width: 620px;
  }

  @media screen and (max-width: 767px) {
    width: calc(596px + (100vw - 768px) * 261 / 393);
  }

  @media screen and (max-width: 375px) {
    width: 335px;
  }
`,M=h.css`
  position: relative;
  z-index: 2;
  width: 820px;

  @media screen and (max-width: 1023px) {
    width: 620px;
  }

  @media screen and (max-width: 767px) {
    width: calc(620px + (100vw - 768px) * 285 / 393);
  }

  @media screen and (max-width: 375px) {
    width: 335px;
  }
`,C=h.css`
  padding: 0 30px;
  box-sizing: border-box;

  @media screen and (max-width: 1023px) {
    padding: 0 20px;
  }

  @media screen and (max-width: 767px) {
    padding: 0;
  }

  @media screen and (max-width: 375px) {
    padding: 0;
  }
`,$=h.css`
  padding-left: 35px;

  @media screen and (max-width: 767px) {
    padding-left: 0;
  }
`,S=h.css`
  position: absolute;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;

  &::before {
    content: '';
    background: #000;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    opacity: 0.45;
  }
`,D=h.css`
  width: 760px;
  position: absolute;
  bottom: 0;
  color: white;
  z-index: 3;

  h1 {
    font-size: 30px;
    margin: 0;
    margin-bottom: 25px;
  }

  @media screen and (max-width: 1023px) {
    width: 620px;
  }

  @media screen and (max-width: 767px) {
    width: calc(620px + (100vw - 768px) * 285 / 393);
  }

  @media screen and (max-width: 375px) {
    width: 335px;
  }
`,B=h.css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;
  overflow: auto;
  position: relative;

  @media screen and (max-width: 767px) {
    height: 380px;
  }
`,T=h.css`
  position: relative;
  padding-bottom: 120px;

  @media screen and (max-width: 767px) {
    padding-bottom: 82px;
  }
`,W=h.css`
  width: 100%;
  margin: 20px 30px;
  max-width: 800px;

  @media screen and (max-width: 767px) {
    width: 100%;
    margin: 20px auto;
    max-width: 400px;
  }
`,F=h.css`
  width: 100%;
  font-size: 24px;
  color: ${b.color.dark};
  font-weight: 900;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  position: relative;

  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    width: 100%;
    border-bottom: 1px solid black;
  }

  @media screen and (max-width: 767px) {
    &::after {
      width: 150%;
    }
  }
`,U=h.css`
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
  margin: 10px 30px 0 30px;

  @media screen and (max-width: 1023px) {
    margin: 10px 20px 0 20px;
  }

  @media screen and (max-width: 767px) {
    margin: 10px auto 0 auto;
    justify-content: center;
  }
`,I=e=>{const t=e.getBaseUrl,{t:a}=(0,x.default)(),o=e.post,h=(0,n.useContext)(u.LocaleContext),b=(0,p.getPostContent)(o,h.locale),y=e.nextConfig;let E=o.relative_posts;y.isExport&&(E=E.filter((e=>e.publish)));const I=(0,p.getTopicContent)(o.topic,h.locale),A=(0,p.getPostBannerImageUrl)(o.banner_img_url);return n.default.createElement(c.PostProvider,null,n.default.createElement(r.default,{classes:{header:j,scrollActiveHeader:O,background:P,scrollActivebackground:N},iconMode:{origin:"light",scrollActive:"dark"}},n.default.createElement("div",{className:B},n.default.createElement("div",{className:S,style:{backgroundImage:`url(${A})`}}),n.default.createElement("div",{className:D},n.default.createElement("div",{className:_},n.default.createElement(m.TopicFlag,{color:o.topic.color,text:I.text}),n.default.createElement(m.RSSButton,{onClick:()=>{p.isBrowser&&window.open((h.locale?`/${h.locale}`:"")+"/posts/rss.xml")}})),n.default.createElement("h1",null,b.title))),n.default.createElement(l.default,{className:k,classes:{bgContainer:$,content:z},iconMode:{origin:"light",scrollActive:"dark"}},n.default.createElement("div",{className:M},n.default.createElement(v.default,{getBaseUrl:t,locale:h.locale,post:o}),n.default.createElement("div",{className:C},n.default.createElement(s.default,{context:b.context})),o.enable_form&&n.default.createElement(i.default,{title:a("common.pages.blog.interested"),formSchema:d.PostFormSchema,extraFormData:{uid:o.post_url,"post-name":b.title,"attachment-id":o.attachment_id},apiUrl:"https://script.google.com/macros/s/AKfycbxaRLlIExspM9_2lA8Td54Fak9I3YXqTHcZKtQ97SyvcIxr3jA/exec",isHideCloseBtn:!0,logEventKey:"blog_form"}),n.default.createElement(w.default,{getBaseUrl:t,locale:h.locale,post:o,relatedPosts:E}),n.default.createElement("div",{className:T},E.length>0&&n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:F},n.default.createElement("div",{className:W},"Related Post")),n.default.createElement("div",{className:U},E.map(((e,t)=>n.default.createElement(g.default,{key:t,post:e})))))))),n.default.createElement(f.default,null)))};I.propTypes={post:o.default.object,getBaseUrl:o.default.func,nextConfig:o.default.object};var A=I;t.Z=A}},function(e){e.O(0,[938,355,40,625,258,502,774,888,179],(function(){return t=7488,e(e.s=t);var t}));var t=e.O();_N_E=t}]);