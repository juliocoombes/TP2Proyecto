import Role from "./Role.js";
import User from "./User.js";
import Vehicle from "./vehicle.js";

Vehicle.belongsTo(User)
User.belongsTo(Role)
Role.hasMany(User)
User.hasOne(Vehicle)


export {Role, User,Vehicle}