function addElement() {
  let container = document.getElementById("container");

  let newPara = document.createElement("p");
  newPara.textContent = "New paragraph added";

  container.appendChild(newPara);
}