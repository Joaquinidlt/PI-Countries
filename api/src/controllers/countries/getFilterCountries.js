const {Country, Activity} = require('../../db');


module.exports = async (req, res) => {
  const { name } = req.query;
  if ( name ) {
    try {
      const result = await Country.findAll({ //Comprueba si hay match con lo recibido del query;
        where: { name: name },
        include: [Activity]
      });
      if ( !result ) {
        return res.status(404).send("Country search does not match."); //En caso de que no haya coincidencia;
      };
      return await res.json(result); //En caso de sí haber;
    } catch (err) {
      console.log(err);
      res.status(500).send("Server crashed.");
    };
  };
  try {
    let countriesDB = await Country.findAll(); //Deposita todo los datos de la db;
    let countriesFilter = countriesDB.slice(0, 10); //Muestra los primeros diez;
    res.json(countriesFilter);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server crashed.");
  };
};
