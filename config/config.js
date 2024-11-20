// Informacion necesaria para conectar al servidor, usada en connection.js
const SERVER_PORT= process.env.SERVER_PORT|| 3000;
const DB_NAME= process.env.DB_NAME || "tpproyecto";
const DB_USER= process.env.DB_USER || "root";
const DB_PASS= process.env.DB_PASS|| "";
const DB_HOST= process.env.DB_HOST|| "localhost";
const DB_DIALECT= process.env.DB_DIALECT|| "mysql";
const DB_PORT= process.env.DB_PORT|| 3306;


export {SERVER_PORT, DB_NAME, DB_DIALECT, DB_HOST, DB_PASS, DB_PORT, DB_USER}