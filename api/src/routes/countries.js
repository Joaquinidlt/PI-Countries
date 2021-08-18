const { Router } = require('express')
const router = Router();

//importo todos los routers;
const getAll = require('../controllers/countries/getAllCountries.js');
const getId = require('../controllers/countries/getIdCountries.js');
const getFilterCountries = require('../controllers/countries/getFilterCountries')


// Configurar los routers()

router.get('', getAll);
router.get('/countries', getFilterCountries);
router.get('/countries/:idPais', getId);

module.exports = router;