const langButtons=document.querySelectorAll('[data-lang]');
function setLanguage(lang){document.documentElement.lang=lang==='gr'?'el':'en';document.querySelectorAll('[data-en][data-gr]').forEach(el=>{el.innerHTML=el.dataset[lang]});langButtons.forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));localStorage.setItem('he-lang',lang)}
langButtons.forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.lang)));
setLanguage(localStorage.getItem('he-lang')||'en');
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');toggle.addEventListener('click',()=>{nav.classList.toggle('open');toggle.setAttribute('aria-expanded',nav.classList.contains('open'))});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
