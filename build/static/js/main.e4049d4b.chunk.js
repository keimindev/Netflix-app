(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{54:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},63:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(46),r=c.n(a),i=(c(54),c(4)),o=c.n(i),l=c(10),j=c(6),u=(c(56),c(8)),b=c(100),O=c(101),d=c(102),p=(c(57),c(16)),h=c(29),x=function(e,t){switch(t.type){case"LOGIN_START":return{user:null,isFetching:!0,error:!1};case"LOGIN_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"LOGIN_FAILURE":return{user:null,isFetching:!1,error:!0};case"LOGOUT":return{user:null,isFetching:!1,error:!1};default:return Object(h.a)({},e)}},m=c(0),f={user:JSON.parse(localStorage.getItem("user"))||null,isFetching:!1,error:!1},v=Object(n.createContext)(f),g=function(e){var t=e.children,c=Object(n.useReducer)(x,f),s=Object(j.a)(c,2),a=s[0],r=s[1];return Object(n.useEffect)((function(){localStorage.setItem("user",JSON.stringify(a.user))}),[a.user]),Object(m.jsx)(v.Provider,{value:{user:a.user,isFetching:a.isFetching,error:a.error,dispatch:r},children:t})},N=function(e){return{type:"LOGIN_SUCCESS",payload:e}},S=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),c=t[0],s=t[1],a=Object(n.useContext)(v).dispatch,r=Object(u.g)(),i=JSON.parse(localStorage.getItem("user"));window.onscroll=function(){return s(0!==window.pageYOffset),function(){return window.onscroll=null}};return Object(m.jsx)("div",{className:c?"navbar scrolled":"navbar",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"left",children:[Object(m.jsx)("img",{src:"https://www.freepnglogos.com/uploads/netflix-logo-0.png",alt:"logo"}),Object(m.jsx)(p.b,{to:"/",className:"link",children:Object(m.jsx)("span",{children:"Homepage"})}),Object(m.jsx)(p.b,{to:"/series",className:"link",children:Object(m.jsx)("span",{className:"navbar-tablet--links",children:"Series"})}),Object(m.jsx)(p.b,{to:"/movies",className:"link",children:Object(m.jsx)("span",{className:"navbar-tablet--links",children:"Movies"})}),Object(m.jsx)("span",{children:"New and Popular"}),Object(m.jsx)("span",{children:"My List"})]}),Object(m.jsxs)("div",{className:"right",children:[Object(m.jsx)(b.a,{className:"icon"}),Object(m.jsx)("span",{children:"KID"}),Object(m.jsx)(O.a,{className:"icon"}),Object(m.jsx)("img",{src:i.profilePic,alt:"profile"}),Object(m.jsxs)("div",{className:"profile",children:[Object(m.jsx)(d.a,{className:"icon"}),Object(m.jsxs)("div",{className:"options",children:[Object(m.jsx)("span",{children:"Setting"}),Object(m.jsx)("span",{onClick:function(e){e.preventDefault(),a({type:"LOGOUT"}),r.push("/")},children:"Log out"})]})]})]})]})})},_=c(103),T=c(104),E=(c(63),c(48)),w=c.n(E).a.create({baseURL:"https://min-netflix.herokuapp.com/api/"}),y=function(e){var t=e.type,c=e.setGenre,s=Object(n.useState)({}),a=Object(j.a)(s,2),r=a[0],i=a[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.get("/movies/random?type=".concat(t),{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}});case 3:c=e.sent,i(c.data[0]),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"featured",children:[t&&Object(m.jsxs)("div",{className:"category",children:[Object(m.jsx)("span",{children:"movie"===t?"Movies":"Series"}),Object(m.jsxs)("select",{name:"genre",id:"genre",onChange:function(e){return c(e.target.value)},children:[Object(m.jsx)("option",{children:"Genre"}),Object(m.jsx)("option",{value:"Action",children:"Action"}),Object(m.jsx)("option",{value:"Adventure",children:"Adventure"}),Object(m.jsx)("option",{value:"Comedy",children:"Comedy"}),Object(m.jsx)("option",{value:"Crime",children:"Crime"}),Object(m.jsx)("option",{value:"Fantasy",children:"Fantasy"}),Object(m.jsx)("option",{value:"Horror",children:"Horror"}),Object(m.jsx)("option",{value:"Romance",children:"Romance"}),Object(m.jsx)("option",{value:"Thriller",children:"Thriller"}),Object(m.jsx)("option",{value:"Animation",children:"Animation"}),Object(m.jsx)("option",{value:"Drama",children:"Drama"})]})]}),Object(m.jsx)("img",{src:r.img,alt:"movie"}),Object(m.jsxs)("div",{className:"info",children:[Object(m.jsx)("img",{src:r.imgTitle,alt:"title"}),Object(m.jsx)("span",{className:"desc",children:r.desc}),Object(m.jsxs)("div",{className:"buttons",children:[Object(m.jsxs)("button",{className:"play",children:[Object(m.jsx)(_.a,{}),Object(m.jsx)("span",{children:"Play"})]}),Object(m.jsxs)("button",{className:"more",children:[Object(m.jsx)(T.a,{}),Object(m.jsx)("span",{children:"Info"})]})]})]})]})})},C=c(108),R=c(109),P=(c(82),c(105)),A=c(106),k=c(107),D=(c(83),function(e){var t=e.index,c=e.item,s=Object(n.useState)(!1),a=Object(j.a)(s,2),r=a[0],i=a[1],u=Object(n.useState)({}),b=Object(j.a)(u,2),O=b[0],d=b[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.get("/movies/find/"+c,{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}});case 3:t=e.sent,d(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[c]),Object(m.jsx)(p.b,{to:{pathname:"/watch",movie:O},children:Object(m.jsxs)("div",{className:"list-item",style:{left:r&&225*t-50+2.5*t},onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)},children:[Object(m.jsx)("img",{src:O.imgSm,alt:"movie"}),r&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("video",{src:O.trailer,autoPlay:!0,loop:!0,preload:!0}),Object(m.jsxs)("div",{className:"item-info",children:[Object(m.jsxs)("div",{className:"icons",children:[Object(m.jsx)(_.a,{className:"icon"}),Object(m.jsx)(P.a,{className:"icon"}),Object(m.jsx)(A.a,{className:"icon"}),Object(m.jsx)(k.a,{className:"icon"})]}),Object(m.jsxs)("div",{className:"item-info--top",children:[Object(m.jsx)("span",{children:O.duration}),Object(m.jsx)("span",{className:"limit",children:O.limit}),Object(m.jsx)("span",{children:O.year})]}),Object(m.jsx)("div",{className:"desc",children:O.desc}),Object(m.jsx)("div",{className:"genre",children:O.genre})]})]})]})})}),I=function(e){var t=e.list,c=Object(n.useState)(!1),s=Object(j.a)(c,2),a=s[0],r=s[1],i=Object(n.useState)(0),o=Object(j.a)(i,2),l=o[0],u=o[1],b=Object(n.useState)(window.innerWidth/230),O=Object(j.a)(b,2),d=O[0],p=(O[1],Object(n.useRef)()),h=function(e){r(!0);var t=p.current.getBoundingClientRect().x-50;"left"===e&&l>0&&(u(l-1),p.current.style.transform="translateX(".concat(230+t,"px)")),"right"===e&&l<10-d&&(u(l+1),p.current.style.transform="translateX(".concat(-230+t,"px)"))};return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"list",children:[Object(m.jsx)("span",{className:"listTitle",children:t.title}),Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsx)(C.a,{className:"slider-arrow left",onClick:function(){return h("left")},style:{display:!a&&"none"}}),Object(m.jsx)("div",{className:"container",ref:p,children:t.content.map((function(e,t){return Object(m.jsx)(D,{index:t,item:e})}))}),Object(m.jsx)(R.a,{className:"slider-arrow right",onClick:function(){return h("right")}})]})]})})},F=function(e){var t=e.type,c=Object(n.useState)([]),s=Object(j.a)(c,2),a=s[0],r=s[1],i=Object(n.useState)(null),u=Object(j.a)(i,2),b=u[0],O=u[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.get("lists".concat(t?"?type="+t:"").concat(b?"&genre="+b:""),{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken}});case 3:c=e.sent,console.log(c.data),r(c.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[t,b]),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"home",children:[Object(m.jsx)(S,{}),Object(m.jsx)(y,{type:t,setGenre:O}),a.map((function(e){return Object(m.jsx)(I,{list:e})}))]})})},L=c(110),U=(c(84),function(){var e=Object(u.h)().movie;return Object(m.jsxs)("div",{className:"watch",children:[Object(m.jsx)(p.b,{to:"/",children:Object(m.jsxs)("div",{className:"back",children:[Object(m.jsx)(L.a,{}),"Home"]})}),Object(m.jsx)("video",{className:"video",autoPlay:!0,progress:!0,controls:!0,src:e.video})]})}),H=c(3),K=c(34),W=(c(88),{apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_AUTH_DOMAIN,projectId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_PROJECT_ID,storageBucket:"netflix-cf10e.appspot.com",messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_MESSAGINGSENDER_ID,appId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_APP_ID}),G=(K.a.initializeApp(W),K.a.storage());c(85);var B=function(){var e="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",t=Object(n.useState)(null),c=Object(j.a)(t,2),s=(c[0],c[1]),a=Object(n.useState)(""),r=Object(j.a)(a,2),i=r[0],b=r[1],O=Object(n.useState)(""),d=Object(j.a)(O,2),x=d[0],f=d[1],v=Object(n.useState)(""),g=Object(j.a)(v,2),N=g[0],S=g[1],_=Object(n.useState)(e),T=Object(j.a)(_,2),E=T[0],y=T[1],C=Object(n.useState)(0),R=Object(j.a)(C,2),P=R[0],A=R[1],k=Object(u.g)(),D=Object(n.useRef)(),I=Object(n.useRef)(),F=Object(n.useRef)(),L=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),S(F.current.value),e.prev=2,e.next=5,w.post("auth/register",{email:i,password:x,username:N,profilePic:E});case 5:k.push("/login"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"register",children:[Object(m.jsx)("div",{className:"top",children:Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsx)("img",{className:"logo",src:"https://www.freepnglogos.com/uploads/netflix-logo-0.png",alt:"logo"}),Object(m.jsx)(p.b,{to:"/login",className:"link",children:Object(m.jsx)("button",{className:"login-btn",children:"Sign In"})})]})}),Object(m.jsx)("div",{className:"container",children:i&&x?Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("form",{className:"input-profile",children:[Object(m.jsxs)("div",{className:"input-img",children:[Object(m.jsx)("img",{src:E,className:"file-preview"}),Object(m.jsxs)("form",{className:"file-btn",children:[Object(m.jsx)("input",{name:"img",type:"file",onChange:function(t){if(t.target.files.length){var c=t.target.files[0],n=new FileReader;n.readAsDataURL(c),n.onload=function(e){y(e.target.result)}}else y(e)}}),Object(m.jsx)("button",{type:"button",className:"register-btn",onClick:function(e){e.preventDefault(),[{file:E,label:"profilePic"}].forEach((function(e){var t=(new Date).getTime()+e.label+e.file.name,c=G.ref("/users/".concat(t)).put(e.file);c.on("state_changes",(function(e){var t=e.bytesTransferred/e.totalBytes*100;console.log("upload is"+t+" % done.")}),(function(e){console.log(e)}),(function(){c.snapshot.ref.getDownloadURL().then((function(t){s((function(c){return Object(h.a)(Object(h.a)({},c),{},Object(H.a)({},e.label,t))})),A((function(e){return e+1}))}))}))}))},children:1===P?"Done":"Upload"})]})]}),Object(m.jsxs)("div",{className:"input-username",children:[Object(m.jsx)("input",{type:"username",placeholder:"put username",ref:F,className:"user-name"}),Object(m.jsx)("button",{type:"button",className:"register-btn",onClick:L,children:"Submit"})]})]})}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{children:"Unlimited movies, TV shows, and more."}),Object(m.jsx)("h2",{children:"Watch anywhere. Cancel anytime"}),Object(m.jsx)("p",{children:"Ready to watch? Enter your email to create or restart your membership."}),i?Object(m.jsxs)("form",{className:"input",children:[Object(m.jsx)("input",{type:"password",placeholder:"password",ref:I}),Object(m.jsx)("button",{className:"register-btn",onClick:function(){f(I.current.value)},children:"Next"})]}):Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"input",children:[Object(m.jsx)("input",{type:"email",placeholder:"email address",ref:D}),Object(m.jsx)("button",{className:"register-btn",onClick:function(){b(D.current.value)},children:"Get Start"})]})})]})})]})})},J=function(){var e=Object(l.a)(o.a.mark((function e(t,c){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c({type:"LOGIN_START"}),e.prev=1,e.next=4,w.post("auth/login",t);case 4:n=e.sent,c(N(n.data)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),c({type:"LOGIN_FAILURE"});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,c){return e.apply(this,arguments)}}();c(86);var M=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),r=Object(j.a)(a,2),i=r[0],o=r[1],l=Object(n.useContext)(v).dispatch;return Object(m.jsxs)("div",{className:"login",children:[Object(m.jsx)("div",{className:"top",children:Object(m.jsx)("div",{className:"wrapper",children:Object(m.jsx)("img",{className:"logo",src:"https://www.freepnglogos.com/uploads/netflix-logo-0.png",alt:"logo"})})}),Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("form",{children:[Object(m.jsx)("h1",{children:"Sign In"}),Object(m.jsx)("input",{type:"email",placeholder:"Email or Phone Number",onChange:function(e){return s(e.target.value)}}),Object(m.jsx)("input",{type:"password",placeholder:"Password",onChange:function(e){return o(e.target.value)}}),Object(m.jsx)("button",{className:"login-btn",onClick:function(e){e.preventDefault(),J({email:c,password:i},l)},children:"Sign In"}),Object(m.jsxs)("span",{children:["New to Netflix? ",Object(m.jsx)("b",{children:"Sign up now."})]}),Object(m.jsxs)("small",{children:["This page is protected by Google reCAPTCHA to ensure your're not a bot. ",Object(m.jsx)("b",{children:"Learn more"})]})]})})]})};var V=function(){var e=Object(n.useContext)(v).user;return Object(m.jsx)(p.a,{children:Object(m.jsxs)(u.d,{children:[Object(m.jsx)(u.b,{exact:!0,path:"/",children:e?Object(m.jsx)(F,{}):Object(m.jsx)(u.a,{to:"/register"})}),Object(m.jsx)(u.b,{exact:!0,path:"/register",children:e?Object(m.jsx)(u.a,{to:"/"}):Object(m.jsx)(B,{})}),Object(m.jsx)(u.b,{exact:!0,path:"/login",children:e?Object(m.jsx)(u.a,{to:"/"}):Object(m.jsx)(M,{})}),e&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(u.b,{path:"/movies",children:Object(m.jsx)(F,{type:"movie"})}),Object(m.jsx)(u.b,{path:"/series",children:Object(m.jsx)(F,{type:"series"})}),Object(m.jsx)(u.b,{path:"/watch",children:Object(m.jsx)(U,{})})]})]})})};r.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(g,{children:Object(m.jsx)(V,{})})}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.e4049d4b.chunk.js.map