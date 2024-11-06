const Product = require("../Model/Product");
const Category = require("../Model/Category");
const createProduct = async (req, res) => {
  try {
    const { name, description, price, stock, categoryId } = req.body;
    if (!name || !description || !price || !stock || !categoryId) {
      return res.status(400).json({
        status: "fail",
        message: "All fields are required",
      });
    }

    // check if category exists in the database
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({
        status: "fail",
        message: "Category not found",
      });
    }

    // create a new product in the database
    const newProduct = new Product({
      name,
      description,
      price,
      stock,
      category: category._id,
    });

    await newProduct.save();
    res.status(201).json({
      status: "success",
      message: "Product created successfully",
      data: newProduct,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getProducts = async (req, res) => {
  try {
    // get all products from the database
    const products = await Product.find();
    res.status(200).json({
      status: "success",
      data: products,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { createProduct, getProducts };
