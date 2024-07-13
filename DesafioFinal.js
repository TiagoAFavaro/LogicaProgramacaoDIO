class personagens {
    constructor(nome, level, tipo, danoBase, defesa, hp) {
        this.nome = nome
        this.level = level
        this.tipo = tipo
        this.danoBase = danoBase
        this.defesa = defesa
        this.hp = hp
    }

    atacar() {
        let tipoAtaque = ""

        if (this.tipo == "mago") {
            tipoAtaque = "magia"
        }

        if (this.tipo == "guerreiro") {
            tipoAtaque = "espada"
        }

        if (this.tipo == "monge") {
            tipoAtaque = "artes marciais"
        }

        if (this.tipo == "ninja") {
            tipoAtaque = "shuriken"
        }

        console.log(" O " + this.nome + " atacou usando " + tipoAtaque)
    }
}


console.log("\nCriando os personagens do Jogo ! \n")

let boss1 = new personagens("Rurakan", 100, "Vilão Infernal", 90, 100, 1000)
console.log("Novo BOSS Criado: ")
console.log(boss1)

let heroi1 = new personagens("Snape Mestre dos Magos", 30, "mago", 630, 100, 1000)
console.log("Novo Personagem Criado: ")
console.log(heroi1)

let heroi2 = new personagens("Samurai Bolado", 30, "ninja", 384, 100, 1000)
console.log("Novo Personagem Criado: ")
console.log(heroi2)

let heroi3 = new personagens("Colosso Tanker dos Tanker", 30, "guerreiro", 223, 100, 1000)
console.log("Novo Personagem Criado: ")
console.log(heroi3)

let danoMago = heroi1.danoBase - boss1.defesa
let danoNinja = heroi2.danoBase - boss1.defesa
let danoGuerreiro = heroi3.danoBase - boss1.defesa

console.log("\nInicio da Batalha contra o BOSS: " + boss1.nome + "\n")

console.log("\n")

while (boss1.hp > 0) {
    heroi1.atacar()
    danoSofridoMago = boss1.hp - danoMago
    console.log(" O BOSS " + boss1.nome + " agora tem " + danoSofridoMago + " de HP")
    boss1.hp = danoSofridoMago
    if (boss1.hp <= 0) break;

    console.log("\n")

    heroi2.atacar()
    danoSofridoNinja = boss1.hp - danoNinja
    console.log(" O BOSS " + boss1.nome + " agora tem " + danoSofridoNinja + "de HP")
    boss1.hp = danoSofridoNinja
    if (boss1.hp <= 0) break;

    console.log("\n")

    heroi3.atacar()
    danoSofridoGuerreiro = boss1.hp - danoGuerreiro
    console.log(" O BOSS " + boss1.nome + " agora tem " + danoSofridoGuerreiro + "de HP")
    if (boss1.hp <= 0) break;

    console.log("\n")
    
}

if (boss1.hp <= 0) {
    console.log("\nO BOSS " + boss1.nome + " foi derrotado!\n");
}