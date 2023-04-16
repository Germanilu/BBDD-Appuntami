
//Requiero el controlador 
const reviewController = require('../controllers/ReviewController');
//Utilizo la funcion Router() de express
const router = require('express').Router();

//Creo mi primera ruta con el metodo .post, la url , y el controlador a utilizar
router.post('/newreview', reviewController.createReview);
router.get('/getreview', reviewController.getReview);
router.get('/getreviewavg', reviewController.getReviewAverage);
//Exporto mi ruta
module.exports = router;