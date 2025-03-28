const express = require("express");
const cancelRouter = express.Router();

const {cancel} =
    require ("../controllers/cancel.controller.js");

    cancelRouter.get ('/', cancel);


module.exports = cancelRouter;