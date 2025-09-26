// Animation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Scroll animation for project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    projectCards.forEach(card => {
        observer.observe(card);
    });
});