const axios = require('axios')

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const getUrlResponse = response => {
  const funcionarios = response.data
  const orderSalarioByCresc = (a, b) => a.salario - b.salario
  const getChinese = (f) => f.pais === 'China'
  const getFemale = (f) => f.genero === 'F'

  const funcionariosFiltrados = funcionarios.filter(getChinese)
    .filter(getFemale)
    .sort(orderSalarioByCresc)

  console.log(funcionariosFiltrados[0])
}

axios.default(url).then(getUrlResponse)
