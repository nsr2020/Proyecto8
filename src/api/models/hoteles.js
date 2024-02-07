const mongoose = require("mongoose");


const hotelesSchema = new mongoose.Schema(
  {
    imagen: {type:String, required:true},
    nombre:{type:String, required:true},
    estrellas:{type:Number, required:false},
    pais:{type:String, required:true, enum:["Republica Dominicana", "Mexico","Jamaica"]},
    verified:{type:Boolean, required: true, default: false}
  },
  {
    timestamps: true,
    collection: "hoteles"
  }
)

const Hotel = mongoose.model("hoteles", hotelesSchema, "hoteles")
//                      nombre modelo      schema        collection

module.exports = Hotel;