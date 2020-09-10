'use strict';

const express = require('express');

const router = express.Router();
const Anuncio = require('../../models/Anuncio');

/* Post  */
router.post('/crear-anuncio', (req, res, next) => {
  res.render('crear');
});

/* POST to upload new anuncio */
router.post('/upload', async (req, res, next) => {
  try {
    const {
      nombre, precio, tags, foto,
    } = req.body;
    let venta = req.body;
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
