const toDoList = document.getElementById('lista-tarefas');
const newItem = document.getElementById('texto-tarefa');
const arraySelectedItems = toDoList.getElementsByClassName('selected');
const arrayCompletedItems = toDoList.getElementsByClassName('completed');
const arrayItems = toDoList.getElementsByClassName('item');

function addItem() {
  const itemList = document.createElement('li');
  itemList.className = 'item';
  itemList.innerText = newItem.value;
  toDoList.appendChild(itemList);
  newItem.value = '';
}

function grayItem(clickedItem) {
  while (arraySelectedItems.length > 0) {
    arraySelectedItems[0].classList.remove('selected');
  }
  const selectedItem = clickedItem.target;
  selectedItem.classList.add('selected');
}

function completeItem(dblclickItem) {
  // Source about toggle method: https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList
  const changeItem = dblclickItem.target;
  changeItem.classList.toggle('completed');
}

function deleteAllItems() {
  while (toDoList.firstChild) {
    toDoList.removeChild(toDoList.firstChild);
  }
}

function deleteFinishedItems() {
  while (arrayCompletedItems.length > 0) {
    arrayCompletedItems[0].remove();
  }
}

function saveLocalStorage() {
  localStorage.setItem('toDoList', JSON.stringify(toDoList.innerHTML));
}

function recoverLocalStorage() {
  const recoverToDoList = JSON.parse(localStorage.getItem('toDoList'));
  if (recoverToDoList !== '') toDoList.innerHTML = recoverToDoList;
}

// function moveItem(buttonClick) {
//   // if (buttonClick.target === buttonMoveUp)
//   // if (buttonClick.target === buttonMoveDown)
//   for (let index = 0; index < ) {
//     for (let classe of item.classItem) {
//       if (classe === 'selected') {
//         if (buttonClick.target === buttonMoveUp){

//         } 
//       }
//     }
//   }
// }

// Recupera To-Do List anterior pelo Local Storage
recoverLocalStorage();
// Adicionar item a Lista de Tarefas
const buttonCreate = document.getElementById('criar-tarefa');
buttonCreate.addEventListener('click', addItem);
// Mudar cor do item de tarefa para cinza
toDoList.addEventListener('click', grayItem);
// Riscar um elemento da lista
toDoList.addEventListener('dblclick', completeItem);
// Apaga todos os itens da lista
const buttonDeleteAll = document.getElementById('apaga-tudo');
buttonDeleteAll.addEventListener('click', deleteAllItems);
// Apaga os itens finalizados
const buttonDeleteFinished = document.getElementById('remover-finalizados');
buttonDeleteFinished.addEventListener('click', deleteFinishedItems);
// Salva tarefas
const buttonSaveItems = document.getElementById('salvar-tarefas');
buttonSaveItems.addEventListener('click', saveLocalStorage);
// Item para cima
const buttonMoveUp = document.getElementById('mover-cima');
buttonMoveUp.addEventListener('click', moveItem);
// Item para baixo
const buttonMoveDown = document.getElementById('mover-baixo');
buttonMoveDown.addEventListener('click', moveItem);
