//poarametros opcionales 
//`` esta barritas dice que todo lo que esta dentro y ${} se evalua como javascript
//ejercicio  con parametros  al poner ? en el  parametro no es necesario mandar un dato
var opcionales = function (nombre, apellido, edad) {
    if (edad) {
        console.log("se llama " + nombre + " su apellido es " + apellido + " y su edad es " + edad);
    }
    else {
        console.log("se llama " + nombre + " su apellido es " + apellido);
    }
};
opcionales('maikel', 'mercado', 37);
//parametros por defectos
// dejaria para todos el mismo dato    , se puede sobreescribir desde la entrega de avalores
var mostrar1 = function (nombre, apellido, edad) {
    if (edad === void 0) { edad = 32; }
    return "se llama " + nombre + ", su apellido es " + apellido + ", y su edad es " + edad + " a\u00F1os";
};
console.log(mostrar1('pedro', 'perez'));
console.log(mostrar1('juan', 'soto'));
