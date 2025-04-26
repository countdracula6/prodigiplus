// Modal open/close
const modal = document.getElementById("contactModal");
const openModalBtn = document.querySelector(".cta-btn");
const closeModalBtn = document.querySelector(".close-button");
const contactForm = document.getElementById("contactForm");

// Open Modal
openModalBtn.addEventListener("click", function(event) {
  event.preventDefault();
  modal.style.display = "block";
});

// Close Modal
closeModalBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// Click outside modal to close
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// Contact Form Submit
contactForm.addEventListener("submit", function(event) {
  event.preventDefault();
  contactForm.innerHTML = "<h3>Thank you! We'll get back to you in less than 30 minutes.</h3>";
});
