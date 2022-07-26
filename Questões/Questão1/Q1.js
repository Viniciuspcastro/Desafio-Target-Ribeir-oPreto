let indice=13
let soma=0

function Soma(){

    for(let k=0;k<indice;k++){
        soma = soma+k;
    }
    document.getElementById('resposta').innerHTML = 
        `O resultado da variavel soma é: ${soma}`; 
   
}
