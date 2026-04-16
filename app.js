const express = require('express');
const app = express();
const port = 3030;

const usuarioController = require('./controllers/usuarioController');
const filmeController = require('./controllers/filmeController');

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

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});