///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Calculadora(num1, num2, operador) {
  let result = "";

  num1 = Number(num1);
  num2 = Number(num2);

  switch (operador) {
    case "+":
      result = num1 + num2;
      break;

    case "-":
      result = num1 - num2;
      break;

    case "*":
      result = num1 * num2;
      break;

    case "/":
      result = num1 / num2;
      break;

    case "e":
      let resultExpo = 1;
      for (let i = 0; i < num2; i++) {
        resultExpo *= num1;
      }
      result = resultExpo;
      break;

    default:
      return "ERRO";
  }

  if (result === undefined || result === 1000000) {
    return "ERRO";
  } else {
    return result;
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let visor = document.getElementById("visor");

function adicionar(tecla) {
  visor.value = visor.value + tecla;
}

function limpezatotal() {
  visor.value = "";
}

function calcular() {
  let numeros = visor.value.split(/[^0-9]/);
  let operadores = visor.value.split(/[0-9]/);
  let operador;
  operadores.forEach((x) => {
    if (x != "") operador = x;
  });

  visor.value = Calculadora(numeros[0], numeros[1], operador);
}
