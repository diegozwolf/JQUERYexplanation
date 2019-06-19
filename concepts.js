// 1-formas de usar jquery

// CODPEN
// https://codepen.io/

// CDN EN HTML
// https://developers.google.com/speed/libraries/#jquery 



// Probar
//  agregar div al archivo html
//  agregar estilos al div background: red; height: 200px
//  agregar este codigo al archivo de javascript

$('div').on('click', function() {
    $('div').css('background', 'yellow');
});

// SELECTORES 

$(p) // Selecciona todos los párrafos del documento.
$('.item') // Selecciona todos los elementos que tengan la clase item.
$('#example') // Selecciona todos los elementos que tengan el id example.
$('.wrapper p') //Selecciona todos los elementos p que estén dentro de otro elemento

// pero que pasa  si se agregan mas div al html ?
// agregar mas etiquetas div al html
// revisar que opcion da jquery para que solo un cuadro cambie


// INSERTAR ELEMENTOS
jQuery('body').append("<h1>Hola Mundo</h1>");

// REEMPLAZAR ELEMENTOS
$('p').replaceWith(`<div>Hola Mundo</div>`);

// ELIMINAR ELEMENTOS
$('p.test').remove(); // borrara todos los párrafos que tengan la clase test

// AGREAGAR Y MOSTRAR ELEMENTOS
$('div.step-1').hide(); //esconder 
$('div.step-2').show(); //mostrar
$('div.step-2').toggle(); //hace lo contrario si esta visible lo esconde 


// Agregando y removiendo clases de CSS
$('div.step-1').addClass("active");
$('div.step-2').removeClass("active");

$('div.step-1').toggleClass("active"); // si tiene la clase la remueve, de lo contrario la agrega


//Cambiar estilos 
$('div.step-1').css("background", "red");

//Cambiar multiples estilos 
$('div.step-1').css("background", "red").css("font-size", "1.3rem");

// Encadenando métodos 
$('div').addClass("active")
        .removeClass("pending")
        .append("<p>Hola Mundo</p>");


// EVENTOS 

$('p').click(function() {
    alert("Hiciste click sobre un párrafo");
});

// EVENTOS DEL MOUSE
// click
// dblclick - doble click
// mouseenter - se dispara cuando el mouse entra sobre alguno de los elementos seleccionados.
// mouseleave - se dispara cuando el mouse sale de alguno de los elementos seleccionados.
// mouseover - se dispara cuando el mouse entra o sale de alguno de los elementos seleccionados.
// mousemove - se dispara cuando el mouse se mueve dentro de alguno de los elementos seleccionados.


$(document).on('mousemove', function(e) {
    console.log("El mouse se encuentra en las coordenadas:" + e.pageX + ", " + e.pageY);
});

// La función que le pasamos al método on recibe un argumento con información del evento. Por ejemplo, a través de este objeto podemos obtener la posición del mouse cada vez que se mueve:

// EVENTOS DEL TECLADO
// keydown - se dispara cuando oprimes una tecla.
// keypress - similar a keydown pero no aplica para teclas como Shift, Esc, Alt.
// keyup - se dispara cuando sueltas una tecla.

$(document).on('keyup', function(e) {
    console.log("La tecla oprimida fue " + e.which);
});

// El método which del evento retorna el código de la tecla oprimida:


// EVENTOS DE FORMULARIOS
// blur - se dispara cuando un elemento pierde el foco.
// change - se dispara cuando un elemento cambia.
// focus - se dispara cuando un elemento recibe el foco.
// submit - se dispara cuando el formulario se envía.

// $( document ).ready()

// Si debes esperar a que toda la página cargue puedes usar el evento 
$(document).ready(function() {
    console.log( "ready!" );
});








