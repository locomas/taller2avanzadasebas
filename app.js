//const express = require('express') forma vieja de importar

// TRAIGO LIBRERIA QUE CONTROLA VARIABLES DE ENTORNO 
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

import {Servidorapi} from './API/servidorapi.js'
let servidorhoteles = new Servidorapi() //instancia de una clase

servidorhoteles.despertarServidor()