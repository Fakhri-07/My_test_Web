/* ── NAV SCROLL EFFECT ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.style.background = 'rgba(10,10,15,0.98)';
  } else {
    navbar.style.background = 'rgba(10,10,15,0.85)';
  }
});

/* ── HAMBURGER MENU ── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/* ── ACTIVE NAV LINK ── */
const sections = document.querySelectorAll('section[id]');
const links    = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(l => l.style.color = '');
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.style.color = '#e8e8f0';
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => observer.observe(s));

/* ── FADE-IN ON SCROLL ── */
const fadeEls = document.querySelectorAll(
  '.about-text, .about-card, .skill-category, .project-card, .contact-card, .stat-card'
);
fadeEls.forEach(el => el.classList.add('fade-in'));

const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

fadeEls.forEach(el => fadeObserver.observe(el));

/* ── SMOOTH SCROLL for anchor links ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
 if (target {
  e.preventDefault();
  target.scrollintoview({ behavior: 'smooth'}):
 }
 });
});