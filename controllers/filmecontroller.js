const service = require('../services/filmeService');

function criar(req, res) {
  const {titulo, ano, genero, usuarioId} = req.body;
  const filme = service.criar(titulo, ano, genero, Number(usuarioId));
  if (!filme) return res.status(404).json({erro: 'Usuário não encontrado'});
  res.status(201).json(filme);
}

function listarTodos(req, res) {
  res.json(service.listarTodos());
}

function buscarPorId(req, res) {
  const filme = service.buscarPorId(Number(req.params.id));
  if (!filme) return res.status(404).json({erro: 'Filme não encontrado'});
  res.json(filme);
}

function atualizar(req, res) {
  const atualizado = service.atualizar(Number(req.params.id), req.body);
  if (!atualizado) return res.status(404).json({erro: 'Filme não encontrado'});
  res.json(atualizado);
}

function deletar(req, res) {
  const ok = service.deletar(Number(req.params.id));
  if (!ok) return res.status(404).json({erro: 'Filme não encontrado'});
  res.status(204).send();
}

module.exports = { criar, listarTodos, buscarPorId, atualizar, deletar };