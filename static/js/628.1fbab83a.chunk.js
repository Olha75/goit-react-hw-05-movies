"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[628],{713:function(e,r,t){t.d(r,{Df:function(){return p},HO:function(){return f},Ku:function(){return d},Pg:function(){return h},fI:function(){return m}});var n=t(861),a=t(757),c=t.n(a),i=t(340),o="0254d5a3dced2c998ec5b5a910260705",u="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjU0ZDVhM2RjZWQyYzk5OGVjNWI1YTkxMDI2MDcwNSIsInN1YiI6IjY1YzIyNWZhZmM1ZjA2MDE2OGM1MWM0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1kpcuKWuntdsHi3r1Ec93wMxxOlDyIbChH1PpNf_-gY",s=i.Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:o,bearer:u}}),p=function(){var e=(0,n.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s.get("/trending/movie/day",{headers:{Authorization:"Bearer ".concat(u)}}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(e){var r={headers:{Authorization:"Bearer ".concat(u)},params:{query:e}};return s.get("/search/movie",r)},h=function(e){return s.get("/movie/".concat(e),{params:{api_key:o}},{headers:{Authorization:"Bearer ".concat(u)}})},d=function(e){return s.get("/movie/".concat(e,"/credits"),{params:{api_key:o},headers:{Authorization:"Bearer ".concat(u)}})},m=function(e){return s.get("/movie/".concat(e,"/reviews"),{params:{api_key:o}},{headers:{Authorization:"Bearer ".concat(u)}})}},628:function(e,r,t){t.r(r),t.d(r,{default:function(){return m}});var n=t(861),a=t(439),c=t(757),i=t.n(c),o=t(791),u=t(689),s=t(713),p=t(655),f=t(42),h=t(184),d=function(){var e=(0,o.useState)([]),r=(0,a.Z)(e,2),t=r[0],c=r[1],d=(0,o.useState)(!1),m=(0,a.Z)(d,2),l=m[0],v=m[1],I=(0,o.useState)(null),g=(0,a.Z)(I,2),x=g[0],j=g[1],k=(0,u.UO)().movieId;(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(!0),e.next=4,(0,s.Ku)(k);case 4:r=e.sent,c(r.data.cast),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),j(e.t0.message);case 11:return e.prev=11,v(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[k]);var y=t.map((function(e){var r=e.id,t=e.original_name,n=e.profile_path;return(0,h.jsxs)("li",{children:[(0,h.jsx)("img",{src:n?"https://image.tmdb.org/t/p/original".concat(n):f,alt:"poster"}),(0,h.jsx)("p",{children:t})]},r)})),Z=Boolean(t.length);return(0,h.jsxs)(h.Fragment,{children:[l&&(0,h.jsx)(p.Z,{}),x&&(0,h.jsx)("p",{children:x}),Z&&(0,h.jsx)("ol",{children:y})]})},m=function(){var e=(0,u.UO)().movieId;return(0,h.jsx)(d,{movieId:e})}},42:function(e,r,t){e.exports=t.p+"static/media/default_no_actor.23aa9232794120dcf0ba.jpg"}}]);
//# sourceMappingURL=628.1fbab83a.chunk.js.map