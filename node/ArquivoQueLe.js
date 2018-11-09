const fs = require('fs')
const caminho = __dirname + '/ArquivoParaSerLido.json'

const conteudo = fs.readFileSync( caminho, 'utf-8' )
console.log( 'Sync...\n', JSON.parse( conteudo ) ) // retorna o conteúdo do ARQUIVO solicitado de forma SÍNCRONA.

const getContent = ( erro, conteudo ) => {
    console.log( 'Async...\n', JSON.parse( conteudo ) )
}
fs.readFile( caminho, 'utf-8', getContent ) // retorna o conteúdo do ARQUIVO solicitado de forma ASSÍNCRONA.

const conteudoDiretorio = fs.readdirSync( __dirname, 'utf-8' )
console.log('Sync...\n', conteudoDiretorio ) // retorna o conteúdo do DIRETORIO solicitado de forma SÍNCRONA.

const getDirectoryContent = ( erro, conteudo ) => {
    console.log('Async...\n', conteudo )    
} 
fs.readdir( __dirname, 'utf-8', getDirectoryContent ) // retorna o conteúdo do DIRETORIO solicitado de forma ASSÍNCRONA.

const arquivo = require( './ArquivoParaSerLido.json' )
console.log( arquivo.funcionario.nome ) // retorna o conteudo do ARQUIVO solicitado mais prático

/*
 * FS ou FILE SYSTEM é uma biblioteca do NODE JS que facilita a manipulação de arquivos.
 * fs.readFileSync e fs.readFile serve para ler o arquivo solicitado de forma SÍNCRONA ou ASSINCRONA.
 */

/* 
 * SÍNCRONA dois parâmetros são requeridos: 1º qual o caminho do arquivo? 2º qual tipo de codifiação (utf - 8)? 
 * ASSÍNCRONA três parâmetros são requeridos: 1º qual o caminho do arquivo? 2º qual tipo de codifiação? 3º uma função callback de 
 * dois parâmetros, o 1º um erro que pode acontecer e ser tratado. 2º o conteúdo dentro do arquivo.
*/

/*
 * fs.readdirSync e fs.readdir serve para ler o diretório solicitado de forma SÍNCRONA ou ASSINCRONA e os parâmetros
 * e funcionalidade são os mesmos dos exemplos acima.
 */

 