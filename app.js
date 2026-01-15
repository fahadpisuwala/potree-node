const express = require("express");

const app = express();

app.use(express.json());

// routes
app.use("/api/annotations", require("./routes/route"));

module.exports = app;
