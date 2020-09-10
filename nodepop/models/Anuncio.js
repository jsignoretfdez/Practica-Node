/* eslint-disable no-use-before-define */
const mongoose = require('mongoose');
// Creamos el esquema

const anuncioSchema = mongoose.Schema({
  nombre: { type: String, index: true },
  venta: { type: Boolean, index: true },
  precio: { type: Number, index: true },
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
