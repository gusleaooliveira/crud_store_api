const Pacote = require('../model/pacote');

exports.listar = (req, res) => {
    Pacote.find({}, (err, pacotes) => {
        if(err){
            console.error(err);
            res.status(500).send(err);
        }
        res.send(pacotes);
    });
}

exports.inserir = (req, res) => {
    let novoPacote = new Pacote(req.body); 
    novoPacote.save((err, pacote) => {
        if(err){
            console.error(err);
            res.send(err);
        }
        res.status(201).json(pacote);
    });
}

exports.atualizar = (req, res) => {
    let id = req.params.id;
    let pacoteAtualizar = req.body;
    Pacote.findOneAndUpdate({ _id: id}, pacoteAtualizar, { new: true}, (err, pacoteAtual) => {
        if(err){
            console.error(err);
            res.send(err);
        }
        res.json(pacoteAtual);
    });
}

exports.deletar = (req, res) => {
    let id = req.params.id;
    Pacote.findOneAndDelete({ _id: id }, (err, pacoteAtual) => {
        if(err){
            console.error(err);
            res.send(err);
        }
        res.json(pacoteAtual);
    });
}

exports.buscarPorId = (req, res) => {
    let id = req.params.id;
    Pacote.findById(id, (err, pacote) => {
        if(err){
            console.error(err);
            res.send(err);
        }
        res.json(pacote);
    });
}

exports.procurar = (req, res) => {
    if(req.query && req.query.nome){
        const paramNome = req.query.nome;
        Pacote.find({nome: paramNome}, (err, pacotes) => {
            if(err){
                console.error(err);
                res.status(500).send(err);
            }   
            res.json(pacotes);
        });
    }
}