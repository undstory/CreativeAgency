document.addEventListener("DOMContentLoaded",function(){document.querySelector(".nav__toggler");const e=document.querySelector(".mobile__nav"),t=document.querySelectorAll(".portfolio__btn"),l=document.querySelectorAll(".portfolio__project"),o=document.querySelector(".testimonials__arrow--right"),n=document.querySelector(".testimonials__arrow--left"),c=document.querySelectorAll(".testimonials__person"),r=document.querySelectorAll(".testimonials__dot");if(navToggler.addEventListener("click",()=>{e.style.display="block"}),document.querySelectorAll(".mobile__item, .mobile__close").forEach(t=>{t.addEventListener("click",()=>{e.style.display="none"})}),t.forEach(e=>{e.addEventListener("click",function(){t.forEach(e=>{e.classList.remove("active")}),this.classList.toggle("active");const e=this.getAttribute("data-filter");l.forEach(t=>{t.style.display="none","all"!==t.getAttribute("data-filter")&&"all"!==e&&t.getAttribute("data-filter")!==e||(t.style.display="block")})})}),0==!c.length){let e=1;function a(t){s(e+=t)}s(e);function s(t){for(t>c.length&&(e=1),t<1&&(e=c.length),i=0;i<c.length;i++)c[i].style.display="none";for(i=0;i<r.length;i++)r[i].className=r[i].className.replace(" indicated","");c[e-1].style.display="block",r[e-1].className+=" indicated"}}n.addEventListener("click",()=>{a(-1)}),o.addEventListener("click",()=>{a(1)})});