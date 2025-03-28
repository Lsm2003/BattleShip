const express = require("express");
const concedeRouter = express.Router();

const {concede} =
    require ("../controllers/concede.controller.js");

    concedeRouter.get ('/', concede);


module.exports = concedeRouter;