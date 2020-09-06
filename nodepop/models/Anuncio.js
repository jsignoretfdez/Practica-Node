const mongoose = require('mongoose');

// Creamos el esquema

const anuncioSchema = mongoose.Schema({
  nombre: 'String',
  venta: 'Boolean',
  precio: 'Number',
  fotos: 'String',
  tags: ['String'],
});

// Crear Modelo
const Anuncio = mongoose.model('Anuncio', anuncioSchema);

module.exports = Anuncio;
