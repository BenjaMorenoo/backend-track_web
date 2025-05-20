const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    nombre: String,
    apellido: String
});

const Usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;