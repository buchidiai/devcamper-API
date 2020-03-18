const express = require("express");

const router = express.Router();

let param = null;

router.get("/", (req, res) => {
  res.status(200).json({ success: true, msg: "Show all bootcamps" });
});

router.get("/:id", (req, res) => {
  param = req.params.id;
  res.status(200).json({ success: true, msg: `get bootcamp ${param}` });
});

router.post("/", (req, res) => {
  res.status(200).json({ success: true, msg: `Create new bootcamp` });
});

router.put("/:id", (req, res) => {
  param = req.params.id;
  res.status(200).json({ success: true, msg: `Update bootcamp ${param}` });
});

router.delete("/:id", (req, res) => {
  param = req.params.id;
  res.status(200).json({ success: true, msg: `delete bootcamp ${param}` });
});

module.exports = router;
