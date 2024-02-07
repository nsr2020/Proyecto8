const {  isAdmin } = require("../../middlewares/auth");
const upload = require("../../middlewares/file");
const { getUsers, register, login, updateUser, deleteUser } = require("../controllers/users");
const usersRoutes = require("express").Router();

usersRoutes.get("/",[isAdmin],getUsers)
usersRoutes.post("/register", upload.single("imagen"),register)
usersRoutes.post("/login", login)
usersRoutes.put("/:id",[isAdmin],upload.single("imagen"),updateUser)
usersRoutes.delete("/:id", [isAdmin],deleteUser)


module.exports = usersRoutes;
