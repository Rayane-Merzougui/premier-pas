const navbar = document.querySelector("nav");
const boxpop = document.querySelector(".boxpop");
const exit = document.getElementById("exite");
window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    navbar.style.top = 0;
  } else if (window.scrollY < 120) {
    navbar.style.top = -50 + "px";
  }
});
function onScroll() {
  boxpop.style.right = 50 + "px";
}
window.addEventListener("scroll", onScroll);
function insert(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  try {
    let result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch (error) {
    alert("Expression invalide");
  }
}
exit.addEventListener("click", () => {
  boxpop.style.right = -750 + "px";
  window.removeEventListener("scroll", onScroll);
});
exit.addEventListener("click", (e) => {
  console.log(e.isTrusted);
});
