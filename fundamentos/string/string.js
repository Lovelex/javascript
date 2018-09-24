const palavra = "L3TRA"

console.log( palavra.charAt(4) ) // retorna: A
console.log( palavra.charAt(5) ) // retorna: 
console.log( palavra.charCodeAt(4) ) // retorna: 65
console.log( palavra.indexOf('3') ) // retorna: 1
console.log( palavra.substring(1) ) // retorna: 3TRA
console.log( palavra.substring( 1, 4 ) ) // retorna: 3TR
console.log( "L3".concat("TRA") ) // retorna: L3TRA
console.log( "L3" + "TRA" ) // retorna: L3TRA
console.log( palavra.replace( 3, 'E' ) ) // retorna: LETRA
console.log( 'L,E,T,R,A'.split(',')) // retorna [L,E,T,R,A]

/*
 * charAt() retorna a letra contida na palavra de acordo com a posição passada por parâmetro (se a posição não existir, retorna vazio)
 * charCodeAt() retorna o valor da letra em Unicode de acordo com a posição da letra na palavra passada por parâmetro https://unicode-table.com/pt/#control-character
 * indexOf() retorna a posição da letra na palavra de acordo com a letra passada por parâmetro
 * substring() retorna uma quantidade de letras especifica, se 1 valor for passado, retorna da posição ate o final . Se duas, retorna do parâmetro 1 ate o parâmetro 2
 * concat() concatena uma string com outra
 * replace() modifica um valor de uma letra, primeiro parâmetro espera pelo alvo, o segundo prâmetro espera pela letra a ser substituída
 * split() transforma uma string em um array a partir de um separador determinado passado por parâmetro
*/ 