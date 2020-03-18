const express = require("express");
const dotenv = require("dotenv");

//Load
dotenv.config({ path: "./config/config.env" });

const app = express();

let param = null;

app.get("/api/v1/bootcamps", (req, res) => {
  res.status(200).json({ success: true, msg: "Show all bootcamps" });
});

app.get("/api/v1/bootcamps/:id", (req, res) => {
  param = req.params.id;
  res.status(200).json({ success: true, msg: `get bootcamp ${param}` });
});

app.post("/api/v1/bootcamps", (req, res) => {
  res.status(200).json({ success: true, msg: `Create new bootcamp` });
});

app.put("/api/v1/bootcamps/:id", (req, res) => {
  param = req.params.id;
  res.status(200).json({ success: true, msg: `Update bootcamp ${param}` });
});

app.delete("/api/v1/bootcamps/:id", (req, res) => {
  param = req.params.id;
  res.status(200).json({ success: true, msg: `delete bootcamp ${param}` });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
