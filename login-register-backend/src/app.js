const express = require("express");
const cors = require("cors");
require("./db/conn");
const Router = require("./routes/loginroute");

const app = express();  //call express using app var wherever needed
const port = process.env.PORT || 8081;   //it will provide proper port wherever you host

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use(Router);

app.listen(port,() => {
    console.log(`connection is setup at ${port}`)
})