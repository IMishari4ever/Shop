const router = require("express").Router();
const Bag = require("../models/Bag");


//CREATE
router.post("/", async (req, res) => {
  const newBag = new Bag(req.body);
  try {
    const savedBag = await newBag.save();
    res.status(200).json(savedBag);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedBag = await Bag.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedBag);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Bag.findByIdAndDelete(req.params.id);
    res.status(200).json("Bag has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER BAG
router.get("/find/:userId", async (req, res) => {
  try {
    const bag = await Bag.findOne({ userId: req.params.userId });
    res.status(200).json(bag);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL
router.get("/", async (req, res) => {
  try {
    const bags = await Bag.find();
    res.status(200).json(bags);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
