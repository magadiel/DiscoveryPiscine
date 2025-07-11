
    function isPositiveInteger(value) {
      return /^\d+$/.test(value);
    }

    /*  as funcoes tem de estar definidas antes do uso. */

    function calculate() {
      const left = document.getElementById('left').value;
      const right = document.getElementById('right').value;
      const op = document.getElementById('operator').value;

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
    }

    /* o metodo set interval eh exposto pelo browser a semelhanca do alert. o metodo eh um hook para callback */
    /* o codigo ficou inline pois eh muito simples e funciona. O ideal seria criar um function para callback */ 
    
    setInterval(() => {
      alert("Please, use me...");
    }, 30000); // 30 segundos
