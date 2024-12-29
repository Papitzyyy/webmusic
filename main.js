// JavaScript for DJ Music Portfolio Website

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav ul li a");
  const sections = document.querySelectorAll("section");

  // Smooth scrolling for navigation links
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").slice(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 60,
          behavior: "smooth",
        });
      }
    });
  });

  // Highlight active navigation link
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const activeLink = document.querySelector(
            `.nav ul li a[href="#${entry.target.id}"]`
          );

          navLinks.forEach(link => link.classList.remove("active"));
          if (activeLink) activeLink.classList.add("active");
        }
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach(section => observer.observe(section));
});
