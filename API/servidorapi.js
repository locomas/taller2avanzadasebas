import express from 'express'
import {rutas} from '../Routes/rutas.js'
import { conectarConMongo } from '../Database/conexion.js'


export class Servidorapi{

        constructor(){

            this.app = express()
            this.conectarconbd()
            this.activarbody()
            this.atenderPeticiones()
            


        }
        //Metodos de la clase ServidorApi

        despertarServidor(){

           this.app.listen(process.env.PORT,function(){

           console.log("servidor encendido")})
        }
           
        atenderPeticiones(){
            this.app.use('/',rutas)
          }
        conectarconbd(){

          conectarConMongo()
        }
        activarbody(){
          this.app.use(express.json())
        }

}