//cuando se hereda se pueden ocupar todas las cosas de al calse padre
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Padre = /** @class */ (function () {
    function Padre(nombre_, edad_) {
        this.nombre = nombre_;
        this.edad = edad_;
    }
    Padre.prototype.mostrarNombre = function () {
        console.log(this.nombre);
    };
    return Padre;
}());
var hijo = /** @class */ (function (_super) {
    __extends(hijo, _super);
    function hijo(nombre_, edad_, apellido_) {
        var _this = _super.call(this, nombre_, edad_) || this;
        _this.apellido = apellido_;
        return _this;
    }
    hijo.prototype.mostrarnombrehijo = function () {
        console.log(this.nombre);
    };
    return hijo;
}(Padre));
var nuevohijo = new hijo('manuel', 25, 'villa');
console.log(nuevohijo.nombre);
