const express = require("express");
const hitRouter = express.Router();

const {hit} =
    require ("../controllers/hit.controller.js");

    hitRouter.get ('/', hit);


module.exports = hitRouter;