// function soma(x, y){
//     if(typeof x !== 'number' || typeof y !== 'number'){
//         throw new Error('Digite somente número');
//     }
//     return x + y;
// }
// try{
//     console.log(soma(2,'a'));
// }catch(err){ 
//     console.log(err);
// }


function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instância do date')
    }

    if(!data){
        data = new Date()
    }

    return data.toLocaleTimeString('pt-BR',{
        second:'2-digit',
        hour:'2-digit',
        minute:'2-digit'
    })
}




try{
    const data = new Date('02-04-2000 10:24:00')
    const hora = retornaHora(11);
    console.log(hora);
}catch(err){
    // console.log(err);
}finally{
    console.log('Tenha um bom dia');
}

