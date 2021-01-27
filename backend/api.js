const express = require('express')
const restful = require('node-restful')
const server = express()
const mongoose = restful.mongoose
const bodyParser = require('body-parser')
const cors = require('cors')

//chama minha
//entidade
//comentario
const Comentario= require('./models/comentario')


// Database
mongoose.Promise = global.Promise
mongoose.connect('mongodb://127.0.0.1:27017/wal',{ useNewUrlParser: true })

// Middlewares
server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())
server.use(cors())



// Rest API
Comentario.methods(['get', 'post',  'delete'])
Comentario.updateOptions({new: true, runValidators: true})

// Routes
Comentario.register(server, '/comentarios')

// Start Server
server.listen(3100)