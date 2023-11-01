const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa"); 
const tarefas = document.querySelector(".tarefas");


function criaLi(){
    const li = document.createElement('li');
    return li
}

inputTarefa.addEventListener('keypress',(e)=>{
    if(e.keyCode === 13){
        if(!inputTarefa.value) return 
        criaTarefa(inputTarefa.value)

    }
})

function limpaInput(){
    inputTarefa.value='';
    inputTarefa.focus;
}

function apagarTarefa(li){
    li.innerText += ' '
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class','apagar')
    li.appendChild(botaoApagar)

}

function criaTarefa(textoInput){
    const li = criaLi()
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    apagarTarefa(li)
    limpaInput()    
}

btnTarefa.addEventListener('click',function(e){
    if(!inputTarefa.value) return 
    criaTarefa(inputTarefa.value)

})

document.addEventListener('click',function(e){
    const el = e.target;
    if(el.classList.contains('apagar') ){
        console.log(el.parentElement);  
        el.parentElement.remove();
    }
})