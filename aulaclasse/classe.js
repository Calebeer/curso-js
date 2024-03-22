// // function Pessoa(nome, sobrenome){
    
// //     //Atributo ou método privado
// //     const ID = 12345;
// //     const metodoInterno = () =>{

// //     }


// //     //Atributos ou métodos públicos
// //     this.nome = nome
// //     this.sobrenome = sobrenome

// //     this.metodo = () =>{
// //         console.log(this.nome + ': sou metodo');
// //     }

// // }

// const p1 = new Pessoa('Calebe','Apollo')
// const p2 = new Pessoa('Renan', 'Coelho')

// console.log(p1.sobrenome);


class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar(){
        console.log(`${this.nome} está falando`);
    }

    cantar(){
        console.log(`${this.nome} está cantando`);
    }
}

const p1 = new Pessoa('Calebe','Apollo')
const p2 = new Pessoa('Renan', 'Coelho')

console.log(p1);