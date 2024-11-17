const express = require('express');
const router = express.Router();
const {
  addCounsellingMembers,
  updateCounsellingMembers,
  deleteCounsellingMembers,
  getAllCounsellingMembers
} = require('../controllers/CounsellingMembersController')

router.post("/addCounsellingMembers", async (req, res) => {
  try {
    await addCounsellingMembers(req.body);
    res.status(200).json({ message: "Member added successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// Update non-faculty information
router.put("/updateCounsellingMembers", async (req, res) => {
  try {
    await updateCounsellingMembers(req.body);
    res.status(200).json({ message: "Member updated successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// Delete a non-faculty member
router.delete("/deleteCounsellingMembers", async (req, res) => {
  try {
    const { id } = req.body;
    await deleteCounsellingMembers(id);
    res.status(200).json({ message: "Member deleted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

//Get all non faculties
router.get("/getAllCounsellingMembers", async (req, res) => {
  try {
    // Pass `req` and `res` to `getCounsellingMembers` so it can handle the response
    await getAllCounsellingMembers(req, res);
  } catch (error) {
    console.error("Error in /getCounsellingMembers route:", error);
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
