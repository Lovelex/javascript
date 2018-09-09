// Objetos para exemplos

const obj = { 
    nome: 'Lucas', 
    idade: 24, 
    cidade: 'BH', 
    imprimirFala: ( fala ) => console.log( fala )
}
const obj2 = { 
    nome: 'Lucas', 
    idade: 24, 
    cidade: 'BH', 
    imprimirFala: ( fala ) => console.log( fala )
}

// Desctucting sem nomear a constante

const { nome, idade } = obj

console.log( nome, idade ) // retorna: Lucas 24
console.log( nome ) // retorna: Lucas

// Destructing Nemeando a constante

const { nome : n, idade : i } = obj2

console.log( n, i ) // retorna: Lucas 24
console.log( n ) // retorna: Lucas