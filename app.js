require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.json());

app.use('/usuarios', require('./routes/usuarioRoutes'));
app.use('/filmes',   require('./routes/filmeRoutes'));
app.use('/reviews',  require('./routes/reviewRoutes'));

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${port}`);
});