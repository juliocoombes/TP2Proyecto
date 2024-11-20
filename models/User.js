import { DataTypes, INTEGER, Model } from "sequelize";
import connection from "../connection/connection.js";
import bcrypt from "bcrypt";
import Vehicle from "./vehicle.js";
import Role from "./Role.js";
class User extends Model {
  compare = async (myPlaintextPassword) => {
    const data = await bcrypt.compare(myPlaintextPassword, this.pass);
    return data
  };
}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    pass: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salt: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    RoleId:{
      type:DataTypes.INTEGER,
      allowNull:false,
      defaultValue:2
    }
  },
  {
    sequelize: connection,
    modelName: "User",
  }
);

User.beforeCreate(async (user) => {
  // console.log(`🚀 ~ User.beforeCreate ~ user:`, user);
  const salt = await bcrypt.genSalt(10);
  // console.log(`🚀 ~ User.beforeCreate ~ salt:`, salt);
  user.salt = salt;
  const hash = await bcrypt.hash(user.pass, salt);
  // console.log(`🚀 ~ User.beforeCreate ~ hash:`, hash);
  user.pass = hash;
});

export default User;