import express from "express";
//import { notFound } from "./midlewares/notFound.js";
import connection from "./connection/connection.js";
import { SERVER_PORT } from "./config/config.js";
import rutasMain from './routes/mainRouter.js';
import rutasvehicles from './routes/vehicleRouter.js';
import rutasUsers from './routes/userRouter.js';
import roleSeed from "./seed/roleSeed.js";
import userSeed from "./seed/userSeed.js";
import vehicleSeed from "./seed/vehicleSeed.js";

const app = express()
const port = 3030
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

connection.sync()
await roleSeed()
await userSeed()
await vehicleSeed()

app.listen(port, () => {
    console.log("Funcionando")
})


app.use("/",rutasMain)
app.use("/vehicles", rutasvehicles);
app.use('/users',rutasUsers);

