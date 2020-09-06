const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/josepop',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
const db = mongoose.connection;

db.on('error', (err) => {
  console.log('No se ha podido conectar', err);
});

db.once('open', () => {
  console.log('Conexión exitosa');
});

module.exports = mongoose.connection;
