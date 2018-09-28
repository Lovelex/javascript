const pai = { nome: 'Otávio', queixoFurado: true }
const filho = { __proto__: pai, nome: 'Bruno' }

console.log( filho.hasOwnProperty( 'nome' ) ) // retorna: true
console.log( filho.hasOwnProperty( 'queixoFurado' ) ) // retorna: false

/*
 * hasOwnProperty() pergunta para o objeto se a propriedade é dele ou foi herdada
 * respondendo com um true para sim e false para não.
*/ 