// mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const siteNav = document.getElementById('site-nav');
navToggle && navToggle.addEventListener('click', () => {
  if (siteNav.style.display === 'block') siteNav.style.display = '';
  else siteNav.style.display = 'block';
});

// set year
document.getElementById('year').textContent = new Date().getFullYear();

// form handler (no backend) — demo message
const form = document.getElementById('contact-form');
form && form.addEventListener('submit', (e) => {
  e.preventDefault();
  // basic validation already via required attributes
  alert('Thanks! This demo form won’t actually send a message until you add a form service (see notes).');
  form.reset();
});

// theme toggle (persists in localStorage)
const themeBtn = document.getElementById('theme-btn');
function setTheme(name){ document.documentElement.setAttribute('data-theme', name); localStorage.setItem('theme', name); }
themeBtn && themeBtn.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  setTheme(current);
  themeBtn.setAttribute('aria-pressed', current === 'dark');
});
// restore preference
const saved = localStorage.getItem('theme') || 'light';
setTheme(saved);
themeBtn && themeBtn.setAttribute('aria-pressed', saved === 'dark');
