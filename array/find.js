const numbers = [ 1, 3, 5, 7, 8, 9, 11, 12, 14, 16 ]

const getPair = number => { if( number % 2 === 0 ) { return number } }

console.log( numbers.find( getPair ) ) // retorna 8

/*
 * find() é uma estrutura de repetição em Arrays, retorna o primeiro índice considerado 
 * como TRUEde acordo com a lógica proposta.
 * Ele espera por 3 parâmetros: Valor do array, índice e o proprio array
 * No exemplo ele retorna o PRIMEIRO número par encontrado
*/ 