//Exercicio 1 

const idadeDoUsuario =Number(prompt("Informe sua idade por favor:"))
if (idadeDoUsuario >= 18){
    console.log("Você pode dirigir")
}
else{
    console.log("Você não pode dirigir")
}


// Exercicio 2 

const verificaçaoDoAluno = prompt("Digite as letras para qual horario você estuda: M(Matutino), V(Vespertino) e N(Noturno)")
if(verificaçaoDoAluno.toUpperCase() === "M"){
    console.log("Bom Dia!")
}
else if(verificaçaoDoAluno.toUpperCase() ==="V"){
    console.log("Boa Tarde!")
}
else if(verificaçaoDoAluno.toUpperCase() ==="N"){
    console.log("Boa Noite!")
}
else{
    console.log("Opçao nao encontrada, tente novamente!")
}

//Exercicio 3 

const verificaçaoDoAluno1 = prompt("Digite as letras para qual horario você estuda: M(Matutino), V(Vespertino) e N(Noturno)")
switch(verificaçaoDoAluno1.toLocaleUpperCase()){
    case "M" :
    console.log("Boa Dia!")
    break
    case "V" :
    console.log("Boa Tarde!")
    break 
    case "N" :
     console.log("Boa Noite!")
    break
    default:
}

//Exercicio 4

const generoDoFilme = prompt("Informe qual o gereno do filme, que iremos assistir:")
const valorDoIngresso = Number(prompt("Qual o valor do Ingresso?"))
if(generoDoFilme.toLocaleUpperCase() === "Fantasia" && valorDoIngresso === 15){
console.log("Bom Filme!")
}
else {
    console.log("Escolha outro filme :(")
}

