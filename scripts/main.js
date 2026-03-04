// ── NAVBAR SCROLL ──
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ── MOBILE NAV TOGGLE ──
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  // Close on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// ── MATRIX CANVAS ──
const canvas = document.getElementById('matrixCanvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const chars = 'AZUREDEVOPSCI/CDDOCKERGITHUBLINUX0123456789>_{}[]';
  const cols = Math.floor(canvas.width / 18);
  const drops = Array(cols).fill(1);
  function drawMatrix() {
    ctx.fillStyle = 'rgba(5,10,20,0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00d4ff';
    ctx.font = '13px Space Mono, monospace';
    for (let i = 0; i < drops.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(char, i * 18, drops[i] * 18);
      if (drops[i] * 18 > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
  }
  setInterval(drawMatrix, 50);
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// ── TYPED TITLE EFFECT ──
const titles = [
  'Jr. DevOps Engineer',
  'Azure Cloud Specialist',
  'Production Support Engineer',
  'CI/CD Enthusiast',
  'Python Automation Builder',
  'AZ-900 | AZ-104 | AI-102'
];
let titleIndex = 0, charIndex = 0, isDeleting = false;
const typedEl = document.getElementById('typedTitle');
if (typedEl) {
  function typeEffect() {
    const current = titles[titleIndex];
    if (isDeleting) {
      typedEl.textContent = current.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedEl.textContent = current.substring(0, charIndex + 1);
      charIndex++;
    }
    if (!isDeleting && charIndex === current.length) {
      setTimeout(() => { isDeleting = true; }, 2000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
    }
    setTimeout(typeEffect, isDeleting ? 50 : 80);
  }
  typeEffect();
}

// ── SCROLL ANIMATIONS ──
const animateEls = document.querySelectorAll('[data-animate]');
if (animateEls.length) {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 100);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  animateEls.forEach(el => obs.observe(el));
}

// ── SKILL BAR ANIMATION ──
const skillFills = document.querySelectorAll('.skill-fill');
if (skillFills.length) {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.style.width = el.style.getPropertyValue('--w') || getComputedStyle(el).getPropertyValue('--w');
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.2 });
  skillFills.forEach(el => obs.observe(el));
}
