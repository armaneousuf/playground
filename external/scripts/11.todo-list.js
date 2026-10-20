const listOfArr = [];
const displayList = document.querySelector(".js-todo-list");
const btn = document.querySelector(".btn");
const todoInput = document.querySelector(".todo-input");

function renderTodoList() {
  let todoListHTML = "";
  for (let i = 0; i < listOfArr.length; i++) {
    const todos = listOfArr[i];
    const html = `<p>${todos} <button data-index="${i}" class="delete-todo">Delete</button></p>`;
    todoListHTML += html;
  }
  displayList.innerHTML = todoListHTML;
}

function makeTodo() {
  const todoInputValue = todoInput.value;
  listOfArr.push(todoInputValue);
  todoInput.value = "";
  renderTodoList();
}

btn.addEventListener("click", makeTodo);
displayList.addEventListener("click", (e) => {
  if (e.target.matches(".delete-todo")) {
    const index = e.target.dataset.index;
    listOfArr.splice(index, 1);
    renderTodoList();
  }
});
