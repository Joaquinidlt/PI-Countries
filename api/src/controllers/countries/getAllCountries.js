const {Country, Activity} = require('../../db');

module.exports = async (_req, res) => {
  try {
    let countriesDB = await Country.findAll({
      include: [Activity]
    }); //Deposito todo lo guardadod de la db;
    res.json(countriesDB);
  } catch (err) {
    console.log("Could not load the countries from the database.", err);
  };
};