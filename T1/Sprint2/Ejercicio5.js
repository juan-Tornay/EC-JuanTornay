const cartas = [
    'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D',
    'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'
];

let cartasSeleccionadas = [];
let cartasVolteadas = [];
let juegoActivo = false;

// Función para barajar las cartas
function barajarCartas() {
    cartas.sort(() => Math.random() - 0.5);
}

// Función para crear el tablero de juego
function crearTablero() {
    const tablero = document.getElementById('tablero');
    tablero.innerHTML = ''; // Limpiar el tablero
    barajarCartas();
    cartas.forEach((carta, index) => {
        const div = document.createElement('div');
        div.classList.add('carta');
        div.setAttribute('data-value', carta);
        div.setAttribute('data-index', index);

        // Crear el contenido de la carta
        const letra = document.createElement('div');
        letra.classList.add('letra');
        letra.textContent = carta; 

        // Crear el emoji
        const emoji = document.createElement('div');
        emoji.classList.add('emoji');
        emoji.textContent = '😈'; 

        // Añadir emoji y letra a la carta
        div.appendChild(emoji);
        div.appendChild(letra);

        div.addEventListener('click', () => seleccionarCarta(div));
        tablero.appendChild(div);
    });
}

// Función para seleccionar una carta
function seleccionarCarta(carta) {
    if (!juegoActivo || carta.classList.contains('volteada') || cartasSeleccionadas.length >= 2) {
        return; // Ignorar clic si el juego no está activo o ya está volteada
    }
    
    carta.classList.add('volteada');
    cartasSeleccionadas.push(carta);

    if (cartasSeleccionadas.length === 2) {
        compararCartas();
    }
}

// Función para comparar cartas seleccionadas
function compararCartas() {
    const [carta1, carta2] = cartasSeleccionadas;

    if (carta1.dataset.value === carta2.dataset.value) {
        cartasVolteadas.push(carta1, carta2);
        cartasSeleccionadas = [];
        verificarFinJuego();
    } else {
        juegoActivo = false;
        setTimeout(() => {
            carta1.classList.remove('volteada');
            carta2.classList.remove('volteada');
            cartasSeleccionadas = [];
            juegoActivo = true;
        }, 1000);
    }
}

// Función para verificar si se han encontrado todas las parejas
function verificarFinJuego() {
    if (cartasVolteadas.length === cartas.length) {
        document.getElementById('mensaje').textContent = '¡Has encontrado todas las parejas!';
        juegoActivo = false;
    }
}

// Función para reiniciar el juego
document.getElementById('reiniciarBtn').addEventListener('click', () => {
    cartasSeleccionadas = [];
    cartasVolteadas = [];
    juegoActivo = true;
    crearTablero();
    document.getElementById('mensaje').textContent = '';
});

// Inicializar el juego
juegoActivo = true;
crearTablero();
