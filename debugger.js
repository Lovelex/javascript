const soma = ( ...nums ) => {
    return eval( nums.join('+') )
}

console.log( soma( 1, 2, 3 ) )