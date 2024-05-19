import{a as b,S as v,i}from"./assets/vendor-5401a4b0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();async function p(t,e){const a="42458886-d6d62fa6987d6f72b0a5e97bb",l="https://pixabay.com/api/";return(await b.get(l,{params:{per_page:15,page:e,key:a,q:t,image_type:"photo",safesearch:"true",orientation:"horizontal"}})).data}function g(t){return t.map(e=>`
        <li class="gallery-item">
          <div class="gallery-box item-card-wrapper">
            <a class="gallery-link" href="${e.largeImageURL}">
              <img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}" loading="lazy">
            </a>
            <div class="card-box">
              <div>
                <p class="card-box-text"><b>Likes</b></p>
                <p class="card-box-text">${e.likes}</p>
              </div>
              <div>
                <p class="card-box-text"><b>Views</b></p>
                <p class="card-box-text">${e.views}</p>
              </div>
              <div>
                <p class="card-box-text"><b>Comments</b></p>
                <p class="card-box-text">${e.comments}</p>
              </div>
              <div>
                <p class="card-box-text"><b>Downloads</b></p>
                <p class="card-box-text">${e.downloads}</p>
              </div>
            </div>
          </div>
        </li>`).join("")}const f="/goit-js-hw-12/assets/octagon-c1967aa5.svg",y=new v(".gallery a",{captionsData:"alt",captionDelay:250}),s={form:document.querySelector(".form"),gallery:document.querySelector(".list"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".btn-more")};let u=1,c=null;m();n();async function x(t){if(t.preventDefault(),c=s.form.elements.query.value.trim(),u=1,s.gallery.innerHTML="",c===""){n(),i.warning({message:"Please enter a search query.",messageColor:"black",backgroundColor:"#ffac26",position:"topRight",pauseOnHover:!1,progressBarColor:"black",timeout:3e3});return}h();try{const a=(await p(c,u)).hits;if(a.length===0){n(),i.error({theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",backgroundColor:"#ef4040",position:"topRight",iconUrl:f,pauseOnHover:!1,progressBarColor:"#b51b1b",timeout:3e3});return}s.gallery.innerHTML=g(a),a.length<15?n():w(),y.refresh()}catch{i.error({theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",backgroundColor:"#ef4040",position:"topRight",iconUrl:f,pauseOnHover:!1,progressBarColor:"#b51b1b",timeout:3e3})}finally{m(),s.form.reset()}}s.form.addEventListener("submit",x);s.loadMoreBtn.addEventListener("click",async()=>{try{h();const t=await p(c,++u),e=document.querySelectorAll(".gallery-item").length;s.gallery.insertAdjacentHTML("beforeend",g(t.hits));const a=document.querySelectorAll(".gallery-item");a.length>e&&a[e].scrollIntoView({block:"start",behavior:"smooth"}),y.refresh(),t.hits.length<15&&(n(),i.info({theme:"dark",message:"We're sorry, but you've reached the end of search results.",messageColor:"#ffffff",backgroundColor:"#1f79ff",position:"topRight",pauseOnHover:!1,progressBarColor:"black",timeout:3e3}))}catch(t){throw new f(t.status)}finally{m()}});function w(){s.loadMoreBtn.classList.remove("is-hidden")}function n(){s.loadMoreBtn.classList.add("is-hidden")}function h(){s.loader.style.display="block"}function m(){s.loader.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
