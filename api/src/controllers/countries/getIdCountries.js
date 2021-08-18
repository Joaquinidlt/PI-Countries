const {Country, Activity} = require('../../db');
const { Sequelize } = require ('sequelize');



module.exports = async (req, res) => {
    try {
      const { idPais } = req.params;
      if ( idPais ) {
        const result = await Country.findOne({ //Guarda la coincidencia que haya mediante params y si tiene actividad, también la devuelve;
          where: { id: idPais.toUpperCase() },
          include: [Activity]
        });
        if (!result) {
          return res.status(404).send("ID Not found into our database");
        }
        await res.json(result);
      }
    } catch (err) {
      console.log(err);
      res.status(500).send("Server crashed");
    };
};
