(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{27:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),s=n(3),o=n.n(s),a=n(6),i=n(2),u=n(14),h=(n(27),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),s(e),o(e)}))}),d=(n(28),"CHANGE_SEARCHFIELD"),b="REQUEST_ROBOTS_PENDING",l="REQUEST_ROBOTS_SUCCESS",j="REQUEST_ROBOTS_FAILED",f={searchfield:""},O={isPending:!1,robots:[],error:""},p=n(1),g=function(e){var t=e.name,n=e.email,r=e.id;return Object(p.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(p.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?200x200")}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:t}),Object(p.jsx)("p",{children:n})]})]})},v=function(e){var t=e.robots;return Object(p.jsx)("div",{children:t.map((function(e,n){return Object(p.jsx)(g,{id:t[n].id,name:t[n].name,email:t[n].email},t[n].id)}))})},x=function(e){e.searchfield;var t=e.searchChange;return Object(p.jsx)("div",{className:"pa2",style:{boxShadow:"0 15px 15px #222",position:"relative",zIndex:"1"},children:Object(p.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},m=function(e){return Object(p.jsx)("div",{style:{overflowY:"scroll",height:"800px"},children:e.children})},y=n(4),C=n(5),R=n(8),E=n(7),S=function(e){Object(R.a)(n,e);var t=Object(E.a)(n);function n(e){var r;return Object(y.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(C.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(p.jsx)("h1",{children:"Oops. That is not good."}):this.props.children}}]),n}(r.Component),w=function(e){Object(R.a)(n,e);var t=Object(E.a)(n);function n(){return Object(y.a)(this,n),t.apply(this,arguments)}return Object(C.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return Object(p.jsx)("h1",{className:"f1",children:"RoboFriends"})}}]),n}(r.Component);n(30);var P=Object(a.b)((function(e){return{searchfield:e.searchRobots.searchfield,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,{type:d,payload:n}));var n},onRequestRobots:function(){return e((function(e){e({type:b}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:l,payload:t})})).catch((function(t){return e({type:j,payload:t})}))}))}}}))((function(e){var t=e.searchfield,n=e.onSearchChange,c=e.onRequestRobots,s=e.robots,o=e.isPending;Object(r.useEffect)((function(){c()}),[]);var a=s.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o?Object(p.jsxs)("div",{className:"tc",children:[Object(p.jsx)(w,{}),Object(p.jsx)("h1",{children:"Loading..."})]}):Object(p.jsxs)("div",{className:"tc",children:[Object(p.jsx)(w,{}),Object(p.jsx)(x,{searchChange:n}),Object(p.jsx)(m,{children:Object(p.jsx)(S,{children:Object(p.jsx)(v,{robots:a})})})]})})),N=Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case d:return Object.assign({},e,{searchfield:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case b:return Object.assign({},e,{isPending:!0});case l:return Object.assign({},e,{robots:t.payload,isPending:!1});case j:return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),T=Object(i.d)(N,Object(i.a)(u.a));o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(a.a,{store:T,children:Object(p.jsx)(P,{})})}),document.getElementById("root")),h()}},[[31,1,2]]]);
//# sourceMappingURL=main.9240e151.chunk.js.map