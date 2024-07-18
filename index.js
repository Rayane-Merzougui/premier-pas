const navbar = document.querySelector("nav");
const boxpop = document.querySelector(".boxpop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    navbar.style.top = 0;
    boxpop.style.right = 50 + "px";
  } else if (window.scrollY < 120) {
    navbar.style.top = -50 + "px";
  }
});
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
