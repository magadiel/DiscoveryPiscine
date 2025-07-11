$(document).ready(function () {
  const $ftList = $('#ft_list');
  let todos = [];

  function saveCookies() {
    document.cookie = 'todos=' + encodeURIComponent(JSON.stringify(todos)) + '; path=/';
    console.log (' 002--> ', document.cookie, ' <--0b--> ', todos);
  }

  function loadCookies() {
    const cookie = document.cookie.split('; ').find(row => row.startsWith('todos='));
    console.log (' 001--> ', document.cookie);
    if (cookie) {
      try {
        todos = JSON.parse(decodeURIComponent(cookie.split('=')[1]));
        todos.forEach(text => createTodo(text));
      } catch {
        todos = [];
      }
    }
  }

  function createTodo(text) {
    const $div = $('<div></div>')
      .addClass('todo')
      .text(text)
      .click(function () {
        if (confirm(`Remove "${text}"?`)) {
          $(this).remove();
          todos = todos.filter(item => item !== text);
          saveCookies();
        }
      });
    $ftList.append($div);
  }

  $('#new-btn').click(function () {
    const input = prompt("Enter new TO DO:");
    if (input && input.trim() !== "") {
      const text = input.trim();
      todos.push(text);
      createTodo(text);
      saveCookies();
    }
  });

  loadCookies(); // primeira chamada no document().ready() para carregar os cookies e atualizar a pagina

});

