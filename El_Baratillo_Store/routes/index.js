var express = require('express');
var router = express.Router();
var data = require("../database/data.js");

/* GET home page. */
router.get('/categories', function(req, res, next) {
  res.json(data);
});

module.exports = router;

/* GET specific category */
router.get('/category/:id', function(req, res, next) {
  const idCategory = req.params.id;

  let category = data.find( (item) => item.id === idCategory);

  if(category === undefined){
    res.json({
      message: "Not found category"
    });

  } else{
    res.json(category);

  }

  res.json(category);
});


/* GET specific product */
router.get('/category/:idCategory/product/:idProduct', function(req, res, next) {
  const idCategory = req.params.idCategory;
  const idProduct = req.params.idProduct;

  let category = data.find( (item) => item.id === idCategory);

  if(category === undefined){
    res.json({
      message: "Not found product"
    });

  } else{
   
    let product = category.products.find( (item) => item.id === idProduct);
    res.json(product);

  }

  
  
});

module.exports = router;
