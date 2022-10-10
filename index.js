
const express = require("express");      // Fazendo requisição ao express
const morgan = require("morgan");        // Fazendo requisição ao morgan
const cors = require("cors");            // Fazendo requisição ao cors
const bodyParser = require("body-parser");// Fazendo requisição ao bodyParse


const app = express();

app.use(morgan("dev"))
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

app.listen(21262, () => {
    console.log(`Express started att https://localhost:21262`);
})
