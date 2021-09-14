// // Exercicio 1 
 let nomeDoUsuario = prompt (`Qual o seu nome?`)
 let emailDoUsuario = prompt(`Qual o seu e-mail?`)

 console.log(`O e-mail ${emailDoUsuario} foi criado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

 // Exercicio 2 

// //a)
 const minhasComidasPreferidas = ['Comida Japonesa',
  'Lasanha', 

  'Churrasco',

   'Comida Mexicana',

    'Pizza']
 console.log(Array(minhasComidasPreferidas))

 //b)
 console.log('Essas são as minhas comidas preferidas:' , Array(
 `Comida Japonesa`,
 `Lasanha`,
 `Churrasco`,
 `Comida Mexicana`,
`Pizza`)) 

 // c) 

 let comidaDoUsuario = prompt("qual sua comida favorita:")
 console.log(minhasComidasPreferidas.splice(1,1,comidaDoUsuario))
 console.log(minhasComidasPreferidas)

// Exercicio 3 

let listaDeTarefas = []


const primeiraTarefa = prompt ("Qual sua primeira tarefa a ser feita:")
const segundaTarefa = prompt ("Qual sua segunda tarefa a ser feita:")
const terceiraTarefa = prompt ("Qual sua terceira tarefa a ser feita:")

console.log(listaDeTarefas.push(primeiraTarefa))
console.log(listaDeTarefas.push(segundaTarefa))
console.log(listaDeTarefas.push(terceiraTarefa))

console.log(listaDeTarefas)

const tarefaRealizada = prompt ("digite um numer de 1 a 3, para a tarefa que voce realizou:")
console.log(listaDeTarefas.splice(tarefaRealizada, 2))
console.log(listaDeTarefas)
