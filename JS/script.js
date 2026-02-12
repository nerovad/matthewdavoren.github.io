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
}

function toggleContact() {
  var contact = document.querySelector('.contact-list');
  var contactButton = document.querySelector('.contact-button');
  var menu = document.querySelector('.menu-items');
  var menuButton = document.querySelector('.menu-toggle-button');

  // Close menu if open
  if (menu.classList.contains('dropdown-open')) {
    menu.classList.remove('dropdown-open');
    menuButton.textContent = 'NAVIGATION';
  }

  contact.classList.toggle('dropdown-open');
  contactButton.textContent = contact.classList.contains('dropdown-open') ? 'CLOSE' : 'CONTACT';
}

// Close dropdowns when clicking outside
document.addEventListener('click', function (e) {
  var menu = document.querySelector('.menu-items');
  var menuBtn = document.querySelector('.menu-toggle-button');
  var contact = document.querySelector('.contact-list');
  var contactBtn = document.querySelector('.contact-button');

  if (!e.target.closest('.menu-button-container') && menu.classList.contains('dropdown-open')) {
    menu.classList.remove('dropdown-open');
    menuBtn.textContent = 'NAVIGATION';
  }
  if (!e.target.closest('.contact-button-container') && contact.classList.contains('dropdown-open')) {
    contact.classList.remove('dropdown-open');
    contactBtn.textContent = 'CONTACT';
  }
});

function toggleHamburger() {
  var hamburgerList = document.querySelector('.hamburger-list');

  if (hamburgerList.style.transform === 'translateX(0px)') {
    hamburgerList.style.transform = 'translateX(100%)'; // Move out of view
  } else {
    hamburgerList.style.display = 'block'; // Ensure it's block before sliding in
    hamburgerList.style.transform = 'translateX(0px)'; // Slide into view
  }
}

document.querySelector('.close-button').addEventListener('click', function () {
  var hamburgerList = document.querySelector('.hamburger-list');
  var hamburgerButton = document.querySelector('.hamburger-button');
  hamburgerList.style.transform = 'translateX(100%)'; // Slide out of view
  hamburgerButton.style.transform = 'translateX(0px)'; // Reset button position
});

function smoothScroll(target) {
  document.querySelector(target).scrollIntoView({
    behavior: 'smooth'
  });
}

