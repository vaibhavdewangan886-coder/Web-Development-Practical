let box = document.getElementById("box");
let output = document.getElementById("output");

function mouseEnter() {
  box.style.backgroundColor = "lightblue";
  output.textContent = "Mouse entered the box";
}

function mouseLeave() {
  box.style.backgroundColor = "lightgray";
  output.textContent = "Mouse left the box";
}