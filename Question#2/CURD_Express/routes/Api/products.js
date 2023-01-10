const express = require("express");
let router = express.Router();
var { Product } = require("../../models/product");

router.get("/", async (req, res) => {
  let products = await Product.find();
  return res.send(products);
});

router.get("/:id", async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    return res.status(200).send(product);
  } catch (error) {
    return res.status(400).send("You enter the invalid id");
  }
});

router.put("/:id", async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    product.tags = req.body.tags;
    product.title = req.body.title;
    product.price = req.body.price;
    await product.save();
    return res.status(200).send(product);
  } catch (error) {
    return res.status(400).send("Invalid ID");
  }
});

router.delete("/:id", async (req, res) => {
  let product = await Product.findByIdAndDelete(req.params.id);
  return res.send(product);
});

router.post("/", async (req, res) => {
  let product = new Product();
  product.tags = req.body.tags;
  product.title = req.body.title;
  product.price = req.body.price;
  await product.save();
  return res.status(200).send(product);
});
module.exports = router;
