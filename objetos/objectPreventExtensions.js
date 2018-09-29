const produto = Object.preventExtensions( {
    nome: 'Lápis', preco: 1.99, tag: 'promoção'
} )

console.log(produto) // retorna: { nome: 'Lápis', preco: 1.99, tag: 'promoção' }
console.log( Object.isExtensible( produto ) ) // retorna: false

produto.nome = 'Borracha'
produto.descricao = 'Produto novo'
delete produto.tag

console.log( produto ) // retorna: { nome: 'Borracha', preco: 1.99 }

/*
 * Object.preventExtensions() previne o objeto de ser adicionado mais propriedades.
 * Object.isEntensible() verifica se o objeto pode ser adicionado novas propriedades retornando true ou false
*/ 