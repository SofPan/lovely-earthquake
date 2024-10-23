const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: "arriving at registration form" })
});

router.post('/', (req, res) => {
  res.status(200).json({ message: "submitting registration form" })
});

module.exports = router;