// //parametros rest para 

const cartapostres = (postre:string, ...frutas:string[]):void =>{

    console.log(`el postre es ${postre}, las frutas son ${frutas}`)

}

cartapostres('helado','naranja', 'pera', 'manzana', 'kiwi','')
