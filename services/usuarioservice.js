const bcrypt = require('bcrypt');
const model = require('../models/usuariomodel');

async function criar(nome, email, senha) {
  const hash = await bcrypt.hash(senha, 10);
  const usuario = {id: model.gerarId(), nome, email, senha: hash};
  model.salvar(usuario);
  return {id: usuario.id, nome, email};
}

function listartodos() {
  return model.buscarTodos().map(({senha, ...resto}) => resto);
}

function buscarPorId(id) {
  return model.buscarPorId(id);
}

async function atualizar(id, dados) {
  const index = model.buscarIndex(id);
  if (index === -1) return null;
  if (dados.senha) {
    dados.senha = await bcrypt.hash(dados.senha, 10);
  }
  const atualizado = model.atualizar(index, dados);
  const {senha, ...semSenha} = atualizado;
  return semSenha;
}

function deletar(id) {
  const index = model.buscarIndex(id);
  if (index === -1) return false;
  model.deletar(index);
  return true;
}

async function login(email, senha) {
  const usuario = model.buscarPorEmail(email);
  if (!usuario) return null;
  const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
  if (!senhaCorreta) return null;
  const {senha: _, ...semSenha} = usuario;
  return semSenha;
}

module.exports = { criar, listartodos, buscarPorId, atualizar, deletar, login };