var mongoose = require("mongoose");
const Joi = require("@hapi/joi");

var productSchema = mongoose.Schema({
  tags: Array,
  title: String,
  price: Number,
});
var Product = mongoose.model("Product", productSchema);
function validateProduct(data) {
  const schema = Joi.object({
    tags: Joi.array().items(Joi.string().alphanum()),
    title: Joi.string().min(3).max(10).required(),
    price: Joi.number().min(3).required(),
  });
  return schema.validate(data, { abortEarly: false });
}
module.exports.Product = Product;
module.exports.validate = validateProduct;
