const mousemove = document.querySelector(".mousemove");
const navbar = document.querySelector("nav");
const boxpop = document.querySelector(".boxpop");
window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    navbar.style.top = 0;
    boxpop.style.right = 50 + "px";
  } else if (window.scrollY < 120) {
    navbar.style.top = -50 + "px";
  }
});
