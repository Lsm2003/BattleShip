const express = require("express");
const lobRouter = express.Router();

const {lob} =
    require ("../controllers/lob.controller.js");

    lobRouter.get ('/', lob);


module.exports = lobRouter;