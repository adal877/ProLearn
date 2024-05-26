const express = require('express');
const router = express.Router();
const Curso = require('../../models/Curso');

// Rota para listar todos os cursos (API)
router.get('/cursos', async (req, res) => {
  try {
    const cursos = await Curso.find().select('curso ementa codigo');

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
    await novoCurso.save();
    console.log("Curso criado com sucesso")
    res.status(201).json({ status: 'Curso criado com sucesso'});
  } catch (err) {
    console.log(err)
    res.status(400).json({ status: 'Erro ao criar curso', error: err.message });
  }
});

// Rota para exibir um curso específico (API)
router.get('/curso/:id', async (req, res) => {
  try {
    const curso = await Curso.findById(req.params.id).select('curso ementa codigo');
    res.status(302).json(curso);
  } catch (err) {
    res.status(500).json({ status: 'Erro ao buscar curso', error: err.message });
  }
});

// Rota para atualizar um curso específico (API) usando PATCH
router.patch('/curso/:id', async (req, res) => {
  const updates = req.body;
  try {
    await Curso.findByIdAndUpdate(req.params.id, updates, { new: true });
    res.status(200).json({status: 'Atualizado com sucesso'});
  } catch (err) {
    res.status(400).json({ status: 'Erro ao atualizar curso', error: err.message });
  }
});

// Rota para deletar um curso específico (API)
router.delete('/curso/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCurso = await Curso.findByIdAndDelete(id);
    if (!deletedCurso) return res.status(404).json({ status: 'Curso não encontrado' });
    res.json({ status: 'Curso deletado com sucesso' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: 'Erro ao deletar curso', error: err.message });
  }
});

module.exports = router;

