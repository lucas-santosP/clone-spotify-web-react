(this["webpackJsonpclone-spotify-web"]=this["webpackJsonpclone-spotify-web"]||[]).push([[0],Array(38).concat([function(e,t,c){},function(e,t,c){},,,,,,,,,,,,,,,,,function(e,t,c){},,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(1),n=c.n(a),r=c(30),i=c.n(r),l=(c(38),c(39),c(11)),o=c(5),j=c(31);var b=c.n(j).a.create({baseURL:"https://api.spotify.com/v1",headers:{"Content-Type":"application/x-www-form-urlencoded"}}),u={async get(e=50){try{return(await b.get(`/me/following?type=artist&limit=${e}`)).data.artists.items}catch(t){console.log(t)}},getTop:async(e=50)=>(await b.get(`/me/top/artists?limit=${e}`)).data.items},d={async get(e=50){try{const t=await b.get(`/me/albums?limit=${e}`);return t.data.items.map((e=>e.album))}catch(t){console.log(t)}}},m={async get(e=50){try{return(await b.get(`/browse/categories?limit${e}`)).data.categories.items}catch(t){console.log(t)}}},h={async get(){try{const e=await b.get("/me");return{name:e.data.display_name,profilePic:e.data.images[0].url}}catch(e){console.log(e)}}},O={async get(e=50){try{return(await b.get(`/me/playlists?limit${e}`)).data.items}catch(t){console.log(t)}}},p={async get(e=50){try{const t=await b.get(`/me/shows?limit${e}`);return t.data.items.map((e=>e.show))}catch(t){console.log(t)}}},f={getTop:async(e=50)=>(await b.get(`/me/top/tracks?limit=${e}`)).data.items};function x(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}function v(e="#fff"){return`linear-gradient(0deg,${e}80,${e})`}function g(e){let t="";return e.forEach(((c,s)=>{t+=c.name,s+1!==e.length&&(t+=", ")})),t}var y={get(e){const t=e+"=",c=decodeURIComponent(document.cookie).split(";");for(let s=0;s<c.length;s++){let e=c[s];for(;" "===e.charAt(0);)e=e.substring(1);if(0===e.indexOf(t))return e.substring(t.length,e.length)}return""},set(e,t){const c=new Date;c.setTime(c.getTime()+36e5),document.cookie=e+"="+t+"; expires="+c.toUTCString()+";path=/"},delete(e){document.cookie=`${e}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`}};const N=Object(a.createContext)(),w=["Playlists","Podcasts","Artists","Albums"];function k({children:e}){const[t,c]=Object(a.useState)(""),[n,r]=Object(a.useState)(!0),[i,l]=Object(a.useState)(null),[o,j]=Object(a.useState)([]),[x,v]=Object(a.useState)([]),[g,k]=Object(a.useState)([]),[C,E]=Object(a.useState)([]),[L,S]=Object(a.useState)([]),[z,P]=Object(a.useState)([]),[M,T]=Object(a.useState)(null),[R,B]=Object(a.useState)([]),[A,$]=Object(a.useState)(w[0]);return Object(a.useEffect)((()=>{r(!0);const e=y.get("token");e&&c(e),t?(b.defaults.headers.common.Authorization="Bearer "+t,async function(){r(!0);const e=d.get(),t=u.get(),c=u.getTop(),s=m.get(),a=h.get(),n=O.get(),i=p.get(),o=f.getTop(1),b=await Promise.all([e,t,c,s,a,n,i,o]),[x,g,y,N,w,C,L,z]=b;j([...x]),v([...g]),k([...y]),B([...N.slice(0,4)]),S([...N.slice(4)]),l({...w}),P([...C]),E([...L]),T({...z[0]}),r(!1)}()):(r(!1),setTimeout((()=>{}),500))}),[t]),Object(s.jsx)(N.Provider,{value:{token:t,setToken:c,clearStore:function(){r(!1),c(""),l(null),j([]),v([]),k([]),S([]),P([]),B([]),E([]),T(null)},onLoading:n,setLoading:r,user:i,albums:o,podcasts:C,artists:x,topArtists:g,playlists:z,trackPlaying:M,categories:L,topCategories:R,libraryTabs:w,currentLibraryTab:A,setCurrentLibraryTab:$},children:e})}function C(){return{...Object(a.useContext)(N)}}c(56);var E=c(3),L=c(4);c(61),c(62);var S=({id:e="",step:t="0.1",value:c,onChange:a})=>Object(s.jsxs)("div",{className:"input-range-container",children:[Object(s.jsx)("input",{id:e,step:t,type:"range",min:"0",max:"100",value:c,onChange:a}),Object(s.jsx)("div",{className:"progress-bar back"}),Object(s.jsx)("div",{className:"progress-bar front",style:{width:c+"%"}})]});var z=({audioLength:e=0})=>{const t=function(e){let t,c,s;return t=Math.floor(e/1e3/60/60),c=Math.floor(60*(e/1e3/60/60-t)),s=Math.floor(60*(60*(e/1e3/60/60-t)-c)),`${c}:${s}`}(e),c=function(e){let t=e.split(":"),c=+t[0],s=+t[1];return parseFloat((60*c+s).toFixed(3))}(t),[n,r]=Object(a.useState)(0),[i,l]=Object(a.useState)(0);return Object(a.useEffect)((()=>{let e;e=0===c?0:100*n/c,l(e)}),[n,c]),Object(s.jsxs)("div",{className:"audio-progress-container",children:[Object(s.jsx)("span",{className:"time-text current-time",children:function(e){const t=~~(e/3600),c=~~(e%3600/60),s=~~e%60;let a="";return t>0&&(a+=t+":"+(c<10?"0":"")),a+=c+":"+(s<10?"0":""),a+=""+s,a}(n)}),Object(s.jsx)(S,{value:i,onChange:function(e){const t=parseFloat(e.target.value,10);l(t),r(t*c/100)}}),Object(s.jsx)("span",{className:"time-text max-time",children:t})]})},P=(c(63),c.p+"static/media/default-cover.548e2eda.webp"),M=c(12);var T=({track:e})=>{const[t,c]=Object(a.useState)(!0);return Object(s.jsx)("div",{className:"audio-info-container",children:e?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("img",{className:"img-cover",src:e.album.images[1].url,onError:e=>{e.target.onerror=null,e.target.src=P},alt:"cover"}),Object(s.jsxs)("div",{className:"text",children:[Object(s.jsx)("span",{className:"name",children:e.album.name}),Object(s.jsx)("span",{className:"artist",children:g(e.artists)})]}),Object(s.jsx)("aside",{children:Object(s.jsx)("button",{className:"btn-love "+(t?"active":""),onClick:function(){c(!t)},children:Object(s.jsx)(E.a,{icon:t?L.c:M.c,color:"CurrentColor"})})})]}):null})};c(64);var R=()=>{const[e,t]=Object(a.useState)(100),[c,n]=Object(a.useState)(e),[r,i]=Object(a.useState)(L.o);return Object(a.useEffect)((function(){i(0===e?L.n:e<50?L.m:L.o)}),[e]),Object(s.jsxs)("div",{className:"audio-options-container",children:[Object(s.jsx)("button",{className:"btn",children:Object(s.jsx)(E.a,{icon:M.d})}),Object(s.jsx)("button",{className:"btn",children:Object(s.jsx)(E.a,{icon:M.b})}),Object(s.jsx)("button",{className:"btn btn-volume",onClick:function(){0!==e?(n(e),t(0)):t(c)},children:Object(s.jsx)(E.a,{icon:r})}),Object(s.jsx)(S,{value:e,onChange:function(e){t(parseFloat(e.target.value,10))}})]})};var B=()=>{const{trackPlaying:e}=C(),[t,c]=Object(a.useState)(!0);return Object(s.jsxs)("footer",{className:"footer",children:[Object(s.jsx)(T,{track:e}),Object(s.jsxs)("div",{className:"audio-controls",children:[Object(s.jsxs)("div",{className:"btn-group",children:[Object(s.jsx)("button",{className:"btn-secondary btn-random",children:Object(s.jsx)(E.a,{icon:L.g})}),Object(s.jsx)("button",{className:"btn-primary btn-back",children:Object(s.jsx)(E.a,{icon:L.k})}),Object(s.jsx)("button",{className:"btn-primary btn-play",onClick:function(){c(!t)},children:Object(s.jsx)(E.a,{icon:t?L.d:L.e})}),Object(s.jsx)("button",{className:"btn-primary btn-forward",children:Object(s.jsx)(E.a,{icon:L.l})}),Object(s.jsx)("button",{className:"btn-secondary btn-repeat",children:Object(s.jsx)(E.a,{icon:L.h})})]}),Object(s.jsx)(z,{audioLength:e?e.duration_ms:0})]}),Object(s.jsx)(R,{})]})};c(65),c(66),c(67);var A=({visibility:e=!1})=>{const{clearStore:t}=C();return e?Object(s.jsxs)("ul",{className:"drop-down",children:[Object(s.jsx)("li",{className:"drop-item",children:"account"}),Object(s.jsx)("li",{className:"drop-item",children:"Profile"}),Object(s.jsx)("li",{className:"drop-item",onClick:function(){y.delete("token"),t()},children:"Log out"})]}):null};var $=()=>{const{user:e}=C(),[t,c]=Object(a.useState)(!1);function n(e){e.stopPropagation(),c(!1),document.removeEventListener("click",n)}return e?Object(s.jsxs)("button",{className:"btn-user "+(t?"drop-is-open":""),onClick:function(e){e.stopPropagation(),c(!t),t||document.addEventListener("click",n)},children:[Object(s.jsx)("div",{className:"profile-pic-container",children:Object(s.jsx)("img",{src:e.profilePic,alt:"Profile"})}),Object(s.jsx)("span",{className:"user-name",children:e.name}),Object(s.jsx)(E.a,{className:"triangle-icon "+(t?"drop-is-open":""),icon:L.j,color:"CurrentColor"}),Object(s.jsx)(A,{visibility:t})]}):null};c(68);function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s])}return e}).apply(this,arguments)}var I=a.createElement("path",{d:"M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z",fill:"currentColor",fillRule:"evenodd"});function F({title:e,titleId:t,...c},s){return a.createElement("svg",q({viewBox:"0 0 512 512",width:24,height:24,xmlns:"http://www.w3.org/2000/svg",ref:s,"aria-labelledby":t},c),e?a.createElement("title",{id:t},e):null,I)}const _=a.forwardRef(F);c.p;function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s])}return e}).apply(this,arguments)}var U=a.createElement("path",{d:"M4.93,4.93,19.07,19.07m-14.14,0L19.07,4.93",fill:"none",stroke:"currentColor"});function D({title:e,titleId:t,...c},s){return a.createElement("svg",Y({height:24,role:"img",width:24,viewBox:"0 0 24 24",ref:s,"aria-labelledby":t},c),e?a.createElement("title",{id:t},e):null,U)}const J=a.forwardRef(D);c.p;var W=()=>{const[e,t]=Object(a.useState)("");return Object(s.jsxs)("div",{className:"searchbar-container",children:[Object(s.jsx)(_,{className:"search-icon"}),Object(s.jsx)("input",{type:"text",className:"search-input",value:e,onChange:e=>t(e.target.value),placeholder:"Search for Artists, Songs or Podcasts"}),""!==e?Object(s.jsx)(J,{className:"search-clear-icon",onClick:()=>t("")}):null]})};c(69);var V=()=>{const{libraryTabs:e,currentLibraryTab:t,setCurrentLibraryTab:c}=C();return Object(s.jsx)("ul",{className:"list-of-categories",children:e.map((e=>Object(s.jsx)("li",{className:t===e?"item selected":"item",onClick:()=>c(e),children:e},e)))})};var Z=()=>{const e=Object(o.g)(),t=Object(o.h)(),[c,n]=Object(a.useState)(!1),[r,i]=Object(a.useState)("");function l(){document.querySelector(".app-main").scrollTop>=50?n(!0):n(!1)}return Object(a.useEffect)((()=>{i(t.pathname)}),[t.pathname]),Object(a.useEffect)((()=>{document.querySelector(".app-main").addEventListener("scroll",l)}),[]),Object(s.jsxs)("header",{className:"main-header "+(c?"header-scrolled":""),children:[Object(s.jsx)("button",{className:"btn-arrow",onClick:e.goBack,children:Object(s.jsx)(E.a,{icon:L.a,color:"#fff"})}),Object(s.jsx)("button",{className:"btn-arrow",onClick:e.goForward,children:Object(s.jsx)(E.a,{icon:L.b,color:"#fff"})}),"/search"===r&&Object(s.jsx)(W,{}),"/your-library"===r&&Object(s.jsx)(V,{}),Object(s.jsx)($,{})]})};c(72);function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s])}return e}).apply(this,arguments)}var H=a.createElement("path",{fill:"currentColor",d:"M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"});function K({title:e,titleId:t,...c},s){return a.createElement("svg",G({className:"brand-logo",viewBox:"0 0 1134 340",ref:s,"aria-labelledby":t},c),void 0===e?a.createElement("title",{id:t},"Spotify"):e?a.createElement("title",{id:t},e):null,H)}const Q=a.forwardRef(K);c.p,c(73);function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s])}return e}).apply(this,arguments)}var ee=a.createElement("path",{d:"M448 463.746h-149.333v-149.333h-85.334v149.333h-149.333v-315.428l192-111.746 192 110.984v316.19z",fill:"currentColor"});function te({title:e,titleId:t,...c},s){return a.createElement("svg",X({viewBox:"0 0 512 512",width:24,height:24,xmlns:"http://www.w3.org/2000/svg",ref:s,"aria-labelledby":t},c),e?a.createElement("title",{id:t},e):null,ee)}const ce=a.forwardRef(te);c.p;function se(){return(se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s])}return e}).apply(this,arguments)}var ae=a.createElement("path",{d:"M 256.274 60.84 L 84.324 166.237 L 84.324 443.063 L 193.27 443.063 L 193.27 293.73 L 320.228 293.73 L 320.228 443.063 L 428.222 443.063 L 428.222 165.476 L 256.274 60.84 Z M 256.274 35.95 L 448.452 149.145 L 448.452 464.395 L 300 464.395 L 300 315.062 L 213.499 315.062 L 213.499 464.395 L 64.095 464.395 L 64.095 150.161 L 256.274 35.95 Z",fill:"currentColor"});function ne({title:e,titleId:t,...c},s){return a.createElement("svg",se({viewBox:"0 0 512 512",width:24,height:24,xmlns:"http://www.w3.org/2000/svg",ref:s,"aria-labelledby":t},c),e?a.createElement("title",{id:t},e):null,ae)}const re=a.forwardRef(ne);c.p;function ie(){return(ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s])}return e}).apply(this,arguments)}var le=a.createElement("path",{d:"M357.079 341.334l94.476 110.73-32.508 27.683-94.222-110.476q-45.714 30.476-100.826 30.476-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 23.365-5.841 45.714t-16.635 41.651-25.778 35.555zM224 357.079q28.19 0 53.841-11.048t44.19-29.587 29.587-44.19 11.048-53.841-11.048-53.841-29.587-44.191-44.19-29.587-53.841-11.047-53.841 11.047-44.191 29.588-29.587 44.19-11.047 53.841 11.047 53.841 29.588 44.19 44.19 29.587 53.841 11.048z",fill:"currentColor"});function oe({title:e,titleId:t,...c},s){return a.createElement("svg",ie({viewBox:"0 0 512 512",width:24,height:24,xmlns:"http://www.w3.org/2000/svg",ref:s,"aria-labelledby":t},c),e?a.createElement("title",{id:t},e):null,le)}const je=a.forwardRef(oe);c.p;function be(){return(be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s])}return e}).apply(this,arguments)}var ue=a.createElement("path",{d:"M311.873 77.46l166.349 373.587-39.111 17.27-166.349-373.587zM64 463.746v-384h42.666v384h-42.666zM170.667 463.746v-384h42.667v384h-42.666z",fill:"currentColor"});function de({title:e,titleId:t,...c},s){return a.createElement("svg",be({viewBox:"0 0 512 512",width:24,height:24,xmlns:"http://www.w3.org/2000/svg",ref:s,"aria-labelledby":t},c),e?a.createElement("title",{id:t},e):null,ue)}const me=a.forwardRef(de);c.p;function he(){return(he=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s])}return e}).apply(this,arguments)}var Oe=a.createElement("path",{d:"M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z",fill:"currentColor"});function pe({title:e,titleId:t,...c},s){return a.createElement("svg",he({viewBox:"0 0 512 512",width:24,height:24,xmlns:"http://www.w3.org/2000/svg",ref:s,"aria-labelledby":t},c),e?a.createElement("title",{id:t},e):null,Oe)}const fe=a.forwardRef(pe);c.p;var xe=()=>{const e=Object(o.g)(),t=Object(o.h)(),[c,n]=Object(a.useState)("");function r(c){t.pathname!==c&&e.push(c)}return Object(a.useEffect)((()=>{n(t.pathname),document.querySelector(".app-main").scrollTop=0}),[t.pathname]),Object(s.jsxs)("ul",{className:"navigation-list",children:[Object(s.jsxs)("li",{onClick:()=>r("/home"),className:"/home"===c?"active":"",children:["/home"===c?Object(s.jsx)(ce,{}):Object(s.jsx)(re,{}),Object(s.jsx)("span",{className:"text",children:"Home"})]}),Object(s.jsxs)("li",{onClick:()=>r("/search"),className:"/search"===c?"active":"",children:["/search"===c?Object(s.jsx)(je,{}):Object(s.jsx)(_,{}),Object(s.jsx)("span",{className:"text",children:"Search"})]}),Object(s.jsxs)("li",{onClick:()=>r("/your-library"),className:"/your-library"===c?"active":"",children:["/your-library"===c?Object(s.jsx)(me,{}):Object(s.jsx)(fe,{}),Object(s.jsx)("span",{className:"text",children:"Your library"})]})]})};c(74);var ve=()=>Object(s.jsxs)("div",{className:"playlists-options-container",children:[Object(s.jsx)("h2",{className:"title",children:"PLAYLISTS"}),Object(s.jsxs)("button",{children:[Object(s.jsx)("div",{className:"btn-icon-bg",children:Object(s.jsx)(E.a,{icon:L.f,color:"#000"})}),Object(s.jsx)("span",{className:"btn-text",children:"Create Playlist"})]}),Object(s.jsxs)("button",{children:[Object(s.jsx)("div",{className:"btn-icon-bg bg-gradient",children:Object(s.jsx)(E.a,{icon:L.c,color:"CurrentColor"})}),Object(s.jsx)("span",{className:"btn-text",children:"Liked Songs"})]})]});c(75);var ge=()=>{const{playlists:e}=C();return Object(s.jsx)("ul",{className:"playlists-list",children:e.map((e=>Object(s.jsx)("li",{title:e.name,children:e.name},e.id)))})};var ye=()=>Object(s.jsxs)("nav",{className:"sidebar",children:[Object(s.jsx)(l.b,{to:"/home",className:"brand",children:Object(s.jsx)(Q,{})}),Object(s.jsx)(xe,{}),Object(s.jsx)(ve,{}),Object(s.jsx)("div",{className:"divider"}),Object(s.jsxs)("div",{className:"container-relative",children:[Object(s.jsx)(ge,{}),Object(s.jsxs)("button",{className:"btn-install",children:[Object(s.jsx)(E.a,{icon:M.a,color:"CurrentColor"}),"Install App"]})]})]});c(76);function Ne(){return(Ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s])}return e}).apply(this,arguments)}var we=a.createElement("polygon",{points:"21.57 12 5.98 3 5.98 21 21.57 12",fill:"#fff"});function ke({title:e,titleId:t,...c},s){return a.createElement("svg",Ne({height:16,role:"img",width:16,viewBox:"0 0 24 24",ref:s,"aria-labelledby":t},c),e?a.createElement("title",{id:t},e):null,we)}const Ce=a.forwardRef(ke);c.p;var Ee=({image:e,title:t,subtitle:c,subtitleLink:a="",subtitleMultiline:n=!1,className:r,imageRounded:i=!1})=>Object(s.jsxs)("div",{className:"card-container "+r,children:[Object(s.jsx)("img",{className:"cover-img",src:e,onError:e=>{e.target.onerror=null,e.target.src=P},alt:"Cover",style:{borderRadius:i?"50%":""}}),Object(s.jsx)("span",{className:"title",title:t,children:Object(s.jsx)("span",{children:t})}),Object(s.jsx)("div",{className:"subtitle-div "+(n?"multiline":""),children:Object(s.jsx)("span",{className:"subtitle "+(a?"subtitle-link":""),children:c})}),Object(s.jsx)("button",{className:"btn-play",title:"Play",children:Object(s.jsx)(Ce,{})})]});c(77);var Le=()=>Object(s.jsx)("div",{className:"loading-container",children:Object(s.jsx)("div",{className:"lds-dual-ring"})});c(78);var Se=({type:e="text",title:t="Empty title",linkTo:c="#"})=>Object(s.jsx)("section",{className:"section-container",children:Object(s.jsxs)("div",{className:"section-header",children:[Object(s.jsxs)("h2",{className:"title",children:["text"===e?t:null,"link"===e?Object(s.jsx)("a",{href:c,onClick:e=>e.preventDefault(),className:"title-link",children:t}):null]}),"link"===e?Object(s.jsx)("a",{href:c,onClick:e=>e.preventDefault(),className:"aside-link",children:"SEE ALL"}):null]})});c(79);var ze=()=>{const e=Object(o.g)(),{setToken:t}=C(),c=window.location.hash.substring(1).split("&").reduce((function(e,t){if(t){let c=t.split("=");e[c[0]]=decodeURIComponent(c[1])}return e}),{});return Object(a.useEffect)((()=>{c.access_token&&(y.set("token",c.access_token),t((()=>c.access_token)),e.push("/home"))}),[]),Object(s.jsxs)("div",{className:"login-container",children:[Object(s.jsx)("div",{className:"overlay"}),Object(s.jsxs)("div",{className:"login-modal",children:[Object(s.jsx)("h1",{className:"title",children:"Spotify login is required to continue, after finishing you will be redirected back."}),Object(s.jsxs)("h2",{className:"subtitle",children:["Note that, all data accessed by this system are read-only and non-private.",Object(s.jsx)("b",{children:" We will not have access to your email."})," You will be able to check all the information accessed before accepting it."]}),Object(s.jsxs)("button",{className:"btn-link",onClick:function(){window.location=`https://accounts.spotify.com/authorize?client_id=fada5e0ea4b340008bf4f07a9930fadf&redirect_uri=https://lucas-santosp.github.io/clone-spotify-web-react/login&scope=${encodeURIComponent("user-library-read user-follow-read user-top-read playlist-read-collaborative playlist-read-private")}&response_type=token`},children:["Go to Spotify login",Object(s.jsx)(E.a,{icon:L.i})]})]})]})};c(80),c(81);var Pe=({title:e="empty",data:t=[],type:c="album"})=>Object(s.jsxs)("section",{className:"home-section",children:[Object(s.jsx)(Se,{type:"link",title:e}),Object(s.jsxs)("div",{className:"grid-cards",children:["album"===c&&t.map((e=>Object(s.jsx)(Ee,{className:"grid-item",title:e.name,subtitle:g(e.artists),subtitleLink:"#",image:e.images[1].url},e.id))),"artist"===c&&t.map((e=>Object(s.jsx)(Ee,{className:"grid-item",title:e.name,subtitle:"Artist",image:e.images[1].url,imageRounded:!0},e.id)))]})]});var Me=()=>{const{albums:e,topArtists:t}=C();let c=0;function a(t=10){const s=e.slice(c,c+t);return c+=t,s}return Object(s.jsxs)("div",{className:"home-container",children:[Object(s.jsx)(Pe,{title:"Recently played",data:a()}),Object(s.jsx)(Pe,{title:"Your heavy rotation",data:a()}),Object(s.jsx)(Pe,{title:"Your favorite artists",data:t,type:"artist"}),Object(s.jsx)(Pe,{title:"Mood",data:a(9)}),Object(s.jsx)(Pe,{title:"You might also like",data:a(6)}),Object(s.jsx)(Pe,{title:"Jump back in",data:a(8)}),Object(s.jsx)(Pe,{title:"For today's drive",data:a(7)})]})};c(82),c(83);var Te=({slides:e})=>{function t(e){const t=document.querySelector(".slider-track"),c=t.scrollWidth;"right"===e?t.scrollBy(c/4,0):t.scrollBy(-c/4,0)}function c(){const e=document.querySelector(".slider-track"),t=document.querySelector(".btn-right"),c=document.querySelector(".btn-left"),s=e.scrollWidth,a=e.scrollLeft,n=e.offsetWidth;t.style.visibility=n+a>=s?"hidden":"visible",c.style.visibility=a<=0?"hidden":"visible"}return Object(a.useEffect)((()=>{const e=document.querySelector(".slider-track");return c(),window.addEventListener("resize",c),e.addEventListener("scroll",c),()=>{window.removeEventListener("resize",c),e.removeEventListener("scroll",c)}}),[]),Object(s.jsxs)("div",{className:"slider-container",children:[Object(s.jsx)("button",{className:"btn-direction btn-left",onClick:()=>t("left"),children:Object(s.jsx)(E.a,{icon:L.a,color:"#000"})}),Object(s.jsx)("ul",{className:"slider-track",children:e.map((e=>Object(s.jsxs)("li",{className:"slide",children:[Object(s.jsx)("img",{className:"background-img",src:e.icons[0].url,alt:`${e.name} cover`}),Object(s.jsx)("span",{className:"slide-text",children:e.name})]},e.id)))}),Object(s.jsx)("button",{className:"btn-direction btn-right",onClick:()=>t("right"),children:Object(s.jsx)(E.a,{icon:L.b,color:"#000"})})]})};c(84);var Re=({categories:e})=>{function t(e){if(!e.includes("/"))return e;const[t,c]=e.split("/");return t+"/\n"+c}return Object(s.jsx)("ul",{className:"category-grid-container",children:e.map((e=>Object(s.jsx)("li",{className:"grid-item",style:{background:v(x())},children:Object(s.jsx)("span",{className:"grid-text",children:t(e.name)})},e.id)))})};var Be=()=>{const{categories:e,topCategories:t}=C();return Object(s.jsxs)("div",{className:"search-container",children:[Object(s.jsxs)("section",{className:"section",children:[Object(s.jsx)(Se,{title:"Your top genres"}),Object(s.jsx)(Te,{slides:t})]}),Object(s.jsxs)("section",{className:"section",children:[Object(s.jsx)(Se,{title:"Browse all"}),Object(s.jsx)(Re,{categories:e})]})]})};c(85);var Ae=()=>{const{currentLibraryTab:e,albums:t,podcasts:c,artists:a,playlists:n}=C();function r(e){return e.description?e.description.replace(/<\/?[^>]+(>|$)/g,""):`By ${e.owner.display_name}`}return Object(s.jsxs)("div",{className:"your-library-container",children:[Object(s.jsx)(Se,{title:e}),Object(s.jsxs)("div",{className:"grid-cards",children:["Playlists"===e&&n.map((e=>Object(s.jsx)(Ee,{className:"grid-item",title:e.name,subtitle:r(e),image:e.images[0].url,subtitleMultiline:!0},e.id))),"Artists"===e&&a.map((e=>Object(s.jsx)(Ee,{className:"grid-item",title:e.name,subtitle:"Artist",image:e.images[1].url,imageRounded:!0},e.id))),"Podcasts"===e&&c.map((e=>Object(s.jsx)(Ee,{className:"grid-item",title:e.name,subtitle:e.publisher,image:e.images[1].url},e.id))),"Albums"===e&&t.map((e=>Object(s.jsx)(Ee,{className:"grid-item",title:e.name,subtitle:g(e.artists),subtitleLink:"#",image:e.images[1].url},e.id)))]})]})};var $e=function(){const{token:e,onLoading:t}=C();return Object(s.jsxs)(l.a,{basename:"/clone-spotify-web-react",children:[Object(s.jsx)(Z,{}),Object(s.jsx)(ye,{}),Object(s.jsx)(B,{}),Object(s.jsx)("main",{className:"app-main",children:t?Object(s.jsx)(Le,{}):Object(s.jsx)(s.Fragment,{children:e?Object(s.jsxs)(o.d,{children:[Object(s.jsx)(o.b,{exact:!0,strict:!0,path:"/search",component:Be}),Object(s.jsx)(o.b,{exact:!0,strict:!0,path:"/your-library",component:Ae}),Object(s.jsx)(o.b,{exact:!0,strict:!0,path:"/home",component:Me}),Object(s.jsx)(o.a,{to:"/home"})]}):Object(s.jsxs)(o.d,{children:[Object(s.jsx)(o.b,{path:"/login",component:ze}),Object(s.jsx)(o.a,{to:"/login"})]})})})]})};var qe=function(){return Object(s.jsx)(k,{children:Object(s.jsx)("div",{className:"app-container",children:Object(s.jsx)($e,{})})})};i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(qe,{})}),document.getElementById("root"))}]),[[86,1,2]]]);
//# sourceMappingURL=main.6abe8468.chunk.js.map