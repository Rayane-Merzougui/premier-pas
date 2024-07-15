const mousemove = document.querySelector(".mousemove");
const navbar = document.querySelector("nav");
window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    navbar.style.top = 0;
  } else if (window.scrollY < 120) {
    navbar.style.top = -50 + "px";
  }
});
