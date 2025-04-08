let gameStatus = "No Game";

const newGame = async (req, res) => {
    try {
        if (gameStatus === "In Progress") {
            throw new Error("Game already in progress");
        }
        let grid = req.body.grid;
        let fleet = req.body.fleet;
        gameStatus = "In Progress"; // Update the gameStatus here
        console.log("New game hit", grid);
        console.log("New game hit", fleet);
        res.status(200).json({ status: "started", message: "New game. You start", cycle: 0, time: 'TIMESTAMPHERE' });
    }
    catch (err) {
        res.status(500).json({ status: 'reject' });
        console.log("game in progress")
    }
};

// Getter function to retrieve the current value of gameStatus
const getGameStatus = () => gameStatus;

module.exports = {
    newGame,
    getGameStatus
};