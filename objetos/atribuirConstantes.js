const a = 1
const b = 2
const c = 3

// forma antiga
const obj1 = { a: a, b: b, c: c }
console.log( obj1 ) // retorna: { a: 1, b: 2, c: 3 }

// forma nova
const obj2 = { a, b, c }
console.log( obj2 ) // retorna: { a: 1, b: 2, c: 3 }

const atribChave = 'chave'
const atribValor = 'valor'

// forma antiga
const atribObj1 = {}
atribObj1[atribChave] = atribValor
console.log( atribObj1 ) // retorna { chave: 'valor' }

// forma nova
const atribObj2 = { [atribChave]: atribValor }
console.log( atribObj2 ) // retorna { chave: 'valor' }

// forma antiga
const funcObj1 = { func : function(){ return 'oi' }  }
console.log( funcObj1 )

// forma nova
const funcObj2 = { func(){ return 'oi' } }
console.log( funcObj2 )
