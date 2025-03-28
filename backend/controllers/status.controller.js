const status = async (req, res) => {
    try {
        console.log("Status check")
        res.status(200).json({ status: "in progress", cycle: 0, duration: 0, myfleet: 'ARRAY', yourfleet: 'ARRAY', time: 'TIMESTAMPHERE' });
    }
    catch (err) {
        res.status(500).json({ status: 'reject', time: 'TIMESTAMPHERE'});
    }
};

module.exports = {
    status
};