const pessoa = { nome: 'Lucas', idade: 24 }

console.log( Object.keys( pessoa ) ) // retorna: [ 'nome', 'idade' ]
console.log( Object.values( pessoa ) ) // retorna: [ 'Lucas', 24 ]
console.log( Object.entries( pessoa ) ) // retorna: [ [ 'nome', 'Lucas' ], [ 'idade', 24 ] ]

Object.defineProperty( pessoa, 'dataNascimento', {
    enumerable: true, // vai aparecer na lista?
    writable: false, // pode ser sobrescrito?
    value: '12/11/1993' // valor da propriedade
} )

console.log( pessoa ) // retorna: { nome: 'Lucas', idade: 24, dataNascimento: '12/11/1993' }

Object.defineProperty( pessoa, 'segredo', {
    enumerable: false, // vai aparecer na lista?
    writable: false, // pode ser sobrescrito?
    value: 'não aparecerá' // valor da propriedade
} )

console.log( pessoa ) // retorna: { nome: 'Lucas', idade: 24, dataNascimento: '12/11/1993' }

const destino = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }

Object.assign( destino, o1, o2 )

console.log( destino )

/*
 * Object.assign() concatena objetos. O primeiro parâmetro é qual sera o alvo da junção,
 * Os parâmetros seguintes são quais serão os objetos a concatenar.
 * Chaves de mesmo nome prevalece a última criada
*/ 