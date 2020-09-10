var express = require('express');
var router = express.Router();
const Anuncio = require('../models/Anuncio')

/* GET home page. */
router.get('/', async function(req, res, next) {

  try {
    const anuncios = await Anuncio.list()
    res.render('index', { anuncios });
  }catch (e){
    next(e);
  }


});

module.exports = router;
