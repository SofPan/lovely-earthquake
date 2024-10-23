const express = require('express');
const router = express.Router();

const { getUserSessionHistory } = require('../db/queries/historic_sessions/getUserSessionHistory');

router.get('/', (req, res) => {
  const userId = req.session.userId;
  getUserSessionHistory(userId)
    .then(data => res.json(data))
    .catch(error => {
      console.error("Error retrieving user session history", error);
      res.status(500).json("Error retrieving historic data");
    })
});

module.exports = router;