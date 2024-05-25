const express = require('express');
const router = express.Router();
const Curso = require('../../models/Curso');

// Rota para listar todos os cursos (Frontend)
router.get('/', async (req, res) => {
  try {
    const cursos = await Curso.find();
    res.render('index', { cursos });
  } catch (err) {
    res.status(500).send(err);
  }
});

// Rota para exibir o formulário de criação de curso (Frontend)
router.get('/new', (req, res) => {
  res.render('new');
});

// Rota para criar um novo curso (Frontend)
router.post('/', async (req, res) => {
  const { codigo, curso, ementa } = req.body;
  const novoCurso = new Curso({ codigo, curso, ementa });

  try {
    await novoCurso.save();
    res.redirect('/cursos');
  } catch (err) {
    res.status(500).send(err);
  }
});

// Rota para exibir um curso específico (Frontend)
router.get('/:id', async (req, res) => {
  try {
    const curso = await Curso.findById(req.params.id);
    res.render('show', { curso });
  } catch (err) {
    res.status(500).send(err);
  }
});

// Rota para exibir o formulário de edição de curso (Frontend)
router.get('/:id/edit', async (req, res) => {
  try {
    const curso = await Curso.findById(req.params.id);
    res.render('edit', { curso });
  } catch (err) {
    res.status(500).send(err);
  }
});

// Rota para atualizar um curso específico (Frontend)
router.put('/:id', async (req, res) => {
  const { codigo, curso, ementa } = req.body;
  try {
    await Curso.findByIdAndUpdate(req.params.id, { codigo, curso, ementa });
    res.redirect(`/${req.params.id}`);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Rota para deletar um curso específico (Frontend)
router.delete('/:id', async (req, res) => {
  try {
    await Curso.findByIdAndRemove(req.params.id);
    res.redirect('/cursos');
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
