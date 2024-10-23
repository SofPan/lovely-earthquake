
const db = require("../../connection");
const createNewSession = async params => {
  const value = [
    params.userId,
    params.name,
    params.duration,
    params.breathe_in,
    params.breathe_out
  ]

  const query = `
    INSERT INTO sessions (user_id, session_name, session_type, duration, breathing_in_time, breathing_out_time, is_saved, created_at, updated_at) VALUES
    ($1, $2, "CUSTOM", $3, $4, $5, true, NOW(), NOW())
    RETURNING *;
  `;

  return db.query(query, value)
    .then(results => {
      return results;
    })
    .catch(error => console.log("createNewSession query error", error));
}

module.exports = { createNewSession }