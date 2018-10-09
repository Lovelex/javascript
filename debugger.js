const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const menorSalario = (a,b) => a.salario - b.salario
const getChineses = (f) => f.pais === 'China' 
const getFemales = (f) => f.genero === 'F'

axios.get( url ).then( response => {
    const funcionarios = response.data
    funcionarios.sort( menorSalario )
    
    funcionariosFiltrados = funcionarios
        .filter( getChineses )
        .filter( getFemales )

    console.log( funcionariosFiltrados[0] )

} )