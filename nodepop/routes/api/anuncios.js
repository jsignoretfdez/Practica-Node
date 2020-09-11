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
    const {
      nombre, sort, tags, precio, venta,
    } = req.query;
    const limit = parseInt(req.query.limit || 10);
    const skip = parseInt(req.query.skip);
    const filtro = {};
    if (nombre !== undefined) {
      filtro.nombre = new RegExp(`^${
        nombre}`, 'i');
    }

    // Filtro Rango de precios
    if (precio !== undefined) {
      const precioSave = precio.split('-').map(parseFloat);
      if (precioSave.length >= 1) {
        console.log(precioSave[0], precioSave[1]);
        filtro.precio = precio;
        if (precioSave[0] && !precioSave[1]) {
          console.log('Hola');
          filtro.precio = { $gte: precioSave[0] };
        } if (!precioSave[0] && precioSave[1]) {
          filtro.precio = { $lte: precioSave[1] };
        } if (precioSave[0] && precioSave[1]) {
          filtro.precio = { $gte: precioSave[0], $lte: precioSave[1] };
        }
      }
    }
    // Filtro Tags
    if (typeof tags !== 'undefined') {
      // Convert tags string into array
      filtro.tags = { $in: tags.split(' ') };
    }
    // Filtro Venta
    if (venta !== undefined) {
      filtro.venta = venta;
    }
    // Listado de anuncios
    const anuncios = await Anuncio.list(filtro, limit, skip, sort, tags);
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