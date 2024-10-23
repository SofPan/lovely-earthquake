const express = require('express');
const router = express.Router();

const { createNewUser } = require('../db/queries/users/createNewUser')

router.get('/', (req, res) => {
  res.status(200).json({ message: "arriving at registration form" })
});

router.post('/', (req, res) => {
  createNewUser(req.body)
    .then(result => result)
    .catch(error => {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'User could not be created' });
    });
});

module.exports = router;