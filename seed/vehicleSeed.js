import Vehicle from "../models/vehicle.js";
async function vehicleSeed() {
    try{
        await Vehicle.bulkCreate([
            {
                patente: "aaa111",
                modelo:"Fiat punto",
                UserId : 1,
                parked: false,
            },
            {
                patente: "bbb222",
                modelo: "ford",
                UserId : 2,
                parked :true
            }
        ])
    }catch{

    }
}
export default vehicleSeed
