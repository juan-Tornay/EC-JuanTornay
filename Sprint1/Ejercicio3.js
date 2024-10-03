
const btnAñadir = document.getElementById('btnAñadir');
const inputElemento = document.getElementById('inputElemento');
const lista = document.getElementById('lista');


btnAñadir.addEventListener('click', function() {

    const nuevoElemento = inputElemento.value;


    if (nuevoElemento.trim() !== "") {
    
        const li = document.createElement('li');
        li.textContent = nuevoElemento;

       
        lista.appendChild(li);

        inputElemento.value = "";
    } else {
        alert("Por favor, escribe algo para añadir a la lista.");
    }
});
