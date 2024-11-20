import { where } from 'sequelize';
import {Vehicle} from '../models/models.js'
import { pricePerSecond } from '../models/vehicle.js';

class VehicleService {
    getAllVehiclesService = async () => {
        try {
          const vehicles = await Vehicle.findAll({
            attributes: ["patente", "modelo"],
          });
          return vehicles;
        } catch (error) {
          throw error;
        }
      };
      getVehicleByPatenteService = async (patente) => {
        try {
          const vehicle = await Vehicle.findOne({
            where: { patente }, 
            attributes: ["patente", "modelo"], 
          });
          return vehicle;
        } catch (error) {
          throw error;
        }
      };

      getVehicleByUserService = async (id) => {
        try {
          const vehicle = await Vehicle.findOne({where : {userId : id}},{
            attributes : ["patente", "modelo"]
          });
          return vehicle;
        } catch (error) {
          throw error;
        }
      };
      createVehicleService = async (vehicle) => {
        try {
          const {patente,modelo,UserId} = vehicle
          const newVehicle = await Vehicle.create(patente,modelo,UserId);
          return newVehicle;
        } catch (error) {
          throw error;
        }
      };
      parkVehicleService = async(patente)=>{
        try {
          const vehicle = await Vehicle.findOne({where:{patente}});
          if(!vehicle){
            throw new Error("Vehiculo no encontrado");
          }
          await vehicle.update({
            start_time: new Date(),
            parked: true
          });
          return vehicle.startTime;
        }catch(error){
          throw error;
        }
      };
      removeAndChargeVehicle = async(patente)=>{
        try {
          const vehicle = await Vehicle.findOne({where:{patente}});
          if(!vehicle){
            throw new Error("Vehiculo No encontrado")
          }
          if (!vehicle.parked) {
            throw new Error("El vehículo no está estacionado");
          }
          const currentTime = new Date();
          const durationInSeconds = Math.floor((currentTime - vehicle.start_time) / 1000);
          const totalFee = durationInSeconds * pricePerSecond;

          await vehicle.update({
            endTime: currentTime,
            parked:false,
            total_duration: durationInSeconds,
            total_fee : totalFee
          })
          return {
            patente: vehicle.patente,
            modelo: vehicle.modelo,
            totalFee: totalFee,
            duration: durationInSeconds,
          }; 
        }catch(error){
          throw error
        }
        
      };
      updateVehicleService = async (data) => {
        try {
          const {patente, modelo, userId} = data;
          const vehicles = await Vehicle.update(
            {modelo, userId},
            {
              where: { patente },
            }
          );
          return vehicles;
        } catch (error) {
          throw error;
        }
      };
    
      deleteVehicleService= async(patente) =>{
        try {
            const deletedCount = await Vehicle.destroy({
                where: { patente }
            });

            if (deletedCount === 0) {
                throw new Error('Vehiculo No encontrado');
            }

            return 'Vehicle deleted successfully';
        } catch (error) {
            throw error;
        };

        
        
        
      
    }
}
export default VehicleService