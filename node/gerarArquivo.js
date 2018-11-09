const fs = require('fs')

let produto = {
    nome: 'Nintendo',
    valor: 1300,
    desconto: 0.15
}

const caminho = __dirname + '/arquivoGerado.json' 
const captureError = ( err ) => { console.log( err || 'Arquivo criado com sucesso.' ) }

fs.writeFile( caminho, JSON.stringify( produto ), captureError ) // gera um arquivo na pasta especificada

/*
 * fs.writable() cria um arquivo, ele espera por três parâmetros.
 * 1º qual o caminho e o nome do arquivo, 2º o que vai conter no arquivo, 3º função de callback que retorna um possível erro
*/