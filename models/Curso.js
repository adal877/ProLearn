const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cursoSchema = new mongoose.Schema({
  codigo: {
    type: String,
    required: true,
    unique: true
  },
  curso: {
    type: String,
    required: true
  },
  ementa: {
    type: String,
    required: true
  }
});

const Curso = mongoose.model('curso', cursoSchema);

module.exports = Curso;
