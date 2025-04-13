const express = require("express");

// Import controller functions from controllers
const { newGame, lob, status, cancel, concede, hit, miss } = require("../controllers/battleship.controller.js");
const battleshipRouter = express.Router();

// map routes to controller functions
battleshipRouter.post('/new', newGame)
battleshipRouter.get('/status', status)
battleshipRouter.post('/lob', lob)
battleshipRouter.get('/cancel', cancel)
battleshipRouter.get('/concede', concede)
battleshipRouter.get('/hit', hit)
battleshipRouter.get('/miss', miss)

// export router for use by main application (app.js)
module.exports = battleshipRouter;