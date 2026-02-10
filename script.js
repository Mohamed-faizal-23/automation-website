/* Navbar background on scroll */
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

/* Smooth scrolling */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

/* Scroll reveal animation */
const revealElements = document.querySelectorAll(
  ".glass-card, .section h2, .section p"
);

const reveal = () => {
  revealElements.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      el.classList.add("reveal");
    }
  });
};

window.addEventListener("scroll", reveal);
reveal();
