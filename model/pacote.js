let mongoose = require('mongoose');
let Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const PacoteSchema = new Schema({
    nome: String,
    descricao: String,
    comandoInstalar: String,
    comandoApagar: String,
    versao: String
}, {
    versionKey: false
});

module.exports = mongoose.model("Pacote", PacoteSchema);