const express = require('express');
const app = express();
const port = 3000;

const rotaPacote = require('./rotas/rotaPacote');

app.listen(port, () => {
    console.log(`Entrar: http://localhost:${port}`);
});