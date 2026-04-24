const express = require('express');
const app = express();
const port = 3030;

app.use(express.json());

app.use('/usuarios', require('./routes/usuarioRoutes'));
app.use('/filmes',   require('./routes/filmeRoutes'));
app.use('/reviews',  require('./routes/reviewRoutes'));

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});