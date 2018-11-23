const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.listen( 3003, () => { console.log('Servidor Startado') } )
app.use(bodyParser.urlencoded({extended:true}))

app.post('/usuarios', (req, res) => {
    console.log(req.body)
    res.send('Enviado com sucesso')
})