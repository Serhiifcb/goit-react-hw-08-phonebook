"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[845],{3845:function(e,t,a){a.r(t),a.d(t,{default:function(){return re}});var n="Contacts_contactListBlock__Imthg",r="Contacts_contactItem__qm4r1",o=a(9434),i=a(6052),s=function(e){return e.contacts.items},c=function(e){return e.filter},d=a(2791),l=a(493),u=a(4942),m=a(3366),p=a(7462),v=a(8182),b=a(4419),y=a(627),h=a(2065),g=a(6934),f=a(1402),Z=a(335),x=a(9103),C=a(162),j=a(2071),I=a(6199),N=a(5878),S=a(1217);function A(e){return(0,S.Z)("MuiListItem",e)}var w=(0,N.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var P=(0,N.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function L(e){return(0,S.Z)("MuiListItemSecondaryAction",e)}(0,N.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var T=a(184),k=["className"],O=(0,g.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return(0,p.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),F=d.forwardRef((function(e,t){var a=(0,f.Z)({props:e,name:"MuiListItemSecondaryAction"}),n=a.className,r=(0,m.Z)(a,k),o=d.useContext(I.Z),i=(0,p.Z)({},a,{disableGutters:o.disableGutters}),s=function(e){var t=e.disableGutters,a=e.classes,n={root:["root",t&&"disableGutters"]};return(0,b.Z)(n,L,a)}(i);return(0,T.jsx)(O,(0,p.Z)({className:(0,v.Z)(s.root,n),ownerState:i,ref:t},r))}));F.muiName="ListItemSecondaryAction";var R=F,_=["className"],G=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],M=(0,g.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.dense&&t.dense,"flex-start"===a.alignItems&&t.alignItemsFlexStart,a.divider&&t.divider,!a.disableGutters&&t.gutters,!a.disablePadding&&t.padding,a.button&&t.button,a.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,a=e.theme,n=e.ownerState;return(0,p.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!n.disablePadding&&(0,p.Z)({paddingTop:8,paddingBottom:8},n.dense&&{paddingTop:4,paddingBottom:4},!n.disableGutters&&{paddingLeft:16,paddingRight:16},!!n.secondaryAction&&{paddingRight:48}),!!n.secondaryAction&&(0,u.Z)({},"& > .".concat(P.root),{paddingRight:48}),(t={},(0,u.Z)(t,"&.".concat(w.focusVisible),{backgroundColor:(a.vars||a).palette.action.focus}),(0,u.Z)(t,"&.".concat(w.selected),(0,u.Z)({backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,h.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)},"&.".concat(w.focusVisible),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):(0,h.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)})),(0,u.Z)(t,"&.".concat(w.disabled),{opacity:(a.vars||a).palette.action.disabledOpacity}),t),"flex-start"===n.alignItems&&{alignItems:"flex-start"},n.divider&&{borderBottom:"1px solid ".concat((a.vars||a).palette.divider),backgroundClip:"padding-box"},n.button&&(0,u.Z)({transition:a.transitions.create("background-color",{duration:a.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(w.selected,":hover"),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,h.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,h.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)}}),n.hasSecondaryAction&&{paddingRight:48})})),V=(0,g.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),z=d.forwardRef((function(e,t){var a=(0,f.Z)({props:e,name:"MuiListItem"}),n=a.alignItems,r=void 0===n?"center":n,o=a.autoFocus,i=void 0!==o&&o,s=a.button,c=void 0!==s&&s,l=a.children,u=a.className,h=a.component,g=a.components,N=void 0===g?{}:g,S=a.componentsProps,P=void 0===S?{}:S,L=a.ContainerComponent,k=void 0===L?"li":L,O=a.ContainerProps,F=(O=void 0===O?{}:O).className,z=a.dense,B=void 0!==z&&z,q=a.disabled,D=void 0!==q&&q,E=a.disableGutters,H=void 0!==E&&E,J=a.disablePadding,U=void 0!==J&&J,W=a.divider,Y=void 0!==W&&W,$=a.focusVisibleClassName,K=a.secondaryAction,Q=a.selected,X=void 0!==Q&&Q,ee=a.slotProps,te=void 0===ee?{}:ee,ae=a.slots,ne=void 0===ae?{}:ae,re=(0,m.Z)(a.ContainerProps,_),oe=(0,m.Z)(a,G),ie=d.useContext(I.Z),se=d.useMemo((function(){return{dense:B||ie.dense||!1,alignItems:r,disableGutters:H}}),[r,ie.dense,B,H]),ce=d.useRef(null);(0,C.Z)((function(){i&&ce.current&&ce.current.focus()}),[i]);var de=d.Children.toArray(l),le=de.length&&(0,x.Z)(de[de.length-1],["ListItemSecondaryAction"]),ue=(0,p.Z)({},a,{alignItems:r,autoFocus:i,button:c,dense:se.dense,disabled:D,disableGutters:H,disablePadding:U,divider:Y,hasSecondaryAction:le,selected:X}),me=function(e){var t=e.alignItems,a=e.button,n=e.classes,r=e.dense,o=e.disabled,i={root:["root",r&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",o&&"disabled",a&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return(0,b.Z)(i,A,n)}(ue),pe=(0,j.Z)(ce,t),ve=ne.root||N.Root||M,be=te.root||P.root||{},ye=(0,p.Z)({className:(0,v.Z)(me.root,be.className,u),disabled:D},oe),he=h||"li";return c&&(ye.component=h||"div",ye.focusVisibleClassName=(0,v.Z)(w.focusVisible,$),he=Z.Z),le?(he=ye.component||h?he:"div","li"===k&&("li"===he?he="div":"li"===ye.component&&(ye.component="div")),(0,T.jsx)(I.Z.Provider,{value:se,children:(0,T.jsxs)(V,(0,p.Z)({as:k,className:(0,v.Z)(me.container,F),ref:pe,ownerState:ue},re,{children:[(0,T.jsx)(ve,(0,p.Z)({},be,!(0,y.Z)(ve)&&{as:he,ownerState:(0,p.Z)({},ue,be.ownerState)},ye,{children:de})),de.pop()]}))})):(0,T.jsx)(I.Z.Provider,{value:se,children:(0,T.jsxs)(ve,(0,p.Z)({},be,{as:he,ref:pe},!(0,y.Z)(ve)&&{ownerState:(0,p.Z)({},ue,be.ownerState)},ye,{children:[de,K&&(0,T.jsx)(R,{children:K})]}))})})),B=a(890),q=a(9849),D=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],E=(0,g.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[(0,u.Z)({},"& .".concat(q.Z.primary),t.primary),(0,u.Z)({},"& .".concat(q.Z.secondary),t.secondary),t.root,a.inset&&t.inset,a.primary&&a.secondary&&t.multiline,a.dense&&t.dense]}})((function(e){var t=e.ownerState;return(0,p.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})})),H=d.forwardRef((function(e,t){var a=(0,f.Z)({props:e,name:"MuiListItemText"}),n=a.children,r=a.className,o=a.disableTypography,i=void 0!==o&&o,s=a.inset,c=void 0!==s&&s,l=a.primary,u=a.primaryTypographyProps,y=a.secondary,h=a.secondaryTypographyProps,g=(0,m.Z)(a,D),Z=d.useContext(I.Z).dense,x=null!=l?l:n,C=y,j=(0,p.Z)({},a,{disableTypography:i,inset:c,primary:!!x,secondary:!!C,dense:Z}),N=function(e){var t=e.classes,a=e.inset,n=e.primary,r=e.secondary,o={root:["root",a&&"inset",e.dense&&"dense",n&&r&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,b.Z)(o,q.L,t)}(j);return null==x||x.type===B.Z||i||(x=(0,T.jsx)(B.Z,(0,p.Z)({variant:Z?"body2":"body1",className:N.primary,component:null!=u&&u.variant?void 0:"span",display:"block"},u,{children:x}))),null==C||C.type===B.Z||i||(C=(0,T.jsx)(B.Z,(0,p.Z)({variant:"body2",className:N.secondary,color:"text.secondary",display:"block"},h,{children:C}))),(0,T.jsxs)(E,(0,p.Z)({className:(0,v.Z)(N.root,r),ownerState:j,ref:t},g,{children:[x,C]}))})),J=a(3400),U=a(7247),W=function(){var e=(0,o.I0)();(0,d.useEffect)((function(){e(i.fetchContacts())}),[e]);var t=(0,o.v9)(s),a=(0,o.v9)(c),u=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return(0,T.jsx)(T.Fragment,{children:(0,T.jsx)("div",{className:n,children:(0,T.jsx)(l.Z,{dense:!0,children:u.length>0?u.map((function(t){var a=t.id,n=t.name,o=t.number;return(0,T.jsxs)(z,{className:r,secondaryAction:(0,T.jsx)(J.Z,{edge:"end","aria-label":"delete",onClick:function(){return function(t){e(i.deleteContact(t))}(a)},children:(0,T.jsx)(U.Z,{})}),children:[(0,T.jsx)(H,{}),n,": ",o]},a)})):(0,T.jsx)("p",{children:"There are no contacts"})})})})},Y=a(6895),$=a(4741),K=function(){var e=(0,o.I0)(),t=(0,o.v9)(c);return(0,T.jsx)("div",{children:(0,T.jsx)("label",{children:(0,T.jsx)($.Z,{id:"outlined-basic",margin:"normal",label:"Find contacts by name",variant:"outlined",size:"small",type:"text",value:t,onChange:function(t){e((0,Y.V)(t.currentTarget.value))}})})})},Q="Form_formBlock__GgFah",X="Form_addContactButton__08Vlt",ee=a(5206),te=a(6151),ae=function(){var e=(0,o.I0)(),t=(0,o.v9)(s);return(0,T.jsx)(T.Fragment,{children:(0,T.jsxs)("form",{onSubmit:function(a){a.preventDefault();var n=a.currentTarget;t.some((function(e){return e.name.toLowerCase()===n.elements.name.value.toLowerCase()}))?ee.Am.error("User ".concat(n.elements.name.value," is already in contacts"),{position:ee.Am.POSITION.TOP_CENTER}):t.some((function(e){return e.number.toLowerCase()===n.elements.number.value.toLowerCase()}))?ee.Am.error("Number ".concat(n.elements.number.value," is already in contacts"),{position:ee.Am.POSITION.TOP_CENTER}):(e(i.addContact({name:n.elements.name.value,number:n.elements.number.value})),n.reset())},className:Q,children:[(0,T.jsx)("label",{children:(0,T.jsx)($.Z,{id:"outlined-basic",label:"Name",variant:"outlined",size:"small",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})}),(0,T.jsx)("br",{}),(0,T.jsxs)("label",{children:[(0,T.jsx)("br",{}),(0,T.jsx)($.Z,{id:"outlined-basic",label:"Number",variant:"outlined",size:"small",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,T.jsx)("br",{}),(0,T.jsx)(te.Z,{size:"small",type:"submit",variant:"contained",className:X,children:"Add contact"})]})})},ne={container:{minHeight:"calc(100vh - 50px)",display:"flex",flexDirection:"column",alignItems:"center"}};function re(){return(0,T.jsxs)("div",{style:ne.container,children:[(0,T.jsx)(ae,{}),(0,T.jsx)(B.Z,{variant:"h5",gutterBottom:!0,children:"Contacts"}),(0,T.jsx)(K,{}),(0,T.jsx)(W,{})]})}},7247:function(e,t,a){var n=a(4836);t.Z=void 0;var r=n(a(5649)),o=a(184),i=(0,r.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=i}}]);
//# sourceMappingURL=845.06c22782.chunk.js.map