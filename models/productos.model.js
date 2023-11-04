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

const leerProducto = (id) => {
    try {
        
    } catch (error) {
        
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

const modificarProducto = (id, productoAEditar) => {

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