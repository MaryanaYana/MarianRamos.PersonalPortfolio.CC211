const contactForm = document.querySelector(".contact-form");
const feedback = document.querySelector(".form-feedback");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  feedback.textContent = "Thank you! Your message is ready.";

  contactForm.reset();
});
