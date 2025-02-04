document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio website loaded successfully!");

    // Smooth Scrolling
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href').startsWith("#")) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 50,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Dynamic Project List Message
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
        console.log("Projects section loaded successfully!");
    }
});
