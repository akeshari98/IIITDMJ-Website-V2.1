const express = require("express");
const pool = require("../connection");
const router = express.Router();

// Utility function to get committee data
const getLinks = async (type, res) => {
  try {
    const query = `
      SELECT * 
      FROM links 
      WHERE link_type = $1
      ORDER BY id;
    `;
    const result = await pool.query(query, [type]);

    res.status(200).json(result.rows);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

router.get("/bogminutes", (req, res) => { getLinks('bog_minutes', res); });
router.get("/bogagenda", (req, res) => { getLinks('bog_agenda', res); });
router.get("/fcminutes", (req, res) => { getLinks('fc_minutes', res); });
router.get("/fcagenda", (req, res) => { getLinks('fc_agenda', res); });
router.get("/senateminutes", (req, res) => { getLinks('senate_minutes', res); });
router.get("/senateagenda", (req, res) => { getLinks('senate_agenda', res); });


module.exports = router;

