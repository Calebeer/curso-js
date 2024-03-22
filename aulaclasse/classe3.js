class ControleTv{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }
    // Método de instância
    aumentarVolume(){
        this.volume += 2;
    }

    diminuirVolume(){
        this.volume -= 2;
    }
    // Metódo estático
    static trocaPilha(){
        console.log('ok, pilha trocada!');
    }

}

const controle1 = new ControleTv('LG')
controle1.aumentarVolume()
controle1.aumentarVolume()

// Só consigo acessar um método estático chamando pela própria class dela
ControleTv.trocaPilha()
console.log(controle1);



