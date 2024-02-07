const { isAdmin } = require("../../middlewares/auth");
const upload = require("../../middlewares/file");
const { getViajeById, getViajes, getViajeByPaquete, getViajeByPrice, postViaje, updatViaje, deleteViaje } = require("../controllers/viajes");


const viajesRouter = require("express").Router();

viajesRouter.get("/precio/:precio", getViajeByPrice)
viajesRouter.get("/paquete/:paquete", getViajeByPaquete)
viajesRouter.get("/:id", getViajeById)
viajesRouter.get("/", getViajes);
viajesRouter.post("/", [isAdmin], upload.single("imagen"),postViaje)
viajesRouter.put("/:id", [isAdmin], upload.single("imagen"),updatViaje)
viajesRouter.delete("/:id", [isAdmin],deleteViaje)





module.exports = viajesRouter;


