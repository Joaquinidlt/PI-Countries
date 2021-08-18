const axios = require("axios");
const { Country } = require("./db");
const { URL_ALL } = require("./utils/constants.js");

async function loadingDb(_req, res) {
  try {
    {
      const ApiAll = await axios.get(URL_ALL); //Traigo todo de la API;
      const ModelCountries = ApiAll.data.map( c => { //Guardo dentro los detalles de toda la API;
        return {
          name: c.name,
          alpha3Code: c.alpha3Code,
          flag: c.flag,
          region: c.region,
          capital: c.capital,
          subregion: c.subregion,
          area: c.area,
          population: c.population,
        };
      });
       ModelCountries.forEach( async e => {
        await Country.create({ //Creo los detalles en la db;
            name: e.name,
            alpha3Code: e.alpha3Code,
            flag: e.flag,
            region: e.region,
            capital: e.capital,
            subregion: e.subregion,
            area: e.area,
            population: e.population,
        });
      }); 
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server crashed.");
  };
};

module.exports = { loadingDb };