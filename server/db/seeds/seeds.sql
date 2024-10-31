INSERT INTO users (email, password, created_at, last_login) VALUES
('admin@email.com', '123', NOW(), NOW()),
('user@email.com', '123', NOW(), NOW()),
('user2@email.com', '123', NOW(), NOW()),
('user3@email.com', '123', NOW(), NOW());

INSERT INTO sessions (user_id, session_name, session_type, duration, breathing_in_time, breathing_out_time, hold_time, is_saved, created_at, updated_at)
VALUES
  (1, 'Admin Test', 'PRESET', 300000, 4000, 6000, 4000, false, '2024-01-05 08:00:00', '2024-01-05 08:00:00'),
  (1, 'Admin Test 2', 'CUSTOM', 600000, 5000, 5000, 2000, true, '2024-01-06 09:00:00', '2024-01-06 09:00:00'),
  (1, 'Anxiety Reducer', 'PRESET', 900000, 4000, 8000, 7000, false, '2024-01-07 10:00:00', '2024-01-07 10:00:00'),
  (2, 'USER Test 1', 'CUSTOM', 600000, 5000, 5000, 0, true, '2024-01-06 09:00:00', '2024-01-06 09:00:00'),
  (2, 'USER Test 2', 'CUSTOM', 300000, 5000, 5000, 1000, true, '2024-01-06 09:00:00', '2024-01-06 09:00:00');

  INSERT INTO historic_sessions (user_id, session_id, session_date)
VALUES
  (1, 1, '2024-01-05'),
  (1, 2, '2024-01-06'),
  (1, 2, '2024-01-07'),
  (1, 1, '2024-01-08'),
  (1, 1, '2024-01-09'),
  (2, 2, '2024-01-06'),
  (2, 3, '2024-01-07'),
  (3, 2, '2024-01-07');
