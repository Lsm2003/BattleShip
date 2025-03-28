const status = async (req, res) => {
    try {
        console.log("Status check")
        res.status(200).json({ status: "status hit"});
    }
    catch (err) {
        res.status(500).json({ status: 'reject'});
    }
};

module.exports = {
    status
};