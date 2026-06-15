//PEANDO ELEMENTOS
const formDados = document.querySelector('#formulario-pessoa')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

const objFormDados =  new FormData(formDados)

let nome = objFormDados.get('nome')
let peso = parseFloat(objFormDados.get('peso'))
let altura = parseFloat(objFormDados.get('altura'))

 let imc = peso /(altura * altura)



if (imc <= 20){
    situacao = 'ABAIXO DO PESO'
} else if (imc <= 24 ){
    situacao = 'NORMAL'
} else if (imc <= 29){
    situacao = 'EXCESSO DE PESO'
} else if (imc <= 34){
    situacao = 'OBESIDADE'
} else {
    situacao = 'OBESIDADE MORBIDA'
}    

   
divResultado.innerHTML = `O IMC DO PACIENTE ${nome} É : ${imc.toFixed(0).replace('.','.')
}<br>E SEU ESTADO É CONSIDERADO: ${situacao}`

formDados.reset()
}) 