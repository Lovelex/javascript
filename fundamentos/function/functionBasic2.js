// Function atribuida a uma variável

const soma1 = function( a, b ){
    return a + b
}
console.log( soma1( 2, 2 ) ) // retorna: 4

// Arrow Function atribuida a uma variável

const soma2 = ( a, b ) => { 
    return a + b
}
console.log( soma2( 2, 2 ) ) // retorna: 4

// Arrow Function reduzida atribuida a uma variável

const soma3 = ( a, b ) => a + b
console.log( soma3( 2, 2 ) ) // retorna: 4

// Arrow Function reduzida com um parâmetro atribuida a uma variável

const soma4 = a => a // retorna: 4 ( Quando se tem somente 1 parâmetro não precisa de parênteses )
console.log( 4 )