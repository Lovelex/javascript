// Function com destructing em parâmetros

function randDes( { min = 0 , max = 1000 } ){
    const value = Math.random() * ( max - min ) + min
    return Math.floor( value )
}

const objDes = { min : 40, max : 60 }
console.log( randDes( objDes ) )  // Retorna: Um número randômico entre 40 e 60
console.log( randDes( {} ) ) // Retorna> Um número randômico entre 0 e 1000 ( padrões determidado pelos parâmetros ) 

// Function sem destructing em parâmetros

function randCom( min = 0 , max = 1000 ){
    const value = Math.random() * ( max - min ) + min
    return Math.floor( value )
}

const objCom = { min : 40, max : 60 }
console.log( randCom( objCom.min, objDes.max ) )  // Retorna: Um número randômico entre 40 e 60
