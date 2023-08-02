const userLogin = (req, res) => {
    let data = "userLogin API called";
    console.log("userLogin API called");
    res.json(data);
}

module.exports = {
    userLogin
}