// try{
//     console.log(a);
//     console.log('abriu um arquivo');
// }catch(err){
//    console.log('Tratando o erro');
// }finally{
//     console.log('eu sempre sou executado');
// }


function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando uma instância do Date.')
    }
    if(!data){
        data = new Date()
    }
    return data.toLocaleTimeString('pt-BR',{
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
        hour12:false
    })
}

try{
    const data = new Date('01-01-1999 12:46:08')
    const hora = retornaHora(data)
    console.log(hora);
}catch(err){
    console.log('você não digitou em formato de Date')
}finally{
    console.log('Esse é o Finally');
}

