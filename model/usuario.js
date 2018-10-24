const mongoose = require('../database/database')

const usuarioSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    senha:{
        type: String,
        required: true,
        select: false
    }
})

const Usuario = mongoose.model("Usuario", usuarioSchema);
module.exports = Usuario