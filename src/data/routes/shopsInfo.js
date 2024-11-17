const express = require('express');
const router = express.Router();
const {
  addShops,
  updateShops,
  deleteShops,
  getAllShops
} = require('../controllers/ShopsController')

router.post("/addShops", async (req, res) => {
  try {
    await addShops(req.body);
    res.status(200).json({ message: "Shop added successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// Update non-faculty information
router.put("/updateShops", async (req, res) => {
  try {
    await updateShops(req.body);
    res.status(200).json({ message: "Shop updated successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// Delete a non-faculty member
router.delete("/deleteShops", async (req, res) => {
  try {
    const { id } = req.body;
    await deleteShops(id);
    res.status(200).json({ message: "Shop deleted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

//Get all non faculties
router.get("/getAllShops", async (req, res) => {
  try {
    // Pass `req` and `res` to `getShops` so it can handle the response
    await getAllShops(req, res);
  } catch (error) {
    console.error("Error in /getShops route:", error);
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
