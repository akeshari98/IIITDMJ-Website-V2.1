const express = require("express");
const pool = require("../connection");
const router = express.Router();

// Utility function to get committee data
const withAddress = async (committee, res) => {
  try {
    const query = `
      SELECT image,address,name,contact,people.mail,positions.mail,role,imp, 
             COALESCE(positions.mail, people.mail) AS mail 
      FROM people
      JOIN positions ON people.id = positions.id 
      WHERE positions.position_type = $1
      ORDER BY imp;
    `;
    const result = await pool.query(query, [committee]);

    // Map through the results and convert the image binary data to Base64
    const formattedResults = result.rows.map((row) => {
      if (row.image) {
        // Convert the binary data to Base64
        const base64Image = Buffer.from(row.image).toString('base64');
        return {
          ...row,
          image: base64Image, // Use 'image' as your image column name
        };
      }
      return row; // Return row without modification if there's no image
    });

    res.json(formattedResults);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

const withoutAddress = async (committee, res) => {
  try {
    const query = `
      SELECT image,name,contact,people.mail,positions.mail,role,imp, 
             COALESCE(positions.mail, people.mail) AS mail 
      FROM people
      JOIN positions ON people.id = positions.id 
      WHERE positions.position_type = $1
      ORDER BY imp;
    `;
    const result = await pool.query(query, [committee]);

    // Map through the results and convert the image binary data to Base64
    const formattedResults = result.rows.map((row) => {
      if (row.image) {
        // Convert the binary data to Base64
        const base64Image = Buffer.from(row.image).toString('base64');
        return {
          ...row,
          image: base64Image, // Use 'image' as your image column name
        };
      }
      return row; // Return row without modification if there's no image
    });

    res.json(formattedResults);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

const professors = async (committee, res) => {
  try {
    const query = `
      SELECT p.image, p.name, p.contact, p.mail AS people_mail, pos.mail AS positions_mail,
        pos.role, pos.position_type, COALESCE(pos.mail, p.mail) AS mail
        FROM people p
        JOIN positions pos ON p.id = pos.id
        WHERE pos.position_type = $1
          AND NOT EXISTS (
              SELECT 1
              FROM positions pos2
              WHERE pos2.id = p.id
              AND pos2.position_type IN ('dean', 'hod', 'director')
          )
        ORDER BY p.name;
    `;
    const result = await pool.query(query, [committee]);

    // Map through the results and convert the image binary data to Base64
    const formattedResults = result.rows.map((row) => {
      if (row.image) {
        // Convert the binary data to Base64
        const base64Image = Buffer.from(row.image).toString('base64');
        return {
          ...row,
          image: base64Image, // Use 'image' as your image column name
        };
      }
      return row; // Return row without modification if there's no image
    });

    res.json(formattedResults);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

router.get("/boardofgoverners", (req, res) => { withAddress('board_of_governers', res); })
router.get("/financecommittee", (req, res) => { withAddress('finance_committee', res); })
router.get("/buildingworks", (req, res) => { withAddress('building_works', res); })
router.get("/special", (req, res) => { withAddress('senate_special', res); })

router.get("/director", (req, res) => { withoutAddress('director', res); })
router.get("/deans", (req, res) => { withoutAddress('dean', res); })
router.get("/hods", (req, res) => { withoutAddress('hod', res); })
router.get("/registrar", (req, res) => { withoutAddress('registrar', res); })
router.get("/cc", (req, res) => { withoutAddress('councelling_cell', res); })
router.get("/tp", (req, res) => { withoutAddress('training&placement', res); })
router.get("/iic", (req, res) => { withoutAddress('IIC', res); })
router.get("/alumni", (req, res) => { withoutAddress('alumni_cell', res); })
router.get("/comm", (req, res) => { withoutAddress('communication_cell', res); })
router.get("/audit", (req, res) => { withoutAddress('audit', res); })
router.get("/cpio", (req, res) => { withoutAddress('CPIO', res); })
router.get("/rspc", (req, res) => { withoutAddress('RSPC', res); })
router.get("/academics", (req, res) => { withoutAddress('academics', res); })
router.get("/registrar_f&a", (req, res) => { withoutAddress('registrar_f&a', res); })
router.get("/profs", (req, res) => { professors('professor', res); })



module.exports = router;


