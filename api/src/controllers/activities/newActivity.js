const { Country, Activity } = require("../../db.js");
const { v4: uuidv4 } = require("uuid");

module.exports = async (req, res) => {
  const { name, difficulty, duration, season, cId } = req.body;
  const validateAct = await Activity.findOne({ //Comprueba en la db que matchee con el name de body;
    where: {
      name: name,
    },
  });
  if (!name || !difficulty || !duration || !season || !cId) { //Si no recibe alguno de los parametros del body;
    res.status(404).send("Properties are missing.");
  };
  if (validateAct) {
    return res.json("The activity already exists."); //Si matcheo correctamente con uno existente;
  };
  const id = uuidv4();
  if (!validateAct) {
    let newAct = await Activity.create({ //Crea en la db (model: Activity), 
      id, //El id genera automaticamente a raíz del uuidv4();
      name,
      difficulty,
      duration,
      season,
    });

    await newAct.setCountries(cId);

    let matchCountry = await Country.findAll({ //Devuelve el pais que coincida del body con la db (model: Country);
      where: {
        id: cId,
      },
      include: [Activity]
    });
    await newAct.addCountries(matchCountry);

    return res.send(matchCountry);
  };
};
