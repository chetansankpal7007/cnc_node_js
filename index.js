const express = require('express')
const app = express();
app.use(express.json());
const mongose = require("mongoose");

const apiRouter = require('./router/userRouter'); 

app.get('/', (req, res)=> {
    res.send("Welcome in node js");
});


app.use('/', apiRouter);




mongose.connect("mongodb://localhost:27017/").then(()=>{
    console.log("mongodb connected");
    app.listen(8090, ()=> {
        console.log("Node js Appliction is Runing");
    })
}).catch((error)=> {
    console.log("DB not connected", error);
})





