const numeros = [ 'um', 'dois', 'três' ]

numeros.push( 'quatro' )
console.log( numeros ) // retorna: [ 'um', 'dois', 'três', 'quatro' ]

numeros.pop()
console.log( numeros ) // retorna: [ 'um', 'dois', 'três' ]

let numeroRetirado = numeros.pop()
console.log( numeroRetirado ) // retorna: tres

let total = numeros.push( 'três', 'quatro' )
console.log( total )

/*
 * push() adiciona um elemento no final do array e retorna a quantidade de elementos do array.
 * pop() remove o último elemento do array e retorna esse elemento
 * pop() e push() causam efeitos colaterais
*/ 