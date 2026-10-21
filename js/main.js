/**
 * main.js - Core UI Interactions, Live Kuala Lumpur Clock, Theming & Clipboard
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Live Kuala Lumpur Clock (Asia/Kuala_Lumpur, GMT+8)
  function updateKLTime() {
    const clockEl = document.getElementById('liveKlClock');
    if (!clockEl) return;

    try {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kuala_Lumpur',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const formatter = new Intl.DateTimeFormat('en-US', options);
      clockEl.textContent = formatter.format(now);
    } catch (e) {
      const now = new Date();
      clockEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
  }

  updateKLTime();
  setInterval(updateKLTime, 1000);

  // 2. Theme Switcher (Dark / Light)
  const themeToggle = document.getElementById('themeToggleBtn');
  const savedTheme = localStorage.getItem('theme');

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateToggleIcon(theme);
  }

  function updateToggleIcon(theme) {
    if (!themeToggle) return;
    if (theme === 'light') {
      themeToggle.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      `;
      themeToggle.setAttribute('title', 'Switch to Dark Mode');
      themeToggle.setAttribute('aria-label', 'Switch to Dark Mode');
    } else {
      themeToggle.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      `;
      themeToggle.setAttribute('title', 'Switch to Light Mode');
      themeToggle.setAttribute('aria-label', 'Switch to Light Mode');
    }
  }

  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    setTheme('dark');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const target = current === 'dark' ? 'light' : 'dark';
      setTheme(target);
      showNotice(`Switched to ${target} mode`);
    });
  }

  // 3. Mobile Navigation Menu
  const menuBtn = document.getElementById('menuToggleBtn');
  const navItems = document.getElementById('navItems');

  if (menuBtn && navItems) {
    menuBtn.addEventListener('click', () => {
      navItems.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', navItems.classList.contains('open'));
    });

    navItems.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navItems.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', (e) => {
      if (!navItems.contains(e.target) && !menuBtn.contains(e.target)) {
        navItems.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 4. Scroll-Spy Navigation Indicator
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-items a');

  function onScroll() {
    const scrollPos = window.scrollY + 120;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  // 5. Contact Form Handler
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('senderName')?.value || 'Friend';
      showNotice(`Thanks ${name}, message recorded!`);
      contactForm.reset();
    });
  }

  // 6. Dynamic Year
  const yearEl = document.getElementById('footerYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 7. Tactile Mouse Radial Spotlight (Linear / Raycast Style)
  document.addEventListener('mousemove', (e) => {
    const card = e.target.closest('.spotlight-hover');
    if (card) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    }
  });
});

// Toast notification system
function showNotice(message) {
  let toast = document.getElementById('toastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Copy to clipboard helper
function copyValue(text, label = 'Text') {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text)
      .then(() => showNotice(`Copied ${label} to clipboard`))
      .catch(() => fallbackCopy(text, label));
  } else {
    fallbackCopy(text, label);
  }
}

function fallbackCopy(text, label) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
    showNotice(`Copied ${label} to clipboard`);
  } catch (e) {
    showNotice(`Could not copy automatically`);
  }
  document.body.removeChild(ta);
}
