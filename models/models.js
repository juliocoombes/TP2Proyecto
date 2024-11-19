import Role from "./Role.js";
import User from "./User.js";
import Vehicle from "./vehicle.js";


User.belongsTo(Role)
Vehicle.belongsTo(User)
User.hasOne(Vehicle)
Role.hasMany(User)

export {Role, User,Vehicle}