const notas = [ 8.3, 6.6, 9.4, 7.1, 3.9 ]

const isNotasBaixas = ( nota ) => nota < 7

const notasBaixas = notas.filter( isNotasBaixas )

console.log( notasBaixas ) // retorna: [ 6.6, 3.9 ]

/*
 * filter() retorna os valores TRUE de uma determinada lógica e/ou armazenam em um array, no exemplo 
 * todas as notas que forem menor que 7 são consideradas TRUE, então são armazenadas em notasBaixas
*/ 
