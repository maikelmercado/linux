// //parametros rest para 
var cartapostres = function (postre) {
    var frutas = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        frutas[_i - 1] = arguments[_i];
    }
    console.log("el postre es " + postre + ", las frutas son " + frutas);
};
cartapostres('helado', 'naranja', 'pera', 'manzana', 'kiwi', '');
