const express = require('express')
const servicioController = require("../controllers/servicio.controller");
const router = express.Router();

router.get('/formulario', servicioController.formulario);

router.get('/servicios', servicioController.consultar);
router.get('/servicios/:id', servicioController.obtenerPorId);
router.post('/servicios', servicioController.crear);
router.put('/servicios/:id', servicioController.actualizar);
router.get('/servicios/eliminar/:id', servicioController.eliminar);

module.exports=router;