(this.webpackJsonpxopa=this.webpackJsonpxopa||[]).push([[0],{58:function(e,t,a){},77:function(e,t,a){},82:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var c=a(3),n=a(1),r=a.n(n),s=a(25),l=a.n(s),o=(a(77),a(8)),i=a(5),u=a(15),j=a(6),b=a(91),d=a(98),O=a(38);a(58);var h=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],s=a[1],l=Object(n.useState)(""),o=Object(i.a)(l,2),h=o[0],x=o[1],g=e.loggedIn,p=e.setLoggedIn;return Object(n.useEffect)((function(){localStorage.getItem("token")&&p(!0)}),[]),g?Object(c.jsx)(j.a,{to:"/dashboard"}):Object(c.jsx)("div",{children:Object(c.jsxs)(b.a,{className:"login-form",onSubmit:function(e){e.preventDefault();var t=(localStorage.getItem("users")?JSON.parse(localStorage.getItem("users")):[]).filter((function(e){return e.email===r}));1===t.length&&(t[0].email===r?t[0].password===h?(localStorage.setItem("token","asdadaklwlkdsfaksdf"),p(!0),localStorage.setItem("currentUser",r)):window.alert("Incorrect password"):window.alert("incorrect email"))},children:[Object(c.jsx)("img",{src:"data:image/png;base64,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",className:"avatar",alt:"avatar"}),Object(c.jsx)("h1",{className:"signInHeader",children:"Sign In"}),Object(c.jsx)(d.a,{className:"text-input",type:"email",labelText:"Email",placeholder:"Email",value:r,onChange:function(e){return s(e.target.value)}}),Object(c.jsx)(d.a,{className:"text-input",type:"password",required:!0,labelText:"Password",placeholder:"Password",value:h,onChange:function(e){return x(e.target.value)}}),Object(c.jsx)(O.a,{className:"submit-button",type:"submit",children:"Sign In"}),Object(c.jsx)(u.b,{className:"signup-link",to:"/register",children:"Sign Up"})]})})},x=a(34),g=localStorage.getItem("users")?JSON.parse(localStorage.getItem("users")):[];var p=function(e){var t=e.history,a=Object(n.useState)(g),r=Object(i.a)(a,2),s=r[0],l=r[1],o=Object(n.useState)(""),j=Object(i.a)(o,2),h=j[0],p=j[1],f=Object(n.useState)(""),m=Object(i.a)(f,2),S=m[0],A=m[1],v=Object(n.useState)(""),y=Object(i.a)(v,2),I=y[0],w=y[1],R=Object(n.useState)(!1),k=Object(i.a)(R,2),E=k[0],L=k[1];return Object(n.useEffect)((function(){E&&(localStorage.setItem("users",JSON.stringify(s)),t.push("/"))}),[s,t]),Object(c.jsxs)(b.a,{className:"signup-form",onSubmit:function(e){if(e.preventDefault(),s&&1===s.filter((function(e){return e.email===S})).length)window.alert("Email Already exists");else{var t={email:S,userName:h,password:I};l([].concat(Object(x.a)(s),[t])),L(!0)}p(""),A(""),w("")},children:[Object(c.jsx)("img",{src:"data:image/png;base64,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",className:"avatar",alt:"avatar"}),Object(c.jsx)("h1",{className:"registerHeader",children:"Sign Up"}),Object(c.jsx)(d.a,{required:!0,labelText:"User Name",type:"text",placeholder:"Username",value:h,onChange:function(e){return p(e.target.value)}}),Object(c.jsx)(d.a,{required:!0,labelText:"Email",type:"email",placeholder:"Email",value:S,onChange:function(e){return A(e.target.value)}}),Object(c.jsx)(d.a,{required:!0,labelText:"Password",type:"password",placeholder:"Password",value:I,onChange:function(e){return w(e.target.value)}}),Object(c.jsx)(O.a,{className:"submit-button",type:"submit",children:"Register"}),Object(c.jsx)(u.b,{className:"signup-link",to:"/",children:"Sign In"})]})},f=a(70);var m=function(e){var t=e.component,a=e.movies,r=Object(f.a)(e,["component","movies"]);return Object(n.useEffect)((function(){var e=localStorage.getItem("token"),t=r.setLoggedIn;e&&t(!0)}),[]),r.loggedIn?Object(c.jsx)(j.b,Object(o.a)(Object(o.a)({},r),{},{render:function(e){return Object(c.jsx)(t,Object(o.a)(Object(o.a)(Object(o.a)({},e),r),{},{movies:a}))}})):Object(c.jsx)(j.a,{to:"/"})},S=a(92),A=a(99),v=a(93),y=a(94),I=a(97),w=a(45),R=a(50),k=a(43),E=a(42),L=a(51),P=a(53),C=a(41),N=a(46),V=a(48),X=a(49),T=a(47),W=a(44),H=a(52),D=a(16),B=a(95),J=a(96),M=(a(82),[{key:"name",header:"Name"},{key:"email",header:"Email"},{key:"phone",header:"Phone"},{key:"city",header:"City"},{key:"country",header:"Country"}]);var Y=function(e){var t=e.history,a=e.setLoggedIn,r=Object(n.useState)([]),s=Object(i.a)(r,2),l=s[0],u=s[1],j=Object(n.useState)(M),h=Object(i.a)(j,2),g=h[0],p=(h[1],Object(n.useState)(null)),f=Object(i.a)(p,2),m=f[0],Y=f[1],U=Object(n.useState)(!1),Z=Object(i.a)(U,2),q=Z[0],K=Z[1],Q=Object(n.useState)(""),z=Object(i.a)(Q,2),F=z[0],G=z[1],$=Object(n.useState)(""),_=Object(i.a)($,2),ee=_[0],te=_[1],ae=Object(n.useState)(""),ce=Object(i.a)(ae,2),ne=ce[0],re=ce[1],se=Object(n.useState)(""),le=Object(i.a)(se,2),oe=le[0],ie=le[1],ue=Object(n.useState)(""),je=Object(i.a)(ue,2),be=je[0],de=je[1],Oe=Object(n.useState)(!0),he=Object(i.a)(Oe,2),xe=he[0],ge=he[1],pe=Object(n.useState)([]),fe=Object(i.a)(pe,2),me=fe[0],Se=fe[1],Ae=l.length;Object(n.useEffect)((function(){fetch("https://5fc37639e5c28f0016f54a7e.mockapi.io/info").then((function(e){return e.json()})).then((function(e){e.forEach((function(e){return e.id=parseInt(e.id)})),ge(!1),u(e)}))}),[]);var ve=function(e){var t=l;e.forEach((function(e){t=t.filter((function(t){return t.id!==e.id}))})),u(t)},ye=function(e){if(Y(e.target.value),m){var t=m.toLowerCase(),a=l.filter((function(e){return e.name.toLowerCase().includes(t)||e.email.toLowerCase().includes(t)||e.phone.toLowerCase().includes(t)||e.city.toLowerCase().includes(t)||e.country.toLowerCase().includes(t)}));Se(a)}else Se([])};return Object(c.jsxs)("div",{children:[Object(c.jsxs)(S.a,{"aria-label":"XOPA Platform Name",children:[Object(c.jsx)(A.a,{href:"#",prefix:"XOPA"}),Object(c.jsx)(v.a,{children:Object(c.jsx)(y.a,{"aria-label":"Log out",onClick:function(){localStorage.removeItem("token"),localStorage.removeItem("currentUser"),a(!1),t.push("/")},children:"LOG OUT"})})]}),xe?Object(c.jsx)(J.a,{small:!0}):Object(c.jsxs)("div",{className:"table",children:[Object(c.jsx)(I.a,{rows:m?me:l,headers:g,isSortable:!0,children:function(e){var t=e.rows,a=e.headers,n=e.getHeaderProps,r=e.getRowProps,s=e.getSelectionProps,l=e.getBatchActionProps,i=e.selectedRows,u=e.getTableProps;return Object(c.jsxs)(w.a,{title:"DataTable",children:[Object(c.jsxs)(R.a,{children:[Object(c.jsx)(k.a,Object(o.a)(Object(o.a)({},l()),{},{children:Object(c.jsx)(E.a,{tabIndex:l().shouldShowBatchActions?0:-1,onClick:function(){ve(i)},children:"Delete"})})),Object(c.jsxs)(L.a,{children:[Object(c.jsx)(P.a,{defaultExpanded:!0,tabIndex:l().shouldShowBatchActions?-1:0,onChange:function(e){return ye(e)}}),Object(c.jsx)(O.a,{tabIndex:l().shouldShowBatchActions?-1:0,onClick:function(e){return K(!0)},size:"small",kind:"primary",children:Object(c.jsx)("div",{className:"addButton",children:" Add new"})})]})]}),Object(c.jsxs)(C.a,Object(o.a)(Object(o.a)({},u()),{},{children:[Object(c.jsx)(N.a,{children:Object(c.jsxs)(V.a,{children:[Object(c.jsx)(X.a,Object(o.a)({},s())),a.map((function(e){return Object(c.jsx)(T.a,Object(o.a)(Object(o.a)({},n({header:e})),{},{children:e.header}))}))]})}),Object(c.jsx)(W.a,{children:t.map((function(e){return Object(c.jsxs)(V.a,Object(o.a)(Object(o.a)({},r({row:e})),{},{children:[Object(c.jsx)(H.a,Object(o.a)({},s({row:e}))),e.cells.map((function(e){return Object(c.jsx)(D.a,{className:"table-cell",children:e.value},e.id)}))]}))}))})]}))]})}}),Object(c.jsxs)(B.c,{open:q,onClose:function(){return K(!1)},size:"sm",passiveModal:!0,children:[Object(c.jsx)(B.b,{children:"Enter the Details"}),Object(c.jsx)(B.a,{children:Object(c.jsxs)(b.a,{className:"modal-form",onSubmit:function(e){e.preventDefault();var t={id:Ae+1,name:F,email:ee,phone:ne,city:oe,country:be};u([].concat(Object(x.a)(l),[t])),G(""),te(""),re(""),ie(""),de(""),K(!1)},children:[Object(c.jsx)(d.a,{required:!0,className:"text-input",type:"text",labelText:"Name",placeholder:"name",value:F,onChange:function(e){return G(e.target.value)}}),Object(c.jsx)(d.a,{required:!0,className:"text-input",type:"email",labelText:"Email",placeholder:"Email",value:ee,onChange:function(e){return te(e.target.value)}}),Object(c.jsx)(d.a,{required:!0,className:"text-input",type:"text",labelText:"Phone Number",placeholder:"phone number",value:ne,onChange:function(e){return re(e.target.value)}}),Object(c.jsx)(d.a,{required:!0,className:"text-input",type:"text",labelText:"City",placeholder:"city",value:oe,onChange:function(e){return ie(e.target.value)}}),Object(c.jsx)(d.a,{required:!0,className:"text-input",type:"text",labelText:"Country",placeholder:"country",value:be,onChange:function(e){return de(e.target.value)}}),Object(c.jsx)(O.a,{className:"submit-button",type:"submit",children:"Add Details"})]})})]})]})]})};var U=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(j.d,{children:[Object(c.jsx)(j.b,{exact:!0,path:"/",render:function(e){return Object(c.jsx)(h,{loggedIn:a,setLoggedIn:r})}}),Object(c.jsx)(j.b,{exact:!0,path:"/register",render:function(e){return Object(c.jsx)(p,Object(o.a)({},e))}}),Object(c.jsx)(m,{exact:!0,path:"/dashboard",component:Y,loggedIn:a,setLoggedIn:r})]})})},Z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,100)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};l.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(u.a,{children:Object(c.jsx)(U,{})})}),document.getElementById("root")),Z()}},[[85,1,2]]]);
//# sourceMappingURL=main.79769037.chunk.js.map