const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  req.session.userId = null;
  res.status(200).json("Logged Out");
});

module.exports = router;