const restful = require('node-restful')


const Comentarios = restful.model('Comentarios', {
    nome: { type: String, required: true },
    comentario:{type: String, required: true}
})



module.exports =  Comentarios;