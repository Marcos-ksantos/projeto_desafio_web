//PEANDO ELEMENTOS
const formDados = document.querySelector('#calculo-parede')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

const objFormDados =  new FormData(formDados)

let n1 = parseFloat(objFormDados.get('num1'))
let n2 = parseFloat(objFormDados.get('num2'))

let area = n1 * n2 
let tinta = 2

divResultado.innerHTML = `A área da parede é: ${area.toFixed(0).replace('.',',')}m`

formDados.reset()
}) 