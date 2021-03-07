// //parametros rest para vendria siendo una funcion con array


const cartapostres = (postre:string, ...frutas:string[]):void =>{

    console.log(`el postre es ${postre}, las frutas son ${frutas}`)

}

cartapostres('helado','naranja', 'pera', 'manzana', 'kiwi','')
