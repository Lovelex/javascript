const produtos = {}

const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

function salvarProduto(produto){
    if( !produto.id ) { produto.id = sequence.id }
    produtos[produto.id] = produto
    return produto
}

function getProduto(id) {
    return produtos[id] || {}
}

function getProdutos(){
    return Object.values(produtos)
}

function deleteProduto(id){
    const produto = produtos[id]
    if( produtos[id] ) { delete produtos[id] } else { return 'Não existe' } 
    return produto
}

module.exports = { salvarProduto, getProduto, getProdutos, deleteProduto }