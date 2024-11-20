# TP2Proyecto
## Pasos
1. Clonar repositorio
2. Asegurarse de estar en la carpeta dentro del proyecto
3. Instalar las librerias necesarias con npm install
4. Iniciar los servidores SQL y APACHE con xampp
5. Ejecutar el proyecto con npm start
## Uso de servicios
- Creacion Usuario: POST -> localhost:3030/users/formulario(name , mail, pass)
- Obtener usuarios : GET -> localhost:3030/users/
- Obtener detalle usuario : GET -> localhost:3030/users/detalle/:id
- Realizar Login usuario : POST -> localhost:3030/users/login (email: antonio@gmail.com , pass:1234)
- Eliminar usuario : DELETE -> localhost:3030/users/:id
- Editar usuerio : PUT -> localhost:3030/users/editar/:id
- Obtener Vehiculos: GET -> localhost:3030/vehicle/
- Obtener detalle vehiculo : GET -> localhost:3030/vehicle/:patente
- Crear vehiculo : POST -> localhost:3030/vehicle/formulario (patente, modelo, UserId)
- Estacionar vehiculo : POST-> localhost:3030/vehicle/park/:patente
- Sacar vehiculo estacionamiento : POST -> localhost:3030/vehicle/removeVehicle/:patente
- Editar Vehiculo : PUT -> localhost:3030/vehicle/editar/:patente
- Eliminar Auto : DELETE -> localhost:3030/vehicle/:patente
