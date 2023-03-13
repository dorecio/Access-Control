const db = require("../config/connection");
const { Empleado, Visitante } = require("../models");
const empleadoSeeds = require("./empleadoSeeds.json");
const visitanteSeeds = require("./visitanteSeeds.json");

db.once("open", async () => {
  try {
    await Empleado.deleteMany({});
    // await Visitante.deleteMany({});

    await Empleado.create(empleadoSeeds);

    // for (let i = 0; i < visitanteSeeds.length; i++) {
    //     const { _id } = await Visitante.create(visitanteSeeds[i]);
    //     const empleado = await Empleado.findOneAndUpdate(
    //         { visitas: _id },
    //         {
    //            $addToSet: {
    //               visitas: _id,
    //             },
    //         }
    //     );
    // }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
