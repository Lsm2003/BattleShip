const lob = async (req, res) => {
    let grid = req.body.grid;
    try {
        console.log("lob function hit", grid);
        res.status(200).json({ status: "lobbed"});
    }
    catch (err) {
        res.status(500).json({ status: 'reject', time: 'TIMESTAMPHERE'});
    }
};

module.exports = {
    lob
};