
const uploadImagen = (req, res, next) => {
    const file = req.file
    if(!file){
        const error = new Error('Error subiendo el archivo')
        res.status(400).send('No se recibió ninguna imagen')
    }

    res.status(200).json({foto: file.filename})

}

export default {
    uploadImagen
}