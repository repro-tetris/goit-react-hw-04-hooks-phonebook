(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{16:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c,r=n(0),a=n.n(r),o=n(8),i=n.n(o),u=(n(16),n(10)),s=n(2),b=n(23),l=n(3),j=n(4),d=j.a.label(c||(c=Object(l.a)(['\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n  + input[type="submit"] {\n    cursor: pointer;\n    &:hover {\n      background-color: aquamarine;\n    }\n  }\n']))),m=n(1);var f,O=function(e){var t=Object(r.useState)(""),n=Object(s.a)(t,2),c=n[0],a=n[1],o=Object(r.useState)(""),i=Object(s.a)(o,2),u=i[0],b=i[1],l=function(e){var t=e.target,n=t.name,c=t.value;"name"===n?a(c):b(c)},j=function(){a(""),b("")};return Object(m.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.onSubmit({name:c,number:u}),j()},children:[Object(m.jsxs)(d,{children:["Name",Object(m.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:l,value:c})]}),Object(m.jsxs)(d,{children:["Number",Object(m.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:l,value:u})]}),Object(m.jsx)("input",{type:"submit",value:"Add contact"})]})},h=j.a.label(f||(f=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n"])));function p(e){var t=e.onFilter,n=Object(r.useState)(""),c=Object(s.a)(n,2),a=c[0],o=c[1];return Object(m.jsxs)(h,{children:["Find contacts by name",Object(m.jsx)("input",{name:"filter",value:a,onChange:function(e){var n=e.target.value.toLowerCase();o(n),t(n)}})]})}var x,v=j.a.li(x||(x=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  button {\n    cursor: pointer;\n    &:hover {\n      background-color: tomato;\n    }\n  }\n"])));var g=function(e){var t=e.name,n=e.number,c=e.onDelete;return Object(m.jsxs)(v,{children:[t,": ",n,Object(m.jsx)("button",{onClick:c,children:"delete"})]})},S=function(e){var t=e.contacts,n=e.onDelete;return Object(m.jsx)("div",{children:Object(m.jsx)("ul",{children:t.map((function(e){var t=e.id,c=e.name,r=e.number;return Object(m.jsx)(g,{name:c,number:r,onDelete:function(){return n(t)}},t)}))})})},y="contacts";function k(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),o=Object(s.a)(a,2),i=o[0],l=o[1];Object(r.useEffect)((function(){return c(function(){var e=localStorage.getItem(y);return e?JSON.parse(e):[]}())}),[]),Object(r.useEffect)((function(){return function(e){localStorage.setItem(y,JSON.stringify(e))}(n)}),[n]);return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsx)(O,{onSubmit:function(e){if(n.find((function(t){return t.name===e.name})))alert("".concat(e.name," is already in contacts"));else{var t=function(e){var t=e.name,n=e.number;return{id:Object(b.a)(),name:t,number:n}}(e),r=[].concat(Object(u.a)(n),[t]);c(r)}}}),Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsx)(p,{onFilter:function(e){return l(e)}}),Object(m.jsx)(S,{contacts:i?n.filter((function(e){return e.name.toLowerCase().includes(i)})):n,onDelete:function(e){c(n.filter((function(t){return t.id!==e})))}})]})}i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(k,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.cc549848.chunk.js.map