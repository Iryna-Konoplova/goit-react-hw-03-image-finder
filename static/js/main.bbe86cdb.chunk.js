(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{13:function(e,t,a){e.exports={Overlay:"modal_Overlay__1jf9a",Modal:"modal_Modal__10xJq"}},22:function(e,t,a){e.exports={ImageGalleryItem:"imageGalleryItem_ImageGalleryItem__xt5gr",ImageGalleryItemImage:"imageGalleryItem_ImageGalleryItemImage__J54Sz"}},23:function(e,t,a){e.exports={ImageGallery:"imageGallery_ImageGallery__2GKD0"}},24:function(e,t,a){e.exports={Button:"button_Button__1DAat"}},26:function(e,t,a){e.exports={Container:"App_Container__3Od4z"}},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o),i=a(9),s=a(4),l=a(5),u=a(7),h=a(6),m=a(12),d=a.n(m);d.a.defaults.baseURL="https://pixabay.com/api/";var g=function(e){var t=e.searchQuery,a=void 0===t?"":t,n=e.currentPage,r=void 0===n?1:n;return d.a.get("?q=".concat(a,"&page=").concat(r,"&key=").concat("21824668-10aeb8c8af54ec25684dd6884","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},b=a(8),f=a.n(b),j=a(1),p=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(j.jsx)("header",{className:f.a.Searchbar,children:Object(j.jsxs)("form",{className:f.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(j.jsx)("button",{type:"submit",className:f.a.SearchFormButton,children:Object(j.jsx)("span",{className:f.a.SearchFormButtonLabel,children:"Search"})}),Object(j.jsx)("input",{className:f.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.query,onChange:this.handleChange})]})})}}]),a}(n.Component),y=a(22),O=a.n(y),v=function(e){var t=e.webformatURL,a=e.tags,n=e.largeImageURL;return Object(j.jsx)("li",{className:O.a.ImageGalleryItem,children:Object(j.jsx)("img",{src:t,alt:a,"data-url":n})})},S=a(23),_=a.n(S),w=function(e){var t=e.hits,a=e.onClick;return Object(j.jsx)("ul",{className:_.a.ImageGallery,onClick:a,children:t.map((function(e){var t=e.id,a=e.webformatURL,n=e.largeImageURL,r=e.tags;return Object(j.jsx)(v,{webformatURL:a,tags:r,largeImageURL:n},t)}))})},x=a(24),C=a.n(x),I=function(e){var t=e.onClick;return Object(j.jsx)("button",{type:"button",onClick:t,className:C.a.Button,children:"Load more"})},k=a(13),L=a.n(k),F=document.querySelector("#modal-root"),G=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(j.jsx)("div",{className:L.a.Overlay,onClick:this.handleBackdropClick,children:Object(j.jsx)("div",{className:L.a.Modal,children:this.props.children})}),F)}}]),a}(n.Component),P=a(25),B=a.n(P),M=function(){return Object(j.jsx)(B.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80})},N=a(26),Q=a.n(N),D=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={hits:[],currentPage:1,currentPageImages:[],searchQuery:"",isLoading:!1,error:null,showModal:!1,url:"",tag:""},e.onChangeQuery=function(t){e.setState({searchQuery:t,currentPage:1,hits:[],error:null,url:"",tag:""})},e.fetchHits=function(){var t=e.state,a={searchQuery:t.searchQuery,currentPage:t.currentPage};e.setState({isLoading:!0}),g(a).then((function(t){e.setState((function(e){return{hits:[].concat(Object(i.a)(e.hits),Object(i.a)(t)),currentPage:e.currentPage+1,currentPageImages:Object(i.a)(t)}})),0===t.length&&e.setState({error:"Nothing was find by your query. Try again."})})).then((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.fetchHits=function(){var t=e.state,a={searchQuery:t.searchQuery,currentPage:t.currentPage};e.setState({isLoading:!0}),g(a).then((function(t){e.setState((function(e){return{hits:[].concat(Object(i.a)(e.hits),Object(i.a)(t)),currentPage:e.currentPage+1}})),e.scrollDown()})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.scrollDown=function(){window.scrollTo({top:document.documentElement.scrollTop+window.innerHeight,behavior:"smooth"})},e.handleImageClick=function(t){var a=t.target;if("IMG"===a.nodeName){var n=a.dataset.url,r=a.alt;e.setState({url:n,tag:r}),e.toggleModal()}},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchHits()}},{key:"render",value:function(){var e=this.state,t=e.hits,a=e.isLoading,n=e.showModal,r=e.url,o=e.tag,c=t.length>0&&!a;return Object(j.jsxs)("div",{className:Q.a.Container,children:[Object(j.jsx)(p,{onSubmit:this.onChangeQuery}),Object(j.jsx)(w,{hits:t,onClick:this.handleImageClick}),a&&Object(j.jsx)(M,{}),c&&Object(j.jsx)(I,{onClick:this.fetchHits}),n&&Object(j.jsx)(G,{onClose:this.toggleModal,onClick:this.handleImageClick,children:Object(j.jsx)("img",{src:r,alt:o})})]})}}]),a}(n.Component);a(70),a(71);c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(D,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"searchbar_Searchbar__1mswQ",SearchForm:"searchbar_SearchForm__EnCsG",SearchFormButton:"searchbar_SearchFormButton__3_7Cc",SearchFormButtonLabel:"searchbar_SearchFormButtonLabel__Tx2Ht",SearchFormInput:"searchbar_SearchFormInput__2ar8V"}}},[[72,1,2]]]);
//# sourceMappingURL=main.bbe86cdb.chunk.js.map