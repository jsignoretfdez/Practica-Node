/* eslint-disable no-use-before-define */
const mongoose = require('mongoose');
// Creamos el esquema

const anuncioSchema = mongoose.Schema({
  nombre: { type: String, index: true },
  venta: { type: Boolean, index: true },
  precio: { type: Number, index: true },
  foto: { type: String },
  tags: { type: [String], index: true },
});

anuncioSchema.statics.list = function (filtro, limit, skip, sort) {
  const query = Anuncio.find(filtro);
  query.limit(limit);
  query.skip(skip);
  query.sort(sort);

  return query.exec();
};

// Crear Modelo
const Anuncio = mongoose.model('Anuncio', anuncioSchema);

module.exports = Anuncio;
