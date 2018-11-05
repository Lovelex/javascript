function getPreco( imposto = 0, moeda = 'R$' ){

    return `${moeda} ${this.preco * ( 1 - this.desc ) * ( 1 + imposto )}`

}

const produto = {
    nome: 'Notebook',
    preco: 4900,
    desc: 0.15
}

console.log( getPreco.call( produto ) ) // retorna : R$ 4165
console.log( getPreco.apply( produto ) ) // retorna : R$ 4165

console.log( getPreco.call( produto, 0.15, '$' ) ) // retorna : $ 4789.75 
console.log( getPreco.apply( produto, [ 0.15, '$' ] ) ) // retorna : $ 4789.75

/*
 * Com call ou apply podemos atribuir chaves e valores
 * de objetos em funções com retorno THIS.
 * Nota: não funciona em arrow Function
*/ 