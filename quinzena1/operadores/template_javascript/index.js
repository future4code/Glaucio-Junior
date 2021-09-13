// Exercicio 1 
      const idade =Number(prompt("Informe sua idade, por favor:"))
      const idadeDoMelhorAmigo = Number(prompt("informe a idade do seu melhor amigo(a):"))

      console.log("Sua idade é maior do que a do seu melhor amigo?" , idade > idadeDoMelhorAmigo) // const resultado = (idade > idadeDoMelhorAmigo)
      console.log("A diferença de idade entre vocês é de:" , idade - idadeDoMelhorAmigo, "anos") //const resultadoDaDiferencaDeIdade = idade - idadeDoMelhorAmigo


 // Exercicio 2 

 //a)
      const numeroPar = Number(prompt("Informe um numero par:"))

  //b) 
      console.log(numeroPar % 2) 
 
   //c) todos vao ter o mesmo resultado 0, ou seja sem resto
   //d)console.log(numeroPar % 2) se o usuario informar um numero impar, o resultaso sempre sera 1 

 //Exercicio 3 

      const Suaidade = Number(prompt("Informe sua idade:"))
       console.log("A sua idade em meses é", 12 * Suaidade)
      console.log("A sua idade em dias é", 365 * Suaidade)
     console.log("A sua idade em horas é", (365 * Suaidade) *24)

//Exercicio 4

  const usuario1 = Number(prompt("Informe um numero qualquer:"))
  const usuario2 = Number(prompt("Informe um outro numero qualquer:"))

  console.log("O primeiro numero é maior que segundo?", usuario1 > usuario2)
  console.log("O primeiro numero é igual ao segundo?", usuario1 === usuario2)
  console.log("O primeiro numero é divisível pelo segundo",usuario1 >=usuario2 )
  console.log("O segundo numero é divisível pelo primeiro?", usuario2 >= usuario1) 

//  //Desafio 
//1)
   const soma1 =Number(77 - 32)*(5/9) + 273.15
   console.log("A conversao dessa unidade é:" , soma1,"K")

   const soma2 =Number(80)*(9/5) + 32
   console.log("A conversao dessa unidade é:" , soma2,"°F")
  
   const soma3 = Number(30)*(9/5) + 32
   const soma4 =Number(soma3 - 32)*(5/9) + 273.15
   console.log("A conversao dessa unidade é:" , soma3,"°F")
   console.log("A conversao dessa unidade é:" , soma4,"K")

//2)
   const quilowattHora = 280 * 0.05 
   console.log("O usuario pagara R$",quilowattHora)
   const desconto1 = quilowattHora * (15 / 100)
   const desconto2 = quilowattHora - desconto1
   console.log("Com o desconto o usuario pagara R$",desconto2)

 //3) 

//a -->
   const kg = 20 / 2.2046
   console.log("20lb equivalem a" ,kg, "kg")

//b --> 
   const kg1 = 10.5 / 35.274
   console.log("20oz equivalem a" ,kg1, "kg")

//c -->
   const metro = 100 * 1609
   console.log("100mi equivalem a" ,metro, "M")

//d --> 
   const metro1 = 50 / 3.281
   console.log("50pés equivalem a" ,metro1, "M")

//e -->
   const litro = 103.56 * 3.785
   console.log("103.56gal equivalem a" ,litro, "L")

//f --> 
   const litro1 = 450 / 3.52
   console.log("450xic equivalem a" ,litro1, "L")

   //g --> 
 
 const usuarioDecideValor1 = Number(prompt("Informe um Valor de conversão:")) // pedir um numero pra converter
 const unidadeDeConversao = alert("conversao de Libra para Kilo é:")
 console.log("Numero que o usuario pediu para converter",usuarioDecideValor1)
 const resultado1 = (usuarioDecideValor1) / 2.2046 
 console.log("O valor de ", usuarioDecideValor1, "Libra(s) para Kilo(s) é:",resultado1, "K")
 
 
 const usuarioDecideValor2 = Number(prompt("Informe um Valor de conversão:")) // pedir um numero pra converter
 const unidadeDeConversao2 = alert("conversao de Milha para Metros é:")
 console.log("Numero que o usuario pediu para converter",usuarioDecideValor2)
 const resultado2 = (usuarioDecideValor2) * 1609
 console.log("O valor de ", usuarioDecideValor2, "Milha(s) para Metro(s) é:",resultado2, "M")
 
 
 const usuarioDecideValor3 = Number(prompt("Informe um Valor de conversão:")) // pedir um numero pra converter
 const unidadeDeConversao3 = alert("conversao de Galão para Litros é:")
 console.log("Numero que o usuario pediu para converter",usuarioDecideValor3)
 const resultado3 = (usuarioDecideValor3) * 3.785
 console.log("O valor de ", usuarioDecideValor3, "Galão(s) para litro(s) é:",resultado3, "L")