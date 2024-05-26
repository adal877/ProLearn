const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const path = require('path');
require('dotenv').config();

const app = express();

const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, { useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rotas - API
app.use('/api/v1', require('./routes/CursoRoutes/cursoApiRoutes'));

// Rotas - Frontend
app.use('/cursos', require('./routes/CursoRoutes/cursoRoutes'));

app.use('/' , (req, res) => {
    res.redirect('/cursos');
    });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
