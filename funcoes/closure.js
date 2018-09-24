const value = 'Global'

function showValue(){

    const value = 'Local'

    function returnValue(){

        return value

    }
    return returnValue
    
}

const valueReturned = showValue()

console.log( valueReturned() ) // retorna: Local

/*
 * Closure é o escopo criado quando uma função é declarada
 * Esse escopo permite a função acessar e manipular variáveis externas à função
*/ 