const { ProductModel } = require("../Models/Product.model");

const addProduct = async (req, res) => {
  const { title, priority, description, quantity} = req.body;
  let productExists;

  try {
    productExists = await ProductModel.findOne({title});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "failed to add" });
  }

  if (productExists) {
    return res.status(500).json({ msg: "Task already present" });
  }

  const newProduct = new ProductModel({
    title,
    quantity,
    priority,
    description,
    dateTime: new Date(),
    bookmarked: false,
  });

  try {
    await newProduct.save();
    return res.status(200).json(newProduct);
  } catch (error) {
    console.log(error);
    return res.status(404).json(error);
  }
};

const getProduct = async (req, res) => {
  let data;
  try {
    data = await ProductModel.find();
  } catch (error) {
    console.log(error);
    return res.status(404).json(error);
  }

  if (data) {
    return res.status(200).json(data);
  }
  return res.status(404).json({ msg: "no data found" });
};

module.exports = {
  getProduct,
  addProduct,
};
