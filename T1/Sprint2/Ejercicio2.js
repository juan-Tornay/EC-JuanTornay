// Selección de elementos del DOM
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operationSelect = document.getElementById('operation');
const calculateButton = document.getElementById('calculateButton');
const resultDisplay = document.getElementById('resultDisplay');

calculateButton.addEventListener('click', () => {
  // Obtener los valores ingresados
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const operation = operationSelect.value;

  // Validar que los campos no estén vacíos y que sean números
  if (isNaN(num1) || isNaN(num2)) {
    resultDisplay.textContent = "Por favor, ingresa números válidos.";
    return;
  }

  let result;

  // Realizar la operación seleccionada
  switch (operation) {
    case 'sum':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      if (num2 === 0) {
        resultDisplay.textContent = "Error: División por cero no permitida.";
        return;
      }
      result = num1 / num2;
      break;
    default:
      resultDisplay.textContent = "Operación no válida.";
      return;
  }

  // Mostrar el resultado
  resultDisplay.textContent = `Resultado: ${result}`;
});
