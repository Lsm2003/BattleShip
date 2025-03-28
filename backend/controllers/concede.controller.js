const concede = async (req, res) => {
    try {
        console.log("game condeded")
        res.status(200).json({ status: "ended", message: 'I win. Thank you for playing.', cycle: 0, duration: 'TIMESTAMPHERE', myfleet: 'ARRAY', yourfleet: 'ARRAY', time: 'TIMESTAMPHERE' });
    }
    catch (err) {
        res.status(500).json({ status: 'reject'});
    }
};

module.exports = {
    concede
};