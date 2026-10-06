const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
const body=document.body,drawer=document.querySelector('.mobile-drawer'),backdrop=document.querySelector('.menu-backdrop'),openBtn=document.querySelector('.menu-toggle'),closeBtn=document.querySelector('.menu-close');
function openMenu(){if(!drawer)return;drawer.classList.add('open');drawer.setAttribute('aria-hidden','false');openBtn?.setAttribute('aria-expanded','true');backdrop.hidden=false;body.classList.add('menu-open');closeBtn?.focus()}
function closeMenu(){if(!drawer)return;drawer.classList.remove('open');drawer.setAttribute('aria-hidden','true');openBtn?.setAttribute('aria-expanded','false');backdrop.hidden=true;body.classList.remove('menu-open')}
openBtn?.addEventListener('click',openMenu);closeBtn?.addEventListener('click',closeMenu);backdrop?.addEventListener('click',closeMenu);drawer?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&drawer?.classList.contains('open'))closeMenu()});
const video=document.querySelector('.hero-video'),videoToggle=document.querySelector('.video-toggle');
videoToggle?.addEventListener('click',()=>{if(!video)return;if(video.paused){video.play();videoToggle.textContent='Pausar movimento';videoToggle.setAttribute('aria-label','Pausar vídeo');videoToggle.setAttribute('aria-pressed','false')}else{video.pause();videoToggle.textContent='Retomar movimento';videoToggle.setAttribute('aria-label','Retomar vídeo');videoToggle.setAttribute('aria-pressed','true')}});
const reduce=window.matchMedia('(prefers-reduced-motion: reduce)');if(reduce.matches&&video){video.pause()}
if('IntersectionObserver'in window){const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}})},{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>io.observe(el))}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'))}
document.querySelectorAll('[data-track]').forEach(el=>el.addEventListener('click',()=>window.dispatchEvent(new CustomEvent('site:conversion',{detail:{event:el.dataset.track}}))));

const focusables=()=>drawer ? [...drawer.querySelectorAll('a[href],button:not([disabled])')] : [];
document.addEventListener('keydown',e=>{
  if(e.key!=='Tab'||!drawer?.classList.contains('open'))return;
  const items=focusables(); if(!items.length)return;
  const first=items[0],last=items[items.length-1];
  if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
  else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
});
