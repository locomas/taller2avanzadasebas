
import {modelohab} from '../../Models/modelohabitacion.js'



export class Serviciohabitacion{

    //qui programato metodos para acada una de las consultas 
    //que quiero hacer en bd 

    async buscarhabitaciones(){
        let habitaciones = await modelohab.find()
        return habitaciones
    }
    async buscarhabitacionporid(id){
        let habitacion = await modelohab.findById(id)
        return habitacion 
    }
    async agregarhabitacion (datos){
        let datosValidados = new modelohab(datos)
        return await datosValidados.save()
    }
    async editarhabitacion(id,datos){
        return await modelohab.findByIdAndUpdate(id,datos)
    }
}
