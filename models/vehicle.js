import { DataTypes, Model, Sequelize } from "sequelize";
import connection from "../connection/connection.js";

const pricePerSecond = 5;

class Vehicle extends Model{
   
}

// Declaracion de atributos modelo vehiculo
Vehicle.init(
    {
    patente:{
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey:true
    },
    modelo: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    UserId:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    start_time: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      end_time: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      total_duration: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      total_fee: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      parked: {
        type : DataTypes.BOOLEAN,
        allowNull:true
      }
   

    },
    {
        sequelize:connection,
        modelName:"Vehicle"
    }
    
)

export default Vehicle
export {pricePerSecond}