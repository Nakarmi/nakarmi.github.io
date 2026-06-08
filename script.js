const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

const sections = document.querySelectorAll("section");

sections.forEach(section => {
  section.classList.add("reveal");
});

const revealOnScroll = () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 120) {
      section.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

document.querySelectorAll(".project").forEach(project => {
  project.addEventListener("click", () => {
    document.querySelector(".case-studies").scrollIntoView({
      behavior: "smooth"
    });
  });
});