"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[231],{1231:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var a="Contacts_contactListBlock__Imthg",r="Contacts_contactItem__qm4r1",s="Contacts_buttonDeleteContact__UshlI",c="Contacts_spanContact__YM+mF",o=n(9434),l=n(6052),i=function(e){return e.contacts.items},u=function(e){return e.filter},m=n(2791),d=n(184),h=function(){var e=(0,o.I0)();(0,m.useEffect)((function(){e(l.fetchContacts())}),[e]);var t=(0,o.v9)(i),n=(0,o.v9)(u),h=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h2",{children:"Contacts"}),(0,d.jsx)("div",{className:a,children:(0,d.jsx)("ul",{children:h.length>0?h.map((function(t){var n=t.id,a=t.name,o=t.number;return(0,d.jsxs)("li",{className:r,children:[(0,d.jsx)("span",{className:c}),a,": ",o,(0,d.jsx)("button",{className:s,onClick:function(){return function(t){e(l.deleteContact(t))}(n)},children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"})]},n)})):(0,d.jsx)("p",{children:"There are no contacts"})})})]})},_="Filter_filterBlock__whgWd",f="Filter_inputFilter__8QMOp",p=n(6895),x=function(){var e=(0,o.I0)(),t=(0,o.v9)(u);return(0,d.jsx)("div",{className:_,children:(0,d.jsxs)("label",{children:["Find contacts by name ",(0,d.jsx)("br",{}),(0,d.jsx)("input",{type:"text",value:t,className:f,onChange:function(t){e((0,p.V)(t.currentTarget.value))}})]})})},b="Form_formBlock__GgFah",j="Form_inputForm__wnZfX",C="Form_addContactButton__08Vlt",v=n(8174),N=function(){var e=(0,o.I0)(),t=(0,o.v9)(i);return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("form",{onSubmit:function(n){n.preventDefault();var a=n.currentTarget;t.some((function(e){return e.name.toLowerCase()===a.elements.name.value.toLowerCase()}))?v.Am.error("User ".concat(a.elements.name.value," is already in contacts"),{position:v.Am.POSITION.TOP_CENTER}):t.some((function(e){return e.number.toLowerCase()===a.elements.number.value.toLowerCase()}))?v.Am.error("Number ".concat(a.elements.number.value," is already in contacts"),{position:v.Am.POSITION.TOP_CENTER}):(e(l.addContact({name:a.elements.name.value,number:a.elements.number.value})),a.reset())},className:b,children:[(0,d.jsxs)("label",{children:["Name",(0,d.jsx)("br",{}),(0,d.jsx)("input",{className:j,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,d.jsx)("br",{}),(0,d.jsxs)("label",{children:["Number ",(0,d.jsx)("br",{}),(0,d.jsx)("input",{className:j,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,d.jsx)("br",{}),(0,d.jsx)("button",{type:"submit",className:C,children:"Add contact"})]})})};function w(){return(0,d.jsxs)("div",{children:[(0,d.jsx)(N,{}),(0,d.jsx)(x,{}),(0,d.jsx)(h,{})]})}}}]);
//# sourceMappingURL=231.d78fd81e.chunk.js.map