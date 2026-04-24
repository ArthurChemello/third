const service = require('../services/reviewservice');

function criar(req, res) {
    const {filmeId, nota, comentario} = req.body;
    const usuarioId = req.user.id;
    const review = service.criar(filmeId, nota, comentario, usuarioId);
    if (!review){
        return res.status(404).json({ erro: 'Filme não encontrado' });
    }
    res.status(201).json(review);
}

function listarTodos(req, res) {
    res.json(service.listarTodos());
}

function buscarPorId(req, res) {
    const review = service.buscarPorId(Number(req.params.id));
    if (!review){
        return res.status(404).json({erro: 'Review não encontrado'});
    } 
    res.json(review);
}

function atualizar(req, res) {
    const atualizado = service.atualizar(Number(req.params.id), req.body);
    if (!atualizado){
        return res.status(404).json({erro: 'Review não encontrado'});
    } 
    res.json(atualizado);
}

function deletar(req, res) {
    const ok = service.deletar(Number(req.params.id));
    if (!ok){
        return res.status(404).json({erro: 'Review não encontrado'});
    } 
    res.status(204).send();
}

module.exports = { criar, listarTodos, buscarPorId, atualizar, deletar };