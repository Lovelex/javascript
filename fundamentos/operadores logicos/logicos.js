// Testes lógicos

function logicos(tof1, tof2) {
    const and = tof1 && tof2 // verdadeiro quando ambos verdadeiros
    const nor = !(tof1 || tof2) // verdadeiro ambos falsos
    const or = tof1 || tof2 // verdadeiro quando um ou outro verdadeiro
    const not = !and // inverte o valor lógico
    const xor = tof1 != tof2 // verdadeiro quando somente um é verdadeiro
   
    return { and, nor, or, not, xor }
}


console.log( logicos( false, false ) ) // retorna: { and: false, nor: true, or: false, not: true, xor: false }
console.log( logicos( true, true ) ) // retorna: { and: true, nor: false, or: true, not: false, xor: false }
console.log( logicos( true, false ) ) // retorna: { and: false, nor: false, or: true, not: true, xor: true }
console.log( logicos( false, true ) ) // retorna: { and: false, nor: false, or: true, not: true, xor: true }
