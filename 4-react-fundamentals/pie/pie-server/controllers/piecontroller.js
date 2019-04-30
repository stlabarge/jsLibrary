const router = require('express').Router();
const Pie = require('../db').import('../models/pie');
const validateSession = require('../middleware/validate-session');
// router.get('/', (req,res) => res.send('I love pie!'))

//get all
router.get('/',(req,res)=> {
    Pie.findAll()
        .then(pies => res.status(200).json(pies))
        .catch(err => res.status(500).json({ error : err }))
        //http status--> 200, 500
});

router.post('/', validateSession, (req,res)=> {
    const newPie = {
        nameOfPie : req.body.nameOfPie,
        baseOfPie : req.body.baseOfPie,
        crust : req.body.crust,
        timeToBake : req.body.timeToBake,
        servings : req.body.servings,
        rating : req.body.rating
    }
    Pie.create(newPie)
        .then(pie => res.status(200).json(pie))
        .catch(err => res.status(500).json({error : err}))

})
///
router.get('/:name', (req, res) => {
    Pie.findOne({ where: { nameOfPie: req.params.name }})
       //findone -> findOne   
    .then(pie => res.status(200).json(pie))
    .catch(err => res.status(500).json({ error: err}))
  })
 
  router.put('/:id', (req, res) => {
    Pie.update(req.body, { where: { id: req.params.id }})    
     .then(pie => res.status(200).json(pie))
     .catch(err => res.status(500).json({error: err}))
 })
////code up top updates --- > change in postman?

router.delete('/:id', (req,res) => {
    Pie.destroy({ where : { id : req.params.id }})
    .then(recChanged => res.status(200).json(recChanged))
    .catch(err => res.status(500).json({error: err}))
});


module.exports = router;