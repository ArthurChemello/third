const filmeModel = require('../models/filmeModel');
const usuarioModel = require('../models/usuarioModel');

function criar(titulo, ano, genero, usuarioId) {
  const usuario = usuarioModel.buscarPorId(usuarioId);
  if (!usuario) return null;
  const filme = {id: filmeModel.gerarId(), titulo, ano, genero, usuarioId};
  filmeModel.salvar(filme);
  return filme;
}

function listarTodos() {
  return filmeModel.buscarTodos();
}

function buscarPorId(id) {
  return filmeModel.buscarPorId(id);
}

function atualizar(id, dados) {
  const index = filmeModel.buscarIndex(id);
  if (index === -1) return null;
  return filmeModel.atualizar(index, dados);
}

function deletar(id) {
  const index = filmeModel.buscarIndex(id);
  if (index === -1) return false;
  filmeModel.deletar(index);
  return true;
}

module.exports = { criar, listarTodos, buscarPorId, atualizar, deletar };