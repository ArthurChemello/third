const reviewmodel = require('../models/reviewmodel');
const filmemodel = require('../models/filmemodel');

function criar(filmeId, nota, comentario, usuarioId) {
  const filme = filmemodel.buscarPorId(Number(filmeId));
  if (!filme){
    return null;
  } 
  const review = {id: reviewmodel.gerarId(), filmeId, nota, comentario, usuarioId};
  reviewmodel.salvar(review);
  return review;
}

function listarTodos() {
  return reviewmodel.buscarTodos();
}

function buscarPorId(id) {
  return reviewmodel.buscarPorId(id);
}

function atualizar(id, dados) {
  const index = reviewmodel.buscarIndex(id);
  if (index === -1) return null;
  return reviewmodel.atualizar(index, dados);
}

function deletar(id) {
  const index = reviewmodel.buscarIndex(id);
  if (index === -1) return false;
  reviewmodel.deletar(index);
  return true;
}

module.exports = { criar, listarTodos, buscarPorId, atualizar, deletar };