const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const usuarioRoutes = require('./routes/usuarioRoutes.js')


dotenv.config()


app.use(express.json());


app.use('/api', usuarioRoutes);



app.get('/', (req, res) => {
    res.send("Servidor funcionando")
});

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Conectado'))
.catch((err) => console.log('Error al conectar a la BD: ', err))

app.listen(3000, () => {
    console.log("Servidor escuchando en puerto: 3000")
    console.log("http://localhost:3000/")
});