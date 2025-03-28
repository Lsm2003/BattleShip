const newGame = async (req, res) => {
    try {
        console.log("New game hit")
        res.status(200).json(courses);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
};

module.exports = {
    newGame
};