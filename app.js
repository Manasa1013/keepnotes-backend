const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.json({
    taskList: [
      {
        id: 2,
        title: "planning",
        task: "elaborating"
      }
    ]
  });
});

module.exports = router;
