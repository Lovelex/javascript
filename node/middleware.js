const passo1 = ( objeto, next ) => {
    objeto.mid1 = 'Mid 1'
    next()
}

const passo2 = ( objeto, next ) => {
    objeto.mid2 = 'Mid 2'
    next()
}

const passo3 = ( object ) => {
    object.mid3 = 'Mid 3'
}

const exec = ( object, ...midleware ) => {
    const execPasso = ( indice ) => {
        midleware && indice < midleware.length &&
            midleware[ indice ]( object, () => { execPasso( indice + 1 ) } )
    } 
    execPasso(0)
}

const object = {}

exec( object, passo1, passo2, passo3 )

console.log( object )