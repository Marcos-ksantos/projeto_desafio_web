//PEANDO ELEMENTOS
const formDados = document.querySelector('#formulario-pessoa')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

const objFormDados =  new FormData(formDados)

let distância = parseFloat(objFormDados.get('distância'))
let consumo = parseFloat(objFormDados.get('consumo'))
let gasolina = parseFloat(objFormDados.get('gasolina'))

let trajetoria = distância / consumo
let valor = trajetoria * gasolina

divResultado.innerHTML = `A quantidade de combustível necessário para percorrer
o trajeto é: ${trajetoria.toFixed(0).replace('.',',')}L <br> 
O valor total a pagar com combustível para esse deslocamento é ${valor.toFixed(2).replace('.','.')}R$`

formDados.reset()
}) 