require('dotenv').config();

var express = require('express'); //1
var app = express(); //2
var test = require('./controllers/testcontroller');//1
var authTest = require('./controllers/authtestcontroller');
var user = require('./controllers/usercontroller');
var sequelize = require('./db');
var bodyParser = require('body-parser');


sequelize.sync();

app.use(bodyParser.json());

app.use(require('./middleware/headers'));

app.use('/test', test)

app.use('/api/user', user)

app.use(require('./middleware/validate-session'));

app.use('/authtest', authTest)



app.listen(3000, function () {
    console.log('ya made it!') //5
});