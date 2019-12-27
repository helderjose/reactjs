class Pessoa {
    constructor(nome) {
        this.nome = nome 
    }

    toString() {
        return `Pessoa: ${this.nome}`
    }
}

const pessoa = new Pessoa('Guilherme ex.5')
console.log(pessoa.toString())