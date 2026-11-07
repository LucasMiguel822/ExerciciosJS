let input_nome = document.querySelector('.nome')
let mensagem = document.querySelector('.mensagem')
let btn = document.querySelector('.btn')

btn.addEventListener('click', sla)

function sla() {
  let nome = input_nome.value
  mensagem.textContent = 'Meu nome é ' + nome 
}
