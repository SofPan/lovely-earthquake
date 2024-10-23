
const db = require("../../connection");
const getSessionById = async (sessionId) => {
  const value = [sessionId]

  // admin queries always show for users as these are the preset (User id 1)
  const query = `
    SELECT *
    FROM sessions
    WHERE id = $1;
  `;

  return db.query(query, value)
    .then(results => {
      console.log("results", results);
      return results.rows[0];
    })
    .catch(error => console.log("getSessionById query error", error));
}

module.exports = { getSessionById }