console.log("Teste")
console.log("Marcos e Lorena")

//COMENTÁRIOM DE LINHA ÚNICA

/*COMENTÁRIO DE  VÁRIAS LINHAS 
*/
//CRIANDO VARIÁVEIS
let num = 50
var num2 = 180
const num3 = 200

console.log(num)
console.log(num2)
console.log(num3)

if (true){
    let num4 = 420
    var num5 = 180

    console.log(num4)
}

console.log(num5)

num = 5

console.log(num)
//CONCATENAÇÃO

console.log("Valor de num " + num)
console.log('Valor de num' , num3)
console.log(`Valor de num2 ${num2}`)

console.log('A soma dos números ' + (15 + 8))
console.log('A soma dos números', (15 + 8))
console.log(`A soma dos números ${15 + 8}`)
console.log('A soma dos números ' + num + num2)
console.log('A soma dos números', num2 + 8)
console.log(`A soma dos números ${num3 - num2}`)

//MODULO RESTO DA DIVISÃO
console.log('SOMA DAS VARIÁVES ' , num + num2)
console.log('SUBTRAÇÃO DAS VARIÁVEIS ' , num3 - num)
console.log('MULTIPLICAÇÃO ' , num5 * 2)
console.log('DIVISÃO DOS VALORES ' , num2 / 5)
console.log('RESTO DA DIVISÃO ' , num2 %2)
console.log('RESTO DA DIVISÃO ' , num3 %3)

/*
 == IGUAL
 >MAIOR
 <MENOR
 >=MAIOR IGUAL
 <=MENOR IGUAL
 !=DIFERENTE
 */

 //OPERAÇÕES LÓGICAS
 /**
  && E
  || OU
  */
 console.log('TESTE DE COMPARAÇÃO ', 10 == 5)
 console.log('TESTE DE RELACIONAIS ', 10 != 5)
 console.log('TESTE DE RELACIONAIS ', 10 > 5)
 console.log('TESTE DE RELACIONAIS ', 10 < 5)
 console.log('TESTE DE RELACIONAIS ', 10 >= 5)
 console.log('TESTE DE RELACIONAIS ', 10 <= 5)
 console.log('TESTE LÓGICO ', (10 > 5) && (15 < 8))
 console.log('TESTE LÓGICO ', (10 > 5) || (15 < 8))

 //TESTE LÓGICO
 let idade = 19

 if(idade >=18){
    console.log('Maior de idade')
 }else{
    console.log('Menor de idade')
 }

 /*
  *RENOVAÇÃO DE CNH
  MENOR DE 18 - NÃO PERMITIDO
  18 ATÉ 49 - 10 ANOS
  50 ATÉ 69 - 5 ANOS
  +70 - 3 ANOS
  */

  //ANINHAMENTO DE IF
 if(idade < 18){
 console.log(`Com a idade de ${idade}, Não é permitido possuir CNH`)
 
    }else if(idade < 50){
        console.log(`Com a idade de ${idade}, 10 anos para renovar`)
    
    } else if(idade < 70){
        console.log(`Com a idade de ${idade}, 5 anos para renovar`)
    } else{  
        console.log(`Com a idade de ${idade}, 3 anos para renovar`)
 } 

 //ATIVIDADE DE LOGÍSTICA - 1#

var num1 = 20;
var num2 = 26;
var nu = 40;
console.log('MÉDIA ' ,(num1 + num2 + nu) / 3)

//ATIVIDADE DE LOGÍSTICA - 2#
let altura = 4
let largura = 5
let tinta = 2
console.log('ÁREA DA PAREDE: ' , altura * largura)
console.log('QUANTIDADE DE TINTA NECESSARIA: ', (altura * largura) / tinta)

//ATIVIDADE DE LOGÍSTICA - 3#
let distância = 1000
let consumo = 25
let litro = 7
console.log('QUANTIDADE DE COMBUSTÍVEL NECESSÁRIO: ' , distância / consumo)
console.log('QUANTIDADE À SE PAGAR ' , (distância / consumo)* litro)

//ATIVIDADE DE LOGÍSTICA - 4#
 console.log("MARCOS")
 console.log("NOTAS SEMESTRAIS:")

 var NOTA1 = 7
 var NOTA2 = 5
 var NOTA3 = 5
let MÉDIA = ((NOTA1 + NOTA2 + NOTA3) / 3) 

 console.log('NOTA 1 =' , NOTA1)
 console.log('NOTA 2 =' , NOTA2)
 console.log('NOTA 3 =' , NOTA3)
 console.log('MÉDIA =' , MÉDIA)
 
 if(MÉDIA >= 6){
    console.log('-VOCÊ FOI APROVADO-')
 }else{
    console.log('-VOCÊ FOI REPROVADO-')
 }
