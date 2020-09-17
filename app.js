const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

const rotaPacote = require('./rotas/rotaPacote');
const rotaUsuario = require('');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/api_pacote', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("#################");
    console.log("# BD conectado!");
    console.log("#################");
}).catch((error) => {
    console.error("#################");
    console.error("# Erro ao conectar no BD!");
    console.error("#################");
});

mongoose.Promise = global.Promise;

app.use((req, res, next) => {
    console.warn("####################################");
    console.warn(`# Hora da requisicao:${Date.now()} `);
    console.warn(`# Método: ${req.method}            `);
    console.warn("####################################");
    next();
});

app.use('/api/pacotes', rotaPacote);
app.use('/api/usuario', rotaUsuario);

app.listen(port, () => {
    console.log(`Entrar: http://localhost:${port}`);
});