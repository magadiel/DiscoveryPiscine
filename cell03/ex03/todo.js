const ftList = document.getElementById('ft_list');
const btn = document.getElementById('new-btn');

// Carregar os cookies --> atencao!!!! O Chrome nao guarda cookies para file://. Usar o Firefox!
window.onload = () => {
  const cookie = document.cookie
    .split('; ')
    .find(row => row.startsWith('todos='));
  console.log (' 001--> ', document.cookie);
  if (cookie) {
    const todos = JSON.parse(decodeURIComponent(cookie.split('=')[1]));
    todos.forEach(todo => {
      createTodo(todo);
    });
  }
};

function createTodo(text) {
  const div = document.createElement('div');
  div.className = 'todo';
  div.textContent = text;
  div.addEventListener('click', () => {
    if (confirm(`Remove "${text}"?`)) {
      ftList.removeChild(div);
      saveTodos();
    }
  });
  ftList.appendChild(div);
  saveTodos();
}

function saveTodos() {
  const todos = Array.from(ftList.children).map(div => div.textContent);
  document.cookie = `todos=${encodeURIComponent(JSON.stringify(todos))}; path=/; max-age=31536000`;
  console.log (' 002--> ', document.cookie, ' <--0b--> ', todos);
}

/* o Listener tem de ser criado aqui pois o script esta a ser carregado depois das referencias no HTML - estava a dar erro */

btn.addEventListener('click', () => {
  const todo = prompt('Enter new TO DO');
  if (todo && todo.trim() !== '') {
    createTodo(todo.trim());
  }
});
