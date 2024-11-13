const express = require('express');
const router = express.Router();
const {
  getFacultyHonors,
  getFacultyQualifications,
  getFacultyExperience,
  getFacultyAdminPosition,
  getFacultyBasicInfo,
  getAllFaculties
} = require('../controllers/FacultyInfoController'); // Update with the actual module name if it's different

// Route 1: Get Faculty Honors
router.get('/faculty/:userId/honors', async (req, res) => {
  const { userId } = req.params;
  try {
    const honors = await getFacultyHonors(userId);
    res.status(200).json(honors);
  } catch (error) {
    console.error("Error fetching faculty honors:", error);
    res.status(500).json({ error: "Error fetching faculty honors" });
  }
});

// Route 2: Get Faculty Qualifications
router.get('/faculty/:userId/qualifications', async (req, res) => {
  const { userId } = req.params;
  try {
    const qualifications = await getFacultyQualifications(userId);
    res.status(200).json(qualifications);
  } catch (error) {
    console.error("Error fetching faculty qualifications:", error);
    res.status(500).json({ error: "Error fetching faculty qualifications" });
  }
});

// Route 3: Get Faculty Professional Experience
router.get('/faculty/:userId/experience', async (req, res) => {
  const { userId } = req.params;
  try {
    const experience = await getFacultyExperience(userId);
    res.status(200).json(experience);
  } catch (error) {
    console.error("Error fetching faculty experience:", error);
    res.status(500).json({ error: "Error fetching faculty experience" });
  }
});

// Route 4: Get Faculty Administrative Position
router.get('/faculty/:userId/admin-position', async (req, res) => {
  const { userId } = req.params;
  try {
    const adminPosition = await getFacultyAdminPosition(userId);
    res.status(200).json(adminPosition);
  } catch (error) {
    console.error("Error fetching faculty administrative position:", error);
    res.status(500).json({ error: "Error fetching faculty administrative position" });
  }
});
// Route 4: Faculty Basic Info
router.get('/faculty/:userId/faculty-basic-info', async (req, res) => {
  const { userId } = req.params;
  try {
    const adminPosition = await getFacultyBasicInfo(userId);
    res.status(200).json(adminPosition);
  } catch (error) {
    console.error("Error fetching faculty Basic info:", error);
    res.status(500).json({ error: "Error fetching faculty Basic info" });
  }
});
// Route 5: Get All faculties of a branch
router.get('/faculty/:branch_id/getAllFaculties', async (req, res) => {
  const { branch_id } = req.params;
  try {
    const adminPosition = await getAllFaculties(branch_id);
    res.status(200).json(adminPosition);
  } catch (error) {
    console.error("Error fetching faculty Basic info:", error);
    res.status(500).json({ error: "Error fetching faculty Basic info" });
  }
});

module.exports = router;
