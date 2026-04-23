const Filmemodel = require('../models/usuariomodel');
const usuariomodel = require('../models/usuariomodel');

function criar(titulo, ano, genero, usuarioId) {
  const usuario = usuariomodel.buscarPorId(usuarioId);
  if (!usuario) return null;
  const filme = {id: Filmemodel.gerarId(), titulo, ano, genero, usuarioId};
  Filmemodel.salvar(filme);
  return filme;
}

function listarTodos() {
  return Filmemodel.buscarTodos();
}

function buscarPorId(id) {
  return Filmemodel.buscarPorId(id);
}

function atualizar(id, dados) {
  const index = Filmemodel.buscarIndex(id);
  if (index === -1) return null;
  return Filmemodel.atualizar(index, dados);
}

function deletar(id) {
  const index = Filmemodel.buscarIndex(id);
  if (index === -1) return false;
  Filmemodel.deletar(index);
  return true;
}

module.exports = { criar, listarTodos, buscarPorId, atualizar, deletar };