import { Router } from 'express';
import userRoutes from './userRouter.js';
import vehicleRoutes from './vehicleRouter.js';

const routes = Router();
// Declaracion de rutas principales
routes.use("/vehicle",vehicleRoutes);
routes.use("/users",userRoutes)

export default routes;