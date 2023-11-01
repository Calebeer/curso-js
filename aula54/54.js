const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
let segundos = 0; 
let timer
function iniciaRelogio(){
     timer = setInterval(()=>{
        segundos++;
        relogio.innerHTML = criaHorasDosSegundos(segundos);
        console.log(timer);
    },1000)
    console.log('iniciou');
}


iniciar.addEventListener('click', function(event){
    relogio.classList.remove('pausado')
    clearInterval(timer)
    iniciaRelogio()
    console.log('iniciou');
})

pausar.addEventListener('click', function(event){ 
    clearInterval(timer,500)
    relogio.classList.add ('pausado')
    console.log('parou');
})

zerar.addEventListener('click', function(event){
    relogio.classList.remove('pausado')
    segundos = 0
    relogio.innerHTML = '00:00:00'
    console.log('clicado zerar');
})

document.addEventListener('click',function(e){
    console.log(e.target);
})

function criaHorasDosSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-br',{
        hour12:false,
        timeZone:'GMT'
    });
}

console.log(criaHorasDosSegundos(0));


// const zerar = document.querySelector('.teste')


// const obj = [1,2,3,4]
// const teste = obj.length.map((bo)=>{
//      bo.zerar = 'asdasd'
// })

// console.log(teste);

