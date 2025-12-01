const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.nav-links');

// Toggle Mobile Menu
function toggleMenu() {
  navLinks.classList.toggle('open');
  const isExpanded = navLinks.classList.contains('open');
  menuButton.setAttribute('aria-expanded', isExpanded);
  menuButton.innerHTML = isExpanded ? '✕' : '☰';
}

menuButton.addEventListener('click', toggleMenu);

// Close menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('open')) {
      toggleMenu();
    }
  });
});

// Contact Form Handling
const contactForm = document.getElementById('contact-form');
const messageDiv = document.getElementById('form-message');

if (contactForm && messageDiv) {
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name').value.trim();
    const emailInput = document.getElementById('email').value.trim();

    if (nameInput === '' || emailInput === '') {
      messageDiv.textContent = 'Please fill out all required fields.';
      messageDiv.style.color = 'red';
    } else {
      messageDiv.textContent = 'Thank you for your message, I will get back to you soon...';
      messageDiv.style.color = 'green';
    }
  });
}
