
document.getElementById("year").textContent = new Date().getFullYear();

const menuBtn = document.querySelector(".menu-btn");
const mobileNav = document.querySelector(".mobile-nav");
if(menuBtn && mobileNav){
  menuBtn.addEventListener("click",()=>{
    const open = menuBtn.getAttribute("aria-expanded")==="true";
    menuBtn.setAttribute("aria-expanded",String(!open));
    mobileNav.hidden = open;
  });
  mobileNav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
    mobileNav.hidden = true;
    menuBtn.setAttribute("aria-expanded","false");
  }));
}

const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})
},{threshold:.14});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));

// Analytics-ready: emits a custom event. Connect GA4/GTM in production.
document.querySelectorAll("[data-track]").forEach(el=>{
  el.addEventListener("click",()=>{
    window.dispatchEvent(new CustomEvent("site:conversion",{detail:{event:el.dataset.track}}));
  });
});
