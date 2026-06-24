require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/visitor", require("./routes/visitorRoutes"));
app.use("/api/test", require("./routes/testRoutes"));
app.use("/api/messages", require("./routes/messageRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));

// Root
app.get("/", (req, res) => {
  res.json({ message: "Portfolio API Running" });
});

// Start server LAST
app.listen(5000, () => {
  console.log("Server running on port 5000");
});