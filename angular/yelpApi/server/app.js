const express = require('express');
const app = express();
const info = require("./infocontroller");
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(require("./middleware/headers"));

app.use("/info", info)

app.listen(3000, function () {
    console.log('ya made it! 3000') //5
})

