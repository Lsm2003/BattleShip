const hit = async (req, res) => {
    try {
        console.log("hit function hit")
        res.status(200).json({ status: "hit"});
    }
    catch (err) {
        res.status(500).json({ status: 'reject'});
    }
};

module.exports = {
    hit
};