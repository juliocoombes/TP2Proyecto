import { Router } from "express";
import { defaultValueSchemable } from "sequelize/lib/utils";
import UserController from "../controllers/userController.js";

const userRoutes = Router();

const userController = new UserController();
//Declaracion rutas usuarios
userRoutes.get("/",  userController.getAllUsers);
userRoutes.get("/detalle/:id", userController.getUserById);
userRoutes.post("/formulario", userController.createUser);
userRoutes.post("/login", userController.processLogin);
userRoutes.put("/editar/:id", userController.updateUser);
userRoutes.delete("/:id", userController.deleteUser);

export default userRoutes;