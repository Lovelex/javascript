function tratarErroELancar( erro ){
    // throw new Error('Erro...') // retorna: erro com a mensagem Erro...
    // throw 18 // retorna: erro com a mensagem 18
    // throw false // retorna: erro com a mensagem false 
    throw { // retorna: um objeto com informações do erro
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado( obj ){
    try{
        console.log( obj.name.toUpperCase() + '!!!' ) // try tenta executar o código, se der erra passa a resposabilidade para 'catch'
    } catch( e ){ 
        tratarErroELancar( e ) // catch captura o erro e mostra na tela algo diferente ( mais amigável para o usuário )
    } finally { 
        console.log( 'Final' ) // finally sempre retorna alguma coisa independente se deu erro ou não
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado( obj ) // Retorna: erro de variável não definida ( não existe o objeto nome )

/*
 * TryCatchFinally servem para personalizar o possível erro causado seja para amenizar o susto ao usuário seja para facilitar a detecção de erros
*/ 