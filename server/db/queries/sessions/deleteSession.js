
const db = require("../../connection");
const deleteSession = async sessionId => {
  const value = [sessionId]

  const query = `
    DELETE FROM sessions
    WHERE id = $1;
  `;

  return db.query(query, value)
    .then(results => {
      return results;
    })
    .catch(error => console.log("deleteSession query error", error));
}

module.exports = { deleteSession }