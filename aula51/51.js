// function validation(numero){
//     const vali =   typeof(numero) === 'number' && numero <= 100 ? true : false;

//     if(vali ===  true){
//         if(numero % 3 === 0){
//             console.log('FIZZ');
//         }if(numero % 5 === 0){
//             console.log('BUZZ');
//         }if(numero % 5 === 0 && numero % 3 === 0){
//             console.log('FIZZBUZZ');
//         }if(numero % 3 !== 0 && numero % 5 !== 0){
//             return numero
//         } 
//     }

//     return false
// }

function validation(numero){
    const vali = typeof(numero) === 'number' && numero <= 100 ? true : false;
    const num3 = numero % 3 === 0 ? true : false;
    const num5 = numero % 5 === 0 ? true : false;

    if(vali){
        if(num3 && num5) return 'FIZZBUZZ'
        if(num3) return 'FIZZ'
        if(num5) return 'BUZZ'
        if(num3 !== num5) return numero
        }

        return numero
    }
    console.log('a',validation('a'));


for(let i = 0; i <=100 ; i++){
    console.log(i,validation(i));
}

console.log(validation(5));

