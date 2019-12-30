const produto = {
    nome: 'Caneta Bic Preta',
    preco: 1.90,
    desconto: 0.05
}

function clone(objeto) {
    //uso do operador spread '...'
    return { ...objeto }
}

const novoProduto = clone(produto)
novoProduto.nome = 'Caneta Bic Azul'

console.log(produto, novoProduto)