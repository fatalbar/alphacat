(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[167],{32167:function(e,a,t){"use strict";t.r(a),t.d(a,{ChatEditor:function(){return N},default:function(){return D}});var s,n=t(85893),u=t(67294),i=t(82175),M=t(24697),l=t(25675),r=t.n(l),c=t(84498),A=t(42138),E=t(85528),_=t(61802),d=t(83246),o=t(32627),S=t.n(o);(s||(s={})).message="message";var m=t(16310);let L=()=>m.Ry({[s.message]:m.Z_().test(s.message,"Invalid message entered",e=>{var a;return!!(e&&(null===(a=e.trim())||void 0===a?void 0:a.length))}).required("Required")}),b=()=>({message:""});var g=t(13651),j=t.n(g);let x=(0,E.i)(),N=(0,u.memo)(e=>{let{onSendMessage:a,className:t}=e,l=(0,u.useRef)(null),{error:E}=(0,c.Z)(),o=(0,u.useRef)(null),m=(0,u.useCallback)(()=>{o.current&&o.current.handleSubmit()},[]),[g,N]=(0,u.useState)(!1),[D,C]=(0,u.useState)(!1),I=(0,u.useMemo)(()=>L(),[]),[h]=(0,u.useState)(b()),p=(0,u.useCallback)(async()=>{var e;null===(e=l.current)||void 0===e||e.focus(),N(!0),m()},[m]),O=(0,u.useCallback)(async(e,t)=>{let{resetForm:n}=t;C(!0),N(!0);try{if(e[s.message].length>x.MAX_MESSAGE_SYMBOLS)throw Error("Must be max ".concat(x.MAX_MESSAGE_SYMBOLS," symbols"));null==a||a(e[s.message].trim()),n({values:b()})}catch(e){E(null==e?void 0:e.message)}C(!1)},[a,E]),v=(0,u.useCallback)(()=>{N(!0),m()},[m]),T=(0,M.y1)(v,100),k=(0,u.useCallback)(e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),T())},[T]),z=(0,u.useCallback)(()=>(0,n.jsx)(_.z,{variant:"base-link",onClick:p,disabled:D,className:j().btn,type:"submit",children:(0,n.jsx)(r(),{src:S(),width:20,height:20,className:j().icon,alt:"send"})}),[p,D]);return(0,n.jsx)(i.J9,{innerRef:o,enableReinitialize:!1,validateOnChange:g,validateOnBlur:!1,initialValues:h,validationSchema:I,onSubmit:O,children:(0,n.jsx)(A.x,{className:t,children:(0,n.jsx)(d.F,{ref:l,autoFocus:!0,debounceInterval:null,name:s.message,classNameInputLabel:j().inputLabel,classNameInput:j().input,classNameWrap:j().inputWrap,classNameInputLabelFocused:j().inputLabelFocused,showError:!1,showInvalid:!1,as:"textarea",autosize:!0,isValidateRange:!0,max:x.MAX_MESSAGE_SYMBOLS,placeholder:"Write your message (max ".concat(x.MAX_MESSAGE_SYMBOLS," symbols)"),disabled:D,maxRows:6,onKeyDown:k,append:z})})})});var D=N},85528:function(e,a,t){"use strict";t.d(a,{i:function(){return n}});var s=t(34155);let n=()=>({MAX_USER_NAME_SYMBOLS:Number(s.env.NEXT_PUBLIC_MAX_USER_NAME_SYMBOLS||0)||15,MAX_ROOM_NAME_SYMBOLS:Number(s.env.NEXT_PUBLIC_MAX_USER_NAME_SYMBOLS||0)||30,MAX_MESSAGE_SYMBOLS:Number(s.env.NEXT_PUBLIC_MAX_MESSAGE_SYMBOLS||0)||500,PAGE_SIZE:10,MAX_PAGE_SIZE:100})},13651:function(e){e.exports={inputLabel:"ChatEditor_inputLabel__IMG5j",inputWrap:"ChatEditor_inputWrap__Q8Eme",inputLabelFocused:"ChatEditor_inputLabelFocused__lMaxu",input:"ChatEditor_input__OdNbJ",invalid:"ChatEditor_invalid__C_bBk"}},32627:function(e){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1Ljk5MiAxOC4zMDZDMTYuNzM0IDE4LjYxIDE3LjAzIDE4LjAzOCAxNy4xNzIgMTcuMTU2TDE5Ljc3MiAxLjE5MDAzQzE5LjkzOCAwLjE2ODAyOCAxOS4zMzggLTAuMDM3OTcxNiAxOC4xNDIgMC42NTQwMjhMMC45NDAwMTMgMTAuNkMwLjEzMjAxMyAxMS4wNjYgLTAuMTA3OTg3IDExLjcxMiAwLjY5NDAxNCAxMi4wNEw0Ljk2NjAxIDEzLjc5TDE2LjY1NiAzLjcxODAzTDcuMjQwMDEgMTUuMjZWMTkuMDQ4QzcuMjQwMDEgMjAuMDY0IDguMTcyMDEgMTkuOSA4Ljg2MjAxIDE5LjA0OEwxMS4wODggMTYuMjk4TDE1Ljk5MiAxOC4zMDZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"}}]);