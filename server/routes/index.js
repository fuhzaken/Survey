/*
Author: Kenneth Agustin
Team: Team Seven
Course: COMP229 - Fall 2020
Purpose: Team Project - Survey Site
*/ 
let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');


/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET survey-list page. */
/*
router.get('/survey-list', function(req, res, next) {
  res.render('index', 
  { title: 'Survey List'});
});
*/

/* GET surveys page. */
// router.get('/survey-list', indexController.displaySurveysPage);

/* GET Route for displaying Login Page */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing Login Page */
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying Register Page */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing Register Page */
router.post('/register', indexController.processRegisterPage);

/* GET to pernform UserLogout - UPDATE Operation */
router.get('/logout', indexController.performLogout);

module.exports = router;
