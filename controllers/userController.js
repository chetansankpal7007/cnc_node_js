let data = [];
const userInfo = (req, res) => {
    res.send("Hi, I am Chetan");
}

const creatUser =  (req, res) => {
    data.push(req);
    res.status(200).send("User created");
}

const getUser = (req, res) => {
    try {
        res.send(data);
    } catch (error) {
        res.status(500).send("plz try later, have same isuue");
    }
}

module.exports = {
    userInfo,
    creatUser,
    getUser
}