const express = require('express');
const app = express();
const port = 3030;

const { criar, listartodos, buscarPorId, atualizar, deletar, login } = require('./crud');

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

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});