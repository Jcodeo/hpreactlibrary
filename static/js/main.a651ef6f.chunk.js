(this.webpackJsonphpreactlibrary=this.webpackJsonphpreactlibrary||[]).push([[0],{85:function(e,t,r){},86:function(e,t,r){},87:function(e,t,r){},90:function(e,t,r){"use strict";r.r(t);var s,c=r(0),n=r(7),i=r.n(n),a=r(53),l=r(20),o=r(22),d=r(39),j=r.n(d),u=r(57),b=r(31),p=r(58),m=r(59).a.div(s||(s=Object(p.a)([""]))),h=r(3),v=function(e){var t=e.book,r=e.handleAddToCart;return Object(h.jsx)(m,{children:Object(h.jsx)("div",{className:"book-item",children:Object(h.jsxs)("div",{className:"book-infos",children:[Object(h.jsx)("div",{className:"book-cover",children:Object(h.jsx)("img",{src:t.cover,alt:t.title})}),Object(h.jsx)("div",{className:"book-title",children:t.title}),Object(h.jsx)("div",{className:"book-desc",children:t.synospis}),Object(h.jsxs)("div",{className:"book-bottom",children:[Object(h.jsxs)("div",{className:"book-price",children:[t.price,"\u20ac"]}),Object(h.jsx)("a",{onClick:function(){return r(t)},children:Object(h.jsx)("span",{className:"added",children:"Ajouter"})})]})]})})})},x=(r(85),function(e){var t=e.item;e.addToCart;return Object(h.jsxs)("div",{className:"cart-list",children:[Object(h.jsx)("div",{className:"item-title",children:t.title}),Object(h.jsx)("div",{className:"item-price",children:t.price})]})}),O=(r(86),function(e){var t=e.cartItems,r=e.addToCart;return Object(h.jsxs)("div",{className:"cart-wrapper",children:[Object(h.jsx)("div",{className:"cart-title",children:"Mon panier"}),0===t.length?Object(h.jsx)("p",{children:"Vous n'avez pas encore ajout\xe9 de livre"}):null,t.map((function(e){return Object(h.jsx)(x,{item:e,addToCart:r},e.id)}))]})}),f=r(120),N=r(116),k=r(119),y=r(121),C=(r(87),function(){var e=Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://henri-potier.techx.fr/books");case 2:return e.next=4,e.sent.json();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),g=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),r=t[0],s=t[1],n=Object(c.useState)([]),i=Object(o.a)(n,2),d=i[0],j=i[1],u=Object(b.useQuery)("books",C),p=u.data,m=u.isLoading,x=u.error;if(console.log(p),m)return Object(h.jsx)(N.a,{});if(x)return Object(h.jsx)("div",{children:"Oops! Il semble que l'application n'a pas pu se connecter \xe0 l'API pour r\xe9cup\xe9rer les livres!"});var g,w=function(e){j((function(t){return[].concat(Object(l.a)(t),[Object(a.a)({},e)])}))};return Object(h.jsxs)("div",{children:[Object(h.jsx)(f.a,{anchor:"right",open:r,onClose:function(){return s(!1)},children:Object(h.jsx)(O,{cartItems:d,addToCart:w})}),Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)("span",{className:"logo",children:"HP Library"}),Object(h.jsx)("div",{className:"spacer"}),Object(h.jsxs)("a",{onClick:function(){return s(!0)},children:[Object(h.jsx)(y.a,{}),Object(h.jsx)("span",{className:"quantity",children:(g=d,g.reduce((function(e,t){return e+t.amount}),0))})]})]}),Object(h.jsx)("div",{className:"book-wrapper",children:Object(h.jsxs)("div",{className:"book-container",children:[Object(h.jsxs)("div",{className:"book-intro",children:[Object(h.jsx)("div",{className:"pre-title",children:"D\xe9couvrez le monde merveilleux d'Harry Potter et ses aventures"}),Object(h.jsx)("div",{className:"title",children:"Nos livres"}),Object(h.jsx)("div",{className:"accroche",children:"Le premier livre de Harry Potter, Harry Potter et la pierre philosophale, a \xe9t\xe9 publi\xe9 par Bloomsbury en 1997 et a imm\xe9diatement \xe9t\xe9 acclam\xe9 par le public et la critique. Six autres best-sellers, trois livres d'accompagnement, un sc\xe9nario et deux sc\xe9narios ont suivi depuis. Les livres Harry Potter ont \xe9t\xe9 traduits dans plus de 80 langues, ont remport\xe9 de nombreux prix et se sont vendus \xe0 plus de 500 millions d'exemplaires dans le monde, devenant ainsi la s\xe9rie de livres la plus vendue de l'histoire..."})]}),Object(h.jsx)("div",{className:"book-list",children:null===p||void 0===p?void 0:p.map((function(e){return Object(h.jsx)(k.a,{item:!0,children:Object(h.jsx)(v,{book:e,handleAddToCart:w})},"{item.id}")}))})]})})]})},w=new b.QueryClient;i.a.render(Object(h.jsx)(b.QueryClientProvider,{client:w,children:Object(h.jsx)(g,{})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.a651ef6f.chunk.js.map