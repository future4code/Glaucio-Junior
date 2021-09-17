 //Exercicio 1 

 //a)

function InformaçoesSobreMim(){
    console.log ("Eu sou Glaucio, tenho 23 anos, moro em Guaratinguetá - SP e sou estudante.")
}
InformaçoesSobreMim()

//b) 

function usuarioInformaçoes(nome, idade,cidade , profissao){
     nome = prompt ("Informe seu Nome aqui:")
     idade = Number(prompt("Informe sua idade aqui:"))
     cidade = prompt("Informe aqui a cidade em que mora:")
     profissao = prompt ("Informe sua profissao aqui:")
    const fraseDoUsuario = (`Eu sou,${nome}, tenho ${idade} anos, moro em ${cidade}, e trabalho com ${profissao}`)
    
    return fraseDoUsuario

}

 console.log(usuarioInformaçoes())


// Exercicio 2 
 
//a)

 let somaDeNumeros =(numero1 , numero2) =>{
     const soma = numero1 +numero2 
     return soma
 } 
 console.log(somaDeNumeros(1,4))

// //b)
  let verificaçaoDosNumeros =(numero3 , numero4) => {
      const verificaçao = (numero3 >= numero4)
      return verificaçao
  }

 console.log(verificaçaoDosNumeros(6,5))

//c)
 let numeroPar =(numeroPar) =>{
     const divisao = (numeroPar % 2 === 0)
     return divisao
 }
 console.log(numeroPar(4))

//d)
 let mensagemDoUsuario =(mensagem) => {
     let frase = ("Eu sou Glaucio, tenho 23 anos, moro em Guaratinguetá - SP e sou estudante.")
    
     console.log(frase.length , frase.toUpperCase())
 }
 mensagemDoUsuario()


// Exercicio 3 

let funçaoSoma =(numeroInformado1 ,numeroInformado2)=>{
 const somaDosNumerosDoUsuario = numeroInformado1 + numeroInformado2
 return somaDosNumerosDoUsuario
}
let funçaoSubtraçao =(numeroInformado1 ,numeroInformado2)=>{
    const subtraçaoDosNumerosDoUsuario = numeroInformado1 - numeroInformado2
    return subtraçaoDosNumerosDoUsuario
}
let funçaoMultiplicaçao =(numeroInformado1 ,numeroInformado2)=>{
    const multiplicaçaoDosNumerosDoUsuario = numeroInformado1 * numeroInformado2
    return multiplicaçaoDosNumerosDoUsuario
}
let funçaoDivisao =(numeroInformado1 ,numeroInformado2)=>{
    const divisaoDosNumerosDoUsuario = numeroInformado1 / numeroInformado2
    return divisaoDosNumerosDoUsuario
}

const numeroInformado1 = Number(prompt("Informe um numero:"))
const numeroInformado2 = Number(prompt("Informe um numero:"))

console.log(`Numeros Escolhidos ${numeroInformado1} e ${numeroInformado2}`, funçaoSoma(numeroInformado1 ,numeroInformado2), funçaoSubtraçao(numeroInformado1 ,numeroInformado2), funçaoMultiplicaçao(numeroInformado1 ,numeroInformado2), funçaoDivisao(numeroInformado1 ,numeroInformado2))