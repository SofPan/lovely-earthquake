const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: "arriving at login page" })
});

router.post('/', (req, res) => {
  res.status(200).json({ message: "submitting login form" })
});

module.exports = router;