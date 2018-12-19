const bodyParser = require('body-parser')
const multer = require('multer') // É um gerenciador de upload, registra tempo de upload, nome de arquivo apos upload, etc.
const express = require('express')
const app = express()

app.use(express.static('.')) // Faz com que server.js sirva todos os arquivos da pasta atual e filhos
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const storage = multer.diskStorage({ // Metodo que requer um objeto como parâmetro, 1º- metodo: destination() - destino do arquivo, 2°- filename() nome do arquivo
  destination: function (req, file, callback) { // 3 parâmetros - requisição, arquivo, callback
    callback(null, './upload') // 2 parâmetros - erro, pasta destino.
  },
  filename: function (req, file, callback) { // 3 parâmetros - requisição, arquivo, callback
    callback(null, `${Date.now()}_${file.originalname}`) // 2 parâmetros - erro, nome do aruivo.
  }
})

/* Uma estratégia para não ter um arquivo duplicado é usar Date.now() antes do nome original do arquivo. 
 * Date.now() é um relogio desde 1970 rodando em mili-segundos
*/

const upload = multer({ storage }).single('arquivo') // single() vem com o NAME do input html no qual o multer irá interceptar

app.post('/upload', (req, res) => {
  upload(req, res, err => {
    if (err) {
      return res.end('Ocorreu um erro.')
    }

    res.end('Concluído com sucesso')
  })
})

app.post('/formulario', (req, res) => {
  res.send({
    ...req.body,
    id: 1
  })
})

app.get('/parOuImpar', (req, res) => {
  const par = parseInt(req.query.numero) % 2 === 0
  res.send({
    resultado: par ? 'par' : 'impar'
  })
})

app.listen(8080, () => console.log('Executando...'))