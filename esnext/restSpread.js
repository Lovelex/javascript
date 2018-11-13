// Rest/Spread com objeto

const obj = { nome: 'Rosa', preco: 25.00 }

const objClone = { vendendo: true, ...obj }

console.log( objClone ) // retorna: { vendendo: true, nome: 'Rosa', preco: 25 }

// Rest/Spread com array

const arr = [ '3', '4', '5' ]

const arrClone = [ '1', '2', ...arr ]

console.log( arrClone ) // retorna: [ '1', '2', '3', '4', '5' ]

// Rest/Spread com função

const func = ( ...args ) => console.log( args ) 

func( 1, 2, 3, 4, 5 ) // retorna: [ 1, 2, 3, 4, 5 ]

/* 
 * Rest ou Spread é um operador que pode ser usado em Objtos, Arrays e funções 
 * para capturar conjunto de dados.
*/ 
 
/* 
 * Em objetos, são capturado suas chaves e valores.
 * Em arrays, são capturados seus índices de valores.
 * Em função, são capturados seus parâmetros e convertidos em um array
*/
 
