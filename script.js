window.addEventListener('load', function() {
    const heroImage = document.querySelector('.hero-image img');
    const heroGreeatings = document.querySelector('.hero-content h1');
    const heroSubtitle = document.querySelector('.hero-content h2');
    const heroTitle = document.querySelector('.hero-content h3');

    // Function to fade in and lift up an element
    function fadeInAndLift(element, delay) {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, delay);
    }

    // Animate elements with different delays
    fadeInAndLift(heroImage, 0);
    fadeInAndLift(heroGreeatings, 400);
    fadeInAndLift(heroSubtitle, 200);
    fadeInAndLift(heroTitle, 600);
});
