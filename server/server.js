const express = require('express');

const morgan = require('morgan');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const sessionRoutes = require('./routes/session');

app.use('/session', sessionRoutes);

app.get('/', (req, res) => {
  res.status(200).json();
})


app.listen(PORT, () => {
  console.log(`Server listening on the port  ${PORT}`);
});