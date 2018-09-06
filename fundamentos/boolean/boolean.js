let isActive = true
console.log( isActive ) // retorna: true

isActive = false
console.log( isActive ) // retorna: false

// TRUTHY
console.log(!!3) // retorna: true
console.log(!!-1) // retorna: true
console.log(!!' ') // retorna: true
console.log(!!'texto') // retorna: true
console.log(!![]) // retorna: true
console.log(!!{}) // retorna: true
console.log(!!Infinity) // retorna: true

// FALSY
console.log(!!0) // retorna: false
console.log(!!'') // retorna: false
console.log(!!null) // retorna: false
console.log(!!NaN) // retorna: false
console.log(!!undefined) // retorna: false
