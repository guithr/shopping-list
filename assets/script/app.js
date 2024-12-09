/*
const inputNewItem = document.getElementById("newItem");
const buttonNewItem = document.getElementById("btnNewItem");
const itemsList = document.getElementsByClassName("items-list");

buttonNewItem.addEventListener("click", newItem);

function newItem(event) {
  event.preventDefault();

  // LI.ITEM
  const liItem = document.createElement("li");
  liItem.classList.add("item");

  // DIV SEGURANDA ELEMENTOS
  const divItem = document.createElement("div");
  liItem.appendChild(divItem);

  const inputNewItem = document.createElement("input:checkbox");
  const labelNewItem = document.createElement("label");
  labelNewItem.innerText = inputNewItem.value;
  divItem.appendChild(inputNewItem, labelNewItem);

  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<img src="./assets/images/icons/trash.svg" alt="Excluir item" />`;
  liItem.appendChild(trashButton);
}

*/

// Selecionar elementos necessários
const inputNewItem = document.getElementById("newItem"); // Corrigido ID
const buttonNewItem = document.getElementById("btnNewItem");
const itemsList = document.querySelector(".items-list"); // Selecionar a lista UL

// Adicionar evento ao botão
buttonNewItem.addEventListener("click", newItem);

function newItem(event) {
  event.preventDefault();

  // Verificar se o input tem algum valor
  if (!inputNewItem.value.trim()) {
    alert("Por favor, insira um item válido.");
    return;
  }

  // Criar elemento LI
  const liItem = document.createElement("li");
  liItem.classList.add("item");

  // Criar elemento DIV para agrupar checkbox e label
  const divItem = document.createElement("div");

  // Criar checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // Criar label
  const labelNewItem = document.createElement("label");
  labelNewItem.innerText = inputNewItem.value; // Adicionar o valor do input como texto do label

  // Adicionar checkbox e label ao DIV
  divItem.appendChild(checkbox);
  divItem.appendChild(labelNewItem);

  // Adicionar o DIV ao LI
  liItem.appendChild(divItem);

  // Criar botão de exclusão
  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<img src="./assets/images/icons/trash.svg" alt="Excluir item" />`;

  // Adicionar evento para excluir o item
  trashButton.addEventListener("click", () => {
    itemsList.removeChild(liItem);
  });

  // Adicionar botão de exclusão ao LI
  liItem.appendChild(trashButton);

  // Adicionar o LI à UL (lista)
  itemsList.appendChild(liItem);

  // Limpar o input
  inputNewItem.value = "";
}
