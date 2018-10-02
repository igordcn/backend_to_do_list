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

router.put('/:idTarefa', async (req, res) =>{
    try{
        const { descricao, responsavel, data } = req.body
        const tarefa = await Tarefa.findByIdAndUpdate(req.params.idTarefa, { descricao, responsavel, data}, {new: true})
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