/* eslint-disable no-use-before-define */
const mongoose = require('mongoose');
// Creamos el esquema

const anuncioSchema = mongoose.Schema({
  nombre: 'String',
  venta: 'Boolean',
  precio: 'Number',
  foto: 'String',
  tags: ['String'],
});

anuncioSchema.statics.list = function () {
  const query = Anuncio.find();
  return query.exec();
};

// Crear Modelo
const Anuncio = mongoose.model('Anuncio', anuncioSchema);

module.exports = Anuncio;
