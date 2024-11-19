import { Router } from "express";
import { defaultValueSchemable } from "sequelize/lib/utils";
import UserController from "../controllers/userController.js";

const userRoutes = Router();

const userController = new UserController();

userRoutes.get("/",  userController.getAllUsers);
userRoutes.get("/detalle/:id", userController.getUserById);
userRoutes.get("/formulario",userController.formulario)
userRoutes.post("/formulario", userController.createUser);
userRoutes.get("/login",userController.login)
userRoutes.post("/login", userController.processLogin);
userRoutes.put("/editar/:id", userController.updateUser);
userRoutes.delete("/:id", userController.deleteUser);

export default userRoutes;