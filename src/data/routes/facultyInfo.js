const express = require("express");
const router = express.Router();
const {
  getFacultyHonors,
  getFacultyQualifications,
  getFacultyExperience,
  getFacultyAdminPosition,
  getFacultyBasicInfo,
  getAllFaculties,
  getFacultyCourses,
  getSpecialization,
  getProjects,
  getBooks,
  getPublications,
  getConferences,
  getStudents
} = require("../controllers/FacultyInfoController"); // Update with the actual module name if it's different

// Route 1: Get Faculty Honors
router.get("/faculty/:userId/honors", async (req, res) => {
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
router.get("/faculty/:userId/qualifications", async (req, res) => {
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
router.get("/faculty/:userId/experience", async (req, res) => {
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
router.get("/faculty/:userId/admin-position", async (req, res) => {
  const { userId } = req.params;
  try {
    const adminPosition = await getFacultyAdminPosition(userId);
    res.status(200).json(adminPosition);
  } catch (error) {
    console.error("Error fetching faculty administrative position:", error);
    res
      .status(500)
      .json({ error: "Error fetching faculty administrative position" });
  }
});
// Route 4: Faculty Basic Info
router.get("/faculty/:userId/faculty-basic-info", async (req, res) => {
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
router.get("/faculty/:branch_id/getAllFaculties", async (req, res) => {
  const { branch_id } = req.params;
  try {
    const adminPosition = await getAllFaculties(branch_id);
    res.status(200).json(adminPosition);
  } catch (error) {
    console.error("Error fetching faculty Basic info:", error);
    res.status(500).json({ error: "Error fetching faculty Basic info" });
  }
});

router.get("/faculty/:userId/currentCourses", async (req, res) => {
  const { userId } = req.params;
  try {
    const honors = await getFacultyCourses(userId);
    res.status(200).json(honors);
  } catch (error) {
    console.error("Error fetching faculty courses:", error);
    res.status(500).json({ error: "Error fetching faculty courses" });
  }
});

router.get("/faculty/:userId/specialization", async (req, res) => {
  const { userId } = req.params;
  try {
    const honors = await getSpecialization(userId);
    res.status(200).json(honors);
  } catch (error) {
    console.error("Error fetching faculty courses:", error);
    res.status(500).json({ error: "Error fetching faculty courses" });
  }
});

router.get("/faculty/:userId/projects", async (req, res) => {
  const { userId } = req.params;
  try {
    const honors = await getProjects(userId);
    res.status(200).json(honors);
  } catch (error) {
    console.error("Error fetching faculty projects:", error);
    res.status(500).json({ error: "Error fetching faculty projects" });
  }
});


router.get("/faculty/:userId/books", async (req, res) => {
  const { userId } = req.params;
  try {
    const honors = await getBooks(userId);
    res.status(200).json(honors);
  } catch (error) {
    console.error("Error fetching faculty books:", error);
    res.status(500).json({ error: "Error fetching faculty books" });
  }
});


router.get("/faculty/:userId/publications", async (req, res) => {
  const { userId } = req.params;
  try {
    const honors = await getPublications(userId);
    res.status(200).json(honors);
  } catch (error) {
    console.error("Error fetching faculty publications:", error);
    res.status(500).json({ error: "Error fetching faculty publications" });
  }
});


router.get("/faculty/:userId/conferences", async (req, res) => {
  const { userId } = req.params;
  try {
    const honors = await getConferences(userId);
    res.status(200).json(honors);
  } catch (error) {
    console.error("Error fetching faculty conferences:", error);
    res.status(500).json({ error: "Error fetching faculty conferences" });
  }
});


router.get("/faculty/:userId/students", async (req, res) => {
  const { userId } = req.params;
  try {
    const honors = await getStudents(userId);
    res.status(200).json(honors);
  } catch (error) {
    console.error("Error fetching faculty students:", error);
    res.status(500).json({ error: "Error fetching faculty students" });
  }
});

module.exports = router;
