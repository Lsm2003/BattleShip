const newGame = async (req, res) => {
    try {
        let grid = req.body.grid;
        let fleet = req.body.fleet;
        console.log("New game hit", grid);
        console.log("New game hit", fleet);
        res.status(200).json({ status: "started", message: "New game. You start", cycle: 0, time: 'TIMESTAMPHERE' });
    }
    catch (err) {
        res.status(500).json({ status: 'reject'});
    }
};

module.exports = {
    newGame
};