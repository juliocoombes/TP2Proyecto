import {Vehicle} from '../models/models.js'

class VehicleService {
    getAllVehiclesService = async () => {
        try {
          const vehicles = await Vehicle.findAll({
            attributes: ["name", "mail"],
          });
          return vehicles;
        } catch (error) {
          throw error;
        }
      };
      getVehicleByPatenteService = async (id) => {
        try {
          const vehicle = await User.findAll({
            where: { id },
            attributes: ["name", "mail"],
          });
          return vehicle;
        } catch (error) {
          throw error;
        }
      };
      loginService = async (user) => {
        try {
          const { mail, pass } = user;
          const userLogin = await User.findOne({ where: { mail } });
          if (!userLogin) throw new Error("No pasas");
          const comparePass = await userLogin.compare(pass);
          // console.log(
          //   `🚀 ~ UserService ~ loginService= ~ comparePass:`,
          //   comparePass
          // );
          if (!comparePass) throw new Error("No pasas");
          return userLogin;
        } catch (error) {
          throw error;
        }
      };
      createUserService = async (user) => {
        try {
          const newUser = await User.create(user);
          return newUser;
        } catch (error) {
          throw error;
        }
      };
      updateUserService = async (data) => {
        try {
          const { id, name, pass, mail } = data;
          const users = await User.update(
            { name, pass, mail },
            {
              where: { id },
            }
          );
          return users;
        } catch (error) {
          throw error;
        }
      };
    
      deleteUserService = async (id) => {
        return `deleteUserService ${id}`;
      };
}