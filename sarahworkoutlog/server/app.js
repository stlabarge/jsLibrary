require('dotenv').config();

var express = require('express'); //1
var app = express(); //2
var user = require('./controllers/usercontroller');
var sequelize = require('./db');
var bodyParser = require('body-parser');
//add header

sequelize.sync();
// sequelize.sync({force : true});  -->will clear database be careful!

app.use(bodyParser.json());

app.use(require('./middleware/headers'));

app.use('/user', user)

app.use(require('./middleware/validate-session'));


app.listen(3000, function () {
    console.log('ya made it! 3000') //5
});