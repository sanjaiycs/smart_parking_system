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
});
