let data = [];
const userInfo = (req, res) => {
    res.send("Hi, I am Chetan");
}

const creatUser =  (req, res) => {
    console.log(req.body);
    data.push(req.body);
    res.send("User created");
}

const getUser = (req, res) => {
    res.send(data);
}

module.exports = {
    userInfo,
    creatUser,
    getUser
}