import mongoose from 'mongoose';


const Schema = mongoose.Schema;


const Esquemareserva = new Schema({

    

    idhabitacion:{
        required:true,
        type:String,

    },
    fechaentrada:{
        required:true,
        type:Date
    },
    fechasalida:{
         required:true,
         type:Date
    },
    numeroadultos:{
        required:true,
        type:Number
    },
    numeroninos:{
        required:true,
        type:Number
    },
    costoreserva :{
        required:true,
        type:Number
    }

    
  });

  export const modeloreserva = mongoose.model('reservas',Esquemareserva)