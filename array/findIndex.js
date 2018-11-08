const numbers = [ 1, 3, 5, 7, 8, 9, 11, 12, 14, 16 ]

const getPair = number => { if( number % 2 === 0 ) { return number } }

console.log( numbers.findIndex( getPair ) ) 

/*
 * findIndex() é uma estrutura de repetição em Arrays, retorna a chave do primeiro índice 
 * considerado como TRUE de acordo com a lógica proposta caso seja FALSE ele retorna -1.
 * Ele espera por 3 parâmetros: Valor do array, índice e o proprio array
 * No exemplo ele retorna a CHAVE do PRIMEIRO número par encontrado
*/ 