// active nav on scroll
const secs = document.querySelectorAll('section[id]');
const navAs = document.querySelectorAll('.s-nav a');
window.addEventListener('scroll', () => {
  let cur = '';
  secs.forEach(s => { if (window.scrollY >= s.offsetTop - 220) cur = s.id; });
  navAs.forEach(a => { a.classList.toggle('active', a.getAttribute('href') === '#' + cur); });
});

// mobile burger
const burger = document.getElementById('burger');
const sidebar = document.getElementById('sidebar');
burger.addEventListener('click', () => { burger.classList.toggle('open'); sidebar.classList.toggle('open'); });
document.querySelectorAll('.s-nav a').forEach(a => a.addEventListener('click', () => { burger.classList.remove('open'); sidebar.classList.remove('open'); }));

// reveal
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal,.rs').forEach(el => obs.observe(el));