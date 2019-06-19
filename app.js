// $('div').on('click', function() { //enlazar un evento del navegador ("cLick") al div 
//     $('div').css('background', 'yellow'); //cambiara el color del elemento
// });


$('div').on('click', function() { //enlazar un evento del navegador ("cLick") al div 
    $(this).css('background', 'yellow'); //this le dara la opcion de que solo el cudro que sea clickeado cambie de color
});