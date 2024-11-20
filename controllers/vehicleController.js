import VehicleService from '../services/vehicleService.js'

class VehicleController {
  vehicleService = new VehicleService();
  getAllvehicles= async (req, res) => {
    try {
      const data = await this.vehicleService.getAllVehiclesService();
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getVehicleByPatente = async (req, res) => {
    try {
      const { patente } = req.params;
      const data = await this.vehicleService.getVehicleByPatenteService(patente)
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  getVehicleByUser = async(req, res)=>{
    try {
        const { id } = req.params;
        const data = await this.vehicleService.getVehicleByUserService(id)
        res.status(200).send({ success: true, message: data });
      } catch (error) {
        res.status(400).send({ success: false, message: error.message });
      }
  }
 
  createVehicle = async (req, res, next) => {
    try {
      const { patente, modelo, userId } = req.body;
  
      // Validación de los datos requeridos
      if (!patente || !modelo || !userId) {
        return res.status(400).send({
          success: false,
          message: 'patente, modelo y userId son requeridos',
        });
      }
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
 
  updateVehicle = async (req, res) => {
    try {
      const {modelo, userId} = req.body;
      const {patente} = req.params;
      if (!patente) {
        return res.status(400).send({ success: false, message: "Patente es requerida" });
      }
      const data = await this.vehicleService.updateVehicleService({patente,modelo,userId});
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  deleteVehicle = async (req, res) => {
    try {
      const { patente } = req.params;
      const data = await this.vehicleService.deleteVehicleService(patente);
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  parkVehicle = async(req,res)=>{
    try {
        const { patente } = req.params;
        if (!patente) {
          return res.status(400).send({ success: false, message: "La patente es requerida" });
        }
        const data = await this.vehicleService.parkVehicleService(patente);
        res.status(200).send({ success: true, message: data });
      } catch (error) {
        res.status(400).send({ success: false, message: error.message });
      }
  }
  removeVehicle = async(req,res)=>{
    try {
        const { patente } = req.params;
        const data = await this.vehicleService.removeAndChargeVehicle(patente);
        res.status(200).send({ success: true, message: data });
      } catch (error) {
        res.status(400).send({ success: false, message: error.message });
      }
  }
}

export default VehicleController