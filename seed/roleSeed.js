import {Role} from "../models/models.js";

async function roleSeed() {
  try {
    await Role.bulkCreate([{ name: "Admin" }, { name: "User" }]);
  } catch (error) {
    console.log(`🚀 ~ roleSeed ~ error:`, error);
  }
}

export default roleSeed;