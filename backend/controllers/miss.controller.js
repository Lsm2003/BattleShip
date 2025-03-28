const miss = async (req, res) => {
    try {
        console.log("miss function hit")
        res.status(200).json({ status: "missed"});
    }
    catch (err) {
        res.status(500).json({ status: 'reject'});
    }
};

module.exports = {
    miss
};