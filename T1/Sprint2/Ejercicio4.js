let tiempo = 0; // Tiempo en segundos
let intervalo; // Para almacenar el ID del intervalo

const cronometroDisplay = document.getElementById('cronometro');

// Función para actualizar el cronómetro
function actualizarCronometro() {
    tiempo++;
    const minutos = Math.floor(tiempo / 60);
    const segundos = tiempo % 60;
    cronometroDisplay.textContent = `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
}

// Evento para iniciar el cronómetro
document.getElementById('iniciarBtn').addEventListener('click', () => {
    if (!intervalo) { // Solo iniciar si no está en marcha
        intervalo = setInterval(actualizarCronometro, 1000);
    }
});

// Evento para pausar el cronómetro
document.getElementById('pausarBtn').addEventListener('click', () => {
    clearInterval(intervalo);
    intervalo = null; // Limpiar el ID del intervalo
});

// Evento para reiniciar el cronómetro
document.getElementById('reiniciarBtn').addEventListener('click', () => {
    clearInterval(intervalo);
    intervalo = null; // Limpiar el ID del intervalo
    tiempo = 0; // Reiniciar el tiempo
    cronometroDisplay.textContent = '00:00'; // Reiniciar el display
});
