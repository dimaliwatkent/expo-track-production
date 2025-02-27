const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const corsOptions = require("./config/corsOptions.js");

const PORT = 3020;
app.use(express.json());
app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
