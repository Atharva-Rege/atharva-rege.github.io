/*
 * Renders the page from data/site-data.js (SITE_DATA), plus the ambient
 * particle-network canvas and scroll-reveal behaviour. No build step,
 * no dependencies — just vanilla DOM.
 */

function renderAuthors(authors) {
  return authors
    .map((a) => {
      if (a.self) return `<strong>${a.text}</strong>`;
      if (a.href) return `<a href="${a.href}" target="_blank" rel="noopener">${a.text}</a>`;
      return a.text;
    })
    .join(', ');
}

function makeLinkEl(link) {
  const a = document.createElement('a');
  a.href = link.href;
  a.textContent = link.label;
  if (/^https?:\/\//.test(link.href)) {
    a.target = '_blank';
    a.rel = 'noopener';
  }
  return a;
}

function renderProfile(profile) {
  const photo = document.getElementById('profile-photo');
  photo.src = profile.photo;
  photo.alt = `${profile.name} — profile photo`;

  document.getElementById('profile-name').textContent = profile.name;
  document.getElementById('profile-tagline').innerHTML = profile.tagline;
  document.getElementById('profile-bio').innerHTML = profile.bio;
  document.getElementById('research-intro').textContent = profile.researchInterest;
  document.title = profile.name;

  const heroLinks = document.getElementById('profile-links');
  const footerLinks = document.getElementById('footer-links');
  profile.links.forEach((link) => {
    heroLinks.appendChild(makeLinkEl(link));
    footerLinks.appendChild(makeLinkEl(link));
  });
}

function renderNews(news) {
  const list = document.getElementById('news-list');
  news.forEach((item) => {
    const li = document.createElement('li');

    const date = document.createElement('span');
    date.className = 'news-date';
    date.textContent = item.date;

    const text = document.createElement('span');
    text.className = 'news-text';
    text.innerHTML = item.text;

    li.append(date, text);
    list.appendChild(li);
  });
}

function renderCardList(containerId, items) {
  const container = document.getElementById(containerId);

  items.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'card';

    if (item.image) {
      const img = document.createElement('img');
      img.className = 'card-thumb';
      img.src = item.image;
      img.alt = item.title;
      img.loading = 'lazy';
      card.appendChild(img);
    }

    const body = document.createElement('div');
    body.className = 'card-body';

    const titleLink = document.createElement('a');
    titleLink.className = 'card-title';
    titleLink.href = item.titleHref || '#';
    titleLink.textContent = item.title;
    if (item.titleHref && /^https?:\/\//.test(item.titleHref)) {
      titleLink.target = '_blank';
      titleLink.rel = 'noopener';
    }
    body.appendChild(titleLink);

    if (item.authors) {
      const authors = document.createElement('p');
      authors.className = 'card-authors';
      authors.innerHTML = renderAuthors(item.authors);
      body.appendChild(authors);
    }

    if (item.venue) {
      const venue = document.createElement('p');
      venue.className = 'card-venue';
      venue.textContent = item.venue;
      body.appendChild(venue);
    }

    if (item.links && item.links.length) {
      const linksRow = document.createElement('div');
      linksRow.className = 'card-links';
      item.links.forEach((link) => linksRow.appendChild(makeLinkEl(link)));
      body.appendChild(linksRow);
    }

    if (item.description) {
      const desc = document.createElement('p');
      desc.className = 'card-desc';
      desc.textContent = item.description.replace(/\s+/g, ' ').trim();
      body.appendChild(desc);
    }

    card.appendChild(body);
    container.appendChild(card);
  });
}

function setupScrollReveal() {
  const sections = document.querySelectorAll('.section');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion || !('IntersectionObserver' in window)) {
    sections.forEach((s) => s.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  sections.forEach((s) => observer.observe(s));
}

function setupParticleNetwork() {
  const canvas = document.getElementById('bg-canvas');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!canvas || reduceMotion) return;

  const ctx = canvas.getContext('2d');
  const LINK_DIST = 140;
  const AREA_PER_PARTICLE = 12000;
  const MAX_PARTICLES = 90;

  let particles = [];
  let dpr = Math.min(window.devicePixelRatio || 1, 2);

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.min(MAX_PARTICLES, Math.floor((window.innerWidth * window.innerHeight) / AREA_PER_PARTICLE));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25
    }));
  }

  function step() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    ctx.clearRect(0, 0, w, h);

    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
    }

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i];
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < LINK_DIST) {
          ctx.strokeStyle = `rgba(124, 58, 237, ${0.18 * (1 - dist / LINK_DIST)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    for (const p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(34, 211, 238, 0.65)';
      ctx.fill();
    }

    requestAnimationFrame(step);
  }

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 150);
  });

  resize();
  requestAnimationFrame(step);
}

document.addEventListener('DOMContentLoaded', () => {
  if (typeof SITE_DATA === 'undefined') {
    console.error('SITE_DATA not found — check that data/site-data.js loaded before script.js');
    return;
  }

  renderProfile(SITE_DATA.profile);
  renderNews(SITE_DATA.news);
  renderCardList('publications-list', SITE_DATA.publications);
  renderCardList('projects-list', SITE_DATA.projects);

  setupScrollReveal();
  setupParticleNetwork();
});
