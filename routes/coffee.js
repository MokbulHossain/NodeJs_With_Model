const express = require('express');
const models = require( '../models/index');
const router = express.Router();

//select all.......
router.get('/coffee', (req, res)=> {
    models.Coffee.findAll()
    .then(function (coffee) {
      res.json(coffee);
    }).catch(e=>res.json(e))
  });

  //select by primary key like id
  router.get('/coffee/:id',(req,res)=>{
    models.Coffee.findByPk(req.params.id).then(coffee => res.json(coffee)).catch(e=>res.json(e))
  })
  

//create a new......
router.post('/coffee', (req, res)=> {
    models.Coffee.create({ 
        name: req.body.name,
    })
      .then(coffee =>  res.json(coffee));
  });

module.exports = router;