require("dotenv").config();

const express = require("express");
const { connectDB } = require("./src/config/db");
const cors = require("cors"); // nos vale para poder usar el front y que se pueda abrir la página.
const mainRouter = require("./src/api/routes/main");
const cloudinary = require("cloudinary").v2;

const app =  express();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret:process.env.API_SECRET
})

app.use(express.json());
 // me permite que mi servidor sea capaz de recibir cuerpos en formato json

 app.use(cors()) //esto nos va a permitir que cuando abramos la pagina front, una vez hecho el fetch, entonces nos va a dejar visualizar los datos sin problema

connectDB();

app.use("/api/v1/", mainRouter)


app.use("*",(req,res, next) =>{
  return res.status(404).json("Route not found")
})
app.listen(3000,  () =>{
  console.log("Servidor lanzado en: http://localhost:3000 🌴");
})