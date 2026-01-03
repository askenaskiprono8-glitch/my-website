document.addEventListener('DOMContentLoaded',function(){
  const btn=document.getElementById('nav-toggle');
  const root=document.documentElement;
  const nav=document.getElementById('site-nav');
  btn?.addEventListener('click',function(){
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    document.body.classList.toggle('nav-open');
  });

  // set current year
  const y = new Date().getFullYear();
  const el = document.getElementById('year');
  if(el) el.textContent = String(y);
});
