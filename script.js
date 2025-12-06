document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 2. Project Card Fade-In Animation on Scroll (Intersection Observer)
    const projectCards = document.querySelectorAll('.project-card');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                // Optional: remove 'visible' class if you want it to fade out on scroll up
                // entry.target.classList.remove('visible'); 
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the item is visible
    });

    projectCards.forEach(card => {
        card.classList.add('fade-in');
        observer.observe(card);
    });

    // Add necessary CSS for the animation (since we can't write it in style.css directly)
    const style = document.createElement('style');
    style.innerHTML = `
        .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
});