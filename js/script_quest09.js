//PEANDO ELEMENTOS
const formDados = document.querySelector('#formulario-pessoa')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

const objFormDados =  new FormData(formDados)

let nome = objFormDados.get('nome')
let valor = parseFloat(objFormDados.get('valor'))

if (valor <= 9){
    situacao = '70% DE LUCRO'
} else if (valor <= 29 ){
    situacao = '50% DE LUCRO'
} else if (valor <= 49){
    situacao = '40% DE LUCRO'
}else {
    situacao = '30% DE LUCRO'
}    

   
divResultado.innerHTML = `O PRODUTO: ${nome}<br>POSSUI O VALOR DE :${valor.toFixed(2).replace(',',',')
}R$<br>E ${situacao}`

formDados.reset()
}) 