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
  const chars = 'GCPAZURETERRAFORMDEVOPSCI/CDDOCKERK8SLINUXPYTHON0123456789>_{}[]';
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
  'Platform Engineer',
  'DevOps Engineer',
  'Multi-Cloud Specialist (GCP · Azure · AWS)',
  'Terraform IaC Automation Builder',
  'Gemini Enterprise Agent Developer',
  'Future GCP Professional Cloud Architect'
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
    setTimeout(typeEffect, isDeleting ? 40 : 75);
  }
  typeEffect();
}

// ── SCROLL ANIMATIONS ──
const animateEls = document.querySelectorAll('[data-animate]');
if (animateEls.length) {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 90);
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

// ── SKILLS FILTER ──
const skillFilterBtns = document.querySelectorAll('[data-filter]');
const skillSections = document.querySelectorAll('.skill-section[data-category]');
if (skillFilterBtns.length && skillSections.length) {
  skillFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      skillFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      skillSections.forEach(sec => {
        sec.style.display = (filter === 'all' || sec.getAttribute('data-category') === filter) ? 'block' : 'none';
      });
    });
  });
}

// ── PROJECTS FILTER ──
const projFilterBtns = document.querySelectorAll('[data-proj-filter]');
const projCards = document.querySelectorAll('.project-card[data-proj-cat]');
if (projFilterBtns.length && projCards.length) {
  projFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      projFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-proj-filter');
      projCards.forEach(card => {
        card.style.display = (filter === 'all' || card.getAttribute('data-proj-cat') === filter) ? 'block' : 'none';
      });
    });
  });
}

// ── INTERACTIVE COMMAND PALETTE (Ctrl+K / Cmd+K) ──
(function initCommandPalette() {
  const modal = document.createElement('div');
  modal.className = 'cmd-overlay';
  modal.id = 'cmdOverlay';
  modal.innerHTML = `
    <div class="cmd-modal">
      <div class="cmd-header">
        <span>⌘</span>
        <input type="text" id="cmdInput" placeholder="Type a command or search pages (Esc to close)..." autocomplete="off" />
      </div>
      <div class="cmd-list" id="cmdList">
        <a href="index.html" class="cmd-item"><span>🏠 Go to Home</span><kbd>Page</kbd></a>
        <a href="about.html" class="cmd-item"><span>👤 About &amp; Terminal Profile</span><kbd>Page</kbd></a>
        <a href="skills.html" class="cmd-item"><span>🛠️ Platform &amp; DevOps Tech Stack</span><kbd>Page</kbd></a>
        <a href="experience.html" class="cmd-item"><span>🏢 Experience (Quantiphi &amp; TCS)</span><kbd>Page</kbd></a>
        <a href="projects.html" class="cmd-item"><span>🚀 Personal Projects (FinTrack, Terraform, Zenith)</span><kbd>Page</kbd></a>
        <a href="certifications.html" class="cmd-item"><span>🎓 Certifications &amp; GCP Architect Roadmap</span><kbd>Page</kbd></a>
        <a href="contact.html" class="cmd-item"><span>📬 Contact Me</span><kbd>Page</kbd></a>
        <a href="resume/Femin_BJ_Resume.pdf" download class="cmd-item"><span>📄 Download Resume PDF</span><kbd>Action</kbd></a>
        <a href="https://fintrack-rose-six.vercel.app/investments" target="_blank" rel="noopener" class="cmd-item"><span>📈 Open FinTrack Live App</span><kbd>External</kbd></a>
        <a href="https://zenithproductivity-ten.vercel.app/" target="_blank" rel="noopener" class="cmd-item"><span>⚡ Open Zenith Productivity OS</span><kbd>External</kbd></a>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  const trigger = document.getElementById('cmdTrigger');
  const input = document.getElementById('cmdInput');
  const items = modal.querySelectorAll('.cmd-item');

  function toggleCmd(show) {
    modal.classList.toggle('open', show);
    if (show) {
      input.value = '';
      items.forEach(i => i.style.display = 'flex');
      setTimeout(() => input.focus(), 50);
    }
  }

  if (trigger) trigger.addEventListener('click', () => toggleCmd(true));

  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      toggleCmd(!modal.classList.contains('open'));
    } else if (e.key === 'Escape' && modal.classList.contains('open')) {
      toggleCmd(false);
    }
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) toggleCmd(false);
  });

  input.addEventListener('input', () => {
    const q = input.value.toLowerCase();
    items.forEach(item => {
      item.style.display = item.textContent.toLowerCase().includes(q) ? 'flex' : 'none';
    });
  });
})();