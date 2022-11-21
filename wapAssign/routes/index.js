var express = require('express');
var router = express.Router();
const product=require("../module/product"); //using the module product
const path= require("path");

router.use("views", express.static(path.join(__dirname, "views")));

let cartItems=[];
let items= [new product("0", "Jacket" ,75, "Snow is coming"),
new product("1", "Shoes" ,70, "Take care of ur leg as well"),
new product("2", "Glove" ,12, "What about your hands")
];

router.get('/', (req,res)=>{
  res.render("product",{itemList:items});
})

router.get("/addToCart", (req,res) => {
  let value = req.query.pId;
  let itemInCart = items.filter(item=>item.id==value)[0];
  cartItems.push(itemInCart);
  res.redirect("/")
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post("/shoppingCart", (req, res) => {
  res.render("shoppingcart",{
      itemsInCart:cartItems
  })
});

module.exports = router;
