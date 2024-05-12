const express = require("express");
const router = express.Router();
const voteController = require("../controllers/voteController");

router.post("/vote", voteController.addVote);

router.get("/vote/results", voteController.getVoteResults);

module.exports = router;
