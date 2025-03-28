const newGame = async (req, res) => {
    try {
        console.log("New game hit")
        res.status(200).json({ status: "started", message: "New game. You start", cycle: 0, time: 'TIMESTAMPHERE' });
    }
    catch (err) {
        res.status(500).json({ status: 'reject'});
    }
};

module.exports = {
    newGame
};