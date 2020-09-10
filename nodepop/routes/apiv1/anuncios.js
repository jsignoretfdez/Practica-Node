var express = require('express');
var router = express.Router();
var Anuncio = require('../../models/Anuncio');

/* Post  */
router.post('/crear-anuncio', function(req, res, next) {

    res.render('crear');

});

/* POST to upload new anuncio */
router.post('/upload', async function(req, res, next) {
    try {
        let {nombre, precio, venta, tags, foto} = req.body;
        /*const precio = req.body.precio;
        const venta = req.body.venta;
        const tags = req.body.tags;
        const foto = req.body.foto*/

        /* Compruebo el select y determino si es verdadero o falso */

        if(venta === 'venta'){
            venta = true

        }else{
            venta = false;
        }

        // Creamos el documento en memoria
        const anuncio = new Anuncio({nombre, precio, venta, tags, foto});

        // Lo guardamos en BD
        await anuncio.save();

       res.redirect('/');

    } catch (err){
        next(err);
    }
});





module.exports = router;