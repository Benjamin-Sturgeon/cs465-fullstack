const express = require('express'); // Express app
const router = express.Router(); // Router logic
const { expressjwt: jwt } = require("express-jwt"); // Correct import
const tripsController = require("../controllers/trips");
const authController = require("../controllers/authentication");

//Auth Controller
const auth = jwt({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"], // Required for express-jwt
    userProperty: "auth", // Attach decoded payload to req.auth
  });

  // Authentication Routes
router.route("/register").post(authController.register);
router.route("/login").post(authController.login);

// Define routes for our trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList) // GET Method routes tripsList
    .post(auth, tripsController.tripsAddTrip); // POST Method Adds a Trip

// GET PUT and DELETE Method routes tripsFindByCode and tripsUpdateTrip - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode) // GET Method to find trip by code
    .put(auth, tripsController.tripsUpdateTrip) // PUT Method updates a trip
    .delete(tripsController.tripsDeleteTrip); // DELETE Method deletes a trip

module.exports = router;