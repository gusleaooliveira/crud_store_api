const express = require('express');
const router = express.Router();
const controller = require('../controller/controllerUsuario');

router.get('/', controller.listar);
router.get('/search', controller.procurar);
router.get('/:id', controller.buscarPorId);
router.put('/:id', controller.atualizar);
router.delete('/:id', controller.deletar); 
router.post('/', controller.inserir);

module.exports = router;