const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
require("./db/connection");
const studentRouter = require("./routers/student");
app.use(express.json());
app.use(studentRouter);

//models



app.listen(port, ()=>{
    console.log("The connection is set up at port: ", port);
});