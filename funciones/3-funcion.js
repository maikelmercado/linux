//funcion realiza una accion y es reutilizable 
function sumar(a, b) {
    return a + b;
}
var suma2 = sumar(5, 5);
var suma1 = sumar(15, 15);
console.log(suma1);
console.log(suma2);
//funcion con un parametro string
function hola(a) {
    console.log(a);
}
hola('jose');
//funcion flecha con una avariable constante 
var mostrar = function () {
    console.log('mostrar funcion flecha ');
};
mostrar();
//--w wash auto compilar  entonces despues en otra terminal se ejecuta solo el node js
