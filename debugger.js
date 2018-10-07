let numbers = [ 3, 2, 5, 4, 1 ]

const isBigger  = (numAc, numAt) => numAc > numAt ? numAc : numAt 

console.log( numbers.reduce( isBigger ) )


let numeroAcumulado = numeroAcumulado + numeroAtual
let NumeroAtual = numeroAtual