const express = require('express');
const router = express.Router();
const {
  addHostelMembers,
  updateHostelMembers,
  deleteHostelMembers,
  getAllHostelMembers
} = require('../controllers/HostelMembersController')

router.post("/addHostelMembers", async (req, res) => {
  try {
    await addHostelMembers(req.body);
    res.status(200).json({ message: "Member added successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// Update non-faculty information
router.put("/updateHostelMembers", async (req, res) => {
  try {
    await updateHostelMembers(req.body);
    res.status(200).json({ message: "Member updated successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// Delete a non-faculty member
router.delete("/deleteHostelMembers", async (req, res) => {
  try {
    const { id } = req.body;
    await deleteHostelMembers(id);
    res.status(200).json({ message: "Member deleted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

//Get all non faculties
router.get("/getAllHostelMembers", async (req, res) => {
  try {
    // Pass `req` and `res` to `getHostelMembers` so it can handle the response
    await getAllHostelMembers(req, res);
  } catch (error) {
    console.error("Error in /getHostelMembers route:", error);
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
