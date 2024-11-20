import { Router } from "express";

import VehicleController from "../controllers/vehicleController.js";
const router = Router()
const vehiclesController = new VehicleController;

// Declaracion rutas vehiculos
router.get("/",  vehiclesController.getAllvehicles);
router.get("/detalle/:patente", vehiclesController.getVehicleByPatente);
router.post("/formulario", vehiclesController.createVehicle);
router.post("/park/:patente", vehiclesController.parkVehicle);
router.post("/removeVehicle/:patente",vehiclesController.removeVehicle)
router.put("/editar/:patente", vehiclesController.updateVehicle);
router.delete("/:patente", vehiclesController.deleteVehicle);

export default router