 router.get('/name', (req, res) => {
   Pie.findOne({ where: { nameOfPie: req.params.nameOfPie }})
      //findone -> findOne   
   .then(pie => res.status(200).json(pie))
     .catch(err => res.status(500).json({ error: err}))
 })

 router.put('/:id', (req, res) => {
   pie.update(req.body, { where: { id: req.body.id }})    
    .then(pie => res.status(200).json(pie))
    .catch(err => res.status(500).json({error: err}))
})