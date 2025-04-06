const mongoose = require('mongoose');
const Trip = require('../models/travlr'); //Register the model
const Model = mongoose.model('trips'); 

// GET /trips - lists all trips
//Regardless of outcome, response must include HTML status code
// and JSON response
const tripsList = async(req, res) => {
    const q = await Model
        .find({}) // No filter, so all trips are returned
        .exec();

        //Uncomment the following line to see the raw data returned from MongoDB
        //console.log(q);

        if(!q)
        { //Data base returned no data
            return res.status(404).json(err);
        } else { //Data base returned data
            return res.status(200).json(q);
        }
    };

const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode }) // Return a single record
        .exec();

        //Uncomment the following line to see the raw data returned from MongoDB
        //console.log(q);

        if(!q)
        { //Data base returned no data
            return res.status(404).json(err);
        } else { //Data base returned data
            return res.status(200).json(q);
        }
    };

module.exports = {
    tripsList,
};