const express =  require('express')

const Tarefa = require('../model/tarefa')

const router = express.Router()

router.post('/', async (req, res) =>{
    try{
        const tarefa = await Tarefa.create(req.body)
        return res.send({tarefa})
    }catch(erro){
        console.log(erro)
        return res.status(400).send({error: 'Não pôde ser criada um tarefa'});
    }
})

router.get('/', async (req, res) =>{
    try{
        const tarefas = await Tarefa.find()
        return res.send({tarefas})
    }catch(erro){
        console.log(erro)
        return res.status(400).send({error:'Tarefa não encontrada'})
    }
})

router.put('/', async (req, res) =>{
    try{
        const { _id, descricao, responsavel, data } = req.body
        console.log(_id)
        const tarefa = await Tarefa.findByIdAndUpdate(_id, { descricao, responsavel, data}, {new: true})
        return res.send({tarefa})
    }catch(erro){
        console.log(erro)
        return res.status(400).send({error:'Tarefa não pôde ser atualizada'})
    }
})

router.delete('/:idTarefa', async (req, res) =>{
    try{
        await Tarefa.findByIdAndRemove(req.params.idTarefa)
        return res.send()
    }catch(erro){
        console.log(erro)
        return res.status(400).send({error:'Tarefa não pôde ser removida'})
    }
})

module.exports = app => app.use('/tarefas', router)