import Role from "./Role.js";
import User from "./User.js";
import Vehicle from "./vehicle.js";

// Relaciones de modelos
Role.hasMany(User)
User.belongsTo(Role)
Vehicle.belongsTo(User)
User.hasOne(Vehicle)


export {Role, User,Vehicle}