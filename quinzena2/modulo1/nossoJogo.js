/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


console.log("Seja Bem vindo ao Black Jack")

if(confirm("Deseja Iniciar uma Partida:")){
 const primeiraCartaUsuario = comprarCarta()
 const segundaCartaUsuario = comprarCarta()
 const primeiraCartaAdversario = comprarCarta()
 const segundaCartaAdversario = comprarCarta()
console.log(`A primeira carta do Usuario é ${primeiraCartaUsuario.texto} , e a segunda carta é ${segundaCartaUsuario.texto}`)
console.log(`A primeira carta do Adversario é ${primeiraCartaAdversario.texto} , e a segunda carta é ${segundaCartaAdversario.texto}`)
const somaDasCartasUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor
const somaDasCartasAdversario = primeiraCartaAdversario.valor + segundaCartaAdversario.valor
console.log(`A soma das carta do Usuario é ${somaDasCartasUsuario} pontos`)
console.log(`A soma carta do Adversario é ${somaDasCartasAdversario} pontos`)
// const verificarOpçaoAdversario = (somaDasCartasAdversario > somaDasCartasUsuario)
// const verificarOpçaoUsuario = (somaDasCartasAdversario < somaDasCartasUsuario)
// const verificarDeEmpate = (somaDasCartasAdversario === somaDasCartasUsuario)
if(somaDasCartasAdversario > somaDasCartasUsuario){
  console.log ("Seu adversrio ganhou ")
}
else if (somaDasCartasAdversario < somaDasCartasUsuario){
  console.log ("Usuario ganhou ")
}else{
console.log ("Empate")}
}
else {
  console.log("O jogo acabou")
}
 



