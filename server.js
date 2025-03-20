const express = require("express");
const cors = require("cors");

const studentRoutes = require("./routes/studentRoutes");

const app = express();

app.use(cors());
app.use(express.json()); // Allows JSON request bodies

// Set up the student API route
app.use("/api/students", studentRoutes);

// Start the server
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
