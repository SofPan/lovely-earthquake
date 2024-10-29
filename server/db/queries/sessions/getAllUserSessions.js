
const db = require("../../connection");
const getAllUserSessions = async userId => {
  const value = [userId]

  const query = `
    SELECT *
    FROM sessions
    WHERE user_id = $1
    ;
  `;

  return db.query(query, value)
    .then(results => {
      console.log("results", results);
      return results.rows;
    })
    .catch(error => console.log("getAllUserSessions query error", error));
}

module.exports = { getAllUserSessions }