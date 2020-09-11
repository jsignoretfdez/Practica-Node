const express = require('express');
const multer = require('multer');

const router = express.Router();
const Anuncio = require('../../models/Anuncio');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './public/images/anuncios');
  },
  filename(req, file, cb) {
    const myFilename = `${Date.now()}_${file.originalname}`;
    cb(null, myFilename);
  },
});

const upload = multer({ storage });

/* Post  */
router.post('/crear-anuncio', (req, res, next) => {
  res.render('crear');
});

/* POST to upload new anuncio */
router.post('/upload', upload.single('foto'), async (req, res, next) => {
  try {
    const {
      nombre, precio, tags,
    } = req.body;
    let venta = req.body;
    const foto = req.file.filename;
    /* Compruebo el select y determino si es verdadero o falso */

    if (venta === 'venta') {
      venta = true;
    } else {
      venta = false;
    }

    // Creamos el documento en memoria
    const anuncio = new Anuncio({
      nombre, precio, venta, tags, foto,
    });

    // Lo guardamos en BD
    await anuncio.save();

    res.redirect('/api/anuncios');
  } catch (err) {
    next(err);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const { nombre, sort } = req.query;
    const limit = parseInt(req.query.limit || 10);
    const skip = parseInt(req.query.skip);
    const filtro = {};
    if (nombre) {
      filtro.nombre = nombre;
    }

    const anuncios = await Anuncio.list(filtro, limit, skip, sort);
    res.render('anuncios', { anuncios });
  } catch (e) {
    next(e);
  }
});

router.delete('/:_id', async (req, res, next) => {
  try {
    const { _id } = req.params;

    await Anuncio.deleteOne({
      _id,
    });

    res.json({
      status: 'Ok',
      resultado: 'Anuncio Borrado Correctamente',
      id: _id,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
