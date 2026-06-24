const router = require("express").Router();
const pool = require("../config/db");

router.post("/", async (req, res) => {
  try {
    const {
      name,
      email,
      subject,
      message
    } = req.body;

    await pool.query(
      `
      INSERT INTO messages
      (name,email,subject,message)
      VALUES (?,?,?,?)
      `,
      [
        name,
        email,
        subject,
        message
      ]
    );

    res.json({
      success: true,
      message: "Message Sent Successfully"
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false
    });
  }
});

module.exports = router;