
    const toggleButton = document.querySelector('.navbar-toggle');
    const navLinks = document.querySelector('.nav-links');

    toggleButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });


// for thank you message
  const contactForm = document.getElementById('contactForm');
  const thankYouMessage = document.getElementById('thankYouMessage');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    contactForm.reset();
    thankYouMessage.style.display = 'block';
 // Hide after 5 seconds
    setTimeout(() => {
      thankYouMessage.style.display = 'none';
    }, 5000);
  });



