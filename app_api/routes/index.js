const express = require('express'); //Express app
const router = express.Router();    //Router object

//Import the controller for the trips API
//The controller contains the logic for handling requests and responses
const tripsController = require('../controllers/trips');

//Define the routes for the trips API
router
    .route('/trips')
    .get(tripsController.tripsList); //GET request to list all trips
    

module.exports = router; //Export the router object for use in other files
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode); //GET request to list all trips


module.exports = router; //Export the router object for use in other files