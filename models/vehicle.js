import { DataTypes, Model, Sequelize } from "sequelize";
import connection from "../connection/connection.js";
import bcrypt from "bcrypt";
import User from "./User.js";

class Vehicle extends Model{
}

Vehicle.init(
    {
    patente:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    modelo: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    UserId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model:User,
            key:'Id'
        }
    },
    },
    {
        sequelize:connection,
        modelName:"Vehicle"
    }
)
export default Vehicle