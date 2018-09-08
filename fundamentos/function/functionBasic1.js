// Função sem retorno

function imprimirSoma( a, b ){
    console.log( a + b )
} // mostra no console o resultado de ( a + b )

imprimirSoma( 5, 5 ) // mostra no console: 10
imprimirSoma( 5 ) // mostra no console: NaN ( 5 + Undefinied = NaN )
imprimirSoma( 5, 4, 3, 2, 1 ) // mostra no console: 9 ( 3, 2, 1 são ignorados )
imprimirSoma() // mostra no console: NaN ( Undefinied + Undefinied = NaN )

// Função com retorno

function soma( a, b = 5 ){ // b = 5 significa que o valor padrão será 5, então se b não for passado, considerará 5
    return a + b
}

console.log( soma( 5 ) ) // retorna: 10
console.log( soma( 5, 5 ) ) // retorna: 10
console.log( soma(2, 2) ) // retorna: 4
console.log( soma( ) ) // retorna: NaN ( undefinied + 5 = NaN )

// Função com retorno: Exemplo 2

function somaEx2( a = 2, b = 2 ){
    return a + b
}

console.log( soma(  ) ) // retorna: NaN ( Você DEVE passar ao menos 1 parâmetro )
