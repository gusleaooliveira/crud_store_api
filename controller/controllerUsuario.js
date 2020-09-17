const pacote = require('../model/pacote');
const Usuario = require('../model/usuario');

exports.listar = (req, res) => {
    Usuario.find({}, (err, usuario) => {
        if(err){
            console.error(err);
            res.status(500).send(err);
        }
        res.send(pacote);
    });
}

exports.inserir = (req, res) => {
    let novoUsuario =  new Usuario(req.body);
    novoUsuario.save((err, usuario) => {
        if(err){
            console.error(err);
            res.send(err);
        }
        res.status(201).json(usuario);
    });
}

exports.atualizar = (req, res) => {
    let id = req.params.id;
    let usuarioAtualizar = req.body;
    Usuario.findOneAndUpdate({ _id: id}, usuarioAtualizar, {new: true}, (err,usuarioAtual) =>{
        if(err){
            console.log(err);
            res.send(err);
        }       
        res.json(usuarioAtual);
    });
}

exports.deletar = (req, res) => {
    let id = req.params.id;
    Usuario.findOneAndDelete({ _id: id}, (err, usuarioAtual) => {
        if(err){
            console.error(err);
            res.send(err);
        }
        res.json(usuarioAtual);
    });
}

exports.buscarPorId = (req, res) => {
    let  id = req.params.id;
    Usuario.findById(id, (err, usuario) => {
        if(err){
            console.error(err);
            res.send(err);
        }
        res.json(usuario);
    })
}

exports.procurar = (req, res) => {
    if(req.query && req.query.nome){
        const paramNome = req.query.nome;
        Usuario.find({nome: paramNome}, (err, usuarios) => {
            if(err){
                console.log(err);
                res.status(500).send(err);
            }
            res.json(usuarios);
        });
    }
}