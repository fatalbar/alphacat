(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[330],{12539:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/room-password",function(){return o(63169)}])},90400:function(e,n,o){"use strict";o.d(n,{p:function(){return O}});var r,a,t=o(85893),s=o(67294),i=o(5152),l=o.n(i),u=o(11163),_=o(82175),c=o(42138),d=o(61802),m=o(38734),p=o(32819),w=o(25169),S=o(84498),E=o(85528),M=o(16310);(r=a||(a={})).name="name",r.password="password";let h=()=>M.Ry({[a.name]:M.Z_().test(a.name,"Invalid name entered",e=>{var n;return!!(e&&(null===(n=e.trim())||void 0===n?void 0:n.length))}).required("Required").max((0,E.i)().MAX_USER_NAME_SYMBOLS,"Must be less than ".concat((0,E.i)().MAX_USER_NAME_SYMBOLS," characters")),[a.password]:M.Z_().test(a.password,"Invalid password entered",e=>{var n;return!!(e&&(null===(n=e.trim())||void 0===n?void 0:n.length))}).required("Required")}),C={[a.name]:"",[a.password]:""};var N=o(78024),R=o.n(N);let b=(0,E.i)(),f=(0,s.memo)(e=>{let{onCreateRoom:n}=e,{error:o}=(0,S.Z)(),[r,i]=(0,s.useState)(!1),[l,u]=(0,s.useState)(!1),E=(0,s.useMemo)(()=>h(),[]),M=(0,s.useRef)(null),N=(0,s.useCallback)(()=>{M.current&&M.current.handleSubmit()},[]),f=(0,s.useCallback)(async e=>{try{u(!0);let{password:o="",name:r}=e||{};if(!o)throw Error("password required");if(!r)throw Error("name required");let a=await (0,p.pR)(o,r),{error:t}=await a.json();if(a.ok&&!t)null==n||n();else throw Error(t||"Unknown error")}catch(e){o((null==e?void 0:e.message)||"Unknown error")}finally{u(!1)}},[o,n]),v=(0,s.useCallback)(()=>{i(!0),N()},[N]),A=(0,s.useCallback)(e=>e.preventDefault(),[]);return(0,t.jsx)(_.J9,{innerRef:M,validateOnChange:r,validateOnBlur:r,initialValues:C,onSubmit:f,enableReinitialize:!0,validationSchema:E,children:(0,t.jsx)("form",{onSubmit:A,children:(0,t.jsxs)(c.x,{direction:"column",children:[l&&(0,t.jsx)(w.$,{fullscreen:!0}),(0,t.jsx)(c.x,{className:R().title,children:"Join Chat Room"}),(0,t.jsxs)(c.x,{direction:"column",className:R().wrapComponent,children:[(0,t.jsx)(m.F,{autoFocus:!0,placeholder:"User name",label:"User Name",showCounter:!0,isValidateRange:!0,max:b.MAX_USER_NAME_SYMBOLS,name:a.name,classNameWrap:R().inputWrap}),(0,t.jsx)(m.F,{placeholder:"Password",classNameWrap:R().inputWrapPassword,label:"Password",name:a.password,type:"text"})]}),(0,t.jsx)(d.z,{onClick:v,className:R().button,children:"Join"})]})})})});var v=o(56442),A=o.n(v);let x=l()(()=>Promise.all([o.e(453),o.e(639)]).then(o.bind(o,59639)),{loadableGenerated:{webpack:()=>[59639]},ssr:!1}),O=(0,s.memo)(e=>{let{isOpen:n,onClose:o}=e,{push:r}=(0,u.useRouter)(),a=(0,s.useCallback)(()=>{r("/room")},[r]);return(0,t.jsx)(x,{size:"lg",show:n,showShadow:!0,onClose:o,onHide:o,dialogClassName:A().dialog,children:(0,t.jsx)(f,{onCreateRoom:a})})})},85528:function(e,n,o){"use strict";o.d(n,{i:function(){return a}});var r=o(34155);let a=()=>({MAX_USER_NAME_SYMBOLS:Number(r.env.NEXT_PUBLIC_MAX_USER_NAME_SYMBOLS||0)||15,MAX_ROOM_NAME_SYMBOLS:Number(r.env.NEXT_PUBLIC_MAX_USER_NAME_SYMBOLS||0)||30,MAX_MESSAGE_SYMBOLS:Number(r.env.NEXT_PUBLIC_MAX_MESSAGE_SYMBOLS||0)||500,PAGE_SIZE:10,MAX_PAGE_SIZE:100})},63169:function(e,n,o){"use strict";o.r(n);var r=o(85893),a=o(90400);n.default=()=>(0,r.jsx)(a.p,{isOpen:!0})},56442:function(e){e.exports={dialog:"ConnectToRoom_dialog__XuWXJ"}},78024:function(e){e.exports={title:"ConnectToRoomForm_title__VQLmz",wrapComponent:"ConnectToRoomForm_wrapComponent__OGwDt",button:"ConnectToRoomForm_button__D43w_",inputWrap:"ConnectToRoomForm_inputWrap__ev3PM",inputWrapPassword:"ConnectToRoomForm_inputWrapPassword__ajZvs"}}},function(e){e.O(0,[952,382,774,888,377],function(){return e(e.s=12539)}),_N_E=e.O()}]);