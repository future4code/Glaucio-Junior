// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  const alturaDoRetanguro = Number(prompt("Informe aqui a Altura do Retangulo:"))
  const larguraDoRetangulo = Number(prompt("Informe aqui a Largura do Retangulo:"))

const areaRetangulo = (larguraDoRetangulo * alturaDoRetanguro)

console.log(areaRetangulo)
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  const anoAtual = Number(prompt("Informe aqui qual ano estamos:"))
  const anoDeNacimento = Number(prompt("Informe aqui qual ano você nasceu:"))
  
  const idade = (anoAtual - anoDeNacimento)

console.log( idade )
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  
  const pesoEmKg = Number(prompt("Informe aqui qual seu peso em Kg:"))
  const alturaEmMetros = Number(prompt("Informe aqui sua altura em Metros:"))

const imc = (pesoEmKg /(alturaEmMetros*alturaEmMetros))

console.log (imc)
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  
  const nomeDoUsuario=prompt("Informe aqui qual seu nome:")
  const idadeDoUsuario=Number(prompt("Informe aqui qual sua idade:"))
  const emailDoUsuario= prompt("Informe aqui qual seu e-mail:")

console.log (`Meu nome é ${nomeDoUsuario}, tenho ${idadeDoUsuario} anos, e o meu email é ${emailDoUsuario}.`)

}


// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  let corFavorita1=prompt("Informe aqui qual sua primeira cor favorita:")
  let corFavorita2=prompt("Informe aqui qual sua segunda cor favorita:")
  let corFavorita3=prompt("Informe aqui qual sua terceira cor favorita:")


console.log ([corFavorita1, corFavorita2, corFavorita3])
  
}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  const letraMaiusculas = prompt("Digite aqui alguma frase:")
  
  console.log(letraMaiusculas.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  const custoTotal =Number(prompt("Informe aqui o custo do espetáculo de teatro:"))
  const custoDoIngresso =Number(prompt("Informe aqui o custo do ingresso:"))

console.log(custoTotal / custoDoIngresso)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  const palavraA = prompt("Digite uma palavra")
  const palavraB = prompt("Digite outra palavra")
  
  console.log(palavraA.length === palavraB.length)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  const palavraC = prompt("Digite uma palavra")
  const palavraD = prompt("Digite outra palavra")
  
  console.log(palavraC.toUpperCase() === palavraD.toUpperCase())

}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  const anoAtualDoUsuario = Number(prompt("Digite aqui o ano atual"))
 const anoDeNacimentoDoUsuario = Number(prompt("Digite aqui seu ano de nascimento"))
 const emissaoDaIdentidade = Number(prompt("Digite quando sua Identidade foi emitida"))
 
 const idadeFinalDoUsuario = anoAtualDoUsuario - anoDeNacimentoDoUsuario
 const tempoDeRenovaçao = anoAtualDoUsuario - emissaoDaIdentidade  
 
console.log((idadeFinalDoUsuario <= 20 && tempoDeRenovaçao >= 5) || (( 20 < idadeFinalDoUsuario && idadeFinalDoUsuario <= 50) && tempoDeRenovaçao >=10) || (idadeFinalDoUsuario > 50 && tempoDeRenovaçao >=15))

  
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  const numeroDoUsuario =Number(prompt("Informe um ano qualquer:"))
  const anosMultiplosDeQuatrocentros = (numeroDoUsuario  % 400 === 0)
  const anosMultiplosDeQuatro = (numeroDoUsuario % 4 === 0) && (numeroDoUsuario %100 !== 0)
  console.log(anosMultiplosDeQuatrocentros || anosMultiplosDeQuatro)
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  const maiorDeDezoito = prompt("Voce é maior de 18 anos, responda com sim ou nao:")
  const respotaDoUsuario = (maiorDeDezoito === "sim")
  const ensinoMedio = prompt("Voce possui ensino medio completo?")
  const respotaDoEnsinoMedio = (ensinoMedio === "sim")
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
  const respostaDaDisponibilidade = (disponibilidade === "sim")
  
  console.log(respotaDoUsuario && respotaDoEnsinoMedio && respostaDaDisponibilidade )

}