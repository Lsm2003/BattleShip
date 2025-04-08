const { hostCarrierCoords, hostBattleshipCoords, hostCruiserCoords, hostSubCoords, hostDestroyerCoords } = require('../coordinates.js');
const { getGameStatus } = require('./new.controller.js');

let cycle = 0;

const lob = async (req, res) => {

    const gameStatus = await getGameStatus();
    if (gameStatus !== "In Progress") {
        return res.status(500).json({ status: "reject", time: 'TIMESTAMPHERE' });
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

        console.log("Random Number:", randomNumber);
        console.log("Random Letter:", randomLetter);

        for (let shipCoords of allCoords) {
            for (let coord of shipCoords) {

                if (coord === guess) {
                    console.log("ITS A HIT!");
                    shipCoords.splice(shipCoords.indexOf(coord), 1); // Remove the hit coordinate from the ship's array

                    if (shipCoords.length === 0) {
                        console.log("SHIP SUNK!");

                        // Check if all arrays are empty
                        const allShipsSunk = allCoords.every(coords => coords.length === 0);
                        if (allShipsSunk) {
                            res.status(200).json({ status: "defeated", grid: [randomLetter, randomNumber], cycle: 0, time: 'TIMESTAMPHERE' });
                        } else {
                            res.status(200).json({ status: "sunk", grid: [randomLetter, randomNumber], cycle: 0, time: 'TIMESTAMPHERE' });
                        }
                    } else {
                        res.status(200).json({ status: "hit", grid: [randomLetter, randomNumber], cycle: 0, time: 'TIMESTAMPHERE' });
                    }

                    hit = true;
                    break;
                }
            }
            if (hit) break;
        }
        if (!hit) {
            console.log("ITS A MISS :(");
            res.status(200).json({ status: "miss", grid: [randomLetter, randomNumber], cycle: 0, time: 'TIMESTAMPHERE' });
        }
    }
    catch (err) {
        res.status(500).json({ status: 'reject', time: 'TIMESTAMPHERE' });
    }
};

const getCycle = () => cycle;

module.exports = {
    lob,
    getCycle
};