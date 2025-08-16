// Load header & footer partials for DRY pages
async function loadPartials(active) {
  const headerHost = document.getElementById('site-header');
  const footerHost = document.getElementById('site-footer');
  if (headerHost) {
    const h = await fetch('/partials/header.html').then(r=>r.text()).catch(()=>'');
    headerHost.innerHTML = h;
    // set active link
    if (active) {
      document.querySelectorAll('nav .nav-links a').forEach(a=>{
        if (a.getAttribute('href') && location.pathname.endsWith(a.getAttribute('href'))) {
          a.classList.add('active');
        } else if (active === 'home' && a.getAttribute('href')==='/index.html') {
          a.classList.add('active');
        }
      });
    }
    // mobile toggle
    const navToggle = document.getElementById('navToggle');
    const menu = document.getElementById('menu');
    navToggle?.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
  }
  if (footerHost) {
    const f = await fetch('/partials/footer.html').then(r=>r.text()).catch(()=>'');
    footerHost.innerHTML = f;
    const year = footerHost.querySelector('#year');
    if (year) year.textContent = new Date().getFullYear();
  }
}

// WhatsApp helper
function waLink(number, text){
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
