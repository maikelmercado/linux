// modificadores publicos 
var Animal = /** @class */ (function () {
    function Animal(nombre_, tamaño_) {
        this.nombre = nombre_;
        this.tamaño = tamaño_;
    }
    Animal.prototype.moverse = function () {
        console.log("animal moviendose");
    };
    return Animal;
}());
var obj = new Animal('serpiente', 2);
console.log(obj.moverse);
