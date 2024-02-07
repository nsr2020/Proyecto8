const cloudinary = require("cloudinary").v2

const deleteFile = (url) =>{
    //tenemos el string de url pero necesitamos convertirlo en otro string final de la forma de abajo
  /*  const imgUrl = "https://res.cloudinary.com/dnju3aw4b/image/upload/v1707259319/Viaje/zbvt585xpxtorxw7iwbe.jpg" */

   const imgSplited = url.split("/")
   const folderName = imgSplited.at(-2)
   const fileName = imgSplited.at(-1).split(".")[0]



    //la función necesita recibir dentro de los paréntesis (nombreCarpeta/nombreArchivo)
    cloudinary.uploader.destroy(`${folderName}/${fileName}`, () =>{
        console.log("Elemento eliminado");
    })

}


module.exports = { deleteFile }