const frutas = [1,3,5,6,7,9,11]

const firstPair = ( value ) => { 
    
    if( value % 2 === 0 ){
        return value
    }

} 

console.log( frutas.find( firstPair ) )

