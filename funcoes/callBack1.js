const cores = ['azul', 'vermelho', 'roxo', 'branco', 'preto']

const imprimirCores = ( cor, index ) => {
    console.log( `${index +1}. ${cor}` )
}

cores.forEach( imprimirCores ) // retorna: 1. azul, 2. vermelho, 3. roxo, 4. branco, 5. preto

/*****************************************/

cores.forEach( ( cor, index ) =>{ // retorna: 1. azul, 2. vermelho, 3. roxo, 4. branco, 5. preto
    console.log( `${index +1}. ${cor}` )
} )

/*
 * CallBack são funções passadas em parâmetros de outras funções que são chamadas de volta quando determinado evento é acionado
*/  
   