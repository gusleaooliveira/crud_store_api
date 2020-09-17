let mongooose = require('mongoose');
let Schema = mongooose.Schema;

mongooose.Promise = global.Promise;

const UsuarioSchema =  new Schema({
    nome: String,
    senha: String,
    email: String,
    usuarioGithub: String
}, {
    versionKey: false
});

module.exports = mongooose.model("Usuario", UsuarioSchema);