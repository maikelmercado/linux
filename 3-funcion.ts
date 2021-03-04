//funcion realiza una accion y es reutilizable 

function sumar (a:number, b:number):number{

    return a + b

}
const suma2:number = sumar(5,5)
const suma1:number=sumar(15,15)


console.log(suma1)
console.log(suma2)


//funcion con un parametro string

  function hola(a:string ):void{
      console.log(a)    
  }   
  hola('jose')


  //funcion flecha con una avariable constante 
  const mostrar = ():void=>{

    console.log('mostrar funcion flecha ')
  }

  mostrar ()

  //--w wash auto compilar  entonces despues en otra terminal se ejecuta solo el node js
