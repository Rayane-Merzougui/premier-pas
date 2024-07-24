const navbar = document.querySelector("nav");
const boxpop = document.querySelector(".boxpop");
const exit = document.getElementById("exite");
const boit1 = document.getElementById("boit1");
const boit2 = document.getElementById("boit2");
const boit3 = document.getElementById("boit3");
var click = 0;
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
boit1.addEventListener("click", () => {
  click++;
  if (click === 1) {
    boit1.style.backgroundColor = "cadetblue";
  } else if (click === 2) {
    boit1.style.backgroundColor = "darkslategray";
  } else if (click === 3) {
    boit1.style.backgroundColor = "lightblue";
  } else if (click === 4) {
    click = 0;
    boit1.style.backgroundColor = "cyan";
  }
});
