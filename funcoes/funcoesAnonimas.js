const operation = function( x, y ){
    return x + y
}

const setOperation = function( a, b , oper = operation ){
    return oper( a, b )
}

console.log( setOperation( 3, 2 ) ) // retorna : 5 ( operation() definida como padrão )
console.log( setOperation( 3, 2, ( a, b ) => a - b ) ) // retorna: 1
console.log( setOperation( 3, 2, ( a, b ) => a * b ) ) // retorna: 6

