import{r as d,j as e,S as m,I as i,B as p,p as g}from"./index-DdUfxt9W.js";import{I as f}from"./Image-DakDVUR5.js";import{L as b}from"./Logo-DHxTRVRw.js";import{B as j,j as t,l,p as n}from"./TextField-C875XOC0.js";import{T as c}from"./Typography-D5CNxnbc.js";import{D as y,a as v,I as w}from"./InputAdornment-CKRYrQ2V.js";import{F as C,C as I}from"./FormControlLabel-BmHjUCqt.js";const E=()=>{const[o,u]=d.useState({name:"",email:"",username:"",password:""}),[s,x]=d.useState(!1),a=r=>{u({...o,[r.target.name]:r.target.value})},h=r=>{r.preventDefault(),console.log(o)};return e.jsxs(m,{mx:"auto",direction:"column",alignItems:"center",width:1,maxWidth:450,children:[e.jsx(j,{LinkComponent:t,href:"/",sx:{mt:6},disableRipple:!0,children:e.jsx(f,{src:b,alt:"logo",height:256,width:256})}),e.jsx(c,{mt:4,variant:"h2",fontWeight:600,children:"Sign Up"}),e.jsxs(m,{mt:6,spacing:2.5,width:1,children:[e.jsx(l,{variant:"contained",color:"secondary",size:"large",fullWidth:!0,startIcon:e.jsx(i,{icon:"logos:google-icon"}),sx:{bgcolor:"info.main","&:hover":{bgcolor:"info.main"}},children:"Google"}),e.jsx(l,{variant:"contained",color:"secondary",fullWidth:!0,startIcon:e.jsx(i,{icon:"mage:facebook",color:"secondary.dark",sx:{mr:-.75}}),sx:{bgcolor:"info.main","&:hover":{bgcolor:"info.main"}},children:"Facebook"})]}),e.jsx(y,{sx:{my:4.5},children:"Or"}),e.jsxs(p,{component:"form",onSubmit:h,children:[e.jsx(n,{id:"name",name:"name",type:"text",color:"secondary",label:"Full Name",value:o.name,onChange:a,variant:"filled",placeholder:"Ex- Jhon Doe",autoComplete:"email",sx:{mt:3},fullWidth:!0,autoFocus:!0,required:!0}),e.jsx(n,{id:"email",name:"email",type:"email",color:"secondary",label:"Email Address",value:o.email,onChange:a,variant:"filled",placeholder:"mail@example.com",autoComplete:"email",sx:{mt:6},fullWidth:!0,required:!0}),e.jsx(n,{id:"username",name:"username",type:"text",color:"secondary",label:"Username",value:o.username,onChange:a,variant:"filled",placeholder:"hello123",autoComplete:"email",sx:{mt:6},fullWidth:!0,required:!0}),e.jsx(n,{id:"password",name:"password",label:"Password",color:"secondary",type:s?"text":"password",value:o.password,onChange:a,variant:"filled",placeholder:"Min. 8 characters",autoComplete:"current-password",sx:{mt:6},fullWidth:!0,required:!0,InputProps:{endAdornment:e.jsx(v,{position:"end",sx:{opacity:o.password?1:0,pointerEvents:o.password?"auto":"none"},children:e.jsx(w,{size:"small","aria-label":"toggle password visibility",onClick:()=>x(!s),sx:{border:"none",bgcolor:"transparent !important"},edge:"end",children:e.jsx(i,{icon:s?"mdi:visibility":"mdi:visibility-off",color:"neutral.main"})})})}}),e.jsx(C,{control:e.jsx(I,{id:"checkbox",name:"checkbox",size:"large",color:"primary"}),label:e.jsxs(c,{variant:"body1",children:["By creating an account you agree to the"," ",e.jsx(t,{href:"#!",sx:{textDecoration:"underline"},children:"terms of use"})," ","and our"," ",e.jsx(t,{href:"#!",sx:{textDecoration:"underline"},children:"privacy policy"}),"."]}),sx:{mt:2.75,ml:-.75,alignItems:"flex-start","& .MuiCheckbox-root":{mt:-.75}}}),e.jsx(l,{type:"submit",variant:"contained",color:"success",size:"large",sx:{mt:3},fullWidth:!0,children:"Create account"})]}),e.jsxs(c,{mt:4,pb:12,variant:"body2",textAlign:{xs:"center",md:"left"},letterSpacing:.25,children:["Already have an account?"," ",e.jsx(t,{href:g.signin,color:"green",fontWeight:600,children:"Sign in"})]})]})};export{E as default};
