const express = require("express");
const router = express.Router();
const {
  createVoting,
  joinVoting,
  getVoting,
} = require("../controllers/votingController");

router.post("/create", createVoting);
router.post("/join", joinVoting);
router.get("/:id", getVoting);

module.exports = router;
