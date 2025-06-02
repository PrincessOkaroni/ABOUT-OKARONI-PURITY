document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href.startsWith("#")) {
      e.preventDefault();
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function (e) {
    const nameInput = form.elements["name"];
    const emailInput = form.elements["email"];
    const messageInput = form.elements["message"];
    const name = nameInput ? nameInput.value.trim() : "";
    const email = emailInput ? emailInput.value.trim() : "";
    const message = messageInput ? messageInput.value.trim() : "";
    if (!name || !email || !message) {
      e.preventDefault();
      alert("Please fill in all fields before submitting.");
    }
  });
}
