const { Country, Activity } = require("../../db.js");


module.exports = async (req, res) => {
    try {
      const { idAct } = req.params;
      if ( idAct ) {
        const result = await Activity.findOne({ //Matchea con una actividad creada y a parte, devuelve su data Country;
          where: { id: idAct },
          include: [Country],
        });
        if (!result) {
          return res.status(404).send("ID not found into our database.");
        }
        await res.json(result); //En caso de tener resultado correcto, lo devuelve;
      };
    } catch (err) {
      console.log(err);
      res.status(500).send("Server crashed");
    };
  };
  