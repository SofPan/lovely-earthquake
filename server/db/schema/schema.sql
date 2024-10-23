DROP TABLE IF EXISTS historic_sittings CASCADE;
DROP TABLE IF EXISTS sittings CASCADE;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_login TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE sittings (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  sitting_name TEXT,
  sitting_type TEXT,
  duration INTEGER DEFAULT 0, -- Time in milliseconds, 0 for indefinite
  breathing_in_time INTEGER, -- Time in milliseconds
  breathing_out_time INTEGER, -- Time in milliseconds
  is_saved BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE historic_sittings (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  sitting_id INTEGER REFERENCES sittings(id) ON DELETE CASCADE,
  sitting_date DATE
);