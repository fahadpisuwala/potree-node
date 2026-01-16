const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());


// routes
app.use("/api/annotations", require("./routes/route"));

module.exports = app;
