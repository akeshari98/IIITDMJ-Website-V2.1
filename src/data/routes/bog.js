const express = require("express");
const pool = require("../connection")
const router = express.Router();

// Get all feedbacks
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM people,board_of_governers WHERE people.id=board_of_governers.id ORDER BY role ASC");

    // Map through the results and convert the image binary data to Base64
    const formattedResults = result.rows.map((row) => {
      if (row.image) { // Check if the image exists
        // Convert the binary data to Base64
        const base64Image = Buffer.from(row.image).toString('base64');
        // Return the modified row with the Base64 image
        return {
          ...row,
          image: base64Image // Use 'profile_image' as your image column name
        };
      }
      return row; // Return the row without modification if there's no image
    });

    res.json(formattedResults);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
