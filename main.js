const contactForm = document.getElementById("contactForm");
const successAlert = document.getElementById("successAlert");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Show the success alert again
    successAlert.classList.remove("d-none");
    successAlert.classList.add("show");

    // Clear the form fields
    contactForm.reset();

    // Scroll to the success message
    successAlert.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});

// Restore the alert after Bootstrap closes it
successAlert.addEventListener("closed.bs.alert", function() {
    successAlert.classList.remove("d-none");
    successAlert.classList.remove("show");
});