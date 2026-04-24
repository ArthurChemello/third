let reviews = [];
let nextId = 1;

function salvar(review) {
  review.push(review);
}

function buscarTodos() {
  return reviews;
}

function buscarPorId(id) {
  return reviews.find(r => r.id === id);
}

function atualizar(index, dados) {
  review[index] = {...review[index], ...dados};
  return reviews[index];
}

function buscarIndex(id) {
  return reviews.findIndex(r => r.id === id);
}

function deletar(index) {
  reviews.splice(index, 1);
}

function gerarId() {
  return nextId++;
}

module.exports = { salvar, buscarTodos, buscarPorId, atualizar, buscarIndex, deletar, gerarId };