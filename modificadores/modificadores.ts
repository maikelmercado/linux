// modificadores publicos 

class Animal{
    public nombre:string;
    public tamaño:number;



    public constructor(nombre_:string, tamaño_:number){

        this.nombre= nombre_;
        this.tamaño=tamaño_;

    }

    public moverse ():void{


        console.log("animal moviendose");

    }


}

const obj = new Animal('serpiente', 2)

console.log(obj.moverse)