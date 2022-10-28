import mongoose from 'mongoose';


const Schema = mongoose.Schema;


const Esquemahabit = new Schema({
    nombre:{
        required:true,
        type:String
    },
    valornoche:{
         required:true,
         type:Number
    },
    descripcion:{
        required:true,
        type:String
    },
    fotografias:{
        required:true,
        type:[String]
    },
    numeroMaximoPer :{
        required:true,
        type:Number
    }

    
  });

  export const modelohab = mongoose.model('habitaciones',Esquemahabit)