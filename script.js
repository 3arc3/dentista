(() => {
  'use strict';

  /* =========================================================
     DATA
     ========================================================= */
  const team = [
    { initials: 'EV', color: '#2F5D53', name: 'Dra. Elena Vázquez', role: 'Directora clínica · Ortodoncia', bio: '18 años de experiencia. Especialista en ortodoncia invisible y alineadores.' },
    { initials: 'MF', color: '#C8863B', name: 'Dr. Marcos Ferreiro', role: 'Implantología', bio: 'Referente en implantes de carga inmediata y rehabilitación oral completa.' },
    { initials: 'SN', color: '#6E8F7A', name: 'Dra. Sofía Nieto', role: 'Odontopediatría', bio: 'Cuida de los más pequeños con un trato paciente y sin sustos.' },
    { initials: 'IC', color: '#3E6E63', name: 'Dr. Iván Castro', role: 'Estética dental', bio: 'Diseño de sonrisa y carillas de porcelana con resultados naturales.' }
  ];

  const services = [
    {
      name: 'Revisión y limpieza',
      desc: 'Diagnóstico completo, limpieza profesional y radiografía si es necesaria.',
      price: '45€',
      icon: '<circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.6"/><path d="M9 12.5l2 2 4-4.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>'
    },
    {
      name: 'Blanqueamiento dental',
      desc: 'Blanqueamiento led en consulta con resultados visibles desde la primera sesión.',
      price: '180€',
      icon: '<path d="M12 4v2M18 6l-1.4 1.4M6 6l1.4 1.4M4 14h2M18 14h2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="12" cy="14" r="5.5" stroke="currentColor" stroke-width="1.6"/>'
    },
    {
      name: 'Ortodoncia invisible',
      desc: 'Alineadores transparentes a medida, con revisiones mensuales incluidas.',
      price: 'Desde 2.200€',
      icon: '<rect x="5" y="8" width="14" height="9" rx="3" stroke="currentColor" stroke-width="1.6"/><path d="M8.5 8V6.5a3.5 3.5 0 0 1 7 0V8" stroke="currentColor" stroke-width="1.6"/>'
    },
    {
      name: 'Implantes dentales',
      desc: 'Implante de titanio con corona incluida y estudio 3D previo.',
      price: 'Desde 850€',
      icon: '<path d="M12 3v6M9 9h6l-1 12h-4L9 9Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>'
    },
    {
      name: 'Endodoncia',
      desc: 'Tratamiento de conducto con anestesia local y técnica rotatoria.',
      price: 'Desde 120€',
      icon: '<path d="M12 4c-2.5 0-4 1.4-4 4 0 4 2 8 4 11 2-3 4-7 4-11 0-2.6-1.5-4-4-4Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>'
    },
    {
      name: 'Odontopediatría',
      desc: 'Primeras visitas, selladores y flúor para cuidar los dientes de leche.',
      price: 'Desde 35€',
      icon: '<circle cx="9" cy="10" r="1.2" fill="currentColor"/><circle cx="15" cy="10" r="1.2" fill="currentColor"/><path d="M8 14.5c1 1.2 2.4 1.8 4 1.8s3-.6 4-1.8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.6"/>'
    }
  ];

  const galleryItems = [
    { label: 'Recepción', color: '#2F5D53', tall: true, icon: '<path d="M4 20V9l8-6 8 6v11" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M9 20v-6h6v6" stroke="currentColor" stroke-width="1.4"/>' },
    { label: 'Gabinete 1', color: '#C8863B', icon: '<rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" stroke-width="1.4"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.4"/>' },
    { label: 'Sala de espera', color: '#6E8F7A', icon: '<rect x="4" y="10" width="16" height="7" rx="2" stroke="currentColor" stroke-width="1.4"/><path d="M6 10V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" stroke="currentColor" stroke-width="1.4"/>' },
    { label: 'Zona infantil', color: '#E4A65C', icon: '<circle cx="12" cy="9" r="3.4" stroke="currentColor" stroke-width="1.4"/><path d="M5 20c1.4-3.6 4-5.5 7-5.5s5.6 1.9 7 5.5" stroke="currentColor" stroke-width="1.4"/>' },
    { label: 'Esterilización', color: '#3E6E63', icon: '<path d="M12 3l7 3.5v5.2c0 4.6-3 8.8-7 10.3-4-1.5-7-5.7-7-10.3V6.5L12 3Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>' },
    { label: 'Rayos X digitales', color: '#1E3E37', icon: '<circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.4"/><path d="M12 3.5v17M3.5 12h17" stroke="currentColor" stroke-width="1.4"/>' }
  ];

  const reviews = [
    { name: 'Laura Gómez', meta: 'Paciente desde 2019', initials: 'LG', color: '#2F5D53', quote: 'Le tenía pánico al dentista y en Lúmina consiguieron que fuera tranquilo. Me explicaron cada paso antes de hacerlo.' },
    { name: 'Javier Ortiz', meta: 'Implante dental', initials: 'JO', color: '#C8863B', quote: 'El presupuesto fue claro desde el primer día, sin sorpresas. El resultado del implante ha sido excelente.' },
    { name: 'Marta Salas', meta: 'Ortodoncia invisible', initials: 'MS', color: '#6E8F7A', quote: 'Un año con los alineadores y el cambio ha sido increíble. Las revisiones son rápidas y el equipo muy atento.' },
    { name: 'Familia Ruano', meta: 'Odontopediatría', initials: 'FR', color: '#3E6E63', quote: 'Nuestros hijos ya no lloran al ir al dentista, todo lo contrario, ¡preguntan cuándo toca la próxima cita!' }
  ];

  /* =========================================================
     RENDER: TEAM
     ========================================================= */
  const teamGrid = document.getElementById('teamGrid');
  teamGrid.innerHTML = team.map(m => `
    <div class="team-card">
      <div class="team-avatar" style="background:${m.color}">${m.initials}</div>
      <h4>${m.name}</h4>
      <p class="team-role">${m.role}</p>
      <p class="team-bio">${m.bio}</p>
    </div>
  `).join('');

  /* =========================================================
     RENDER: SERVICES
     ========================================================= */
  const servicesGrid = document.getElementById('servicesGrid');
  servicesGrid.innerHTML = services.map(s => `
    <div class="service-card">
      <div class="service-icon"><svg viewBox="0 0 24 24" fill="none">${s.icon}</svg></div>
      <h3>${s.name}</h3>
      <p>${s.desc}</p>
      <div class="service-price">
        <span class="service-price__value">${s.price}</span>
        <span class="service-price__label">precio orientativo</span>
      </div>
    </div>
  `).join('');

  /* =========================================================
     RENDER: GALLERY
     ========================================================= */
  const galleryGrid = document.getElementById('galleryGrid');
  galleryGrid.innerHTML = galleryItems.map((g, i) => `
    <button class="gallery-item ${g.tall ? 'gallery-item--tall' : ''}" data-index="${i}">
      <span class="gallery-item__bg" style="position:absolute;inset:0;background:${g.color}"></span>
      <svg viewBox="0 0 24 24" fill="none">${g.icon}</svg>
      <span>${g.label}</span>
    </button>
  `).join('');

  /* =========================================================
     RENDER: REVIEWS
     ========================================================= */
  const starSVG = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.8l2.9 6 6.6.9-4.8 4.6 1.1 6.6L12 17.7l-5.8 3.2 1.1-6.6-4.8-4.6 6.6-.9L12 2.8Z"/></svg>';
  const reviewsTrack = document.getElementById('reviewsTrack');
  reviewsTrack.innerHTML = reviews.map(r => `
    <article class="review-card">
      <div class="review-stars">${starSVG.repeat(5)}</div>
      <p class="review-quote">&ldquo;${r.quote}&rdquo;</p>
      <div class="review-author">
        <div class="review-avatar" style="background:${r.color}">${r.initials}</div>
        <div>
          <strong>${r.name}</strong>
          <small>${r.meta}</small>
        </div>
      </div>
    </article>
  `).join('');

  const dotsWrap = document.getElementById('reviewDots');
  dotsWrap.innerHTML = reviews.map((_, i) => `<button class="carousel-dot ${i === 0 ? 'is-active' : ''}" data-index="${i}" aria-label="Ir a la opinión ${i + 1}"></button>`).join('');

  /* =========================================================
     NAVBAR: scroll shadow + active link
     ========================================================= */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    navbar.classList.toggle('is-scrolled', window.scrollY > 12);
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const navLinkEls = Array.from(document.querySelectorAll('.nav-link'));
  const sectionsForNav = navLinkEls
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = '#' + entry.target.id;
        navLinkEls.forEach(link => link.classList.toggle('is-active', link.getAttribute('href') === id));
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
  sectionsForNav.forEach(sec => navObserver.observe(sec));

  /* =========================================================
     MOBILE MENU
     ========================================================= */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuBackdrop = document.getElementById('mobileMenuBackdrop');

  function setMenu(open) {
    mobileMenu.classList.toggle('is-open', open);
    hamburger.classList.toggle('is-open', open);
    hamburger.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
  }
  hamburger.addEventListener('click', () => setMenu(!mobileMenu.classList.contains('is-open')));
  mobileMenuBackdrop.addEventListener('click', () => setMenu(false));
  document.querySelectorAll('.mobile-link').forEach(link => link.addEventListener('click', () => setMenu(false)));

  /* =========================================================
     SCROLL REVEAL
     ========================================================= */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => revealObserver.observe(el));

  /* =========================================================
     STAT COUNTERS
     ========================================================= */
  const statEls = document.querySelectorAll('.stat__num');
  let countersStarted = false;

  function animateCounters() {
    statEls.forEach(el => {
      const target = parseFloat(el.dataset.count);
      const decimals = parseInt(el.dataset.decimal || '0', 10);
      const duration = 1400;
      const start = performance.now();

      function step(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = target * eased;
        el.textContent = decimals ? value.toFixed(decimals) : Math.round(value).toLocaleString('es-ES');
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }

  const statsSection = document.querySelector('.hero__stats');
  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersStarted) {
          countersStarted = true;
          animateCounters();
          statsObserver.disconnect();
        }
      });
    }, { threshold: 0.4 });
    statsObserver.observe(statsSection);
  }

  /* =========================================================
     REVIEWS CAROUSEL
     ========================================================= */
  let reviewIndex = 0;
  const dots = Array.from(document.querySelectorAll('.carousel-dot'));

  function updateCarousel() {
    const offset = reviewIndex * -100;
    reviewsTrack.style.transform = `translateX(${offset}%)`;
    Array.from(reviewsTrack.children).forEach((card, i) => {
      card.style.transform = i === reviewIndex ? 'scale(1)' : 'scale(0.96)';
    });
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === reviewIndex));
  }
  reviewsTrack.style.display = 'flex';
  Array.from(reviewsTrack.children).forEach(card => { card.style.flex = '0 0 100%'; });
  updateCarousel();

  document.getElementById('reviewPrev').addEventListener('click', () => {
    reviewIndex = (reviewIndex - 1 + reviews.length) % reviews.length;
    updateCarousel();
  });
  document.getElementById('reviewNext').addEventListener('click', () => {
    reviewIndex = (reviewIndex + 1) % reviews.length;
    updateCarousel();
  });
  dots.forEach(dot => dot.addEventListener('click', () => {
    reviewIndex = parseInt(dot.dataset.index, 10);
    updateCarousel();
  }));

  /* =========================================================
     GALLERY LIGHTBOX
     ========================================================= */
  const lightbox = document.getElementById('lightbox');
  const lightboxContent = document.getElementById('lightboxContent');
  const lightboxClose = document.getElementById('lightboxClose');

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const g = galleryItems[parseInt(item.dataset.index, 10)];
      lightboxContent.style.background = g.color;
      lightboxContent.innerHTML = `<svg viewBox="0 0 24 24" fill="none">${g.icon}</svg><span>${g.label}</span>`;
      lightbox.classList.add('is-open');
      document.body.classList.add('menu-open');
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  }
  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

  /* =========================================================
     CONTACT FORM: validation + mailto submission
     ========================================================= */
  const form = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');
  const submitLabel = document.getElementById('submitLabel');

  function validateField(field, isValid) {
    field.closest('.field').classList.toggle('has-error', !isValid);
    return isValid;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameEl = document.getElementById('fName');
    const emailEl = document.getElementById('fEmail');
    const messageEl = document.getElementById('fMessage');
    const phoneEl = document.getElementById('fPhone');
    const reasonEl = document.getElementById('fReason');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const nameOk = validateField(nameEl, nameEl.value.trim().length > 1);
    const emailOk = validateField(emailEl, emailPattern.test(emailEl.value.trim()));
    const messageOk = validateField(messageEl, messageEl.value.trim().length > 4);

    if (!nameOk || !emailOk || !messageOk) {
      formNote.textContent = 'Revisa los campos marcados en rojo antes de continuar.';
      formNote.classList.remove('is-success');
      return;
    }

    const subject = `Solicitud de cita — ${reasonEl.value}`;
    const body =
      `Nombre: ${nameEl.value.trim()}\n` +
      `Teléfono: ${phoneEl.value.trim() || 'No indicado'}\n` +
      `Correo: ${emailEl.value.trim()}\n` +
      `Motivo: ${reasonEl.value}\n\n` +
      `Mensaje:\n${messageEl.value.trim()}`;

    const mailtoUrl = `mailto:info@luminaclinica.es?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;

    submitLabel.textContent = 'Abriendo tu correo…';
    formNote.textContent = 'Se ha abierto tu aplicación de correo con el mensaje ya redactado. Si no ocurre nada, escríbenos directamente a info@luminaclinica.es.';
    formNote.classList.add('is-success');

    setTimeout(() => { submitLabel.textContent = 'Enviar mensaje'; }, 3000);
  });

  /* =========================================================
     MISC
     ========================================================= */
  document.getElementById('year').textContent = new Date().getFullYear();
})();
