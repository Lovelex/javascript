let frutas = [ 'abacaxi', 'manga', 'uva' ]

frutas.splice( 1, 1 ) // efeito colateral
console.log( frutas ) // retorna: [ 'abacaxi', 'uva' ]

frutas.splice( 1, 0, 'manga' )
console.log( frutas ) // retorna: [ 'abacaxi', 'manga', 'uva' ]

frutas.splice( 2, 1, 'maçã', 'pitanga', 'banana' )
console.log( frutas ) // retorna: [ 'abacaxi', 'manga', 'maçã', 'pitanga', 'banana' ]

/*
 * splice() pode ser usado de três maneiras: 
 * Adicionar elementos no array.
 * Remover elementos do array.
 * Adicinar e remover elementos do array.
 * O primeiro parâmetro, a partir de qual índice vamos remover ou adicionar elementos?
 * O segundo parâmetro, quantos elementos vamos remover?
 * O terceiro parâmetro ao infinito, quais elementos vamos adicionar?
 * A função tem efeito colateral
*/ 