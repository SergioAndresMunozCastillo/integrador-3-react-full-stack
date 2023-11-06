import mongoose from "mongoose";

const productosSchema = mongoose.Schema({
    nombre: String,
    precio: Number,
    stock: Number,
    marca: String,
    categoria: String,
    detalles: String,
    foto: String,
    envio: Boolean
})

const ProductosModel = mongoose.model('productos', productosSchema)

const leerProducto = async (id) => {
    try {
        const producto = await ProductosModel.findById(id)
        return producto
    } catch (error) {
        console.log(`[leerProducto]: Algo no salió bien... ${error}`)
    }
}

const leerProductos = async () => {
    
    try {
        const productos = await ProductosModel.find({})
        return productos
    } catch (error) {
        console.log(`[leerProductos]: Algo no salió bien... ${error}`)
    }
}

const guardarProducto = async (productoNuevo) =>{
    try {
        console.log(productoNuevo)
        const productoAlmacenado = new ProductosModel(productoNuevo)
        await productoAlmacenado.save()
        return productoAlmacenado
    } catch (error) {
        console.log('Error al guardar el producto')
    }
}

const modificarProducto = async (id, productoAEditar) => {
    try {
        const productoModificado = await ProductosModel.findByIdAndUpdate(id, productoAEditar)
        return productoModificado
    } catch (error) {
        console.log('[Actualizar producto] algo no salió bien', error)
    }
}

const eliminarProducto = async (id) =>{
    try {
        const productoBorrado = await ProductosModel.findByIdAndDelete(id)
        return productoBorrado 
    } catch (error) {
        console.log(`ERROR al eliminar el producto en la base de datos ${error}`)
    }
}

export default {
    leerProducto,
    leerProductos,
    guardarProducto,
    modificarProducto,
    eliminarProducto,
}