const frutas1 = [  'uva', 'ameixa' ]
console.log( 'Array 1:', frutas1 ) // retorna: [ 'uva', 'ameixa' ]

const frutas2 = [ 'banana', 'pitanga' ]
console.log( 'Array 2:', frutas2 ) // retorna: [ 'banana', 'pitanga' ]
 
const frutasConcatenadas = frutas1.concat( frutas2 )

console.log( "Array's concatenados:", frutasConcatenadas  ) // retorna: [ 'uva', 'ameixa', 'banana', 'pitanga' ]
console.log( frutasConcatenadas.concat( 'a', 'b', [ [ 'c', 'd' ] ] ) ) // retorna: [ 'uva', 'ameixa', 'banana', 'pitanga', 'a', 'b', [ 'c', 'd' ] ]


/*
 * array.concat() concatena o array alvo com outros elementos sem causar efeito colateral
*/ 