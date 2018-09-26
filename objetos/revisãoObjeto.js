const produto = new Object

produto.nome = 'Celular'
produto['preco'] = 499
console.log( produto ) // retorna: { nome: Celular, preco: 499 }

delete produto.nome
delete produto['preco']
console.log( produto ) // retorna: {}

const carro = {

    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }]

}

carro.proprietario.endereco.logradouro = 'Av Gigante' // altera o valor de {logradouro}
carro['proprietario']['endereco']['numero'] = 321 // altera o valor de {numero}

delete carro.proprietario // deleta o objeto e subObjetos de {proprietario}
