// const elementos = [
//     {tag: 'p' texto: 'Frase1'},
//     {tag: 'div' texto: 'Frase2'},
//     {tag: 'footer' texto: 'Frase3'},
//     {tag: 'section' texto: 'Frase4'},
// ]


// const container = document.querySelector('.container')

// function criaDiv(){
//     const div = container.createElement('div');
//     return div;
// }

// criaDiv();

// const container = document.querySelector('.container')
// container.createElement('p')
// const div = document.createElement("div");
// //div.innerHTML = "<p>Hello World!</p>";
// document.body.appendChild(div);
// const paragrafo = document.createElement("p")


// const div = document.createElement("div");
// div.classList.add('esse')
// const container = document.querySelector('.container');
// const paragrafo = document.createElement("p");

// container.appendChild(div)
// const esse = document.querySelector('.esse');
// const divDois = document.createElement('div');
// const footer = document.createElement('footer');
// const section = document.createElement('section');
// esse.appendChild(paragrafo);
// esse.appendChild(divDois);
// esse.appendChild(footer);
// esse.appendChild(section);
// paragrafo.innerHTML = 'Frase 1';
// divDois.innerHTML = 'Frase 2';
// footer.innerHTML = 'Frase 3';
// section.innerHTML = 'Frase 4';


const elementos = [
    {tag: 'p', texto: 'Qualquer texto que você quiser.'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'frase 4'},
];
const container = document.querySelector('.container')
const div = document.createElement('div');

// for (let i = 0; i < elementos.length; i++){
//     let { tag, texto } = elementos[i];
//     let elemento = document.createElement(tag);
//     elemento.innerHTML = texto;
//     div.appendChild(elemento);
//     console.log(tag);
// }



for (let i = 0; i < elementos.length; i++){
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);
    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada); 
}

const h1 = container.querySelector('h1');
h1.style.backgroundColor = 'red'

container.appendChild(div);
//INtrodução a engenharia de software