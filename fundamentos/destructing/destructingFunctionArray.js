function rand( [ min = 0 , max = 1000 ] ){
    if( min > max ) [ min, max ] = [ max, min ]
    const value = Math.random() * ( max - min ) + min
    return Math.floor( value )
}

console.log( rand( [ min = 40, max = 60 ] ) ) // retorna: um valor random entre 40 e 60
console.log( rand( [ min = 60, max = 40 ] ) ) // retorna: um valor random entre 40 e 60
console.log( rand( [ min = 40 ] ) ) // retorna: um valor random entre 40 e 1000
console.log( rand( [ , max = 60 ] ) )  // retorna: um valor random entre 0 e 60
console.log( rand( [] ) ) // retorna: um valor random entre 0 e 1000