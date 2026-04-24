const bcrypt = require('bcrypt');

let usuarios = [];  
let nextId = 1; 

async function criar(nome, email, senha) {
  const hash = await bcrypt.hash(senha, 10);
  const usuario = {id: nextId++, nome, email, senha: hash};
  usuarios.push(usuario);
  return {id: usuario.id, nome, email};
}

function listartodos() {
  return usuarios.map(({senha, ...resto}) => resto);
}

function buscarPorId(id) {
  return usuarios.find(u => u.id === id);
}

async function atualizar(id, dados) {
  const index = usuarios.findIndex(u => u.id === id);
  if (index === -1) {
    return null;
  }
  if (dados.senha) {
    dados.senha = await bcrypt.hash(dados.senha, 10);
  }
  usuarios[index] = {...usuarios[index], ...dados};
  const {senha, ...semSenha} = usuarios[index];
  return semSenha;
}

function deletar(id) {
  const index = usuarios.findIndex(u => u.id === id);
  if (index === -1) {
    return false;
  }
  usuarios.splice(index, 1);
  return true;
}

async function login(email, senha) {
  const usuario = usuarios.find(u => u.email === email);
  if (!usuario) {
    return null;
  }
  const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
  if (!senhaCorreta) {
    return null;
  }
  const {senha: _, ...semSenha} = usuario;
  return semSenha;
}

module.exports = { criar, listartodos, buscarPorId, atualizar, deletar, login };