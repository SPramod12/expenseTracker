(this.webpackJsonpactivity_tracker=this.webpackJsonpactivity_tracker||[]).push([[0],{115:function(e,t,n){},116:function(e,t,n){},117:function(e,t,n){},125:function(e,t,n){},126:function(e,t,n){},141:function(e,t,n){},142:function(e,t,n){},143:function(e,t,n){},145:function(e,t,n){},147:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(23),s=n.n(i),r=(n(115),n(10)),o=(n(116),n(98)),l=n(33),j=n(15),d=n(193),x=n(198),b=(n(117),n(44)),u=(n(118),n(194)),m=n(192),O=n(203),h=n(189),p=n(196),g=n(1),f=function(e){var t=e.confirmedItems,n=Object(a.useState)(""),i=Object(r.a)(n,2),s=i[0],o=i[1],j=Object(a.useState)(""),f=Object(r.a)(j,2),v=f[0],y=f[1],S=c.a.useState(""),C=Object(r.a)(S,2),w=C[0],z=C[1],I=function(e){var t=e.target.value;"number"===e.target.type?y(t):"text"===e.target.type&&o(t)};return Object(g.jsxs)(p.a,{container:!0,className:"exBarContainer",children:[Object(g.jsxs)(p.a,{container:!0,spacing:1,children:[Object(g.jsx)(p.a,{item:!0,xl:3,md:3,xs:6,children:Object(g.jsx)(d.a,{size:"small",id:"outlined-basic",label:"Enter Item",variant:"outlined",onChange:I,value:s})}),Object(g.jsx)(p.a,{item:!0,xl:3,md:3,xs:6,children:Object(g.jsx)(d.a,{color:"error",size:"small",id:"outlined-basic",label:"Amount",variant:"outlined",type:"number",InputProps:{inputProps:{min:1}},onChange:I,value:v})}),Object(g.jsx)(p.a,{item:!0,xl:3,md:3,xs:6,children:Object(g.jsxs)(O.a,{size:"small",fullWidth:!0,color:"secondary",children:[Object(g.jsx)(u.a,{id:"demo-simple-select-label",children:"Category"}),Object(g.jsxs)(h.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:w,label:"category",onChange:function(e){z(e.target.value)},children:[Object(g.jsx)(m.a,{value:"Food",children:"Food"}),Object(g.jsx)(m.a,{value:"Transport",children:"Transport"}),Object(g.jsx)(m.a,{value:"Entertainment",children:"Entertainment"}),Object(g.jsx)(m.a,{value:"Utility",children:"Utility"})]})]})}),Object(g.jsx)(p.a,{item:!0,xl:2,md:3,xs:6,children:Object(g.jsx)(x.a,{onClick:function(){if(s&&v&&w){var e=new Date,n={};n.name=s,n.amount=parseInt(v)>0?parseInt(v):-1*parseInt(v),n.category=w,n.createdTime2=e,t(Object(l.a)({},n)),o(""),y(""),z("")}else a="Enter Item, Amount and Category",b.b.error(a);var a},children:"Add"})})]}),Object(g.jsx)(b.a,{position:"bottom-center",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})},v=(n(125),n(126),n(96)),y=n.n(v),S=n(64),C=n.n(S),w=n(62),z=n.n(w),I=n(63),B=n.n(I),N=function(e){var t=e.itemsOfSelectedDate,n=c.a.useState(new Date),a=Object(r.a)(n,2),i=a[0],s=a[1],o=c.a.useState(""),l=Object(r.a)(o,2),j=(l[0],l[1],c.a.useState(!1)),d=Object(r.a)(j,2),b=d[0],u=d[1];return Object(g.jsxs)(p.a,{container:!0,direction:"column",children:[Object(g.jsxs)(p.a,{item:!0,children:["Add to date: ",Object(g.jsx)(y.a,{onChange:s,value:i,maxDate:new Date,clearIcon:null,format:"dd-MM-y"})]}),Object(g.jsxs)("div",{className:"box1",children:[Object(g.jsx)(p.a,{container:!0,alignItems:"center",className:"borderBottom1",children:Object(g.jsx)(p.a,{item:!0,xl:6,md:6,xs:12,className:"padding0",children:Object(g.jsx)(p.a,{className:"marginB5",children:Object(g.jsxs)("span",{className:"expenseDate",children:[i&&(i.getDate()===(new Date).getDate()?"Todays":i.toDateString())," Expense",Object(g.jsx)(x.a,{size:"small",onClick:function(){u(!b)},children:b?Object(g.jsx)(z.a,{size:"small"}):Object(g.jsx)(B.a,{size:"small"})})]})})})}),b?Object(g.jsx)("div",{}):Object(g.jsx)(p.a,{container:!0,children:Object(g.jsxs)(p.a,{container:!0,direction:"column",wrap:"wrap",sx:{height:"35vh",overflowX:"auto",width:"100%",marginTop:"5px"},children:[0===t.length&&Object(g.jsx)(p.a,{children:"Add items to list here..."}),t&&t.length>0&&t.map((function(e,t){return Object(g.jsxs)(p.a,{item:!0,className:"itemBox",children:["".concat(t+1,". ").concat(e.name," ").concat(e.amount),Object(g.jsx)(x.a,{size:"small",sx:{borderRadius:"20px"},children:Object(g.jsx)(C.a,{})})," "]})}))]})}),Object(g.jsx)(p.a,{item:!0,sx:{margin:"0",marginRight:"10px",fontWeight:"500"},children:"Total Amount: ".concat(t.reduce((function(e,t){return e+t}),0))})]})]})},T=(n(141),function(e){var t=e.title,n=e.itemsList,c=void 0===n?[]:n,i=Object(a.useState)(!1),s=Object(r.a)(i,2),o=s[0],l=s[1],j=c.map((function(e){return e.amount}));return Object(g.jsxs)(p.a,{container:!0,className:"box2",sx:{marginTop:"10px"},children:[Object(g.jsxs)(p.a,{item:!0,xl:12,md:12,xs:12,sx:{fontWeight:"400",fontSize:"1.2em",borderBottom:"1px solid"},children:[t," ",Object(g.jsx)(x.a,{size:"small",onClick:function(){l(!o)},children:o?Object(g.jsx)(z.a,{size:"small"}):Object(g.jsx)(B.a,{size:"small"})})]}),o?Object(g.jsx)("div",{}):Object(g.jsxs)(p.a,{container:!0,direction:"column",wrap:"wrap",sx:{height:"25vh",overflowX:"auto",width:"100%",marginTop:"5px"},children:[0===c.length&&Object(g.jsx)(p.a,{children:"Add items to list here..."}),c&&c.length>0&&c.map((function(e,t){return Object(g.jsxs)(p.a,{item:!0,className:"itemBox",children:["".concat(t+1,". ").concat(e.description.toUpperCase()," ").concat(e.amount),Object(g.jsx)(x.a,{size:"small",sx:{borderRadius:"25px"},children:Object(g.jsx)(C.a,{})})," "]})}))]}),Object(g.jsxs)(p.a,{item:!0,sx:{fontWeight:"500"},children:["Total: ",j.reduce((function(e,t){return parseInt(e)+parseInt(t)}),0)]})]})}),R=function(e){var t=e.msgPopUp,n=e.dayExpenseList,c=Object(a.useState)(""),i=Object(r.a)(c,2),s=i[0],o=i[1],l=Object(a.useState)(""),b=Object(r.a)(l,2),f=b[0],v=b[1],y=Object(a.useState)(""),S=Object(r.a)(y,2),C=S[0],w=S[1],z=Object(a.useState)(""),I=Object(r.a)(z,2),B=I[0],N=I[1],R=Object(a.useState)([]),k=Object(r.a)(R,2),E=k[0],D=k[1],W=Object(a.useState)([]),q=Object(r.a)(W,2),A=q[0],L=q[1],P=Object(a.useState)([]),F=Object(r.a)(P,2),M=F[0],U=F[1],J=E.map((function(e){return e.amount})),X=A.map((function(e){return e.amount})),_=M.map((function(e){return e.amount}));return Object(g.jsxs)(p.a,{children:[Object(g.jsxs)(p.a,{container:!0,spacing:1,children:[Object(g.jsx)(p.a,{item:!0,xl:4,md:3,xs:6,children:Object(g.jsxs)(O.a,{size:"small",fullWidth:!0,color:"secondary",children:[Object(g.jsx)(u.a,{id:"demo-simple-select-label",children:"Type"}),Object(g.jsxs)(h.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:s,label:"type",onChange:function(e){o(e.target.value)},children:[Object(g.jsx)(m.a,{value:"income",children:"Income"}),Object(g.jsx)(m.a,{value:"bill",children:"Bill"}),Object(g.jsx)(m.a,{value:"other",children:"Other Expenses"})]})]})}),Object(g.jsx)(p.a,{item:!0,xl:3,md:3,xs:6,children:Object(g.jsx)(d.a,{size:"small",id:"outlined-basic",label:"Description",variant:"outlined",value:f,onChange:function(e){v(e.target.value)}})}),Object(g.jsx)(p.a,{item:!0,xl:3,md:3,xs:6,children:Object(g.jsx)(d.a,{color:"error",size:"small",id:"outlined-basic",label:"Amount",variant:"outlined",type:"number",onChange:function(e){w(e.target.value)},value:C,InputProps:{inputProps:{min:1}}})}),Object(g.jsx)(p.a,{item:!0,xl:2,md:3,xs:6,children:Object(g.jsx)(x.a,{onClick:function(){if(C&&f&&s){var e={type:s,amount:parseInt(C)>0?parseInt(C):-1*parseInt(C),description:f};"income"===s?D([].concat(Object(j.a)(E),[e])):"bill"===s?L([].concat(Object(j.a)(A),[e])):"other"===s&&U([].concat(Object(j.a)(M),[e])),o(""),v(""),w("")}else t.notifyError("Select type, description and amount")},children:"Add"})})]}),Object(g.jsxs)(p.a,{container:!0,alignContent:"center",sx:{marginTop:"10px"},children:[Object(g.jsx)(p.a,{item:!0,sx:{marginTop:"auto",marginBottom:"auto",marginRight:"10px"},children:"Add To Month:"}),Object(g.jsx)(p.a,{item:!0,xl:2,md:2,xs:4,children:Object(g.jsxs)(O.a,{size:"small",fullWidth:!0,children:[Object(g.jsx)(u.a,{id:"demo-simple-select-label",children:"Month"}),Object(g.jsxs)(h.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:B,label:"Month",onChange:function(e){N(e.target.value)},children:[Object(g.jsx)(m.a,{value:"oct",children:"Oct"}),Object(g.jsx)(m.a,{value:"nov",children:"Nov"})]})]})})]}),Object(g.jsx)(p.a,{children:Object(g.jsx)(T,{title:"Income",itemsList:E})}),Object(g.jsx)(p.a,{children:Object(g.jsx)(T,{title:"Bill",itemsList:A})}),Object(g.jsx)(p.a,{children:Object(g.jsx)(T,{title:"Others",itemsList:M})}),Object(g.jsxs)(p.a,{sx:{fontWeight:"600",marginTop:"10px"},children:["Balance: ",J.reduce((function(e,t){return e+t}),0)-X.reduce((function(e,t){return e+t}),0)-_.reduce((function(e,t){return e+t}),0)-n.reduce((function(e,t){return e+t}),0)]})]})},k=(n(142),function(e){var t=e.changeRoute;e.expenseTabChange,e.tab;return Object(g.jsxs)(p.a,{container:!0,justifyContent:"space-between",sx:{marginTop:"10px"},children:[Object(g.jsx)(p.a,{item:!0,sx:{marginBottom:"auto",marginTop:"auto",fontSize:"1.2em"},children:"Expense Tracker"}),Object(g.jsx)(p.a,{item:!0,children:Object(g.jsx)(x.a,{size:"small",color:"error",onClick:function(){return t("signin")},children:"Log Out"})})]})}),E=n(190),D=n(200),W=n(199),q=["children","value","index"],A=function(e){var t=e.changeRoute,n=Object(a.useState)([]),i=Object(r.a)(n,2),s=i[0],d=i[1],x=Object(a.useState)({}),u=Object(r.a)(x,2),m=u[0],O=u[1],h=Object(a.useState)("daily"),v=Object(r.a)(h,2),y=v[0],S=v[1],C=c.a.useState(0),w=Object(r.a)(C,2),z=w[0],I=w[1],B=function(e){return b.b.error(e)},T=function(e){return b.b.success(e)},A=s.map((function(e){return e.amount}));function L(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}function P(e){var t=e.children,n=e.value,a=e.index,c=Object(o.a)(e,q);return Object(g.jsx)("div",Object(l.a)(Object(l.a)({role:"tabpanel",hidden:n!==a,id:"simple-tabpanel-".concat(a),"aria-labelledby":"simple-tab-".concat(a)},c),{},{children:n===a&&Object(g.jsx)(W.a,{sx:{p:3},children:Object(g.jsx)("typography",{children:t})})}))}return Object(g.jsxs)(p.a,{sx:{marginBottom:"10px"},children:[Object(g.jsx)(k,{changeRoute:t,expenseTabChange:function(e){S(e)},tab:y}),Object(g.jsx)(p.a,{container:!0,justifyContent:"center",sx:{marginTop:"15px"},children:Object(g.jsxs)(p.a,{item:!0,xl:5,md:8,xs:12,className:"height100",sx:{padding:"3px",border:"1px black solid",borderRadius:"10px",boxShadow:"1px 1px",backgroundColor:"white"},children:[Object(g.jsxs)(E.a,{allowScrollButtonsMobile:!0,variant:"scrollable",size:"small",value:z,onChange:function(e,t){I(t)},"aria-label":"basic tabs example",children:[Object(g.jsx)(D.a,Object(l.a)({label:"Daily Expense"},L(0))),Object(g.jsx)(D.a,Object(l.a)({label:"Montly Expense"},L(1))),Object(g.jsx)(D.a,Object(l.a)({label:"Reports"},L(2)))]}),Object(g.jsxs)(P,{value:z,index:0,children:[Object(g.jsx)(f,{confirmedItems:function(e){void 0===m[e.name]?(d([].concat(Object(j.a)(s),[e])),T("Success")):B("Item already added");var t={};t[e.name]=1,O(Object(l.a)(Object(l.a)({},m),t))}}),Object(g.jsx)(N,{itemsOfSelectedDate:s})]}),Object(g.jsx)(P,{value:z,index:1,children:Object(g.jsx)(R,{msgPopUp:{notifyError:B,notifySucess:T},dayExpenseList:A})}),Object(g.jsx)(P,{value:z,index:2,children:"Reports"})]})})]})},L=(n(143),function(e){var t=e.changeRoute,n=Object(a.useState)(""),c=Object(r.a)(n,2),i=c[0],s=c[1],o=Object(a.useState)(""),l=Object(r.a)(o,2),j=l[0],d=l[1];return Object(g.jsx)(p.a,{container:!0,justifyContent:"center",children:Object(g.jsxs)(p.a,{item:!0,xl:4,xs:12,md:5,lg:4,sm:5,children:[Object(g.jsx)(p.a,{container:!0,justifyContent:"center",sx:{marginBottom:"15px"},children:Object(g.jsx)(p.a,{item:!0,sx:{fontSize:"25px",fontWeight:"600"},children:"Welcome to expense tracker"})}),Object(g.jsx)("form",{onSubmit:function(e){e.preventDefault(),console.log(i,j),t("sucess")},method:"get",children:Object(g.jsxs)(p.a,{container:!0,justifyContent:"center",direction:"column",className:"bg",sx:{padding:"8px",borderRadius:"15px",backgroundColor:"#f2f3f7",boxShadow:"1px 1px "},children:[Object(g.jsx)(p.a,{item:!0,sx:{textAlign:"center",fontSize:"25px",fontWeight:"600",marginBottom:"5px"},children:"Log In"}),Object(g.jsxs)(p.a,{item:!0,sx:{marginBottom:"5px"},children:[Object(g.jsx)("span",{style:{fontSize:"18px",fontWeight:"600"},children:"Email"}),Object(g.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter your email",required:"required",onChange:function(e){s(e.target.value)}})]}),Object(g.jsxs)(p.a,{item:!0,sx:{marginBottom:"5px"},children:[Object(g.jsx)("span",{style:{fontSize:"18px",fontWeight:"600"},children:" Password"}),Object(g.jsx)("input",{type:"password",className:"form-control",placeholder:"Enter your password",required:"required",onChange:function(e){d(e.target.value)}})]}),Object(g.jsx)(p.a,{item:!0,children:Object(g.jsx)("input",{type:"submit",name:"Log In",value:"Sign In"})}),Object(g.jsxs)(p.a,{item:!0,sx:{marginTop:"15px"},children:["New user?",Object(g.jsx)(x.a,{size:"small",onClick:function(){return t("register")},children:"Create an Account"})]})]})})]})})}),P=(n(144),n(145),function(e){var t=e.changeRoute,n=Object(a.useState)(""),c=Object(r.a)(n,2),i=(c[0],c[1],Object(a.useState)("")),s=Object(r.a)(i,2),o=(s[0],s[1],Object(a.useState)("")),l=Object(r.a)(o,2),j=(l[0],l[1],Object(a.useState)("")),d=Object(r.a)(j,2),b=(d[0],d[1],Object(a.useState)("")),u=Object(r.a)(b,2);u[0],u[1];return Object(g.jsx)(p.a,{container:!0,justifyContent:"center",children:Object(g.jsxs)(p.a,{item:!0,xl:4,xs:12,md:4,lg:4,sm:5,children:[Object(g.jsx)(p.a,{container:!0,justifyContent:"center",sx:{marginBottom:"15px"},children:Object(g.jsx)(p.a,{item:!0,sx:{fontSize:"25px",fontWeight:"600"},children:"Welcome to expense tracker"})}),Object(g.jsx)("form",{onSubmit:function(e){console.log(e),t("signin")},children:Object(g.jsxs)(p.a,{container:!0,justifyContent:"center",direction:"column",className:"bg",sx:{padding:"8px",borderRadius:"15px",backgroundColor:"#f2f3f7",boxShadow:"1px 1px "},children:[Object(g.jsx)(p.a,{item:!0,sx:{textAlign:"center",fontSize:"25px",fontWeight:"600",marginBottom:"5px"},children:"Register"}),Object(g.jsx)(p.a,{item:!0,sx:{marginBottom:"5px"},children:Object(g.jsxs)(p.a,{container:!0,justifyContent:"space-between",spacing:.5,children:[Object(g.jsx)(p.a,{item:!0,xl:5.5,xs:12,sm:5.5,children:Object(g.jsx)("input",{type:"text",className:"form-control",placeholder:"First Name",required:"required"})}),Object(g.jsx)(p.a,{item:!0,xl:5.5,xs:12,sm:5.5,children:Object(g.jsx)("input",{type:"text",className:"form-control",placeholder:"Last Name",required:"required"})})]})}),Object(g.jsx)(p.a,{item:!0,sx:{marginBottom:"5px"},children:Object(g.jsx)(p.a,{container:!0,justifyContent:"center",children:Object(g.jsx)(p.a,{item:!0,xl:12,xs:12,children:Object(g.jsx)("input",{type:"email",className:"form-control",placeholder:"Email",required:"required"})})})}),Object(g.jsx)(p.a,{item:!0,sx:{marginBottom:"5px"},children:Object(g.jsx)(p.a,{container:!0,justifyContent:"center",children:Object(g.jsx)(p.a,{item:!0,xl:12,xs:12,children:Object(g.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",required:"required"})})})}),Object(g.jsx)(p.a,{item:!0,sx:{marginBottom:"5px"},children:Object(g.jsx)(p.a,{container:!0,justifyContent:"center",children:Object(g.jsx)(p.a,{item:!0,xl:12,xs:12,children:Object(g.jsx)("input",{type:"Password",className:"form-control",placeholder:"Confirm Password",required:"required"})})})}),Object(g.jsx)(p.a,{item:!0,children:Object(g.jsx)("input",{type:"submit",name:"sign up",value:"Register Now"})}),Object(g.jsx)(p.a,{item:!0,sx:{marginTop:"15px"},children:Object(g.jsxs)(p.a,{container:!0,justifyContent:"center",children:["Already have an account?",Object(g.jsx)(x.a,{size:"small",onClick:function(){return t("signin")},children:"Sign in"})]})})]})})]})})});var F=function(){var e=Object(a.useState)("signin"),t=Object(r.a)(e,2),n=t[0],c=t[1],i=function(e){c(e)};return Object(g.jsx)("div",{className:"marginLR10",children:"signin"===n?Object(g.jsx)("div",{className:"wh100",children:Object(g.jsx)(L,{changeRoute:i})}):"register"===n?Object(g.jsx)(P,{changeRoute:i}):Object(g.jsx)("div",{children:Object(g.jsx)(A,{changeRoute:i})})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,204)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};s.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(F,{})}),document.getElementById("root")),M()}},[[147,1,2]]]);
//# sourceMappingURL=main.a334ef23.chunk.js.map