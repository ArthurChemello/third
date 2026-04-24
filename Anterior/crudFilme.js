let filmes = [];
let nextIdFilme = 1;

async function criarFilme(titulo, ano, genero, usuarioId){
    const filme = {id: nextIdFilme++, titulo, ano, genero, usuarioId};
    filmes.push(filme);
    return filme;
}

function listartodos(){
    return filmes;
}

function buscarPorId(id) {
  return usuarios.find(f=> f.id === id);
}
    
function atualizarfilme(id, dados){
    const index = filmes.findIndex(f => f.id === id);
      if (index === -1) {
        return null;
      }
      filmes.splice(index, 1);
      return true;
}

module.exports = { criarFilme, listarFilmes, buscarFilmePorId, atualizarFilme, deletarFilme };