const express = require('express');
const router = express.Router();

const { getAllUserSessions } = require('../db/queries/sessions/getAllUserSessions');
const { getSessionById } = require('../db/queries/sessions/getSessionById')
/*
  - A user should only be able to access default sessions,
  and the user's custom sessions.
  - The user's id filters the database
*/

// GET all available sessions for the current user

router.get('/', (req, res) => {
  const userId = req.session.userId;
  getAllUserSessions(userId)
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      console.error('Error fetching sessions:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
})

// GET the saved session
router.get('/:id', (req, res) => {
  const sessionId = req.params.id;
  const userId = req.session.userId;

  getSessionById(sessionId)
    .then(data => {
      if (data.user_id === 1 || data.user_id === userId) {
        res.json(data);
      } else {
        throw new Error()
      }
    })
    .catch(error => {
      console.error('Error fetching sessions:', error);
      res.status(500).json({ error: 'You do not have access to this page' });
    });
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