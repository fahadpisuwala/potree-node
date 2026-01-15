const express = require("express");
const router = express.Router();
const Annotation = require("../models/Annotation");

// GET all
router.get("/", async (req, res) => {
  const data = await Annotation.find();
  res.json(data);
});

// POST new
router.post("/", async (req, res) => {
  const annotation = new Annotation(req.body);
  await annotation.save();
  res.json(annotation);
});

// DELETE by id
router.delete("/:id", async (req, res) => {
  const deleted = await Annotation.findOneAndDelete({ potreeid: req.params.id });

  if (!deleted) {
    return res.status(404).json({ error: "Not found" });
  }

  res.json({ success: true });
});

// DELETE all
router.delete("/", async (req, res) => {
  await Annotation.deleteMany({});
  res.json({ success: true });
});

module.exports = router;
