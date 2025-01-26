// script.js
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Form submitted!");
        // Add AJAX call here to send form data to the server
    });
});