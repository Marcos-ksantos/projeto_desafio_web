//PEANDO ELEMENTOS
const formDados = document.querySelector('#formulario-pessoa')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

const objFormDados =  new FormData(formDados)

let num1 = parseFloat(objFormDados.get('num1'))

if (num1 / 3 && 7 ){
    divisao = 'DIVISÍVEL'
}else {
    divisao = 'INDIVISÍVEL'
}    

   
divResultado.innerHTML = `O NÚMERO É ${divisao} POR 3 E 7`

formDados.reset()
}) 