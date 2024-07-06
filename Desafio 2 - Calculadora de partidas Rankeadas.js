// // Desafio - DIO | CALCULADORA DE PARTIDAS RANKEADAS
// // MÉTODO 01 DE RESOLUÇÃO

resultadosPartidas(111,10)

function resultadosPartidas(vitorias, derrotas){
	calculoClassificacao = vitorias - derrotas
   	console.log("Sua pontuação atual é: " + calculoClassificacao)

    if(calculoClassificacao < 10) {
    	classificacao = "FERRO"
        console.log("Você se classificou como: " + classificacao)
    }

     if(calculoClassificacao >= 11 && calculoClassificacao <= 20 ) {
    	classificacao = "BRONZE"
        console.log("Você se classificou como: " + classificacao)
    }

     if(calculoClassificacao >= 21 && calculoClassificacao <= 50 ) {
    	classificacao = "PRATA"
        console.log("Você se classificou como: " + classificacao)
    }

     if(calculoClassificacao >= 51 && calculoClassificacao <= 80 ) {
    	classificacao = "OURO"
        console.log("Você se classificou como: " + classificacao)
    }

     if(calculoClassificacao >= 81 && calculoClassificacao <= 90 ) {
    	classificacao = "DIAMANTE"
        console.log("Você se classificou como: " + classificacao)
    }

     if(calculoClassificacao >= 91 && calculoClassificacao <= 100 ) {
    	classificacao = "LENDÁRIO"
        console.log("Você se classificou como: " + classificacao)
    }

     if(calculoClassificacao >= 101 ) {
    	classificacao = "IMORTAL"
        console.log("Você se classificou como: " + classificacao)
    }
}

// Desafio - DIO | CALCULADORA DE PARTIDAS RANKEADAS
// MÉTODO 02 DE RESOLUÇÃO

let nomeCampeao = pegarPrimeiroNome("Joao Pereira Amaral")

let vitorias = 50
let derrotas = 15

var resultadoRank = vitorias - derrotas

function classificacaoDoCampeao() {
    switch (true) {

        case (resultadoRank <= 10):
            classificacao = "FERRO"
            console.log("Você se classificou como: " + classificacao)
            break

        case (resultadoRank >= 11 && resultadoRank <= 20):
            classificacao = "BRONZE"
            console.log("Você se classificou como: " + classificacao)
            break

        case (resultadoRank >= 21 && resultadoRank <= 50):
            classificacao = "PRATA"
            console.log("Você se classificou como: " + classificacao)
            break

        case (resultadoRank >= 51 && resultadoRank <= 80):
            classificacao = "OURO"
            console.log("Você se classificou como: " + classificacao)
            break

        case (resultadoRank >= 81 && resultadoRank <= 90):
            classificacao = "DIAMANTE"
            console.log("Você se classificou como: " + classificacao)
            break

        case (resultadoRank >= 91 && resultadoRank <= 100):
            classificacao = "LENDÁRIO"
            console.log("Você se classificou como: " + classificacao)
            break
            
        case (resultadoRank >= 101):
            classificacao = "IMORTAL"
            console.log("Você se classificou como: " + classificacao)
            break
    }
}

function pegarPrimeiroNome(nome){
    let primeiroNome = nome.split(" ")[0]
    return primeiroNome
}

console.log( "Parabens " + nomeCampeao + " Sua Pontuação é de: " + resultadoRank)
classificacaoDoCampeao()

