/*
REQUERIMIENTOS
- utilizar el formulario para captar el texto ingresado
- implmentar el evento "submit", utilizarlo para guardar el comentario en un array
- cada vez que se agrega un nuevo comentario renderizarlo en una etiqueta "p"(sacar del html los hardcodeados y hacerlo dinamico)
- constantemente guardar la informacion en localStorage, si se recarga la pagina deberian mantenerse los comentarios
*/

// 1 utilizar el formulario para captar el texto ingresado
// Declarar variables globales
let formulario = document.querySelector('form');
let inputComentario = document.querySelector('#comentario');
let historial = document.querySelector('.comentarios');
let busquedas = [];


// 2 implmentar el evento "submit", utilizarlo para guardar el comentario en un array
// Leer los datos del formulario
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    
    let palabra = normalizar(inputComentario);

    if( palabra != ''){
        console.log(palabra);
        busquedas.push(palabra);
        inputComentario.value = '';
        
        guardarDatos(busquedas);
        rederizarBusquedas(busquedas);
        
    }
})

// Guardar datos en el localStorage
function guardarDatos(listado){
    localStorage.setItem('historial', JSON.stringify(listado) );
}

// Noramalizar
function normalizar(input) {
    let palabra = input.value.trim();
    return palabra;
}


// 3 cada vez que se agrega un nuevo comentario renderizarlo en una etiqueta "p"(sacar del html los hardcodeados y hacerlo dinamico)
// Rederizado del historial ['mate', 'mouse', 'gatito']
function rederizarBusquedas(listado){
   historial.innerHTML = '';

    listado.forEach(elemento => {
        let parrafo = document.createElement('p');
        parrafo.textContent = elemento;
        historial.appendChild(parrafo);
    });
}

// 4 constantemente guardar la informacion en localStorage, si se recarga la pagina deberian mantenerse los comentarios
if( localStorage.getItem('historial') ) {
    busquedas = JSON.parse( localStorage.getItem('historial') );
}

rederizarBusquedas(busquedas);