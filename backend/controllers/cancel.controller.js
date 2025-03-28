const cancel = async (req, res) => {
    try {
        console.log("game canceled")
        res.status(200).json({ status: "canceled"});
    }
    catch (err) {
        res.status(500).json({ status: 'reject'});
    }
};

module.exports = {
    cancel
};