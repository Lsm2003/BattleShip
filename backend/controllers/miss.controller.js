const miss = async (req, res) => {
    try {
        console.log("miss function hit")
        res.status(200).json({ status: "ok"});
    }
    catch (err) {
        res.status(500).json({ status: 'reject', message: 'Unexpected', time: 'TIMESTAMPHERE'});
    }
};

module.exports = {
    miss
};