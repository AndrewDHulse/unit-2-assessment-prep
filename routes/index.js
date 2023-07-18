var express = require('express');
const { cars } = require('../data/cars');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {cars});
});

router.post('/', function(req,res){
  cars.push({
    make: req.body.make,
    model: req.body.model,
    fullTank: true,
  })
  res.redirect('/');
})

module.exports = router;
