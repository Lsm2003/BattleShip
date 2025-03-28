const concede = async (req, res) => {
    try {
        console.log("game condeded")
        res.status(200).json({ status: "condeded"});
    }
    catch (err) {
        res.status(500).json({ status: 'reject'});
    }
};

module.exports = {
    concede
};