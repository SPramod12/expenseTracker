(this.webpackJsonpactivity_tracker=this.webpackJsonpactivity_tracker||[]).push([[0],{109:function(e,t,n){},110:function(e,t,n){},111:function(e,t,n){},119:function(e,t,n){},120:function(e,t,n){},135:function(e,t,n){},136:function(e,t,n){},137:function(e,t,n){},139:function(e,t,n){},141:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(21),s=n.n(i),r=(n(109),n(9)),o=(n(110),n(51)),l=n(15),j=n(181),d=n(185),x=(n(111),n(42)),u=(n(112),n(182)),m=n(179),b=n(188),O=n(177),h=n(180),p=n(1),g=function(e){var t=e.confirmedItems,n=Object(c.useState)(""),i=Object(r.a)(n,2),s=i[0],l=i[1],g=Object(c.useState)(""),f=Object(r.a)(g,2),v=f[0],y=f[1],C=a.a.useState(""),S=Object(r.a)(C,2),w=S[0],z=S[1],I=function(e){var t=e.target.value;"number"===e.target.type?y(t):"text"===e.target.type&&l(t)};return Object(p.jsxs)(h.a,{container:!0,className:"exBarContainer",children:[Object(p.jsxs)(h.a,{container:!0,spacing:1,children:[Object(p.jsx)(h.a,{item:!0,xl:3,md:3,xs:6,children:Object(p.jsx)(j.a,{focused:!0,size:"small",id:"outlined-basic",label:"Enter Item",variant:"outlined",onChange:I,value:s})}),Object(p.jsx)(h.a,{item:!0,xl:3,md:3,xs:6,children:Object(p.jsx)(j.a,{focused:!0,color:"error",size:"small",id:"outlined-basic",label:"Amount",variant:"outlined",type:"number",InputProps:{inputProps:{min:1}},onChange:I,value:v})}),Object(p.jsx)(h.a,{item:!0,xl:3,md:3,xs:6,children:Object(p.jsxs)(b.a,{focused:!0,size:"small",fullWidth:!0,color:"secondary",children:[Object(p.jsx)(u.a,{id:"demo-simple-select-label",children:"Category"}),Object(p.jsxs)(O.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:w,label:"category",onChange:function(e){z(e.target.value)},children:[Object(p.jsx)(m.a,{value:"Food",children:"Food"}),Object(p.jsx)(m.a,{value:"Transport",children:"Transport"}),Object(p.jsx)(m.a,{value:"Entertainment",children:"Entertainment"}),Object(p.jsx)(m.a,{value:"Utility",children:"Utility"})]})]})}),Object(p.jsx)(h.a,{item:!0,xl:2,md:3,xs:6,children:Object(p.jsx)(d.a,{onClick:function(){if(s&&v&&w){var e=new Date,n={};n.name=s,n.amount=parseInt(v)>0?parseInt(v):-1*parseInt(v),n.category=w,n.createdTime2=e,t(Object(o.a)({},n)),l(""),y(""),z("")}else c="Enter Item, Amount and Category",x.b.error(c);var c},children:"Add"})})]}),Object(p.jsx)(x.a,{position:"bottom-center",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})},f=(n(119),n(120),n(92)),v=n.n(f),y=n(62),C=n.n(y),S=n(60),w=n.n(S),z=n(61),I=n.n(z),B=function(e){var t=e.itemsOfSelectedDate,n=a.a.useState(new Date),c=Object(r.a)(n,2),i=c[0],s=c[1],o=a.a.useState(""),l=Object(r.a)(o,2),j=l[0],x=l[1],g=a.a.useState(!1),f=Object(r.a)(g,2),y=f[0],S=f[1],z=t.filter((function(e){return e.category.includes(j)})),B=z.map((function(e){return e.amount}));return Object(p.jsxs)(h.a,{container:!0,direction:"column",children:[Object(p.jsxs)(h.a,{item:!0,children:["Add to date: ",Object(p.jsx)(v.a,{onChange:s,value:i,maxDate:new Date,clearIcon:null,format:"dd-MM-y"})]}),Object(p.jsxs)("div",{className:"box1",children:[Object(p.jsxs)(h.a,{container:!0,alignItems:"center",className:"borderBottom1",children:[Object(p.jsx)(h.a,{item:!0,xl:6,md:6,xs:12,className:"padding0",children:Object(p.jsx)(h.a,{className:"marginB5",children:Object(p.jsxs)("span",{className:"expenseDate",children:[i&&(i.getDate()===(new Date).getDate()?"Todays":i.toDateString())," Expense",Object(p.jsx)(d.a,{size:"small",onClick:function(){S(!y)},children:y?Object(p.jsx)(w.a,{size:"small"}):Object(p.jsx)(I.a,{size:"small"})})]})})}),Object(p.jsx)(h.a,{item:!0,xl:3,md:3,xs:8,children:Object(p.jsxs)(b.a,{fullWidth:!0,size:"small",children:[Object(p.jsx)(u.a,{id:"demo-simple-select-label",children:"Category"}),Object(p.jsxs)(O.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:j,label:"category",onChange:function(e){x(e.target.value)},children:[Object(p.jsx)(m.a,{value:"Food",children:"Food"}),Object(p.jsx)(m.a,{value:"Transport",children:"Transport"}),Object(p.jsx)(m.a,{value:"Entertainment",children:"Entertainment"}),Object(p.jsx)(m.a,{value:"Utility",children:"Utility"})]})]})}),Object(p.jsx)(h.a,{item:!0,xl:3,md:3,xs:4,children:Object(p.jsx)(d.a,{onClick:function(){x("")},children:"Clear"})})]}),y?Object(p.jsx)("div",{}):Object(p.jsx)(h.a,{container:!0,children:Object(p.jsxs)(h.a,{container:!0,direction:"column",wrap:"wrap",sx:{height:"35vh",overflowX:"auto",width:"100%",marginTop:"5px"},children:[0===t.length&&Object(p.jsx)(h.a,{children:"Add items to list here..."}),t&&t.length>0&&z.map((function(e,t){return Object(p.jsxs)(h.a,{item:!0,className:"itemBox",children:["".concat(t+1,". ").concat(e.name," ").concat(e.amount),Object(p.jsx)(d.a,{size:"small",sx:{borderRadius:"20px"},children:Object(p.jsx)(C.a,{})})," "]})}))]})}),Object(p.jsx)(h.a,{item:!0,sx:{margin:"0",marginRight:"10px",fontWeight:"500"},children:"Total ".concat(j," Amount: ").concat(B.reduce((function(e,t){return e+t}),0))})]})]})},N=(n(135),function(e){var t=e.title,n=e.itemsList,a=void 0===n?[]:n,i=Object(c.useState)(!1),s=Object(r.a)(i,2),o=s[0],l=s[1],j=a.map((function(e){return e.amount}));return Object(p.jsxs)(h.a,{container:!0,className:"box2",sx:{marginTop:"10px"},children:[Object(p.jsxs)(h.a,{item:!0,xl:12,md:12,xs:12,sx:{fontWeight:"400",fontSize:"1.2em",borderBottom:"1px solid"},children:[t," ",Object(p.jsx)(d.a,{size:"small",onClick:function(){l(!o)},children:o?Object(p.jsx)(w.a,{size:"small"}):Object(p.jsx)(I.a,{size:"small"})})]}),o?Object(p.jsx)("div",{}):Object(p.jsxs)(h.a,{container:!0,direction:"column",wrap:"wrap",sx:{height:"25vh",overflowX:"auto",width:"100%",marginTop:"5px"},children:[0===a.length&&Object(p.jsx)(h.a,{children:"Add items to list here..."}),a&&a.length>0&&a.map((function(e,t){return Object(p.jsxs)(h.a,{item:!0,className:"itemBox",children:["".concat(t+1,". ").concat(e.description.toUpperCase()," ").concat(e.amount),Object(p.jsx)(d.a,{size:"small",sx:{borderRadius:"25px"},children:Object(p.jsx)(C.a,{})})," "]})}))]}),Object(p.jsxs)(h.a,{item:!0,sx:{fontWeight:"500"},children:["Total: ",j.reduce((function(e,t){return parseInt(e)+parseInt(t)}),0)]})]})}),T=function(e){var t=e.msgPopUp,n=e.dayExpenseList,a=Object(c.useState)(""),i=Object(r.a)(a,2),s=i[0],o=i[1],x=Object(c.useState)(""),g=Object(r.a)(x,2),f=g[0],v=g[1],y=Object(c.useState)(""),C=Object(r.a)(y,2),S=C[0],w=C[1],z=Object(c.useState)(""),I=Object(r.a)(z,2),B=I[0],T=I[1],k=Object(c.useState)([]),E=Object(r.a)(k,2),R=E[0],W=E[1],D=Object(c.useState)([]),q=Object(r.a)(D,2),A=q[0],L=q[1],P=Object(c.useState)([]),F=Object(r.a)(P,2),M=F[0],U=F[1],J=R.map((function(e){return e.amount})),X=A.map((function(e){return e.amount})),_=M.map((function(e){return e.amount}));return Object(p.jsxs)(h.a,{children:[Object(p.jsx)(h.a,{sx:{fontWeight:"600",fontSize:"1.4em"},children:"Monthly income and expense"}),Object(p.jsxs)(h.a,{container:!0,spacing:1,sx:{marginTop:"10px"},children:[Object(p.jsx)(h.a,{item:!0,xl:4,md:3,xs:6,children:Object(p.jsxs)(b.a,{focused:!0,size:"small",fullWidth:!0,color:"secondary",children:[Object(p.jsx)(u.a,{id:"demo-simple-select-label",children:"Type"}),Object(p.jsxs)(O.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:s,label:"type",onChange:function(e){o(e.target.value)},children:[Object(p.jsx)(m.a,{value:"income",children:"Income"}),Object(p.jsx)(m.a,{value:"bill",children:"Bill"}),Object(p.jsx)(m.a,{value:"other",children:"Other Expenses"})]})]})}),Object(p.jsx)(h.a,{item:!0,xl:3,md:3,xs:6,children:Object(p.jsx)(j.a,{focused:!0,size:"small",id:"outlined-basic",label:"Description",variant:"outlined",value:f,onChange:function(e){v(e.target.value)}})}),Object(p.jsx)(h.a,{item:!0,xl:3,md:3,xs:6,children:Object(p.jsx)(j.a,{focused:!0,color:"error",size:"small",id:"outlined-basic",label:"Amount",variant:"outlined",type:"number",onChange:function(e){w(e.target.value)},value:S,InputProps:{inputProps:{min:1}}})}),Object(p.jsx)(h.a,{item:!0,xl:2,md:3,xs:6,children:Object(p.jsx)(d.a,{onClick:function(){if(S&&f&&s){var e={type:s,amount:parseInt(S)>0?parseInt(S):-1*parseInt(S),description:f};"income"===s?W([].concat(Object(l.a)(R),[e])):"bill"===s?L([].concat(Object(l.a)(A),[e])):"other"===s&&U([].concat(Object(l.a)(M),[e])),o(""),v(""),w("")}else t.notifyError("Select type, description and amount")},children:"Add"})})]}),Object(p.jsxs)(h.a,{container:!0,alignContent:"center",sx:{marginTop:"10px"},children:[Object(p.jsx)(h.a,{item:!0,sx:{marginTop:"auto",marginBottom:"auto",marginRight:"10px"},children:"Add To Month:"}),Object(p.jsx)(h.a,{item:!0,xl:2,md:2,xs:2,children:Object(p.jsxs)(b.a,{size:"small",fullWidth:!0,children:[Object(p.jsx)(u.a,{id:"demo-simple-select-label",children:"Month"}),Object(p.jsxs)(O.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:B,label:"Month",onChange:function(e){T(e.target.value)},children:[Object(p.jsx)(m.a,{value:"oct",children:"Oct"}),Object(p.jsx)(m.a,{value:"nov",children:"Nov"})]})]})})]}),Object(p.jsx)(h.a,{children:Object(p.jsx)(N,{title:"Income",itemsList:R})}),Object(p.jsx)(h.a,{children:Object(p.jsx)(N,{title:"Bill",itemsList:A})}),Object(p.jsx)(h.a,{children:Object(p.jsx)(N,{title:"Others",itemsList:M})}),Object(p.jsxs)(h.a,{sx:{fontWeight:"600",marginTop:"10px"},children:["Balance: ",J.reduce((function(e,t){return e+t}),0)-X.reduce((function(e,t){return e+t}),0)-_.reduce((function(e,t){return e+t}),0)-n.reduce((function(e,t){return e+t}),0)]})]})},k=(n(136),function(e){var t=e.changeRoute;return Object(p.jsxs)(h.a,{container:!0,justifyContent:"space-between",children:[Object(p.jsx)(h.a,{item:!0,sx:{marginBottom:"auto",marginTop:"auto",fontSize:"1.2em"},children:"Expense Tracker"}),Object(p.jsx)(h.a,{item:!0,children:Object(p.jsx)(d.a,{size:"medium",color:"error",onClick:function(){return t("signin")},children:"Log Out"})})]})}),E=function(e){var t=e.changeRoute,n=Object(c.useState)([]),a=Object(r.a)(n,2),i=a[0],s=a[1],j=Object(c.useState)({}),d=Object(r.a)(j,2),u=d[0],m=d[1],b=function(e){return x.b.error(e)},O=function(e){return x.b.success(e)},f=i.map((function(e){return e.amount}));return Object(p.jsxs)(h.a,{sx:{marginBottom:"10px"},children:[Object(p.jsx)(k,{changeRoute:t}),Object(p.jsx)(h.a,{container:!0,justifyContent:"center",sx:{marginTop:"15px"},children:Object(p.jsxs)(h.a,{item:!0,xl:5,md:8,xs:12,className:"height100",sx:{padding:"3px",border:"1px black solid",borderRadius:"10px",boxShadow:"1px 1px",backgroundColor:"white"},children:[Object(p.jsx)(h.a,{sx:{marginBottom:"15px",fontWeight:"500",fontSize:"1.2em"},children:"Daily Expense"}),Object(p.jsx)(g,{confirmedItems:function(e){void 0===u[e.name]?(s([].concat(Object(l.a)(i),[e])),O("Success")):b("Item already added");var t={};t[e.name]=1,m(Object(o.a)(Object(o.a)({},u),t))}}),Object(p.jsx)(B,{itemsOfSelectedDate:i})]})}),Object(p.jsx)(h.a,{container:!0,justifyContent:"center",sx:{marginTop:"15px"},children:Object(p.jsx)(h.a,{item:!0,xl:5,md:8,xs:12,sx:{padding:"3px",border:"1px black solid",borderRadius:"10px",boxShadow:"1px 1px",backgroundColor:"white"},children:Object(p.jsx)(T,{msgPopUp:{notifyError:b,notifySucess:O},dayExpenseList:f})})})]})},R=(n(137),function(e){var t=e.changeRoute,n=Object(c.useState)(""),a=Object(r.a)(n,2),i=a[0],s=a[1],o=Object(c.useState)(""),l=Object(r.a)(o,2),j=l[0],x=l[1];return Object(p.jsx)(h.a,{container:!0,justifyContent:"center",children:Object(p.jsxs)(h.a,{item:!0,xl:4,xs:12,md:5,lg:4,sm:5,children:[Object(p.jsx)(h.a,{container:!0,justifyContent:"center",sx:{marginBottom:"15px"},children:Object(p.jsx)(h.a,{item:!0,sx:{fontSize:"25px",fontWeight:"600"},children:"Welcome to expense tracker"})}),Object(p.jsx)("form",{onSubmit:function(e){e.preventDefault(),console.log(i,j),t("sucess")},method:"get",children:Object(p.jsxs)(h.a,{container:!0,justifyContent:"center",direction:"column",className:"bg",sx:{padding:"8px",borderRadius:"15px",backgroundColor:"#f2f3f7",boxShadow:"1px 1px "},children:[Object(p.jsx)(h.a,{item:!0,sx:{textAlign:"center",fontSize:"25px",fontWeight:"600",marginBottom:"5px"},children:"Log In"}),Object(p.jsxs)(h.a,{item:!0,sx:{marginBottom:"5px"},children:[Object(p.jsx)("span",{style:{fontSize:"18px",fontWeight:"600"},children:"Email"}),Object(p.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter your email",required:"required",onChange:function(e){s(e.target.value)}})]}),Object(p.jsxs)(h.a,{item:!0,sx:{marginBottom:"5px"},children:[Object(p.jsx)("span",{style:{fontSize:"18px",fontWeight:"600"},children:" Password"}),Object(p.jsx)("input",{type:"password",className:"form-control",placeholder:"Enter your password",required:"required",onChange:function(e){x(e.target.value)}})]}),Object(p.jsx)(h.a,{item:!0,children:Object(p.jsx)("input",{type:"submit",name:"Log In",value:"Sign In"})}),Object(p.jsxs)(h.a,{item:!0,sx:{marginTop:"15px"},children:["New user?",Object(p.jsx)(d.a,{size:"small",onClick:function(){return t("register")},children:"Create an Account"})]})]})})]})})}),W=(n(138),n(139),function(e){var t=e.changeRoute,n=Object(c.useState)(""),a=Object(r.a)(n,2),i=(a[0],a[1],Object(c.useState)("")),s=Object(r.a)(i,2),o=(s[0],s[1],Object(c.useState)("")),l=Object(r.a)(o,2),j=(l[0],l[1],Object(c.useState)("")),x=Object(r.a)(j,2),u=(x[0],x[1],Object(c.useState)("")),m=Object(r.a)(u,2);m[0],m[1];return Object(p.jsx)(h.a,{container:!0,justifyContent:"center",children:Object(p.jsxs)(h.a,{item:!0,xl:4,xs:12,md:4,lg:4,sm:5,children:[Object(p.jsx)(h.a,{container:!0,justifyContent:"center",sx:{marginBottom:"15px"},children:Object(p.jsx)(h.a,{item:!0,sx:{fontSize:"25px",fontWeight:"600"},children:"Welcome to expense tracker"})}),Object(p.jsx)("form",{onSubmit:function(e){console.log(e),t("signin")},children:Object(p.jsxs)(h.a,{container:!0,justifyContent:"center",direction:"column",className:"bg",sx:{padding:"8px",borderRadius:"15px",backgroundColor:"#f2f3f7",boxShadow:"1px 1px "},children:[Object(p.jsx)(h.a,{item:!0,sx:{textAlign:"center",fontSize:"25px",fontWeight:"600",marginBottom:"5px"},children:"Register"}),Object(p.jsx)(h.a,{item:!0,sx:{marginBottom:"5px"},children:Object(p.jsxs)(h.a,{container:!0,justifyContent:"space-between",children:[Object(p.jsx)(h.a,{item:!0,xl:5.5,xs:12,sm:5.5,children:Object(p.jsx)("input",{type:"text",className:"form-control",placeholder:"First Name",required:"required"})}),Object(p.jsx)(h.a,{item:!0,xl:5.5,xs:12,sm:5.5,children:Object(p.jsx)("input",{type:"text",className:"form-control",placeholder:"Last Name",required:"required"})})]})}),Object(p.jsx)(h.a,{item:!0,sx:{marginBottom:"5px"},children:Object(p.jsx)(h.a,{container:!0,justifyContent:"center",children:Object(p.jsx)(h.a,{item:!0,xl:12,xs:12,children:Object(p.jsx)("input",{type:"email",className:"form-control",placeholder:"Email",required:"required"})})})}),Object(p.jsx)(h.a,{item:!0,sx:{marginBottom:"5px"},children:Object(p.jsx)(h.a,{container:!0,justifyContent:"center",children:Object(p.jsx)(h.a,{item:!0,xl:12,xs:12,children:Object(p.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",required:"required"})})})}),Object(p.jsx)(h.a,{item:!0,sx:{marginBottom:"5px"},children:Object(p.jsx)(h.a,{container:!0,justifyContent:"center",children:Object(p.jsx)(h.a,{item:!0,xl:12,xs:12,children:Object(p.jsx)("input",{type:"Password",className:"form-control",placeholder:"Confirm Password",required:"required"})})})}),Object(p.jsx)(h.a,{item:!0,children:Object(p.jsx)("input",{type:"submit",name:"sign up",value:"Register Now"})}),Object(p.jsx)(h.a,{item:!0,sx:{marginTop:"15px"},children:Object(p.jsxs)(h.a,{container:!0,justifyContent:"center",children:["Already have an account?",Object(p.jsx)(d.a,{size:"small",onClick:function(){return t("signin")},children:"Sign in"})]})})]})})]})})});var D=function(){var e=Object(c.useState)("signin"),t=Object(r.a)(e,2),n=t[0],a=t[1],i=function(e){a(e)};return Object(p.jsx)("div",{className:"marginLR10",children:"signin"===n?Object(p.jsx)("div",{className:"wh100",children:Object(p.jsx)(R,{changeRoute:i})}):"register"===n?Object(p.jsx)(W,{changeRoute:i}):Object(p.jsx)("div",{children:Object(p.jsx)(E,{changeRoute:i})})})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,189)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(D,{})}),document.getElementById("root")),q()}},[[141,1,2]]]);
//# sourceMappingURL=main.dbe0c42c.chunk.js.map