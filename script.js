document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Navbar animation
    const navItems = document.querySelectorAll('nav ul li a');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, { scale: 1.1, duration: 0.3 });
        });
        item.addEventListener('mouseleave', () => {
            gsap.to(item, { scale: 1, duration: 0.3 });
        });
    });

    // Hero background animation
    gsap.to('.hero-background', {
        backgroundPosition: '100% 100%',
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: 'linear'
    });

    // Accomplishments animation
    gsap.from('.accomplishment', {
        scrollTrigger: {
            trigger: '#accomplishments',
            start: 'top center'
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1
    });

    // Services animation
    gsap.from('.service', {
        scrollTrigger: {
            trigger: '#services',
            start: 'top center'
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1
    });

    // Packages animation
    gsap.from('.package', {
        scrollTrigger: {
            trigger: '#packages',
            start: 'top center'
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1
    });

    // FAQ toggle
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const toggle = item.querySelector('.faq-toggle');

        question.addEventListener('click', () => {
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector('.faq-answer').style.maxHeight = null;
                    otherItem.querySelector('.faq-toggle').textContent = '+';
                }
            });

            answer.style.maxHeight = answer.style.maxHeight ? null : answer.scrollHeight + 'px';
            toggle.textContent = toggle.textContent === '+' ? '-' : '+';
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message. We will get back to you soon!');
        contactForm.reset();
    });
});

// Testimonial slider
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonials[currentTestimonial].style.display = 'none';
    testimonials[index].style.display = 'block';
    currentTestimonial = index;
}

function nextTestimonial() {
    let next = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(next);
}

setInterval(nextTestimonial, 5000); // Change testimonial every 5 seconds

// Initialize
showTestimonial(0);
