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