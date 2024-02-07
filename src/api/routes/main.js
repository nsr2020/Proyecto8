const hotelesRouter = require("./hoteles")
const usersRoutes = require("./users")
const viajesRouter = require("./viajes")

const mainRouter = require("express").Router()

mainRouter.use("/hoteles", hotelesRouter)
mainRouter.use("/viajes", viajesRouter)
mainRouter.use("/users",usersRoutes )


module.exports = mainRouter;


