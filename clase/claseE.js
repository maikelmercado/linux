var casa = /** @class */ (function () {
    function casa(puerta_, ventana_, patio_) {
        this.puerta = puerta_;
        this.ventana = ventana_;
        this.patio = patio_;
    }
    casa.prototype.abrircasa = function () {
        console.log('abrir la casa, hahahaha');
    };
    casa.prototype.cerracasa = function () {
        console.log('cerrar la casa');
    };
    return casa;
}());
var casax = new casa('puertas amarillas', 'ventanas rojas', 5);
console.log(casax.puerta);
console.log(casax.ventana);
console.log(casax.patio);
casax.abrircasa();
casax.cerracasa();
