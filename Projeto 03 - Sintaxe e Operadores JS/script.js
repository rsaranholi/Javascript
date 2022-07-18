var n1=Number(prompt("Insira o primeiro número:"));
var n2=Number(prompt("Insira o segundo número:"));

function comparacao (){


let igualdade = n1 === n2;

let frase_um = function(){
    if(igualdade == false){
            return`Os números ${n1} e ${n2} não são iguais.`;
        }else{return`Os números ${n1} e ${n2} são iguais.`}
    }

let soma = n1 + n2;

let maior_dez = soma >=10;
    let frase_dois = function(){
    if(maior_dez == false){
            return `Sua soma é ${soma}, que é menor que 10 e`
        }else{return `Sua soma é ${soma}, que é maior que 10 e`;}
    }

let maior_vinte = soma >20;
    let frase_tres = function(){
        if(maior_vinte == false){
                return `menor que 20.`
            }else{return `maior que 20.`;}
        }

console.log(frase_um(n1,n2),frase_dois(n1,n2),frase_tres(n1,n2));
}

comparacao();
