// Selección de elementos del DOM
const secondsInput = document.getElementById('secondsInput');
const startButton = document.getElementById('startButton');
const timeDisplay = document.getElementById('timeDisplay');

let countdownInterval;

startButton.addEventListener('click', () => {
  // Obtener el valor ingresado y convertirlo a número
  let timeRemaining = parseInt(secondsInput.value);

  // Si ya hay un temporizador en curso, detenerlo
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }

  // Verificar que el valor ingresado sea un número válido
  if (isNaN(timeRemaining) || timeRemaining <= 0) {
    timeDisplay.textContent = "Por favor ingresa un número válido.";
    return;
  }

  // Actualizar el texto con el tiempo inicial
  timeDisplay.textContent = `Tiempo restante: ${timeRemaining} segundos`;

  // Iniciar el temporizador
  countdownInterval = setInterval(() => {
    timeRemaining--;

    // Mostrar el tiempo restante
    if (timeRemaining > 0) {
      timeDisplay.textContent = `Tiempo restante: ${timeRemaining} segundos`;
    } else {
      // Cuando llega a cero, mostrar el mensaje y detener el temporizador
      timeDisplay.textContent = "    Holaaaa Riacardooooo    (っᵔ◡ᵔ)っ             ";
      clearInterval(countdownInterval);
    }
  }, 1000);
});
