import {Serviciohabitacion}  from './services/serviciohab.js'
export class ControladorHabitacion{
     
    constructor(){}

        async buscarHabitaciones(request,response){
            let objetoServicioHabitacion = new Serviciohabitacion()
          response.status(200).json({
            "mensaje":"EXITO EN LA CONSULTA",
            "datos":await objetoServicioHabitacion.buscarhabitaciones(),
            
          })
         // response.status(400).json()
        }
        async buscarHabitacionporId(request,response){
            
            let datosevniadosenurl = request.params.id
            let objetoServicioHabitacion = new Serviciohabitacion()
            console.log("el id es :"+ datosevniadosenurl)
            try {
                response.status(200).json({
                    "mensaje":"exito en la consulta",
                    "datos":await objetoServicioHabitacion.buscarhabitacionporid(datosevniadosenurl)
                })
            } catch (error) {
                response.status(400).json({
                    "mensaje":"exito en la consulta"+ error,
                    "datos":null,
                
            })
        }
    }

        async registrarHabitacion(request,response){
            let datoshabitacion = request.body
            let objetoServicioHabitacion = new Serviciohabitacion()

            
                try {
                    await objetoServicioHabitacion.agregarhabitacion(datoshabitacion)
                    response.status(200).json({
                        "mensaje":"exito en la consulta",
                        "datos":null
                    })
                } catch (error) {
                    response.status(400).json({
                        "mensaje":"error por"+ error,
                        "datos":null,
                    
                }

            )
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
            
         }
       )
      }
    }
}
   