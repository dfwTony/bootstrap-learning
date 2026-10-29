const contactForm = document.getElementById("contactForm");
const successAlert = document.getElementById("successAlert");
const closeAlert = document.getElementById("closeAlert");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    successAlert.classList.remove("d-none");

    contactForm.reset();

    successAlert.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});

closeAlert.addEventListener("click", function () {
    successAlert.classList.add("d-none");
});