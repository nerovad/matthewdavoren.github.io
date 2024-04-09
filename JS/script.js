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

function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

