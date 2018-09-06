const number1 = 1.0
const number2 = Number('1.0')

console.log("number1: " + number1 + '\n' + "number2: " + number2)
console.log(typeof number1, typeof number2) // retorna: NUMBER NUMBER

/* 
 * Números podem ser declarados diretamente 
 * ou por uma função chamada Number().
*/

console.log(Number.isInteger(2)) // retorna: TRUE
console.log(Number.isInteger('2')) // retorna: FALSE

/*
 * Number.isInteger() verifica se o dado é um número 
 * retornando um valor boleano
*/

const float1 = 1.21568

console.log(float1.toFixed(2)) // retorna: 1.22 

/*
 * toFixed() formata um número reduzindo sua casa decimal. 
 * O número é arredondado se necessário.
*/

const float2 = 1.452124

console.log(typeof float2.toString()) // retorna: string

/*
 * Converte para string o valor passado
 * Nota: se passar o número 2 por parâmetro o valor retorna
 * um número binário.
*/