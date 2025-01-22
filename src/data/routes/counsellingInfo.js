const express = require('express');
const router = express.Router();
const {
  addCounsellingMembers,
  updateCounsellingMembers,
  deleteCounsellingMembers,
  getAllCounsellingMembers,
  bulkAddCounsellingMembers
} = require('../controllers/CounsellingMembersController');

router.post("/addCounsellingMembers", async (req, res) => {
  try {
    await addCounsellingMembers(req.body);
    res.status(200).json({ message: "Member added successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// New route for bulk upload
router.post("/bulkAddCounsellingMembers", async (req, res) => {
  try {
    const { members } = req.body;
    
    // Validate the request body
    if (!Array.isArray(members) || members.length === 0) {
      return res.status(400).json({ error: "Invalid request format. Expected array of members." });
    }

    // Validate each member object
    const requiredFields = ['name', 'roll_no', 'role', 'batch', 'email', 'student_type'];
    for (const member of members) {
      const missingFields = requiredFields.filter(field => !member[field]);
      if (missingFields.length > 0) {
        return res.status(400).json({
          error: `Missing required fields: ${missingFields.join(', ')} for member with roll number ${member.roll_no || 'unknown'}`
        });
      }
    }

    await bulkAddCounsellingMembers(members);
    res.status(200).json({ 
      message: `Successfully added ${members.length} members!`
    });
  } catch (error) {
    console.error('Error in bulk upload:', error);
    res.status(500).json({ 
      error: "Failed to process bulk upload",
      details: error.message 
    });
  }
});

router.put("/updateCounsellingMembers", async (req, res) => {
  try {
    await updateCounsellingMembers(req.body);
    res.status(200).json({ message: "Member updated successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

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

router.get("/getAllCounsellingMembers", async (req, res) => {
  try {
    await getAllCounsellingMembers(req, res);
  } catch (error) {
    console.error("Error in /getCounsellingMembers route:", error);
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;