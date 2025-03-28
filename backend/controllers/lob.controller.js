const lob = async (req, res) => {
    try {
        console.log("lob function hit")
        res.status(200).json({ status: "lobbed"});
    }
    catch (err) {
        res.status(500).json({ status: 'reject'});
    }
};

module.exports = {
    lob
};