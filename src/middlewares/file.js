//creamos este middleware para poder usar cloudinary

const multer = require("multer")
const cloudinary = require("cloudinary").v2
const {CloudinaryStorage} = require("multer-storage-cloudinary")


const storage = new CloudinaryStorage({
   cloudinary: cloudinary,
   params:  {
    folder: "Viaje",
    allowedFormats: ["jpg", "jpge", "png", "gif","webp"]

   }
})

const upload =  multer({storage});

module.exports = upload;