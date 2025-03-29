const express = require("express");
const newRouter = express.Router();

const {newGame} =
    require ("../controllers/new.controller.js");

newRouter.get ('/', newGame);
newRouter.post ('/', newGame);


module.exports = newRouter;