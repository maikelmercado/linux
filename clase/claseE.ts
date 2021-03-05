


class casa{

    puerta:string;
    ventana:string;
    patio:number;
    

constructor(puerta_:string, ventana_:string, patio_:number){

    this.puerta=puerta_;
    this.ventana=ventana_;
    this.patio=patio_;

}

abrircasa(){


    console.log('abrir la casa, hahahaha')
}

cerracasa(){

    console.log('cerrar la casa')
}
}

const casax = new casa('puertas amarillas', 'ventanas rojas', 5)

console.log(casax.puerta)
console.log(casax.ventana)
console.log(casax.patio)
casax.abrircasa();
casax.cerracasa();