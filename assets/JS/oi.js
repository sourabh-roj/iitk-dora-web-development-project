// Dynamically adjust sidebar top position based on navbar height
window.addEventListener('load', () => {
  const navbar = document.querySelector('.initiatives-page ~ header') || document.querySelector('.initiatives-page ~ .navbar') || document.querySelector('.initiatives-page ~ .header');
  const sidebar = document.querySelector('.initiatives-page .nav-tabs');
  if (navbar && sidebar) {
    const navbarHeight = navbar.offsetHeight;
    sidebar.style.top = `${navbarHeight + 20}px`;
  }
});

// Smooth scrolling for sidebar links
document.querySelectorAll('.initiatives-page .nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 120,
        behavior: 'smooth'
      });
      document.querySelectorAll('.initiatives-page .nav-link').forEach(nav => nav.classList.remove('active'));
      this.classList.add('active');
    }
  });
});

// Highlight active section on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.initiatives-page .section-content > div[id]');
  const navLinks = document.querySelectorAll('.initiatives-page .nav-link');
  let currentSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === currentSection) {
      link.classList.add('active');
    }
  });
});

// Set initial active state based on URL hash
window.addEventListener('load', () => {
  const hash = window.location.hash;
  if (hash) {
    const targetSection = document.querySelector(hash);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 120,
        behavior: 'smooth'
      });
      document.querySelectorAll('.initiatives-page .nav-link').forEach(nav => {
        nav.classList.remove('active');
        if (nav.getAttribute('href') === hash) {
          nav.classList.add('active');
        }
      });
    }
  }
});
