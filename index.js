const express = require('express')
const app = express();
app.use(express.json());

const apiRouter = require('./router/userRouter'); 

app.get('/', (req, res)=> {
    res.send("Welcome in node js");
});


app.use('/', apiRouter);



app.listen(8090)



