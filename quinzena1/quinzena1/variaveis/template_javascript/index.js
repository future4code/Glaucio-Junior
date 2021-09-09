// Exercicio 1 
let nome 
let idade 
console.log(typeof nome) //ambas as variaveis foram do tipo 'undefined' pois nao tem valores atribuidos ainda
 console.log(typeof idade) //ambas as variaveis foram do tipo 'undefined' pois nao tem valores atribuidos ainda

let primeiroNome = prompt ("Por favor informe seu nome:")
let primeiraIdade = prompt ("Por favor informe sua idade:")
console.log (typeof primeiroNome)  //me forneceu string pois sao variaveis e nao uma constante 
console.log (typeof primeiraIdade)  //me forneceu string pois sao variaveis e nao uma constante 
console.log ("olá", primeiroNome, "você tem" ,primeiraIdade,"anos") 

// Exercicio 2

const salario = prompt ("Você recebe um salario por mês?") 
const horasTrabalhadas = prompt ("Você trabalha 17 horas por dia ?") 
const finalDeSemana = prompt ("Você trabalha final de semana ?")
console.log("Você recebe um salario por mês?",salario)
console.log("Você trabalha 17 horas por dia ?",horasTrabalhadas)
console.log("Você trabalha final de semana ?",finalDeSemana)

// Exercicio 3 

let a = 10
let b = 25
let c 
c = a
a = b 
console.log("O novo valor de A é:", b ,"o novo valor de A é:", c ,"o novo valor de B é:",a ,"o novo valor de B é:",c )

// Desafio 

let usuarioA = prompt ("Informe o primeiro numero:")
let usuarioB = prompt ("Informe o segundo numero:")

//Tive que passar os numeros dados pelo usuario que eram string para number, entao utilizei o "Number()" para fazer essa conversao 

let numeroDoUsuarioA = Number(usuarioA)
let numeroDoUsuarioB = Number(usuarioB)

let x = numeroDoUsuarioA + numeroDoUsuarioB
let y = numeroDoUsuarioA * numeroDoUsuarioB

console.log( x)
 console.log( y )