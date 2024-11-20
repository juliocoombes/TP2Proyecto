import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Role extends Model {}
// Declaracion de atributos modelo Role
Role.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "Role",
  }
);



export default Role;