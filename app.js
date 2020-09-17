const express = require('express');
const app = express();
const port = 3000;

const rotaPacote = require('./rotas/rotaPacote');

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use((req, res, next) => {
    console.warn("####################################");
    console.warn(`# Hora da requisicao:${Date.now()} `);
    console.warn(`# Método: ${req.method}            `);
    console.warn("####################################");
});

app.use('/api/pacotes');

app.listen(port, () => {
    console.log(`Entrar: http://localhost:${port}`);
});