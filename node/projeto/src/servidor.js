const express = require('express')
const bodyParser = require('body-parser')
const bd = require('./bancoDeDados')

const app = express()
const porta = 3003

const listenMessage = () => { console.log( `Servidor online. Porta: ${porta}` ) }
const getProdutos = ( req, res, next ) => { res.send( bd.getProdutos() ) }
const getProduto = ( req, res, next ) => { res.send( bd.getProduto( req.params.id ) ) }
const postProduto = ( req, res, next ) => {
    const produto = bd.salvarProduto( { 
        nome: req.body.nome,
        preco: req.body.preco
    } )
    res.send( produto )
} 

app.listen( porta, listenMessage )
app.use( bodyParser.urlencoded( { extended: true } ) )

app.get( '/produtos', getProdutos )
app.get( '/produtos/:id', getProduto )

app.post( '/produtos', postProduto )

app.put( '/produtos/:id', ( req, res, next ) => {
    const produto = bd.salvarProduto( { 
        nome: req.body.nome,
        preco: req.body.preco,
        id: req.params.id
     } ) 
     res.send( produto )
} )

app.delete( '/produtos/:id', ( req, res, next ) => {
    res.send( bd.deleteProduto( req.params.id ) )
} )