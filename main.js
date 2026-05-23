/* ── MOBILE MENU ── */
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

/* ── REVEAL ON SCROLL ── */
document.querySelectorAll('.features-grid, .testimonials-grid').forEach(grid => {
  grid.querySelectorAll('.reveal').forEach((el, i) => {
    if (!el.style.transitionDelay) {
      el.style.transitionDelay = (i * 0.1) + 's';
    }
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ── ABOUT STAT CARDS STAGGER ── */
const aboutObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.about-stat-card').forEach((card, i) => {
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0) scale(1)';
        }, i * 100);
      });
      aboutObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });

const aboutVisual = document.querySelector('.about-visual');
if (aboutVisual) {
  aboutVisual.querySelectorAll('.about-stat-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px) scale(.95)';
    card.style.transition = 'opacity .5s cubic-bezier(.22,.68,0,1.1), transform .5s cubic-bezier(.22,.68,0,1.2)';
  });
  aboutObserver.observe(aboutVisual);
}

/* ── CTA FORM ── */
function handleCTA() {
  const input = document.querySelector('.cta-input');
  const email = input.value.trim();
  if (!email || !email.includes('@')) {
    input.style.borderColor = '#F87171';
    input.style.animation = 'shake .3s ease';
    setTimeout(() => {
      input.style.borderColor = '';
      input.style.animation = '';
    }, 1500);
    return;
  }
  const btn = document.querySelector('.btn-white');
  btn.textContent = '✓ تم التسجيل!';
  btn.style.background = '#D1FAE5';
  btn.style.color = '#065F46';
  input.value = '';
  setTimeout(() => {
    btn.textContent = 'ابدأ مجاناً';
    btn.style.background = 'white';
    btn.style.color = 'var(--primary)';
  }, 3000);
}
