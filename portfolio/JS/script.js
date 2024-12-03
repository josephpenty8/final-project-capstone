// Sticky Header
const header = document.getElementById("header");
const scrollToTopBtn = document.getElementById("scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("sticky");
    scrollToTopBtn.style.display = "block";
  } else {
    header.classList.remove("sticky");
    scrollToTopBtn.style.display = "none";
  }
});

// Scroll to Top Button
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Animation on Scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  },
  { threshold: 0.5 }
);

document
  .querySelectorAll(".about-content, .certifications, .project-content")
  .forEach((section) => {
    observer.observe(section);
  });
