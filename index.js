import express from "express";
//import { notFound } from "./midlewares/notFound.js";
import connection from "./connection/connection.js";
import { SERVER_PORT } from "./config/config.js";
import rutasMain from './routes/mainRouter.js';
import rutasvehicles from './routes/vehicleRouter.js';
import rutasUsers from './routes/userRouter.js';



const app = express()
const port = 3030
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

connection.sync()

app.listen(port, () => {
    console.log("Funcionando")
})


app.use("/",rutasMain)
app.use("/products", rutasvehicles);
app.use('/users',rutasUsers);

