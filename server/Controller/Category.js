const Category = require("../Model/Category");

const createCategory = async (req, res) => {
  try {
    const { name, parentId } = req.body;
    if ((!name, parentId)) {
      return res
        .status(400)
        .json({ status: "error", message: "All fields are required" });
    }
    const newCategory = new Category({ name, parentId });
    await newCategory.save();
    res.status(201).json({
      status: "success",
      message: "Category created successfully",
      data: newCategory,
    });
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
};
