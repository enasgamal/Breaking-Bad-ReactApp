(this["webpackJsonpbreaking-bad"]=this["webpackJsonpbreaking-bad"]||[]).push([[0],{19:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},50:function(e,t,c){},70:function(e,t,c){},72:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(32),r=c.n(n),i=(c(42),c(43),c.p+"static/media/logo.e6ecab44.png"),j=(c(19),c(7)),l=c(0),d=function(){return Object(l.jsxs)("div",{className:"header",children:[Object(l.jsxs)("header",{className:"d-flex px-5 pt-5",children:[Object(l.jsx)("div",{className:"logoOptions",children:Object(l.jsx)(j.b,{to:"/characters",children:Object(l.jsx)("img",{src:i,alt:"logo",height:"70"})})}),Object(l.jsxs)("ul",{class:"snip1189",children:[Object(l.jsx)(j.b,{className:"current",to:"/characters",children:"Characters"}),Object(l.jsx)(j.b,{to:"/episodes",children:"Episodes"}),Object(l.jsx)(j.b,{to:"/quotes",children:"Quotes"}),Object(l.jsx)(j.b,{to:"/deaths",children:"Death"})]})]}),Object(l.jsx)("hr",{className:"hr-trick"})]})},o=(c(50),function(){return Object(l.jsx)("div",{class:"footer-basic",children:Object(l.jsxs)("footer",{children:[Object(l.jsx)("hr",{}),Object(l.jsxs)("ul",{class:"list-inline",children:[Object(l.jsx)("li",{class:"list-inline-item",children:Object(l.jsx)("a",{href:"/episodes",children:"Episodes"})}),Object(l.jsx)("li",{class:"list-inline-item",children:Object(l.jsx)("a",{href:"/characters",children:"Characters"})}),Object(l.jsx)("li",{class:"list-inline-item",children:Object(l.jsx)("a",{href:"/deaths",children:"Deaths"})}),Object(l.jsx)("li",{class:"list-inline-item",children:Object(l.jsx)("a",{href:"/quotes",children:"Quotes"})})]}),Object(l.jsx)("p",{class:"copyright",children:" All Rights Reserved \xa9 2021  |  Made with Love by Enas Gamal"})]})})}),b=c(3),h=c(5),O=c.n(h),x=c(11),u=c(2),p=c(6),m=c.n(p),f=c.p+"static/media/spinner.11d9cde8.gif",v=function(){return Object(l.jsx)("img",{src:f,style:{width:"200px",margin:"auto",display:"block"},alt:"Loading"})},g=(c(29),function(e){var t=e.loading,c=e.quote;return t?Object(l.jsx)(v,{}):Object(l.jsx)("div",{className:"container my-5",children:Object(l.jsx)("div",{className:"row",children:c.map((function(e){return Object(l.jsx)("div",{className:"col-4",children:Object(l.jsxs)("div",{id:"ct",children:[Object(l.jsx)("div",{class:"corner ",id:"left_top"}),Object(l.jsx)("div",{class:"corner",id:"left_bottom"}),Object(l.jsx)("div",{class:"corner",id:"right_top"}),Object(l.jsx)("div",{class:"corner",id:"right_bottom"}),Object(l.jsx)("span",{children:e.author}),Object(l.jsx)("blockquote",{children:Object(l.jsx)("p",{children:Object(l.jsx)("i",{children:Object(l.jsxs)("h2",{children:['"',e.quote,'"']})})})})]})})}))})})}),_=c(34),N=c(35),k=c(37),y=c(36),w=function(e){Object(k.a)(c,e);var t=Object(y.a)(c);function c(){var e;Object(_.a)(this,c);for(var s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={advice:"",author:""},e.fetchQuote=function(){m.a.get("https://breakingbadapi.com/api/quote/random").then((function(t){console.log(t.data[0].quote),e.setState({advice:t.data[0].quote,author:t.data[0].author})}))},e}return Object(N.a)(c,[{key:"componentDidMount",value:function(){this.fetchQuote()}},{key:"render",value:function(){return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"row justify-content-around",children:Object(l.jsxs)("div",{className:"col-6",children:[Object(l.jsxs)("div",{id:"ct",children:[Object(l.jsx)("div",{class:"corner ",id:"left_top"}),Object(l.jsx)("div",{class:"corner",id:"left_bottom"}),Object(l.jsx)("div",{class:"corner",id:"right_top"}),Object(l.jsx)("div",{class:"corner",id:"right_bottom"}),Object(l.jsxs)("blockquote",{children:[Object(l.jsx)("div",{class:"card-div",children:'" "'}),Object(l.jsx)("p",{class:"mt-4",children:Object(l.jsx)("i",{children:Object(l.jsxs)("h2",{children:[' " ',this.state.advice,' "']})})}),Object(l.jsx)("p",{children:Object(l.jsx)("i",{children:Object(l.jsx)("h5",{children:this.state.author})})})]})]}),Object(l.jsx)("div",{className:"text-center",children:Object(l.jsx)("button",{type:"button",class:"btn btn-outline-success p-2",onClick:this.fetchQuote,children:"Random Quote"})})]})})})}}]),c}(s.Component),S=function(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(!0),r=Object(u.a)(n,2),i=r[0],j=r[1];return Object(s.useEffect)((function(){(function(){var e=Object(x.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m()("https://breakingbadapi.com/api/quotes");case 2:t=e.sent,console.log(t.data),a(t.data),j(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"text-center pt-5",children:"Get A Random Quotes"}),Object(l.jsx)(w,{})," ",Object(l.jsx)("br",{}),Object(l.jsx)("hr",{}),Object(l.jsx)("h1",{className:"text-center pt-5",children:"Popular Quotes"}),Object(l.jsx)(g,{loading:i,quote:c})]})},E=(c(30),function(e){var t=e.loading,c=e.episodes;return t?Object(l.jsx)(v,{}):Object(l.jsx)("div",{className:"container my-5",children:Object(l.jsx)("div",{className:"row",children:c.map((function(e){return Object(l.jsx)("div",{className:"col-3 mb-5 ",children:Object(l.jsx)("div",{class:" h-25 full-withradius shrink",children:Object(l.jsx)(j.b,{to:"/episodes/".concat(e.episode_id),children:Object(l.jsxs)("div",{class:"card-body",children:[Object(l.jsxs)("div",{class:"card-episode",children:["S",e.season,"."]}),Object(l.jsxs)("div",{class:"card-season",children:["E",e.episode]}),Object(l.jsxs)("h6",{class:"card-subtitle",children:["Title: ",e.title]})]})})})})}))})})}),q=function(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(!0),r=Object(u.a)(n,2),i=r[0],j=r[1];return Object(s.useEffect)((function(){(function(){var e=Object(x.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m()("https://breakingbadapi.com/api/episodes");case 2:t=e.sent,console.log(t.data),a(t.data),j(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"text-center p-4",children:"Episodes"}),Object(l.jsx)(E,{loading:i,episodes:c})]})},C=(c(31),function(e){var t=e.isLoaded,c=e.chars;return t?Object(l.jsx)(v,{}):Object(l.jsx)("div",{className:"container my-5",children:Object(l.jsx)("section",{className:"cards",children:c.map((function(e){return Object(l.jsx)("div",{className:"card",children:Object(l.jsxs)("div",{className:"card-inner",children:[Object(l.jsx)("div",{className:"card-front",children:Object(l.jsx)("img",{src:e.img,alt:""})}),Object(l.jsxs)("div",{className:"card-back",children:[Object(l.jsx)("h1",{children:e.name}),Object(l.jsx)("strong",{children:"Actor Name:"})," ",e.portrayed," ",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("strong",{children:"Nickname:"})," ",e.nickname," ",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("strong",{children:"Birthday:"})," ",e.birthday," ",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("strong",{children:"Status:"})," ",e.status," ",Object(l.jsx)("br",{}),Object(l.jsx)("br",{})]})]})})}))})})}),Q=function(e){var t=e.getQuery,c=Object(s.useState)(""),a=Object(u.a)(c,2),n=a[0],r=a[1];return Object(l.jsx)("section",{className:"search",children:Object(l.jsx)("form",{children:Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"Search characters",value:n,onChange:function(e){return c=e.target.value,r(c),void t(c);var c}})})})},D=function(e){for(var t=e.postsPerPage,c=e.totalPosts,s=e.paginate,a=[],n=1;n<=Math.ceil(c/t);n++)a.push(n);return Object(l.jsx)("nav",{children:Object(l.jsx)("ul",{className:"pagination justify-content-center my-5",children:a.map((function(e){return Object(l.jsx)("li",{className:"page-item mx-1 cursor-pointer",children:Object(l.jsx)("a",{onClick:function(){return s(e)},className:"page-link bg-transparent cursor-pointer",children:e})},e)}))})})},P=function(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(!0),r=Object(u.a)(n,2),i=r[0],j=r[1],d=Object(s.useState)(""),o=Object(u.a)(d,2),b=o[0],h=o[1],p=Object(s.useState)(1),f=Object(u.a)(p,2),v=f[0],g=f[1],_=Object(s.useState)(10),N=Object(u.a)(_,1)[0],k=v*N,y=k-N,w=c.slice(y,k);return Object(s.useEffect)((function(){(function(){var e=Object(x.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m()("https://breakingbadapi.com/api/characters?name=".concat(b));case 2:t=e.sent,console.log(t.data),a(t.data),j(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[b]),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"searchbar",children:Object(l.jsx)(Q,{getQuery:function(e){return h(e)}})}),Object(l.jsx)("h1",{className:"text-center",children:"All Characters"}),Object(l.jsx)(C,{isLoaded:i,chars:w}),Object(l.jsx)(D,{postsPerPage:N,totalPosts:c.length,paginate:function(e){return g(e)}})]})},R=(c(70),c.p+"static/media/gun.5624eff7.png"),A=function(e){var t=e.loading,c=e.deaths;return t?Object(l.jsx)(v,{}):Object(l.jsx)("div",{className:"container my-5",children:Object(l.jsx)("div",{className:"row",children:c.map((function(e){return Object(l.jsx)("div",{className:"col-4",children:Object(l.jsx)("div",{class:" h-75 full-withradius-death mb-5 shrink",children:Object(l.jsx)(j.b,{to:"/deaths/".concat(e.death),children:Object(l.jsxs)("div",{class:"card-body",children:[Object(l.jsxs)("div",{class:"card-season",children:[" ",Object(l.jsx)("img",{src:R,height:"50",style:{borderRadius:50,marginTop:-7}})," "]}),Object(l.jsxs)("h4",{class:"card-title mb-4",children:[Object(l.jsx)("strong",{children:"Name:"})," ",e.death," "]}),Object(l.jsxs)("h6",{children:[" ",Object(l.jsx)("strong",{children:"Cause: "})," ",e.cause]}),Object(l.jsxs)("h6",{children:[Object(l.jsx)("strong",{children:"Responsible: "})," ",e.responsible]})]})})})})}))})})},T=function(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(!0),r=Object(u.a)(n,2),i=r[0],j=r[1];return Object(s.useEffect)((function(){(function(){var e=Object(x.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m()("https://breakingbadapi.com/api/deaths");case 2:t=e.sent,console.log(t.data),a(t.data),j(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"text-center p-3",children:"Deaths History"}),Object(l.jsx)(A,{loading:i,deaths:c})]})},L=c.p+"static/media/kill.89675a96.jpg",M=function(e){e.deaths;var t=Object(s.useState)([]),c=Object(u.a)(t,2),a=c[0],n=c[1],r=Object(s.useState)(!0),i=Object(u.a)(r,2),j=i[0],d=i[1],o=Object(b.f)().name;return Object(s.useEffect)((function(){(function(){var e=Object(x.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m()("https://breakingbadapi.com/api/deaths?name="+o);case 2:t=e.sent,console.log(t.data[0]),n(t.data[0]),d(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),j?Object(l.jsx)(v,{}):Object(l.jsx)("div",{children:Object(l.jsx)("section",{children:Object(l.jsxs)("div",{class:"container py-4 mb-3",children:[Object(l.jsx)("h1",{class:"h1 text-center mb-5",id:"pageHeaderTitle",children:"Death Details"}),Object(l.jsxs)("article",{class:"postcard light green",children:[Object(l.jsx)("a",{class:"postcard__img_link",children:Object(l.jsx)("img",{class:"postcard__img",src:L,alt:"Image Title"})}),Object(l.jsxs)("div",{class:"postcard__text",children:[Object(l.jsx)("h1",{class:"postcard__title green",children:Object(l.jsx)("a",{children:o})}),Object(l.jsx)("div",{class:"postcard__subtitle small",children:Object(l.jsxs)("time",{datetime:"2020-05-25 12:00:00",children:[Object(l.jsx)("i",{class:"fas fa-calendar-alt mr-2"}),"Cause: ",a.cause]})}),Object(l.jsx)("div",{class:"postcard__bar "}),Object(l.jsxs)("div",{class:"postcard__preview-txt",children:[" Last Words:  ",a.last_words]}),Object(l.jsxs)("div",{class:"postcard__preview-txt",children:[" Responsible:  ",a.responsible]}),Object(l.jsxs)("ul",{class:"postcard__tagbox",children:[Object(l.jsxs)("li",{class:"tag__item",children:[Object(l.jsx)("i",{class:"fas fa-tag mr-2"}),"Episode ",a.episode]}),Object(l.jsxs)("li",{class:"tag__item",children:[Object(l.jsx)("i",{class:"fas fa-clock mr-2"}),"Season ",a.season]}),Object(l.jsxs)("li",{class:"tag__item",children:[Object(l.jsx)("i",{class:"fas fa-clock mr-2"}),"No.of deaths ",a.number_of_deaths]})]})]})]})]})})})},H=c.p+"static/media/episode.ea5dfb8f.jpg",I=function(e){e.episodes;var t=Object(s.useState)([]),c=Object(u.a)(t,2),a=c[0],n=c[1],r=Object(s.useState)(!0),i=Object(u.a)(r,2),j=i[0],d=i[1],o=Object(b.f)().id;return Object(s.useEffect)((function(){(function(){var e=Object(x.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m()("https://breakingbadapi.com/api/episodes/"+o);case 2:t=e.sent,console.log(t.data[0]),n(t.data[0]),d(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),j?Object(l.jsx)(v,{}):Object(l.jsx)("div",{children:Object(l.jsx)("section",{children:Object(l.jsxs)("div",{class:"container pb-4 mb-5",children:[Object(l.jsx)("h1",{class:"h1 text-center",id:"pageHeaderTitle",children:"Episode Details"}),Object(l.jsxs)("article",{class:"postcard light red",children:[Object(l.jsx)("a",{class:"postcard__img_link",children:Object(l.jsx)("img",{class:"postcard__img",src:H,alt:"Image Title"})}),Object(l.jsxs)("div",{class:"postcard__text",children:[Object(l.jsx)("h1",{class:"postcard__title red",children:Object(l.jsx)("a",{children:a.title})}),Object(l.jsx)("div",{class:"postcard__subtitle small",children:Object(l.jsxs)("time",{datetime:"2020-05-25 12:00:00",children:[Object(l.jsx)("i",{class:"fas fa-calendar-alt mr-2"}),"Air Date: ",a.air_date]})}),Object(l.jsx)("div",{class:"postcard__bar"}),Object(l.jsx)("div",{class:"postcard__preview-txt",children:" Characters:"}),Object(l.jsx)("ul",{children:a.characters.map((function(e){return Object(l.jsxs)("li",{className:"list-unstyled",children:["-  ",e]})}))}),Object(l.jsxs)("ul",{class:"postcard__tagbox",children:[Object(l.jsxs)("li",{class:"tag__item",children:[Object(l.jsx)("i",{class:"fas fa-tag mr-2"}),"Episode ",a.episode]}),Object(l.jsxs)("li",{class:"tag__item",children:[Object(l.jsx)("i",{class:"fas fa-clock mr-2"}),"Season ",a.season]}),Object(l.jsxs)("li",{class:"tag__item play ",children:[Object(l.jsx)("i",{class:"fas fa-play mr-2"}),a.series]})]})]})]})]})})})},B=function(){return Object(l.jsxs)("div",{children:[Object(l.jsxs)(j.a,{children:[Object(l.jsx)(d,{}),Object(l.jsxs)(b.c,{children:[Object(l.jsx)(b.a,{exact:!0,path:"/",component:P}),Object(l.jsx)(b.a,{exact:!0,path:"/characters",component:P}),Object(l.jsx)(b.a,{exact:!0,path:"/quotes",component:S}),Object(l.jsx)(b.a,{exact:!0,path:"/episodes",component:q}),Object(l.jsx)(b.a,{exact:!0,path:"/episodes/:id",component:I}),Object(l.jsx)(b.a,{exact:!0,path:"/deaths",component:T}),Object(l.jsx)(b.a,{exact:!0,path:"/deaths/:name",component:M})]})]}),Object(l.jsx)(o,{})]})};c(71);r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(B,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.f5c77574.chunk.js.map