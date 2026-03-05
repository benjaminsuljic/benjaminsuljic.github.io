// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Dark mode toggle
const html = document.documentElement;
const toggleBtn = document.getElementById('themeToggle');

// Apply saved preference on load
if (localStorage.getItem('theme') === 'dark') {
  html.classList.add('dark');
}

toggleBtn.addEventListener('click', () => {
  html.classList.toggle('dark');
  localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
});
