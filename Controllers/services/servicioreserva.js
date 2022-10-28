

import { modeloreserva } from '../../Models/modeloreserva.js'



export class Servicioreserva{

    //qui programato metodos para acada una de las consultas 
    //que quiero hacer en bd 

    async buscarreserva(){
        let reservas = await modeloreserva.find()
        return reservas
    }
    async buscarreservasporid(id){
        let reserva = await modeloreserva.findById(id)
        return reserva 
    }
    async agregarreserva (datos){
        let datosValidados = new modeloreserva(datos)
        return await datosValidados.save()
    }
    async editarreserva(id,datos){
        return await modeloreserva.findByIdAndUpdate(id,datos)
    }
}
