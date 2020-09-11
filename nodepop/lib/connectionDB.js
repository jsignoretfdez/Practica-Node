/* eslint-disable lines-around-directive,strict */
'use strict';
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/josepop',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
const db = mongoose.connection;

db.on('open', () => {
  console.log('Conexión exitosa a la base de datos', mongoose.connection.name);
});

db.on('error', (err) => {
  console.log(`No se ha podido conectar${err}`);
  process.exit(1);
});

module.exports = mongoose.connection;
