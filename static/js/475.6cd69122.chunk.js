"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[475],{713:function(e,r,t){t.d(r,{Df:function(){return h},HO:function(){return f},Ku:function(){return d},Pg:function(){return p},fI:function(){return v}});var n=t(861),a=t(757),c=t.n(a),i=t(340),u="0254d5a3dced2c998ec5b5a910260705",o="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjU0ZDVhM2RjZWQyYzk5OGVjNWI1YTkxMDI2MDcwNSIsInN1YiI6IjY1YzIyNWZhZmM1ZjA2MDE2OGM1MWM0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1kpcuKWuntdsHi3r1Ec93wMxxOlDyIbChH1PpNf_-gY",s=i.Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:u,bearer:o}}),h=function(){var e=(0,n.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s.get("/trending/movie/day",{headers:{Authorization:"Bearer ".concat(o)}}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(e){var r={headers:{Authorization:"Bearer ".concat(o)},params:{query:e}};return s.get("/search/movie",r)},p=function(e){return s.get("/movie/".concat(e),{params:{api_key:u}},{headers:{Authorization:"Bearer ".concat(o)}})},d=function(e){return s.get("/movie/".concat(e,"/credits"),{params:{api_key:u},headers:{Authorization:"Bearer ".concat(o)}})},v=function(e){return s.get("/movie/".concat(e,"/reviews"),{params:{api_key:u}},{headers:{Authorization:"Bearer ".concat(o)}})}},475:function(e,r,t){t.r(r),t.d(r,{default:function(){return v}});var n=t(861),a=t(439),c=t(757),i=t.n(c),u=t(791),o=t(689),s=t(713),h=t(655),f="reviews_no_text_rev__rAX2v",p=t(184),d=function(){var e=(0,u.useState)([]),r=(0,a.Z)(e,2),t=r[0],c=r[1],d=(0,u.useState)(!1),v=(0,a.Z)(d,2),l=v[0],m=v[1],I=(0,u.useState)(null),x=(0,a.Z)(I,2),j=x[0],k=x[1],y=(0,o.UO)().movieId;return(0,u.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,(0,s.fI)(y);case 4:r=e.sent,c(r.data.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),k(e.t0.message);case 11:return e.prev=11,m(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[y]),l?(0,p.jsx)(h.Z,{}):j?(0,p.jsx)("p",{children:j}):(0,p.jsx)(p.Fragment,{children:t&&t.length>0?(0,p.jsx)("ol",{children:t.map((function(e){var r=e.id,t=e.author,n=e.content;return(0,p.jsxs)("li",{children:[(0,p.jsx)("p",{children:t}),(0,p.jsx)("p",{children:n})]},r)}))}):(0,p.jsx)("p",{className:f,children:"Sorry, no reviews available"})})},v=function(){var e=(0,o.UO)().movieId;return(0,p.jsx)(d,{movieId:e})}}}]);
//# sourceMappingURL=475.6cd69122.chunk.js.map