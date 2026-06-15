//PEANDO ELEMENTOS
const formDados = document.querySelector('#formulario-pessoa')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

const objFormDados =  new FormData(formDados)

let hipotenusa = parseFloat(objFormDados.get('hipotenusa'))
let adjacente = parseFloat(objFormDados.get('adjacente'))
let oposto = parseFloat(objFormDados.get('oposto'))
 
if (hipotenusa == adjacente && hipotenusa == oposto && adjacente == oposto ){
    triangulo = 'EQUILATERO'
}
else if (hipotenusa != adjacente && hipotenusa != oposto && adjacente != oposto ){
    triangulo = 'ESCALENO'
}else{
    triangulo = 'ISÓSCELES'
}

divResultado.innerHTML = `A CLASSIFICAÇÃO DO TRIÂNGUULO É : ${triangulo}`

formDados.reset()
}) 