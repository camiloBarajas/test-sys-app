const express = require('express')
const router = express.Router()
const facturaController =   require('../controllers/factura.controller');
// todas las facturas
router.get('/', facturaController.findAll);
// nueva factura
router.post('/', facturaController.create);
// consultar factura por id
router.get('/:id', facturaController.findById);
// actualizar factura por id
router.put('/:id', facturaController.update);
// eliminar factura por id
router.delete('/:id', facturaController.delete);
module.exports = router