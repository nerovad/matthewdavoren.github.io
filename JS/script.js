function toggleMenu() {
    var menu = document.querySelector('.menu-items');
    var button = document.querySelector('.menu-toggle-button');
    
    if (menu.style.display === 'block') {
      menu.style.display = 'none';
      button.textContent = 'MENU';
    } else {
      menu.style.display = 'block';
      button.textContent = 'CLOSE';
    }
  }

  function toggleContact() {
    var contact = document.querySelector('.contact-list');
    var contactButton = document.querySelector('.contact-button');
    
    if (contact.style.display === 'block') {
      contact.style.display = 'none';
      contactButton.textContent = 'CONTACT';
    } else {
      contact.style.display = 'block';
      contactButton.textContent = 'CLOSE';
    }
  }

  function toggleHamburger() {
    var hamburgerList = document.querySelector('.hamburger-list');
    
    if (hamburgerList.style.transform === 'translateX(0px)') {
      hamburgerList.style.transform = 'translateX(100%)'; // Move out of view
    } else {
      hamburgerList.style.display = 'block'; // Ensure it's block before sliding in
      hamburgerList.style.transform = 'translateX(0px)'; // Slide into view
    }
}

document.querySelector('.close-button').addEventListener('click', function() {
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

