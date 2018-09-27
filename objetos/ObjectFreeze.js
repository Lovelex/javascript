const pessoa = { nome: 'Lucas' }

Object.freeze( pessoa )

pessoa.nome = 'Pedro'
console.log( pessoa ) // retorna: { nome: 'Lucas' }

pessoa.idade = 24
console.log( pessoa ) // retorna: { nome: 'Lucas' }

delete pessoa.nome
console.log( pessoa ) // retorna: { nome: 'Lucas' }

/*
 * Object.freeze() congela o objeto impossibilitando edição, adição e exculão de valores 
*/ 