const express = require('express');
const router = express.Router();
const Curso = require('../../models/Curso');

// Rota para listar todos os cursos (API)
router.get('/cursos', async (req, res) => {
  try {
    const cursos = await Curso.find();
    res.json(cursos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Rota para criar um novo curso (API)
router.post('/curso', async (req, res) => {
  const { codigo, curso, ementa } = req.body;
  const novoCurso = new Curso({ codigo, curso, ementa });

  try {
    const savedCurso = await novoCurso.save();
    res.status(201).json({ status: 'Curso criado com sucesso', curso: savedCurso });
  } catch (err) {
    res.status(400).json({ status: 'Erro ao criar curso', error: err.message });
  }
});

// Rota para exibir um curso específico (API)
router.get('/curso/:id', async (req, res) => {
  try {
    const curso = await Curso.findById(req.params.id);
    if (!curso) return res.status(404).json({ status: 'Curso não encontrado' });
    res.json(curso);
  } catch (err) {
    res.status(500).json({ status: 'Erro ao buscar curso', error: err.message });
  }
});

// Rota para atualizar um curso específico (API) usando PUT
router.put('/curso/:id', async (req, res) => {
  const { codigo, curso, ementa } = req.body;
  try {
    const updatedCurso = await Curso.findByIdAndUpdate(req.params.id, { codigo, curso, ementa }, { new: true });
    if (!updatedCurso) return res.status(404).json({ status: 'Curso não encontrado' });
    res.json({ status: 'Curso atualizado com sucesso', curso: updatedCurso });
  } catch (err) {
    res.status(400).json({ status: 'Erro ao atualizar curso', error: err.message });
  }
});

// Rota para atualizar um curso específico (API) usando PATCH
router.patch('/curso/:id', async (req, res) => {
  const updates = req.body;
  try {
    const updatedCurso = await Curso.findByIdAndUpdate(req.params.id, updates, { new: true });
    if (!updatedCurso) return res.status(404).json({ status: 'Curso não encontrado' });
    res.json({ status: 'Curso atualizado com sucesso', curso: updatedCurso });
  } catch (err) {
    res.status(400).json({ status: 'Erro ao atualizar curso', error: err.message });
  }
});

// Rota para deletar um curso específico (API)
router.delete('/curso/:id', async (req, res) => {
  try {
    const deletedCurso = await Curso.findByIdAndRemove(req.params.id);
    if (!deletedCurso) return res.status(404).json({ status: 'Curso não encontrado' });
    res.json({ status: 'Curso deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ status: 'Erro ao deletar curso', error: err.message });
  }
});

module.exports = router;

