const cancel = async (req, res) => {
    try {
        console.log("game canceled")
        res.status(200).json({ status: "ended", message: 'Game Over. Thank you for playing.', cycle: 0, duration: 'TIMESTAMPHERE', myfleet: 'ARRAY', yourfleet: 'ARRAY', time: 'TIMESTAMPHERE' });
    }
    catch (err) {
        res.status(500).json({ status: 'reject', time: 'TIMESTAMPHERE'});
    }
};

module.exports = {
    cancel
};