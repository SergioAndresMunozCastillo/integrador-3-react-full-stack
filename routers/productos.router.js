import express from 'express'
import controller from '../controllers/productos.controller.js'

const routerProductos = express.Router();

routerProductos.get('/:id?', controller.obtenerProductos)

routerProductos.post('/', controller.guardarProducto)

routerProductos.put('/:id', controller.actualizarProducto)

routerProductos.put('/:id', controller.borrarProducto)

export default routerProductos