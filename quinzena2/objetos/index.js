// Exercicio 1 

const pessoa = {
    nome: "Glaucio Junior",
    apelidos: ["Glaucin " , "Graube " , "Jr."]
}
const funsaoPessoa = (pessoa) => {
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)
}

funsaoPessoa(pessoa)

const novoApelido = {
    ...pessoa ,
    apelidos: ["Indinho " , "tupi " , " tony"]
}
funsaoPessoa(novoApelido)

// Exercicio 2 

const arrayVazio = []
const pessoaNumero1 = {
    nome : "Joao" ,
    idade: 23, 
    profissao: "Estudante",
}
const pessoaNumero2 = {
        nome : "Pedro" ,
        idade: 33, 
        profissao: "Desenvolvedor"
    }

let funsaoDasPessoas = (pessoaNumero1 , pessoaNumero2) => {
    console.log(`O nome da primeira pessoa é ${pessoaNumero1.nome} e o nome da segunda pessoa é ${pessoaNumero2.nome}`)
    console.log(pessoaNumero1.nome.length ,pessoaNumero2.nome.length )
    console.log(`Joao tem a idade de ${pessoaNumero1.idade} anos e Pedro tem a idade de ${pessoaNumero2.idade} anos`)
    console.log(`Joao tem a profissao de ${pessoaNumero1.profissao} ja Pedro tem  a profissao de ${pessoaNumero2.profissao} `)
    console.log(pessoaNumero1.profissao.length ,pessoaNumero2.profissao.length )

}

arrayVazio.push(pessoaNumero1.nome,pessoaNumero1.nome.length , pessoaNumero1.idade , pessoaNumero1.profissao,pessoaNumero1.profissao.length)
arrayVazio.push(pessoaNumero2.nome,pessoaNumero2.nome.length , pessoaNumero2.idade , pessoaNumero2.profissao,pessoaNumero2.profissao.length)
console.log(arrayVazio)

// Exercicio 3 

const guardaVariavel = []

const frutaNumero0 = {
    nome : "Maça",
    disponibilidade: true 
}
const frutaNumero1 = {
    nome : "Uva",
    disponibilidade: true 
}
const frutaNumero2 = {
    nome : "Pera",
    disponibilidade: true 
}

const receberFruta = (frutaNumero0 , frutaNumero1 , frutaNumero2) => {
    guardaVariavel.push(frutaNumero0 )
    guardaVariavel.push(frutaNumero1 )
    guardaVariavel.push(frutaNumero2 )
    console.log(guardaVariavel)
}

receberFruta(frutaNumero0 , frutaNumero1 , frutaNumero2)


//Desafio

//A)

    const pergutaAoUsuario = (usuario) =>{
        const dadosUsuario = {
            nomeDoUsuario: prompt ("Informe aqui seu nome:") ,
            idadeDoUsuario:prompt ("Informe aqui sua idade:") , 
            profissaoDoUsuario:prompt("Informe aqui sua profissao:")
        }
    console.log(dadosUsuario , typeof dadosUsuario)
    }

    pergutaAoUsuario()

//B)

const meusFilmes = () => {
    const meuFilmeFavorito = {
        anoDeLançamento: 2002,
        nomeDoFilme:"Homem Aranha"
    }
    const meufilme ={
        anoDeLançamento:2011,
        nomeDoFilme:"Capitão America"
    }
    const verificaçaoDosFilmes = (meuFilmeFavorito.anoDeLançamento < meufilme.anoDeLançamento)
    const verificaçaoDosFilmes1 = (meuFilmeFavorito.anoDeLançamento === meufilme.anoDeLançamento)
    console.log("O primeiro filme foi lançado antes do segundo?" ,verificaçaoDosFilmes )
    console.log("O primeiro filme foi lançado no mesmo ano do segundo?", verificaçaoDosFilmes1)

}

meusFilmes()




