function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR')

}

// function mostra(){
//     console.log(mostraHora());
// }

// console.log(mostra());

const timer = setInterval(()=>{
    if(mostraHora() === '13:08:50' ){
        console.log('parou');
        process.exit();
    }
    console.log(mostraHora());
}, 1000)


setTimeout(()=>{
    clearInterval(timer)
},5000)
// console.log(mostraHora());