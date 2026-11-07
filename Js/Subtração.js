let input_a = document.querySelector('.a')
let input_b = document.querySelector('.b')
let btn = document.querySelector('.btn')
let resposta = document.querySelector('.resposta')

btn.addEventListener('click', calculo)

function calculo(){
  let a = input_a.valueAsNumber
  let b = input_b.valueAsNumber

  let resultado = a - b

  resposta.textContent = 'O resultado é: ' + resultado
}