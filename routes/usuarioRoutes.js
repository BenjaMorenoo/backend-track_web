const express = require('express');
const Usuario = require('../model/Usuario.js');
const router = express.Router();

router.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (err) {
        res.status(500).json({
            message: 'Error al obtener los usuarios'
        })
    }
});

router.post('/usuarios', async (req, res) => {
    try {
        const usuarios = new Usuario(req.body);
        await usuarios.save();
        res.status(201).json(usuarios);
    } catch (err) {
        res.status(400).json({
            message: 'Error al mandar el usuario'
        })
    }
});

module.exports = router;