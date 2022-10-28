import express from 'express'
import { ControladorHabitacion } from '../Controllers/ControladorHabitacion.js'
import { ControladorReserva } from '../Controllers/ControladorReserva.js'

let controlador = new ControladorHabitacion()//usando el controlador
let controlador2 = new ControladorReserva()

export let rutas = express.Router()
rutas.get('/hotelesNick/habitaciones',controlador.buscarHabitaciones) 
rutas.get('/hotelesNick/habitacion/:id',controlador.buscarHabitacionporId)
rutas.post('/hotelesNick/habitacion',controlador.registrarHabitacion)
rutas.put('/hotelesNick/habitacion/:id',controlador.editarHabitacion)
rutas.get('/hotelesNick/reservas',controlador2.buscarreserva)
rutas.post('/hotelesNick/reserva',controlador2.registrarReserva)
