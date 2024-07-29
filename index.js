const navbar = document.querySelector("nav");
const boxpop = document.querySelector(".boxpop");
const exit = document.getElementById("exite");
const boit1 = document.getElementById("boit1");
const boit2 = document.getElementById("boit2");
const boit3 = document.getElementById("boit3");
const voila = document.getElementById("voila");
var click = 0;
var click2 = 0;
var click3 = 0;
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
function bigsmal() {
  click2++;
  if (click2 === 1) {
    boit2.style.height = 500 + "px";
  }
  if (click2 === 2) {
    boit2.style.width = 500 + "px";
    boit2.style.height = 50 + "px";
  }
  if (click2 === 3) {
    boit2.style.height = 500 + "px";
    boit2.style.height = 500 + "px";
  }
  if (click2 === 4) {
    click2 = 0;
    boit2.style.width = 200 + "px";
    boit2.style.height = 200 + "px";
  }
}
boit2.addEventListener("click", bigsmal);
boit3.addEventListener("click", () => {
  voila.style.color = "black";
  voila.style.top = 0;
});
