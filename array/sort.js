let letras = [ 'c', 'e,', 'a', 'b', 'd' ]
letras.sort() // efeito colateral
console.log( letras ) // retorna: [ 'a', 'b', 'c', 'd', 'e,' ]

let numeros = [ 2, 4, 3, 1, 5 ]
numeros.sort()
console.log( numeros ) // retorna: [ 1, 2, 3, 4, 5 ]

numeros.sort( (a,b) => b-a ) // não funciona com letras!
console.log( numeros ) // retorna: [ 5, 4, 3, 2, 1 ]

/*
 * sort() organiza um array em ordem alfabética ou do maior para o menor de acordo com a tabela unicode
 * sort(()=> b-a) retorna um array numérico do maior para o menor e não funciona com letras.
 * A função causa um efeito colateral no array. 
*/ 