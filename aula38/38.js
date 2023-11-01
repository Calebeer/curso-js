const pontuacaoUsuario = 300;
const nivelUsuario = pontuacaoUsuario >= 1000 ? console.log('usuário VIP') : console.log('Usuário Normal');
const corDeFundo = nivelUsuario ? console.log('cor preta') : console.log('cor branca')
// if(pontuacaoUsuario >= 1000){
//     console.log('Usuário VIP');
// }else{
//     console.log('Usuário Normal');
// }