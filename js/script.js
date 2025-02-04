document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling for Section Navigation
    const navLinks = document.querySelectorAll('header nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Glowing Navigation Links on Scroll
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('header nav');
        const topSection = document.querySelector('#about');
        const aboutSection = topSection.getBoundingClientRect();
        if (aboutSection.top <= 0) {
            nav.classList.add('glowing');
        } else {
            nav.classList.remove('glowing');
        }
    });

    // Add glowing effect to navigation links on scroll
    const navLinksOnScroll = document.querySelectorAll('header nav ul li a');
    navLinksOnScroll.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.textShadow = '0 0 15px #00FA9A';
        });
        link.addEventListener('mouseleave', () => {
            link.style.textShadow = 'none';
        });
    });
});
