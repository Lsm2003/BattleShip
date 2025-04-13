const { hostCarrierCoords, hostBattleshipCoords, hostCruiserCoords, hostSubCoords, hostDestroyerCoords } = require('../coordinates.js');

let gameStatus = "No Game";
let cycle = 0;
let userFleet = []
let serverFleet = [[1,1], [2,2], [1,1], [1,1]]
let startTime;

const newGame = async (req, res) => {
    try {
        if (gameStatus === "In Progress") {
            throw new Error("Game already in progress");
        }
        let grid = req.body.grid;
        userFleet = req.body.fleet;
        gameStatus = "In Progress"; // Update the gameStatus here
        let currentTime = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });
        startTime = currentTime;
        res.status(200).json({ status: "started", message: "New game. You start", cycle: cycle, time: currentTime });
    }
    catch (err) {
        res.status(500).json({ status: 'reject' });
    }
};


const lob = async (req, res) => {

    let currentTime = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });

    if (gameStatus !== "In Progress") {
        return res.status(500).json({ status: "reject", time: currentTime });
    }

    cycle += 1;

    let grid = req.body.grid;
    let guess = grid[0] + grid[1];

    try {
        let hit = false;
        const allCoords = [hostCarrierCoords, hostBattleshipCoords, hostCruiserCoords, hostSubCoords, hostDestroyerCoords];

        const usedCoordinates = req.app.locals.usedCoordinates || new Set();
        let randomNumber, randomLetter, randomCoord;

        do {
            randomNumber = Math.floor(Math.random() * 10) + 1;
            randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 5)); // A-E
            randomCoord = randomLetter + randomNumber;
        } while (usedCoordinates.has(randomCoord));

        usedCoordinates.add(randomCoord);
        req.app.locals.usedCoordinates = usedCoordinates;

        for (let shipCoords of allCoords) {
            for (let coord of shipCoords) {

                if (coord === guess) {
                    shipCoords.splice(shipCoords.indexOf(coord), 1); // Remove the hit coordinate from the ship's array

                    if (shipCoords.length === 0) {

                        // Check if all arrays are empty
                        const allShipsSunk = allCoords.every(coords => coords.length === 0);
                        if (allShipsSunk) {
                            res.status(200).json({ status: "defeated", grid: [randomLetter, randomNumber], cycle: cycle, time: currentTime });
                            // Reset the game status and cycle count
                            gameStatus = "No Game"; // Reset the game status
                            cycle = 0; // Reset the cycle count
                        } else {
                            res.status(200).json({ status: "sunk", grid: [randomLetter, randomNumber], cycle: cycle, time: currentTime });
                            // Update serverFleet to reflect the sunk ship
                            const shipIndex = allCoords.indexOf(shipCoords);
                            if (shipIndex !== -1) {
                                serverFleet[shipIndex][1] -= 1; // Set afloat value to 0
                            }
                        }
                    } else {
                        res.status(200).json({ status: "hit", grid: [randomLetter, randomNumber], cycle: cycle, time: currentTime });
                    }

                    hit = true;
                    break;
                }
            }
            if (hit) break;
        }
        if (!hit) {
            res.status(200).json({ status: "miss", grid: [randomLetter, randomNumber], cycle: cycle, time: currentTime });
        }
    }
    catch (err) {
        res.status(500).json({ status: 'reject', time: currentTime });
    }
};


const status = async (req, res) => {
    try {
        currentGameStatus = gameStatus; // Update the exported variable
        let currentTime = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });
        let duration = (new Date(currentTime) - new Date(startTime)) / 1000; // Duration in seconds
        res.status(200).json({ status: gameStatus, cycle: cycle, duration: duration, myfleet: serverFleet, yourfleet: userFleet, time: currentTime });
    }
    catch (err) {
        res.status(500).json({ status: 'reject', time: 'TIMESTAMPHERE' });
    }
};


const cancel = async (req, res) => {
    try {
        gameStatus = "No Game"; // Reset the game status
        cycle = 0; // Reset the cycle count
        let currentTime = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });
        let duration = (new Date(currentTime) - new Date(startTime)) / 1000;
        res.status(200).json({ status: "ended", message: 'Game Over. Thank you for playing.', cycle: cycle, duration: duration, myfleet: serverFleet, yourfleet: userFleet, time: currentTime });
    }
    catch (err) {
        res.status(500).json({ status: 'reject', time: currentTime});
    }
};


const concede = async (req, res) => {
    gameStatus = "No Game";
    cycle = 0;
    let currentTime = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });
    let duration = (new Date(currentTime) - new Date(startTime)) / 1000;

    try {
        res.status(200).json({ status: "ended", message: 'I win. Thank you for playing.', cycle: cycle, duration: duration, myfleet: serverFleet, yourfleet: userFleet, time: currentTime });
    }
    catch (err) {
        res.status(500).json({ status: 'reject'});
    }
};

const hit = async (req, res) => {
    let currentTime = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });
    try {
        res.status(200).json({ status: "ok"});
    }
    catch (err) {
        res.status(500).json({ status: 'reject', message: 'Unexpected', time: currentTime});
    }
};


const miss = async (req, res) => {
    let currentTime = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });
    try {
        res.status(200).json({ status: "ok"});
    }
    catch (err) {
        res.status(500).json({ status: 'reject', message: 'Unexpected', time: currentTime});
    }
};

module.exports = {
    newGame,
    lob,
    status,
    cancel,
    concede,
    hit,
    miss
};