const express = require('express');
const cookieSession = require('cookie-session');

const morgan = require('morgan');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(cookieSession({
  name: 'session',
  keys: ["replaceMe"],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

const loginRoute = require('./routes/login');
const logoutRoute = require('./routes/logout');
const registerRoute = require('./routes/register');
const sessionRoute = require('./routes/session');
const historyRoute = require('./routes/history');

app.use('/login', loginRoute);
app.use('/logout', logoutRoute);
app.use('/register', registerRoute);
app.use('/session', sessionRoute);
app.use('/history', historyRoute);

app.get('/', (req, res) => {
  res.status(200).json("Landing Page");
})


app.listen(PORT, () => {
  console.log(`Server listening on the port  ${PORT}`);
});