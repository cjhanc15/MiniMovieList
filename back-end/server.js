const express = require('express');
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json());

//CREATE ------------------------------------------------------//
app.post('/movies', async (req, res) => {
  await knex('movielist')
  .insert(req.body)
  let result = await knex('movielist')
  .select('*')
  res.send(result);
})

// READ -------------------------------------------------------//
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

// //UPDATE ------------------------------------------------------//
// app.patch('/movies', (req, res) => {
// })

// DELETE ------------------------------------------------------//
app.delete('/movies', async (req, res) => {
let result = await knex('movielist')
  .del()
  .where(req.body.id)
await knex('movielist')
  .select('*')
  res.status(200)
  res.send(result);
})

module.exports = app;