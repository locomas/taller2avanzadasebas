import { modelohab } from '../Models/modelohabitacion.js'
import { modeloreserva } from '../Models/modeloreserva.js'
import {Servicioreserva}  from './services/servicioreserva.js'
import { Serviciohabitacion } from './services/serviciohab.js'
export class ControladorReserva{
     
    constructor(){}

        async buscarreserva(request,response){
            let objetoServicioReserva = new Servicioreserva()
          response.status(200).json({
            "mensaje":"EXITO EN LA CONSULTA",
            "datos":await objetoServicioReserva.buscarreserva(),
            
          })
         // response.status(400).json()
        }
        async buscarreservaporid(request,response){
            
            let datosevniadosenurl = request.params.id
            let objetoServicioReserva = new Servicioreserva()
            console.log("el id es :"+ datosevniadosenurl)
            try {
                response.status(200).json({
                    "mensaje":"exito en la consulta",
                    "datos":await objetoServicioReserva.buscarreservaporid(datosevniadosenurl)
                })
            } catch (error) {
                response.status(400).json({
                    "mensaje":"exito en la consulta"+ error,
                    "datos":null,
                
            })
        }
    }

        async registrarReserva(request,response){
            let datosreserva = request.body
            let datoshab = new Serviciohabitacion()
            let objetoServicioReserva = new Servicioreserva()
            let habitacion = await datoshab.buscarhabitacionporid(datosreserva.idhabitacion)
            let diaentrada = new Date(datosreserva.fechaentrada)
            let diasalida = new Date(datosreserva.fechasalida)
            let numerodias = diasalida.getDate()- diaentrada.getDate()
            let costoreserva = numerodias * habitacion.valornoche
            
            console.log(numerodias)
            console.log(costoreserva)

        
        
            let valornoche = habitacion.valornoche
            let maxper = habitacion.numeroMaximoPer
            let totalpersonas = await (datosreserva.numeroadultos) + (datosreserva.numeroninos)
        
            

            if (await datoshab.buscarhabitacionporid(datosreserva.idhabitacion)){
                if(totalpersonas < habitacion.numeroMaximoPer){
                    
                    
                    response.status(200).json({
                        "mensaje":"exito en la consulta"  ,
                        "datos":await objetoServicioReserva.agregarreserva(datosreserva),
                        "tu reserva por ": numerodias + "  dias esta confirmada",
                        "el costo de la reserva es ": costoreserva 
                    })
                }
                    
                else{
                     
                    response.status(400).json({
                            "mensaje":"No se Puede agregar toda esa gente"  ,
                            "datos": datosreserva.idhabitacion
                    })
            }    

           }


            else{
                    response.status(400).json({
                        "mensaje":"error por"+ error,
                        "datos":null,
                })
            }
        }


                
                    

       async editarHabitacion(request,response){
        let id = request.params.id
        let datoshabitacion = request.body
        let objetoServicioHabitacion = new Serviciohabitacion()
        try {
            await objetoServicioHabitacion.editarhabitacion(id,datoshabitacion)
            response.status(200).json({
                "mensaje":"exito en la consulta" + id,
                "datos":null
            })
        } catch (error) {
            response.status(400).json({
                "mensaje":"exito en la consulta"+ error,
                "datos":datoshabitacion,
            })
        }
    }
}    
