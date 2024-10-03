// Obtener todos los elementos con la clase 'hoverDiv'
const divs = document.querySelectorAll('.hoverDiv');


const estiloOriginal = {
    backgroundColor: 'lightgray',
    color: 'black',
    padding: '20px',
    margin: '10px',
    border: '1px solid black',
    fontSize: '18px',
    textAlign: 'center',
};


divs.forEach(div => {
    Object.assign(div.style, estiloOriginal);


    div.addEventListener('mouseover', function() {
        div.style.backgroundColor = 'blue';
        div.style.color = 'white';
    });

    div.addEventListener('mouseout', function() {
        Object.assign(div.style, estiloOriginal);
    });
});
