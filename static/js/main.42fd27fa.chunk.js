(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{20:function(e,t,n){e.exports={rating:"Navbar_rating__3MbzN",active:"Navbar_active__2B-b3"}},26:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),s=n(11),a=n.n(s),r=(n(26),n(2)),o=n(7),j=n.n(o),b=n(4),p=n(6),d="millionaire/bodyGame/GET_NETX_QUESTION",l="millionaire/bodyGame/RESET_SCORE",h="millionaire/bodyGame/TOGGLE_IS_ACTIVE",x={totalScore:0,i:0,questionBlock:{isActive:!0,questions:[{text:"\u0412\u043e\u043f\u0440\u043e\u0441 \u21161",score:1e3,answers:[{text:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 \u21161",isRight:!0},{text:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 \u21162",isRight:!1},{text:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 \u21163",isRight:!1},{text:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 \u21164",isRight:!1}]},{text:"\u0412\u043e\u043f\u0440\u043e\u0441 \u21162",score:5e3,answers:[{text:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 \u211621",isRight:!1},{text:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 \u211622",isRight:!0},{text:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 \u211623",isRight:!1},{text:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 \u211624",isRight:!1}]},{text:"\u0412\u043e\u043f\u0440\u043e\u0441 \u21163",score:1e4,answers:[{text:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 \u211631",isRight:!0},{text:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 \u211632",isRight:!1},{text:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 \u211633",isRight:!1},{text:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 \u211634",isRight:!1}]},{text:"\u0412\u043e\u043f\u0440\u043e\u0441 \u21164",score:1e4,answers:[{text:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 \u211641",isRight:!0},{text:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 \u211642",isRight:!1},{text:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 \u211643",isRight:!1},{text:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 \u211644",isRight:!1}]}]}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(p.a)(Object(p.a)({},e),{},{i:e.i+1,totalScore:e.totalScore+=e.questionBlock.questions[e.i].score});case l:return Object(p.a)(Object(p.a)({},e),{},{i:0,totalScore:0,questionBlock:Object(p.a)(Object(p.a)({},e.questionBlock),{},{isActive:!1})});case h:return Object(p.a)(Object(p.a)({},e),{},{questionBlock:Object(p.a)(Object(p.a)({},e.questionBlock),{},{isActive:!0})});default:return e}},u=n(1),_=function(e){var t=e.isRight,n=e.text;return Object(u.jsx)("button",{"data-answer":t,children:n})},g=function(){var e=Object(b.c)((function(e){return e.bodyGame.questionBlock.questions})),t=Object(b.c)((function(e){return e.bodyGame.i})),n=Object(b.b)(),c=function(e){"true"===e.target.dataset.answer?n({type:d}):n({type:l})};return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:e[t].text}),Object(u.jsx)("div",{onClick:function(e){return c(e)},children:e[t].answers.map((function(e){return Object(u.jsx)(_,{isRight:e.isRight,text:e.text})}))})]})},m=n(20),v=n.n(m),f=function(){var e=Object(b.c)((function(e){return e.bodyGame.totalScore}));return Object(u.jsxs)("div",{className:v.a.rating,children:[e,Object(u.jsx)("span",{children:"3000000"}),Object(u.jsx)("span",{children:"1500000"}),Object(u.jsx)("span",{children:"800000"}),Object(u.jsx)("span",{children:"400000"}),Object(u.jsx)("span",{children:"200000"}),Object(u.jsx)("span",{children:"100000"}),Object(u.jsx)("span",{children:"50000"}),Object(u.jsx)("span",{children:"25000"}),Object(u.jsx)("span",{children:"15000"}),Object(u.jsx)("span",{children:"10000"}),Object(u.jsx)("span",{children:"5000"}),Object(u.jsx)("span",{children:"3000"}),Object(u.jsx)("span",{children:"2000"}),Object(u.jsx)("span",{children:"1000"}),Object(u.jsx)("span",{children:"500"})]})},y=n(9),R=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(y.b,{to:"/game",children:"\u041d\u0430\u0447\u043d\u0435\u043c \u0438\u0433\u0440\u0443"})})},A=function(){var e=Object(b.b)();return Object(u.jsxs)("div",{children:["Game over",Object(u.jsx)("div",{onClick:function(){e({type:h})},children:"\u041f\u0440\u043e\u0434\u0443\u043b, \u043d\u0435\u0443\u0434\u0430\u0447\u043d\u0438\u043a!"})]})},k=function(e){var t=Object(b.c)((function(e){return e.bodyGame.questionBlock.isActive}));return Object(u.jsxs)("div",{className:j.a.app,children:[Object(u.jsx)("header",{className:j.a.app_header,children:"\u041a\u0442\u043e \u0445\u043e\u0447\u0435\u0442 \u0441\u0442\u0430\u0442\u044c react-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u043c?"}),Object(u.jsxs)("main",{className:j.a.app_main,children:[Object(u.jsx)("div",{className:j.a.nav,children:Object(u.jsx)(f,{})}),Object(u.jsx)("div",{className:j.a.body_game,children:Object(u.jsx)(r.a,{exact:!0,path:"/",component:function(){return Object(u.jsx)(R,{})}})}),t?Object(u.jsx)("div",{className:j.a.body_game,children:Object(u.jsx)(r.a,{path:"/game",component:function(){return Object(u.jsx)(g,{})}})}):Object(u.jsx)("div",{className:j.a.body_game,children:Object(u.jsx)(A,{})})]}),Object(u.jsx)("footer",{className:j.a.app_footer,children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))},G=n(18),S=(n(17),n(21),{totalScore:0}),q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;return t.type,e},B=Object(G.a)({bodyGame:O,navbar:q}),w=Object(G.b)(B);a.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(y.a,{children:Object(u.jsx)(b.a,{store:w,children:Object(u.jsx)(k,{})})})}),document.getElementById("root")),N()},7:function(e,t,n){e.exports={app:"App_app__2CsLU",app_header:"App_app_header__1c6Ak",app_main:"App_app_main__2WMHL",nav:"App_nav__1GqYr",body_game:"App_body_game__39Hsp",app_footer:"App_app_footer__2sBSk","App-logo-spin":"App_App-logo-spin__14T80"}}},[[34,1,2]]]);
//# sourceMappingURL=main.42fd27fa.chunk.js.map