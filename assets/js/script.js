const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('[data-menu]');

if (menuButton && navigation) {
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    const label = menuButton.querySelector('.sr-only');
    if (label) label.textContent = 'Open navigation';
  };

  menuButton.addEventListener('click', () => {
    const opening = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(opening));
    navigation.classList.toggle('is-open', opening);
    document.body.classList.toggle('menu-open', opening);
    const label = menuButton.querySelector('.sr-only');
    if (label) label.textContent = opening ? 'Close navigation' : 'Open navigation';
  });

  navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

  window.addEventListener('resize', () => {
    if (window.innerWidth > 820) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}

document.querySelectorAll('[data-year]').forEach((year) => {
  year.textContent = String(new Date().getFullYear());
});

const header = document.querySelector('.site-header');
if (header) {
  const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 16);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
}

const motionIsReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = document.querySelectorAll(
  '.section > .section-shell, .care-guide-grid, .service-photo-strip, .directory-card, .testimonial-card'
);

if (!motionIsReduced && 'IntersectionObserver' in window) {
  revealItems.forEach((item) => item.classList.add('reveal-ready'));
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-revealed');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  revealItems.forEach((item) => revealObserver.observe(item));
}

if (!document.querySelector('.mobile-booking-bar') && !document.querySelector('.error-page')) {
  const mobileBookingBar = document.createElement('div');
  mobileBookingBar.className = 'mobile-booking-bar';
  mobileBookingBar.innerHTML = '<a href="https://kauaidrip.janeapp.com/" target="_blank" rel="noopener noreferrer">Book an appointment</a>';
  document.body.appendChild(mobileBookingBar);
}
