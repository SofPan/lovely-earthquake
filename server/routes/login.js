require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: "arriving at login page" })
});

router.post('/', (req, res) => {
  req.session.userId = 1;
  res.status(200).json({ message: "submitting login form" })
});

module.exports = router;