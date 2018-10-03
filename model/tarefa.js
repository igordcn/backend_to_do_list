const mongoose = require('../database/database')

const tarefaSchema = new mongoose.Schema({
    descricao:{
        type: String,
        required: true
    },
    responsavel:{
        type: String,
        required: true
    },
    data:{
        type: String,
        required: true
        //default: Date.now
    }
})

const Tarefa = mongoose.model("Tarefa", tarefaSchema)
module.exports = Tarefa