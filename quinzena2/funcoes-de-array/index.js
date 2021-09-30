// Exercicio 1 

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//  // A) 
  
//  const nomeDosPets = pets.map((pet) => {
//   return pet.nome
//  }
//  )
//  console.log(nomeDosPets)

//  //B) 

//  const petSalsicha = pets.filter((Salsicha) =>{
// return Salsicha.raca === "Salsicha"
//  })
//  console.log(petSalsicha)

//  //C)

//  const petPoodle = pets.filter((poodle) =>{
//     return poodle.raca === "Poodle"
//  })

// console.log(petPoodle)

// const descontPoodle = petPoodle.map((desconto) =>{
//     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${desconto.nome}!`
// })
// console.log(descontPoodle)


// Exercicio 2  

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 // A) 

 const nomeDosItens = produtos.map((produto) =>{
     return produto.nome
 })
 console.log(nomeDosItens)

 //B) 
 
//  const precoDosItens = produtos.map((valor) => {
//     const nomeDoProduto = produtos.nome
//     const novoVlor =  valor.preco * 0.95

// })


//  console.log(precoDosItens)



 //C) 
  const nomeBebidas = produtos.map((bebidas) => {
  return bebidas.categoria 
 }
 )
 console.log(nomeBebidas)

 const quaisSaoBebidas = nomeBebidas.filter((bebidas) =>{

 })