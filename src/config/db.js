const mongoose = require("mongoose")


//!otra forma de hacerlo sería esta 
//mongoose
//       .connect(process.env.DB_URL)
//       .then(() => log("conectado con éxito"))
//       .catch(() => log("Algo ha ido mal"))

const connectDB = async () =>{
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log("Conectado con éxito a la BBDD");
  } catch (error) {
    console.log("Algo ha salido mal");
  }
}

module.exports = {connectDB}