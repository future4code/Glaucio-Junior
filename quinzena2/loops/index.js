// Exercicio 1 

let quantidadeDePets = Number(prompt("Informe aqui o numero de pets voce tem:"))
let guardarNomeDosPets = []
let i = 0
if (quantidadeDePets === 0) {
    console.log("Que pena! Você pode adotar um pet!")
} else {
    while (quantidadeDePets > i) {
        const nomePet = prompt("Informe o nome dos seus pets:")
        guardarNomeDosPets.push(nomePet)
        i++
    }
}

console.log(`Aqui esta o nome dos seus pets ${guardarNomeDosPets}`)

// Exercicio 2 

const arrayGlobal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// A) 
for(let i = 0 ; i < arrayGlobal.length ; i++){
    console.log(`${arrayGlobal[i]} - ${i}`)
}

// B) 
for(let i = 0 ; i < arrayGlobal.length ; i++){
    console.log(`${arrayGlobal[i]/10}`)
}

//C)

for(let i = 0 ; i < arrayGlobal.length ; i++){
   if(arrayGlobal % 2 === 0 ){
       console.log()
   }
}

// D) 
 for(let i = 0 ; i < arrayGlobal.length ; i++){
    console.log(`O elemento do índex ${i} é ${arrayGlobal[i]}`)}

// E) 
function compararNumeros(a, b) {
    return a - b;
  }
const menorNumeroDoArray = arrayGlobal.sort(compararNumeros)
  console.log(`O menor numero do Array é ${menorNumeroDoArray[0]}, e o maior é ${menorNumeroDoArray[11]}`)