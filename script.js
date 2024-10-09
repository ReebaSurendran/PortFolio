// Smooth scrolling to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Smoothly scroll to the target element
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
