const listOfArr = [];

const displayList = document.querySelector(".js-todo-list");
const btn = document.querySelector(".btn");
const todoInput = document.querySelector(".todo-input");
const dueDateInput = document.querySelector(".js-due-date");

function renderTodoList() {
  let todoListHTML = "";
  for (let i = 0; i < listOfArr.length; i++) {
    const todoObj = listOfArr[i];
    const { task, dueDate, time } = todoObj;
    const html = `<p>${task} ${dueDate} ${time} <button data-index="${i}" class="delete-todo">Delete</button></p>`;
    todoListHTML += html;
  }
  displayList.innerHTML = todoListHTML;
}

function makeTodo() {
  const task = todoInput.value;
  const dueDate = dueDateInput.value;
  const now = new Date();
  const time = `${now.getHours().toString().padStart(2, "0")}: ${now.getMinutes().toString().padStart(2, "0")}`;
  listOfArr.push({
    task,
    dueDate,
    time,
  });
  todoInput.value = "";
  dueDateInput.value = "";
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
