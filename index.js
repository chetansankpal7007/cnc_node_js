const express  = require('express');
const cors = require('cors');
let http = require('http');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const router = require('./router/apiRouter.js');

app.use('/user', router);


app.get('/', (req,  res)=>{
    let data = "welcome to chetan sankpal class";
    console.log("API called");
    res.json(data);
});



http.createServer(app).listen(8090);