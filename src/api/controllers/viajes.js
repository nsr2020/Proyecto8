const { deleteFile } = require("../../utils/deleteFile");
const Viaje = require("../models/viajes")

const getViajes = async (req, res, next)=>{
  try {
    const viajes = await Viaje.find().populate("hotel");
    return res.status(200).json(viajes)
  } catch (error) {
   return res.status(400).json("Error")
    
  }
}


const getViajeById = async (req, res, next)=>{
  try {
    const {id} = req.params;
    const viaje = await Viaje.findById(id).populate("hotel");
    return res.status(200).json(viaje)
  } catch (error) {
    return res.status(400).json("Error")
    
  }
}
const getViajeByPrice = async (req, res, next)=>{
  try {
    const {precio} = req.params;
    const viajes = await Viaje.find({precio:{$lte: precio}}).populate("hotel")
    return res.status(200).json(viajes) 
  } catch (error) {
    return res.status(400).json("Error")
    
  }
}
const getViajeByPaquete = async (req, res, next)=>{
  try {
    const {paquete} = req.params;
    const viajes = await Viaje.find({paquete}).populate("hotel")
    return res.status(200).json(viajes)
  } catch (error) {
    return res.status(400).json("Error")
    
  }
}



const postViaje = async (req, res, next)=>{
  try {  /*app.use(express.json());  importante configurar esto en index.js para que pueda leer json. */
    const newViaje = new Viaje(req.body);
    if(req.file){
      newViaje.imagen = req.file.path;
    }

    const viajeSaved = await newViaje.save()
    return res.status(201).json(viajeSaved)
    
  } catch (error) {
    return res.status(400).json("Error")
  }
}

const updatViaje = async (req, res, next)=>{
  try {
    const {id} = req.params;
    const oldViaje = await Viaje.findById(id)
    const newViaje = new Viaje(req.body)
    newViaje._id = id;
    const hoteles = req.body.hotel || []; // creamos esto, para que si viene undefined lo ponga como vacio y no dé error
    newViaje.hotel = [...oldViaje.hotel, ...hoteles] // y ahi ponemos la variable hoteles y asi no da error.

    if(req.file){
      newViaje.imagen = req.file.path;
      deleteFile(oldViaje.imagen)
    }

    const viajeUdated = await Viaje.findByIdAndUpdate(id, newViaje, {new: true});
    return res.status(200).json(viajeUdated)
  } catch (error) {
    console.log(error);
    return res.status(400).json("Error")
  }
}

const deleteViaje = async (req, res, next)=>{
  try {
    const {id} = req.params;
    const viajeDeleted = await Viaje.findByIdAndDelete(id);

      deleteFile(viajeDeleted.imagen )

    return res.status(200).json(viajeDeleted)

  } catch (error) {
    return res.status(400).json("Error")
  }
}

 module.exports ={getViajeById, getViajeByPaquete, getViajeByPrice, getViajes, postViaje, updatViaje, deleteViaje}