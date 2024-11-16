const express = require('express');
const router = express.Router();
const {
  addNonFacultyInfo,
  updateNonFacultyInfo,
  deleteNonFacultyInfo,
  getAllNonFaculty,
} = require('../controllers/NonFacultyInfoController')

router.post("/addNonFacultyInfo", async (req, res) => {
  try {
    await addNonFacultyInfo(req.body);
    res.status(200).json({ message: "Member added successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// Update non-faculty information
router.put("/updateNonFacultyInfo", async (req, res) => {
  try {
    await updateNonFacultyInfo(req.body);
    res.status(200).json({ message: "Member updated successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// Delete a non-faculty member
router.delete("/deleteNonFacultyInfo", async (req, res) => {
  try {
    const { id } = req.body;
    await deleteNonFacultyInfo(id);
    res.status(200).json({ message: "Member deleted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

//Get all non faculties
router.get("/getAllNonFaculty", async (req, res) => {
  try {
    // Pass `req` and `res` to `getAllNonFaculty` so it can handle the response
    await getAllNonFaculty(req, res);
  } catch (error) {
    console.error("Error in /getAllNonFaculty route:", error);
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
