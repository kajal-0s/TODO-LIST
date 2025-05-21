function addTodo() {
  const input = document.getElementById('todo-input');
  const task = input.value.trim();
  if (task !== '') {
    const list = document.getElementById('todo-list');
    const listItem = document.createElement('li');
    listItem.textContent = task;
    list.appendChild(listItem);
    input.value = '';
  }
}
