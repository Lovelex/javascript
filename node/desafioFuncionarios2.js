const axios = require( 'axios' )
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const axiosResponse = ( response ) => {
    const funcionarios = response.data

    const orderByPais =  ( chines ) => chines.pais === 'China'
    const orderByGenero =  ( f ) => f.genero === 'F' 
    const getLowerSalario = ( acumulado, atual ) => acumulado.salario < atual.salario? acumulado : atual


    console.log( funcionarios.filter( orderByPais )
    .filter( orderByGenero )
    .reduce( getLowerSalario ) )

}

axios.default( url ).then( axiosResponse )