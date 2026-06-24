const router = require("express").Router();
const pool = require("../config/db");

router.post("/", async (req, res) => {
  try {
    await pool.query(
      "INSERT INTO visitors () VALUES ()"
    );

    res.json({
      success: true
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false
    });
  }
});

module.exports = router;