



const color = document.getElementById('color');


color.addEventListener('click', function() {
    
    const colorRandom = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    
    
    document.body.style.backgroundColor = colorRandom;
});