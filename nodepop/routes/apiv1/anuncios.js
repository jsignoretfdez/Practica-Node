'use strict';

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

const upload = multer({ storage: storage });

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

    res.redirect('/');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
