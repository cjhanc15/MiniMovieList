const express = require('express');
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Movies!')
});

app.get('/movies', (req, res) => {
  knex
  .select('*')
  .from('movielist')
  .then(data => res.status(200).json(data))
  .catch(err =>
    res.status(400).json({
      message: 'Cannot get movies'
    })
  );
});

module.exports = app;