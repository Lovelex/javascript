function criarProduto( nome, custo ){

    return { 
        nome,
        custo,
        desconto: 0.1
    }

}

console.log( criarProduto('PenDriverson', 60) )