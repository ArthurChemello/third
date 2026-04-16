const express = require('express');
const app = express();
const port = 3030;

const { criar, listartodos, buscarPorId, atualizar, deletar, login } = require('./crudusuario');
const { criarFilme, listarFilmes, buscarFilmePorId, atualizarFilme, deletarFilme } = require('./crudfilme');

app.use(express.json());

app.post('/usuarios', async (req, res) => {
  const {nome, email, senha} = req.body;
  const novo = await criar(nome, email, senha);
  res.status(201).json(novo);
});

app.get('/usuarios', (req, res) => {
  res.json(listartodos());
});

app.get('/usuarios/:id', (req, res) => {
  const usuario = buscarPorId(Number(req.params.id));
  if (!usuario) return res.status(404).json({erro: 'Não encontrado'});
  const {senha, ...semSenha} = usuario;
  res.json(semSenha);
});

app.put('/usuarios/:id', async (req, res) => {
  const atualizado = await atualizar(Number(req.params.id), req.body);
  if (!atualizado) return res.status(404).json({erro: 'Não encontrado'});
  res.json(atualizado);
});

app.delete('/usuarios/:id', (req, res) => {
  const ok = deletar(Number(req.params.id));
  if (!ok) return res.status(404).json({erro: 'Não encontrado'});
  res.status(204).send();
});

app.post('/login', async (req, res) => {
  const {email, senha} = req.body;
  const usuario = await login(email, senha);
  if (!usuario) return res.status(401).json({erro: 'Credenciais inválidas'});
  res.json(usuario);
});

// Rotas de filme
app.post('/filmes', (req, res) => {
  const {titulo, ano, genero, usuarioId} = req.body;
  const usuario = buscarPorId(Number(usuarioId));
  if (!usuario) return res.status(404).json({erro: 'Usuário não encontrado'});
  const filme = criarFilme(titulo, ano, genero, Number(usuarioId));
  res.status(201).json(filme);
});

app.get('/filmes', (req, res) => {
  res.json(listarFilmes());
});

app.get('/filmes/:id', (req, res) => {
  const filme = buscarFilmePorId(Number(req.params.id));
  if (!filme) return res.status(404).json({erro: 'Filme não encontrado'});
  res.json(filme);
});

app.put('/filmes/:id', (req, res) => {
  const atualizado = atualizarFilme(Number(req.params.id), req.body);
  if (!atualizado) return res.status(404).json({erro: 'Filme não encontrado'});
  res.json(atualizado);
});

app.delete('/filmes/:id', (req, res) => {
  const ok = deletarFilme(Number(req.params.id));
  if (!ok) return res.status(404).json({erro: 'Filme não encontrado'});
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});