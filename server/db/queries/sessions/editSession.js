
const db = require("../../connection");

const editSession = (params) => {
  const value = [
    params.id,
    params.name,
    params.duration,
    params.breathe_in,
    params.breathe_out
  ]
  const query = `
    UPDATE sessions
    SET session_name = $2, duration = $3, breathe_in_time = $4, breathe_out_time = $5, updated_at = NOW()
    WHERE sessions.id = $1;
  `;

  return db.query(query, value)
    .then(results => {
      return results;
    })
    .catch(error => console.error('editSession query error', error));
}

module.exports = { editSession }