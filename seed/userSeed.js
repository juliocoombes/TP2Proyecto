import User from "../models/User.js";

async function userSeed() {
  try {

    await User.bulkCreate([
      {
        name: "Antonio",
        mail:"anotonio@gmail.com",
        pass: "1234"
      },
      {
        name:"Bob",
        mail:"bob@gmail.com",
        pass:"1234"
      },
      {
        name:"Carlos",
        mail: "carlos@gmail.com",
        pass:"1234"
      }
    ], {
      individualHooks: true 
    });

    console.log('Usuarios insertados correctamente');
  } catch (error) {
    console.error("Error al insertar usuarios:", error);
  }
}

export default userSeed;