const express = require("express");
const router = express.Router();
const {
  deletePositions,
  addPositions,
  updatePositions,
  getAllPositions,
} = require("../controllers/PositionsController");

// GET route to fetch positions based on position_type
router.get("/getAllPositions", (req, res) => {
  const { position_type } = req.query;
  return getAllPositions(req, res, { position_type });
});

// POST route to add new position
router.post("/addPositions", async (req, res) => {
  try {
    const { id, role, imp, email, isFaculty, position_type } = req.body;
    await addPositions({ id, role, imp, email, isFaculty, position_type });
    res.status(200).json({ message: "Position added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});
///yehi i hai error
// PUT route to update position
router.put("/updatePositions", async (req, res) => {
  try {
    const { id, role, imp, email, isFaculty, position_type } = req.body;
    await updatePositions({ id, role, imp, email, isFaculty, position_type });
    res.status(200).json({ message: "Position updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// DELETE route to remove position
router.delete("/deletePositions", async (req, res) => {
  try {
    const { id, isFaculty, position_type } = req.body;
    await deletePositions(id, isFaculty, position_type);
    res.status(200).json({ message: "Position deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;