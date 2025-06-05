// Navigation Animations
var tl = gsap.timeline();

tl.from(".nav h1, .nav h2", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    delay: 0.8
});

tl.from(".nav h3", {
    y: -20,
    opacity: 0,
    duration: 0.8,
    stagger: 0.3
});

tl.from("#dark-mode i", {
    scale: 0,
    opacity: 0,
    duration: 0.5,
    delay: 0.8
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: "smooth"
            });
        }
    });
});

// app.js - Updated to handle View Skills button click

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const viewSkillBtn = document.getElementById('viewSkillBtn');
    const skillsSection = document.getElementById('skills');
  
    if (viewSkillBtn && skillsSection) {
      viewSkillBtn.addEventListener('click', () => {
        skillsSection.scrollIntoView({ behavior: 'smooth' });
      });
    }
  });
  



// Home Section Animations
gsap.from(".home h2, .home p, .home button", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    delay: 1,
    stagger: 0.2
});

// Projects Section Animations
gsap.from(".projects h1", {
    y: -30,
    opacity: 0,
    duration: 0.5,
    delay: 0.8
});

// Skills Section Animations
gsap.from(".skill-list li", {
    y: 20,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    stagger: 0.2
});

// Sports Achievements Section Animations
gsap.from(".sports-header", {
    y: -50,
    opacity: 0,
    duration: 1,
    delay: 0.5,
});

gsap.from(".achievement", {
    y: 20,
    opacity: 0,
    duration: 0.5,
    delay: 1,
    stagger: 0.2,
});

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate form fields
    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // Simulate form submission (replace with actual backend logic)
    console.log('Form Submitted:', { name, email, message });
    alert('Thank you for your message! I will get back to you soon.');

    // Clear the form
    document.getElementById('contact-form').reset();
});