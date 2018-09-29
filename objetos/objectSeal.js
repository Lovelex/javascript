const pessoa = { nome: 'Julia', idade: 24 }

Object.seal( pessoa )
pessoa.peso = 60
delete pessoa.idade
pessoa.nome = 'Carla'

console.log( pessoa )

console.log( Object.isSealed( pessoa ) ) // retorna: true

/*
 * Object.seal() sela um objeto, impedindo adição e exclusão de propriedades, podendo assim somente editar valores
 * Object.isSealed() verifica se o objeto foi selado, retornando true ou false
*/ 