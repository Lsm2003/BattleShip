const { hostCarrierCoords, hostBattleshipCoords, hostCruiserCoords, hostSubCoords, hostDestroyerCoords } = require('../coordinates.js');

const lob = async (req, res) => {

    let grid = req.body.grid;
    let guess = grid[0] + grid[1];

    try {
        let hit = false;
        const allCoords = [hostCarrierCoords, hostBattleshipCoords, hostCruiserCoords, hostSubCoords, hostDestroyerCoords];

        for (let shipCoords of allCoords) {
            for (let coord of shipCoords) {

            if (coord === guess) {
                console.log("ITS A HIT!");
                shipCoords.splice(shipCoords.indexOf(coord), 1); // Remove the hit coordinate from the ship's array

                if (shipCoords.length === 0) {
                    console.log("SHIP SUNK!");
                    res.status(200).json({ status: "sunk", grid: ["A", "1"], cycle: 0, time: 'TIMESTAMPHERE' });
                } else {
                    res.status(200).json({ status: "hit", grid: ["A", "1"], cycle: 0, time: 'TIMESTAMPHERE' });
                }
                
                hit = true;
                break;
            }
            }
            if (hit) break;
        }
        if (!hit) {
            console.log("ITS A MISS :(");
            res.status(200).json({ status: "miss", grid: ["A", "1"], cycle: 0, time: 'TIMESTAMPHERE' });
        }
    }
    catch (err) {
        res.status(500).json({ status: 'reject', time: 'TIMESTAMPHERE' });
    }
};

module.exports = {
    lob
};