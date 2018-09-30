const frutas = [ 'uva', 'manga', 'maçã' ]
console.log( 'Array Padrão:', frutas ) // retorna: [ 'uva', 'manga', 'maçã' ]

frutas.shift()
console.log( 'Depois de shift:', frutas ) // retorna: [ 'manga', 'maçã' ]

frutas.unshift( 'pêra' )
console.log( 'Depois de unshift:', frutas ) // retorna: [ 'pêra', 'manga', 'maçã' ]

const frutaRetirada = frutas.shift()
console.log( '\nFruta retirada:', frutaRetirada ) // retorna: pêra

const total = frutas.unshift( 'morango' )
console.log( 'Total:', total ) // retorna: 3

console.log( '\nArray padrão:', frutas ) // retorna: [ 'morango', 'manga', 'maçã' ]

/*
 * shift() remove o primeiro elemento de um array e retorna esse elemento.
 * unshift() adiciona um elemento ao primeiro índice do array e retorna o número de elementos.
 * shift() e unshift() causam efeitos colaterais.
*/ 