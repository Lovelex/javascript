Object.prototype.atribZ = 'Z'

const avo = { atribA: 'A' }
const pai = { __proto__: avo, atribB: 'B', atribC: 'D' }
const filho = { __proto__: pai, atribC: 'C' }

console.log( avo, pai, filho ) // retorna: { atribA: 'A' } { atribB: 'B', atribC: 'D' } { atribC: 'C' }

console.log( pai.atribA ) // retorna: A
console.log( filho.atribA ) // retorna: A
console.log( filho.atribC ) // retorna: C
console.log( avo.atribZ ) // retorna: Z


/*
 * __proto__ cria uma herança em cima de algum objeto.
 * heranças percorrem em toda a árvore, se filho procurar um atributo 
 * que não tenha em pai mas tenha em avô ele irá retornar esse atributo.
 * 
 * Se houver conflito de nome se atributos, vence aquele que está mais prócimo na hierarquia.
 * 
 * Por padrão, quem está sempre no topo da hierarqui é Object.prototype.
*/ 