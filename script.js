document.addEventListener("DOMContentLoaded", function () {
  //picking ids
  const todoList = document.getElementById("todos");
  const loading = document.getElementById("loading");
  const addTodoForm = document.getElementById("addTodoForm");
  const titleInput = document.getElementById("title");
  const completedInput = document.getElementById("completed");

  // Fetching
  fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
    .then((response) => response.json())
    .then((todos) => {
      loading.style.display = "none";
      todos.forEach((todo) => addTodoToList(todo));
    });

  // Handle form submission
  addTodoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const newTodo = {
      title: titleInput.value,
      completed: completedInput.checked,
    };

    addTodoToList(newTodo);
    clearForm();
  });

  // Function to add a todo to the list
  function addTodoToList(todo) {
    const todoItem = document.createElement("li");
    todoItem.innerHTML = `<strong>${todo.title}</strong> - Completed: ${
      todo.completed ? "Yes" : "No"
    }`;
    todoList.appendChild(todoItem);
  }

  // Function to clear the form
  function clearForm() {
    titleInput.value = "";
    completedInput.checked = false;
  }
});
