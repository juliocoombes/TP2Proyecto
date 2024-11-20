import { User } from "../models/models.js";

class UserService {
  getAllUsersService = async () => {
    try {
      const users = await User.findAll({
        attributes: ["name", "mail"],
      });
      return users;
    } catch (error) {
      throw new Error("Fallo en la carga de usuarios");
    }
  };
  getUserByIdService = async (id) => {
    try {
      const user = await User.findByPk(id,{
        attributes:["name","mail"],
      })
      if(!user){
        throw new Error("Usuario no encontrado")
      }
      return user;
    } catch (error) {
      throw new Error("Fallo en la busqueda de usuario");
    }
  };
  loginService = async (user) => {
    try {
      const { mail, pass } = user;
      const userLogin = await User.findOne({ where: { mail } });
      if (!userLogin) throw new Error("Credenciales invalidas");
      const comparePass = await userLogin.compare(pass)
      if (!comparePass) throw new Error("Credenciales invalidas");
      return userLogin;
    } catch (error) {
      throw error;
    }
  };
  createUserService = async (user) => {
   
    try {
      const {name,mail,pass} = user
    const newUser = await User.create({name,mail,pass})
      return newUser;
    }catch (error) {
      throw new Error("Error creating user. Please check the provided data.");
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
    try {
     const userDeleted = await User.destroy({
       where : {id :id},
     });
     if(userDeleted ===0){
       throw new Error("Usuario no encontrado");
     }
     return {message: "Usuario eliminado"};
   }catch (error){
     throw error;
   }
   };
  
}

export default UserService;