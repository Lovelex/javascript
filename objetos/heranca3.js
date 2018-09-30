const pai = { nome: 'Carlos', corCabelo: 'preto' }

const filho1 = Object.create( pai )
filho1.nome = 'Antony'
console.log( filho1.nome, filho1.corCabelo ) // retorna: Antony preto

const filho2 = Object.create( pai, {
    nome: { value: 'Kleber', writable: false, enumerable: true  },
    idade: {  value: 24, writable: true, enumerable: true }
} )

console.log( filho2 ) // retorna: { nome: 'Kleber', idade: 24 }
console.log( filho2.nome, filho2.corCabelo ) // retornar: Klebr preto

for( let key in filho2 ){
    filho2.hasOwnProperty(key) ? 
        console.log( `Proprietário: ${key}` ) : console.log( `Herdou: ${key}` ) 
        // retorna = Proprietário: nome, Proprietário: idade, Herdou: corCabelo
}