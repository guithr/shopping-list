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
    const itemContainer = document.querySelector(".items-container");

    // Remover item da lista
    itemsList.removeChild(liItem);

    // Verificar se já existe um alerta na tela
    let existingAlert = document.querySelector(".alert");
    if (existingAlert) {
      existingAlert.remove(); // Remove o alerta existente
    }

    // Criar o alerta
    const alert = document.createElement("div");
    alert.classList.add("alert");

    const alertIcon = document.createElement("span");
    alertIcon.classList.add("alert-icon");
    alertIcon.innerHTML = `<img src="./assets/images/icons/warning-circle-filled.svg" alt="">`;
    alert.appendChild(alertIcon);

    const pAlert = document.createElement("p");
    pAlert.innerText = "O item foi removido da lista";
    alert.appendChild(pAlert);

    const deleteIcon = document.createElement("span");
    deleteIcon.classList.add("alert-close");
    deleteIcon.innerHTML = ` <img src="./assets/images/icons/delete-small.svg" alt="">`;
    alert.appendChild(deleteIcon);

    // Adicionar evento para remover o alerta
    deleteIcon.addEventListener("click", () => {
      alert.remove();
    });

    // Adicionar o alerta ao container
    itemContainer.appendChild(alert);

    // Remover o alerta após 5 segundos (opcional)
    setTimeout(() => {
      alert.remove();
    }, 5000);
  });

  // Adicionar botão de exclusão ao LI
  liItem.appendChild(trashButton);

  // Adicionar o LI à UL (lista)
  itemsList.appendChild(liItem);

  // Limpar o input
  inputNewItem.value = "";
}
