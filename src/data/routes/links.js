const express = require("express");
const pool = require("../connection");
const router = express.Router();


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
router.get("/bogminutes", (req, res) => { getLinks2('bog_minutes', res); });
router.get("/bogagenda", (req, res) => { getLinks2('bog_agenda', res); });
router.get("/fcminutes", (req, res) => { getLinks2('fc_minutes', res); });
router.get("/fcagenda", (req, res) => { getLinks2('fc_agenda', res); });
router.get("/senateminutes", (req, res) => { getLinks2('senate_minutes', res); });
router.get("/senateagenda", (req, res) => { getLinks2('senate_agenda', res); });
router.get("/bwcminutes", (req, res) => { getLinks2('bwc_minutes', res); });
router.get("/bwcagenda", (req, res) => { getLinks2('bwc_agenda', res); });
router.get("/academiccalander", (req, res) => { getLinks2('academic_calander', res); });


module.exports = router;

