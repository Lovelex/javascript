a = {prop1 : 'prop1'}
b = a

console.log( a, b ) // retorna: { prop1: 'prop1' } { prop1: 'prop1' }

b.prop2 = 'prop2'

console.log( a, b ) // retorna: { prop1: 'prop1', prop2: 'prop2' } { prop1: 'prop1', prop2: 'prop2' }

c = 10
d = c

console.log( c, d ) // retorna: 10 10

d = 5

console.log( c, d ) // retorna 10 5

/*
 * uma variável com objeto não pode ser copiada por outra, ela aponta na mesma direção.
 * Já uma variável diferente de objeto pode ser copiada por outra.
*/ 