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








