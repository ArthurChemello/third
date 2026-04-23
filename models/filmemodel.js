let filmes = [];
let nextId = 1;

function salvar(filme) {
  filmes.push(filme);
}

function buscarTodos() {
  return filmes;
}

function buscarPorId(id) {
  return filmes.find(f => f.id === id);
}

function atualizar(index, dados) {
  filmes[index] = {...filmes[index], ...dados};
  return filmes[index];
}

function buscarIndex(id) {
  return filmes.findIndex(f => f.id === id);
}

function deletar(index) {
  filmes.splice(index, 1);
}

function gerarId() {
  return nextId++;
}

module.exports = { salvar, buscarTodos, buscarPorId, atualizar, buscarIndex, deletar, gerarId };