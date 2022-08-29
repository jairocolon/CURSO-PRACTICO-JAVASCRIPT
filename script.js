const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const result = document.querySelector('#result')

// form.addEventListener('submit', submitInputsValues);

// function submitInputsValues(event){
//   event.preventDefault();
//   const resultadoInputs = parseInt(input1.value) + parseInt(input2.value)
//   result.innerHTML = "ESTE ES EL RESULTADO: " +  resultadoInputs + " PUNTOS DE VICTORIA"
// }

btn.addEventListener('click', btnOnClick);

function btnOnClick(){
  const resultadoInputs = parseInt(input1.value) + parseInt(input2.value)
  result.innerHTML = "Este es el resultado: " + resultadoInputs + ", puntos de victorias"
}




































// const p = document.querySelector('p');
// const parrafo = document.querySelector('.parrafo');
// const pid = document.querySelector('#pid');



// console.log(input.value)

// console.log({
//   h1,
//   p,
//   parrafo,
//   pid,
//   input
// })

// h1.innerHTML = 'Esto me faltaba antes para aprender DOM'

// const img = document.createElement('img');
// img.setAttribute('src', 'https://i.pinimg.com/originals/8b/02/40/8b02409f975c98c89e15bc089e3bd289.gif');
// console.log(img);

// pid.append(img);