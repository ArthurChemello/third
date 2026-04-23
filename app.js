const express = require('express');
const app = express();
const port = 3030;

const usuarioController = require('./controllers/usuariocontroller');
const filmeController = require('./controllers/filmecontroller');

app.use(express.json());

app.post('/usuarios', usuarioController.criar);
app.get('/usuarios', usuarioController.listartodos);
app.get('/usuarios/:id', usuarioController.buscarPorId);
app.put('/usuarios/:id', usuarioController.atualizar);
app.delete('/usuarios/:id', usuarioController.deletar);
app.post('/login', usuarioController.login);

app.post('/filmes', filmeController.criar);
app.get('/filmes', filmeController.listarTodos);
app.get('/filmes/:id', filmeController.buscarPorId);
app.put('/filmes/:id', filmeController.atualizar);
app.delete('/filmes/:id', filmeController.deletar);

app.get('/', (req, res) => {
  res.json({ mensagem: 'API funcionando!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});