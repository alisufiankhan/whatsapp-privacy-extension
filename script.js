const navbar = document.querySelector('.navbar');
const navLinks = document.querySelector('.nav-links');
const hamburger = document.createElement('div');
hamburger.className = 'hamburger';
hamburger.innerHTML = '<span></span><span></span><span></span>';

// Append hamburger to navbar (before nav-links for visual order, but CSS will handle positioning)
// Actually, let's append it to the navbar, and we'll use flex order or positioning
const logoContainer = document.querySelector('.logo-container');
navbar.insertBefore(hamburger, navLinks);

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});
