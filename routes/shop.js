const express = require('express');
const models = require( '../models/index');
const router = express.Router();

//select all.......
router.get('/shop', async (req, res)=> {
        //get one or more attributes....
    //models.Shop.findAll({ include: [models.Coffee],attributes: ['id','createdAt'], where: {id: 62} })
        //get all like *  attributes....
    models.Shop.findAll({ 
       include: [{
                  model: models.Coffee,
                  attributes: ['id'],
                }]
  }).then(function (shop) {
      res.json(shop);
    }).catch(e=>res.json(e))
  });

  //select by primary key like id
  router.get('/shop/:id',(req,res)=>{
    models.Shop.findByPk(req.params.id).then(shop => res.json(shop)).catch(e=>res.json(e))
  })
  

//create a new......
router.post('/shop', (req, res)=> {
    models.Shop.create({ 
        name: req.body.name,
    })
      .then(shop =>  res.json(shop));
  });

module.exports = router;