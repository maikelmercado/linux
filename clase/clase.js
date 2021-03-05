//clase es una plantilla de un objeto,  esta tiene metodos y atributos 
//cuando la clase la llevoa funcional se llama instanciar un objeto, voy crear un objeto nuevo
var vehiculo = /** @class */ (function () {
    //metodo construtor lleva prametros
    //this palabra reservada, hace referencia
    function vehiculo(marca_, fecha_, puerta_) {
        this.marca = marca_; //propiedades
        this.fecha = fecha_;
        this.puerta = puerta_;
    }
    //metodos
    vehiculo.prototype.acelerar = function () {
        console.log('acelerando');
    };
    vehiculo.prototype.frenar = function () {
        console.log('estoy frenando');
    };
    return vehiculo;
}());
var coche = new vehiculo('ford', '15/02/2000', 5);
coche.puerta;
console.log(coche.marca);
console.log(coche.fecha);
console.log(coche.puerta);
coche.acelerar();
