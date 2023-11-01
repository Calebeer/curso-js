// const umDia = 60 * 60 * 24  * 1000;
// const data = new Date(2019,2);
// console.log(data.toString());

function zeroAntes(num){
    return num >= 10 ? num : `0${num}` 
}

function formataData(data){
    const dia = zeroAntes(data.getDate());
    const mes = zeroAntes(data.getMonth());
    const ano = zeroAntes(data.getFullYear());
    const hora = zeroAntes(data.getHours());
    const min = zeroAntes(data.getMinutes());
    const seg = zeroAntes(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data)
console.log(dataBrasil);