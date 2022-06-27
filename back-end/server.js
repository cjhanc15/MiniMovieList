const express = require('express');
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

//CREATE ------------------------------------------------------//
app.post('/movies', (req, res) => {
  knex('movielist')
  .insert(req.body)
  .then(()=> knex('movielist'))
  .then(data => res.status(200).json(data))
});

// READ -------------------------------------------------------//
app.get('/', (req, res) => {
  res.send('Movies!')
});

app.get('/movies', (req, res) => {
  knex('movielist')
  .select('*')
  .then(data => res.status(200).json(data))
  .catch(() => res.status(404).send(`Could not retrieve movies`))
})

app.get('/movies/:id', (req, res) => {
  knex('movielist')
      .where('id', req.params.id)
      .then(data => res.status(200).json(data))
      .catch(() => res.status(404).send(`Could not retrieve movie at movie id ${req.params.id}`))
});

// UPDATE ------------------------------------------------------//
app.patch('/movies/:id', (req, res) => {
  knex('movielist')
  .where({id: req.params.id})
  .update(req.body)  
  .then(()=> knex('movielist'))
  .then(data => res.status(200).json(data))
})

// DELETE ------------------------------------------------------//
app.delete('/movies/:id', (req, res) => {
  knex('movielist')
  .delete()
  .where({id: req.params.id})
  .then(data => res.status(200))
})

module.exports = app;