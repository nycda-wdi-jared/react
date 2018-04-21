const api = module.exports = require('express').Router()
const users = require('./users');
// const reviews = require('./reviews');
// // import products from './products';
api
  .get('/express-test', (req, res) => res.send({express: 'working!'})) //demo route to prove api is working
   .use('/users', users)
//   .use('/reviews', reviews)
// // No routes matched? 404.
api.use((req, res) => res.status(404).end())
