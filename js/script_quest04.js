//PEANDO ELEMENTOS
const formDados = document.querySelector('#formulario-pessoa')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

const objFormDados =  new FormData(formDados)

let nota1 = parseFloat(objFormDados.get('nota1'))
let nota2 = parseFloat(objFormDados.get('nota2'))
let nota3 = parseFloat(objFormDados.get('nota3'))

let media = (nota1 + nota2 + nota3)/ 3
if (media < 6){
    situação = 'APROVADO'
}else{
    situação = 'REPROVADO'
}


divResultado.innerHTML = `A MÉDIA DO ALUNO É: ${media.toFixed(1).replace('.',',')}<br>
${situação}`




formDados.reset()
}) 