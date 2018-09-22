function soma(){

    let soma = 0
    for ( i in arguments ){

        soma += arguments[i]

    }
    return soma

}

console.log( soma( 2, 2 ) ) // retorna: 4
console.log( soma( 2, 3, 3.3 ) ) // retorna: 8.3
console.log( soma() ) // retorna: 0

/*
 * arguments captura o argumento passado na função em forma de array
*/ 