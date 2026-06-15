//PEANDO ELEMENTOS
const formDados = document.querySelector('#formulario-pessoa')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

const objFormDados =  new FormData(formDados)

let nome = objFormDados.get('nome')
let acesso = objFormDados.get('acesso')
let senha = objFormDados.get('senha')

if (acesso == 'ABDC1234' && senha == 1234){
    cod = 'ACESSO PERMITISO'
}else {
    cod = 'ACESSO NEGADO'
}
   
divResultado.innerHTML = `${nome} VOCÊ POSSUI ${cod}`

formDados.reset()
}) 