// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Dark mode toggle (initial theme class is set synchronously in <head> to avoid a flash)
const html = document.documentElement;
const toggleBtn = document.getElementById('themeToggle');

toggleBtn.addEventListener('click', () => {
  html.classList.toggle('dark');
  localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('nav-open');
  navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

mainNav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    mainNav.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

// Download resume (prints the page; use "Save as PDF" in the print dialog)
document.getElementById('downloadResume').addEventListener('click', () => {
  window.print();
});
