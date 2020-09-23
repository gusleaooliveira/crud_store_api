require("dotenv-safe").config();
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const jwt = require("jsonwebtoken");

const rotaPacote = require('./rotas/rotaPacote');
const rotaUsuario = require('./rotas/rotaUsuario');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

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

function verifiqueJwt(req, res, next) {
    let token = req.headers["x-access-token"];
    if(!token){
        console.error("# Nenhum token fornecido! ");
        return res.status(401).json({auth: false, msg: "Nenum token fornecido!"});
    }

    jwt.verify(token, process.env.SECRET, (err, decoded) =>{
        if(err){
            console.error("# Falha ao autenticar! ");
            return res.json(500).json({auth: false, msg: "Falha ao autenticar! "});
        }
        req.userId = decoded.id;

        next();
    });
};


app.use((req, res, next) => {
    console.warn("####################################");
    console.warn(`# Hora da requisicao:${Date.now()} `);
    console.warn(`# Método: ${req.method}            `);
    verifiqueJwt();
    console.warn("####################################");
    next();
});

app.use('/api/pacotes', rotaPacote);
app.use('/api/usuario', rotaUsuario);

app.listen(port, () => {
    console.log(`Entrar: http://localhost:${port}`);
});