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


const getLinks2 = async (type, res) => {
  try {
    const query = `
      SELECT * 
      FROM ${type} 
      ORDER BY id DESC;
    `;
    const result = await pool.query(query);

    res.status(200).json(result.rows);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

router.get("/annual_report", (req, res) => { getLinks2('annual_report', res); });
router.get("/annual_account", (req, res) => { getLinks2('annual_account', res); });
router.get("/grievance_redressal_cell", (req, res) => { getLinks2('grievance_redressal_cell', res); });
router.get("/press_releases", (req, res) => { getLinks2('press_releases', res); });
router.get("/internal_circulars", (req, res) => { getLinks2('internal_circulars', res); });
router.get("/external_circulars", (req, res) => { getLinks2('external_circulars', res); });

router.get("/bogminutes", (req, res) => { getLinks('bog_minutes', res); });
router.get("/bogagenda", (req, res) => { getLinks('bog_agenda', res); });
router.get("/fcminutes", (req, res) => { getLinks('fc_minutes', res); });
router.get("/fcagenda", (req, res) => { getLinks('fc_agenda', res); });
router.get("/senateminutes", (req, res) => { getLinks('senate_minutes', res); });
router.get("/senateagenda", (req, res) => { getLinks('senate_agenda', res); });


module.exports = router;

