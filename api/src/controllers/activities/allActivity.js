const { Activity } = require("../../db.js");


module.exports = async (_req, res) => {
    const allActivity = await Activity.findAll()
      return res.json(allActivity)
}