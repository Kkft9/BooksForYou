(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/book.9659998f.jpg"},28:function(e,t,a){e.exports=a(61)},34:function(e,t,a){},52:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(25),o=a.n(c),r=(a(33),a(8)),s=a(1),m=(a(34),a(10)),i=a(11),u=a.n(i),f=(a(52),a(12)),d=a.n(f),E=l.a.memo((function(e){var t=e.book;console.log(t);var a=Object(s.f)();return l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"card",style:{width:"18rem",margin:"auto"}},l.a.createElement("div",{className:"bd-placeholder-img card-img-top",style:{width:"18rem",alignItems:"center",height:"18rem",overflow:"hidden"}},l.a.createElement("img",{src:t.volumeInfo.imageLinks?t.volumeInfo.imageLinks.thumbnail:d.a,style:{width:"18rem"},alt:"Poster"})),l.a.createElement("div",{className:"card-body",style:{alignItems:"center",textAlign:"center"}},l.a.createElement("h5",{className:"card-title"}," ",t.volumeInfo.title),l.a.createElement("i",{className:"card-title"},"By : ","".concat(t.volumeInfo.authors?t.volumeInfo.authors[0]:"Not available")),l.a.createElement("p",{className:"card-text"}," Year : ",t.volumeInfo.publishedDate," "),l.a.createElement("button",{className:"btn btn-primary",style:{display:"inline-block"},onClick:function(){a.push("/details/".concat(t.volumeInfo.industryIdentifiers[0].identifier))}},"View details"))),l.a.createElement("br",null))}));function p(e){var t=e.elements||[],a=e.component;return l.a.createElement("div",{className:"row bg"},t.map((function(e){return t=e,l.a.createElement(a,{book:t});var t})))}a(58);function b(e){var t=e.value,a=function(t){return e.onChange(t.target.value)},n=function(){return e.onSubmit(t)};return l.a.createElement("div",{className:"background"},l.a.createElement("input",{className:"search clear-margin-top",type:"text",value:t,onKeyDown:function(e){"Enter"===e.key?n():a(e)},onChange:a}),l.a.createElement("button",{className:"btn btn-dark clear-margin-top",onClick:n},"Search"))}var h="https://books-for-you18.herokuapp.com/";function v(){var e=Object(n.useState)("love"),t=Object(m.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){f(a)}),[]);var o=Object(n.useState)([]),r=Object(m.a)(o,2),s=r[0],i=r[1],f=function(e){var t="".concat(h,"title");u.a.post(t,{title:"".concat(e)}).then((function(e){return function(e){var t=e.data.list;console.log(t),t&&(console.log("Request Successful!"),i(t))}(e)})).catch((function(e){return console.error(e)}))};return l.a.createElement("div",null,l.a.createElement(b,{value:a,onChange:c,onSubmit:f}),l.a.createElement("br",null),l.a.createElement(p,{elements:s,component:E}))}a(59);function g(){var e=Object(s.g)(),t=Object(n.useState)(""),a=Object(m.a)(t,2),c=a[0],o=a[1],r="".concat(h,"isbn");return Object(n.useEffect)((function(){u.a.post(r,{isbn:"".concat(e.isbn)}).then((function(e){console.log(e),o(e.data.book)})).catch((function(e){console.error(e)}))}),[]),""!==c?l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"row-alt"},l.a.createElement("div",{className:"lead container"},l.a.createElement("h1",null,c.volumeInfo.title),l.a.createElement("img",{src:c.volumeInfo.imageLinks?c.volumeInfo.imageLinks.thumbnail:d.a,alt:"poster"}),l.a.createElement("p",null,c.volumeInfo.description))),l.a.createElement("section",{className:"row"},l.a.createElement("div",{className:"container"},l.a.createElement("table",{style:{alignText:"center"}},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Authors"),l.a.createElement("td",{className:"schedule-offset",colSpan:"2"},"".concat(c.volumeInfo.authors?c.volumeInfo.authors[0]:"Not available")),l.a.createElement("th",{scope:"row"},"Published"),l.a.createElement("td",{className:"schedule-offset",colSpan:"2"},c.volumeInfo.publishedDate)),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Publisher"),l.a.createElement("td",{className:"schedule-offset",colSpan:"2"},c.volumeInfo.publisher),l.a.createElement("th",{scope:"row"},"Average Rating"),l.a.createElement("td",{className:"schedule-offset",colSpan:"2"},c.volumeInfo.averageRating?c.volumeInfo.averageRating+" / 5":"-")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Page Count"),l.a.createElement("td",{className:"schedule-offset",colSpan:"2"},c.volumeInfo.pageCount?c.volumeInfo.pageCount:"-"),l.a.createElement("th",{scope:"row"},"Total Votes"),l.a.createElement("td",{className:"schedule-offset",colSpan:"2"},c.volumeInfo.ratingsCount?c.volumeInfo.ratingsCount:"-")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Language"),l.a.createElement("td",{className:"schedule-offset",colSpan:"2"},c.volumeInfo.language?c.volumeInfo.language:"-"),l.a.createElement("th",{scope:"row"},"ISBN"),l.a.createElement("td",{className:"schedule-offset",colSpan:"2"},c.volumeInfo.industryIdentifiers[0].identifier)))),l.a.createElement("div",{style:{display:"flex",alignItems:"center",textAlign:"center",justifyContent:"space-evenly",marginLeft:"15rem"}},l.a.createElement("a",{href:c.accessInfo.webReaderLink?c.accessInfo.webReaderLink:"#"},l.a.createElement("button",{className:"btn btn-dark"},"View")),l.a.createElement("a",{href:c.saleInfo.buyLink?c.saleInfo.buyLink:"#"},l.a.createElement("button",{className:"btn btn-info"},"Buy",c.saleInfo.retailPrice?" (".concat(c.saleInfo.retailPrice.currencyCode," ").concat(c.saleInfo.retailPrice.amount,")"):"")),l.a.createElement("p",{id:"saved"})))),l.a.createElement("footer",{className:"primary-footer container group"},l.a.createElement("a",{style:{color:"#648880"},href:"https://developers.google.com/books"},l.a.createElement("small",null,"\xa9Google API")))):l.a.createElement(l.a.Fragment,null)}a(60);function I(){var e=Object(s.f)();return l.a.createElement("div",{className:"hmpg"},l.a.createElement("button",{type:"button",class:"btn btn-info btn-lg",onClick:function(){e.push("/search")}},"Search for books"))}var N=function(){return l.a.createElement("div",{className:"container-fluid remove-padding"},l.a.createElement(r.a,null,l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",component:I}),l.a.createElement(s.a,{exact:!0,path:"/details/:isbn",component:g}),l.a.createElement(s.a,{exact:!0,path:"/search",component:v}))))},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,62)).then((function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),l(e),c(e),o(e)}))};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(N,null)),document.getElementById("root")),y()}},[[28,1,2]]]);
//# sourceMappingURL=main.2cfc2506.chunk.js.map