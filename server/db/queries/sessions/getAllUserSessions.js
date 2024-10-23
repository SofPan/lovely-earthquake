
const db = require("../../connection");

const getAllUserSessions = userId => {
  const value = [userId]

  // const query = `
  //   SELECT *
  //   FROM sessions
  //   JOIN users ON sessions.user_id = users.id
  //   WHERE user_id = $1;
  // `;
  const query = `
    SELECT *
    FROM sittings
    WHERE user_id = $1;
  `;

  return db.query(query, value)
    .then(results => {
      console.log("results", results);
      return results.rows;
    })
    .catch(error => console.log("getAllUserSessions query error", error));
}

module.exports = { getAllUserSessions }