const { Router } = require('express')
const router = Router();

//importo todos los routers;
const getAll = require('../controllers/activities/allActivity');
const getId = require('../controllers/activities/activityId');
const newActivity = require('../controllers/activities/newActivity');


// Configurar los routers()

router.post('/activity', newActivity);
router.get('/activity/', getAll);
router.get('/activity/:id', getId);


module.exports = router;