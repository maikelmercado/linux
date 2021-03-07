
//modificadores privado es accesible solo dentro de la clase 
//modificador publico puede ser de cualquier lado


class Animal{

    private nombre:string;
    private tamaño:number;


    constructor (nombre_:string, tamaño_:number){

        this.nombre=nombre_;
        this.tamaño=tamaño_;
    }

    private correr():void{

        console.log("correr fuerte");
    }

}
const perro = new Animal('linco', 23);

