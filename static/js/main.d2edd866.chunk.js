(this["webpackJsonpclone-spotify-web"]=this["webpackJsonpclone-spotify-web"]||[]).push([[0],Array(38).concat([function(e,t,c){},function(e,t,c){},,,,,,,,,,,,,,,,,function(e,t,c){},,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),a=c.n(s),r=c(30),i=c.n(r),l=(c(38),c(39),c(11)),o=c(5),A=c(31);var j=c.n(A).a.create({baseURL:"https://api.spotify.com/v1",headers:{"Content-Type":"application/x-www-form-urlencoded"}}),b={async get(e=50){try{return(await j.get(`/me/following?type=artist&limit=${e}`)).data.artists.items}catch(t){console.log(t)}},getTop:async(e=50)=>(await j.get(`/me/top/artists?limit=${e}`)).data.items},u={async get(e=50){try{const t=await j.get(`/me/albums?limit=${e}`);return t.data.items.map((e=>e.album))}catch(t){console.log(t)}}},d={async get(e=50){try{return(await j.get(`/browse/categories?limit${e}`)).data.categories.items}catch(t){console.log(t)}}},h={async get(){try{const e=await j.get("/me");return{name:e.data.display_name,profilePic:e.data.images[0].url}}catch(e){console.log(e)}}},m={async get(e=50){try{return(await j.get(`/me/playlists?limit${e}`)).data.items}catch(t){console.log(t)}}},g={async get(e=50){try{const t=await j.get(`/me/shows?limit${e}`);return t.data.items.map((e=>e.show))}catch(t){console.log(t)}}},O={getTop:async(e=50)=>(await j.get(`/me/top/tracks?limit=${e}`)).data.items};function p(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}function x(e="#fff"){return`linear-gradient(0deg,${e}80,${e})`}function v(e){let t="";return e.forEach(((c,n)=>{t+=c.name,n+1!==e.length&&(t+=", ")})),t}var E={get(e){const t=e+"=",c=decodeURIComponent(document.cookie).split(";");for(let n=0;n<c.length;n++){let e=c[n];for(;" "===e.charAt(0);)e=e.substring(1);if(0===e.indexOf(t))return e.substring(t.length,e.length)}return""},set(e,t){const c=new Date;c.setTime(c.getTime()+36e5),document.cookie=e+"="+t+"; expires="+c.toUTCString()+";path=/"},delete(e){document.cookie=`${e}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`}};const f=Object(s.createContext)(),C=["Playlists","Podcasts","Artists","Albums"];function w({children:e}){const[t,c]=Object(s.useState)(""),[a,r]=Object(s.useState)(!0),[i,l]=Object(s.useState)(null),[o,A]=Object(s.useState)([]),[p,x]=Object(s.useState)([]),[v,w]=Object(s.useState)([]),[y,I]=Object(s.useState)([]),[Q,N]=Object(s.useState)([]),[B,M]=Object(s.useState)([]),[k,D]=Object(s.useState)(null),[P,L]=Object(s.useState)([]),[F,R]=Object(s.useState)(C[0]);return Object(s.useEffect)((()=>{r(!0);const e=E.get("token");e&&c(e),t?(j.defaults.headers.common.Authorization="Bearer "+t,async function(){r(!0);const e=u.get(),t=b.get(),c=b.getTop(),n=d.get(),s=h.get(),a=m.get(),i=g.get(),o=O.getTop(1),j=await Promise.all([e,t,c,n,s,a,i,o]),[p,v,E,f,C,y,Q,B]=j;A([...p]),x([...v]),w([...E]),L([...f.slice(0,4)]),N([...f.slice(4)]),l({...C}),M([...y]),I([...Q]),D({...B[0]}),r(!1)}()):(r(!1),setTimeout((()=>{}),500))}),[t]),Object(n.jsx)(f.Provider,{value:{token:t,setToken:c,clearStore:function(){r(!1),c(""),l(null),A([]),x([]),w([]),N([]),M([]),L([]),I([]),D(null)},onLoading:a,setLoading:r,user:i,albums:o,podcasts:y,artists:p,topArtists:v,playlists:B,trackPlaying:k,categories:Q,topCategories:P,libraryTabs:C,currentLibraryTab:F,setCurrentLibraryTab:R},children:e})}function y(){return{...Object(s.useContext)(f)}}c(56);var I=c(3),Q=c(4);c(61),c(62);var N=({id:e="",step:t="0.1",value:c,onChange:s})=>Object(n.jsxs)("div",{className:"input-range-container",children:[Object(n.jsx)("input",{id:e,step:t,type:"range",min:"0",max:"100",value:c,onChange:s}),Object(n.jsx)("div",{className:"progress-bar back"}),Object(n.jsx)("div",{className:"progress-bar front",style:{width:c+"%"}})]});var B=({audioLength:e=0})=>{const t=function(e){let t,c,n;return t=Math.floor(e/1e3/60/60),c=Math.floor(60*(e/1e3/60/60-t)),n=Math.floor(60*(60*(e/1e3/60/60-t)-c)),`${c}:${n}`}(e),c=function(e){let t=e.split(":"),c=+t[0],n=+t[1];return parseFloat((60*c+n).toFixed(3))}(t),[a,r]=Object(s.useState)(0),[i,l]=Object(s.useState)(0);return Object(s.useEffect)((()=>{let e;e=0===c?0:100*a/c,l(e)}),[a,c]),Object(n.jsxs)("div",{className:"audio-progress-container",children:[Object(n.jsx)("span",{className:"time-text current-time",children:function(e){const t=~~(e/3600),c=~~(e%3600/60),n=~~e%60;let s="";return t>0&&(s+=t+":"+(c<10?"0":"")),s+=c+":"+(n<10?"0":""),s+=""+n,s}(a)}),Object(n.jsx)(N,{value:i,onChange:function(e){const t=parseFloat(e.target.value,10);l(t),r(t*c/100)}}),Object(n.jsx)("span",{className:"time-text max-time",children:t})]})},M=(c(63),c.p+"static/media/default-cover.548e2eda.webp"),k=c(12);var D=({track:e})=>{const[t,c]=Object(s.useState)(!0);return Object(n.jsx)("div",{className:"audio-info-container",children:e?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("img",{className:"img-cover",src:e.album.images[1].url,onError:e=>{e.target.onerror=null,e.target.src=M},alt:"cover"}),Object(n.jsxs)("div",{className:"text",children:[Object(n.jsx)("span",{className:"name",children:e.album.name}),Object(n.jsx)("span",{className:"artist",children:v(e.artists)})]}),Object(n.jsx)("aside",{children:Object(n.jsx)("button",{className:"btn-love "+(t?"active":""),onClick:function(){c(!t)},children:Object(n.jsx)(I.a,{icon:t?Q.c:k.c,color:"CurrentColor"})})})]}):null})};c(64);var P=()=>{const[e,t]=Object(s.useState)(100),[c,a]=Object(s.useState)(e),[r,i]=Object(s.useState)(Q.o);return Object(s.useEffect)((function(){i(0===e?Q.n:e<50?Q.m:Q.o)}),[e]),Object(n.jsxs)("div",{className:"audio-options-container",children:[Object(n.jsx)("button",{className:"btn",children:Object(n.jsx)(I.a,{icon:k.d})}),Object(n.jsx)("button",{className:"btn",children:Object(n.jsx)(I.a,{icon:k.b})}),Object(n.jsx)("button",{className:"btn btn-volume",onClick:function(){0!==e?(a(e),t(0)):t(c)},children:Object(n.jsx)(I.a,{icon:r})}),Object(n.jsx)(N,{value:e,onChange:function(e){t(parseFloat(e.target.value,10))}})]})};var L=()=>{const{trackPlaying:e}=y(),[t,c]=Object(s.useState)(!0);return Object(n.jsxs)("footer",{className:"footer",children:[Object(n.jsx)(D,{track:e}),Object(n.jsxs)("div",{className:"audio-controls",children:[Object(n.jsxs)("div",{className:"btn-group",children:[Object(n.jsx)("button",{className:"btn-secondary btn-random",children:Object(n.jsx)(I.a,{icon:Q.g})}),Object(n.jsx)("button",{className:"btn-primary btn-back",children:Object(n.jsx)(I.a,{icon:Q.k})}),Object(n.jsx)("button",{className:"btn-primary btn-play",onClick:function(){c(!t)},children:Object(n.jsx)(I.a,{icon:t?Q.d:Q.e})}),Object(n.jsx)("button",{className:"btn-primary btn-forward",children:Object(n.jsx)(I.a,{icon:Q.l})}),Object(n.jsx)("button",{className:"btn-secondary btn-repeat",children:Object(n.jsx)(I.a,{icon:Q.h})})]}),Object(n.jsx)(B,{audioLength:e?e.duration_ms:0})]}),Object(n.jsx)(P,{})]})};c(65),c(66),c(67);var F=({visibility:e=!1})=>{const{clearStore:t}=y();return e?Object(n.jsxs)("ul",{className:"drop-down",children:[Object(n.jsx)("li",{className:"drop-item",children:"account"}),Object(n.jsx)("li",{className:"drop-item",children:"Profile"}),Object(n.jsx)("li",{className:"drop-item",onClick:function(){E.delete("token"),t()},children:"Log out"})]}):null};var R=()=>{const{user:e}=y(),[t,c]=Object(s.useState)(!1);function a(e){e.stopPropagation(),c(!1),document.removeEventListener("click",a)}return e?Object(n.jsxs)("button",{className:"btn-user "+(t?"drop-is-open":""),onClick:function(e){e.stopPropagation(),c(!t),t||document.addEventListener("click",a)},children:[Object(n.jsx)("div",{className:"profile-pic-container",children:Object(n.jsx)("img",{src:e.profilePic,alt:"Profile"})}),Object(n.jsx)("span",{className:"user-name",children:e.name}),Object(n.jsx)(I.a,{className:"triangle-icon "+(t?"drop-is-open":""),icon:Q.j,color:"CurrentColor"}),Object(n.jsx)(F,{visibility:t})]}):null};c(68);function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e}).apply(this,arguments)}var G=s.createElement("path",{d:"M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z",fill:"currentColor",fillRule:"evenodd"});function S({title:e,titleId:t,...c},n){return s.createElement("svg",Y({viewBox:"0 0 512 512",width:24,height:24,xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":t},c),e?s.createElement("title",{id:t},e):null,G)}const T=s.forwardRef(S);c.p;function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e}).apply(this,arguments)}var U=s.createElement("path",{d:"M4.93,4.93,19.07,19.07m-14.14,0L19.07,4.93",fill:"none",stroke:"currentColor"});function z({title:e,titleId:t,...c},n){return s.createElement("svg",K({height:24,role:"img",width:24,viewBox:"0 0 24 24",ref:n,"aria-labelledby":t},c),e?s.createElement("title",{id:t},e):null,U)}const X=s.forwardRef(z);c.p;var H=()=>{const[e,t]=Object(s.useState)("");return Object(n.jsxs)("div",{className:"searchbar-container",children:[Object(n.jsx)(T,{className:"search-icon"}),Object(n.jsx)("input",{type:"text",className:"search-input",value:e,onChange:e=>t(e.target.value),placeholder:"Search for Artists, Songs or Podcasts"}),""!==e?Object(n.jsx)(X,{className:"search-clear-icon",onClick:()=>t("")}):null]})};c(69);var W=()=>{const{libraryTabs:e,currentLibraryTab:t,setCurrentLibraryTab:c}=y();return Object(n.jsx)("ul",{className:"list-of-categories",children:e.map((e=>Object(n.jsx)("li",{className:t===e?"item selected":"item",onClick:()=>c(e),children:e},e)))})};var J=()=>{const e=Object(o.g)(),t=Object(o.h)(),[c,a]=Object(s.useState)(!1),[r,i]=Object(s.useState)("");function l(){document.querySelector(".app-main").scrollTop>=50?a(!0):a(!1)}return Object(s.useEffect)((()=>{i(t.pathname)}),[t.pathname]),Object(s.useEffect)((()=>{document.querySelector(".app-main").addEventListener("scroll",l)}),[]),Object(n.jsxs)("header",{className:"main-header "+(c?"header-scrolled":""),children:[Object(n.jsx)("button",{className:"btn-arrow",onClick:e.goBack,children:Object(n.jsx)(I.a,{icon:Q.a,color:"#fff"})}),Object(n.jsx)("button",{className:"btn-arrow",onClick:e.goForward,children:Object(n.jsx)(I.a,{icon:Q.b,color:"#fff"})}),"/search"===r&&Object(n.jsx)(H,{}),"/your-library"===r&&Object(n.jsx)(W,{}),Object(n.jsx)(R,{})]})};c(72),c(73);function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e}).apply(this,arguments)}var q=s.createElement("polygon",{points:"21.57 12 5.98 3 5.98 21 21.57 12",fill:"#fff"});function Z({title:e,titleId:t,...c},n){return s.createElement("svg",V({height:16,role:"img",width:16,viewBox:"0 0 24 24",ref:n,"aria-labelledby":t},c),e?s.createElement("title",{id:t},e):null,q)}const _=s.forwardRef(Z);c.p;var $=({image:e,title:t,subtitle:c,subtitleLink:s="",subtitleMultiline:a=!1,className:r,imageRounded:i=!1})=>Object(n.jsxs)("div",{className:"card-container "+r,children:[Object(n.jsx)("img",{className:"cover-img",src:e,onError:e=>{e.target.onerror=null,e.target.src=M},alt:"Cover",style:{borderRadius:i?"50%":""}}),Object(n.jsx)("span",{className:"title",title:t,children:Object(n.jsx)("span",{children:t})}),Object(n.jsx)("div",{className:"subtitle-div "+(a?"multiline":""),children:Object(n.jsx)("span",{className:"subtitle "+(s?"subtitle-link":""),children:c})}),Object(n.jsx)("button",{className:"btn-play",title:"Play",children:Object(n.jsx)(_,{})})]});c(74);var ee=()=>Object(n.jsx)("div",{className:"loading-container",children:Object(n.jsx)("div",{className:"lds-dual-ring"})});c(75);var te=({type:e="text",title:t="Empty title",linkTo:c="#"})=>Object(n.jsx)("section",{className:"section-container",children:Object(n.jsxs)("div",{className:"section-header",children:[Object(n.jsxs)("h2",{className:"title",children:["text"===e?t:null,"link"===e?Object(n.jsx)("a",{href:c,onClick:e=>e.preventDefault(),className:"title-link",children:t}):null]}),"link"===e?Object(n.jsx)("a",{href:c,onClick:e=>e.preventDefault(),className:"aside-link",children:"SEE ALL"}):null]})});function ce(){return(ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e}).apply(this,arguments)}var ne=s.createElement("image",{id:"Camada_1","data-name":"Camada 1",width:1090,height:336,xlinkHref:"data:img/png;base64,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"});function se({title:e,titleId:t,...c},n){return s.createElement("svg",ce({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:1090,height:336,viewBox:"0 0 1090 336",ref:n,"aria-labelledby":t},c),e?s.createElement("title",{id:t},e):null,ne)}const ae=s.forwardRef(se);c.p;var re=function(e){return Object(n.jsx)(ae,{className:e.className})};c(76);function ie(){return(ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e}).apply(this,arguments)}var le=s.createElement("path",{d:"M448 463.746h-149.333v-149.333h-85.334v149.333h-149.333v-315.428l192-111.746 192 110.984v316.19z",fill:"currentColor"});function oe({title:e,titleId:t,...c},n){return s.createElement("svg",ie({viewBox:"0 0 512 512",width:24,height:24,xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":t},c),e?s.createElement("title",{id:t},e):null,le)}const Ae=s.forwardRef(oe);c.p;function je(){return(je=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e}).apply(this,arguments)}var be=s.createElement("path",{d:"M 256.274 60.84 L 84.324 166.237 L 84.324 443.063 L 193.27 443.063 L 193.27 293.73 L 320.228 293.73 L 320.228 443.063 L 428.222 443.063 L 428.222 165.476 L 256.274 60.84 Z M 256.274 35.95 L 448.452 149.145 L 448.452 464.395 L 300 464.395 L 300 315.062 L 213.499 315.062 L 213.499 464.395 L 64.095 464.395 L 64.095 150.161 L 256.274 35.95 Z",fill:"currentColor"});function ue({title:e,titleId:t,...c},n){return s.createElement("svg",je({viewBox:"0 0 512 512",width:24,height:24,xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":t},c),e?s.createElement("title",{id:t},e):null,be)}const de=s.forwardRef(ue);c.p;function he(){return(he=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e}).apply(this,arguments)}var me=s.createElement("path",{d:"M357.079 341.334l94.476 110.73-32.508 27.683-94.222-110.476q-45.714 30.476-100.826 30.476-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 23.365-5.841 45.714t-16.635 41.651-25.778 35.555zM224 357.079q28.19 0 53.841-11.048t44.19-29.587 29.587-44.19 11.048-53.841-11.048-53.841-29.587-44.191-44.19-29.587-53.841-11.047-53.841 11.047-44.191 29.588-29.587 44.19-11.047 53.841 11.047 53.841 29.588 44.19 44.19 29.587 53.841 11.048z",fill:"currentColor"});function ge({title:e,titleId:t,...c},n){return s.createElement("svg",he({viewBox:"0 0 512 512",width:24,height:24,xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":t},c),e?s.createElement("title",{id:t},e):null,me)}const Oe=s.forwardRef(ge);c.p;function pe(){return(pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e}).apply(this,arguments)}var xe=s.createElement("path",{d:"M311.873 77.46l166.349 373.587-39.111 17.27-166.349-373.587zM64 463.746v-384h42.666v384h-42.666zM170.667 463.746v-384h42.667v384h-42.666z",fill:"currentColor"});function ve({title:e,titleId:t,...c},n){return s.createElement("svg",pe({viewBox:"0 0 512 512",width:24,height:24,xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":t},c),e?s.createElement("title",{id:t},e):null,xe)}const Ee=s.forwardRef(ve);c.p;function fe(){return(fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e}).apply(this,arguments)}var Ce=s.createElement("path",{d:"M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z",fill:"currentColor"});function we({title:e,titleId:t,...c},n){return s.createElement("svg",fe({viewBox:"0 0 512 512",width:24,height:24,xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":t},c),e?s.createElement("title",{id:t},e):null,Ce)}const ye=s.forwardRef(we);c.p;var Ie=()=>{const e=Object(o.g)(),t=Object(o.h)(),[c,a]=Object(s.useState)("");function r(c){t.pathname!==c&&e.push(c)}return Object(s.useEffect)((()=>{a(t.pathname),document.querySelector(".app-main").scrollTop=0}),[t.pathname]),Object(n.jsxs)("ul",{className:"navigation-list",children:[Object(n.jsxs)("li",{onClick:()=>r("/home"),className:"/home"===c?"active":"",children:["/home"===c?Object(n.jsx)(Ae,{}):Object(n.jsx)(de,{}),Object(n.jsx)("span",{className:"text",children:"Home"})]}),Object(n.jsxs)("li",{onClick:()=>r("/search"),className:"/search"===c?"active":"",children:["/search"===c?Object(n.jsx)(Oe,{}):Object(n.jsx)(T,{}),Object(n.jsx)("span",{className:"text",children:"Search"})]}),Object(n.jsxs)("li",{onClick:()=>r("/your-library"),className:"/your-library"===c?"active":"",children:["/your-library"===c?Object(n.jsx)(Ee,{}):Object(n.jsx)(ye,{}),Object(n.jsx)("span",{className:"text",children:"Your library"})]})]})};c(77);var Qe=()=>Object(n.jsxs)("div",{className:"playlists-options-container",children:[Object(n.jsx)("h2",{className:"title",children:"PLAYLISTS"}),Object(n.jsxs)("button",{children:[Object(n.jsx)("div",{className:"btn-icon-bg",children:Object(n.jsx)(I.a,{icon:Q.f,color:"#000"})}),Object(n.jsx)("span",{className:"btn-text",children:"Create Playlist"})]}),Object(n.jsxs)("button",{children:[Object(n.jsx)("div",{className:"btn-icon-bg bg-gradient",children:Object(n.jsx)(I.a,{icon:Q.c,color:"CurrentColor"})}),Object(n.jsx)("span",{className:"btn-text",children:"Liked Songs"})]})]});c(78);var Ne=()=>{const{playlists:e}=y();return Object(n.jsx)("ul",{className:"playlists-list",children:e.map((e=>Object(n.jsx)("li",{title:e.name,children:e.name},e.id)))})};var Be=()=>Object(n.jsxs)("nav",{className:"sidebar",children:[Object(n.jsx)(l.b,{to:"/home",className:"brand",children:Object(n.jsx)(re,{className:"brand-logo"})}),Object(n.jsx)(Ie,{}),Object(n.jsx)(Qe,{}),Object(n.jsx)("div",{className:"divider"}),Object(n.jsxs)("div",{className:"container-relative",children:[Object(n.jsx)(Ne,{}),Object(n.jsxs)("button",{className:"btn-install",children:[Object(n.jsx)(I.a,{icon:k.a,color:"CurrentColor"}),"Install App"]})]})]});c(79);var Me=()=>{const e=Object(o.g)(),{setToken:t}=y(),c=window.location.hash.substring(1).split("&").reduce((function(e,t){if(t){let c=t.split("=");e[c[0]]=decodeURIComponent(c[1])}return e}),{});return Object(s.useEffect)((()=>{c.access_token&&(E.set("token",c.access_token),t((()=>c.access_token)),e.push("/home"))}),[]),Object(n.jsxs)("div",{className:"login-container",children:[Object(n.jsx)("div",{className:"overlay"}),Object(n.jsxs)("div",{className:"login-modal",children:[Object(n.jsx)(re,{className:"logo"}),Object(n.jsx)("h1",{className:"title",children:"Hello! This is an UI clone of Spotify web player"}),Object(n.jsxs)("section",{className:"paragraphs",children:[Object(n.jsx)("p",{children:"Spotify login is required to be able to display user data from their API. After finishing you will be redirected back."}),Object(n.jsxs)("p",{children:["Note: All data accessed by this app are read-only and non-private.",Object(n.jsx)("b",{children:" We will not have access to your email."})," You will be able to check all the information accessed before accepting it."]})]}),Object(n.jsxs)("button",{className:"btn-link",onClick:function(){window.location=`https://accounts.spotify.com/authorize?client_id=${Object({NODE_ENV:"production",PUBLIC_URL:"/clone-spotify-web-react",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SPOTIFY_API_KEY:"30da64025ba042e9b51c9555dfefd948"}).REACT_APP_SPOTIFY_API_KEY_PROD}&redirect_uri=https://lucas-santosp.github.io/clone-spotify-web-react/login&scope=${encodeURIComponent("user-library-read user-follow-read user-top-read playlist-read-collaborative playlist-read-private")}&response_type=token`},children:["Go to Spotify login",Object(n.jsx)(I.a,{icon:Q.i})]})]})]})};c(80),c(81);var ke=({title:e="empty",data:t=[],type:c="album"})=>Object(n.jsxs)("section",{className:"home-section",children:[Object(n.jsx)(te,{type:"link",title:e}),Object(n.jsxs)("div",{className:"grid-cards",children:["album"===c&&t.map((e=>Object(n.jsx)($,{className:"grid-item",title:e.name,subtitle:v(e.artists),subtitleLink:"#",image:e.images[1].url},e.id))),"artist"===c&&t.map((e=>Object(n.jsx)($,{className:"grid-item",title:e.name,subtitle:"Artist",image:e.images[1].url,imageRounded:!0},e.id)))]})]});var De=()=>{const{albums:e,topArtists:t}=y();let c=0;function s(t=10){const n=e.slice(c,c+t);return c+=t,n}return Object(n.jsxs)("div",{className:"home-container",children:[Object(n.jsx)(ke,{title:"Recently played",data:s()}),Object(n.jsx)(ke,{title:"Your heavy rotation",data:s()}),Object(n.jsx)(ke,{title:"Your favorite artists",data:t,type:"artist"}),Object(n.jsx)(ke,{title:"Mood",data:s(9)}),Object(n.jsx)(ke,{title:"You might also like",data:s(6)}),Object(n.jsx)(ke,{title:"Jump back in",data:s(8)}),Object(n.jsx)(ke,{title:"For today's drive",data:s(7)})]})};c(82),c(83);var Pe=({slides:e})=>{function t(e){const t=document.querySelector(".slider-track"),c=t.scrollWidth;"right"===e?t.scrollBy(c/4,0):t.scrollBy(-c/4,0)}function c(){const e=document.querySelector(".slider-track"),t=document.querySelector(".btn-right"),c=document.querySelector(".btn-left"),n=e.scrollWidth,s=e.scrollLeft,a=e.offsetWidth;t.style.visibility=a+s>=n?"hidden":"visible",c.style.visibility=s<=0?"hidden":"visible"}return Object(s.useEffect)((()=>{const e=document.querySelector(".slider-track");return c(),window.addEventListener("resize",c),e.addEventListener("scroll",c),()=>{window.removeEventListener("resize",c),e.removeEventListener("scroll",c)}}),[]),Object(n.jsxs)("div",{className:"slider-container",children:[Object(n.jsx)("button",{className:"btn-direction btn-left",onClick:()=>t("left"),children:Object(n.jsx)(I.a,{icon:Q.a,color:"#000"})}),Object(n.jsx)("ul",{className:"slider-track",children:e.map((e=>Object(n.jsxs)("li",{className:"slide",children:[Object(n.jsx)("img",{className:"background-img",src:e.icons[0].url,alt:`${e.name} cover`}),Object(n.jsx)("span",{className:"slide-text",children:e.name})]},e.id)))}),Object(n.jsx)("button",{className:"btn-direction btn-right",onClick:()=>t("right"),children:Object(n.jsx)(I.a,{icon:Q.b,color:"#000"})})]})};c(84);var Le=({categories:e})=>{function t(e){if(!e.includes("/"))return e;const[t,c]=e.split("/");return t+"/\n"+c}return Object(n.jsx)("ul",{className:"category-grid-container",children:e.map((e=>Object(n.jsx)("li",{className:"grid-item",style:{background:x(p())},children:Object(n.jsx)("span",{className:"grid-text",children:t(e.name)})},e.id)))})};var Fe=()=>{const{categories:e,topCategories:t}=y();return Object(n.jsxs)("div",{className:"search-container",children:[Object(n.jsxs)("section",{className:"section",children:[Object(n.jsx)(te,{title:"Top genres"}),Object(n.jsx)(Pe,{slides:t})]}),Object(n.jsxs)("section",{className:"section",children:[Object(n.jsx)(te,{title:"Browse all"}),Object(n.jsx)(Le,{categories:e})]})]})};c(85);var Re=()=>{const{currentLibraryTab:e,albums:t,podcasts:c,artists:s,playlists:a}=y();function r(e){return e.description?e.description.replace(/<\/?[^>]+(>|$)/g,""):`By ${e.owner.display_name}`}return Object(n.jsxs)("div",{className:"your-library-container",children:[Object(n.jsx)(te,{title:e}),Object(n.jsxs)("div",{className:"grid-cards",children:["Playlists"===e&&a.map((e=>Object(n.jsx)($,{className:"grid-item",title:e.name,subtitle:r(e),image:e.images[0].url,subtitleMultiline:!0},e.id))),"Artists"===e&&s.map((e=>Object(n.jsx)($,{className:"grid-item",title:e.name,subtitle:"Artist",image:e.images[1].url,imageRounded:!0},e.id))),"Podcasts"===e&&c.map((e=>Object(n.jsx)($,{className:"grid-item",title:e.name,subtitle:e.publisher,image:e.images[1].url},e.id))),"Albums"===e&&t.map((e=>Object(n.jsx)($,{className:"grid-item",title:e.name,subtitle:v(e.artists),subtitleLink:"#",image:e.images[1].url},e.id)))]})]})};var Ye=function(){const{token:e,onLoading:t}=y();return Object(n.jsxs)(l.a,{basename:"/clone-spotify-web-react",children:[Object(n.jsx)(J,{}),Object(n.jsx)(Be,{}),Object(n.jsx)(L,{}),Object(n.jsx)("main",{className:"app-main",children:t?Object(n.jsx)(ee,{}):Object(n.jsx)(n.Fragment,{children:e?Object(n.jsxs)(o.d,{children:[Object(n.jsx)(o.b,{exact:!0,strict:!0,path:"/search",component:Fe}),Object(n.jsx)(o.b,{exact:!0,strict:!0,path:"/your-library",component:Re}),Object(n.jsx)(o.b,{exact:!0,strict:!0,path:"/home",component:De}),Object(n.jsx)(o.a,{to:"/home"})]}):Object(n.jsxs)(o.d,{children:[Object(n.jsx)(o.b,{path:"/login",component:Me}),Object(n.jsx)(o.a,{to:"/login"})]})})})]})};var Ge=function(){return Object(n.jsx)(w,{children:Object(n.jsx)("div",{className:"app-container",children:Object(n.jsx)(Ye,{})})})};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(Ge,{})}),document.getElementById("root"))}]),[[86,1,2]]]);
//# sourceMappingURL=main.d2edd866.chunk.js.map