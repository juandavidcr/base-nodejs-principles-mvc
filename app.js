require("dotenv").config()
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const dbConnect= require('./config/mongo')
const port = process.env.PORT || 3001;

/*
* Aqui invocamos las rutas
*/

app.use("/api",require("./routes"))

app.listen(port,()=>{
    console.log(`http:localhost:${port}`);
})
dbConnect();