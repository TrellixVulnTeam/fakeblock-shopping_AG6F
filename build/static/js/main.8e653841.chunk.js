(this["webpackJsonpfakeblock-shopping"]=this["webpackJsonpfakeblock-shopping"]||[]).push([[0],{113:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c(3),a=c.n(s),i=c(50),r=c.n(i),o=(c(69),c(51)),l=c(7),d=(c(70),c(52)),j=(c(71),c(58)),u=c.n(j),b=c(59),h=c.n(b),m=c(13),O=c(8),p=Object(s.createContext)(),x=function(e){var t=e.reducer,c=e.initialState,a=e.children;return Object(n.jsx)(p.Provider,{value:Object(s.useReducer)(t,c),children:a})},g=function(){return Object(s.useContext)(p)},f=c(53),v=c(37),_=v.a.initializeApp({apiKey:"AIzaSyArjZ0dqeiLR3n4H8iRbKn1omqOqR0wjWs",authDomain:"fakeblock-shopping.firebaseapp.com",databaseURL:"https://fakeblock-shopping.firebaseio.com",projectId:"fakeblock-shopping",storageBucket:"fakeblock-shopping.appspot.com",messagingSenderId:"741578677340",appId:"1:741578677340:web:dbe63629a55e102c9bda99",measurementId:"G-HE90RXFWP2"}).firestore(),k=v.a.auth();function N(){var e=Object(d.a)(["\n\ttext-decoration: none;\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin-left: 10px;\n\tmargin-right: 10px;\n\tcolor: white;\n\t&:focus,\n\t&:hover,\n\t&:visited,\n\t&:link,\n\t&:active {\n\t\ttext-decoration: none;\n\t}\n"]);return N=function(){return e},e}var S=Object(f.a)(m.b)(N());var y=function(){var e=g(),t=Object(l.a)(e,2),c=t[0],s=c.basket,a=c.user,i=(t[1],Object(O.f)());return Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)(m.b,{to:"/",children:Object(n.jsx)("img",{src:"http://www.pngimg.com/uploads/amazon/amazon_PNG11.png",alt:"",className:"header_logo"})}),Object(n.jsxs)("div",{className:"header_search",children:[Object(n.jsx)("input",{className:"header_searchBar",type:"text"}),Object(n.jsx)(u.a,{className:"header_searchIcon"})]}),Object(n.jsxs)("div",{className:"header_nav",children:[Object(n.jsx)(S,{to:!a&&"/login",children:Object(n.jsxs)("div",{className:"header_option",onClick:function(){a&&k.signOut()},children:[Object(n.jsx)("span",{className:"header_optionLn1",children:a?"Hello, "+(null===a||void 0===a?void 0:a.email.substr(0,a.email.indexOf("@"))):"Hello, guest"}),Object(n.jsx)("span",{className:"header_optionLn2",children:a?"Sign Out":"Sign In"})]})}),Object(n.jsxs)("div",{className:"header_option",onClick:function(){a&&i.push("/orders")},children:[Object(n.jsx)("span",{className:"header_optionLn1",children:"Returns"}),Object(n.jsx)("span",{className:"header_optionLn2",children:"& Orders"})]}),Object(n.jsxs)("div",{className:"header_option",children:[Object(n.jsx)("span",{className:"header_optionLn1",children:"Your"}),Object(n.jsx)("span",{className:"header_optionLn2",children:"Prime"})]})]}),Object(n.jsxs)("div",{className:"header_optionBasket",children:[Object(n.jsx)(S,{to:"/checkout",children:Object(n.jsx)(h.a,{})}),Object(n.jsx)("span",{className:"header_basketCount",children:null===s||void 0===s?void 0:s.length})]})]})};c(84);var C=function(){var e=Object(O.f)(),t=Object(s.useState)(""),c=Object(l.a)(t,2),a=c[0],i=c[1],r=Object(s.useState)(""),o=Object(l.a)(r,2),d=o[0],j=o[1];return Object(n.jsxs)("div",{className:"login",children:[Object(n.jsx)(m.b,{to:"/",children:Object(n.jsx)("img",{className:"login_logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Amazon.com-Logo.svg/800px-Amazon.com-Logo.svg.png",alt:"Amazon Logo"})}),Object(n.jsxs)("div",{className:"login_container",children:[Object(n.jsx)("h1",{children:"Sign-in"}),Object(n.jsxs)("form",{children:[Object(n.jsx)("h5",{children:"E-mail"}),Object(n.jsx)("input",{type:"text",value:a,onChange:function(e){return i(e.target.value)}}),Object(n.jsx)("h5",{children:"Password"}),Object(n.jsx)("input",{type:"password",value:d,onChange:function(e){return j(e.target.value)}}),Object(n.jsx)("button",{className:"login_button",onClick:function(t){console.log("sign in btn pressed"+a+d),t.preventDefault(),k.signInWithEmailAndPassword(a,d).then((function(t){console.log(t),t&&e.push("/")})).catch((function(e){return alert(e.message)}))},children:"Sign In"})]}),Object(n.jsx)("p",{children:"By continuing, you agree to AMAZON FAKE CLONE Conditions of Use and Privacy Notice."}),Object(n.jsx)("button",{className:"signup_button",onClick:function(t){console.log("log in btn pressed"+a+d),t.preventDefault(),k.createUserWithEmailAndPassword(a,d).then((function(t){console.log(t),t&&e.push("/")})).catch((function(e){return alert(e.message)}))},children:"Create your Amazon account"})]})]})};c(85),c(86);var A=function(e){var t=e.id,c=e.title,s=e.image,a=e.price,i=e.rating,r=g(),o=Object(l.a)(r,2),d=(o[0],o[1]);return Object(n.jsxs)("div",{className:"product",children:[Object(n.jsxs)("div",{className:"product_info",children:[Object(n.jsx)("p",{children:c}),Object(n.jsxs)("p",{className:"product_price",children:[Object(n.jsx)("small",{children:"$"}),Object(n.jsx)("strong",{children:a})]}),Object(n.jsx)("div",{className:"product_rating",children:Array(i).fill().map((function(e,t){return Object(n.jsx)("p",{children:"\u2b50"})}))})]}),Object(n.jsx)("img",{src:s,alt:""}),Object(n.jsx)("button",{onClick:function(){d({type:"ADD_TO_BASKET",item:{id:t,title:c,image:s,price:a,rating:i}})},children:"Add to Cart"})]})};var E=function(){return Object(n.jsx)("div",{className:"home",children:Object(n.jsxs)("div",{className:"home_container",children:[Object(n.jsx)("img",{className:"home_image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:""}),Object(n.jsxs)("div",{className:"home_row",children:[Object(n.jsx)(A,{id:"981",title:"SAMSUNG 85-inch Class QLED Q80T Series - 4K UHD Direct Full Array 12X Quantum HDR 12X Smart TV with Alexa Built-in (QN85Q80TAFXZA, 2020 Model) ",price:997.99,image:"https://images-na.ssl-images-amazon.com/images/I/61aMSAaIGSL._AC_SL1001_.jpg",rating:5}),Object(n.jsx)(A,{id:"982",title:"Nikon Z50 Compact Mirrorless Digital Camera with Flip Under Selfie/Vlogger LCD | 2 Zoom Lens Kit Includes: NIKKOR Z DX 16-50mm f/3.5-6.3 VR & NIKKOR Z DX 50-250mm F/4.5-6.3 VR ",price:1096.95,image:"https://images-na.ssl-images-amazon.com/images/I/81%2BDPdnOvBL._AC_SL1500_.jpg",rating:4})]}),Object(n.jsxs)("div",{className:"home_row",children:[Object(n.jsx)(A,{id:"983",title:"VASAGLE ALINRU Computer Desk, Office Desk with 8 Hooks, for Study, Home Office, Easy Assembly, Steel Frame, Industrial, 39.4 x 19.7 x 29.5 Inches, Greige and Black ULWD045B02 ",price:56.09,image:"https://images-na.ssl-images-amazon.com/images/I/61XgUYsp8cL._AC_SL1500_.jpg",rating:3}),Object(n.jsx)(A,{id:"984",title:"Lacoste Crocodile 18x18 Throw Pillow",price:44.07,image:"https://images-na.ssl-images-amazon.com/images/I/91VT-ukW2HL._AC_SL1500_.jpg",rating:4}),Object(n.jsx)(A,{id:"985",title:"AMD Ryzen 5 3600XT 6-core, 12-threads unlocked desktop processor with Wraith Spire cooler ",price:233.33,image:"https://images-na.ssl-images-amazon.com/images/I/71u%2BmYxe%2BUL._AC_SL1384_.jpg",rating:4})]}),Object(n.jsx)("div",{className:"home_row",children:Object(n.jsx)(A,{id:"985",title:"LG 34WN80C-B 34 inch 21:9 Curved UltraWide WQHD IPS Monitor with USB Type-C Connectivity sRGB 99% Color Gamut and HDR10 Compatibility, Black (2019) ",price:549.99,image:"https://images-na.ssl-images-amazon.com/images/I/81WBbFOEHwL._AC_SL1500_.jpg",rating:5})})]})})},L=(c(87),c(88),c(60)),w=c.n(L);c(90);var B=function(e){var t=e.id,c=e.image,s=e.title,a=e.price,i=e.rating,r=e.hideButton,o=g(),d=Object(l.a)(o,2),j=(d[0].basket,d[1]);return Object(n.jsxs)("div",{className:"checkoutProduct",children:[Object(n.jsx)("img",{className:"checkoutProduct_image",src:c,alt:""}),Object(n.jsxs)("div",{className:"checkoutProduct_info",children:[Object(n.jsx)("div",{className:"checkoutProduct_title",children:Object(n.jsx)("p",{children:s})}),Object(n.jsxs)("div",{className:"checkoutProduct_price",children:[Object(n.jsx)("small",{children:"$"}),Object(n.jsx)("strong",{children:a})]}),Object(n.jsx)("div",{className:"checkoutProduct_rating",children:Array(i).fill().map((function(e,t){return Object(n.jsx)("p",{children:"\u2b50"})}))}),!r&&Object(n.jsx)("button",{onClick:function(){j({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove Item"})]})]})},T=c(21),I=c.n(T);var D=function(e){var t,c=e.order;return Object(n.jsxs)("div",{className:"order",children:[Object(n.jsx)("h2",{children:"Order"}),Object(n.jsx)("p",{children:w.a.unix(c.data.created).format("MMMM Do YYYYY, h:mma")}),Object(n.jsx)("p",{className:"order_id",children:Object(n.jsx)("small",{children:c.id})}),null===(t=c.data.basket)||void 0===t?void 0:t.map((function(e){return Object(n.jsx)(B,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating,hideButton:!0})})),Object(n.jsx)(I.a,{renderText:function(e){return Object(n.jsxs)("h3",{className:"order_total",children:["Order Total: ",e]})},decimalScale:2,value:c.data.amount/100,displayType:"text",thousandSeperator:!0,prefix:"$"})]})};var P=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],i=g(),r=Object(l.a)(i,2),o=r[0],d=(o.basket,o.user);return r[1],console.log(c),Object(s.useEffect)((function(){d?_.collection("users").doc(null===d||void 0===d?void 0:d.uid).collection("orders").orderBy("created","desc").onSnapshot((function(e){return a(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})):a([])}),[d]),Object(n.jsxs)("div",{className:"orders",children:[Object(n.jsx)("h1",{children:"Your Orders"}),Object(n.jsx)("div",{className:"orders_orders",children:null===c||void 0===c?void 0:c.map((function(e){return Object(n.jsx)(D,{order:e})}))})]})},R=(c(92),c(93),c(38)),M=c(17),U=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},z=function(e,t){switch(t.type){case"ADD_TO_BASKET":return Object(M.a)(Object(M.a)({},e),{},{basket:[].concat(Object(R.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var c=e.basket.findIndex((function(e){return e.id===t.id})),n=Object(R.a)(e.basket);if(!(c>=0))break;return n.splice(c,1),Object(M.a)(Object(M.a)({},e),{},{basket:n});case"SET_USER":return Object(M.a)(Object(M.a)({},e),{},{user:t.user});case"EMPTY_BASKET":return Object(M.a)(Object(M.a)({},e),{},{basket:[]});default:return e}};var F=function(){var e=Object(O.f)(),t=g(),c=Object(l.a)(t,2),s=c[0].basket;return c[1],Object(n.jsxs)("div",{className:"subtotal",children:[Object(n.jsx)(I.a,{renderText:function(e){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("p",{children:["Subtotal (",null===s||void 0===s?void 0:s.length," items): ",Object(n.jsx)("strong",{children:e})]}),Object(n.jsxs)("small",{className:"subtotal_gift",children:[Object(n.jsx)("input",{type:"checkbox"}),"This order contains a gift"]})]})},decimalScale:2,value:U(s),displayType:"text",thousandSeperator:!0,prefix:"$"}),Object(n.jsx)("button",{onClick:function(t){return e.push("/payment")},children:"Proceed to Checkout"})]})};var G=function(){var e=g(),t=Object(l.a)(e,2),c=t[0],s=c.basket,a=c.user;return t[1],Object(n.jsxs)("div",{className:"checkout",children:[Object(n.jsxs)("div",{className:"checkout_left",children:[Object(n.jsx)(m.b,{to:"https://www.oceanbank.com/creditcard/",children:Object(n.jsx)("img",{className:"checkout_ad",src:"https://images-eu.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""})}),Object(n.jsxs)("div",{className:"checkout_title",children:[Object(n.jsx)("h2",{children:a?"Hello, "+(null===a||void 0===a?void 0:a.email.substr(0,a.email.indexOf("@"))):"Hello, guest"}),Object(n.jsx)("h2",{children:"Your Shopping Basket"})]}),Object(n.jsx)("div",{className:"checkout_items",children:s.map((function(e){return Object(n.jsx)(B,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating,hideButton:!1})}))})]}),Object(n.jsx)("div",{className:"checkout_right",children:Object(n.jsx)(F,{})})]})},H=c(26),K=c.n(H),Y=c(36),V=(c(95),c(20)),W=c(61),X=c.n(W).a.create({baseURL:"https://us-central1-fakeblock-shopping.cloudfunctions.net/api"});var Z=function(){var e=g(),t=Object(l.a)(e,2),c=t[0],a=c.basket,i=c.user,r=t[1],o=Object(O.f)(),d=Object(V.useStripe)(),j=Object(V.useElements)(),u=Object(s.useState)(null),b=Object(l.a)(u,2),h=b[0],p=b[1],x=Object(s.useState)(!1),f=Object(l.a)(x,2),v=f[0],k=f[1],N=Object(s.useState)(""),S=Object(l.a)(N,2),y=S[0],C=S[1],A=Object(s.useState)(!0),E=Object(l.a)(A,2),L=E[0],w=E[1],T=Object(s.useState)(""),D=Object(l.a)(T,2),P=D[0],R=D[1];Object(s.useEffect)((function(){(function(){var e=Object(Y.a)(K.a.mark((function e(){var t;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X({method:"post",url:"/payments/create?total=".concat(100*U(a))});case 2:t=e.sent,R(t.data.clientSecret);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]),console.log("the secret is >>: ",P);var M=function(){var e=Object(Y.a)(K.a.mark((function e(t){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),C(!0),e.next=4,d.confirmCardPayment(P,{payment_method:{card:j.getElement(V.CardElement)}}).then((function(e){var t=e.paymentIntent;_.collection("users").doc(null===i||void 0===i?void 0:i.uid).collection("orders").doc(t.id).set({basket:a,amount:t.amount,created:t.created}),k(!0),p(null),C(!1),r({type:"EMPTY_BASKET"}),o.replace("/orders")}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"payment",children:Object(n.jsxs)("div",{className:"payment_container",children:[Object(n.jsxs)("h1",{children:["Checkout(",Object(n.jsxs)(m.b,{style:{textDecoration:"none",color:"black"},to:"/checkout",children:[null===a||void 0===a?void 0:a.length," items"]}),")"]}),Object(n.jsx)("div",{className:"payment_section",children:Object(n.jsxs)("div",{className:"payment_address",children:[Object(n.jsx)("h3",{children:"Delivery Address"}),Object(n.jsx)("p",{children:null===i||void 0===i?void 0:i.email}),Object(n.jsx)("p",{children:"123 ReactJS Lane"}),Object(n.jsx)("p",{children:"Atlanta, Georgia"})]})}),Object(n.jsxs)("div",{className:"payment_section",children:[Object(n.jsx)("div",{className:"payment_title",children:Object(n.jsx)("h3",{children:"Review items and delivery"})}),Object(n.jsx)("div",{className:"payment_items",children:a.map((function(e){return Object(n.jsx)(B,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))})]}),Object(n.jsxs)("div",{className:"payment_section",children:[Object(n.jsxs)("div",{className:"payment_title",children:[Object(n.jsx)("h3",{children:"Payment Method"}),Object(n.jsx)(I.a,{renderText:function(e){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("h3",{children:["Order Total: ",e]})})},decimalScale:2,value:U(a),displayType:"text",thousandSeperator:!0,prefix:"$"})]}),Object(n.jsx)("div",{className:"payment_details",children:Object(n.jsxs)("form",{onSubmit:M,children:[Object(n.jsx)(V.CardElement,{onChange:function(e){w(e.empty),p(e.error?e.error.message:"")}}),Object(n.jsx)("div",{className:"payment_priceContainer",children:Object(n.jsx)("button",{disabled:y||L||v,children:Object(n.jsx)("span",{children:y?Object(n.jsx)("p",{children:"Processing"}):"Buy Now"})})}),h&&Object(n.jsx)("div",{children:h})]})})]})]})})},Q=c(62),$=Object(Q.a)("pk_test_51HoYmBA60IdK1J4IpLRivlxnMcFCnhnIksVpybSvUP0AaZxEcal8WNptPeTwzbUmG2V06aFYDEa9x6BGsWjVs67V00uqfCrY4s");var q=function(){var e=g(),t=Object(l.a)(e,2);Object(o.a)(t[0]);var c=t[1];return Object(s.useEffect)((function(){k.onAuthStateChanged((function(e){console.log("The user is > ",e),c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(n.jsx)(m.a,{children:Object(n.jsx)("div",{className:"app",children:Object(n.jsxs)(O.c,{children:[Object(n.jsxs)(O.a,{path:"/orders",children:[Object(n.jsx)(y,{}),Object(n.jsx)(P,{})]}),Object(n.jsxs)(O.a,{path:"/payment",children:[Object(n.jsx)(y,{}),Object(n.jsx)(V.Elements,{stripe:$,children:Object(n.jsx)(Z,{})})]}),Object(n.jsxs)(O.a,{path:"/checkout",children:[Object(n.jsx)(y,{}),Object(n.jsx)(G,{})]}),Object(n.jsx)(O.a,{path:"/Login",children:Object(n.jsx)(C,{})}),Object(n.jsxs)(O.a,{path:"/",children:[Object(n.jsx)(y,{}),Object(n.jsx)(E,{})]})]})})})},J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,125)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(x,{initialState:{basket:[],user:null},reducer:z,children:Object(n.jsx)(q,{})})}),document.getElementById("root")),J()},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},90:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},95:function(e,t,c){}},[[113,1,2]]]);
//# sourceMappingURL=main.8e653841.chunk.js.map