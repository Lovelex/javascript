let pessoas = [ 'Bia', 'Anderson', 'Carmem' ]
console.log( pessoas ) // retorna: [ 'Bia', 'Anderson', 'Carmem' ] 

pessoas = new Array
pessoas[0] = 'Bia'
pessoas[1] = 'Anderson'
pessoas.push( 'Carmem' )
console.log( pessoas ) // retorna: [ 'Bia', 'Anderson', 'Carmem' ] 

delete pessoas[0]
console.log( pessoas ) // retorna: [ <1 empty item>, 'Anderson', 'Carmem' ]