const pessoa = {
    nome:'Calebe',
    sobrenome:'Apollo',
    idade:18,
    endereco:{
        rua:'cotovelo',
        bairro:'cangalheiro',
        numero:1030
    }
}

const {nome, ...resto} = pessoa;
const add = {pessoa,tipo:{
    nome:'android',
    capacidade:12
}}

console.log(add);
