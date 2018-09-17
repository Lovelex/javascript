function calcular( number1, number2, operator ){
    return eval( `${number1} ${operator} ${number2}` )
}

console.log( calcular( '12', '5' , '-' ) ) // retorna: 7
console.log( calcular( '12', '5' , '+' ) ) // retorna: 17
console.log( calcular( '12', '5' , '*' ) ) // retorna: 60
console.log( calcular( '12', '5' , '/' ) ) // retorna: 2.4
console.log( calcular( '12', '5' , '%' ) ) // retorna: 2

/*
 * eval() valida a string completando as operações argumentadas
*/ 