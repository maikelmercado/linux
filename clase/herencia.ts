//cuando se hereda se pueden ocupar todas las cosas de al calse padre




class Padre{
    nombre:string;
    edad:number;

    constructor(nombre_:string, edad_:number){

        this.nombre=nombre_;
        this.edad=edad_;

    }

    mostrarNombre (){
        console.log(this.nombre)
    }
}
class hijo extends Padre{

    apellido:string;

    constructor(nombre_:string, edad_:number, apellido_:string){

        super(nombre_, edad_); //super lo que hace es llamar al constructor de la clase padre
        this.apellido=apellido_;
    }

   mostrarnombrehijo():void{

    console.log(this.nombre)
   }
}


const nuevohijo = new hijo('manuel', 25,'villa' )





console.log(nuevohijo.nombre)
