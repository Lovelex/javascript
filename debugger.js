function calcularPreco( moeda = 'R$' ) {
    return `${this.produto} custa ${moeda, this.preco}`
}

const celular = {
    produto: 'Galaxy y',
    preco: 50
}

console.log( calcularPreco.apply( celular ) )