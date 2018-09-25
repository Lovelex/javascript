function criarPessoa(){
    return {
        nome: 'Lucas',
        sobrenome: 'Humberto'
    }
}

console.log( criarPessoa() ) // retorna: { nome: 'Lucas', sobrenome: 'Humberto' }
console.log( criarPessoa().nome ) // retorna: Lucas
console.log( criarPessoa().sobrenome ) // retorna: Humberto

/*
 * Função Factory é uma função que retorna um objeto
*/ 