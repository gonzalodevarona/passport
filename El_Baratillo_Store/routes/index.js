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
  
  let idCategoryInt = parseInt(idCategory);

  let category = data.find( (item) => item.id === idCategoryInt);

  if(category === undefined){
    res.json({
      message: "Not found category"
    });

  } else{
    res.json(category);

  }

  
});


/* GET specific product */
router.get('/category/:idCategory/product/:idProduct', function(req, res, next) {
  const idCategory = req.params.idCategory;
  const idProduct = req.params.idProduct;

  let idCategoryInt = parseInt(idCategory);

  let category = data.find( (item) => item.id === idCategoryInt);

  if(category === undefined){
    res.json({
      message: "Not found product"
    });

  } else{
    let idProductInt = parseInt(idProduct);

    let product = category.products.find( (item) => item.id === idProductInt);

    if(product === undefined){
      res.json({
        message: "Not found product"
      });
    } else{
      res.json(product);
  
    }

  }

  
  
});

module.exports = router;
