'use strict';
require('dotenv').config();
require('./config/database').connect();

const express = require('express');
const bcrypt = require('bcryptjs');
const app = express();
const User = require('./model/user');
const { API_PORT } = process.env;

app.use(express.json());
app.get('/', (req, res) => {
  res.send('got it');
});
// Create user
app.get('/user', (req, res) => { 
  // get all users
});
// Get one user
app.get('/users', (req, res) => {
  // get user with find method and compare method with bcrypt
  // compare password
  // bcrypt.compare(password, hash, (err, result) => {
  //   if (result) {
  //     console.log('authenticated');
  //   } else {
  //     console.log('not authenticated');
  //   }
  // });
});
app.post('/user', (req,res) => {
  // username and password logic will go here
})
app.put('/user', (req,res) => {
  // update username and password
})
app.delete('/user', (req,res) => {
  // delete username and password
})
// USERNAME and Password encyption
// const saltRounds = 10;
// let password = 'Fkdj^45ci@Jad';
// let hash = 'hi'

// bcrypt.genSalt(saltRounds, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     // store in DB
//   });
// });

const port = process.env.PORT || API_PORT;

app.listen(port, () => {
  console.log('running');
});
