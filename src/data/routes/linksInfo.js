const express = require("express");
const router = express.Router();
const {
  deleteLinks,
  addLinks,
  updateLinks,
  getAllLinks,
} = require("../controllers/LinksController");

// GET route to fetch positions based on link_type
router.get("/getAllLinks", (req, res) => {
  const { link_type } = req.query;
  return getAllLinks(req, res, { link_type });
});

// POST route to add new position
router.post("/addLinks", async (req, res) => {
    try {
      const { name, href, link_type } = req.body;
      await addLinks({ name, href, link_type });
      res.status(200).json({ message: "Position added successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  });
///yehi i hai error
// PUT route to update position
router.put("/updateLinks", async (req, res) => {
  try {
    const { id, name, href, link_type } = req.body;
    await updateLinks({ id, name, href, link_type });
    res.status(200).json({ message: "Link updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// DELETE route to remove position
router.delete("/deleteLinks", async (req, res) => {
  try {
    const { id, link_type } = req.body;
    await deleteLinks({id, link_type});
    res.status(200).json({ message: "Link deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;