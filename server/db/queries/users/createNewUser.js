
const db = require("../../connection");
const createNewUser = async params => {
  const value = [
    params.email,
    params.password,
  ]

  const query = `
    INSERT INTO users (email, password, created_at, last_login) VALUES
    ($1, $2, NOW(), NOW())
    RETURNING *;
  `;

  return db.query(query, value)
    .then(results => {
      return results;
    })
    .catch(error => console.log("createNewUser query error", error));
}

module.exports = { createNewUser }