// Inicializamos los votos
let votos = {
    Rojo: 0,
    Verde: 0,
    Azul: 0,
    Amarillo: 0
};

// Agregamos el evento click al botón Enviar
document.getElementById('enviarBtn').addEventListener('click', () => {
    // Obtenemos la opción seleccionada
    const seleccion = document.querySelector('input[name="color"]:checked');
    
    if (seleccion) {
        // Aumentamos el contador de votos según la opción seleccionada
        const color = seleccion.value;
        votos[color]++;
        actualizarGrafico();
    } else {
        // Mostramos una alerta si no se selecciona ninguna opción
        alert('Por favor, selecciona un color.');
    }
});

// Función para actualizar el gráfico con las nuevas votaciones
function actualizarGrafico() {
    // Total de votos, se necesita para hacer proporciones si fuera necesario
    const totalVotos = votos.Rojo + votos.Verde + votos.Azul + votos.Amarillo;

    // Actualizamos cada barra con su correspondiente número de votos
    document.getElementById('barraRojo').style.width = `${votos.Rojo * 20 + 20}px`;  // Ancho basado en número de votos
    document.getElementById('barraRojo').textContent = `Rojo: ${votos.Rojo}`;

    document.getElementById('barraVerde').style.width = `${votos.Verde * 20 + 20}px`;
    document.getElementById('barraVerde').textContent = `Verde: ${votos.Verde}`;

    document.getElementById('barraAzul').style.width = `${votos.Azul * 20 + 20}px`;
    document.getElementById('barraAzul').textContent = `Azul: ${votos.Azul}`;

    document.getElementById('barraAmarillo').style.width = `${votos.Amarillo * 20 + 20}px`;
    document.getElementById('barraAmarillo').textContent = `Amarillo: ${votos.Amarillo}`;
}
