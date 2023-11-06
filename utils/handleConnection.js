import mongoose from "mongoose"

const handleConnection = async (uri) => {
    try {
      await mongoose.connect(uri)
      console.log("Conexión a mongo existosa.")
    } catch (error) {
      console.log("Error al conectar a mongo.")
    }
  }

  export default handleConnection