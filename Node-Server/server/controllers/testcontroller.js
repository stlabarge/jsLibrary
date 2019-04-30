var express = require('express'); //1
var router = express.Router();
var sequelize = require('../db');
var TestModel = sequelize.import('../models/test')

//3    //4   //5          //6
router.get('/', function (req, res) {
    //7
    res.send('Hey!!! This is a test route!');
});

router.get('/about', function (req, res) {
    res.send('This is an about route');
});

router.get('/contact', function (req, res) {
    res.send({ user: "Katie", email: "hiImKatieAndImLame@oregonsmells.com" });
});

router.get('/projects', function (req, res) {
    res.send(['Guitar App', 'Pie Client', 'Workout Log']);
});

router.get('/mycontacts', function (req, res) {
    res.send([
        { user: "Sarah", email: "DontworryImLameToo@screamoband4life.com" },
        { user: "Autumn", email: "ItsnotAmber@alsoabully.com" },
        { user: "Becky", email: "FingergunDesperado@lol.com" },
        { user: "Ing", email: "DontCallMeIngrid?@guessing.com" },
    ])
});
/****************************************
 * Controller Method #1: Simple Response
****************************************/
router.post('/one', function (req, res) {
    //3
    res.send("Test 1 went through!")
});

/****************************************
 * Controller Method #2: Persisting Data
****************************************/
router.post('/two', function (req, res) {
    let testData = "Test data for endpoint two"; //2

    TestModel //3
        .create({ //4
            //6
            testdata: testData //5
        }).then(dataFromDatabase => {
            res.send("Test two went through!")
        })
});

/****************************************
 * Controller Method #3: req.body
****************************************/
router.post('/three', function (req, res) {
    //1
    var testData = req.body.testdata.item;

    TestModel
        .create({ //2
            testdata: testData
        })
    res.send("Test three went through!")
    console.log("Test three went through!")
});

//STEP 4 - Use this with Postman
router.post('/four', function (req, res) {
    var testData = req.body.testdata.item;
    TestModel
        .create({
            testdata: testData
        })
        .then( //1
            function message() { //2
                res.send("Test 4 went through!");
            }
        );
});

/*********************
 * Route 5: Return data in a Promise
 **********************/
router.post('/five', function (req, res) {
    var testData = req.body.testdata.item;
    TestModel
        .create({
            testdata: testData
        })
        .then(              //1
            function message(data) {
                res.send(data);  //2
            }
        );
});

/*********************
 * Route 6: Return response as JSON
 **********************/
router.post('/six', function (req, res) {
    var testData = req.body.testdata.item;
    TestModel
        .create({
            testdata: testData
        })
        .then(
            function message(testdata) {
                res.json({ //1
                    testdata: testdata  //2
                });
            }
        );
});

/*********************
 * Route 7: Handle errors
 **********************/
router.post('/seven', function (req, res) {
    var testData = req.body.testdata.item;

    TestModel
        .create({
            testdata: testData
        })
        .then(
            function createSuccess(testdata) {
                res.json({
                    testdata: testdata
                });

            },
            function createError(err) { //1
                res.send(500, err.message);
            }
        );
});
/************************
* GET:  Get simple message from server
***********************/
router.get('/helloclient', function (req, res) {
    res.send('This is a message from the server to the client.')
})
/************************
 * GET:  /one
 ***********************/
router.get('/one', function (req, res) {

    TestModel
        .findAll({ //1
            attributes: ['id', 'testdata']
        })
        .then(
            function findAllSuccess(data) {
                console.log("Controller data:", data);
                res.json(data);
            },
            function findAllError(err) {
                res.send(500, err.message);
            }
        );
});

module.exports = router;

