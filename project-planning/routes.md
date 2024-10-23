# Meditation App Routes

| HTTP Method | URL Pattern | Use |
|-------------|-------------|-----|
| GET | / | Landing |
| GET | /session/:id | Start a specific timing|
| POST | /session | Save a custom meditation with the user's inputted settings|
| PUT | /session/:id | Edit a user's custom session |
| DELETE | /session/:id | Delete a user's custom session |
| GET | /history | Retrieve the user's session history|
| GET | /login | Login page/form |
| POST | /login | User login |
| GET | /logout | End user session |
| GET | /register | Registration form |
| POST | /register | Submit registration |