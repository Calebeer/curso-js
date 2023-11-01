// const frutas = ['Maçã','Pera','Uva', 'Banana']
// for (let i = 0; i < frutas.length ; i++){
//     console.log(frutas[i]);
// }

const pessoa = {
    nome:'Calebe',
    sobrenome : 'Apollo',
    idade : 18
}


for(let i in pessoa){
    console.log(i,pessoa[i]);
}