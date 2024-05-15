const express = require("express");
const router = express.Router();
const Category = require("../models/Category.js");

//yeni bir kategori olusturma (create)

router.post("/", async (req, res) => {
  try {
    const { name, img } = req.body;

    const newCategory = new Category({ name, img });
    await newCategory.save();

    res.status(201).json(newCategory);
  } catch (error) {
    console.log(error);
  }
});

// Tüm kategorileri getirme (Read - All)
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: "Server error." });
  }
});

//belirli bir kategoriyi getirme (Read - Single)
router.get("/:categoryId", async (req, res) => {
  try {
    const categoryId = req.params.categoryId;

    try {
      const category = await Category.findById(categoryId);

      res.status(200).json(category);
    } catch (error) {
      res.status(404).json({ error: "Category not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error." });
  }
});

//kategory guncelleme (Update)
router.put("/:categoryId", async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const updates = req.body;

    const existingCategory = await Category.findById(categoryId);
    if(!existingCategory){
      return res.status(404).json({ error: "Category not found" });
    }

    const updatedCategory = await Category.findByIdAndUpdate(
      categoryId,
      updates,
      { new: true }
    );

    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;
