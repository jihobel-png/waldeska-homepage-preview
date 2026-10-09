const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');

const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 12);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav?.classList.toggle('is-open', !open);
  document.body.classList.toggle('menu-open', !open);
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  });
});

document.querySelectorAll('.demo-form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = form.querySelector('.form-status');
    if (status) status.textContent = 'Náhled je v bezpečném režimu — formulář zatím nic neodesílá.';
  });
});

const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px' });
  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}

const photoDialog = document.querySelector('.photo-dialog');
const photoViewer = photoDialog?.querySelector('figure img');
const photoCaption = photoDialog?.querySelector('figcaption');
const photoCount = photoDialog?.querySelector('[data-photo-count]');
const photoClose = photoDialog?.querySelector('[data-photo-close]');
const galleryPhotos = [...document.querySelectorAll('img[data-photo]')].map((img) => ({
  id: img.dataset.photo,
  src: img.getAttribute('src').replace(/-\d+\.webp$/, '-1800.webp'),
  alt: img.alt,
  caption: img.dataset.caption || img.alt,
}));
let activePhoto = 0;
let photoOpener = null;

const showPhoto = (index) => {
  if (!photoViewer || !galleryPhotos.length) return;
  activePhoto = (index + galleryPhotos.length) % galleryPhotos.length;
  const photo = galleryPhotos[activePhoto];
  photoViewer.src = photo.src;
  photoViewer.alt = photo.alt;
  if (photoCaption) photoCaption.textContent = photo.caption;
  if (photoCount) photoCount.textContent = `${String(activePhoto + 1).padStart(2, '0')} / ${galleryPhotos.length}`;
};

if (photoDialog && typeof photoDialog.showModal === 'function') {
  document.querySelectorAll('[data-gallery-open]').forEach((button) => {
    button.addEventListener('click', () => {
      const index = galleryPhotos.findIndex((photo) => photo.id === button.dataset.galleryOpen);
      if (index < 0) return;
      photoOpener = button;
      showPhoto(index);
      photoDialog.showModal();
      document.body.classList.add('photo-open');
      photoClose?.focus();
    });
  });
  photoClose?.addEventListener('click', () => photoDialog.close());
  photoDialog.querySelector('[data-photo-prev]')?.addEventListener('click', () => showPhoto(activePhoto - 1));
  photoDialog.querySelector('[data-photo-next]')?.addEventListener('click', () => showPhoto(activePhoto + 1));
  photoDialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      showPhoto(activePhoto + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
  photoDialog.addEventListener('click', (event) => {
    const bounds = photoDialog.getBoundingClientRect();
    if (event.target === photoDialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) photoDialog.close();
  });
  photoDialog.addEventListener('close', () => {
    document.body.classList.remove('photo-open');
    photoOpener?.focus({ preventScroll: true });
    photoViewer?.removeAttribute('src');
  });
}
