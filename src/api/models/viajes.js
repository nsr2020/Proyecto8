const mongoose = require("mongoose");


const viajesSchema = new mongoose.Schema(
  {
    imagen: {type:String, required:true},
    paquete:{type:String, required:true, enum:["Riviera Maya","Punta Cana", "Jamaica", "Costa Rica"]},  
    //solamente se pueden meter esos 4 paquetes con la propiedad enum, se acota...
    dias:{type:Number, required:true},
    hotel:[{ type: mongoose.Types.ObjectId, ref:"hoteles", required:false}], // va con corchete para el array
    precio:{type:Number, required:true}
  },
  {
    timestamps: true,
    collection: "viajes"
  }
)

const Viaje = mongoose.model("viajes", viajesSchema, "viajes")
//                      nombre modelo      schema        collection

module.exports = Viaje;