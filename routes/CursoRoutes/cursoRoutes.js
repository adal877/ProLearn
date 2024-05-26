const express = require('express');
const router = express.Router();

const url = 'http://localhost:3000/api/v1/cursos';
const urlConsulta = 'http://localhost:3000/api/v1/curso';



// Rota para listar todos os cursos (Frontend)
router.get('/', async (req, res) => {
  try {
    const cursos = await fetch(url).then(res => res.json());
    res.render('index', { cursos });
  } catch (err) {
    res.status(500).send(err);
  }
});

// Rota para exibir o formulário de criação de curso (Frontend)
router.get('/new', (req, res) => {
  res.render('new');
});

// Rota para exibir um curso específico (Frontend)
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const curso = await fetch(`${urlConsulta}/${id}`).then(res => res.json());
    res.render('show', { curso });
  } catch (err) {
    res.status(500).send(err);
  }
});

// Rota para exibir o formulário de edição de curso (Frontend)
router.get('/:id/edit', async (req, res) => {
  try {
    //faz a requisição para o endpoint da API
    const curso = await fetch(`${urlConsulta}/${req.params.id}`).then(res => res.json());
    res.render('edit', { curso });
  } catch (err) {
    res.status(500).send(err);
  }
});


module.exports = router;
