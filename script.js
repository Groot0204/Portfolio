// Hamburger menu toggle
function toggleDrawer() {
    const drawer = document.getElementById('drawer');
    drawer.style.display = drawer.style.display === 'block' ? 'none' : 'block';
}

function closeDrawer() {
    document.getElementById('drawer').style.display = 'none';
}

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('site-header');
    if (window.scrollY > 50) { header.classList.add('scrolled'); }
    else { header.classList.remove('scrolled'); }
});

// Contact form submission
const form = document.getElementById('contact-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('success-msg').style.display = 'block';
    form.reset();
});

// Scroll fade-in animation
const faders = document.querySelectorAll('.fade');
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => { appearOnScroll.observe(fader); });