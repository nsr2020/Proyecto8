const { isAuth, isAdmin } = require("../../middlewares/auth.js");
const upload = require("../../middlewares/file.js");
const {getHotelById, getHotels, getHotelByStar, getHotelByCountry, postHotel, updateHotel, deleteHotel, getHotelsNotVerified } = require("../controllers/hoteles.js");


const hotelesRouter = require("express").Router();

hotelesRouter.get("/not-verified", [isAdmin] ,getHotelsNotVerified) // la ruta para ver los hoteles no verificados que solo puede ver el admin
hotelesRouter.get("/estrellas/:estrellas", getHotelByStar)
hotelesRouter.get("/pais/:pais", getHotelByCountry)
hotelesRouter.get("/:id", getHotelById)
hotelesRouter.get("/", getHotels);
hotelesRouter.post("/", [isAuth],upload.single("imagen"),postHotel)
hotelesRouter.put("/:id", [isAdmin],upload.single("imagen"),updateHotel)
hotelesRouter.delete("/:id", [isAdmin],deleteHotel)


module.exports = hotelesRouter;
