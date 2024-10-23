const express = require('express');
const router = express.Router();

/*
  - A user should only be able to access default sessions,
  and the user's custom sessions.
  - The user's id filters the database
*/

// GET the saved session
router.get('/:id', (req, res) => {
  const sessionId = req.params.id;

  console.log("The session id is", sessionId);

  res.status(200).json({ id: sessionId });
});

// POST a new session
router.post('/', (req, res) => {
  res.status(200).json({ message: "posting a new session" });
});

router.put('/:id', (req, res) => {
  res.status(200).json({ message: "editing an existing session" });
});

router.delete('/:id', (req, res) => {
  res.status(200).json({ message: "deleting session" });
});

module.exports = router;