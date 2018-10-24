const express = require('express')

const Usuario = require('../model/usuario')

const router = express.Router()

router.post('/register', async (req, res) => {
    const {nome, email, senha} = req.body
    const usr = await Usuario.findOne({email})
    if(usr)
        return res.status(400).send({error:'O usuário já possui cadastro'})
    try{
        const usuario = await Usuario.create(req.body)
        usuario.senha = undefined
        return res.send({usuario})
    }catch(erro){
        console.log(erro)
        return res.status(400).send({error: 'O usuário não pôde ser registrado'})
    }
})

router.post('/login', async (req, res) =>{
    const { email, senha } = req.body

    const usuario = await Usuario.findOne({email}).select('+senha')

    if(!usuario){
        return res.status(400).send({error: 'Usuário não encontrado'})
    }

    if(usuario.senha != senha){
        return res.status(400).send({error: 'Senha inválida'})
    }

    usuario.senha = undefined

    return res.send({email})
})

module.exports = app => app.use('/usuarios', router)