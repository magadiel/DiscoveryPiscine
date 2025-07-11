$(document).ready(function () {
  function isPositiveInteger(val) {
    return /^\d+$/.test(val);
  }

  $('#calcula').click(function () {
    const left = $('#left').val();
    const right = $('#right').val();
    const op = $('#operator').val();

    if (!isPositiveInteger(left) || !isPositiveInteger(right)) {
      alert("Erro :(Valores nao numericos) ");
      console.log("Erro :(Valores nao numericos) ");
      return;
    }
   
    const leftVal = parseInt(left);
    const rightVal = parseInt(right);

    if ((op === '/' || op === '%') && rightVal === 0) {
      alert("It’s over 9000!");
      console.log("It’s over 9000!");
      return;
    }

    let result;
    switch (op) {
      case '+': result = leftVal + rightVal; break;
      case '-': result = leftVal - rightVal; break;
      case '*': result = leftVal * rightVal; break;
      case '/': result = leftVal / rightVal; break;
      case '%': result = leftVal % rightVal; break;
    }

    alert(result);
    console.log("O resultado do calculo de ", leftVal," ", op, "  ", rightVal, " = ", result);
  });

  setInterval(() => {
    alert('Please, use me...');
  }, 30000);
});

  