let nomeHeroi = "Tiago"
let expHeroi = 4000
let classificacao

switch (true) {
    case expHeroi <= 1000:
        classificacao = "Ferro"
        break
    case expHeroi >= 1001 && expHeroi <= 2000:
        classificacao = "Bronze"
        break
    case expHeroi >= 2001 && expHeroi <= 5000:
        classificacao = "Prata"
        break
    case expHeroi >= 5001 && expHeroi <= 7000:
        classificacao = "Ouro"
        break
    case expHeroi >= 7001 && expHeroi <= 8000:
        classificacao = "Platina"
        break    
    case expHeroi >= 8001 && expHeroi <= 9000:
        classificacao = "Ascendente"
        break
    case expHeroi >= 9001 && expHeroi <= 1000:
        classificacao = "Imortal"
        break
    case expHeroi >= 10000:
        classificacao = "Radiante"
        break
 
}

console.log("O Heroi " + nomeHeroi + " está classificado como: " + classificacao)