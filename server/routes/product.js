const Product = require("../models/Product");
const router = require("express").Router();

//CREATE
router.post("/", async (req, res) => {
  const newProduct = await Product.create(req.body);
      res.status(200).json(newProduct);

});

//UPDATE
router.patch("/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});
//DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET PRODUCT
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL PRODUCTS
router.get("/", async (req, res) => {
  const Brand = req.query.brand;
  const Category = req.query.category;
  const InStock = req.query.inStock;
  try {
    let products;
    if (Brand) {
      products = await Product.find({
        brand: {
          $in: Brand,
        },
      });
    } else if (Category) {
      products = await Product.find({
        category: {
          $in: Category,
        },
      });
    } else if (InStock) {
      products = await Product.find({
        inStock: {
          $in: InStock,
        },
      });
    } else {
      products = await Product.find().sort({ createdAt: 1 });
    }
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
