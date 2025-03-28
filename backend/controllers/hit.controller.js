const hit = async (req, res) => {
    try {
        console.log("hit function hit")
        res.status(200).json({ status: "ok"});
    }
    catch (err) {
        res.status(500).json({ status: 'reject', message: 'Unexpected', time: 'TIMESTAMPHERE'});
    }
};

module.exports = {
    hit
};