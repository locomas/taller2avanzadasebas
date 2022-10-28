import mongoose from 'mongoose';

export async function conectarConMongo(){
    try {
    
        await mongoose.connect(process.env.DATABASE);
        console.log("EXITO CONEXION")
        
    } catch (error) {
        console.log("error")
    }
}