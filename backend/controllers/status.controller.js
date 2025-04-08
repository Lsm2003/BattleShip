const { getGameStatus } = require('./new.controller.js');

let currentGameStatus = null; // Variable to store the current game status

const status = async (req, res) => {
    try {
        console.log("Status check");
        const gameStatus = await getGameStatus();
        currentGameStatus = gameStatus; // Update the exported variable
        console.log("Game status:", gameStatus);
        res.status(200).json({ status: "in progress", cycle: 0, duration: 0, myfleet: 'ARRAY', yourfleet: 'ARRAY', time: 'TIMESTAMPHERE' });
        return gameStatus;
    }
    catch (err) {
        res.status(500).json({ status: 'reject', time: 'TIMESTAMPHERE' });
    }
};

module.exports = {
    status,
    currentGameStatus // Export the variable
};