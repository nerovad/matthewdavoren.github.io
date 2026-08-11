<<<<<<< HEAD
var menu = document.querySelector('.menu-items');
var menuButton = document.querySelector('.menu-toggle-button');
var contact = document.querySelector('.contact-list');
var contactButton = document.querySelector('.contact-button');
var hamburgerList = document.querySelector('.hamburger-list');
var hamburgerButton = document.querySelector('.hamburger-button');
var closeButton = document.querySelector('.close-button');

function closeMenu() {
  menu.classList.remove('dropdown-open');
  menuButton.textContent = 'NAVIGATION';
  menuButton.setAttribute('aria-expanded', 'false');
}

function closeContact() {
  contact.classList.remove('dropdown-open');
  contactButton.textContent = 'CONTACT';
  contactButton.setAttribute('aria-expanded', 'false');
}

function closeHamburger() {
  hamburgerList.classList.remove('show');
  hamburgerButton.setAttribute('aria-expanded', 'false');
  hamburgerButton.setAttribute('aria-label', 'Open menu');
}

function toggleMenu() {
  closeContact();
  var open = menu.classList.toggle('dropdown-open');
  menuButton.textContent = open ? 'CLOSE' : 'NAVIGATION';
  menuButton.setAttribute('aria-expanded', String(open));
||||||| 59115e5
function toggleMenu() {
  var menu = document.querySelector('.menu-items');
  var button = document.querySelector('.menu-toggle-button');
  var contact = document.querySelector('.contact-list');
  var contactButton = document.querySelector('.contact-button');

  // Close contact if open
  if (contact.classList.contains('dropdown-open')) {
    contact.classList.remove('dropdown-open');
    contactButton.textContent = 'CONTACT';
  }

  menu.classList.toggle('dropdown-open');
  button.textContent = menu.classList.contains('dropdown-open') ? 'CLOSE' : 'NAVIGATION';
=======
var menu = document.querySelector('.menu-items');
var menuButton = document.querySelector('.menu-toggle-button');
var contact = document.querySelector('.contact-list');
var contactButton = document.querySelector('.contact-button');
var hamburgerList = document.querySelector('.hamburger-list');
var hamburgerButton = document.querySelector('.hamburger-button');
var closeButton = document.querySelector('.close-button');
var themeToggle = document.querySelector('.theme-toggle');
var themeColorMeta = document.querySelector('meta[name="theme-color"]');

// Dark is the default and is represented by the absence of the attribute, so
// the stylesheet's :root values are the dark theme and need no override.
var THEME_COLORS = { dark: '#1b1b1b', light: '#f5f5f5' };

function currentTheme() {
  return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
}

function applyTheme(theme) {
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
  if (themeColorMeta) themeColorMeta.setAttribute('content', THEME_COLORS[theme]);
  // The control is labelled by what it will do, matching the icon it shows.
  var label = 'Switch to ' + (theme === 'light' ? 'dark' : 'light') + ' mode';
  themeToggle.setAttribute('aria-label', label);
  themeToggle.setAttribute('title', label);
}

function toggleTheme() {
  var next = currentTheme() === 'light' ? 'dark' : 'light';
  applyTheme(next);
  try {
    localStorage.setItem('theme', next);
  } catch (e) {
    /* private browsing or storage disabled -- the theme still applies for this page */
  }
}

// Sync the label and meta colour with whatever the inline head script settled on.
applyTheme(currentTheme());

function closeMenu() {
  menu.classList.remove('dropdown-open');
  menuButton.textContent = 'NAVIGATION';
  menuButton.setAttribute('aria-expanded', 'false');
}

function closeContact() {
  contact.classList.remove('dropdown-open');
  contactButton.textContent = 'CONTACT';
  contactButton.setAttribute('aria-expanded', 'false');
}

function closeHamburger() {
  hamburgerList.classList.remove('show');
  hamburgerButton.setAttribute('aria-expanded', 'false');
  hamburgerButton.setAttribute('aria-label', 'Open menu');
}

function toggleMenu() {
  closeContact();
  var open = menu.classList.toggle('dropdown-open');
  menuButton.textContent = open ? 'CLOSE' : 'NAVIGATION';
  menuButton.setAttribute('aria-expanded', String(open));
>>>>>>> fix/site-bugs-and-accessibility
}

function toggleContact() {
  closeMenu();
  var open = contact.classList.toggle('dropdown-open');
  contactButton.textContent = open ? 'CLOSE' : 'CONTACT';
  contactButton.setAttribute('aria-expanded', String(open));
}

// Driven by the .show class rather than inline styles, so the panel stays
// governed by the stylesheet — including the `display: none` that hides it
// above the mobile breakpoint if the window is resized while it is open.
function toggleHamburger() {
  var open = hamburgerList.classList.toggle('show');
  hamburgerButton.setAttribute('aria-expanded', String(open));
  hamburgerButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}

closeButton.addEventListener('click', closeHamburger);

// Close dropdowns when clicking outside
document.addEventListener('click', function (e) {
  if (!(e.target instanceof Element)) return;

  if (!e.target.closest('.menu-button-container') && menu.classList.contains('dropdown-open')) {
    closeMenu();
  }
  if (!e.target.closest('.contact-button-container') && contact.classList.contains('dropdown-open')) {
    closeContact();
  }
  if (!e.target.closest('.hamburger-list') && !e.target.closest('.hamburger-button') &&
      hamburgerList.classList.contains('show')) {
    closeHamburger();
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key !== 'Escape') return;
  closeMenu();
  closeContact();
  closeHamburger();
});

// In-page links scroll smoothly instead of jumping, and close whichever menu
// was used to trigger them. Keeping the real fragment in the href means the
// links still work if this script fails to load.
document.addEventListener('click', function (e) {
  if (!(e.target instanceof Element)) return;

  var link = e.target.closest('a[href^="#"]');
  if (!link) return;

  var id = link.getAttribute('href');
  if (id === '#') return;

  var target = document.querySelector(id);
  if (!target) return;

  e.preventDefault();
  closeMenu();
  closeContact();
  closeHamburger();
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Scroll-triggered animations
var scrollObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      scrollObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.animate-on-scroll').forEach(function (el) {
  scrollObserver.observe(el);
  // Clear transition-delay after reveal so hover effects are snappy
  el.addEventListener('transitionend', function handler() {
    el.style.transitionDelay = '0s';
    el.removeEventListener('transitionend', handler);
  });
});
