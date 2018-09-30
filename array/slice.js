let frutas = [ 'banana', 'ameixa', 'tangerina', 'quiuí', 'tamarindo' ]

let frutasCortadas = frutas.slice( 2 )
console.log( frutasCortadas ) // retorna: [ 'tangerina', 'quiuí', 'tamarindo' ]

frutasCortadas = frutas.slice( 2, 4 )
console.log( frutasCortadas ) // retorna: [ 'tangerina', 'quiuí' ]

/*
 * slice() copia e cola elementos de um array para outro.
 * Primeiro parâmetro, qual ídice começa.
 * Segundo parâmetro, ate qual índice termina sem incluir ele mesmo. 
 * Exemplo: slice( 0,2 ) copia o primeiro e segundo elemento parando no terceiro.
 * Se somente 1 parâmetro for passado, vai começar dali até o último elemento.
*/ 