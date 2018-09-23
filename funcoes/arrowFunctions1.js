let dobro = ( a ) => { return 2 * a }

console.log( dobro( 2 ) ) // retorna: 4


dobro = ( a ) => 2 * a

console.log( dobro( 2 ) ) // retorna: 4


dobro = ( a ) => { 2 * a } 

console.log( dobro( 2 ) ) // retorna: undefinied ( quando possuir bloco de código {}, de ter o return incluso senão retornará undefined )