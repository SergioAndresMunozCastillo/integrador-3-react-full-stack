const obtenerProductos = (req, res) => {
    res.send('GET ALL / ONE (READ')
}
const guardarProducto = async (req, res) => {
    try {
        const producto = req.body
        console.log(producto)

        const productoGuardado = await models.guardarProducto(producto)
        res.status(201).json(productoGuardado)
    } catch (error) {
        return res.status(500).send('Error al guardar el producto')
    }
}
const actualizarProducto = (req, res) =>{
    res.send('PUT (UPDATE')
}
const borrarProducto = (req, res) =>{
    const { id } = req.params
    try {
        const productoBorrado = models.borrarProducto(id)
        res.status(200).json(productoBorrado)
    } catch (error) {
        res.status(500).send(`No se pudo borrar el producto`)
    }
    res.send('DELETE (DELETE)')
}

export default {
    obtenerProductos,
    guardarProducto,
    actualizarProducto,
    borrarProducto,
}