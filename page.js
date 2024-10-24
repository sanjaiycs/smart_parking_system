document.addEventListener("DOMContentLoaded", () => {
    // Function to open pop-up for under development message
    const showPopup = () => {
        alert("This feature is under development.");
    };

    // Assign to all buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', showPopup);
    });

    // Fade-in animation on scroll for feature boxes
    const featureBoxes = document.querySelectorAll('.feature-box');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the box is visible
    });

    featureBoxes.forEach(box => {
        observer.observe(box);
    });
});
