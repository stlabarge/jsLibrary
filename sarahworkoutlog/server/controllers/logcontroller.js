var express = require('../node_modules/express')
var router = express.Router()      //1
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var Log = sequelize.import('../models/log')


router.get('/', (req, res) => {
    Log.findAll()
        .then(log => res.status(200).json(log))
        .catch(err => res.status(500).json({ error: err }))
    //http status--> 200, 500
});

router.post('/log', validateSession, (req, res) => {
    const newLog = {
        description: req.body.log.description,
        definition: req.body.log.definition,
        result: req.body.result,
        owner: req.user.id // req.user.id --> id number of user 
    }
    User.create(newLog)
        .then(log => res.status(200).json(log))
        .catch(err => res.status(500).json({ error: err }
        ))
})

router.get('/:id', (req, res) => {
    User.findOne({ where: { id: req.params.id, owner: req.user.id } })
        //findone -> findOne   
        .then(pie => res.status(200).json(pie))
        .catch(err => res.status(500).json({ error: err }))
})

router.get('/otherowners/:owner', (req, res) => {
    User.findAll({ where: { owner: req.params.owner } })
        //findone -> findOne   
        .then(pie => res.status(200).json(pie))
        .catch(err => res.status(500).json({ error: err }))
})

// ^^ finding other owners by id only --> would have to know the other oweners' ids

router.get('/alloneuser', (req, res) => {
    User.findAll({ where: { owner: req.user.id } })
        //findone -> findOne   
        .then(pie => res.status(200).json(pie))
        .catch(err => res.status(500).json({ error: err }))
})

router.put('/:id', (req, res) => { //put and delete similar response
    User.update(req.body, { where: { id: req.params.id, owner: req.user.id } }) // params used for /:id __> whe ya see /:
        .then(newUpdate => res.status(200).json('update complete'))
        .catch(err => res.status(500).json({ error: err }))
})
////code up top updates --- > change in postman?

router.delete('/:id', (req, res) => {
    User.destroy({ where: { id: req.params.id, owner: req.user.id } })
        .then(newDelete => res.status(200).json('deleted item'))
        .catch(err => res.status(500).json({ error: err }))
})

module.exports = router;