const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  const btn = document.createElement("button");
  li.appendChild(span);
  span.innerText = newToDo.text;
  li.appendChild(btn);
  btn.innerText = "❌";
  btn.addEventListener("click", (event) => {
    const targetLi = event.target.parentElement;
    targetLi.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(targetLi.id));
    saveToDos();
  });
  toDoList.appendChild(li);
}

toDoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  saveToDos();
  paintToDo(newToDoObj);
});

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  toDos.forEach(paintToDo);
}
