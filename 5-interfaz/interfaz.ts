interface Persona{

    nombre:string;
    apellido:string;
}

function caminar(persona:Persona):void{

    console.log('la persona  '+ persona.apellido +'  esta caminando')
}

let nueva_persona:Persona = {nombre:'manuel', apellido:'muñoz'}

caminar(nueva_persona)



//Parametros opcionales
interface Persona{
    altura:number;
    peso:number;
    nombre?:string; //opcional
}


let persona1={altura:2, peso:120, nombre:'pedro'}

function MostrarMediaPeso (persona:Persona):string{

    let mediapeso:number = persona1.altura / persona1.peso;


    if(persona.nombre){
        return `${persona.nombre }tiene una media de ${mediapeso}`
    }else{
        return  `no se quien eres tiene una medidad de ${mediapeso}`
    }

}
 console.log( MostrarMediaPeso(persona))