import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import mongoose, { connect } from 'mongoose'

import routerProductos from './routers/productos.router.js'
import routerUpload from './routers/upload.router.js'
import routerCarrito from './routers/carrito.router.js'
import handleConnection from './utils/handleConnection.js'

const app = express()
const PORT = process.env.PORT || 3000

const corsConfig = {
    origin: 'http://localhost:2222'
}

handleConnection(process.env.URI_MLOCAL);

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors(corsConfig))
// ENRUTAMIENTO POR DEFECTO
app.use('/api/productos', routerProductos)
app.use('/api/upload', routerUpload)
app.use('/app/carrito', routerCarrito)

app.all('*', (req, res) =>{
    res.status(404).send(`La ruta ${req.url} utilizando el ${req.method} no está disponible`)
})

app.get('/', (req, res) => {
  res.send('Hola world!')
})

app.listen(PORT, () => {
  console.log(`Aplicación corriendo en el puertos ${PORT}`)
})