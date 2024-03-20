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
    limpaInput();
    salvarTarefas();
}

btnTarefa.addEventListener('click',function(e){
    if(!inputTarefa.value) return 
    criaTarefa(inputTarefa.value)
    salvarTarefas()
})

document.addEventListener('click',function(e){
    const el = e.target;
    if(el.classList.contains('apagar') ){
        console.log(el.parentElement);  
        el.parentElement.remove();
    }
})

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = []
    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        console.log(tarefaTexto);
        listaDeTarefas.push(tarefaTexto)
        // console.log(listaDeTarefas);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    console.log(tarefasJSON);
    localStorage.setItem('tarefas',tarefasJSON)
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas)
    console.log(listaDeTarefas);
    for(let tarefa of listaDeTarefas ){
        criaTarefa(tarefa)

    }
}

adicionaTarefasSalvas()