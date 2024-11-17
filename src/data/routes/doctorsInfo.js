const express = require('express');
const router = express.Router();
const {
  addDoctorsInfo,
  updateDoctorsInfo,
  deleteDoctorsInfo,
  getAllDoctors,
} = require('../controllers/DoctorsInfoController')

router.post("/addDoctorsInfo", async (req, res) => {
  try {
    await addDoctorsInfo(req.body);
    res.status(200).json({ message: "Doctor added successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// Update non-faculty information
router.put("/updateDoctorsInfo", async (req, res) => {
  try {
    await updateDoctorsInfo(req.body);
    res.status(200).json({ message: "Doctor updated successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// Delete a non-faculty member
router.delete("/deleteDoctorsInfo", async (req, res) => {
  try {
    const { id } = req.body;
    await deleteDoctorsInfo(id);
    res.status(200).json({ message: "Doctor deleted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

//Get all non faculties
router.get("/getAllDoctors", async (req, res) => {
  try {
    // Pass `req` and `res` to `getAllDoctors` so it can handle the response
    await getAllDoctors(req, res);
  } catch (error) {
    console.error("Error in /getAllDoctors route:", error);
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
