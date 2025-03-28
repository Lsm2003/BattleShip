const express = require("express");
const missRouter = express.Router();

const {miss} =
    require ("../controllers/miss.controller.js");

    missRouter.get ('/', miss);


module.exports = missRouter;