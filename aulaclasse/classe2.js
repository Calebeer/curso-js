class DispositivoEletronico{
    constructor(nome){
        this.nome = nome
        this.ligado = false
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome + ` Dispositivo ligado`);
            return 
        }
        this.ligado = true
    }

    desligar(){
        if(!this.ligado){
            console.log(this.nome + ` já  desligado`);
            return 
        }
        this.ligado = false
    }

}

class Smartphone extends DispositivoEletronico{
    constructor(nome,cor, modelo, valor){
        super(nome);
        this.cor = cor;
        this.modelo = modelo
        this.valor = valor;
    }
}

const n1 = new Smartphone('Motorola','Preto', 's20ultra', '1200')

console.log(n1);

// const p1 = new DispositivoEletronico('Smartphone')
// p1.ligar()
// p1.desligar()
// console.log(p1);