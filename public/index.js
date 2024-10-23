// Select HTML elements
const todoList = document.getElementById("todo-list");
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoSubmit = document.getElementById("todo-submit");

// API URL
const API_URL = 'https://my-todo-list-project-app.vercel.app/todos';

// Fetch todos function
function fetchTodos() {
  fetch(API_URL)
    .then(response => response.json())
    .then((todos) => {
      console.log(todos);
      todoList.innerHTML = '';
      todos.forEach((todo) => {
        const todoItem = document.createElement('li');
        todoItem.textContent = `${todo.title} - ${todo.completed ? 'Completed' : 'Not Completed'}`;
        todoList.appendChild(todoItem);
      });
    })
    .catch((err) => console.error(err));
}

// Initial fetch
fetchTodos();

// Add todo function
todoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const newTodo = {
    title: todoInput.value,
    completed: false,
  };

  fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newTodo),
  })
    .then((response) => response.json())
    .then((todo) => {
      console.log(todo);
      fetchTodos();
      todoInput.value = '';
    })
    .catch((err) => console.error(err));
});