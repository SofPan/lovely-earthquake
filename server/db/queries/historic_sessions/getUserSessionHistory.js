
const db = require("../../connection");
const getUserSessionHistory = async userId => {
  const value = [userId]

  const query = `
    SELECT *
    FROM historic_sessions
    JOIN users ON users.id = historic_sessions.user_id
    WHERE user_id = $1
    ;
  `;

  return db.query(query, value)
    .then(results => {
      console.log("results", results);
      return results.rows;
    })
    .catch(error => console.log("getUserSessionHistory query error", error));
}

module.exports = { getUserSessionHistory }