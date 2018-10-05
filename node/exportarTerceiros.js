const _ = require('lodash')

setInterval( () => console.log( _.random( 0, 1 ) ), 1000 )

/*
 * para importar modulos de terceiros com npm, basta usar require e o nome do modulo ao invés de sua pasta
*/ 