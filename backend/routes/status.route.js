const express = require("express");
const statusRouter = express.Router();

const {status} =
    require ("../controllers/status.controller.js");

    statusRouter.get ('/', status);


module.exports = statusRouter;