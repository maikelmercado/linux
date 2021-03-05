//clase es una plantilla de un objeto,  esta tiene metodos y atributos 
//cuando la clase la llevoa funcional se llama instanciar un objeto, voy crear un objeto nuevo

class vehiculo {
    marca:string
    fecha:string
    puerta:number

    //metodo construtor lleva prametros
    //this palabra reservada, hace referencia

    constructor(marca_:string, fecha_:string, puerta_:number){
        this.marca=marca_ //propiedades
        this.fecha= fecha_
        this.puerta=puerta_

    }


//metodos
    acelerar():void{
        console.log('acelerando');

    }

    frenar():void{
        console.log('estoy frenando')
    }

}
    const coche =new vehiculo('ford','15/02/2000', 5)
    
    
    coche.puerta

    console.log(coche.marca)
    console.log(coche.fecha)
    console.log(coche.puerta)
    coche.acelerar()

  
