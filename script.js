// Scroll to Top Button
const scrollTopBtn = document.getElementById("scroll-top");

window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Add to Cart Notification
function addToCart() {
  alert("Item added to cart!");
}

// Contact Form Validation and Feedback
const contactForm = document.getElementById("contact-form");
const formResponse = document.getElementById("form-response");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      formResponse.style.color = "red";
      formResponse.textContent = "Please fill in all fields.";
    } else {
      formResponse.style.color = "green";
      formResponse.textContent = "Message sent successfully!";
      contactForm.reset();
    }
  });
}
